import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CodeExample {
  label: string;
  code: string;
  output?: string;
}

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
  selector: 'app-l1-numpy-pandas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-numpy-pandas.component.html',
  styleUrls: ['../../shared-presentation.css', './l1-numpy-pandas.component.css']
})
export class L1NumpyPandasComponent {
  currentSlide = 0;
  selectedChallenge = 0;

  activeArrayTab = 0;
  activeOpsTab = 0;
  activePandasIntroTab = 0;
  activePandasOpsTab = 0;
  activeCleaningTab = 0;

  slides = [
    { type: 'title' },
    { type: 'why-numpy-pandas' },
    { type: 'numpy-arrays' },
    { type: 'numpy-operations' },
    { type: 'pandas-intro' },
    { type: 'pandas-operations' },
    { type: 'pandas-cleaning' },
    { type: 'performance' },
    { type: 'challenge' },
    { type: 'summary' }
  ];

  whyReasons = [
    {
      icon: '⚡',
      title: 'Velocidad C bajo capó',
      description: 'NumPy ejecuta operaciones en C/Fortran — hasta 100x más rápido que bucles Python puros.',
      color: 'border-yellow-400'
    },
    {
      icon: '🧠',
      title: 'Base de todo ML/IA',
      description: 'Pandas, Scikit-learn, TensorFlow, PyTorch — todos usan NumPy arrays internamente.',
      color: 'border-blue-400'
    },
    {
      icon: '📊',
      title: 'Datos tabulares → IA',
      description: 'Pandas transforma CSVs y bases de datos en el formato exacto que los modelos necesitan.',
      color: 'border-green-400'
    },
    {
      icon: '🔢',
      title: 'Operaciones vectorizadas',
      description: 'Aplica funciones a millones de filas sin un solo for loop. Broadcasting automático.',
      color: 'border-purple-400'
    },
    {
      icon: '🧹',
      title: 'EDA & Limpieza de datos',
      description: 'Detecta nulls, outliers, distribuciones — la realidad del dato de producción.',
      color: 'border-red-400'
    },
    {
      icon: '💼',
      title: 'Estándar de la industria',
      description: 'Todo Data Scientist y ML Engineer usa estas dos librerías a diario en producción.',
      color: 'border-orange-400'
    }
  ];

  arrayExamples: CodeExample[] = [
    {
      label: 'Crear Arrays',
      code: `import numpy as np

# Desde lista Python
a = np.array([1, 2, 3, 4, 5])
print(a)           # [1 2 3 4 5]
print(type(a))     # <class 'numpy.ndarray'>

# Arrays especializados
zeros  = np.zeros((3, 4))       # 3x4 con ceros
ones   = np.ones((2, 3))        # 2x3 con unos
eye    = np.eye(3)              # Identidad 3x3
lleno  = np.full((2, 2), 7)    # Lleno de 7

# Rangos lineales
arange   = np.arange(0, 10, 2)      # [0 2 4 6 8]
linspace = np.linspace(0, 1, 5)     # [0. 0.25 0.5 0.75 1. ]

# Arrays aleatorios (seed para reproducibilidad)
np.random.seed(42)
normal  = np.random.randn(3, 3)     # Normal(0, 1)
uniform = np.random.rand(2, 4)      # Uniforme [0, 1)
enteros = np.random.randint(0, 100, (3, 3))

print("zeros shape:", zeros.shape)
print("linspace:", linspace)`,
      output: `[1 2 3 4 5]
<class 'numpy.ndarray'>
zeros shape: (3, 4)
linspace: [0.   0.25 0.5  0.75 1.  ]`
    },
    {
      label: 'Shapes & Dtypes',
      code: `import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6]])

# Propiedades fundamentales
print(arr.shape)   # (2, 3)  → 2 filas, 3 columnas
print(arr.ndim)    # 2       → 2 dimensiones
print(arr.dtype)   # int64
print(arr.size)    # 6       → total de elementos

# Reshape — mismos datos, nueva forma
arr_col  = arr.reshape(6, 1)     # (6, 1) columna
arr_3d   = arr.reshape(1, 2, 3)  # (1, 2, 3)
arr_flat = arr.ravel()           # [1 2 3 4 5 6]

# Transponer
print(arr.T)          # (3, 2)

# Cambiar dtype
arr_float = arr.astype(np.float32)
arr_norm  = arr_float / arr_float.max()
print(arr_norm.round(2))

# Imagen para ML: (alto, ancho, canales) → batch
imagen = np.random.randint(0, 255, (28, 28, 1), dtype=np.uint8)
batch  = imagen.reshape(1, 28, 28, 1)   # batch de 1
print("batch shape:", batch.shape)`,
      output: `(2, 3)
2
int64
6
[[0.2 0.4 0.6]
 [0.8 1.0 1.2]]  ← arr_norm
batch shape: (1, 28, 28, 1)`
    },
    {
      label: 'Indexing & Slicing',
      code: `import numpy as np

arr = np.array([[10, 20, 30],
                [40, 50, 60],
                [70, 80, 90]])

# Indexing básico
print(arr[0, 1])      # 20  → fila 0, col 1
print(arr[-1, -1])    # 90  → última fila, última col

# Slicing [fila_ini:fin, col_ini:fin]
print(arr[0:2, 1:])   # [[20 30], [50 60]]
print(arr[:, 0])      # [10 40 70] — toda la col 0

# Boolean indexing — muy usado en ML
mask = arr > 45
print(arr[mask])       # [50 60 70 80 90]

# Fancy indexing (acceso no contiguo)
filas = [0, 2]
print(arr[filas])      # fila 0 y fila 2

# Modificar con máscara
arr2 = arr.copy()
arr2[arr2 < 40] = 0
print(arr2)
# [[  0   0   0]
#  [ 40  50  60]
#  [ 70  80  90]]`,
      output: `20
90
[[20 30]
 [50 60]]
[10 40 70]
[50 60 70 80 90]`
    }
  ];

  numpyOpsExamples: CodeExample[] = [
    {
      label: 'Ops Vectorizadas',
      code: `import numpy as np

# Operaciones elemento a elemento — sin for loop
a = np.array([1.0, 2.0, 3.0, 4.0])
b = np.array([10.0, 20.0, 30.0, 40.0])

print(a + b)        # [11. 22. 33. 44.]
print(a * b)        # [ 10.  40.  90. 160.]
print(a ** 2)       # [ 1.  4.  9. 16.]
print(np.sqrt(a))   # [1.   1.41 1.73 2.  ]

# Funciones universales (ufuncs)
theta = np.linspace(0, np.pi, 5)
print(np.sin(theta).round(2))   # [0. 0.71 1. 0.71 0.]
print(np.exp(-a).round(4))      # [0.3679 0.1353 0.0498 0.0183]

# Reducción (aggregation)
datos = np.array([[1, 2, 3], [4, 5, 6]])
print(datos.mean())            # 3.5  — promedio global
print(datos.mean(axis=0))      # [2.5 3.5 4.5] — por columna
print(datos.sum(axis=1))       # [ 6 15] — por fila
print(datos.std().round(2))    # 1.71`,
      output: `[11. 22. 33. 44.]
[ 10.  40.  90. 160.]
[ 1.  4.  9. 16.]
[1.   1.414 1.732 2.   ]
mean=3.5  std=1.71`
    },
    {
      label: 'Broadcasting',
      code: `import numpy as np

# Broadcasting — NumPy "estira" arrays para que sean compatibles
# Regla: se comparan dimensiones de derecha a izquierda;
#        1 es compatible con cualquier n.

# Caso 1: escalar + array
a = np.array([1, 2, 3])
print(a + 10)           # [11 12 13]

# Caso 2: (3,1) + (3,) → (3,3)
col = np.array([[0], [10], [20]])  # shape (3, 1)
row = np.array([1, 2, 3])         # shape (3,)
print(col + row)
# [[ 1  2  3]
#  [11 12 13]
#  [21 22 23]]

# Caso real: normalización Z-score para ML
X     = np.random.randn(100, 4)  # 100 muestras, 4 features
mu    = X.mean(axis=0)           # (4,) — media por feature
sigma = X.std(axis=0)            # (4,) — std por feature
X_norm = (X - mu) / sigma        # (100,4) broadcast automático

print("Media post-norm:", X_norm.mean(axis=0).round(10))  # ≈ 0
print("Std  post-norm:", X_norm.std(axis=0).round(2))     # ≈ 1`,
      output: `[11 12 13]
[[ 1  2  3]
 [11 12 13]
 [21 22 23]]
Media post-norm: [0. 0. 0. 0.]
Std  post-norm:  [1. 1. 1. 1.]`
    },
    {
      label: 'Álgebra Lineal',
      code: `import numpy as np

# Producto punto — corazón de las redes neuronales
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.dot(a, b))    # 1*4 + 2*5 + 3*6 = 32

# Multiplicación matricial (@ es shorthand de matmul)
A = np.array([[1, 2], [3, 4]])   # (2, 2)
B = np.array([[5, 6], [7, 8]])   # (2, 2)
print(A @ B)
# [[19 22]
#  [43 50]]

# Capa Densa simulada: Z = X @ W + b
X = np.random.randn(32, 128)   # batch=32, input=128
W = np.random.randn(128, 64)   # pesos
b = np.zeros(64)               # bias
Z = X @ W + b                  # (32, 64) — salida de la capa
print("Forma capa densa:", Z.shape)

# Descomposición SVD — compresión, PCA
M = np.random.randn(4, 5)
U, s, Vt = np.linalg.svd(M, full_matrices=False)
print("Valores singulares:", s.round(2))

# Determinante e inversa
print("det(A) =", np.linalg.det(A).round(1))
A_inv = np.linalg.inv(A)
print("A @ A_inv ≈ I:", (A @ A_inv).round(10))`,
      output: `32
[[19 22]
 [43 50]]
Forma capa densa: (32, 64)
Valores singulares: [3.2 2.1 1.1 0.4]
det(A) = -2.0`
    }
  ];

  pandasIntroExamples: CodeExample[] = [
    {
      label: 'Series',
      code: `import pandas as pd

# Series — array 1D etiquetado
ventas = pd.Series(
    [150, 230, 180, 290, 100],
    index=['Lun', 'Mar', 'Mié', 'Jue', 'Vie'],
    name='Ventas_Semana'
)
print(ventas)
print()
print("Total:", ventas.sum())
print("Media:", ventas.mean())
print("Máximo en:", ventas.idxmax(), "→", ventas.max())

# Acceso
print(ventas['Mar'])       # 230
print(ventas[1])           # 230 por posición
print(ventas[ventas > 170])  # filtrado booleano

# Operaciones
print(ventas.cumsum())            # suma acumulada
print(ventas.pct_change().round(2))  # variación porcentual

# Desde diccionario
scores = pd.Series({'Precision': 0.94, 'Recall': 0.91, 'F1': 0.925})
print(scores)`,
      output: `Lun    150
Mar    230
Mié    180
Jue    290
Vie    100
Name: Ventas_Semana, dtype: int64

Total: 950  Media: 190.0  Máximo en: Jue → 290`
    },
    {
      label: 'DataFrame',
      code: `import pandas as pd
import numpy as np

# DataFrame — tabla 2D con índice y columnas etiquetadas
datos = {
    'nombre': ['Ana', 'Luis', 'María', 'Pedro', 'Sara'],
    'edad':   [28, 35, 22, 40, 31],
    'score':  [0.92, 0.88, 0.95, 0.78, 0.91],
    'ciudad': ['CDMX', 'GDL', 'CDMX', 'MTY', 'GDL']
}
df = pd.DataFrame(datos)

print(df)
print()
print("Shape:", df.shape)       # (5, 4)
print("Cols:", df.columns.tolist())
print("Dtypes:\\n", df.dtypes)
print()

# Info rápida
print(df.describe().round(2))   # estadísticas numéricas
print()
print(df.info())                 # null counts + mem usage

# Acceder a columnas
print(df['nombre'])              # Series
print(df[['nombre', 'score']])  # sub-DataFrame`,
      output: `  nombre  edad  score ciudad
0    Ana    28   0.92   CDMX
1   Luis    35   0.88    GDL
2  María    22   0.95   CDMX
3  Pedro    40   0.78    MTY
4   Sara    31   0.91    GDL

Shape: (5, 4)`
    },
    {
      label: 'loc & iloc',
      code: `import pandas as pd

df = pd.DataFrame({
    'nombre': ['Ana', 'Luis', 'María'],
    'edad':   [28, 35, 22],
    'score':  [0.92, 0.88, 0.95]
}, index=['a', 'b', 'c'])

# loc — acceso por ETIQUETA (label)
print(df.loc['a'])                        # fila 'a' completa
print(df.loc['a', 'nombre'])              # 'Ana'
print(df.loc['a':'b', ['nombre','score']]) # rango de etiquetas

# iloc — acceso por POSICIÓN (integer)
print(df.iloc[0])           # primera fila
print(df.iloc[0, 1])        # fila 0, col 1 → 28
print(df.iloc[:2, 1:])      # primeras 2 filas, col 1 en adelante

# Boolean indexing
print(df[df['edad'] > 25])
print(df[(df['score'] > 0.9) & (df['edad'] < 30)])

# Modificar un valor específico
df.at['a', 'score'] = 0.99   # por etiqueta (rápido)
df.iat[1, 2] = 0.85           # por posición (rápido)
print(df)`,
      output: `nombre    Ana
edad       28
score    0.92
Name: a, dtype: object

  nombre  edad  score
a    Ana    28   0.99
b   Luis    35   0.85
c  María    22   0.95`
    }
  ];

  pandasOpsExamples: CodeExample[] = [
    {
      label: 'Filtrar & Ordenar',
      code: `import pandas as pd
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    'modelo':   ['LogReg', 'RandomForest', 'XGBoost', 'SVM', 'MLP', 'KNN'],
    'accuracy': [0.82, 0.91, 0.94, 0.88, 0.92, 0.79],
    'tiempo_s': [0.1, 3.4, 2.1, 5.6, 8.2, 0.3],
    'tipo':     ['lineal', 'ensemble', 'ensemble', 'lineal', 'deep', 'lazy']
})

# Filtros con condiciones booleanas
buenos  = df[df['accuracy'] > 0.90]
rapidos = df[df['tiempo_s'] < 2.0]
mejores = df[(df['accuracy'] > 0.88) & (df['tiempo_s'] < 4)]

# Ordenar
print(df.sort_values('accuracy', ascending=False))

# nlargest / nsmallest — atajo útil
print(df.nlargest(3, 'accuracy')[['modelo', 'accuracy', 'tiempo_s']])

# query() — más legible para condiciones complejas
resultado = df.query("accuracy > 0.88 and tiempo_s < 5")
print(resultado[['modelo', 'accuracy', 'tiempo_s']])

# isin() para filtrar por lista de valores
ensemble_models = df[df['tipo'].isin(['ensemble', 'deep'])]
print(ensemble_models['modelo'].tolist())`,
      output: `       modelo  accuracy  tiempo_s
2     XGBoost      0.94       2.1
4         MLP      0.92       8.2
1  RandomForest    0.91       3.4
3         SVM      0.88       5.6

Ensemble+Deep: ['RandomForest', 'XGBoost', 'MLP']`
    },
    {
      label: 'GroupBy & Agg',
      code: `import pandas as pd

df = pd.DataFrame({
    'region':   ['Norte','Sur','Norte','Este','Sur','Este','Norte'],
    'producto': ['A', 'B', 'A', 'C', 'A', 'B', 'C'],
    'ventas':   [150, 200, 130, 300, 180, 250, 90],
    'margen':   [0.30, 0.22, 0.28, 0.41, 0.25, 0.35, 0.20]
})

# GroupBy básico
print(df.groupby('region')['ventas'].sum())

# Múltiples funciones con nombres personalizados
stats = df.groupby('region').agg(
    total_ventas =('ventas', 'sum'),
    prom_ventas  =('ventas', 'mean'),
    prom_margen  =('margen', 'mean'),
    n_registros  =('producto', 'count')
).round(2)
print(stats)

# Pivot table — ventas por región y producto
pivot = df.pivot_table(
    values='ventas',
    index='region',
    columns='producto',
    aggfunc='sum',
    fill_value=0
)
print(pivot)

# transform() — agrega sin colapsar filas
df['ventas_pct_region'] = df.groupby('region')['ventas'].transform(
    lambda x: (x / x.sum()).round(2)
)`,
      output: `region
Este    550
Norte   370
Sur     380

       total_ventas  prom_ventas  prom_margen  n_registros
Este           550       275.00         0.38            2
Norte          370       123.33         0.26            3
Sur            380       190.00         0.24            2`
    },
    {
      label: 'Merge & Join',
      code: `import pandas as pd

empleados = pd.DataFrame({
    'emp_id': [1, 2, 3, 4, 5],
    'nombre': ['Ana', 'Luis', 'María', 'Pedro', 'Sara'],
    'dept_id': [10, 20, 10, 30, 20]
})

departamentos = pd.DataFrame({
    'dept_id': [10, 20, 30, 40],
    'depto':   ['Data Science', 'Ingeniería', 'Producto', 'Marketing']
})

# INNER JOIN — solo filas con coincidencia
inner = pd.merge(empleados, departamentos, on='dept_id')
print(inner[['nombre', 'depto']])

# LEFT JOIN — todos los empleados, NaN si no hay depto
left = pd.merge(empleados, departamentos, on='dept_id', how='left')

# concat — apila DataFrames verticalmente
q1 = pd.DataFrame({'mes': ['Ene', 'Feb'], 'ventas': [100, 120]})
q2 = pd.DataFrame({'mes': ['Mar', 'Abr'], 'ventas': [110, 135]})
anual = pd.concat([q1, q2], ignore_index=True)
print(anual)

# join() — une por índice
df1 = pd.DataFrame({'score': [0.9, 0.8]}, index=['Ana', 'Luis'])
df2 = pd.DataFrame({'nivel': ['Sr', 'Jr']}, index=['Ana', 'Luis'])
print(df1.join(df2))`,
      output: `  nombre         depto
0    Ana   Data Science
1  María   Data Science
2   Luis    Ingeniería
3   Sara    Ingeniería
4  Pedro       Producto

   mes  ventas
0  Ene     100
1  Feb     120
2  Mar     110
3  Abr     135`
    }
  ];

  cleaningExamples: CodeExample[] = [
    {
      label: 'Detectar Nulls',
      code: `import pandas as pd
import numpy as np

# Dataset con problemas típicos de producción
df = pd.DataFrame({
    'edad':     [25, None, 30, None, 35, 28],
    'ingresos': [50000, 65000, None, 45000, 80000, None],
    'ciudad':   ['CDMX', 'GDL', 'CDMX', None, 'MTY', 'GDL'],
    'score':    [0.88, 0.92, 0.75, 0.91, None, 0.84]
})

# Diagnóstico de calidad
print("=== Nulls absolutos ===")
print(df.isna().sum())

print("\\n=== % de nulls ===")
print((df.isna().mean() * 100).round(1))

print("\\n=== Filas con ALGÚN null ===")
print(df[df.isna().any(axis=1)])

print("\\n=== Info completa ===")
df.info()

# Mapa booleano de nulls
print("\\nMapa de nulls:")
print(df.isna())`,
      output: `=== Nulls absolutos ===
edad        2
ingresos    2
ciudad      1
score       1

=== % de nulls ===
edad        33.3
ingresos    33.3
ciudad      16.7
score       16.7`
    },
    {
      label: 'Limpiar Datos',
      code: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'edad':     [25.0, None, 30.0, None, 35.0, 28.0],
    'ingresos': [50000, 65000, None, 45000, 80000, None],
    'ciudad':   ['CDMX', 'GDL', 'CDMX', None, 'MTY', 'GDL'],
    'score':    [0.88, 0.92, 0.75, 0.91, None, 0.84]
})

# Estrategia 1: rellenar con estadísticas
df['edad']     = df['edad'].fillna(df['edad'].median())
df['ingresos'] = df['ingresos'].fillna(df['ingresos'].mean().round())
df['ciudad']   = df['ciudad'].fillna('Desconocida')
df['score']    = df['score'].fillna(df['score'].median())

# Estrategia 2: forward fill / back fill para series temporales
# df['precio'] = df['precio'].ffill().bfill()

# Cambiar dtypes para ahorrar memoria
df['edad']   = df['edad'].astype(int)
df['ciudad'] = df['ciudad'].astype('category')

# Eliminar duplicados
df_clean = df.drop_duplicates()

print("Nulls restantes:", df_clean.isna().sum().sum())
print(df_clean.dtypes)
print(df_clean)`,
      output: `Nulls restantes: 0
edad         int64
ingresos    float64
ciudad     category
score       float64

   edad  ingresos     ciudad  score
0    25   50000.0       CDMX   0.88
1    28   65000.0        GDL   0.92
...`
    },
    {
      label: 'Outliers & Tipos',
      code: `import pandas as pd
import numpy as np

np.random.seed(42)
# Datos normales + outliers intencionados
valores = np.concatenate([
    np.random.randn(95) * 10 + 50,   # datos normales
    [200, -100, 185, 210, -90]        # outliers
])
df = pd.DataFrame({'valor': valores})

# Método IQR (Interquartile Range)
Q1  = df['valor'].quantile(0.25)
Q3  = df['valor'].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR

outliers = df[(df['valor'] < lower) | (df['valor'] > upper)]
print(f"Outliers detectados: {len(outliers)}")
print(f"Rango normal: [{lower:.1f}, {upper:.1f}]")

# Capping (winsorizing) — recorta en lugar de eliminar
df['valor_capped'] = df['valor'].clip(lower, upper)
print(f"Antes  — max: {df['valor'].max():.1f}")
print(f"Después — max: {df['valor_capped'].max():.1f}")

# Método Z-score
from scipy import stats
z_scores = np.abs(stats.zscore(df['valor']))
df_sin_outliers = df[z_scores < 3]
print(f"Filas sin outliers (z<3): {len(df_sin_outliers)}")`,
      output: `Outliers detectados: 5
Rango normal: [24.2, 77.6]
Antes  — max: 210.0
Después — max:  77.6
Filas sin outliers (z<3): 95`
    }
  ];

  performanceLoopCode = `import numpy as np
import time

n = 1_000_000
lista = list(range(n))
arr   = np.arange(n, dtype=float)

# ❌ Bucle Python puro — LENTO
inicio = time.time()
resultado_loop = [x ** 2 for x in lista]
t_loop = time.time() - inicio

# ✅ NumPy vectorizado — RÁPIDO
inicio = time.time()
resultado_np = arr ** 2
t_np = time.time() - inicio

print(f"Bucle Python:      {t_loop:.3f}s")
print(f"NumPy vectorizado: {t_np:.4f}s")
print(f"Speedup: {t_loop / t_np:.0f}x más rápido")`;

  performanceLoopOutput = `Bucle Python:      0.245s
NumPy vectorizado: 0.0021s
Speedup: ~117x más rápido`;

  performancePandasCode = `import pandas as pd
import numpy as np
import time

df = pd.DataFrame({'valor': np.random.randn(500_000)})

# ❌ apply() — lento, evitar en producción
inicio = time.time()
df['v1'] = df['valor'].apply(lambda x: x**2 + 2*x + 1)
t_apply = time.time() - inicio

# ✅ Operación vectorizada — siempre preferir
inicio = time.time()
df['v2'] = df['valor']**2 + 2*df['valor'] + 1
t_vect = time.time() - inicio

print(f"apply():     {t_apply:.3f}s")
print(f"Vectorizado: {t_vect:.4f}s")
print(f"Speedup: {t_apply / t_vect:.0f}x")

# Memoria: usa dtypes eficientes
df['id'] = np.random.randint(0, 1000, 500_000)
print("int64:", df['id'].memory_usage(deep=True) // 1024, "KB")
df['id_small'] = df['id'].astype(np.int16)
print("int16:", df['id_small'].memory_usage(deep=True) // 1024, "KB")

# chunks para datasets grandes
# for chunk in pd.read_csv('big.csv', chunksize=10_000):
#     process(chunk)`;

  performancePandasOutput = `apply():     2.145s
Vectorizado: 0.012s
Speedup: 179x

int64: 4000 KB
int16: 1000 KB  ← 75% menos memoria`;

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Estadísticas de Notas',
      description: 'Dado un array de calificaciones de 30 estudiantes (entre 50 y 100), calcula estadísticas y clasifica las notas por letra.',
      hints: [
        'Usa np.random.seed(99) y np.random.randint(50, 101, 30) para generar datos',
        'Los métodos mean(), std(), min(), max() son atributos del ndarray',
        'Boolean indexing: notas[notas >= 90] filtra los A',
        'Cuenta con len() o .sum() sobre la máscara booleana'
      ],
      starterCode: `import numpy as np

np.random.seed(99)
notas = np.random.randint(50, 101, size=30)

# TODO: calcula media, desviación estándar, mín y máx
media = ...
std   = ...
minimo = ...
maximo = ...

# TODO: cuenta cuántos aprobaron (nota >= 70)
aprobados = ...

# TODO: clasifica — A>=90, B>=80, C>=70, F<70
A = len(notas[notas >= 90])
B = len(notas[(notas >= 80) & (notas < 90)])
C = len(notas[(notas >= 70) & (notas < 80)])
F = len(notas[notas < 70])

print(f"Media: {media:.1f} | Std: {std:.1f}")
print(f"Rango: [{minimo}, {maximo}]")
print(f"Aprobados: {aprobados}/30")
print(f"A:{A}  B:{B}  C:{C}  F:{F}")`,
      expectedOutput: `Media: 75.1 | Std: 14.2
Rango: [50, 100]
Aprobados: 20/30
A:4  B:7  C:9  F:10`,
      color: 'border-green-400',
      difficultyColor: 'bg-green-900 text-green-300'
    },
    {
      difficulty: 'Intermedio',
      title: 'Pipeline EDA de Ventas',
      description: 'Crea un pipeline completo de Análisis Exploratorio de Datos sobre un DataFrame de ventas con 200 registros.',
      hints: [
        'groupby + agg con nombres personalizados: agg(total=("ventas","sum"))',
        'pivot_table para ver ventas región vs mes',
        'corr() sobre columnas numéricas para ver correlaciones',
        'nlargest(3, "ventas") para el top 3'
      ],
      starterCode: `import pandas as pd
import numpy as np

np.random.seed(42)
n = 200
df = pd.DataFrame({
    'region':   np.random.choice(['Norte','Sur','Este','Oeste'], n),
    'producto': np.random.choice(['A','B','C','D'], n),
    'ventas':   np.random.randint(100, 1000, n),
    'costo':    np.random.randint(50, 600, n),
    'mes':      np.random.randint(1, 13, n)
})
df['margen'] = ((df['ventas'] - df['costo']) / df['ventas']).round(3)

# TODO 1: Resumen por región (total ventas, promedio margen, n registros)
resumen_region = ...

# TODO 2: Top 3 registros por ventas
top3 = ...

# TODO 3: Correlación entre columnas numéricas
correlacion = ...

# TODO 4: Mes con más ventas totales
mes_top = ...

print("=== Resumen por Región ===")
print(resumen_region)
print("\\n=== Mes con más ventas ===", mes_top)
print("\\n=== Top 3 ventas ===")
print(top3[['region', 'producto', 'ventas']])`,
      expectedOutput: `=== Resumen por Región ===
       total_ventas  prom_margen  n_registros
Este          12840         0.31           51
Norte         12230         0.30           49
Oeste         13110         0.29           52
Sur           11820         0.31           48

=== Mes con más ventas === 7`,
      color: 'border-yellow-400',
      difficultyColor: 'bg-yellow-900 text-yellow-300'
    },
    {
      difficulty: 'Avanzado',
      title: 'Feature Engineering para ML',
      description: 'Prepara un dataset de crédito para ML: imputa nulls, one-hot encoding, normalización y split train/test usando solo NumPy y Pandas.',
      hints: [
        'pd.get_dummies(df, columns=["educacion"], drop_first=True) para one-hot encoding',
        'Normaliza numéricas con Z-score: (col - col.mean()) / col.std()',
        'iloc para split: X.iloc[:int(0.8*n)] = train, X.iloc[int(0.8*n):] = test',
        'fillna(df[col].median()) para imputar variables sesgadas como ingresos'
      ],
      starterCode: `import pandas as pd
import numpy as np

np.random.seed(42)
n = 500

# Dataset sintético de crédito con valores faltantes
df = pd.DataFrame({
    'edad':      np.random.randint(18, 65, n).astype(float),
    'ingresos':  np.random.exponential(40000, n),
    'deuda':     np.random.exponential(15000, n),
    'educacion': np.random.choice(
        ['Basica','Bachillerato','Universidad','Posgrado'], n),
    'default':   np.random.choice([0, 1], n, p=[0.75, 0.25])
})

# Introduce ~5% de nulls
mask = np.random.rand(n, 3) < 0.05
df.loc[mask[:, 0], 'edad']     = np.nan
df.loc[mask[:, 1], 'ingresos'] = np.nan
df.loc[mask[:, 2], 'deuda']    = np.nan

# TODO 1: Imputa nulls (mediana para numéricas sesgadas)

# TODO 2: One-hot encode 'educacion'

# TODO 3: Normaliza columnas numéricas ['edad','ingresos','deuda']

# TODO 4: Separa features (X) y target (y), luego split 80/20 sin sklearn

print("X_train:", X_train.shape)
print("X_test: ", X_test.shape)
print("Ratio positivos train:", y_train.mean().round(3))
print("Nulls restantes:", df.isna().sum().sum())`,
      expectedOutput: `X_train: (400, 7)
X_test:  (100, 7)
Ratio positivos train: 0.248
Nulls restantes: 0`,
      color: 'border-red-400',
      difficultyColor: 'bg-red-900 text-red-300'
    }
  ];

  nextSlide(): void {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      this.prevSlide();
    }
  }
}
