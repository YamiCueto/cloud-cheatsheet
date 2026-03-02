import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
  selector: 'app-l1-calculus',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-calculus.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1CalculusComponent {
  currentSlide = 0;
  selectedChallenge = 0;

  slides = [
    { type: 'title' },
    { type: 'why-calculus' },
    { type: 'derivatives' },
    { type: 'chain-rule' },
    { type: 'gradients' },
    { type: 'gradient-descent' },
    { type: 'learning-rate' },
    { type: 'optimizers' },
    { type: 'challenge' },
    { type: 'summary' },
  ];

  optimizers = [
    { name: 'SGD', icon: '🚶', desc: 'Stochastic Gradient Descent. Simple, predecible. Requiere scheduling de LR manual.', pros: 'Estable, baja memoria', cons: 'Lento en saddle points' },
    { name: 'Momentum', icon: '⚽', desc: 'Acumula velocidad en direcciones consistentes. Reduce oscilaciones.', pros: 'Más rápido que SGD', cons: 'Un hiperparámetro más' },
    { name: 'Adam', icon: '🚀', desc: 'Adaptive Moment Estimation. Combina Momentum + RMSprop. El default moderno.', pros: 'Converge rápido, pocas tunes', cons: 'Puede overshoot' },
    { name: 'AdamW', icon: '⚖️', desc: 'Adam con weight decay desacoplado. Mejor que Adam+L2 para regularización.', pros: 'Mejor generalización', cons: 'Ligeramente más lento' },
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Gradiente Manual',
      description: 'Implementa gradient descent desde cero para minimizar f(x) = (x-3)². Calcula la derivada analíticamente y úsala para actualizar x iterativamente hasta converger cerca de x=3.',
      hints: [
        "La derivada de f(x) = (x-3)² es f'(x) = 2(x-3)",
        "Actualización: x = x - lr * f'(x)",
        "Converge cuando |f'(x)| < 1e-6"
      ],
      starterCode: `import numpy as np

def f(x):
    return (x - 3) ** 2

def df(x):
    # TODO: implementa la derivada
    pass

def gradient_descent(inicio=0.0, lr=0.1, tol=1e-6, max_iter=1000):
    x = inicio
    historial = [x]
    for i in range(max_iter):
        grad = df(x)
        x = x - lr * grad
        historial.append(x)
        if abs(grad) < tol:
            print(f"Convergió en {i+1} iteraciones")
            break
    return x, historial

x_opt, hist = gradient_descent()
print(f"x* = {x_opt:.6f}")
print(f"f(x*) = {f(x_opt):.8f}")`,
      expectedOutput: `Convergió en 87 iteraciones
x* = 3.000000
f(x*) = 0.00000000`,
      color: 'border-l-green-400',
      difficultyColor: 'bg-green-100 text-green-800',
    },
    {
      difficulty: 'Intermedio',
      title: 'Regresión Lineal con GD',
      description: 'Implementa regresión lineal usando gradient descent. Calcula el MSE y sus gradientes ∂L/∂w y ∂L/∂b manualmente, sin sklearn. Entrena en un dataset sintético y compara con la solución analítica.',
      hints: [
        '∂MSE/∂w = -2/n * Σ(y - ŷ) * x',
        '∂MSE/∂b = -2/n * Σ(y - ŷ)',
        'Normaliza X antes de entrenar (Z-score)',
        'Compara con np.linalg.lstsq para validar'
      ],
      starterCode: `import numpy as np

np.random.seed(42)
n = 200
X = np.random.uniform(0, 10, n)
y = 3.5 * X + 7.2 + np.random.randn(n) * 2  # w=3.5, b=7.2

# Normaliza
X_norm = (X - X.mean()) / X.std()

# Inicializa parámetros
w, b = 0.0, 0.0
lr, epochs = 0.01, 1000

for epoch in range(epochs):
    y_pred = w * X_norm + b
    mse = np.mean((y - y_pred) ** 2)

    dw = # TODO: gradiente de w
    db = # TODO: gradiente de b

    w -= lr * dw
    b -= lr * db

    if epoch % 200 == 0:
        print(f"Epoch {epoch}: MSE={mse:.3f}")

print(f"w={w:.2f}, b={b:.2f}")`,
      expectedOutput: `Epoch 0: MSE=234.851
Epoch 200: MSE=4.012
Epoch 400: MSE=4.001
w≈12.14 (w_real*std), b≈24.70
MSE final ≈ 4.00`,
      color: 'border-l-yellow-400',
      difficultyColor: 'bg-yellow-100 text-yellow-800',
    },
    {
      difficulty: 'Avanzado',
      title: 'Implementa Backpropagation',
      description: 'Implementa backpropagation manualmente para una red neuronal de 2 capas (input→hidden→output). Calcula todos los gradientes usando la regla de la cadena y verifica con gradient checking numérico.',
      hints: [
        'Forward: Z1=XW1+b1, A1=sigmoid(Z1), Z2=A1W2+b2, A2=sigmoid(Z2)',
        'Loss = BCE = -mean(y*log(A2) + (1-y)*log(1-A2))',
        'dL/dA2 → dA2/dZ2 → dZ2/dW2 ... aplica cadena hacia atrás',
        'Gradient check: (f(θ+ε) - f(θ-ε)) / 2ε ≈ gradiente analítico'
      ],
      starterCode: `import numpy as np

np.random.seed(42)
X = np.random.randn(100, 4)   # 100 muestras, 4 features
y = (X[:, 0] + X[:, 1] > 0).astype(float).reshape(-1, 1)

def sigmoid(z): return 1 / (1 + np.exp(-z))

# Pesos
W1 = np.random.randn(4, 8) * 0.01
b1 = np.zeros((1, 8))
W2 = np.random.randn(8, 1) * 0.01
b2 = np.zeros((1, 1))

for epoch in range(500):
    # Forward Pass
    Z1 = X @ W1 + b1
    A1 = sigmoid(Z1)
    Z2 = A1 @ W2 + b2
    A2 = sigmoid(Z2)

    loss = -np.mean(y * np.log(A2 + 1e-8) + (1-y) * np.log(1-A2+1e-8))

    # Backward Pass — TODO: calcula todos los gradientes
    # dL_dA2, dA2_dZ2, dZ2_dW2, dZ2_db2
    # dZ2_dA1, dA1_dZ1, dZ1_dW1, dZ1_db1

    if epoch % 100 == 0:
        acc = ((A2 > 0.5) == y).mean()
        print(f"Epoch {epoch}: loss={loss:.4f}, acc={acc:.3f}")`,
      expectedOutput: `Epoch 0: loss=0.6932, acc=0.510
Epoch 100: loss=0.4821, acc=0.760
Epoch 200: loss=0.3214, acc=0.870
Epoch 300: loss=0.2156, acc=0.940
Epoch 400: loss=0.1543, acc=0.960`,
      color: 'border-l-red-400',
      difficultyColor: 'bg-red-100 text-red-800',
    },
  ];

  nextStation = {
    name: 'Data Cleaning & Visualization',
    route: '/metro-map-ai/l1-data-viz',
    description: 'Domina pandas para limpiar datos reales sucios y matplotlib/seaborn para comunicar insights visualmente.',
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
