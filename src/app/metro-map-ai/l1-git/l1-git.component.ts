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
  selector: 'app-l1-git',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './l1-git.component.html',
  styleUrls: ['../../shared-presentation.css', '../l1-shared.css']
})
export class L1GitComponent {
  currentSlide = 0;
  selectedChallenge = 0;
  activeBasicsTab = 0;
  activeBranchTab = 0;
  activeWorkflowTab = 0;

  slides = [
    { type: 'title' },
    { type: 'why-git-ml' },
    { type: 'git-basics' },
    { type: 'branching' },
    { type: 'remote-collab' },
    { type: 'gitignore-lfs' },
    { type: 'dvc-intro' },
    { type: 'ml-workflow' },
    { type: 'challenge' },
    { type: 'summary' },
  ];

  whyReasons = [
    { icon: '🔁', title: 'Reproducibilidad', desc: 'Volver exactamente al código que generó un resultado publicado o una demo.' },
    { icon: '🧪', title: 'Experimentos', desc: 'Cada experimento en su propia rama — compara, descarta o mergea resultados.' },
    { icon: '👥', title: 'Colaboración', desc: 'Múltiples personas en el mismo modelo sin pisarse el trabajo.' },
    { icon: '📦', title: 'CI/CD para ML', desc: 'Pipelines automáticos que re-entrenan, evalúan y despliegan modelos.' },
    { icon: '🕵️', title: 'Auditoría', desc: 'Historial completo de quién cambió qué hiperparámetro y cuándo.' },
    { icon: '🚀', title: 'Despliegue', desc: 'Tags de versión para modelos en producción — rollback inmediato si falla.' },
  ];

  basicsExamples: CodeExample[] = [
    {
      label: '🚀 Primeros pasos',
      code: `# Configuración inicial (sólo una vez)
git config --global user.name  "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global init.defaultBranch main

# Iniciar repositorio en proyecto ML existente
cd mi-proyecto-ml
git init

# Flujo básico: modify → stage → commit
git status                    # Ver qué cambió
git add src/train.py          # Stage archivo específico
git add src/                  # Stage toda la carpeta
git add -p                    # Stage interactivo (patch)
git commit -m "feat: add training loop with early stopping"

# Ver historial
git log --oneline --graph     # Vista compacta con árbol
git log -p src/train.py       # Ver qué cambió en un archivo
git show abc1234              # Ver un commit específico`,
      output: `* abc1234 (HEAD -> main) feat: add training loop with early stopping
* def5678 feat: implement data loader with augmentation
* 789abcd chore: initial project structure`
    },
    {
      label: '↩️ Deshacer cambios',
      code: `# ── ANTES DEL COMMIT ──────────────────────────────────
git restore src/train.py         # Descartar cambios no staged
git restore --staged src/train.py # Quitar del staging area

# ── DESPUÉS DEL COMMIT ─────────────────────────────────
git revert HEAD                  # Nuevo commit que deshace (SEGURO en remoto)
git reset --soft HEAD~1          # Volver atrás, mantener cambios staged
git reset --mixed HEAD~1         # Volver atrás, mantener cambios sin stage
git reset --hard HEAD~1          # ⚠️ Volver atrás y BORRAR cambios

# ── BUSCAR REGRESIONES ─────────────────────────────────
git bisect start
git bisect bad                   # El commit actual está roto
git bisect good v1.0.0           # Esta versión funcionaba
# Git selecciona el punto medio — tú testeas y marcas:
git bisect good   # o
git bisect bad
# Repite hasta aislar el commit que introdujo el bug
git bisect reset  # Volver al HEAD original`,
      output: `Bisecting: 3 revisions left to test after this
[a3f1c89] feat: change learning rate scheduler`
    },
    {
      label: '🔍 Inspección',
      code: `# Ver diferencias
git diff                         # Working tree vs staging
git diff --staged                # Staging vs último commit
git diff main..feature-branch    # Entre ramas

# Buscar en el historial
git log --all --grep="learning rate"  # Buscar en mensajes
git log -S "dropout"                  # Buscar cuando apareció una string
git log --author="Ana"                # Commits de una persona
git log --since="2 weeks ago"         # Por fecha

# Blame — quién tocó cada línea
git blame src/model.py
# → cd1234aa (Ana García 2024-03-01) class TransformerModel:

# Stash — guardar trabajo temporal
git stash                        # Guarda cambios sucios
git stash pop                    # Recupera últimos cambios
git stash list                   # Lista todos los stashes
git stash apply stash@{2}        # Aplica un stash específico`,
      output: `stash@{0}: WIP on feature/attention: abc1234 add self-attention
stash@{1}: WIP on main: def5678 fix batch normalization`
    }
  ];

  branchExamples: CodeExample[] = [
    {
      label: '🌿 Crear y navegar',
      code: `# Crear y cambiar de rama
git branch feature/transformer-encoder    # Crear rama
git switch feature/transformer-encoder    # Cambiar a ella
git switch -c feature/attention-mechanism # Crear + cambiar en un paso

# Ver ramas
git branch -a         # Locales y remotas
git branch -v         # Con último commit de cada una
git branch --merged   # Ramas ya mergeadas en main

# Eliminar
git branch -d feature/old-experiment     # Seguro (solo si mergeada)
git branch -D feature/abandoned-model    # Forzado`,
      output: `* feature/transformer-encoder  abc1234 feat: add positional encoding
  main                           def5678 fix: normalize loss scaling
  remotes/origin/main            def5678 fix: normalize loss scaling`
    },
    {
      label: '🔀 Merge y Rebase',
      code: `# ── MERGE — preserva historial completo ───────────────
git switch main
git merge feature/transformer-encoder   # Fast-forward si posible
git merge --no-ff feature/attention     # Siempre crea merge commit

# ── REBASE — historial lineal más limpio ───────────────
git switch feature/transformer-encoder
git rebase main                         # Reapplies commits on top of main

# Rebase interactivo — reorganiza commits antes del PR
git rebase -i HEAD~4
# Editor: pick, squash, fixup, reword, drop

# ── RESOLVER CONFLICTOS ────────────────────────────────
git merge feature/another-branch
# CONFLICT en src/train.py → edita el archivo
# <<<<<<< HEAD        tu versión
# =======             separador
# >>>>>>> feature/... versión de la otra rama
git add src/train.py
git merge --continue   # o git rebase --continue`,
      output: `Auto-merging src/train.py
CONFLICT (content): Merge conflict in src/train.py
Automatic merge failed; fix conflicts and then commit the result.`
    }
  ];

  workflowExamples: CodeExample[] = [
    {
      label: '🧪 Feature Branch para experimentos',
      code: `# Convención de nombres para ML
# feat/      → nueva capacidad del modelo
# exp/       → experimento (puede descartarse)
# fix/       → corrección de bug
# data/      → cambios en data pipeline
# model/     → cambios en arquitectura

# Flujo recomendado para un experimento
git switch -c exp/bert-finetuning-lr-3e5

# Entrena y logea resultados
python train.py --lr 3e-5 --epochs 10

# Guarda resultados junto con el código
echo "accuracy=0.94, f1=0.93" >> experiments/results.txt
git add experiments/results.txt src/
git commit -m "exp: BERT lr=3e-5 → accuracy=0.94 (+2% vs baseline)"

# Si el experimento fue bueno → PR a main
# Si no → branch queda como referencia histórica
git switch main`,
      output: `[exp/bert-finetuning-lr-3e5 abc1234] exp: BERT lr=3e-5 → accuracy=0.94 (+2%)`
    },
    {
      label: '🏷️ Tags y releases',
      code: `# Tags para versiones de modelo en producción
git tag -a v1.2.0 -m "Modelo: BERT-base, accuracy=94.2%, F1=93.8%"
git tag -a v1.2.0-staging abc1234 -m "Candidato a producción"

# Listar y buscar tags
git tag                       # Todos los tags
git tag -l "v1.*"             # Tags que coinciden con patrón

# Push de tags al remoto
git push origin v1.2.0        # Un tag específico
git push origin --tags        # Todos los tags

# Rollback a versión anterior en producción
git checkout v1.1.0           # Detached HEAD en la versión estable
git switch -c hotfix/v1.1.1   # Desde ahí, crea rama de fix

# Ver qué cambió entre versiones
git diff v1.1.0..v1.2.0 -- src/model.py`,
      output: `v1.0.0  → baseline model, accuracy=91.5%
v1.1.0  → added data augmentation, accuracy=93.1%
v1.2.0  → BERT finetuning, accuracy=94.2%`
    }
  ];

  challenges: Challenge[] = [
    {
      difficulty: 'Principiante',
      title: 'Setup de repositorio ML',
      description: 'Inicializa un repositorio Git para un proyecto de ML con la estructura estándar, crea un .gitignore apropiado para Python/ML, realiza el primer commit y conecta con un repositorio remoto en GitHub.',
      hints: [
        'github.com/github/gitignore tiene plantillas para Python',
        'Agrega: __pycache__/, *.pyc, .env, data/raw/, models/*.pkl, .ipynb_checkpoints/',
        'git remote add origin <url> para conectar el remoto',
        'git push -u origin main para el primer push (establece tracking)'
      ],
      starterCode: `# Ejecuta estos comandos en tu terminal
mkdir proyecto-ml && cd proyecto-ml

# 1. Inicializar git
# TODO: git init

# 2. Crear estructura del proyecto
mkdir -p src data/raw data/processed models notebooks experiments

# 3. Crear .gitignore apropiado para ML
cat > .gitignore << 'EOF'
# Python
__pycache__/
*.py[cod]
*.so
.env
venv/

# ML artifacts
models/*.pkl
models/*.h5
models/*.pt
data/raw/
*.csv
*.parquet

# Jupyter
.ipynb_checkpoints/

# MLflow / Wandb
mlruns/
wandb/
EOF

# 4. README inicial
echo "# Proyecto ML" > README.md
echo "## Setup\npip install -r requirements.txt" >> README.md

# TODO: git add + commit inicial
# TODO: conectar con remoto en GitHub
# TODO: push`,
      expectedOutput: `[main (root-commit) abc1234] chore: initial project structure
 4 files changed, 45 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md`,
      color: 'border-l-green-400',
      difficultyColor: 'bg-green-100 text-green-800'
    },
    {
      difficulty: 'Intermedio',
      title: 'Gestión de experimentos con ramas',
      description: 'Simula un flujo de experimentación real: crea una rama por experimento, registra resultados en un archivo de tracking, compara experimentos con git diff, y mergea el mejor resultado a main con un commit descriptivo.',
      hints: [
        'Usa git switch -c exp/nombre-experimento para cada variante',
        'Guarda hiperparámetros y métricas en experiments/log.yaml',
        'git diff exp/A..exp/B para comparar dos experimentos',
        'Squash-merge: git merge --squash para un commit limpio en main'
      ],
      starterCode: `# Simula 3 experimentos y elige el mejor

# Experimento A: lr=1e-3
git switch -c exp/lr-1e-3
echo "exp_id: A
lr: 1e-3
epochs: 20
accuracy: 0.891
f1: 0.887" > experiments/run_A.yaml
git add experiments/run_A.yaml
git commit -m "exp: baseline lr=1e-3 → accuracy=0.891"

# Experimento B: lr=1e-4
git switch main
git switch -c exp/lr-1e-4
echo "exp_id: B
lr: 1e-4
epochs: 20
accuracy: 0.923
f1: 0.919" > experiments/run_B.yaml
git add experiments/run_B.yaml
git commit -m "exp: lr=1e-4 → accuracy=0.923"

# TODO: mergea el mejor experimento a main
# TODO: crea un tag v0.1.0 con el resultado`,
      expectedOutput: `Merged exp/lr-1e-4 with accuracy=0.923 (+3.2% sobre baseline)
Tag v0.1.0 creado → candidato a producción`,
      color: 'border-l-yellow-400',
      difficultyColor: 'bg-yellow-100 text-yellow-800'
    },
    {
      difficulty: 'Avanzado',
      title: 'Git Hooks para calidad de código ML',
      description: 'Implementa git hooks que garanticen calidad antes de cada commit en un proyecto ML: verifica sintaxis Python, corre tests unitarios, detecta credenciales en el código, y valida que los notebooks no tengan outputs de datos sensibles.',
      hints: [
        'Los hooks viven en .git/hooks/ — pre-commit es el más común',
        'pre-commit framework (pip install pre-commit) simplifica la gestión',
        'Detecta secretos con detect-secrets o git-secrets',
        'nbstripout limpia outputs de notebooks automáticamente',
        'El hook debe retornar exit code 0 para permitir el commit'
      ],
      starterCode: `# Instalar pre-commit
pip install pre-commit

# Crear .pre-commit-config.yaml
cat > .pre-commit-config.yaml << 'EOF'
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.5.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: check-json
      - id: detect-private-key      # Detecta claves privadas
      - id: check-added-large-files # Evita commitear modelos grandes
        args: ['--maxkb=500']

  - repo: https://github.com/psf/black
    rev: 23.11.0
    hooks:
      - id: black
        language_version: python3

  - repo: https://github.com/kynan/nbstripout
    rev: 0.6.1
    hooks:
      - id: nbstripout   # Limpia outputs de notebooks

  # TODO: agrega flake8 para linting
  # TODO: agrega mypy para type checking
  # TODO: agrega pytest para tests unitarios
EOF

# Instalar los hooks
pre-commit install
pre-commit run --all-files  # Test completo`,
      expectedOutput: `black....................................................................Passed
detect-private-key...............................................Passed
check-added-large-files..........................................Passed
nbstripout.......................................................Passed
Todos los hooks pasaron — commit permitido ✓`,
      color: 'border-l-red-400',
      difficultyColor: 'bg-red-100 text-red-800'
    }
  ];

  nextStation = {
    name: 'CLI & Terminal Mastery',
    route: '/metro-map-ai/l1-cli',
    description: 'Domina la terminal: shell scripting, automatización de pipelines ML y productividad con herramientas de línea de comandos.',
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
