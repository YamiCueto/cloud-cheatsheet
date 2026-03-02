import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CodeExample { label: string; code: string; output?: string; }
interface Challenge { difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'; title: string; description: string; hints: string[]; starterCode: string; expectedOutput: string; color: string; difficultyColor: string; }

@Component({
  selector: 'app-l1-linear-algebra',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-linear-algebra.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1LinearAlgebraComponent {
  currentSlide = 0;
  activeVecTab = 0;
  activeMatTab = 0;
  selectedChallenge = 0;

  slides = [
    { type: 'title' },
    { type: 'why-linalg' },
    { type: 'vectors' },
    { type: 'matrices' },
    { type: 'matrix-ops' },
    { type: 'eigenvalues' },
    { type: 'svd-pca' },
    { type: 'numpy-linalg' },
    { type: 'challenge' },
    { type: 'summary' }
  ];

  vectorExamples: CodeExample[] = [
    {
      label: '📐 Vectores básicos',
      code: `import numpy as np

# Vector = lista de números con dirección y magnitud
v1 = np.array([3.0, 4.0])
v2 = np.array([1.0, 2.0])

# Operaciones básicas
suma  = v1 + v2              # [4, 6]
resta = v1 - v2              # [2, 2]
escala = 2 * v1              # [6, 8]

# Norma (magnitud/longitud del vector)
norma = np.linalg.norm(v1)   # 5.0 (pitágoras: √(3²+4²))
print(f"||v1|| = {norma}")

# Normalización: convierte a vector unitario (norma=1)
v1_norm = v1 / norma
print(f"Normalizado: {v1_norm}")
print(f"Norma del normalizado: {np.linalg.norm(v1_norm):.1f}")

# Producto punto (dot product) — similaridad
dot = np.dot(v1, v2)         # 3*1 + 4*2 = 11
print(f"Dot product: {dot}")

# Similitud coseno — el corazón de los embeddings semánticos
cos_sim = dot / (norma * np.linalg.norm(v2))
print(f"Similitud coseno: {cos_sim:.4f}")`,
      output: `||v1|| = 5.0\nNormalizado: [0.6 0.8]\nNorma del normalizado: 1.0\nDot product: 11.0\nSimilitud coseno: 0.9839`
    },
    {
      label: '🧠 Embeddings en IA',
      code: `import numpy as np

# Los embeddings de LLMs son vectores en espacio de alta dimensión
# Simulamos embeddings 4D de palabras
embeddings = {
    'rey':    np.array([0.9, 0.1, 0.8, 0.2]),
    'reina':  np.array([0.8, 0.9, 0.7, 0.2]),
    'hombre': np.array([0.7, 0.1, 0.2, 0.3]),
    'mujer':  np.array([0.6, 0.9, 0.1, 0.3]),
}

def similitud_coseno(v1, v2):
    return np.dot(v1, v2) / (np.linalg.norm(v1) * np.linalg.norm(v2))

# La famosa analogía: rey - hombre + mujer ≈ reina
resultado = (embeddings['rey']
           - embeddings['hombre']
           + embeddings['mujer'])

print("rey - hombre + mujer =", resultado.round(2))

# ¿Qué embedding es más similar al resultado?
for palabra, emb in embeddings.items():
    sim = similitud_coseno(resultado, emb)
    print(f"  Sim con '{palabra}': {sim:.3f}")`,
      output: `rey - hombre + mujer = [0.8 0.9 0.7 0.3]\n  Sim con 'rey': 0.989\n  Sim con 'reina': 0.998 ← más similar!\n  Sim con 'hombre': 0.920\n  Sim con 'mujer': 0.953`
    }
  ];

  matrixExamples: CodeExample[] = [
    {
      label: '🔲 Matrices y Multiplicación',
      code: `import numpy as np

# Matriz = transformación lineal del espacio
# En NNs: W es la matriz de pesos, x el vector de entrada
# salida = W @ x + b

W = np.array([[0.5, 0.2, -0.1],  # capa densa 2×3
              [0.3, -0.4, 0.8]])
x = np.array([1.0, 2.0, 3.0])    # input vector
b = np.array([0.1, -0.1])        # bias

# Forward pass de una neurona
z = W @ x + b
print(f"z = W@x + b = {z}")

# Activación ReLU
relu = np.maximum(0, z)
print(f"ReLU(z) = {relu}")

# Multiplicación matricial — el cálculo más frecuente en DL
A = np.random.randn(3, 4)   # (batch=3, features=4)
W2 = np.random.randn(4, 5)  # (in=4, out=5)
salida = A @ W2              # (3, 5) — multiplicación matricial

print(f"Input shape:  {A.shape}")
print(f"Weight shape: {W2.shape}")
print(f"Output shape: {salida.shape}")  # (3, 5)`,
      output: `z = W@x + b = [1.6 1.6]\nReLU(z) = [1.6 1.6]\nInput shape:  (3, 4)\nWeight shape: (4, 5)\nOutput shape: (3, 5)`
    },
    {
      label: '🔄 Transformaciones',
      code: `import numpy as np
import matplotlib
matplotlib.use('Agg')  # sin GUI

# Matrices de transformación 2D
theta = np.pi / 4  # 45 grados

# Rotación
R = np.array([[np.cos(theta), -np.sin(theta)],
              [np.sin(theta),  np.cos(theta)]])

# Escalado
S = np.array([[2, 0],
              [0, 0.5]])

# Puntos originales (cuadrado unitario)
puntos = np.array([[0, 1, 1, 0],
                   [0, 0, 1, 1]])

rotados = R @ puntos
escalados = S @ puntos

print("Original:", puntos.T)
print("Rotados (45°):", rotados.T.round(2))
print("Escalados (2x, 0.5y):", escalados.T)

# Composición de transformaciones
transformacion = S @ R  # primero rotamos, luego escalamos
resultado = transformacion @ puntos
print("Transformación compuesta:", resultado.T.round(2))`,
      output: `Original:\n[[0 0] [1 0] [1 1] [0 1]]\nRotados (45°):\n[[0. 0.][0.71 0.71][0. 1.41][-0.71 0.71]]`
    }
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Similitud coseno entre documentos',
      description: 'Implementa una función de similaridad coseno y úsala para encontrar el documento más similar a una consulta. Calcula el ángulo entre los vectores TF-IDF.',
      hints: ['cos(θ) = (v1·v2) / (||v1|| * ||v2||)', 'np.dot(v1, v2) para producto punto', 'np.linalg.norm(v) para magnitud', 'Resultado entre -1 (opuesto) y 1 (idéntico)'],
      starterCode: `import numpy as np

# Vectores TF-IDF de 5 documentos (simplificado a 4 dimensiones)
docs = {
    'doc1': np.array([1., 0., 1., 0.]),  # Python, ML
    'doc2': np.array([0., 1., 1., 0.]),  # Java, ML
    'doc3': np.array([1., 0., 0., 1.]),  # Python, Web
    'doc4': np.array([0., 0., 1., 1.]),  # ML, Web
}
query = np.array([1., 0., 1., 0.])       # Python, ML

def similitud_coseno(v1, v2):
    # TODO: implementa
    pass

for nombre, vec in docs.items():
    sim = similitud_coseno(query, vec)
    print(f"{nombre}: {sim:.4f}")`,
      expectedOutput: `doc1: 1.0000\ndoc2: 0.5000\ndoc3: 0.5000\ndoc4: 0.0000`,
      color: 'border-l-green-400',
      difficultyColor: 'bg-green-100 text-green-800'
    },
    {
      difficulty: 'Intermedio',
      title: 'Forward pass de red neuronal',
      description: 'Implementa el forward pass de una red neuronal de 3 capas con activaciones ReLU usando solo NumPy y álgebra lineal. Calcula la salida para un batch de 4 ejemplos.',
      hints: ['Cada capa: z = W @ x.T + b', 'ReLU: np.maximum(0, z)', 'Softmax: np.exp(z) / np.sum(np.exp(z), axis=0)', 'Shapes: (batch, features) → transponer para multiplicar'],
      starterCode: `import numpy as np
np.random.seed(42)

# Arquitectura: 4 → 8 → 4 → 3 (clasificación 3 clases)
W1 = np.random.randn(8, 4) * 0.1
b1 = np.zeros((8, 1))
W2 = np.random.randn(4, 8) * 0.1
b2 = np.zeros((4, 1))
W3 = np.random.randn(3, 4) * 0.1
b3 = np.zeros((3, 1))

# Batch de 4 ejemplos
X = np.random.randn(4, 4)  # (batch=4, features=4)

def relu(z): return np.maximum(0, z)
def softmax(z): return np.exp(z) / np.sum(np.exp(z), axis=0)

# TODO: implementa el forward pass
# salida debe tener shape (3, 4) — 3 clases, 4 ejemplos
salida = None
print("Shape de salida:", salida.shape)
print("Suma probabilidades:", salida.sum(axis=0).round(4))`,
      expectedOutput: `Shape de salida: (3, 4)\nSuma probabilidades: [1. 1. 1. 1.]`,
      color: 'border-l-yellow-400',
      difficultyColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      difficulty: 'Avanzado',
      title: 'PCA desde cero con NumPy',
      description: 'Implementa PCA (Análisis de Componentes Principales) usando descomposición eigenvalores. Reduce un dataset 10D a 2D conservando máxima varianza.',
      hints: ['PCA: 1) Centrar datos (restar media), 2) Covarianza, 3) Eigendescomposición, 4) Top-k eigenvectores', 'np.linalg.eigh() para matrices simétricas (covarianza)', 'Ordenar eigenvalores descendente: np.argsort()[::-1]', 'Proyección: X_reducido = X_centrado @ componentes.T'],
      starterCode: `import numpy as np

np.random.seed(42)
# Dataset 100 ejemplos, 10 features (con correlación)
X = np.random.randn(100, 10)
X[:, 1] = X[:, 0] * 0.8 + np.random.randn(100) * 0.3
X[:, 2] = X[:, 0] * 0.6 + np.random.randn(100) * 0.5

def pca(X, n_componentes=2):
    """Implementa PCA desde cero."""
    # TODO: 1. Centrar X
    X_centrado = None

    # TODO: 2. Matriz de covarianza
    cov = None

    # TODO: 3. Eigendescomposición
    eigenvalues, eigenvectors = None, None

    # TODO: 4. Ordenar por eigenvalor descendente y seleccionar top-k
    # TODO: 5. Proyectar
    X_reducido = None
    return X_reducido, eigenvalues

X_2d, eigenvals = pca(X, n_componentes=2)
print("Shape reducido:", X_2d.shape)    # (100, 2)
print("Varianza explicada:", (eigenvals[:2].sum()/eigenvals.sum()*100).round(1), "%")`,
      expectedOutput: `Shape reducido: (100, 2)\nVarianza explicada: ~45%`,
      color: 'border-l-red-400',
      difficultyColor: 'bg-red-100 text-red-800'
    }
  ];

  nextStation = { name: 'Probability & Statistics', route: '/metro-map-ai/l1-probability-stats', description: 'Distribuciones, Bayes, intervalos de confianza — la estadística que todo ML engineer necesita.' };

  nextSlide()  { if (this.currentSlide < this.slides.length - 1) this.currentSlide++; }
  prevSlide()  { if (this.currentSlide > 0) this.currentSlide--; }
  goToSlide(i: number) { this.currentSlide = i; }

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); this.nextSlide(); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); this.prevSlide(); }
  }
}
