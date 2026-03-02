import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CodeExample { label: string; code: string; output?: string; }
interface Challenge {
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  title: string; description: string; hints: string[];
  starterCode: string; expectedOutput: string;
  color: string; difficultyColor: string;
}

@Component({
  selector: 'app-l1-dsa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-dsa.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1DsaComponent {
  currentSlide = 0;
  activeSortTab = 0;
  activeTreeTab = 0;
  selectedChallenge = 0;

  slides = [
    { type: 'title' },
    { type: 'why-dsa' },
    { type: 'big-o' },
    { type: 'arrays-hashmaps' },
    { type: 'trees-graphs' },
    { type: 'sorting' },
    { type: 'searching' },
    { type: 'ml-patterns' },
    { type: 'challenge' },
    { type: 'summary' }
  ];

  bigOConcepts = [
    { icon: '⚡', name: 'O(1)', label: 'Constante', example: 'dict lookup, array[i]', color: 'bg-green-50', border: '#22c55e' },
    { icon: '📈', name: 'O(log n)', label: 'Logarítmico', example: 'Binary search, BST', color: 'bg-blue-50', border: '#3b82f6' },
    { icon: '➡️', name: 'O(n)', label: 'Lineal', example: 'Linear search, forEach', color: 'bg-yellow-50', border: '#eab308' },
    { icon: '📊', name: 'O(n log n)', label: 'Linearítmico', example: 'Merge sort, Python sort()', color: 'bg-orange-50', border: '#f97316' },
    { icon: '🔺', name: 'O(n²)', label: 'Cuadrático', example: 'Bubble/Insertion sort', color: 'bg-red-50', border: '#ef4444' },
    { icon: '💥', name: 'O(2ⁿ)', label: 'Exponencial', example: 'Fibonacci recursivo', color: 'bg-purple-50', border: '#a855f7' },
  ];

  sortingExamples: CodeExample[] = [
    {
      label: '⚡ Merge Sort O(n log n)',
      code: `def merge_sort(arr):
    """Divide y vencerás — O(n log n) garantizado."""
    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2
    left  = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result

# Uso
datos = [64, 34, 25, 12, 22, 11, 90]
print(merge_sort(datos))

# Python built-in (Timsort = Merge + Insertion)
datos.sort()          # in-place O(n log n)
ordenado = sorted(datos)  # nueva lista`,
      output: `[11, 12, 22, 25, 34, 64, 90]`
    },
    {
      label: '🔑 Quicksort adaptativo',
      code: `import random

def quicksort(arr):
    """Promedio O(n log n), worst O(n²) pero raro con pivot aleatorio."""
    if len(arr) <= 1:
        return arr

    pivot = random.choice(arr)  # pivot aleatorio evita worst case
    menores = [x for x in arr if x < pivot]
    iguales  = [x for x in arr if x == pivot]
    mayores  = [x for x in arr if x > pivot]

    return quicksort(menores) + iguales + quicksort(mayores)

# Sorting personalizado (clave en ML para rankings)
modelos = [
    {'nombre': 'SVM', 'accuracy': 0.92},
    {'nombre': 'RF',  'accuracy': 0.95},
    {'nombre': 'LR',  'accuracy': 0.87},
]

# Ordenar por accuracy descendente
modelos.sort(key=lambda m: m['accuracy'], reverse=True)
for m in modelos:
    print(f"{m['nombre']}: {m['accuracy']:.2%}")`,
      output: `RF:  95.00%\nSVM: 92.00%\nLR:  87.00%`
    },
    {
      label: '📊 Counting Sort (para labels)',
      code: `def counting_sort(arr, max_val):
    """O(n + k) — ideal para labels discretas (0..k)."""
    count = [0] * (max_val + 1)
    for x in arr:
        count[x] += 1

    resultado = []
    for val, freq in enumerate(count):
        resultado.extend([val] * freq)
    return resultado

# Común en ML: ordenar/contar labels de clase
labels = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
sorted_labels = counting_sort(labels, max_val=9)
print("Ordenado:", sorted_labels)

# Distribución de clases (class imbalance check)
from collections import Counter
dist = Counter(labels)
print("Distribución:", dict(sorted(dist.items()))  )`,
      output: `Ordenado: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]\nDistribución: {1: 2, 2: 1, 3: 2, 4: 1, 5: 3, 6: 1, 9: 1}`
    }
  ];

  treeExamples: CodeExample[] = [
    {
      label: '🌳 Árbol Binario de Búsqueda',
      code: `class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None

class BST:
    def __init__(self):
        self.raiz = None

    def insertar(self, valor):
        if not self.raiz:
            self.raiz = Nodo(valor)
        else:
            self._insertar(self.raiz, valor)

    def _insertar(self, nodo, valor):
        if valor < nodo.valor:
            if nodo.izq: self._insertar(nodo.izq, valor)
            else: nodo.izq = Nodo(valor)
        else:
            if nodo.der: self._insertar(nodo.der, valor)
            else: nodo.der = Nodo(valor)

    def inorden(self, nodo=None, first_call=True):
        if first_call: nodo = self.raiz
        if nodo:
            self.inorden(nodo.izq, False)
            print(nodo.valor, end=' ')
            self.inorden(nodo.der, False)

bst = BST()
for v in [5, 3, 7, 1, 4, 6, 8]:
    bst.insertar(v)
bst.inorden()  # ordenado automáticamente!`,
      output: `1 3 4 5 6 7 8`
    },
    {
      label: '📊 Heap & Priority Queue',
      code: `import heapq

# Min-Heap — O(log n) insert, O(1) min access
heap = []
for val in [3, 1, 4, 1, 5, 9, 2]:
    heapq.heappush(heap, val)

print("Mínimo:", heap[0])   # 1
print("Pop min:", heapq.heappop(heap))  # 1
print("Siguiente:", heap[0])  # 1

# Caso de uso en ML: Top-K vecinos más cercanos (KNN)
def top_k_similares(embeddings, query, k=3):
    """Retorna k embeddings más similares usando priority queue."""
    heap = []
    for i, emb in enumerate(embeddings):
        similitud = sum(a*b for a,b in zip(query, emb))  # dot product
        heapq.heappush(heap, (-similitud, i))  # negativo = max-heap

    return [heapq.heappop(heap) for _ in range(k)]

# Heapq para streaming k-max sin sort completo O(n log k) vs O(n log n)
datos = [5, 2, 8, 1, 9, 3, 7, 4, 6]
top3 = heapq.nlargest(3, datos)
print("Top 3:", top3)`,
      output: `Mínimo: 1\nPop min: 1\nSiguiente: 1\nTop 3: [9, 8, 7]`
    }
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Frecuencia de palabras con HashMap',
      description: 'Dado un texto, cuenta la frecuencia de cada palabra usando un diccionario (hashmap) y retorna las 5 más frecuentes. Análisis de frecuencia de tokens es el paso 0 de NLP.',
      hints: [
        'Usa un dict o collections.Counter',
        'str.lower().split() para tokenizar',
        'sorted(freq.items(), key=lambda x: x[1], reverse=True)[:5]'
      ],
      starterCode: `from collections import Counter

texto = """machine learning deep learning neural networks
machine learning algorithms data science python data
neural networks deep learning transformers attention"""

# TODO: cuenta frecuencias sin Counter (usando dict puro)
def contar_palabras(texto):
    palabras = texto.lower().split()
    freq = {}
    # Tu código aquí
    return freq

freq = contar_palabras(texto)
top5 = sorted(freq.items(), key=lambda x: x[1], reverse=True)[:5]
for palabra, count in top5:
    print(f"{palabra:20s}: {count}")`,
      expectedOutput: `learning            : 4\nmachine             : 2\ndeep                : 2\nneural              : 2\nnetworks            : 2`,
      color: 'border-l-green-400',
      difficultyColor: 'bg-green-100 text-green-800'
    },
    {
      difficulty: 'Intermedio',
      title: 'Binary Search en dataset ordenado',
      description: 'Implementa binary search para buscar un umbral de activación en un array de logits ordenados. Luego implementa la búsqueda del mejor threshold que maximiza F1-score.',
      hints: [
        'Binary search: low=0, high=len-1, mid=(low+high)//2',
        'O(log n) vs O(n) lineal — 30 pasos para n=10^9',
        'Para F1: prueba umbrales [0.0, 0.1, ..., 1.0] y calcula precision/recall'
      ],
      starterCode: `def binary_search(arr, target):
    """Busca target en arr ordenado. Retorna índice o -1."""
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = # ???
        if arr[mid] == target: return mid
        elif arr[mid] < target: # ???
        else: # ???
    return -1

logits = sorted([0.1, 0.3, 0.55, 0.72, 0.85, 0.91, 0.95])
print(binary_search(logits, 0.72))   # → 3
print(binary_search(logits, 0.50))   # → -1`,
      expectedOutput: `3\n-1`,
      color: 'border-l-yellow-400',
      difficultyColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      difficulty: 'Avanzado',
      title: 'Graph BFS para detección de comunidades',
      description: 'Implementa BFS sobre un grafo de similitud entre documentos. Encuentra todos los "clusters" conectados (comunidades) donde la similitud supera un umbral.',
      hints: [
        'Representa el grafo como dict de adjacencia {nodo: [vecinos]}',
        'BFS usa una cola (collections.deque) para explorar nivel por nivel',
        'Cada componente conectada = una comunidad/cluster',
        'Este patrón = base de Community Detection en Graph Neural Networks'
      ],
      starterCode: `from collections import deque

# Grafo de similitud entre documentos
grafo = {
    'doc1': ['doc2', 'doc3'],
    'doc2': ['doc1', 'doc4'],
    'doc3': ['doc1'],
    'doc4': ['doc2'],
    'doc5': ['doc6'],  # comunidad separada
    'doc6': ['doc5'],
}

def bfs_componentes(grafo):
    """Encuentra todas las componentes conectadas."""
    visitados = set()
    comunidades = []

    for nodo in grafo:
        if nodo not in visitados:
            # BFS desde este nodo
            comunidad = []
            cola = deque([nodo])
            while cola:
                actual = cola.popleft()
                # TODO: completa el BFS
                pass
            comunidades.append(comunidad)

    return comunidades

for i, c in enumerate(bfs_componentes(grafo)):
    print(f"Comunidad {i+1}: {sorted(c)}")`,
      expectedOutput: `Comunidad 1: ['doc1', 'doc2', 'doc3', 'doc4']\nComunidad 2: ['doc5', 'doc6']`,
      color: 'border-l-red-400',
      difficultyColor: 'bg-red-100 text-red-800'
    }
  ];

  nextStation = { name: 'Linear Algebra for ML', route: '/metro-map-ai/l1-linear-algebra', description: 'Vectores, matrices, eigenvalores y SVD — el lenguaje matemático de las redes neuronales.' };

  nextSlide()  { if (this.currentSlide < this.slides.length - 1) this.currentSlide++; }
  prevSlide()  { if (this.currentSlide > 0) this.currentSlide--; }
  goToSlide(i: number) { this.currentSlide = i; }

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); this.nextSlide(); }
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   { e.preventDefault(); this.prevSlide(); }
  }
}
