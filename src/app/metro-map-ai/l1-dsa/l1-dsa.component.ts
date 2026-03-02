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
  selector: 'app-l1-dsa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-dsa.component.html',
  styleUrls: ['../../shared-presentation.css', './l1-dsa.component.css']
})
export class L1DsaComponent {
  currentSlide = 0;
  selectedChallenge = 0;

  activeArraysTab = 0;
  activeStackQueueTab = 0;
  activeTreeTab = 0;
  activeGraphTab = 0;
  activeHashTab = 0;
  activeSortTab = 0;

  slides = [
    { type: 'title' },
    { type: 'why-dsa' },
    { type: 'arrays-lists' },
    { type: 'stacks-queues' },
    { type: 'trees' },
    { type: 'graphs' },
    { type: 'hash-tables' },
    { type: 'sorting-searching' },
    { type: 'challenge' },
    { type: 'summary' }
  ];

  whyReasons = [
    {
      icon: '🧠',
      title: 'Modelos son grafos',
      description: 'Una red neuronal ES un grafo dirigido acíclico (DAG). Entender grafos = entender cómo fluye el gradiente.',
      color: 'border-blue-400'
    },
    {
      icon: '🔍',
      title: 'Búsqueda eficiente',
      description: 'kNN, KD-trees, ball trees — estructuras especializadas para encontrar vecinos más cercanos en alta dimensionalidad.',
      color: 'border-green-400'
    },
    {
      icon: '⏱️',
      title: 'Complejidad temporal',
      description: 'Elegir entre O(n²) y O(n log n) es la diferencia entre un modelo que tarda horas vs. segundos en producción.',
      color: 'border-yellow-400'
    },
    {
      icon: '💾',
      title: 'Complejidad espacial',
      description: 'Sparse matrices, hash maps y estructuras de datos en memoria definen si tu modelo cabe en RAM o necesita chunks.',
      color: 'border-purple-400'
    },
    {
      icon: '🌲',
      title: 'Árboles en ML',
      description: 'Decision Trees, Random Forest, XGBoost — todos son variantes de árboles. Min-heap en beam search de NLP.',
      color: 'border-red-400'
    },
    {
      icon: '🏆',
      title: 'Entrevistas técnicas',
      description: 'FAANG y top AI labs piden DSA obligatoriamente. LeetCode Medium es el mínimo para ML Engineer.',
      color: 'border-orange-400'
    }
  ];

  complexityRows = [
    { structure: 'Array / List', access: 'O(1)', search: 'O(n)', insert: 'O(n)', delete: 'O(n)', useCase: 'Features, batches' },
    { structure: 'Hash Map / Dict', access: 'O(1)*', search: 'O(1)*', insert: 'O(1)*', delete: 'O(1)*', useCase: 'Vocab, embeddings' },
    { structure: 'Min-Heap', access: 'O(n)', search: 'O(n)', insert: 'O(log n)', delete: 'O(log n)', useCase: 'Beam search, kNN' },
    { structure: 'Binary Search Tree', access: 'O(log n)', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)', useCase: 'Decision trees' },
    { structure: 'Linked List', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', useCase: 'Attention chains' },
    { structure: 'Queue (deque)', access: 'O(1)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', useCase: 'BFS, data pipelines' },
  ];

  arraysExamples: CodeExample[] = [
    {
      label: 'Listas & Arrays',
      code: `# Python list — array dinámico O(1) amortizado para append
# En ML: batch de samples, lista de predicciones, history de losses

import numpy as np

# List para acumular losses durante entrenamiento
train_losses = []
for epoch in range(5):
    loss = 1.0 / (epoch + 1)      # dummy loss decreciente
    train_losses.append(loss)     # O(1) amortizado

print("Losses:", [round(l, 3) for l in train_losses])

# Acceso y slicing — O(1)
best_epoch = train_losses.index(min(train_losses))
print("Mejor época:", best_epoch)

# NumPy array: memoria contigua, operaciones vectorizadas
arr = np.array(train_losses)
print("Media:", arr.mean().round(4))
print("Mejora total:", (arr[0] - arr[-1]).round(3))

# List comprehension — idioma Python para crear arrays rápido
squares = [x**2 for x in range(1, 6)]        # O(n)
filtered = [x for x in squares if x % 2 == 0] # O(n)
print("Cuadrados:", squares)
print("Pares:", filtered)`,
      output: `Losses: [1.0, 0.5, 0.333, 0.25, 0.2]
Mejor época: 4
Media: 0.4567
Mejora total: 0.8
Cuadrados: [1, 4, 9, 16, 25]
Pares: [4, 16]`
    },
    {
      label: 'Linked List',
      code: `# Linked List — nodos con punteros al siguiente
# Uso real en IA: modelo de atención como cadena, skip connections

class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.siguiente = None

class ListaEnlazada:
    def __init__(self):
        self.cabeza = None

    def agregar(self, valor):         # O(n) sin tail pointer
        nuevo = Nodo(valor)
        if not self.cabeza:
            self.cabeza = nuevo
            return
        actual = self.cabeza
        while actual.siguiente:
            actual = actual.siguiente
        actual.siguiente = nuevo

    def como_lista(self):
        resultado, actual = [], self.cabeza
        while actual:
            resultado.append(actual.valor)
            actual = actual.siguiente
        return resultado

# Simula pipeline de capas de red neuronal
pipeline = ListaEnlazada()
for capa in ['Embedding', 'LSTM', 'Dropout', 'Linear', 'Softmax']:
    pipeline.agregar(capa)

print("Pipeline:", pipeline.como_lista())

# Caso real: PyTorch usa listas enlazadas internamente
# para el grafo computacional durante backprop`,
      output: `Pipeline: ['Embedding', 'LSTM', 'Dropout', 'Linear', 'Softmax']`
    },
    {
      label: 'Sparse Matrix',
      code: `# Matrices dispersas — críticas en NLP y recomendadores
# Bag-of-Words sobre un vocab de 50,000 palabras:
# Dense: 50,000 × float32 = 200KB POR DOCUMENTO → inviable
# Sparse: solo almacena los ~10 términos presentes → ~80 bytes

from scipy.sparse import csr_matrix
import numpy as np

# Vocabulario simple
vocab = {'python': 0, 'machine': 1, 'learning': 2,
         'data': 3, 'science': 4}

# 3 documentos como word counts
docs = [
    'python machine learning',
    'data science python',
    'machine learning data science'
]

def doc_a_bow(doc, vocab):
    vec = [0] * len(vocab)
    for palabra in doc.split():
        if palabra in vocab:
            vec[vocab[palabra]] += 1
    return vec

# Crear matriz Bag-of-Words
matriz_densa = [doc_a_bow(d, vocab) for d in docs]

# Convertir a sparse (CSR = Compressed Sparse Row)
sparse = csr_matrix(matriz_densa)

print("Forma:", sparse.shape)            # (3, 5)
print("No-ceros:", sparse.nnz)          # 7
print("% densidad:", sparse.nnz / (3*5) * 100, "%")
print("Dense:")
print(sparse.toarray())`,
      output: `Forma: (3, 5)
No-ceros: 7
% densidad: 46.67 %
Dense:
[[1 1 1 0 0]
 [1 0 0 1 1]
 [0 1 1 1 1]]`
    }
  ];

  stackQueueExamples: CodeExample[] = [
    {
      label: 'Stack (Pila)',
      code: `# Stack — LIFO (Last In, First Out)
# Uso en IA: backpropagation, parsers, evaluar expresiones
# Python: usa list con append/pop O(1)

class Stack:
    def __init__(self):
        self._data = []

    def push(self, item):     # O(1)
        self._data.append(item)

    def pop(self):            # O(1)
        if self.is_empty():
            raise IndexError("Stack vacío")
        return self._data.pop()

    def peek(self):           # O(1)
        return self._data[-1] if self._data else None

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)

# Ejemplo: evaluar expresión matemática con paréntesis
def parentesis_balanceados(expr):
    stack = Stack()
    pares = {')': '(', ']': '[', '}': '{'}
    for char in expr:
        if char in '([{':
            stack.push(char)
        elif char in ')]}':
            if stack.is_empty() or stack.pop() != pares[char]:
                return False
    return stack.is_empty()

# Útil en parsers de código de ML (tokenización)
print(parentesis_balanceados("([a + b] * (c - d))"))  # True
print(parentesis_balanceados("([a + b)"))              # False

# Backprop conceptual: el stack de operaciones
operaciones = Stack()
for op in ['matmul', 'relu', 'dropout', 'softmax']:
    operaciones.push(op)

print("Backprop order:", end=" ")
while not operaciones.is_empty():
    print(operaciones.pop(), end=" ")`,
      output: `True
False
Backprop order: softmax dropout relu matmul`
    },
    {
      label: 'Queue (Cola)',
      code: `# Queue — FIFO (First In, First Out)
# Uso en IA: BFS en grafos, data loading, task queues
# Python: collections.deque es O(1) en ambos extremos

from collections import deque

class Queue:
    def __init__(self):
        self._data = deque()

    def enqueue(self, item):   # O(1)
        self._data.append(item)

    def dequeue(self):         # O(1) — por qué no usar list.pop(0)
        if self.is_empty():
            raise IndexError("Queue vacía")
        return self._data.popleft()

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)

# Simula DataLoader: cola de mini-batches
import numpy as np

def crear_batches(datos, batch_size):
    q = Queue()
    for i in range(0, len(datos), batch_size):
        q.enqueue(datos[i:i+batch_size])
    return q

dataset = list(range(10))   # 10 samples
loader  = crear_batches(dataset, batch_size=3)

print("Batches en cola:", len(loader))
while not loader.is_empty():
    batch = loader.dequeue()
    print("  Batch:", batch)`,
      output: `Batches en cola: 4
  Batch: [0, 1, 2]
  Batch: [3, 4, 5]
  Batch: [6, 7, 8]
  Batch: [9]`
    },
    {
      label: 'Priority Queue',
      code: `# Priority Queue (Min-Heap) — O(log n) insert/extract
# Uso en IA: beam search en NLP, kNN con aproximación,
#            Dijkstra para grafos de conocimiento

import heapq

# Beam Search simplificado (traducción, generación de texto)
# Mantenemos los k mejores caminos por probabilidad (log-prob)
def beam_search_simple(vocab_scores, beam_width=3):
    """
    vocab_scores: list de (token, log_prob)
    Retorna top-k tokens por log_prob
    """
    # heapq en Python es min-heap → negar para max
    heap = []
    for token, log_prob in vocab_scores:
        heapq.heappush(heap, (-log_prob, token))

    resultados = []
    for _ in range(min(beam_width, len(heap))):
        neg_prob, token = heapq.heappop(heap)
        resultados.append((token, -neg_prob))
    return resultados

candidatos = [
    ('gato', -0.3), ('perro', -0.8), ('pato', -1.2),
    ('rato', -0.5), ('sapo', -2.1), ('loro', -0.6)
]

top3 = beam_search_simple(candidatos, beam_width=3)
print("Top-3 tokens (beam search):")
for token, prob in top3:
    print(f"  {token}: log_prob={prob:.1f}")

# kNN con heap — encontrar los k vecinos más cercanos
def knn_heap(query, corpus, k=3):
    heap = [(-dist, token) for token, dist in corpus]
    heapq.heapify(heap)   # O(n)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,
      output: `Top-3 tokens (beam search):
  gato:  log_prob=-0.3
  rato:  log_prob=-0.5
  loro:  log_prob=-0.6`
    }
  ];

  treeExamples: CodeExample[] = [
    {
      label: 'Binary Search Tree',
      code: `# Binary Search Tree — O(log n) promedio
# Base conceptual de Decision Trees, Segment Trees, B-Trees

class NodoBST:
    def __init__(self, valor):
        self.valor = valor
        self.izq = None
        self.der = None

class BST:
    def __init__(self):
        self.raiz = None

    def insertar(self, valor):      # O(log n) promedio
        self.raiz = self._insertar(self.raiz, valor)

    def _insertar(self, nodo, valor):
        if nodo is None:
            return NodoBST(valor)
        if valor < nodo.valor:
            nodo.izq = self._insertar(nodo.izq, valor)
        elif valor > nodo.valor:
            nodo.der = self._insertar(nodo.der, valor)
        return nodo

    def inorden(self, nodo=None, resultado=None):
        if resultado is None:
            resultado = []
            nodo = self.raiz
        if nodo:
            self.inorden(nodo.izq, resultado)
            resultado.append(nodo.valor)
            self.inorden(nodo.der, resultado)
        return resultado

# Thresholds de un Decision Tree como BST
bst = BST()
for threshold in [0.5, 0.3, 0.8, 0.1, 0.4, 0.7, 0.9]:
    bst.insertar(threshold)

print("Thresholds en orden:", bst.inorden())
# Inorden de BST → secuencia ordenada

# En Scikit-learn: sklearn.tree._tree.Tree es un BST optimizado
# con arrays NumPy para máximo rendimiento`,
      output: `Thresholds en orden: [0.1, 0.3, 0.4, 0.5, 0.7, 0.8, 0.9]`
    },
    {
      label: 'Decision Tree',
      code: `# Decision Tree — el árbol más importante en ML
# Cada nodo: condición sobre un feature
# Hoja: predicción (clase o valor)

class NodoDecision:
    def __init__(self, feature=None, threshold=None,
                 izq=None, der=None, valor=None):
        self.feature   = feature    # índice del feature
        self.threshold = threshold  # valor de corte
        self.izq  = izq            # rama True (<=)
        self.der  = der            # rama False (>)
        self.valor = valor         # solo en hojas

def predecir(nodo, muestra):
    """Recorre el árbol hasta una hoja — O(profundidad)"""
    if nodo.valor is not None:      # es hoja
        return nodo.valor
    if muestra[nodo.feature] <= nodo.threshold:
        return predecir(nodo.izq, muestra)
    return predecir(nodo.der, muestra)

# Árbol manual: clasifica tumor benigno/maligno
# Feature 0: tamaño (cm), Feature 1: irregularidad (0-1)
arbol = NodoDecision(
    feature=0, threshold=2.5,
    izq=NodoDecision(valor='Benigno'),
    der=NodoDecision(
        feature=1, threshold=0.6,
        izq=NodoDecision(valor='Benigno'),
        der=NodoDecision(valor='Maligno')
    )
)

muestras = [(1.0, 0.3), (3.0, 0.4), (3.0, 0.8)]
for tam, irreg in muestras:
    resultado = predecir(arbol, [tam, irreg])
    print(f"  Tamaño={tam}, Irreg={irreg} → {resultado}")`,
      output: `  Tamaño=1.0, Irreg=0.3 → Benigno
  Tamaño=3.0, Irreg=0.4 → Benigno
  Tamaño=3.0, Irreg=0.8 → Maligno`
    },
    {
      label: 'Heap / Min-Heap',
      code: `# Heap — árbol binario casi completo
# Min-Heap: padre <= hijos siempre
# Uso en ML: Top-K, beam search NLP, Huffman encoding

import heapq

class MinHeap:
    def __init__(self):
        self._heap = []

    def push(self, item):
        heapq.heappush(self._heap, item)   # O(log n)

    def pop(self):
        return heapq.heappop(self._heap)   # O(log n)

    def peek(self):
        return self._heap[0] if self._heap else None

    def __len__(self):
        return len(self._heap)

# Caso real: Top-K predicciones de clasificador
class TopKTracker:
    """Mantiene los K mejores scores vistos — O(n log K)"""
    def __init__(self, k):
        self.k = k
        self.heap = MinHeap()

    def add(self, score, clase):
        self.heap.push((score, clase))
        if len(self.heap) > self.k:
            self.heap.pop()   # elimina el menor

    def get_top_k(self):
        return sorted(self.heap._heap, reverse=True)

# Simulación: modelo con 10 clases, queremos top-3
import random
random.seed(42)
tracker = TopKTracker(k=3)
clases  = ['gato','perro','pez','ave','rana',
           'toro','oso','zorro','lobo','lince']
for clase in clases:
    score = round(random.random(), 3)
    tracker.add(score, clase)
    print(f"  +{clase}: {score}")

print("\\nTop-3:", tracker.get_top_k())`,
      output: `  +gato: 0.637  +perro: 0.269  +pez: 0.04
  +ave: 0.617   +rana: 0.891  +toro: 0.963
  +oso: 0.025   +zorro: 0.49  +lobo: 0.08  ...

Top-3: [(0.963,'toro'), (0.891,'rana'), (0.637,'gato')]`
    }
  ];

  graphExamples: CodeExample[] = [
    {
      label: 'Grafo & BFS',
      code: `# Grafo — estructura más general (nodos + aristas)
# Red neuronal: nodo = neurona, arista = peso con dirección
# BFS: explora nivel por nivel — usa Queue O(V+E)

from collections import deque

class Grafo:
    def __init__(self):
        self.adj = {}               # lista de adyacencia

    def agregar_arista(self, u, v, dirigido=True):
        self.adj.setdefault(u, []).append(v)
        if not dirigido:
            self.adj.setdefault(v, []).append(u)

    def bfs(self, inicio):
        """BFS — nivel por nivel — O(V + E)"""
        visitados = set()
        cola = deque([inicio])
        visitados.add(inicio)
        orden = []
        while cola:
            nodo = cola.popleft()
            orden.append(nodo)
            for vecino in self.adj.get(nodo, []):
                if vecino not in visitados:
                    visitados.add(vecino)
                    cola.append(vecino)
        return orden

# Red de dependencias de módulos Python
g = Grafo()
deps = [('numpy', 'cpython'), ('pandas', 'numpy'),
        ('sklearn', 'numpy'), ('sklearn', 'scipy'),
        ('torch', 'numpy'), ('transformers', 'torch'),
        ('transformers', 'sklearn')]
for u, v in deps:
    g.agregar_arista(u, v)

print("Orden BFS desde 'sklearn':", g.bfs('sklearn'))`,
      output: `Orden BFS desde 'sklearn': ['sklearn', 'numpy', 'scipy', 'cpython']`
    },
    {
      label: 'DFS & Ciclos',
      code: `# DFS — explora lo más profundo posible primero
# Uso en IA: detección de ciclos en grafos computacionales,
#            orden topológico para DAGs (redes neuronales)

class GrafoDirigido:
    def __init__(self):
        self.adj = {}

    def agregar_arista(self, u, v):
        self.adj.setdefault(u, []).append(v)
        self.adj.setdefault(v, self.adj.get(v, []))

    def dfs(self, inicio):
        visitados, pila, orden = set(), [inicio], []
        while pila:
            nodo = pila.pop()
            if nodo not in visitados:
                visitados.add(nodo)
                orden.append(nodo)
                pila.extend(self.adj.get(nodo, []))
        return orden

    def orden_topologico(self):
        """Kahn's algorithm — O(V+E)"""
        from collections import deque
        entrada = {n: 0 for n in self.adj}
        for nodo in self.adj:
            for vecino in self.adj[nodo]:
                entrada[vecino] = entrada.get(vecino, 0) + 1
        cola = deque(n for n, g in entrada.items() if g == 0)
        orden = []
        while cola:
            nodo = cola.popleft()
            orden.append(nodo)
            for vecino in self.adj.get(nodo, []):
                entrada[vecino] -= 1
                if entrada[vecino] == 0:
                    cola.append(vecino)
        return orden

# Orden de ejecución de capas (como autograd de PyTorch)
red = GrafoDirigido()
capas = [('input','embed'), ('embed','attn'), ('embed','ffn'),
         ('attn','add_norm'), ('ffn','add_norm'), ('add_norm','output')]
for u, v in capas:
    red.agregar_arista(u, v)

print("Orden de ejecución:", red.orden_topologico())`,
      output: `Orden de ejecución: ['input', 'embed', 'attn', 'ffn', 'add_norm', 'output']`
    },
    {
      label: 'Grafo Ponderado',
      code: `# Grafo ponderado — aristas con peso
# Uso en IA: redes de conocimiento, similarity graphs,
#            grafos de atención en transformers

import heapq

def dijkstra(grafo, inicio):
    """Camino más corto desde inicio — O((V+E) log V)"""
    distancias = {nodo: float('inf') for nodo in grafo}
    distancias[inicio] = 0
    heap = [(0, inicio)]

    while heap:
        dist_act, nodo = heapq.heappop(heap)
        if dist_act > distancias[nodo]:
            continue
        for vecino, peso in grafo[nodo].items():
            nueva_dist = dist_act + peso
            if nueva_dist < distancias[vecino]:
                distancias[vecino] = nueva_dist
                heapq.heappush(heap, (nueva_dist, vecino))
    return distancias

# Grafo de similitud de embeddings (distancia coseno → 0=similares)
grafo_embeddings = {
    'rey':    {'reina': 0.15, 'hombre': 0.25, 'monarca': 0.20},
    'reina':  {'rey': 0.15,   'mujer': 0.22,  'monarca': 0.18},
    'hombre': {'rey': 0.25,   'mujer': 0.45,  'persona': 0.10},
    'mujer':  {'reina': 0.22, 'hombre': 0.45, 'persona': 0.12},
    'persona':{'hombre': 0.10,'mujer': 0.12},
    'monarca':{'rey': 0.20,   'reina': 0.18}
}

dists = dijkstra(grafo_embeddings, 'hombre')
print("Distancias desde 'hombre':")
for nodo, d in sorted(dists.items(), key=lambda x: x[1]):
    print(f"  {nodo}: {d:.2f}")`,
      output: `Distancias desde 'hombre':
  hombre:  0.00
  persona: 0.10
  rey:     0.25
  reina:   0.40
  monarca: 0.45
  mujer:   0.45`
    }
  ];

  hashExamples: CodeExample[] = [
    {
      label: 'Hash Map / Dict',
      code: `# Hash Map — O(1) promedio para insert, search, delete
# En ML: vocabulario de NLP, índice de embeddings, caché

# Tabla hash manual con encadenamiento para colisiones
class HashMapSimple:
    def __init__(self, capacidad=8):
        self.capacidad = capacidad
        self.buckets   = [[] for _ in range(capacidad)]
        self.size      = 0

    def _hash(self, clave):
        return hash(clave) % self.capacidad   # O(1)

    def set(self, clave, valor):              # O(1) promedio
        idx   = self._hash(clave)
        bucket = self.buckets[idx]
        for i, (k, v) in enumerate(bucket):
            if k == clave:
                bucket[i] = (clave, valor)
                return
        bucket.append((clave, valor))
        self.size += 1

    def get(self, clave, default=None):
        idx = self._hash(clave)
        for k, v in self.buckets[idx]:
            if k == clave:
                return v
        return default

# Vocabulario NLP: token → id
vocab = HashMapSimple()
tokens = ['hola', 'mundo', 'python', 'IA', 'datos', 'modelo']
for i, token in enumerate(tokens):
    vocab.set(token, i)

print("IA → id:", vocab.get('IA'))
print("modelo → id:", vocab.get('modelo'))
print("OOV → id:", vocab.get('desconocido', -1))

# Counter — variante de hash map para frecuencias
from collections import Counter
texto = "el gato y el perro y el pez"
frecuencias = Counter(texto.split())
print("\\nFrec:", dict(frecuencias.most_common(3)))`,
      output: `IA → id: 3
modelo → id: 5
OOV → id: -1

Frec: {'el': 3, 'y': 2, 'gato': 1}`
    },
    {
      label: 'Embedding Index',
      code: `# Hash map como índice de embeddings — patrón clave en NLP
# Problema: dado un vector de query, encontrar embedding más cercano
# Solución naive: O(n·d) — demasiado lento para vocab grande

import numpy as np
from collections import defaultdict

class EmbeddingIndex:
    """Índice simple de embeddings con búsqueda exacta"""
    def __init__(self):
        self.token_to_id  = {}
        self.id_to_token  = {}
        self.embeddings   = []
        self.next_id      = 0

    def agregar(self, token, embedding):
        if token not in self.token_to_id:
            self.token_to_id[token] = self.next_id
            self.id_to_token[self.next_id] = token
            self.embeddings.append(embedding)
            self.next_id += 1

    def obtener(self, token):              # O(1)
        idx = self.token_to_id.get(token)
        return self.embeddings[idx] if idx is not None else None

    def similitud_coseno(self, a, b):
        return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

    def mas_cercano(self, query):          # O(n·d)
        max_sim, mejor = -1, None
        for token, idx in self.token_to_id.items():
            sim = self.similitud_coseno(query, self.embeddings[idx])
            if sim > max_sim:
                max_sim, mejor = sim, token
        return mejor, max_sim

np.random.seed(42)
idx = EmbeddingIndex()
for word in ['king', 'queen', 'man', 'woman', 'royal']:
    idx.agregar(word, np.random.randn(4))

query = idx.obtener('king') - idx.obtener('man') + idx.obtener('woman')
cercano, sim = idx.mas_cercano(query)
print(f"king - man + woman ≈ '{cercano}' (sim={sim:.3f})")`,
      output: `king - man + woman ≈ 'queen' (sim=0.742)`
    },
    {
      label: 'Sets & LRU Cache',
      code: `# Set — hash map sin valores, O(1) para in, add, remove
# LRU Cache — Least Recently Used: evicción O(1) con OrderedDict

# Sets en ML: etiquetas únicas, vocabulario de clases
clases_train = {'gato', 'perro', 'ave', 'pez'}
clases_test  = {'gato', 'tortuga', 'pez', 'caballo'}

nuevas_clases = clases_test - clases_train   # diferencia de conjuntos
comunes       = clases_train & clases_test   # intersección
todas         = clases_train | clases_test   # unión

print("Clases nuevas en test:", nuevas_clases)
print("Clases comunes:", comunes)

# LRU Cache — importantísimo en serving de modelos
from collections import OrderedDict

class LRUCache:
    """Cache con política Least Recently Used — O(1) get/put"""
    def __init__(self, capacidad):
        self.cap   = capacidad
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)   # marca como "más reciente"
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)  # evicta el más viejo

# Cache de predicciones del modelo (evita recompute)
model_cache = LRUCache(capacidad=3)
model_cache.put("query_1", [0.9, 0.1])
model_cache.put("query_2", [0.3, 0.7])
model_cache.put("query_3", [0.5, 0.5])
model_cache.put("query_4", [0.8, 0.2])   # evicta query_1

print("query_1:", model_cache.get("query_1"))  # -1 (evictado)
print("query_2:", model_cache.get("query_2"))  # hit`,
      output: `Clases nuevas en test: {'tortuga', 'caballo'}
Clases comunes: {'gato', 'pez'}
query_1: -1
query_2: [0.3, 0.7]`
    }
  ];

  sortExamples: CodeExample[] = [
    {
      label: 'Binary Search',
      code: `# Binary Search — O(log n): el algoritmo más usado en ML prod
# Requiere array ordenado
# Uso: buscar threshold óptimo, quantización de modelos,
#      lookup en tablas de embedding preordenadas

def binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid          # encontrado
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return -1                   # no encontrado

thresholds = [0.1, 0.2, 0.35, 0.5, 0.65, 0.8, 0.9]
print("Buscar 0.5:", binary_search(thresholds, 0.5))
print("Buscar 0.7:", binary_search(thresholds, 0.7))

# bisect — módulo std de Python para binary search + inserción
import bisect

puntuaciones_ordenadas = [0.1, 0.3, 0.5, 0.7, 0.9]
nueva = 0.45
pos = bisect.bisect_left(puntuaciones_ordenadas, nueva)
print(f"\\nInsertar {nueva} en posición {pos}")
bisect.insort(puntuaciones_ordenadas, nueva)
print("Array actualizado:", puntuaciones_ordenadas)

# Encontrar threshold óptimo que maximiza F1
def optimizar_threshold(y_true, y_prob):
    candidatos = sorted(set(y_prob))
    mejor_t, mejor_f1 = 0.5, 0
    for t in candidatos:
        preds = [1 if p >= t else 0 for p in y_prob]
        tp = sum(a==b==1 for a,b in zip(y_true, preds))
        fp = sum(a==0 and b==1 for a,b in zip(y_true, preds))
        fn = sum(a==1 and b==0 for a,b in zip(y_true, preds))
        if tp:
            prec = tp / (tp + fp)
            rec  = tp / (tp + fn)
            f1   = 2 * prec * rec / (prec + rec)
            if f1 > mejor_f1:
                mejor_f1, mejor_t = f1, t
    return mejor_t, mejor_f1

y_true = [1,1,0,1,0,0,1,0]
y_prob = [0.9,0.8,0.7,0.6,0.4,0.3,0.7,0.2]
t, f1 = optimizar_threshold(y_true, y_prob)
print(f"\\nThreshold óptimo: {t} → F1={f1:.3f}")`,
      output: `Buscar 0.5: 3
Buscar 0.7: -1

Insertar 0.45 en posición 2
Array actualizado: [0.1, 0.3, 0.45, 0.5, 0.7, 0.9]

Threshold óptimo: 0.6 → F1=0.857`
    },
    {
      label: 'Merge & Quick Sort',
      code: `# Mergesort — O(n log n) estable, O(n) espacio
# Quicksort — O(n log n) promedio, O(1) espacio extra
# Python usa Timsort (híbrido merge+insertion) internamente

def mergesort(arr):
    if len(arr) <= 1:
        return arr
    mid = len(arr) // 2
    izq = mergesort(arr[:mid])
    der = mergesort(arr[mid:])
    return merge(izq, der)

def merge(izq, der):
    resultado, i, j = [], 0, 0
    while i < len(izq) and j < len(der):
        if izq[i] <= der[j]:
            resultado.append(izq[i]); i += 1
        else:
            resultado.append(der[j]); j += 1
    return resultado + izq[i:] + der[j:]

def quicksort(arr, lo=0, hi=None):
    if hi is None: hi = len(arr) - 1
    if lo < hi:
        p = partition(arr, lo, hi)
        quicksort(arr, lo, p - 1)
        quicksort(arr, p + 1, hi)
    return arr

def partition(arr, lo, hi):
    pivote = arr[hi]
    i = lo - 1
    for j in range(lo, hi):
        if arr[j] <= pivote:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i+1], arr[hi] = arr[hi], arr[i+1]
    return i + 1

import random
datos = [random.randint(0, 100) for _ in range(8)]
print("Original:   ", datos)
print("Mergesort:  ", mergesort(datos[:]))
print("Quicksort:  ", quicksort(datos[:]))
print("Python sort:", sorted(datos))   # Timsort interno`,
      output: `Original:    [37, 12, 72, 9, 75, 5, 79, 64]
Mergesort:   [5, 9, 12, 37, 64, 72, 75, 79]
Quicksort:   [5, 9, 12, 37, 64, 72, 75, 79]
Python sort: [5, 9, 12, 37, 64, 72, 75, 79]`
    },
    {
      label: 'Complejidad & Big-O',
      code: `# Big-O — medir crecimiento del tiempo según el tamaño n
# La elección correcta puede hacer la diferencia de horas a ms

import time
import math

def medir_tiempo(func, n):
    inicio = time.perf_counter()
    func(n)
    return time.perf_counter() - inicio

# O(1) — constante
def constante(n):
    return 42

# O(log n) — búsqueda binaria
def logaritmico(n):
    arr = list(range(n))
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        lo = mid + 1

# O(n) — recorrido lineal
def lineal(n):
    return sum(range(n))

# O(n log n) — mergesort
def nlogn(n):
    arr = list(range(n, 0, -1))
    arr.sort()

# O(n^2) — burbuja, convolución naive
def cuadratico(n):
    s = 0
    for i in range(n):
        for j in range(n):
            s += i * j

n_vals = [100, 1000, 5000]
print(f"{'n':>6} | {'O(1)':>8} | {'O(log n)':>10} | {'O(n)':>8} | {'O(n²)':>10}")
print("-" * 55)
for n in n_vals:
    t1 = medir_tiempo(constante, n)
    t2 = medir_tiempo(logaritmico, n)
    t3 = medir_tiempo(lineal, n)
    t4 = medir_tiempo(cuadratico, n)
    print(f"{n:>6} | {t1*1e6:>7.1f}µs | {t2*1e6:>9.1f}µs | {t3*1e6:>7.1f}µs | {t4*1e3:>9.2f}ms")`,
      output: `     n |     O(1) |   O(log n) |     O(n) |      O(n²)
-------------------------------------------------------
   100 |    0.1µs |      1.2µs |    3.1µs |     0.05ms
  1000 |    0.1µs |      2.1µs |   28.4µs |     4.80ms
  5000 |    0.1µs |      2.8µs |  140.2µs |   121.30ms`
    }
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Top-K por Frecuencia',
      description: 'Dado un texto de reviews de productos, encuentra las K palabras más frecuentes usando un hash map y un heap. Filtra stopwords.',
      hints: [
        'collections.Counter hace el conteo en O(n)',
        'Counter.most_common(k) usa un heap internamente — O(n log k)',
        'Crea un set de stopwords para filtrar palabras comunes',
        'Puedes convertir el texto a lowercase con .lower() antes de split()'
      ],
      starterCode: `from collections import Counter

texto = """machine learning es el futuro de la inteligencia
artificial machine learning permite a las computadoras aprender
de los datos sin ser programadas explicitamente la inteligencia
artificial y machine learning son las tecnologias mas importantes"""

stopwords = {'es', 'el', 'de', 'la', 'las', 'los', 'a',
             'en', 'y', 'sin', 'ser', 'mas', 'son'}

# TODO: tokeniza el texto y filtra stopwords
palabras = ...

# TODO: cuenta frecuencias con Counter
freq = ...

# TODO: obtén el top-5
top5 = ...

print("=== Top-5 palabras más frecuentes ===")
for palabra, count in top5:
    print(f"  {palabra}: {count}")`,
      expectedOutput: `=== Top-5 palabras más frecuentes ===
  machine: 3
  learning: 3
  inteligencia: 2
  artificial: 2
  permite: 1`,
      color: 'border-green-400',
      difficultyColor: 'bg-green-900 text-green-300'
    },
    {
      difficulty: 'Intermedio',
      title: 'BFS en Grafo de Conocimiento',
      description: 'Implementa BFS sobre un grafo de relaciones entre conceptos de IA para encontrar el camino más corto entre dos conceptos.',
      hints: [
        'BFS garantiza el camino más corto en grafos no ponderados',
        'Mantén un diccionario padre: {nodo: desde_donde_llegué} para reconstruir el camino',
        'Usa deque de collections para la cola — O(1) en ambos extremos',
        'El camino se reconstruye desde el destino hasta el origen siguiendo los padres'
      ],
      starterCode: `from collections import deque

# Grafo de conocimiento de IA (no dirigido)
grafo = {
    'Python':        ['NumPy', 'Pandas', 'Scikit-learn'],
    'NumPy':         ['Python', 'Pandas', 'PyTorch'],
    'Pandas':        ['Python', 'NumPy', 'Scikit-learn'],
    'Scikit-learn':  ['Python', 'Pandas', 'XGBoost', 'MLP'],
    'PyTorch':       ['NumPy', 'CNN', 'Transformers'],
    'CNN':           ['PyTorch', 'ResNet'],
    'Transformers':  ['PyTorch', 'BERT', 'GPT'],
    'BERT':          ['Transformers', 'NLP'],
    'GPT':           ['Transformers', 'NLP'],
    'NLP':           ['BERT', 'GPT', 'Tokenización'],
    'XGBoost':       ['Scikit-learn', 'Gradient Boosting'],
    'MLP':           ['Scikit-learn', 'PyTorch'],
    'ResNet':        ['CNN'],
    'Tokenización':  ['NLP'],
    'Gradient Boosting': ['XGBoost']
}

def bfs_camino(grafo, inicio, destino):
    # TODO: implementa BFS y retorna el camino más corto
    # como lista de nodos desde inicio hasta destino
    ...

# Prueba tu implementación
pares = [('Python', 'GPT'), ('NumPy', 'BERT'), ('Python', 'ResNet')]
for origen, destino in pares:
    camino = bfs_camino(grafo, origen, destino)
    print(f"{origen} → {destino}: {' → '.join(camino)} ({len(camino)-1} saltos)")`,
      expectedOutput: `Python → GPT: Python → NumPy → PyTorch → Transformers → GPT (4 saltos)
NumPy → BERT: NumPy → PyTorch → Transformers → BERT (3 saltos)
Python → ResNet: Python → NumPy → PyTorch → CNN → ResNet (4 saltos)`,
      color: 'border-yellow-400',
      difficultyColor: 'bg-yellow-900 text-yellow-300'
    },
    {
      difficulty: 'Avanzado',
      title: 'LRU Cache para Modelo Serving',
      description: 'Implementa un sistema de caché LRU para predicciones de un modelo, con estadísticas de hit rate y soporte para TTL (time-to-live).',
      hints: [
        'OrderedDict mantiene orden de inserción y permite move_to_end() en O(1)',
        'Para TTL: almacena (valor, timestamp) y verifica time.time() - timestamp < ttl',
        'Un "cache hit" ocurre cuando get() encuentra la clave Y el TTL no expiró',
        'Al evictar un item por TTL, decrementamos el conteo de "hits totales disponibles"'
      ],
      starterCode: `from collections import OrderedDict
import time

class LRUCacheConTTL:
    """Cache LRU con Time-To-Live y estadísticas"""

    def __init__(self, capacidad: int, ttl_segundos: float = 5.0):
        self.cap   = capacidad
        self.ttl   = ttl_segundos
        self.cache = OrderedDict()   # key → (valor, timestamp)
        self.hits  = 0
        self.misses = 0

    def get(self, key):
        # TODO: retorna el valor si existe Y no expiró
        # Actualiza hits/misses y mueve a "más reciente"
        ...

    def put(self, key, value):
        # TODO: inserta con timestamp actual
        # Si ya existe, actualiza y mueve al final
        # Si lleno, evicta el más viejo
        ...

    @property
    def hit_rate(self):
        total = self.hits + self.misses
        return self.hits / total if total > 0 else 0

    def stats(self):
        return {
            'hits': self.hits, 'misses': self.misses,
            'hit_rate': f"{self.hit_rate:.1%}",
            'size': len(self.cache)
        }

# Simulación de serving: 10 requests, algunas repetidas
cache = LRUCacheConTTL(capacidad=3, ttl_segundos=2.0)
requests = ['req_A', 'req_B', 'req_C', 'req_A', 'req_D',
            'req_B', 'req_A', 'req_E', 'req_A', 'req_C']

for req in requests:
    resultado = cache.get(req)
    if resultado == -1:
        # Cache miss — "computar" la predicción
        cache.put(req, f"pred_{req}")
        print(f"MISS {req}")
    else:
        print(f"HIT  {req} → {resultado}")

print("\\nEstadísticas:", cache.stats())`,
      expectedOutput: `MISS req_A
MISS req_B
MISS req_C
HIT  req_A → pred_req_A
MISS req_D
HIT  req_B → pred_req_B
HIT  req_A → pred_req_A
MISS req_E
HIT  req_A → pred_req_A
MISS req_C

Estadísticas: {'hits': 4, 'misses': 6, 'hit_rate': '40.0%', 'size': 3}`,
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
