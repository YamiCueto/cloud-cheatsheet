import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CodeExample {
  label: string;
  code: string;
  output?: string;
}

interface Concept {
  icon: string;
  title: string;
  description: string;
  color: string;
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
  selector: 'app-l1-python-basics',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-python-basics.component.html',
  styleUrls: [
    '../../shared-presentation.css',
    './l1-python-basics.component.css'
  ]
})
export class L1PythonBasicsComponent {
  currentSlide = 0;

  slides = [
    { type: 'title' },
    { type: 'why-python' },
    { type: 'variables-types' },
    { type: 'control-flow' },
    { type: 'functions' },
    { type: 'data-structures' },
    { type: 'oop-basics' },
    { type: 'modules-env' },
    { type: 'challenge' },
    { type: 'summary' }
  ];

  whyPythonReasons: Concept[] = [
    {
      icon: '🧠',
      title: 'Ecosistema de IA sin rival',
      description: 'NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow — todas las librerías líderes de IA están en Python. No hay alternativa.',
      color: 'bg-purple-50'
    },
    {
      icon: '📖',
      title: 'Sintaxis legible como pseudocódigo',
      description: 'Python lee casi como inglés. Puedes concentrarte en los algoritmos sin batallar con la sintaxis del lenguaje.',
      color: 'bg-blue-50'
    },
    {
      icon: '⚡',
      title: 'Prototipado ultrarrápido',
      description: 'Con Jupyter Notebooks puedes explorar datos, visualizar resultados y ajustar modelos en tiempo real, celda por celda.',
      color: 'bg-yellow-50'
    },
    {
      icon: '🌍',
      title: 'Comunidad masiva de IA',
      description: 'Millones de ejemplos en Kaggle, GitHub, Hugging Face. Si tienes un problema, alguien ya lo resolvió en Python.',
      color: 'bg-green-50'
    },
    {
      icon: '🔗',
      title: 'Interoperabilidad total',
      description: 'Se integra con C/C++ (velocidad crítica), SQL, APIs REST, cloud providers y prácticamente cualquier herramienta.',
      color: 'bg-orange-50'
    },
    {
      icon: '🏆',
      title: 'Estándar de la industria',
      description: 'OpenAI, Google DeepMind, Meta AI, Hugging Face — todos usan Python como lenguaje principal para investigación y producción.',
      color: 'bg-red-50'
    }
  ];

  dataTypes: CodeExample[] = [
    {
      label: '🔢 Tipos numéricos',
      code: `# Enteros (int)
edad = 25
temperatura = -10
pixels = 1920 * 1080  # → 2073600

# Flotantes (float)
precision = 0.95
pi = 3.14159

# Complejos
z = 3 + 4j

# Verificar tipo
print(type(edad))       # <class 'int'>
print(type(precision))  # <class 'float'>`,
      output: '<class \'int\'>\n<class \'float\'>'
    },
    {
      label: '📝 Strings y operaciones',
      code: `nombre = "Python"
apellido = 'para IA'

# Concatenación
completo = nombre + " " + apellido

# f-strings (forma moderna ✅)
version = 3.11
msg = f"Usando {nombre} v{version}"
print(msg)  # Usando Python v3.11

# Métodos útiles
print("  hola mundo  ".strip())   # "hola mundo"
print("hola".upper())             # "HOLA"
print("Python IA".split())        # ['Python', 'IA']`,
      output: 'Usando Python v3.11\nhola mundo\nHOLA\n[\'Python\', \'IA\']'
    },
    {
      label: '✅ Booleanos y None',
      code: `# Booleanos
activo = True
terminado = False

# Operadores lógicos
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# None (ausencia de valor)
resultado = None
print(resultado is None)  # True

# Comparaciones → booleano
x = 10
print(x > 5)   # True
print(x == 10) # True
print(x != 3)  # True`
    }
  ];

  controlFlowExamples: CodeExample[] = [
    {
      label: '🔀 Condicionales',
      code: `score = 85

# If / elif / else
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score {score} → Grade {grade}")
# Score 85 → Grade B

# Ternario (una línea)
status = "aprobado" if score >= 60 else "reprobado"`,
      output: 'Score 85 → Grade B'
    },
    {
      label: '🔁 Bucles for',
      code: `# Iterar lista
frutas = ["manzana", "pera", "uva"]
for fruta in frutas:
    print(f"  → {fruta}")

# range() — muy usado en IA
for i in range(5):          # 0,1,2,3,4
    print(i, end=" ")

# enumerate() — índice + valor
modelos = ["CNN", "RNN", "Transformer"]
for idx, modelo in enumerate(modelos, 1):
    print(f"{idx}. {modelo}")

# List comprehension ⚡
cuadrados = [x**2 for x in range(6)]
# [0, 1, 4, 9, 16, 25]`,
      output: '→ manzana\n→ pera\n→ uva\n0 1 2 3 4\n1. CNN\n2. RNN\n3. Transformer'
    },
    {
      label: '⏳ Bucle while',
      code: `# While con contador
epoch = 0
loss = 1.0

while loss > 0.1:
    loss *= 0.7
    epoch += 1
    print(f"Epoch {epoch}: loss={loss:.4f}")

print(f"Entrenado en {epoch} épocas")

# break y continue
for num in range(10):
    if num == 3:
        continue  # salta el 3
    if num == 7:
        break     # para en 7
    print(num, end=" ")
# 0 1 2 4 5 6`,
      output: 'Epoch 1: loss=0.7000\nEpoch 2: loss=0.4900\n...\nEpoch 8: loss=0.0576'
    }
  ];

  functionExamples: CodeExample[] = [
    {
      label: '📦 Funciones básicas',
      code: `# Definición con def
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("IA"))  # Hola, IA!

# Parámetros con valor por defecto
def entrenar(epochs=10, lr=0.001):
    return f"Training {epochs} epochs con lr={lr}"

print(entrenar())           # defaults
print(entrenar(50, 0.01))   # override

# *args y **kwargs (muy común en librerías IA)
def info(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)

info("PyTorch", "v2", framework="DL", gpu=True)`,
      output: 'Hola, IA!\nTraining 10 epochs con lr=0.001\nTraining 50 epochs con lr=0.01'
    },
    {
      label: '⚡ Lambda y funciones avanzadas',
      code: `# Lambda — funciones anónimas de una línea
cuadrado = lambda x: x ** 2
print(cuadrado(5))  # 25

# map() — aplicar función a cada elemento
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))
# [1, 4, 9, 16, 25]

# filter() — filtrar elementos
pares = list(filter(lambda x: x % 2 == 0, numeros))
# [2, 4]

# Funciones como parámetros (higher-order)
def aplicar(func, valor):
    return func(valor)

resultado = aplicar(lambda x: x * 3, 7)  # 21

# Decoradores (patrón común en FastAPI/Flask)
def log_llamada(func):
    def wrapper(*args, **kwargs):
        print(f"Llamando: {func.__name__}")
        return func(*args, **kwargs)
    return wrapper`,
    }
  ];

  dataStructureExamples: CodeExample[] = [
    {
      label: '📋 Listas — la estructura más usada en IA',
      code: `# Crear y acceder
datos = [10, 20, 30, 40, 50]
print(datos[0])    # 10  (primero)
print(datos[-1])   # 50  (último)
print(datos[1:3])  # [20, 30] (slicing)

# Operaciones clave
datos.append(60)        # añadir al final
datos.insert(0, 0)      # insertar en posición
datos.remove(30)        # remover por valor
popped = datos.pop()    # sacar último

# Ordenar
scores = [0.85, 0.92, 0.78, 0.95]
scores.sort(reverse=True)
print(scores)  # [0.95, 0.92, 0.85, 0.78]

# Listas de listas — matrices básicas
matriz = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
print(matriz[1][2])  # 6`,
    },
    {
      label: '📖 Diccionarios — clave/valor fundamental',
      code: `# Crear diccionario
modelo = {
    "nombre": "ResNet50",
    "precision": 0.94,
    "params": 25_000_000,
    "framework": "PyTorch"
}

# Acceder y modificar
print(modelo["nombre"])           # ResNet50
print(modelo.get("lr", 0.001))    # default si no existe

modelo["version"] = "2.0"         # añadir clave
del modelo["params"]              # eliminar

# Iterar
for clave, valor in modelo.items():
    print(f"  {clave}: {valor}")

# Dict comprehension ⚡
metricas = {"acc": 0.94, "loss": 0.12, "f1": 0.91}
porcentajes = {k: f"{v*100:.1f}%" for k, v in metricas.items()}`,
      output: 'ResNet50\n0.001\nnombre: ResNet50\nprecision: 0.94\n...'
    },
    {
      label: '🎯 Tuplas y Sets',
      code: `# Tuplas — inmutables, útiles para coords/dimensiones
dimensiones = (224, 224, 3)   # altura, ancho, canales
x, y, canales = dimensiones    # unpacking
print(f"Imagen: {x}x{y} px, {canales} canales")

# Muy usadas para retornar múltiples valores
def estadisticas(datos):
    return min(datos), max(datos), sum(datos)/len(datos)

minimo, maximo, media = estadisticas([1,2,3,4,5])

# Sets — colecciones sin duplicados
etiquetas_pred  = {"gato", "perro", "gato", "ave"}
etiquetas_real  = {"gato", "perro", "pez"}

print(etiquetas_pred)                             # {'gato', 'perro', 'ave'}
print(etiquetas_pred & etiquetas_real)            # intersección
print(etiquetas_pred | etiquetas_real)            # unión
print(etiquetas_pred - etiquetas_real)            # diferencia`,
    }
  ];

  oopExample: CodeExample = {
    label: '🏗️ Clases y objetos en IA',
    code: `class ModeloIA:
    """Clase base para modelos de IA"""

    # Atributo de clase (compartido)
    framework = "Python"

    def __init__(self, nombre, version="1.0"):
        # Atributos de instancia
        self.nombre = nombre
        self.version = version
        self.entrenado = False
        self.metricas = {}

    def entrenar(self, epochs=10):
        """Simula entrenamiento"""
        print(f"Entrenando {self.nombre} v{self.version}...")
        for e in range(1, epochs + 1):
            loss = 1.0 / e
            print(f"  Epoch {e}/{epochs} - loss: {loss:.4f}")
        self.entrenado = True
        self.metricas["loss_final"] = loss
        return self

    def predecir(self, datos):
        if not self.entrenado:
            raise ValueError("¡Debes entrenar primero!")
        return f"Predicción de {self.nombre}: {datos}"

    def __repr__(self):
        estado = "✅ Entrenado" if self.entrenado else "⏳ Sin entrenar"
        return f"ModeloIA({self.nombre} v{self.version}) — {estado}"


# Herencia
class RedNeuronal(ModeloIA):
    def __init__(self, nombre, capas):
        super().__init__(nombre)
        self.capas = capas

    def resumen(self):
        return f"Red con {len(self.capas)} capas: {self.capas}"


# Uso
red = RedNeuronal("MiRed", ["Input(784)", "Dense(128)", "Output(10)"])
red.entrenar(3)
print(red)
print(red.resumen())`,
    output: 'Entrenando MiRed v1.0...\n  Epoch 1/3 - loss: 1.0000\n  Epoch 2/3 - loss: 0.5000\n  Epoch 3/3 - loss: 0.3333'
  };

  modulesExample: CodeExample = {
    label: '📦 Módulos, paquetes y entorno virtual',
    code: `# === Crear entorno virtual ===
# Terminal:
python -m venv venv_ia
source venv_ia/bin/activate      # Linux/Mac
venv_ia\\Scripts\\activate         # Windows

# === Instalar paquetes ===
pip install numpy pandas scikit-learn matplotlib

# === requirements.txt ===
pip freeze > requirements.txt
pip install -r requirements.txt   # en otro equipo

# === Importar módulos ===
import os                          # módulo estándar
import math
from datetime import datetime

import numpy as np                 # alias convenio
import pandas as pd

# importar función específica
from sklearn.model_selection import train_test_split

# === Crear tu propio módulo ===
# archivo: utils.py
def normalizar(datos):
    minimo = min(datos)
    maximo = max(datos)
    return [(x - minimo)/(maximo - minimo) for x in datos]

# otro archivo: main.py
from utils import normalizar
datos_norm = normalizar([10, 20, 30, 40, 50])
# [0.0, 0.25, 0.5, 0.75, 1.0]`
  };

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      difficultyColor: 'text-green-600 bg-green-100',
      title: 'Analizador de Dataset',
      description: 'Crea una función que reciba una lista de números (como si fueran datos de entrenamiento) y retorne un diccionario con sus estadísticas básicas.',
      hints: [
        'Usa len(), sum(), min(), max() de Python built-in',
        'Para la media: suma / cantidad',
        'Para la desviación: usa math.sqrt()',
        'Retorna un diccionario con las claves: "count", "min", "max", "mean", "std"'
      ],
      starterCode: `import math

def analizar_dataset(datos: list) -> dict:
    """
    Recibe lista de números y retorna estadísticas.

    >>> analizar_dataset([1, 2, 3, 4, 5])
    {'count': 5, 'min': 1, 'max': 5, 'mean': 3.0, 'std': 1.41}
    """
    # Tu código aquí
    pass

# Test
print(analizar_dataset([85, 92, 78, 95, 88, 76, 95, 89]))`,
      expectedOutput: `{'count': 8, 'min': 76, 'max': 95, 'mean': 87.25, 'std': 6.47}`,
      color: 'border-green-400'
    },
    {
      difficulty: 'Intermedio',
      difficultyColor: 'text-yellow-700 bg-yellow-100',
      title: 'Clase DataPreprocessor',
      description: 'Implementa una clase que preprocese datos numéricos: normalización Min-Max, detección de valores faltantes (None) y codificación de etiquetas.',
      hints: [
        'Atributos: min_val, max_val (se calculan en fit())',
        'Método fit(datos): calcula los parámetros del escalador',
        'Método transform(datos): aplica la normalización',
        'Método fit_transform(datos): hace ambos',
        'Maneja None como valor faltante (reemplaza con la media)'
      ],
      starterCode: `class DataPreprocessor:
    def __init__(self):
        self.min_val = None
        self.max_val = None
        self.mean_val = None

    def fit(self, datos):
        # Filtrar None y calcular estadísticas
        pass

    def transform(self, datos):
        # Aplicar Min-Max normalization
        # None → self.mean_val
        pass

    def fit_transform(self, datos):
        return self.fit(datos).transform(datos)

# Test
prep = DataPreprocessor()
resultado = prep.fit_transform([10, None, 30, 40, None, 60])
print(resultado)`,
      expectedOutput: `[0.0, 0.375, 0.4, 0.6, 0.375, 1.0]  # None → media=28`,
      color: 'border-yellow-400'
    },
    {
      difficulty: 'Avanzado',
      difficultyColor: 'text-red-700 bg-red-100',
      title: 'Mini Pipeline de ML',
      description: 'Crea un mini pipeline que: carga datos simulados, los preprocesa, divide en train/test, y evalúa un "modelo" simple (media de entrenamiento como predictor baseline).',
      hints: [
        'Genera datos con comprensión de listas',
        'Divide con slicing: 80% train, 20% test',
        'Predictor baseline: predice siempre la media del train set',
        'Métrica: MAE = promedio de |predicción - real|',
        'Usa clases: Pipeline con métodos run() y report()'
      ],
      starterCode: `import random
import math

class BaselinePipeline:
    def __init__(self, test_size=0.2, seed=42):
        self.test_size = test_size
        self.seed = seed
        self.train_mean = None
        self.mae = None

    def generar_datos(self, n=100):
        random.seed(self.seed)
        # Generar n valores entre 0 y 100
        pass

    def dividir(self, datos):
        # Split train/test sin librerías
        pass

    def entrenar(self, train):
        # Baseline: media del conjunto de entrenamiento
        pass

    def evaluar(self, test):
        # MAE: promedio de |pred - real|
        pass

    def run(self):
        datos = self.generar_datos()
        train, test = self.dividir(datos)
        self.entrenar(train)
        self.evaluar(test)
        return self

    def report(self):
        print(f"Train size: {int((1-self.test_size)*100)}")
        print(f"Test size:  {int(self.test_size*100)}")
        print(f"Baseline (mean): {self.train_mean:.2f}")
        print(f"MAE: {self.mae:.2f}")

# Ejecutar
pipeline = BaselinePipeline()
pipeline.run().report()`,
      expectedOutput: `Train size: 80\nTest size:  20\nBaseline (mean): 49.73\nMAE: 25.18`,
      color: 'border-red-400'
    }
  ];

  selectedChallenge = 0;
  copiedTab: string | null = null;
  activeDataTypeTab = 0;
  activeControlFlowTab = 0;
  activeFunctionTab = 0;
  activeDataStructureTab = 0;

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
