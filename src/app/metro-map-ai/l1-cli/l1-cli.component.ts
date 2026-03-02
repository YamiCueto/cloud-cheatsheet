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
  selector: 'app-l1-cli',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-cli.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1CliComponent {
  currentSlide = 0;
  selectedChallenge = 0;
  activePipeTab = 0;
  activeScriptTab = 0;
  activeMlToolsTab = 0;

  slides = [
    { type: 'title' },
    { type: 'why-cli' },
    { type: 'navigation' },
    { type: 'files-text' },
    { type: 'pipes-redirects' },
    { type: 'process-env' },
    { type: 'shell-scripting' },
    { type: 'ml-cli-tools' },
    { type: 'challenge' },
    { type: 'summary' },
  ];

  navCommands = [
    { cmd: 'pwd', desc: 'Print Working Directory — dónde estás', example: '/home/usuario/proyectos/ml' },
    { cmd: 'ls -la', desc: 'Listar archivos con permisos y tamaño ocultos', example: 'drwxr-xr-x  5 user 4096 Mar  1 data/' },
    { cmd: 'cd -', desc: 'Volver al directorio anterior (muy útil)', example: '/home/usuario/proyectos' },
    { cmd: 'find . -name "*.py"', desc: 'Buscar archivos por patrón recursivamente', example: './src/train.py\n./src/model.py' },
    { cmd: 'tree -L 2', desc: 'Ver estructura del proyecto en árbol (2 niveles)', example: '├── data/\n│   └── raw/\n└── src/' },
    { cmd: 'du -sh data/', desc: 'Ver tamaño de un directorio', example: '2.3G    data/' },
  ];

  pipeExamples: CodeExample[] = [
    {
      label: '🔗 Pipes esenciales',
      code: `# ── El operador pipe | conecta stdout de un comando con stdin del siguiente

# Contar líneas de un CSV (sin contar el header)
wc -l < datos.csv
cat datos.csv | tail -n +2 | wc -l   # sin la primera línea

# Buscar texto con grep
grep "learning_rate" logs/training.log
grep -n "Error" logs/training.log    # Con número de línea
grep -rn "import torch" src/         # Recursivo

# Filtrar, ordenar y tomar los top 10
cat metrics.csv | sort -t',' -k2 -rn | head -10
# sort -t','  → separador coma
# -k2         → ordena por columna 2
# -rn         → reverso numérico

# Ver archivos más grandes del proyecto
du -sh * | sort -h | tail -10
# Sort -h → human-readable (KB, MB, GB en orden correcto)

# Monitorear logs en tiempo real
tail -f logs/training.log
tail -f logs/training.log | grep "val_loss"`,
      output: `epoch=45, val_loss=0.1234, val_acc=0.9312
epoch=46, val_loss=0.1198, val_acc=0.9341
epoch=47, val_loss=0.1156, val_acc=0.9378`
    },
    {
      label: '📂 Redirección',
      code: `# ── Redirección de output ─────────────────────────────
python train.py > output.log         # stdout a archivo (sobreescribe)
python train.py >> output.log        # Agregar al archivo (append)
python train.py 2> errors.log        # stderr a archivo
python train.py > output.log 2>&1   # stdout Y stderr al mismo archivo
python train.py |& tee output.log   # stdout+stderr a pantalla Y archivo

# ── Redirección de input ───────────────────────────────
python script.py < config.txt        # Leer stdin desde archivo

# ── Útil en ML training ────────────────────────────────
nohup python train.py \
  --epochs 100 \
  --lr 1e-4 \
  > logs/run_$(date +%Y%m%d_%H%M).log 2>&1 &
# nohup       → No HangUP: sigue corriendo aunque cierres la terminal
# &           → Background: devuelve el control inmediatamente
# $()         → Command substitution: ejecuta el comando adentro

echo "PID del proceso: $!"  # Ver el PID del último proceso en background`,
      output: `[1] 12345\nPID del proceso: 12345\n# Training corriendo en background — revisa logs/run_20240301_1423.log`
    },
    {
      label: '✂️ awk / sed / xargs',
      code: `# ── awk — procesar columnas de texto ──────────────────
# Extraer accuracy del log de entrenamiento
awk -F',' '{print $3}' metrics.csv           # Columna 3
awk -F',' 'NR>1 && $3 > 0.9 {print $0}' metrics.csv  # Filtrar accuracy > 0.9

# Calcular promedio de la columna loss
awk -F',' 'NR>1 {sum+=$2; n++} END {print "Avg loss:", sum/n}' metrics.csv

# ── sed — buscar y reemplazar en texto ─────────────────
sed 's/learning_rate = 0.01/learning_rate = 0.001/' config.py
sed -i 's/batch_size = 32/batch_size = 64/' config.py  # -i modifica en sitio

# Eliminar líneas en blanco
sed '/^$/d' archivo.txt

# ── xargs — pasar output como argumentos ───────────────
# Eliminar todos los archivos .pyc
find . -name "*.pyc" | xargs rm -f

# Comprimir todos los logs viejos
find logs/ -name "*.log" -mtime +7 | xargs gzip

# Correr script en paralelo sobre múltiples archivos
ls data/raw/*.csv | xargs -P 4 -I{} python preprocess.py {}
# -P 4 → 4 procesos en paralelo
# -I{} → {} es el placeholder para cada item`,
      output: `Avg loss: 0.1423\nProcesando: data/raw/dataset_A.csv ... OK\nProcesando: data/raw/dataset_B.csv ... OK`
    }
  ];

  scriptExamples: CodeExample[] = [
    {
      label: '📜 Script de entrenamiento',
      code: `#!/usr/bin/env bash
# train_pipeline.sh — Script de entrenamiento completo
set -euo pipefail  # Salir en error, variables sin definir, pipe failures

# ── Variables ──────────────────────────────────────────
PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_DIR="${PROJECT_DIR}/logs"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
LOG_FILE="${LOG_DIR}/train_${TIMESTAMP}.log"

# ── Parámetros con defaults ────────────────────────────
LR="${1:-1e-4}"          # Primer arg o default 1e-4
EPOCHS="${2:-50}"         # Segundo arg o default 50
BATCH="${3:-32}"          # Tercer arg o default 32

echo "=== Pipeline de Entrenamiento ==="
echo "LR: ${LR} | Epochs: ${EPOCHS} | Batch: ${BATCH}"
echo "Log: ${LOG_FILE}"

# ── Crear directorios si no existen ───────────────────
mkdir -p "${LOG_DIR}" models/checkpoints

# ── Verificar entorno ──────────────────────────────────
if ! command -v python &> /dev/null; then
    echo "ERROR: Python no encontrado" >&2
    exit 1
fi

python --version

# ── Entrenamiento ──────────────────────────────────────
python src/train.py \
    --lr "${LR}" \
    --epochs "${EPOCHS}" \
    --batch-size "${BATCH}" \
    --output-dir "models/checkpoints" \
    2>&1 | tee "${LOG_FILE}"

echo "=== Entrenamiento completado ==="`,
      output: `=== Pipeline de Entrenamiento ===\nLR: 1e-4 | Epochs: 50 | Batch: 32\nLog: logs/train_20240301_142300.log`
    },
    {
      label: '🔁 Bucles y condicionales',
      code: `#!/usr/bin/env bash
# Experimentos en grilla de hiperparámetros

LEARNING_RATES=(1e-3 1e-4 5e-5)
BATCH_SIZES=(16 32 64)
RESULTS_FILE="experiments/grid_search.csv"

echo "lr,batch_size,val_accuracy" > "${RESULTS_FILE}"

for LR in "${LEARNING_RATES[@]}"; do
    for BATCH in "${BATCH_SIZES[@]}"; do
        echo "--- Experimento: lr=${LR} batch=${BATCH} ---"

        # Correr entrenamiento y capturar accuracy
        ACCURACY=$(python train.py \
            --lr "${LR}" \
            --batch-size "${BATCH}" \
            --epochs 10 \
            | grep "val_accuracy" \
            | awk '{print $NF}')

        echo "${LR},${BATCH},${ACCURACY}" >> "${RESULTS_FILE}"

        # Verificar si superó el threshold
        if (( $(echo "${ACCURACY} > 0.95" | bc -l) )); then
            echo "🎉 Encontrado: accuracy=${ACCURACY} con lr=${LR} batch=${BATCH}"
            break 2  # Salir de ambos bucles
        fi
    done
done

# Mostrar mejores resultados
echo "=== Top 3 resultados ==="
sort -t',' -k3 -rn "${RESULTS_FILE}" | head -4`,
      output: `--- Experimento: lr=1e-3 batch=16 ---\n--- Experimento: lr=1e-3 batch=32 ---\n🎉 Encontrado: accuracy=0.9512 con lr=1e-3 batch=32`
    }
  ];

  mlToolsExamples: CodeExample[] = [
    {
      label: '🐍 Python en CLI',
      code: `# ── Flags de Python útiles ────────────────────────────
python -c "import torch; print(torch.cuda.is_available())"  # One-liner
python -m pytest tests/ -v --tb=short                        # Correr tests
python -m pip install -r requirements.txt
python -m venv .venv && source .venv/bin/activate            # Virtual env

# ── IPython / Jupyter desde terminal ──────────────────
ipython                          # Shell interactivo mejorado
jupyter lab --no-browser --port 8888  # Jupyter sin abrir browser

# ── Profiling desde la terminal ────────────────────────
python -m cProfile -s cumulative src/train.py | head -20  # Profiling
python -m memory_profiler src/train.py                    # Memoria

# ── uv — el gestor de paquetes moderno ────────────────
pip install uv                   # Instalación
uv init mi-proyecto              # Nuevo proyecto
uv add numpy pandas scikit-learn # Añadir dependencias
uv run python src/train.py       # Correr en entorno aislado
uv sync                          # Sincronizar dependencias

# ── Variables de entorno para ML ──────────────────────
export PYTHONPATH="$PWD/src:$PYTHONPATH"
export CUDA_VISIBLE_DEVICES=0    # Usar solo GPU 0
export TOKENIZERS_PARALLELISM=false  # Silenciar warning HuggingFace`,
      output: `True  # CUDA disponible\nTest session starts\ncollected 12 items\n12 passed in 3.42s`
    },
    {
      label: '📊 Herramientas de monitoreo',
      code: `# ── Recursos del sistema ──────────────────────────────
htop                             # Monitor de procesos interactivo
nvtop                            # Monitor GPU (como htop para GPU)
nvidia-smi                       # Info GPU: uso, memoria, temperatura
nvidia-smi -l 5                  # Actualizar cada 5 segundos
watch -n 2 nvidia-smi            # Alternativa con watch

# ── Monitorear entrenamiento en tiempo real ─────────────
tail -f logs/training.log | grep -E "epoch|loss|accuracy"

# ── Tmux — sesiones persistentes en servidor ──────────
tmux new -s training             # Nueva sesión llamada 'training'
tmux attach -t training          # Reconectar a sesión
# Ctrl+B, D → Detach (sale sin matar el proceso)
# Ctrl+B, [  → Modo scroll
# Dentro de tmux:
python train.py --epochs 100     # Corriendo en la sesión — persiste al cerrar SSH

# ── rsync — transferir datos a servidor ───────────────
rsync -avz --progress \
  data/processed/ \
  usuario@servidor:/home/usuario/proyecto/data/processed/

# ── Verificar integridad de archivos descargados ──────
md5sum modelo.pt                 # Generar checksum
md5sum -c checksums.md5          # Verificar contra lista`,
      output: `+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 545.29       Driver Version: 545.29       CUDA Version: 12.3   |\n+------------------+----------------------+----------------------+\n| GPU  0  RTX 4090 | 45°C  P2  320W/450W |  22432MiB / 24564MiB |\n+------------------+----------------------+----------------------+`
    }
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Setup automatizado del entorno',
      description: 'Escribe un script bash que automatice el setup completo de un proyecto ML: verificar Python, crear virtual env, instalar dependencias, crear estructura de directorios y verificar que todo esté correcto.',
      hints: [
        'command -v python3 || { echo "Python no encontrado"; exit 1; }',
        'python3 -m venv .venv && source .venv/bin/activate',
        'pip install -r requirements.txt --quiet',
        'Usa colores con \\033[0;32m (verde) y \\033[0m (reset) para claridad'
      ],
      starterCode: `#!/usr/bin/env bash
set -euo pipefail

GREEN='\\033[0;32m'
RED='\\033[0;31m'
NC='\\033[0m'  # No Color

print_ok()  { echo -e "${GREEN}✓${NC} $1"; }
print_err() { echo -e "${RED}✗${NC} $1" >&2; exit 1; }

echo "=== Setup Proyecto ML ==="

# TODO: 1. Verificar que Python 3.8+ esté instalado
# TODO: 2. Crear virtual environment en .venv/
# TODO: 3. Activar el venv
# TODO: 4. Actualizar pip
# TODO: 5. Instalar requirements.txt si existe
# TODO: 6. Crear estructura: src/ data/raw/ data/processed/ models/ logs/ notebooks/
# TODO: 7. Crear .gitignore si no existe
# TODO: 8. Verificar imports básicos (numpy, pandas)

echo "=== Setup completo ✓ ==="`,
      expectedOutput: `=== Setup Proyecto ML ===\n✓ Python 3.10.12 detectado\n✓ Virtual environment creado\n✓ Dependencias instaladas\n✓ Estructura de directorios creada\n✓ numpy 1.24 importa correctamente\n=== Setup completo ✓ ===`,
      color: 'border-l-green-400',
      difficultyColor: 'bg-green-100 text-green-800'
    },
    {
      difficulty: 'Intermedio',
      title: 'Pipeline CLI de preprocesamiento',
      description: 'Construye un pipeline de procesamiento de datos usando únicamente herramientas de terminal: descarga, descomprime, filtra columnas con awk, une datasets con join, y genera estadísticas básicas — todo con pipes y sin Python.',
      hints: [
        'curl -O URL para descargar archivos',
        'awk -F"," \'NR==1 || $3 > 0\' para filtrar con header',
        'sort -t"," -k1 para ordenar por columna (requerido por join)',
        'join -t"," -1 1 -2 1 file1.csv file2.csv para unir por columna 1',
        'awk para estadísticas: sum, count, min, max'
      ],
      starterCode: `#!/usr/bin/env bash
# Pipeline de datos sin Python — solo herramientas UNIX

set -euo pipefail

# Dataset de ejemplo: ventas de productos
cat > ventas.csv << 'EOF'
id,producto,ventas,precio
1,laptop,150,1200
2,mouse,500,25
3,teclado,300,75
4,monitor,80,450
5,laptop,95,1200
EOF

cat > categorias.csv << 'EOF'
id,categoria,margen
1,electronica,0.15
2,accesorios,0.40
3,accesorios,0.35
4,perifericos,0.25
5,electronica,0.15
EOF

# TODO: 1. Mostrar solo productos con ventas > 100
# TODO: 2. Calcular ingresos totales por producto (ventas * precio)
# TODO: 3. Unir con categorias.csv por id
# TODO: 4. Ordenar por ingresos descendente
# TODO: 5. Mostrar estadísticas: total, promedio, máximo`,
      expectedOutput: `Productos con ventas > 100:\nid,producto,ventas,precio\n1,laptop,150,1200\n2,mouse,500,25\n3,teclado,300,75\n\nTop por ingresos:\nlaptop: $180,000\nmouse: $12,500`,
      color: 'border-l-yellow-400',
      difficultyColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      difficulty: 'Avanzado',
      title: 'Sistema de experimentos automatizado',
      description: 'Crea un sistema bash completo para gestionar experimentos ML: grid search de hiperparámetros en paralelo, guardado automático de resultados con timestamp, comparación de experimentos y generación de reporte en Markdown.',
      hints: [
        'xargs -P 4 para paralelismo con 4 workers',
        'wait para esperar a que terminen todos los procesos background',
        'printf para formatear tablas en terminal',
        'bc -l para aritmética de punto flotante en bash',
        'Guarda resultados en JSON con jq o en CSV simple'
      ],
      starterCode: `#!/usr/bin/env bash
set -euo pipefail

EXPERIMENT_DIR="experiments/$(date +%Y%m%d_%H%M%S)"
mkdir -p "${EXPERIMENT_DIR}"

run_experiment() {
    local lr="$1"
    local batch="$2"
    local dropout="$3"

    local exp_name="lr${lr}_b${batch}_d${dropout}"
    local log_file="${EXPERIMENT_DIR}/${exp_name}.log"

    # Simula entrenamiento (reemplaza con tu comando real)
    python -c "
import random, math, time
random.seed(hash('${exp_name}') % 10000)
loss = 0.5 - float('${lr}') * 100 + random.uniform(-0.05, 0.05)
acc = 0.85 + float('${lr}') * 500 + random.uniform(-0.02, 0.02)
print(f'lr=${lr},batch=${batch},dropout=${dropout},loss={loss:.4f},accuracy={acc:.4f}')
" > "${log_file}" 2>&1

    cat "${log_file}"
}
export -f run_experiment
export EXPERIMENT_DIR

# TODO: Grid search en paralelo sobre:
# LR: (1e-3 1e-4 5e-5)
# BATCH: (32 64)
# DROPOUT: (0.1 0.3)

# TODO: Consolidar resultados en CSV
# TODO: Encontrar mejor configuración
# TODO: Generar reporte Markdown con tabla de resultados`,
      expectedOutput: `16 experimentos completados en 8 segundos\nMejor config: lr=5e-05 batch=64 dropout=0.1 → accuracy=0.9612\nReporte guardado en: experiments/.../report.md`,
      color: 'border-l-red-400',
      difficultyColor: 'bg-red-100 text-red-800'
    }
  ];

  nextStation = {
    name: 'Línea 2: Machine Learning Loop',
    route: '/metro-map-ai',
    description: '¡Felicidades! Completaste Foundations. La siguiente línea: Supervised Learning, Scikit-Learn, evaluación de modelos y más.',
  };

  nextSlide()  { if (this.currentSlide < this.slides.length - 1) this.currentSlide++; }
  prevSlide()  { if (this.currentSlide > 0) this.currentSlide--; }
  goToSlide(i: number) { this.currentSlide = i; }

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') { event.preventDefault(); this.nextSlide(); }
    if (event.key === 'ArrowLeft'  || event.key === 'ArrowUp')   { event.preventDefault(); this.prevSlide(); }
  }
}
