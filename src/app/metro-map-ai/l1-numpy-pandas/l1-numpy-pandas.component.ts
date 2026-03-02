import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CodeExample { label: string; code: string; output?: string; }
interface Concept { icon: string; title: string; description: string; color: string; }
interface Challenge {
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  title: string; description: string; hints: string[];
  starterCode: string; expectedOutput: string;
  color: string; difficultyColor: string;
}

@Component({
  selector: 'app-l1-numpy-pandas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-numpy-pandas.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1NumpyPandasComponent {
  currentSlide = 0;
  activeNdarrayTab = 0;
  activeOpsTab = 0;
  activePandasTab = 0;
  activeManipTab = 0;
  selectedChallenge = 0;

  slides = [
    { type: 'title' },
    { type: 'why-numpy-pandas' },
    { type: 'ndarray-basics' },
    { type: 'array-ops' },
    { type: 'pandas-series-df' },
    { type: 'data-manipulation' },
    { type: 'groupby-merge' },
    { type: 'performance-tips' },
    { type: 'challenge' },
    { type: 'summary' }
  ];

  whyReasons: Concept[] = [
    { icon: '⚡', title: 'Velocidad C bajo Python', description: 'NumPy ejecuta operaciones vectorizadas en C — hasta 100x más rápido que loops Python puros.', color: 'bg-yellow-50' },
    { icon: '🧮', title: 'Base de todo ML', description: 'TensorFlow y PyTorch internamente usan tensores = NDArrays multidimensionales. Entender NumPy = entender tensores.', color: 'bg-blue-50' },
    { icon: '📋', title: 'Pandas = Excel programático', description: 'DataFrames para tablas de datos. 90% del tiempo de un ML engineer se gasta en manipular datos con Pandas.', color: 'bg-green-50' },
    { icon: '🔗', title: 'Ecosistema integrado', description: 'Scikit-learn, Matplotlib, SciPy, Keras — todos hablan "NumPy arrays". Es el idioma común de la ciencia de datos.', color: 'bg-purple-50' },
    { icon: '📐', title: 'Broadcasting mágico', description: 'Operaciones entre arrays de diferentes formas sin loops. Fundamental para normalización, métricas y álgebra lineal.', color: 'bg-pink-50' },
    { icon: '💾', title: 'Eficiencia de memoria', description: 'Arrays tipados (float32, int8) vs listas Python genéricas. Crucial para datasets grandes de imágenes o texto.', color: 'bg-orange-50' },
  ];

  ndarrayExamples: CodeExample[] = [
    {
      label: '🔨 Creación',
      code: `import numpy as np

# Desde lista Python
arr = np.array([1, 2, 3, 4, 5])
print(arr, arr.dtype)         # [1 2 3 4 5]  int64

# Arrays 2D (matrices)
matriz = np.array([[1, 2, 3],
                   [4, 5, 6]])
print(matriz.shape)           # (2, 3)
print(matriz.ndim)            # 2

# Constructores útiles
zeros  = np.zeros((3, 4))         # todos 0.0
ones   = np.ones((2, 3), dtype=np.float32)
rango  = np.arange(0, 10, 2)      # [0 2 4 6 8]
lineal = np.linspace(0, 1, 5)     # [0, 0.25, 0.5, 0.75, 1.0]
aleatorio = np.random.randn(3, 3) # gaussiana N(0,1)`,
      output: `[1 2 3 4 5]  int64\n(2, 3)\n2`
    },
    {
      label: '✂️ Indexing & Slicing',
      code: `import numpy as np

matriz = np.arange(12).reshape(3, 4)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]

# Elemento individual
print(matriz[1, 2])       # 6

# Slicing (filas, columnas)
print(matriz[0:2, 1:3])   # [[1,2],[5,6]]
print(matriz[:, -1])      # última columna: [3,7,11]
print(matriz[1, :])       # 2da fila: [4,5,6,7]

# Boolean indexing — clave en ML
data   = np.array([1.5, -0.2, 3.1, -1.0, 0.8])
validos = data[data > 0]
print(validos)            # [1.5 3.1 0.8]

# Fancy indexing
indices = np.array([0, 2, 4])
print(data[indices])      # [1.5 3.1 0.8]`,
      output: `6\n[[1 2]\n [5 6]]\n[ 3  7 11]\n[4 5 6 7]\n[1.5 3.1 0.8]\n[1.5 3.1 0.8]`
    },
    {
      label: '🔄 Reshape & Stack',
      code: `import numpy as np

arr = np.arange(24)
# Reshape: 24 → (4,6) → (2,3,4)
mat = arr.reshape(4, 6)
tensor = arr.reshape(2, 3, 4)
print(tensor.shape)       # (2, 3, 4)

# Flatten (para capas densas de NNs)
flat = tensor.flatten()
print(flat.shape)         # (24,)

# Transpose: (m,n) → (n,m)
M = np.ones((3, 5))
print(M.T.shape)          # (5, 3)

# Stack/concatenate
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6]])
vertical   = np.vstack([a, b])  # (3,2)
horizontal = np.hstack([a, a])  # (2,4)

print(vertical)
# [[1 2]
#  [3 4]
#  [5 6]]`,
      output: `(2, 3, 4)\n(24,)\n(5, 3)\n[[1 2]\n [3 4]\n [5 6]]`
    }
  ];

  arrayOpsExamples: CodeExample[] = [
    {
      label: '➕ Operaciones elemento-a-elemento',
      code: `import numpy as np

a = np.array([1.0, 2.0, 3.0, 4.0])
b = np.array([10., 20., 30., 40.])

print(a + b)        # [11. 22. 33. 44.]
print(a * b)        # [10. 40. 90. 160.]
print(a ** 2)       # [ 1.  4.  9. 16.]
print(np.sqrt(a))   # [1.   1.41 1.73 2.  ]

# Funciones universales (ufuncs)
angulos = np.linspace(0, np.pi, 4)
print(np.sin(angulos).round(2))  # [0. 0.71 0.87 0.]

# Estadísticas
data = np.array([2., 4., 4., 4., 5., 5., 7., 9.])
print(f"Media:  {data.mean():.2f}")
print(f"Std:    {data.std():.2f}")
print(f"Min/Max: {data.min()} / {data.max()}")`,
      output: `[11. 22. 33. 44.]\n[10. 40. 90. 160.]\n[ 1.  4.  9. 16.]\nMedia:  5.00\nStd:    1.87\nMin/Max: 2.0 / 9.0`
    },
    {
      label: '📡 Broadcasting',
      code: `import numpy as np

# Broadcasting: operaciones entre arrays de diferentes shapes
# Regla: dimensiones se expanden desde la derecha

# Normalización de dataset (muy común en ML)
X = np.array([[1., 2., 3.],
              [4., 5., 6.],
              [7., 8., 9.]])

media = X.mean(axis=0)      # media por columna
std   = X.std(axis=0)       # desviación por columna

X_norm = (X - media) / std  # broadcasting automático
print("Media por columna:", X_norm.mean(axis=0).round(10))
print("Std por columna:",   X_norm.std(axis=0).round(10))

# Escalar × matriz (broadcasting escalar)
pesos = np.array([0.1, 0.5, 0.4])
X_weighted = X * pesos      # cada fila × pesos
print(X_weighted)`,
      output: `Media por columna: [0. 0. 0.]\nStd por columna:   [1. 1. 1.]\n[[0.1 1.  1.2]\n [0.4 2.5 2.4]\n [0.7 4.  3.6]]`
    },
    {
      label: '🧮 Álgebra Lineal',
      code: `import numpy as np

A = np.array([[2., 1.],
              [1., 3.]])
B = np.array([[1., 0.],
              [0., 1.]])

# Multiplicación matricial (fundamental en NNs)
C = A @ B              # o np.matmul(A, B)
print("A @ B =", C)

# Operaciones de linalg
print("det(A) =", np.linalg.det(A))          # 5.0
print("inv(A) =", np.linalg.inv(A))
print("rank(A) =", np.linalg.matrix_rank(A)) # 2

# Eigenvalores (PCA, análisis de componentes)
eigenvalues, eigenvectors = np.linalg.eig(A)
print("Eigenvalores:", eigenvalues)           # [2.38, 2.62]

# Producto punto (similitud coseno, dot-product attention)
v1 = np.array([1., 0., 0.])
v2 = np.array([0.6, 0.8, 0.])
similitud = np.dot(v1, v2)
print("Similitud:", similitud)  # 0.6`,
      output: `A @ B = [[2. 1.]\n        [1. 3.]]\ndet(A) = 5.0\nEigenvalores: [1.38 3.62]\nSimilitud: 0.6`
    }
  ];

  pandasExamples: CodeExample[] = [
    {
      label: '📋 Series & DataFrame',
      code: `import pandas as pd
import numpy as np

# Series: array 1D con índice
precios = pd.Series([120.5, 145.2, 98.0, 167.8],
                    index=['AAPL', 'GOOG', 'META', 'AMZN'])
print(precios['GOOG'])   # 145.2
print(precios[precios > 100])

# DataFrame: tabla 2D
datos = {
    'nombre': ['Ana', 'Luis', 'María', 'Pedro'],
    'edad':   [25, 30, 22, 28],
    'score':  [0.92, 0.85, 0.97, 0.79]
}
df = pd.DataFrame(datos)
print(df.shape)           # (4, 3)
print(df.dtypes)
print(df.describe())      # estadísticas`,
      output: `145.2\nAAPL    120.5\nGOOG    145.2\nAMZN    167.8\n(4, 3)\nMedia score: 0.8825`
    },
    {
      label: '📖 Carga de datos',
      code: `import pandas as pd

# Cargar CSV (el 90% del tiempo)
df = pd.read_csv('dataset.csv')

# Primeras / últimas filas
print(df.head(3))
print(df.tail(2))
print(df.info())          # tipos y nulos
print(df.describe())      # estadísticas numéricas

# Selección de columnas
nombres = df['nombre']             # Serie
subconjunto = df[['edad', 'score']]  # DataFrame

# Selección por posición e índice
fila_0 = df.iloc[0]               # por posición
fila_ana = df.loc[df['nombre'] == 'Ana']  # por condición

# Añadir y eliminar columnas
df['nivel'] = pd.cut(df['score'],
                     bins=[0, 0.8, 0.9, 1.0],
                     labels=['Básico', 'Medio', 'Alto'])
df = df.drop('edad', axis=1)
print(df)`,
      output: `   nombre  score   nivel\n0     Ana   0.92   Alto\n1    Luis   0.85  Medio\n2   María   0.97   Alto\n3   Pedro   0.79  Básico`
    }
  ];

  manipExamples: CodeExample[] = [
    {
      label: '🧹 Limpieza de datos',
      code: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'nombre': ['Ana', 'Luis', None, 'Pedro'],
    'edad':   [25, None, 22, 28],
    'score':  [0.92, 0.85, 0.97, np.nan]
})

# Detectar nulos
print(df.isnull().sum())
# nombre  1
# edad    1
# score   1

# Estrategias de imputación
df['edad'].fillna(df['edad'].median(), inplace=True)
df['score'].fillna(df['score'].mean(), inplace=True)
df.dropna(subset=['nombre'], inplace=True)

print(df)

# Eliminar duplicados
df.drop_duplicates(inplace=True)

# Renombrar columnas
df.rename(columns={'nombre': 'name', 'score': 'accuracy'}, inplace=True)`,
      output: `nombre    1\nedad      1\nscore     1\n\n   name  edad  accuracy\n0   Ana  25.0      0.92\n1  Luis  25.0      0.85\n3 Pedro  28.0      0.91`
    },
    {
      label: '🔀 Transformaciones',
      code: `import pandas as pd

df = pd.DataFrame({
    'ciudad': ['Bogotá', 'Medellín', 'Bogotá', 'Cali', 'Medellín'],
    'ventas': [1200, 850, 1400, 600, 920],
    'mes': ['Ene', 'Ene', 'Feb', 'Feb', 'Mar']
})

# Apply: función sobre columna
df['ventas_k'] = df['ventas'].apply(lambda x: f"{x/1000:.1f}K")

# Map: reemplazar valores
mapa_region = {'Bogotá': 'Centro', 'Medellín': 'Noroccidente', 'Cali': 'Suroccidente'}
df['region'] = df['ciudad'].map(mapa_region)

# Sort
df_sorted = df.sort_values('ventas', ascending=False)

# Pivot: ciudad × mes → ventas (para ML features)
pivot = df.pivot_table(values='ventas', index='ciudad', columns='mes', aggfunc='sum', fill_value=0)
print(pivot)`,
      output: `mes        Ene   Feb   Mar\nciudad\nBogotá    1200  1400     0\nCali         0   600     0\nMedellín   850     0   920`
    }
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Análisis básico de dataset',
      description: 'Dado un array NumPy de calificaciones de 20 estudiantes, calcula: media, desviación estándar, máximo, mínimo, y cuántos aprobaron (>= 60). Luego crea un DataFrame Pandas con esos estudiantes.',
      hints: [
        'Usa np.random.randint(0, 100, 20) para generar los datos',
        'np.mean(), np.std(), arr[arr >= 60].size para conteo',
        'pd.DataFrame({"estudiante": range(1,21), "nota": notas})'
      ],
      starterCode: `import numpy as np
import pandas as pd

# Genera 20 notas entre 0 y 100
notas = np.random.randint(0, 100, 20)

# TODO: calcula estadísticas
media    = # ???
std_dev  = # ???
aprobados = # ???

# TODO: crea DataFrame y añade columna 'estado'
df = pd.DataFrame({"estudiante": range(1, 21), "nota": notas})
df['estado'] = df['nota'].apply(lambda x: ???)

print(df.head(5))
print(f"Aprobados: {aprobados}/20")`,
      expectedOutput: `   estudiante  nota  estado\n0           1    73  Aprobado\n...\nAprobados: 12/20`,
      color: 'border-l-green-400',
      difficultyColor: 'bg-green-100 text-green-800'
    },
    {
      difficulty: 'Intermedio',
      title: 'Normalización de features',
      description: 'Carga un dataset simulado de precios de casas (tamaño, habitaciones, precio). Normaliza las features con Min-Max scaling y Z-score usando solo NumPy. Compara ambos métodos.',
      hints: [
        'Min-Max: (x - min) / (max - min) → rango [0, 1]',
        'Z-score: (x - mean) / std → media 0, std 1',
        'Aplica sobre el eje correcto con axis=0',
        'Verifica: Z-score normalizado debe tener mean ≈ 0'
      ],
      starterCode: `import numpy as np
import pandas as pd

# Dataset: [tamaño_m2, habitaciones, precio_millones]
np.random.seed(42)
X = np.column_stack([
    np.random.uniform(50, 300, 100),   # tamaño
    np.random.randint(1, 6, 100),      # habitaciones
    np.random.uniform(100, 800, 100)   # precio
])

# TODO: Min-Max scaling
def minmax_scale(X):
    pass

# TODO: Z-score (StandardScaler)
def zscore_scale(X):
    pass

X_mm = minmax_scale(X)
X_zs = zscore_scale(X)

print("Min-Max range:", X_mm.min(axis=0).round(2), "→", X_mm.max(axis=0).round(2))
print("Z-score mean:", X_zs.mean(axis=0).round(10))`,
      expectedOutput: `Min-Max range: [0. 0. 0.] → [1. 1. 1.]\nZ-score mean:  [0. 0. 0.]`,
      color: 'border-l-yellow-400',
      difficultyColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      difficulty: 'Avanzado',
      title: 'EDA completo con Pandas',
      description: 'Implementa un análisis exploratorio completo (EDA) sobre un dataset de ventas: detecta nulos, imputa con mediana, detecta outliers con IQR, crea features de tiempo, y produce un resumen estadístico por región.',
      hints: [
        'IQR = Q3 - Q1; outliers: x < Q1 - 1.5*IQR o x > Q3 + 1.5*IQR',
        'pd.to_datetime() para convertir fechas',
        'df.groupby("region").agg({"ventas": ["mean","std","count"]})',
        'Usa df.pipe() para encadenar transformaciones limpiamente'
      ],
      starterCode: `import pandas as pd
import numpy as np

# Dataset simulado
np.random.seed(42)
n = 500
df = pd.DataFrame({
    'fecha':   pd.date_range('2023-01-01', periods=n, freq='D'),
    'region':  np.random.choice(['Norte', 'Sur', 'Centro'], n),
    'ventas':  np.random.exponential(1000, n),
    'unidades': np.random.randint(1, 50, n)
})
# Introduce nulos y outliers
df.loc[np.random.choice(n, 30), 'ventas'] = np.nan
df.loc[np.random.choice(n, 5), 'ventas'] = 50000  # outliers

# TODO: 1. Reporte de nulos
# TODO: 2. Imputar ventas con mediana por región
# TODO: 3. Detectar y eliminar outliers IQR
# TODO: 4. Feature engineering: mes, día_semana, trimestre
# TODO: 5. Resumen por región
print("A completar...")`,
      expectedOutput: `Nulos detectados: 30\nOutliers eliminados: 5\nFeatures: ['mes', 'dia_semana', 'trimestre']\nResumen por región creado`,
      color: 'border-l-red-400',
      difficultyColor: 'bg-red-100 text-red-800'
    }
  ];

  nextStation = { name: 'Data Structures & Algorithms', route: '/metro-map-ai/l1-dsa', description: 'Big O, arrays, hashMaps, árboles y algoritmos de búsqueda/ordenamiento — la base de eficiencia en IA.' };

  nextSlide()  { if (this.currentSlide < this.slides.length - 1) this.currentSlide++; }
  prevSlide()  { if (this.currentSlide > 0) this.currentSlide--; }
  goToSlide(i: number) { this.currentSlide = i; }

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); this.nextSlide(); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); this.prevSlide(); }
  }
}
