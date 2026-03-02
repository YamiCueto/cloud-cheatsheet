import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CodeExample { label: string; code: string; output?: string; }

interface Challenge {
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  title: string;
  description: string;
  hints: string[];
  starterCode: string;
  expectedOutput: string;
  color: string;
  difficultyColor: string;
}

@Component({
  selector: 'app-l1-data-viz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-data-viz.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1DataVizComponent {
  currentSlide = 0;
  selectedChallenge = 0;

  slides = [
    { type: 'title' },
    { type: 'why-dataviz' },
    { type: 'missing-values' },
    { type: 'outliers' },
    { type: 'feature-engineering' },
    { type: 'matplotlib-basics' },
    { type: 'seaborn-charts' },
    { type: 'pandas-profiling' },
    { type: 'challenge' },
    { type: 'summary' },
  ];

  missingStrategies = [
    { name: 'Eliminar filas', icon: '🗑️', code: 'df.dropna()', when: 'Menos del 5% de datos; datos MCAR', risk: 'Bajo si <5%' },
    { name: 'Media/Mediana', icon: '📊', code: 'df.fillna(df.mean())', when: 'Variables numéricas con distribución normal', risk: 'Reduce varianza' },
    { name: 'Moda', icon: '📝', code: 'df.fillna(df.mode()[0])', when: 'Variables categóricas', risk: 'Introduce sesgo' },
    { name: 'Interpolación', icon: '📈', code: 'df.interpolate()', when: 'Series temporales', risk: 'Asume linearidad' },
    { name: 'KNN Imputer', icon: '🤖', code: 'KNNImputer(n_neighbors=5)', when: 'Datos MAR con estructura', risk: 'Computacionalmente caro' },
    { name: 'MICE/IterImputer', icon: '🧠', code: 'IterativeImputer()', when: 'Datos complejos MAR', risk: 'Más lento, mejor resultado' },
  ];

  outlierExamples: CodeExample[] = [
    {
      label: '📐 Método IQR',
      code: `import pandas as pd
import numpy as np

df = pd.DataFrame({'salary': [30, 35, 40, 42, 45, 50, 55, 999_999]})

Q1 = df['salary'].quantile(0.25)
Q3 = df['salary'].quantile(0.75)
IQR = Q3 - Q1

limite_inf = Q1 - 1.5 * IQR
limite_sup = Q3 + 1.5 * IQR

outliers = df[(df['salary'] < limite_inf) | (df['salary'] > limite_sup)]
print("Outliers encontrados:", outliers.shape[0])

# Winsorizing — cap en lugar de eliminar
df['salary_capped'] = df['salary'].clip(lower=limite_inf, upper=limite_sup)
print(df[['salary', 'salary_capped']])`,
      output: `Outliers encontrados: 1\n   salary  salary_capped\n7  999999       62.5`
    },
    {
      label: '📊 Z-Score',
      code: `from scipy import stats
import numpy as np
import pandas as pd

datos = np.array([10, 12, 11, 13, 10, 500, 11, 12])
z_scores = np.abs(stats.zscore(datos))

# Umbral estándar: |z| > 3
mask_outlier = z_scores > 3
print("Índices outlier:", np.where(mask_outlier)[0])
print("Valores outlier:", datos[mask_outlier])

# En DataFrame
df = pd.DataFrame({'valor': datos})
df['z_score'] = z_scores
df['es_outlier'] = mask_outlier
print(df[df['es_outlier']])`,
      output: `Índices outlier: [5]\nValores outlier: [500]\n   valor   z_score  es_outlier\n5    500  2.645...        True`
    }
  ];

  matplotlibExamples: CodeExample[] = [
    {
      label: '📊 Histograma + Densidad',
      code: `import matplotlib.pyplot as plt
import numpy as np

np.random.seed(42)
datos = np.random.normal(50, 15, 500)

fig, ax = plt.subplots(figsize=(8, 4))
ax.hist(datos, bins=30, density=True, alpha=0.7,
        color='steelblue', edgecolor='white')

# Curva KDE superpuesta
from scipy.stats import gaussian_kde
kde = gaussian_kde(datos)
x = np.linspace(datos.min(), datos.max(), 200)
ax.plot(x, kde(x), 'r-', lw=2, label='KDE')

ax.axvline(datos.mean(), color='orange', ls='--', label=f'Media: {datos.mean():.1f}')
ax.set_xlabel('Valor'); ax.set_ylabel('Densidad')
ax.set_title('Distribución con KDE')
ax.legend(); plt.tight_layout(); plt.show()`,
      output: `# Muestra histograma con curva KDE superpuesta y línea de media`
    },
    {
      label: '🔲 Subplots para EDA',
      code: `import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    'edad': np.random.normal(35, 10, 300).clip(18, 70),
    'salario': np.random.lognormal(10.5, 0.6, 300),
    'score': np.random.uniform(0, 100, 300),
    'categoria': np.random.choice(['A','B','C'], 300)
})

fig, axes = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle('EDA Dashboard', fontsize=14, fontweight='bold')

# Histograma edad
axes[0,0].hist(df['edad'], bins=20, color='steelblue', edgecolor='white')
axes[0,0].set_title('Distribución Edad')

# Boxplot salario
axes[0,1].boxplot(df['salario'], vert=True, patch_artist=True)
axes[0,1].set_title('Boxplot Salario')

# Scatter edad vs score
axes[1,0].scatter(df['edad'], df['score'], alpha=0.4, c='teal', s=15)
axes[1,0].set_title('Edad vs Score')

# Barplot categoría
df['categoria'].value_counts().plot(kind='bar', ax=axes[1,1],
    color=['#3b82f6','#f59e0b','#10b981'])
axes[1,1].set_title('Distribución Categoría')

plt.tight_layout(); plt.show()`,
      output: `# Genera dashboard 2x2 con histograma, boxplot, scatter y barplot`
    }
  ];

  seabornExamples: CodeExample[] = [
    {
      label: '🔥 Heatmap de Correlación',
      code: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

np.random.seed(42)
df = pd.DataFrame(np.random.randn(100, 5),
                  columns=['feature_1','feature_2','feature_3',
                           'feature_4','target'])
# Correlación artificial
df['feature_2'] = df['feature_1'] * 0.9 + np.random.randn(100) * 0.1

corr = df.corr()

plt.figure(figsize=(7, 5))
sns.heatmap(corr,
            annot=True, fmt='.2f',
            cmap='coolwarm', center=0,
            square=True, linewidths=0.5,
            cbar_kws={'shrink': 0.8})
plt.title('Matriz de Correlación')
plt.tight_layout(); plt.show()`,
      output: `# Heatmap con anotaciones y escala coolwarm — feature_1/feature_2: ~0.90`
    },
    {
      label: '🎻 Pairplot + Violin',
      code: `import seaborn as sns
import matplotlib.pyplot as plt

# Pairplot — relaciones entre todas las variables
tips = sns.load_dataset('tips')
g = sns.pairplot(tips, hue='sex',
                 vars=['total_bill','tip','size'],
                 diag_kind='kde', plot_kws={'alpha': 0.5})
g.fig.suptitle('Pairplot Tips Dataset', y=1.02)
plt.show()

# Violin — distribución por categoría
fig, ax = plt.subplots(figsize=(8, 4))
sns.violinplot(data=tips, x='day', y='total_bill',
               hue='sex', split=True,
               palette='muted', inner='quartile', ax=ax)
ax.set_title('Total Bill por Día y Género')
plt.tight_layout(); plt.show()`,
      output: `# Pairplot con KDE diagonal + Violin split por sexo`
    }
  ];

  activeOutlierTab = 0;
  activeMatplotlibTab = 0;
  activeSeabornTab = 0;

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Pipeline de Limpieza',
      description: 'Limpia un dataset sucio con valores faltantes, duplicados y outliers. Aplica estrategias apropiadas para cada tipo de problema y documenta cuántos registros se modificaron en cada paso.',
      hints: [
        'Usa df.info() y df.describe() para inspección inicial',
        'df.duplicated().sum() para contar duplicados',
        'Método IQR para detectar outliers: Q1-1.5*IQR, Q3+1.5*IQR',
        'Registra shape antes y después de cada operación'
      ],
      starterCode: `import pandas as pd
import numpy as np

np.random.seed(42)
n = 500
df = pd.DataFrame({
    'age':    np.random.normal(35, 10, n),
    'salary': np.random.lognormal(10, 0.5, n),
    'city':   np.random.choice(['Madrid', 'BCN', None, 'SEV'], n),
    'score':  np.random.uniform(0, 100, n)
})

# Introduce problemas
df.loc[::10, 'age'] = np.nan          # 10% missing en age
df.loc[::20, 'salary'] = np.nan       # 5% missing en salary
df = pd.concat([df, df.iloc[:20]])    # 20 duplicados
df.loc[:5, 'salary'] = 9_999_999      # outliers extremos

print("=== ANTES ===")
print(df.shape, df.isna().sum().to_dict())

# TODO: 1) Eliminar duplicados
# TODO: 2) Tratar outliers en salary (winsorizing o eliminar)
# TODO: 3) Imputar age con la mediana
# TODO: 4) Imputar city con la moda
print("=== DESPUÉS ===")
print(df.shape)`,
      expectedOutput: `=== ANTES ===
(520, 4) {'age': 52, 'salary': 26, 'city': 128, 'score': 0}
=== DESPUÉS ===
(500, 4) — sin NaN, sin duplicados, sin outliers extremos`,
      color: 'border-l-green-400',
      difficultyColor: 'bg-green-100 text-green-800',
    },
    {
      difficulty: 'Intermedio',
      title: 'Feature Engineering Temporal',
      description: 'Dado un dataset de ventas con columna de fecha, extrae todas las features temporales útiles para ML: partes de fecha, lags, rolling means, y variables cíclicas (sin/cos encoding para mes y día de semana).',
      hints: [
        'pd.to_datetime() para parsear fechas',
        'dt.month, dt.dayofweek, dt.quarter, dt.is_month_end',
        'df.shift(n) para lags, df.rolling(7).mean() para rolling',
        'Encoding cíclico: sin(2π * mes/12), cos(2π * mes/12)'
      ],
      starterCode: `import pandas as pd
import numpy as np

np.random.seed(42)
fechas = pd.date_range('2020-01-01', periods=730, freq='D')
tendencia = np.linspace(100, 200, 730)
estacionalidad = 20 * np.sin(2 * np.pi * np.arange(730) / 365)
ventas = tendencia + estacionalidad + np.random.randn(730) * 5

df = pd.DataFrame({'fecha': fechas, 'ventas': ventas})

# TODO: Extrae features temporales
# - Mes, día de semana, trimestre, día del año
# - lag_7, lag_30, lag_365
# - rolling_mean_7, rolling_mean_30
# - sin/cos encoding para mes y día semana

print(df.columns.tolist())
print(df.head())`,
      expectedOutput: `['fecha', 'ventas', 'mes', 'dia_semana', 'trimestre',
 'lag_7', 'lag_30', 'rolling_7', 'rolling_30',
 'mes_sin', 'mes_cos', 'dia_sin', 'dia_cos']`,
      color: 'border-l-yellow-400',
      difficultyColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      difficulty: 'Avanzado',
      title: 'EDA Automatizado',
      description: 'Crea una función de EDA automatizado que genere un reporte completo: estadísticas descriptivas, análisis de missing values, distribuciones, correlaciones y detección de problemas (alta cardinalidad, alta correlación, features constantes).',
      hints: [
        'Separa columns numéricas y categóricas con select_dtypes()',
        'Correlación alta: |r| > 0.95 entre features (multicolinealidad)',
        'Features constantes: nunique() == 1 o std() == 0',
        'Alta cardinalidad categórica: nunique() > 50% de filas'
      ],
      starterCode: `import pandas as pd
import numpy as np

def eda_report(df: pd.DataFrame, target: str = None) -> dict:
    """Genera un reporte EDA completo."""
    report = {}

    # 1. Info básica
    report['shape'] = df.shape
    report['dtypes'] = df.dtypes.value_counts().to_dict()

    # 2. Missing values
    missing = df.isna().sum()
    report['missing'] = missing[missing > 0].to_dict()

    # TODO: 3. Features problemáticas
    # - Constantes (std==0 o nunique==1)
    # - Alta cardinalidad categórica
    # - Alta correlación entre numéricas (|r| > 0.95)

    # TODO: 4. Si hay target, correlación con features numéricas

    # TODO: 5. Outliers (IQR method) por feature numérica

    return report

# Test con dataset sintético
np.random.seed(42)
df_test = pd.DataFrame({...})  # Crea dataset con los problemas mencionados
resultado = eda_report(df_test, target='y')
for k, v in resultado.items():
    print(f"{k}: {v}")`,
      expectedOutput: `shape: (1000, 10)
missing: {'edad': 45, 'ciudad': 102}
constantes: ['feature_constante']
alta_cardinalidad: ['id_usuario']
alta_correlacion: [('f1', 'f2', 0.97)]
outliers: {'salario': 23, 'score': 8}`,
      color: 'border-l-red-400',
      difficultyColor: 'bg-red-100 text-red-800',
    },
  ];

  nextStation = {
    name: 'Git & Version Control',
    route: '/metro-map-ai/l1-git',
    description: 'Domina Git para ML: branching strategies, colaboración en equipo, y gestión de experimentos con control de versiones.',
  };

  nextSlide() { if (this.currentSlide < this.slides.length - 1) this.currentSlide++; }
  prevSlide() { if (this.currentSlide > 0) this.currentSlide--; }
  goToSlide(i: number) { this.currentSlide = i; }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { this.nextSlide(); event.preventDefault(); }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') { this.prevSlide(); event.preventDefault(); }
  }
}
