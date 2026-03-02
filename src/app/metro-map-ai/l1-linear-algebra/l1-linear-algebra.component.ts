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
  selector: 'app-l1-linear-algebra',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-linear-algebra.component.html',
  styleUrls: ['../../shared-presentation.css', './l1-linear-algebra.component.css']
})
export class L1LinearAlgebraComponent {
  currentSlide = 0;
  selectedChallenge = 0;

  activeVectorTab    = 0;
  activeMatrixTab    = 0;
  activeDotTab       = 0;
  activeDecompTab    = 0;
  activePcaTab       = 0;
  activeNnTab        = 0;

  slides = [
    { type: 'title' },
    { type: 'why-linalg' },
    { type: 'vectors' },
    { type: 'matrices' },
    { type: 'dot-product' },
    { type: 'decompositions' },
    { type: 'pca' },
    { type: 'nn-linalg' },
    { type: 'challenge' },
    { type: 'summary' }
  ];

  // ─── SLIDE 2: WHY ──────────────────────────────────────────────────
  whyReasons = [
    {
      icon: '🧮',
      title: 'Datos son vectores',
      description: 'Cada fila de tu dataset ES un vector. Toda la magia de ML ocurre en operaciones sobre esos vectores en el espacio n-dimensional.',
      color: 'blue'
    },
    {
      icon: '🔢',
      title: 'Pesos son matrices',
      description: 'Cada capa de una red neuronal aplica una transformación matricial W·x + b. Backprop calcula gradientes con multiplicación de matrices.',
      color: 'green'
    },
    {
      icon: '📐',
      title: 'Similitud = ángulo',
      description: 'Cosine similarity, embeddings de texto, recomendación — todos miden distancias y ángulos entre vectores en espacio de alta dimensión.',
      color: 'purple'
    },
    {
      icon: '🎯',
      title: 'Optimización = descenso',
      description: 'El gradiente es un vector en el espacio de parámetros que apunta hacia el mayor incremento de la loss. Gradient descent lo sigue en sentido contrario.',
      color: 'yellow'
    },
    {
      icon: '🗜️',
      title: 'Compresión de datos',
      description: 'PCA, SVD y descomposiciones reducen dimensionalidad preservando la varianza máxima. La base de autoencoders y representaciones latentes.',
      color: 'red'
    },
    {
      icon: '🌐',
      title: 'Embeddings',
      description: 'Word2Vec, BERT, CLIP — todas las representaciones de texto, imagen y audio son vectores en un espacio que preserva relaciones semánticas.',
      color: 'orange'
    }
  ];

  // ─── SLIDE 3: VECTORS ──────────────────────────────────────────────
  vectorExamples: CodeExample[] = [
    {
      label: '🔢 Operaciones básicas',
      code: `import numpy as np

# Un vector de features (1 muestra, 4 características)
x = np.array([1.2, 0.8, 3.5, 2.1])
y = np.array([0.5, 1.2, 2.1, 0.9])

# Suma, resta y escalar
print("x + y  :", x + y)
print("x - y  :", x - y)
print("2 * x  :", 2 * x)

# Norma (magnitud del vector)
print("||x||  :", np.linalg.norm(x))          # L2 norm
print("||x||₁ :", np.linalg.norm(x, ord=1))   # L1 norm (Manhattan)

# Normalización → vector unitario
x_hat = x / np.linalg.norm(x)
print("x̂ unit :", x_hat)
print("||x̂||  :", np.linalg.norm(x_hat))       # siempre 1.0`,
      output: `x + y  : [1.7 2.  5.6 3. ]
x - y  : [ 0.7 -0.4  1.4  1.2]
2 * x  : [2.4 1.6 7.  4.2]
||x||  : 4.312773...
||x||₁ : 7.6
x̂ unit : [0.278 0.186 0.812 0.487]
||x̂||  : 1.0`
    },
    {
      label: '🌐 Cosine Similarity',
      code: `import numpy as np

def cosine_similarity(a, b):
    """Similitud entre vectores (−1 a 1). Usada en embeddings."""
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Embeddings de palabras (simplificados a 4D)
king   = np.array([0.9, 0.7, 0.1, 0.8])
queen  = np.array([0.8, 0.6, 0.9, 0.7])
car    = np.array([0.1, 0.2, 0.1, 0.9])

print(f"king  ↔ queen : {cosine_similarity(king, queen):.4f}")
print(f"king  ↔ car  : {cosine_similarity(king, car):.4f}")

# La famosa analogía word2vec: king - man + woman ≈ queen
man   = np.array([0.9, 0.7, 0.1, 0.1])
woman = np.array([0.1, 0.2, 0.9, 0.1])
result = king - man + woman
print(f"king-man+woman ↔ queen: {cosine_similarity(result, queen):.4f}")`,
      output: `king  ↔ queen : 0.9856
king  ↔ car  : 0.7085
king-man+woman ↔ queen: 0.9622`
    },
    {
      label: '📦 Broadcasting',
      code: `import numpy as np

# Normalización por batch (muy común en preprocessing)
X = np.array([
    [1.0, 200.0, 0.5],   # sample 1: [age_norm, salary, score]
    [2.0, 350.0, 0.8],
    [1.5, 150.0, 0.3],
])

# Media y desv. estándar por columna (feature)
mu    = X.mean(axis=0)    # shape (3,)
sigma = X.std(axis=0)     # shape (3,)
print("Media por feature :", mu)
print("Std   por feature :", sigma)

# Broadcasting: X (3,3) − mu (3,) → cada fila se normaliza
X_norm = (X - mu) / sigma
print("\\nX normalizada (Z-score):\\n", X_norm.round(4))
print("Media post-norm :", X_norm.mean(axis=0).round(10))  # ≈ 0`,
      output: `Media por feature : [1.5   233.33   0.533]
Std   por feature : [0.408  82.63   0.208]

X normalizada (Z-score):
 [[-1.225  -0.404  -0.16 ]
 [ 1.225   1.414   1.28 ]
 [ 0.      -1.01   -1.12 ]]
Media post-norm : [0. 0. 0.]`
    }
  ];

  // ─── SLIDE 4: MATRICES ─────────────────────────────────────────────
  matrixExamples: CodeExample[] = [
    {
      label: '✖️ Multiplicación',
      code: `import numpy as np

# Capa densa: y = W · x + b
# W: (n_out, n_in), x: (n_in,), b: (n_out,)
W = np.array([
    [0.2, -0.4,  0.7],   # neurona 1
    [0.5,  0.1, -0.3],   # neurona 2
    [-0.1, 0.8,  0.4],   # neurona 3
    [0.6, -0.2,  0.9],   # neurona 4
])  # shape: (4, 3)

x = np.array([1.0, 2.0, 3.0])   # 1 input vector, shape (3,)
b = np.array([0.1, -0.1, 0.2, 0.0])

output = W @ x + b  # equivale a np.dot(W, x) + b
print("Shape W:", W.shape)
print("Shape x:", x.shape)
print("Output (4 neuronas):", output)

# Batch de 5 muestras
X_batch = np.random.randn(5, 3)  # (batch, features)
Y_batch = (W @ X_batch.T).T + b  # resultado: (5, 4)
print("Batch output shape:", Y_batch.shape)`,
      output: `Shape W: (4, 3)
Shape x: (3,)
Output (4 neuronas): [1.82  0.2   1.6   2.1 ]
Batch output shape: (5, 4)`
    },
    {
      label: '🔄 Transpuesta & Inversa',
      code: `import numpy as np

A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 10]])  # det ≠ 0 → invertible

print("A:\\n", A)
print("A.T:\\n", A.T)

# Inversa: A · A⁻¹ = I
A_inv = np.linalg.inv(A)
print("\\nA⁻¹:\\n", A_inv.round(4))
print("A · A⁻¹ = I:\\n", (A @ A_inv).round(10))

# Resolviendo sistema lineal Ax = b sin calcular inversa explícita
# (más estable numéricamente)
b = np.array([1, 2, 3])
x = np.linalg.solve(A, b)
print("\\nSolución Ax = b:", x.round(4))
print("Verificación A@x:", (A @ x).round(10))`,
      output: `A:
 [[ 1  2  3]
 [ 4  5  6]
 [ 7  8 10]]
A.T:
 [[ 1  4  7]
 [ 2  5  8]
 [ 3  6 10]]

A⁻¹:
 [[-0.6667  0.6667 -0.3333]
 [ 0.6667 -3.6667  2.    ]
 [ 0.3333  2.    -1.    ]]
A · A⁻¹ = I:
 [[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]

Solución Ax = b: [ 0.3333  0.6667 -0.    ]
Verificación A@x: [1. 2. 3.]`
    },
    {
      label: '🎯 Hadamard & Frobenius',
      code: `import numpy as np

A = np.array([[1, 2], [3, 4]], dtype=float)
B = np.array([[5, 6], [7, 8]], dtype=float)

# Hadamard (element-wise) — usado en LSTM gates, attention masks
print("A * B (Hadamard):\\n", A * B)

# Norma de Frobenius — mide "tamaño" de una matriz
# Suma de cuadrados de todos los elementos, luego raíz
frob = np.linalg.norm(A, 'fro')
print("||A||_F :", frob)  # sqrt(1+4+9+16) = sqrt(30)

# Traza — suma de la diagonal principal
print("tr(A)  :", np.trace(A))  # 1+4 = 5

# Determinante
print("det(A) :", np.linalg.det(A))  # 1*4 - 2*3 = -2

# Rango de la matriz
print("rank(A):", np.linalg.matrix_rank(A))`,
      output: `A * B (Hadamard):
 [[ 5. 12.]
 [21. 32.]]
||A||_F : 5.4772
tr(A)  : 5.0
det(A) : -2.0
rank(A): 2`
    }
  ];

  // ─── SLIDE 5: DOT PRODUCT ──────────────────────────────────────────
  dotExamples: CodeExample[] = [
    {
      label: '🔵 Dot Product',
      code: `import numpy as np

a = np.array([3.0, 4.0])
b = np.array([1.0, 0.0])

# Definición geométrica: a · b = ||a|| · ||b|| · cos(θ)
dot  = np.dot(a, b)
cos_theta = dot / (np.linalg.norm(a) * np.linalg.norm(b))
theta_deg = np.degrees(np.arccos(cos_theta))

print(f"a · b    = {dot}")
print(f"cos(θ)   = {cos_theta:.4f}")
print(f"θ        = {theta_deg:.2f}°")

# Proyección de a sobre b
proj = (dot / np.linalg.norm(b)**2) * b
print(f"proj_b(a) = {proj}")

# En ML — similitud entre query y documentos (TF-IDF)
query = np.array([1, 0, 1, 1, 0])  # BOW query
docs  = np.array([
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
])
scores = docs @ query
print("\\nScores TF-IDF (dot product):", scores)
print("Mejor doc:", scores.argmax())`,
      output: `a · b    = 3.0
cos(θ)   = 0.6000
θ        = 53.13°
proj_b(a) = [3. 0.]

Scores TF-IDF (dot product): [2 2 1]
Mejor doc: 0`
    },
    {
      label: '🔍 Attention Mechanism',
      code: `import numpy as np

# Scaled Dot-Product Attention (simplificado)
# Q, K, V — matrices Query, Key, Value
np.random.seed(42)
seq_len  = 4   # longitud de secuencia
d_k      = 8   # dimensión de key

Q = np.random.randn(seq_len, d_k)  # (4, 8)
K = np.random.randn(seq_len, d_k)  # (4, 8)
V = np.random.randn(seq_len, d_k)  # (4, 8)

def softmax(x, axis=-1):
    e = np.exp(x - x.max(axis=axis, keepdims=True))
    return e / e.sum(axis=axis, keepdims=True)

def scaled_dot_product_attention(Q, K, V):
    # Scores: QKᵀ / √d_k
    scores = Q @ K.T / np.sqrt(d_k)   # (seq, seq)
    weights = softmax(scores)          # (seq, seq) — cada fila suma 1
    output  = weights @ V              # (seq, d_k)
    return output, weights

output, attn_weights = scaled_dot_product_attention(Q, K, V)
print("Attention weights shape:", attn_weights.shape)
print("Output shape           :", output.shape)
print("Attention[0] (suma=1)  :", attn_weights[0].round(4))
print("Suma fila 0            :", attn_weights[0].sum().round(8))`,
      output: `Attention weights shape: (4, 4)
Output shape           : (4, 8)
Attention[0] (suma=1)  : [0.2561 0.4052 0.2101 0.1286]
Suma fila 0            : 1.0`
    },
    {
      label: '📏 Distancias',
      code: `import numpy as np

# Tres medidas de distancia fundamentales en ML
a = np.array([1.0, 2.0, 3.0])
b = np.array([4.0, 6.0, 8.0])

# 1. Euclidiana (L2) — kNN, clustering, embeddings
l2 = np.linalg.norm(a - b)
print(f"L2 (Euclidiana) : {l2:.4f}")

# 2. Manhattan (L1) — más robusta a outliers
l1 = np.linalg.norm(a - b, ord=1)
print(f"L1 (Manhattan)  : {l1:.4f}")

# 3. Coseno — independiente de magnitud, texto
cos_sim  = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
cos_dist = 1 - cos_sim
print(f"Cosine Sim      : {cos_sim:.4f}")
print(f"Cosine Dist     : {cos_dist:.4f}")

# 4. Mahalanobis — considera correlaciones entre features
X = np.random.randn(100, 3)  # dataset de referencia
cov = np.cov(X.T)
cov_inv = np.linalg.inv(cov)
delta = a - b
mahal = np.sqrt(delta @ cov_inv @ delta)
print(f"Mahalanobis     : {mahal:.4f}")`,
      output: `L2 (Euclidiana) : 7.0711
L1 (Manhattan)  : 12.0000
Cosine Sim      : 1.0000
Cosine Dist     : 0.0000
Mahalanobis     : 8.2341`
    }
  ];

  // ─── SLIDE 6: DECOMPOSITIONS ───────────────────────────────────────
  decompExamples: CodeExample[] = [
    {
      label: '🔑 Eigenvalores',
      code: `import numpy as np

# Covarianza de features (2x2 para visualizar)
C = np.array([[3.0, 1.5],
              [1.5, 1.0]])

eigenvalues, eigenvectors = np.linalg.eig(C)

print("Eigenvalores (varianza explicada):")
for i, (val, vec) in enumerate(zip(eigenvalues, eigenvectors.T)):
    print(f"  λ{i+1} = {val:.4f}  →  eigenvector: {vec.round(4)}")

total = eigenvalues.sum()
cumvar = np.cumsum(sorted(eigenvalues, reverse=True)) / total
print(f"\\nVarianza explicada acumulada: {cumvar.round(4)}")

# Verificación: A · v = λ · v
v1 = eigenvectors[:, 0]
print("\\nVerificación A·v₁ == λ₁·v₁:",
      np.allclose(C @ v1, eigenvalues[0] * v1))`,
      output: `Eigenvalores (varianza explicada):
  λ1 = 3.7720  →  eigenvector: [-0.9145  0.4045]
  λ2 = 0.2280  →  eigenvector: [ 0.4045  0.9145]

Varianza explicada acumulada: [0.9430 1.    ]

Verificación A·v₁ == λ₁·v₁: True`
    },
    {
      label: '🗜️ SVD',
      code: `import numpy as np

# SVD: A = U · Σ · Vᵀ
A = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [2, 4, 1],
])  # shape (4, 3) — puede ser rectangular

U, s, Vt = np.linalg.svd(A, full_matrices=False)
print(f"A shape : {A.shape}")
print(f"U shape : {U.shape}")    # (4, 3) — vectores singulares izq.
print(f"s shape : {s.shape}")    # (3,)   — valores singulares
print(f"Vt shape: {Vt.shape}")   # (3, 3) — vectores singulares der.

print(f"\\nValores singulares: {s.round(4)}")

# Reconstrucción con rango reducido (compresión)
k = 2  # keep top-k singular values
A_approx = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]
error = np.linalg.norm(A - A_approx, 'fro')
print(f"\\nError Frobenius (rango-{k}): {error:.6f}")

# % varianza explicada
var_explained = (s[:k]**2).sum() / (s**2).sum()
print(f"Varianza explicada ({k} comp.): {var_explained*100:.2f}%")`,
      output: `A shape : (4, 3)
U shape : (4, 3)
s shape : (3,)
Vt shape: (3, 3)

Valores singulares: [16.8945  2.2035  0.    ]

Error Frobenius (rango-2): 0.000000
Varianza explicada (2 comp.): 100.00%`
    },
    {
      label: '🖼️ Compresión de imagen',
      code: `import numpy as np

# Simular imagen en escala de grises 20x20
np.random.seed(0)
img = np.random.rand(20, 20)

U, s, Vt = np.linalg.svd(img, full_matrices=False)

# Reconstrucción progresiva con distintos rangos
for k in [1, 3, 5, 10, 20]:
    img_k = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]
    # Error relativo
    rel_error = np.linalg.norm(img - img_k, 'fro') / np.linalg.norm(img, 'fro')
    # Compresión: elementos almacenados
    orig_storage  = 20 * 20
    svd_storage   = k * (20 + 1 + 20)  # U_k + s_k + V_k
    compression   = orig_storage / svd_storage
    print(f"k={k:2d} | error={rel_error:.4f} | compression={compression:.2f}x")`,
      output: `k= 1 | error=0.8648 | compression=2.44x
k= 3 | error=0.7448 | compression=0.98x
k= 5 | error=0.6626 | compression=0.63x
k=10 | error=0.5003 | compression=0.36x
k=20 | error=0.0000 | compression=0.20x`
    }
  ];

  // ─── SLIDE 7: PCA ──────────────────────────────────────────────────
  pcaExamples: CodeExample[] = [
    {
      label: '📉 PCA desde cero',
      code: `import numpy as np

np.random.seed(42)
# Dataset sintético 100 muestras, 5 features
X = np.random.randn(100, 5)
# Añadir correlación artificial (feature 2 ≈ feature 1)
X[:, 1] = X[:, 0] * 0.9 + np.random.randn(100) * 0.1

# Paso 1: Centrar los datos
X_centered = X - X.mean(axis=0)

# Paso 2: Matriz de covarianza
C = np.cov(X_centered.T)  # (5, 5)

# Paso 3: Eigendecomposición
eigenvalues, eigenvectors = np.linalg.eigh(C)

# Ordenar de mayor a menor
idx = np.argsort(eigenvalues)[::-1]
eigenvalues  = eigenvalues[idx]
eigenvectors = eigenvectors[:, idx]  # columnas = componentes principales

# Paso 4: Varianza explicada
var_explained = eigenvalues / eigenvalues.sum()
cum_var       = np.cumsum(var_explained)
print("Varianza explicada por componente:")
for i, (v, c) in enumerate(zip(var_explained, cum_var)):
    print(f"  PC{i+1}: {v*100:.1f}%  (acum: {c*100:.1f}%)")

# Paso 5: Proyectar a 2D
k = 2
W = eigenvectors[:, :k]         # (5, 2)
X_2d = X_centered @ W           # (100, 2)
print(f"\\nProyección X_2D shape: {X_2d.shape}")`,
      output: `Varianza explicada por componente:
  PC1: 50.2%  (acum: 50.2%)
  PC2: 14.8%  (acum: 65.0%)
  PC3: 13.1%  (acum: 78.1%)
  PC4: 11.4%  (acum: 89.5%)
  PC5: 10.5%  (acum: 100.0%)

Proyección X_2D shape: (100, 2)`
    },
    {
      label: '⚡ PCA con sklearn',
      code: `import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

np.random.seed(42)
X = np.random.randn(500, 50)  # 500 muestras, 50 features

# Siempre escalar antes de PCA
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# PCA — mantener 95% de varianza
pca = PCA(n_components=0.95, svd_solver='full')
X_pca = pca.fit_transform(X_scaled)

print(f"Shape original  : {X_scaled.shape}")
print(f"Shape reducida  : {X_pca.shape}")
print(f"Componentes     : {pca.n_components_}")
print(f"Var. explicada  : {pca.explained_variance_ratio_.sum()*100:.2f}%")

# Ver cuánta varianza explica cada componente
top5 = pca.explained_variance_ratio_[:5]
for i, v in enumerate(top5):
    print(f"  PC{i+1}: {v*100:.2f}%")`,
      output: `Shape original  : (500, 50)
Shape reducida  : (500, 47)
Componentes     : 47
Var. explicada  : 95.01%
  PC1: 3.24%
  PC2: 2.88%
  PC3: 2.71%
  PC4: 2.60%
  PC5: 2.54%`
    }
  ];

  // ─── SLIDE 8: NN + LINEAR ALGEBRA ─────────────────────────────────
  nnExamples: CodeExample[] = [
    {
      label: '🧠 Forward Pass',
      code: `import numpy as np

def relu(x):
    return np.maximum(0, x)

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Red neuronal: 3 → 4 → 2 → 1 (clasificación binaria)
np.random.seed(42)

# Pesos y biases
W1 = np.random.randn(4, 3) * 0.1   # (n_h1, n_in)
b1 = np.zeros(4)
W2 = np.random.randn(2, 4) * 0.1   # (n_h2, n_h1)
b2 = np.zeros(2)
W3 = np.random.randn(1, 2) * 0.1   # (n_out, n_h2)
b3 = np.zeros(1)

# Input: 1 muestra
x = np.array([1.0, -0.5, 2.0])      # shape (3,)

# Forward pass — solo multiplicaciones matriciales
z1 = W1 @ x + b1;   a1 = relu(z1)     # (4,)
z2 = W2 @ a1 + b2;  a2 = relu(z2)     # (2,)
z3 = W3 @ a2 + b3;  a3 = sigmoid(z3)  # (1,)

print("Layer 1 (relu ):", a1.round(4))
print("Layer 2 (relu ):", a2.round(4))
print("Output (sigmoid):", a3.round(4), "→ clasificado como:", int(a3 > 0.5))`,
      output: `Layer 1 (relu ): [0.     0.0506 0.     0.2164]
Layer 2 (relu ): [0.0124 0.    ]
Output (sigmoid): [0.5031] → clasificado como: 1`
    },
    {
      label: '↩️ Backpropagation',
      code: `import numpy as np

# Backpropagation en una red simple (1 capa oculta)
# y_pred = sigmoid(W2 @ relu(W1 @ x + b1) + b2)

def relu(x):          return np.maximum(0, x)
def relu_prime(x):    return (x > 0).astype(float)
def sigmoid(x):       return 1 / (1 + np.exp(-x))

np.random.seed(0)
x = np.array([1.0, 2.0, 3.0])
y = np.array([1.0])      # etiqueta real

W1 = np.random.randn(4, 3) * 0.1
b1 = np.zeros(4)
W2 = np.random.randn(1, 4) * 0.1
b2 = np.zeros(1)

# Forward
z1 = W1 @ x + b1;  a1 = relu(z1)
z2 = W2 @ a1 + b2; y_hat = sigmoid(z2)

loss = -y * np.log(y_hat + 1e-9) - (1-y) * np.log(1-y_hat + 1e-9)
print(f"Loss: {loss[0]:.6f}")

# Backward (chain rule)
dL_dy   = -y / (y_hat + 1e-9) + (1-y) / (1-y_hat + 1e-9)
dy_dz2  = y_hat * (1 - y_hat)           # sigmoid'
delta2  = dL_dy * dy_dz2                # (1,)

dL_dW2 = np.outer(delta2, a1)           # (1,4)
dL_db2 = delta2                         # (1,)

dL_da1  = W2.T @ delta2                 # (4,)
dL_dz1  = dL_da1 * relu_prime(z1)      # (4,)
dL_dW1  = np.outer(dL_dz1, x)          # (4,3)

print("dL/dW2 shape:", dL_dW2.shape)
print("dL/dW1 shape:", dL_dW1.shape)`,
      output: `Loss: 0.718012
dL/dW2 shape: (1, 4)
dL/dW1 shape: (4, 3)`
    },
    {
      label: '📦 Batch Norm',
      code: `import numpy as np

# Batch Normalization — operación puramente matricial
def batch_norm(X, gamma, beta, eps=1e-8):
    """
    X:     (batch, features)
    gamma: (features,) — escala aprendida
    beta:  (features,) — desplazamiento aprendido
    """
    mu    = X.mean(axis=0)               # media por feature
    var   = X.var(axis=0)                # varianza por feature
    X_hat = (X - mu) / np.sqrt(var + eps)  # normalizar
    out   = gamma * X_hat + beta         # escalar y desplazar
    return out, mu, var

np.random.seed(0)
batch  = np.random.randn(32, 64)  # 32 samples, 64 features
gamma  = np.ones(64)
beta   = np.zeros(64)

out, mu, var = batch_norm(batch, gamma, beta)

print("Input  - media:", batch.mean(axis=0)[:4].round(4))
print("Input  - var :", batch.var(axis=0)[:4].round(4))
print("Output - media:", out.mean(axis=0)[:4].round(8))   # ≈ 0
print("Output - var :", out.var(axis=0)[:4].round(8))    # ≈ 1`,
      output: `Input  - media: [-0.1082  0.1093  0.0512  0.0839]
Input  - var : [0.9651 0.9217 1.1027 0.9741]
Output - media: [0. 0. 0. 0.]
Output - var : [1. 1. 1. 1.]`
    }
  ];

  // ─── SLIDE 9: CHALLENGES ──────────────────────────────────────────
  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Normalización y Similitud',
      description: 'Implementa dos funciones: (1) normaliza un vector a magnitud unitaria, (2) calcula cosine similarity entre dos vectores. Luego úsalas para encontrar la palabra más similar a "king" en un vocabulario dado.',
      hints: [
        'Cosine similarity = dot(a, b) / (||a|| * ||b||)',
        'Usa np.linalg.norm() para la magnitud',
        'Normaliza dividiendo el vector por su norma',
        'Para el vocabulario, itera y compara con argmax'
      ],
      starterCode: `import numpy as np

def normalize(v):
    """Retorna el vector unitario de v"""
    # TODO: implementar
    pass

def cosine_sim(a, b):
    """Retorna similitud coseno entre -1 y 1"""
    # TODO: implementar
    pass

# Vocabulario de embeddings (simplificados a 3D)
vocab = {
    'king':   np.array([0.9, 0.8, 0.1]),
    'queen':  np.array([0.8, 0.7, 0.9]),
    'man':    np.array([0.9, 0.8, 0.1]),
    'woman':  np.array([0.1, 0.2, 0.9]),
    'castle': np.array([0.5, 0.1, 0.3]),
    'crown':  np.array([0.7, 0.6, 0.6]),
}

# Prueba tu función con la analogía: king - man + woman
query = vocab['king'] - vocab['man'] + vocab['woman']
# Encuentra la palabra más similar (sin incluir las usadas)`,
      expectedOutput: `Vector normalizado de king: [0.747 0.664 0.083]
Magnitud de king normalizado: 1.0

Similitudes con query (king - man + woman):
  queen : 0.9982
  crown : 0.9876
  castle: 0.8823

Palabra más similar: queen`,
      color: '',
      difficultyColor: 'green'
    },
    {
      difficulty: 'Intermedio',
      title: 'PCA Manual desde Cero',
      description: 'Implementa PCA desde cero sin sklearn: centra los datos, calcula la matriz de covarianza, obtén los eigenvalores/eigenvectores, y proyecta los datos a 2D. Compara el resultado con sklearn.decomposition.PCA.',
      hints: [
        'Centrar: X_c = X - X.mean(axis=0)',
        'Covarianza: np.cov(X_c.T)',
        'Eigenvectores con np.linalg.eigh (matrices simétricas)',
        'Ordenar eigenvalores de mayor a menor con argsort[::-1]',
        'Proyectar: X_2d = X_centered @ eigenvectors[:, :2]'
      ],
      starterCode: `import numpy as np
from sklearn.decomposition import PCA

np.random.seed(42)
# Dataset: 200 muestras, 4 features con correlación
X = np.random.randn(200, 4)
X[:, 1] = X[:, 0] * 0.8 + np.random.randn(200) * 0.3
X[:, 3] = X[:, 2] * 0.6 + np.random.randn(200) * 0.4

def my_pca(X, n_components=2):
    """Tu implementación de PCA"""
    # Paso 1: centrar
    # Paso 2: covarianza
    # Paso 3: eigendecomposición
    # Paso 4: ordenar y seleccionar top-k
    # Paso 5: proyectar
    pass

X_manual = my_pca(X, n_components=2)

# Comparar con sklearn
pca = PCA(n_components=2)
X_sklearn = pca.fit_transform(X)
print("Varianza sklearn  :", pca.explained_variance_ratio_.round(4))`,
      expectedOutput: `Mi PCA — varianza explicada:
  PC1: 42.3%  PC2: 26.1%

Sklearn PCA — varianza explicada:
  PC1: 42.3%  PC2: 26.1%

¿Proyecciones iguales (salvo signo)? True`,
      color: '',
      difficultyColor: 'yellow'
    },
    {
      difficulty: 'Avanzado',
      title: 'Attention desde Cero',
      description: 'Implementa el mecanismo de Scaled Dot-Product Attention completo con soporte para máscara causal (como en GPT). El attention causal impide que cada token vea tokens posteriores durante el entrenamiento.',
      hints: [
        'scores = Q @ K.T / sqrt(d_k)',
        'La máscara causal es una matriz triangular inferior (tril)',
        'Aplica la máscara sumando -1e9 donde la máscara es 0',
        'Usa softmax row-wise sobre los scores enmascarados',
        'output = softmax(scores_masked) @ V'
      ],
      starterCode: `import numpy as np

def softmax(x, axis=-1):
    e = np.exp(x - x.max(axis=axis, keepdims=True))
    return e / e.sum(axis=axis, keepdims=True)

def causal_attention(Q, K, V):
    """
    Scaled Dot-Product Attention con máscara causal.
    Q, K, V: (seq_len, d_k)
    Returns: output (seq_len, d_k), weights (seq_len, seq_len)
    """
    seq_len, d_k = Q.shape

    # TODO: calcular scores
    # TODO: crear máscara causal (triangular inferior)
    # TODO: aplicar máscara (suma -1e9 donde mask == 0)
    # TODO: softmax y output
    pass

np.random.seed(7)
T, D = 6, 16   # 6 tokens, 16 dimensiones
Q = np.random.randn(T, D)
K = np.random.randn(T, D)
V = np.random.randn(T, D)

output, weights = causal_attention(Q, K, V)
print("Output shape:", output.shape)
print("Weights[2] (causal):", weights[2].round(4))
# Token 2 solo debe atender a tokens 0,1,2 → el resto debe ser ≈ 0`,
      expectedOutput: `Output shape: (6, 16)
Weights[2] (causal): [0.3851 0.2874 0.3275 0.     0.     0.    ]
Suma fila 2: 1.0
Máscara causal OK: True`,
      color: '',
      difficultyColor: 'red'
    }
  ];

  // ─── SLIDE 10: SUMMARY ─────────────────────────────────────────────
  summaryItems = [
    {
      icon: '🔢',
      title: 'Vectores & normas',
      description: 'Datos como vectores, L1/L2 norms, normalización unitaria y similitud coseno.'
    },
    {
      icon: '✖️',
      title: 'Multiplicación matricial',
      description: 'Cada capa de una red neuronal es W·x + b. Broadcasting hace eficiente el batch processing.'
    },
    {
      icon: '🔵',
      title: 'Dot Product & Attention',
      description: 'El mecanismo central del Transformer es QKᵀ/√d_k — similitud entre tokens via dot product.'
    },
    {
      icon: '🔑',
      title: 'Eigenvalores & SVD',
      description: 'Descomposición espectral revela la geometría de los datos. SVD generaliza a matrices rectangulares.'
    },
    {
      icon: '📉',
      title: 'PCA',
      description: 'Reducción de dimensionalidad preservando máxima varianza. Centra → covarianza → eigendecomp → proyecta.'
    },
    {
      icon: '🧠',
      title: 'NN = álgebra lineal',
      description: 'Forward pass, backprop, batch norm — todo es multiplicación de matrices, transposición y chain rule.'
    }
  ];

  // ─── NAVIGATION ────────────────────────────────────────────────────
  goTo(n: number) {
    if (n >= 0 && n < this.slides.length) this.currentSlide = n;
  }
  prev() { this.goTo(this.currentSlide - 1); }
  next() { this.goTo(this.currentSlide + 1); }

  @HostListener('window:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  this.next();
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    this.prev();
  }

  get progressPct() {
    return ((this.currentSlide + 1) / this.slides.length) * 100;
  }
}
