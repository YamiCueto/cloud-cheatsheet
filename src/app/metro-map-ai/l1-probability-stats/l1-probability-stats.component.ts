import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Challenge { difficulty: 'Principiante' | 'Intermedio' | 'Avanzado'; title: string; description: string; hints: string[]; starterCode: string; expectedOutput: string; color: string; difficultyColor: string; }

@Component({
  selector: 'app-l1-probability-stats',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-probability-stats.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1ProbabilityStatsComponent {
  currentSlide = 0;
  selectedChallenge = 0;

  slides = [
    { type: 'title' }, { type: 'why-stats' }, { type: 'probability' },
    { type: 'distributions' }, { type: 'bayes' }, { type: 'descriptive' },
    { type: 'hypothesis' }, { type: 'correlation' }, { type: 'challenge' }, { type: 'summary' }
  ];

  distributions = [
    { name: 'Normal / Gaussiana', icon: '🔔', code: 'scipy.stats.norm(μ, σ)', use: 'Errores, pesos de NNs (init), CLT', color: 'bg-blue-50' },
    { name: 'Bernoulli / Binomial', icon: '🎲', code: 'scipy.stats.binom(n, p)', use: 'Clasificación binaria, flips de monedas', color: 'bg-green-50' },
    { name: 'Poisson', icon: '⏱️', code: 'scipy.stats.poisson(λ)', use: 'Eventos discretos: clicks/hora, reqs/seg', color: 'bg-yellow-50' },
    { name: 'Uniforme', icon: '📏', code: 'scipy.stats.uniform(a, b)', use: 'Inicialización de pesos (Xavier), dropout', color: 'bg-purple-50' },
    { name: 'Exponencial', icon: '📉', code: 'scipy.stats.expon(λ)', use: 'Tiempo entre eventos, L1 regularización', color: 'bg-red-50' },
    { name: 'Beta', icon: '📐', code: 'scipy.stats.beta(α, β)', use: 'Prior bayesiano para proporciones, CTR', color: 'bg-orange-50' },
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Estadísticas descriptivas de dataset',
      description: 'Calcula media, mediana, moda, varianza, desviación estándar, percentiles y detecta si la distribución es sesgada. Aplica a notas de un examen.',
      hints: ['np.mean, np.median, np.std, np.percentile', 'scipy.stats.mode para la moda', 'Skewness > 0 → sesgo positivo (cola derecha)', 'IQR = P75 - P25'],
      starterCode: `import numpy as np
from scipy import stats

np.random.seed(42)
notas = np.concatenate([
    np.random.normal(75, 10, 80),  # mayoría
    np.random.normal(40, 5, 20)    # grupo bajo (sesgo)
]).clip(0, 100)

# TODO: calcula todas las estadísticas descriptivas
print(f"Media:    {???:.2f}")
print(f"Mediana:  {???:.2f}")
print(f"Std:      {???:.2f}")
print(f"P25/P75:  {???:.1f} / {???:.1f}")
print(f"Skewness: {stats.skew(notas):.3f} ({'negativo ← sesgo izq' if stats.skew(notas) < 0 else 'positivo → sesgo der'})")`,
      expectedOutput: `Media:    70.12\nMediana:  73.45\nStd:      15.23\nP25/P75:  63.2 / 81.4\nSkewness: -0.892 (negativo ← sesgo izq)`,
      color: 'border-l-green-400', difficultyColor: 'bg-green-100 text-green-800'
    },
    {
      difficulty: 'Intermedio',
      title: 'Teorema de Bayes para clasificador de spam',
      description: 'Implementa un clasificador Naive Bayes desde cero para detectar spam. Usa el Teorema de Bayes: P(spam|palabras) ∝ P(palabras|spam) × P(spam).',
      hints: ['Calcular P(spam) y P(ham) del corpus de entrenamiento', 'P(palabra|clase) = (count + 1) / (total + |vocab|) — Laplace smoothing', 'Log probabilities para evitar underflow numérico', 'predict: clase con mayor log-probabilidad'],
      starterCode: `from collections import defaultdict
import math

# Dataset: (texto, label)
train = [
    ("oferta gratis dinero premio", "spam"),
    ("reunión mañana equipo trabajo", "ham"),
    ("ganaste lotería click aquí", "spam"),
    ("proyecto revisión código pull request", "ham"),
    ("descuento urgente oferta gratis", "spam"),
    ("stand-up daily reunión sprint", "ham"),
]

class NaiveBayes:
    def fit(self, datos):
        # TODO: P(clase), P(palabra|clase)
        pass

    def predict(self, texto):
        # TODO: argmax de log-probabilidades
        pass

nb = NaiveBayes()
nb.fit(train)
print(nb.predict("oferta gratis dinero"))     # → spam
print(nb.predict("reunión equipo sprint"))    # → ham`,
      expectedOutput: `spam\nham`,
      color: 'border-l-yellow-400', difficultyColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      difficulty: 'Avanzado',
      title: 'A/B Test con t-test y power analysis',
      description: 'Diseña y analiza un experimento A/B: calcula el tamaño de muestra necesario, ejecuta el test estadístico, calcula p-value, effect size (Cohen\'s d) e intervalos de confianza.',
      hints: ['scipy.stats.ttest_ind para t-test independiente', 'Effect size Cohen\'s d = (μA - μB) / σ_pooled', 'Power analysis: import statsmodels.stats.power', 'CI 95%: mean ± 1.96 * (std / sqrt(n))'],
      starterCode: `import numpy as np
from scipy import stats

np.random.seed(42)
# Tasas de conversión simuladas
control   = np.random.beta(2, 8, 1000) * 100  # ~20% conversión
variante = np.random.beta(2.4, 8, 1000) * 100 # ~23% conversión

# TODO: 1. t-test independiente (H0: no diferencia)
t_stat, p_value = None, None

# TODO: 2. Effect size Cohen's d
cohens_d = None

# TODO: 3. Intervalos de confianza 95%
ci_control  = None
ci_variante = None

print(f"p-value: {p_value:.4f} → {'Significativo' if p_value < 0.05 else 'No significativo'}")
print(f"Cohen's d: {cohens_d:.3f} ({'grande' if cohens_d > 0.5 else 'mediano' if cohens_d > 0.2 else 'pequeño'})")`,
      expectedOutput: `p-value: 0.0012 → Significativo\nCohen's d: 0.152 (pequeño)`,
      color: 'border-l-red-400', difficultyColor: 'bg-red-100 text-red-800'
    }
  ];

  nextStation = { name: 'Calculus for Optimization', route: '/metro-map-ai/l1-calculus', description: 'Derivadas, gradientes y descenso del gradiente — cómo aprenden las redes neuronales.' };

  nextSlide()  { if (this.currentSlide < this.slides.length - 1) this.currentSlide++; }
  prevSlide()  { if (this.currentSlide > 0) this.currentSlide--; }
  goToSlide(i: number) { this.currentSlide = i; }

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); this.nextSlide(); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); this.prevSlide(); }
  }
}
