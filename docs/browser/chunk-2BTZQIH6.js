import{d as F,f as L}from"./chunk-V6XJS2PW.js";import"./chunk-DGPQBSVR.js";import{$ as h,Ab as n,Bb as C,Ib as _,Jc as w,Kb as u,Kc as k,Lb as s,Lc as S,Oa as r,Pc as D,Tb as v,Ub as f,Wb as e,Xb as m,Yb as y,Z as b,Zb as E,_ as x,aa as M,db as O,hb as p,sb as P,yb as l,zb as t}from"./chunk-GRUBSZXT.js";import"./chunk-EQDQRRRY.js";function B(o,a){if(o&1){let i=_();t(0,"button",13),u("click",function(){let d=b(i).index,g=s();return x(g.goToSlide(d))}),n()}if(o&2){let i=a.index,c=s();f("bg-accent-orange",i===c.currentSlide)("bg-gray-300",i!==c.currentSlide),P("aria-label","Ir a diapositiva "+(i+1))}}function T(o,a){o&1&&(t(0,"div",19)(1,"div",20),e(2,"\u{1F5FA}\uFE0F METROMAP AI \u2014 L\xCDNEA 1: FOUNDATIONS STATION"),n(),t(3,"h1"),e(4,"Git & Version"),C(5,"br"),t(6,"span",21),e(7,"Control"),n()(),t(8,"h2",22),e(9,"Estaci\xF3n 9 de 9 \xB7 Control de versiones para proyectos de ML profesionales"),n(),t(10,"div",23)(11,"div",24)(12,"span",25),e(13,"\u23F1\uFE0F"),n(),t(14,"div")(15,"strong"),e(16,"Duraci\xF3n"),n(),t(17,"span"),e(18,"3\u20134 horas"),n()()(),t(19,"div",24)(20,"span",25),e(21,"\u{1F3AF}"),n(),t(22,"div")(23,"strong"),e(24,"Objetivo"),n(),t(25,"span"),e(26,"Git profesional para equipos de ML"),n()()(),t(27,"div",24)(28,"span",25),e(29,"\u{1F6E0}\uFE0F"),n(),t(30,"div")(31,"strong"),e(32,"Herramientas"),n(),t(33,"span"),e(34,"Git \xB7 GitHub \xB7 DVC \xB7 pre-commit"),n()()(),t(35,"div",24)(36,"span",25),e(37,"\u{1F4CB}"),n(),t(38,"div")(39,"strong"),e(40,"Prerequisito"),n(),t(41,"span"),e(42,"Terminal b\xE1sica \xB7 Python"),n()()()(),t(43,"div",26)(44,"h3"),e(45,"\u{1F4CB} Agenda"),n(),t(46,"div",27)(47,"span"),e(48,"\u{1F914} \xBFPor qu\xE9 Git en ML?"),n(),t(49,"span"),e(50,"\u{1F680} Git b\xE1sico"),n(),t(51,"span"),e(52,"\u{1F33F} Branching"),n(),t(53,"span"),e(54,"\u2601\uFE0F Colaboraci\xF3n remota"),n(),t(55,"span"),e(56,"\u{1F6AB} .gitignore & LFS"),n(),t(57,"span"),e(58,"\u{1F4E6} DVC intro"),n(),t(59,"span"),e(60,"\u{1F9EA} Workflow ML"),n(),t(61,"span"),e(62,"\u{1F3CB}\uFE0F Retos pr\xE1cticos"),n()()()())}function G(o,a){if(o&1&&(t(0,"div",33)(1,"div",34),e(2),n(),t(3,"h4"),e(4),n(),t(5,"p"),e(6),n()()),o&2){let i=a.$implicit;r(2),m(i.icon),r(2),m(i.title),r(2),m(i.desc)}}function A(o,a){if(o&1&&(t(0,"div",28)(1,"h2"),e(2,"\u{1F914} \xBFPor qu\xE9 Git es cr\xEDtico en ML?"),n(),t(3,"p",29),e(4," En desarrollo de software tradicional Git es \xFAtil. En ML es "),t(5,"strong"),e(6,"indispensable"),n(),e(7,": los experimentos son no-lineales, los datasets cambian, y los modelos evolucionan constantemente. "),n(),t(8,"div",30),p(9,G,7,3,"div",31),n(),t(10,"div",32),e(11," \u{1F4A1} "),t(12,"strong"),e(13,"El problema sin Git:"),n(),e(14,' "\xBFCu\xE1l versi\xF3n de train.py gener\xF3 ese 94% de accuracy que vimos hace 3 semanas?" \u2014 Sin control de versiones, esta pregunta no tiene respuesta. '),n()()),o&2){let i=s(2);r(9),l("ngForOf",i.whyReasons)}}function I(o,a){if(o&1){let i=_();t(0,"button",43),u("click",function(){let d=b(i).index,g=s(3);return x(g.activeBasicsTab=d)}),e(1),n()}if(o&2){let i=a.$implicit,c=a.index,d=s(3);f("active",d.activeBasicsTab===c),r(),m(i.label)}}function q(o,a){if(o&1&&(t(0,"div",44)(1,"span",45),e(2,"Output"),n(),t(3,"pre"),e(4),n()()),o&2){let i=s(3);r(4),m(i.basicsExamples[i.activeBasicsTab].output)}}function V(o,a){if(o&1&&(t(0,"div",28)(1,"h2"),e(2,"\u{1F680} Git B\xE1sico \u2014 El flujo esencial"),n(),t(3,"p",29),e(4," Todo en Git empieza con tres \xE1reas: "),t(5,"strong"),e(6,"Working Tree"),n(),e(7," (tus archivos), "),t(8,"strong"),e(9,"Staging Area"),n(),e(10," (lo que vas a commitear) y el "),t(11,"strong"),e(12,"Repository"),n(),e(13," (historial permanente). "),n(),t(14,"div",35),p(15,I,2,3,"button",36),n(),t(16,"div",37)(17,"pre",38)(18,"code"),e(19),n()(),p(20,q,5,1,"div",39),n(),t(21,"div",40),e(22," \u{1F4A1} "),t(23,"strong"),e(24,"Convenci\xF3n de commits:"),n(),e(25," Usa "),t(26,"a",41),e(27,"Conventional Commits"),n(),e(28,": "),t(29,"code",42),e(30,"feat:"),n(),e(31," \xB7 "),t(32,"code",42),e(33,"fix:"),n(),e(34," \xB7 "),t(35,"code",42),e(36,"exp:"),n(),e(37," \xB7 "),t(38,"code",42),e(39,"data:"),n(),e(40," \xB7 "),t(41,"code",42),e(42,"model:"),n()()()),o&2){let i=s(2);r(15),l("ngForOf",i.basicsExamples),r(4),m(i.basicsExamples[i.activeBasicsTab].code),r(),l("ngIf",i.basicsExamples[i.activeBasicsTab].output)}}function R(o,a){if(o&1){let i=_();t(0,"button",43),u("click",function(){let d=b(i).index,g=s(3);return x(g.activeBranchTab=d)}),e(1),n()}if(o&2){let i=a.$implicit,c=a.index,d=s(3);f("active",d.activeBranchTab===c),r(),m(i.label)}}function j(o,a){if(o&1&&(t(0,"div",44)(1,"span",45),e(2,"Output"),n(),t(3,"pre"),e(4),n()()),o&2){let i=s(3);r(4),m(i.branchExamples[i.activeBranchTab].output)}}function H(o,a){if(o&1&&(t(0,"div",28)(1,"h2"),e(2,"\u{1F33F} Branching \u2014 Experimentos paralelos"),n(),t(3,"p",29),e(4," Las ramas son la herramienta clave para experimentaci\xF3n en ML. Cada hip\xF3tesis tiene su rama; si funciona, se mergea. Si no, queda como referencia hist\xF3rica sin ensuciar "),t(5,"code",42),e(6,"main"),n(),e(7,". "),n(),t(8,"div",35),p(9,R,2,3,"button",36),n(),t(10,"div",37)(11,"pre",38)(12,"code"),e(13),n()(),p(14,j,5,1,"div",39),n(),t(15,"div",46),e(16," \u26A0\uFE0F "),t(17,"strong"),e(18,"Nunca hagas rebase de ramas p\xFAblicas."),n(),e(19," Si otros ya jalaron la rama, rebase reescribe el historial y causa conflictos. Usa "),t(20,"code",42),e(21,"rebase"),n(),e(22," solo en ramas locales personales. "),n()()),o&2){let i=s(2);r(9),l("ngForOf",i.branchExamples),r(4),m(i.branchExamples[i.activeBranchTab].code),r(),l("ngIf",i.branchExamples[i.activeBranchTab].output)}}function N(o,a){o&1&&(t(0,"div",28)(1,"h2"),e(2,"\u2601\uFE0F Colaboraci\xF3n Remota & Pull Requests"),n(),t(3,"p",29),e(4," GitHub / GitLab son el hub central donde el equipo converge. Los "),t(5,"strong"),e(6,"Pull Requests"),n(),e(7," son el mecanismo de revisi\xF3n \u2014 en ML esto incluye revisar no solo c\xF3digo sino tambi\xE9n m\xE9tricas y experimentos. "),n(),t(8,"div",37)(9,"pre",38)(10,"code"),e(11,`# \u2500\u2500 Conectar con remoto \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git remote add origin https://github.com/user/proyecto-ml.git
git push -u origin main            # Primer push con tracking

# \u2500\u2500 Sincronizaci\xF3n diaria \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git fetch origin                   # Descarga cambios sin aplicar
git pull origin main               # fetch + merge (o rebase con --rebase)
git pull --rebase origin main      # Mantiene historial lineal

# \u2500\u2500 Subir experimento para revisi\xF3n \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git switch -c exp/attention-v2
# ... desarrollas y committeas ...
git push origin exp/attention-v2   # Sube la rama

# \u2500\u2500 GitHub CLI (recomendado) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
gh pr create \\
  --title "exp: Attention V2 \u2192 accuracy=95.1% (+1%)" \\
  --body "## Cambios\\n- Multi-head attention con 8 heads\\n- Dropout 0.1\\n\\n## Resultados\\n| M\xE9trica | Baseline | V2 |\\n|---------|----------|----|\\n| Accuracy | 94.2% | 95.1% |\\n| F1 | 93.8% | 94.9% |" \\
  --reviewer @equipo-ml

gh pr list --state open
gh pr merge 42 --squash --delete-branch`),n()(),t(12,"div",44)(13,"span",45),e(14,"Output"),n(),t(15,"pre"),e(16,`Creating pull request for exp/attention-v2 into main in user/proyecto-ml
https://github.com/user/proyecto-ml/pull/42`),n()()(),t(17,"div",40),e(18," \u{1F4A1} "),t(19,"strong"),e(20,"Code Review en ML:"),n(),e(21," Adem\xE1s del c\xF3digo, el PR debe incluir: (1) m\xE9tricas comparativas, (2) ejemplos de predicciones, (3) an\xE1lisis de errores, (4) tiempo de inferencia. "),n()())}function W(o,a){o&1&&(t(0,"div",28)(1,"h2"),e(2,"\u{1F6AB} .gitignore & Git LFS"),n(),t(3,"p",29),e(4," Git no debe almacenar datos masivos ni modelos entrenados \u2014 eso explota el repositorio. "),t(5,"code",42),e(6,".gitignore"),n(),e(7," excluye archivos; "),t(8,"strong"),e(9,"Git LFS"),n(),e(10," permite versionar archivos grandes con punteros ligeros. "),n(),t(11,"div",37)(12,"pre",38)(13,"code"),e(14,`# \u2500\u2500 .gitignore para proyectos ML \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
# Python
__pycache__/
*.py[cod]
*.so
.env
.env.*
venv/
.venv/

# Datos (usa DVC o S3 para versionar datos)
data/raw/
data/processed/
*.csv
*.parquet
*.json.gz

# Modelos entrenados grandes
models/*.pkl
models/*.pt
models/*.h5
models/*.onnx
checkpoints/

# Experimentos y logs
mlruns/
wandb/
.neptune/
lightning_logs/
*.log

# Jupyter Notebooks \u2014 outputs (usa nbstripout)
.ipynb_checkpoints/

# IDE
.vscode/settings.json
.idea/

# \u2500\u2500 Git LFS para archivos grandes indispensables \u2500\u2500\u2500\u2500\u2500\u2500
# Instalar: https://git-lfs.github.com
git lfs install
git lfs track "*.pkl"         # Models peque\xF1os con versionado
git lfs track "data/curated/*.parquet"  # Dataset curado y estable
git add .gitattributes        # lfs config va aqu\xED
git commit -m "chore: configure git-lfs for model artifacts"

# Ver archivos bajo LFS
git lfs ls-files

# \u2500\u2500 Verificar .gitignore \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git check-ignore -v models/bert-finetuned.pt
# \u2192 .gitignore:8:models/*.pt    models/bert-finetuned.pt`),n()()(),t(15,"div",46),e(16," \u26A0\uFE0F Si accidentalmente committeas un archivo grande, usa "),t(17,"code",42),e(18,"git filter-repo"),n(),e(19," (no "),t(20,"code",42),e(21,"filter-branch"),n(),e(22,") para limpiarlo del historial completo antes de hacer push. "),n()())}function U(o,a){o&1&&(t(0,"div",28)(1,"h2"),e(2,"\u{1F4E6} DVC \u2014 Data Version Control"),n(),t(3,"p",29)(4,"strong"),e(5,"DVC"),n(),e(6," extiende Git para datos y modelos: los archivos grandes van a S3/GCS/Azure Blob; Git solo guarda punteros ("),t(7,"code",42),e(8,".dvc"),n(),e(9," files). As\xED tienes reproducibilidad completa sin inflar el repo. "),n(),t(10,"div",37)(11,"pre",38)(12,"code"),e(13,`# Instalaci\xF3n
pip install dvc dvc-s3  # o dvc-gs, dvc-azure seg\xFAn tu cloud

# \u2500\u2500 Inicializar DVC en el repo existente \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git init
dvc init
git add .dvc/
git commit -m "chore: initialize DVC"

# \u2500\u2500 Conectar storage remoto \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
dvc remote add -d myremote s3://mi-bucket/dvc-cache
# Para local (pruebas):
dvc remote add -d localremote /tmp/dvc-cache

# \u2500\u2500 Agregar datos bajo control DVC \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
dvc add data/raw/dataset_2024.parquet
# Genera: data/raw/dataset_2024.parquet.dvc
# Agrega autom\xE1ticamente data/raw/dataset_2024.parquet a .gitignore

git add data/raw/dataset_2024.parquet.dvc data/.gitignore
git commit -m "data: add raw dataset 2024 (12GB)"

dvc push   # Sube datos al remote storage

# \u2500\u2500 Reproducir en otra m\xE1quina \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git clone https://github.com/user/proyecto-ml.git
cd proyecto-ml
dvc pull   # Descarga los datos del remote

# \u2500\u2500 Pipeline reproducible \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
dvc run -n preprocess \\
  -d data/raw/dataset.parquet \\
  -d src/preprocess.py \\
  -o data/processed/clean.parquet \\
  python src/preprocess.py

dvc repro         # Re-ejecuta solo lo que cambi\xF3
dvc dag           # Visualiza el pipeline`),n()(),t(14,"div",44)(15,"span",45),e(16,"dvc dag"),n(),t(17,"pre"),e(18,`+----------------------+
| data/raw/dataset.dvc |
+----------------------+
          *
          *
    +------------+
    | preprocess |
    +------------+
          *
     +-------+
     | train |
     +-------+`),n()()(),t(19,"div",40),e(20," \u{1F4A1} "),t(21,"strong"),e(22,"DVC vs Git LFS:"),n(),e(23," Git LFS versiona archivos individualmente en Git. DVC versiona pipelines completos (datos + c\xF3digo + modelos) con cach\xE9 compartida y reproducibilidad de experimentos. "),n()())}function $(o,a){if(o&1){let i=_();t(0,"button",43),u("click",function(){let d=b(i).index,g=s(3);return x(g.activeWorkflowTab=d)}),e(1),n()}if(o&2){let i=a.$implicit,c=a.index,d=s(3);f("active",d.activeWorkflowTab===c),r(),m(i.label)}}function K(o,a){if(o&1&&(t(0,"div",44)(1,"span",45),e(2,"Output"),n(),t(3,"pre"),e(4),n()()),o&2){let i=s(3);r(4),m(i.workflowExamples[i.activeWorkflowTab].output)}}function Y(o,a){if(o&1&&(t(0,"div",28)(1,"h2"),e(2,"\u{1F9EA} Workflow Git para Equipos ML"),n(),t(3,"p",29),e(4," Los equipos de ML exitosos adaptan GitFlow con convenciones propias. La clave: "),t(5,"strong"),e(6,"trazabilidad entre commits, experimentos y m\xE9tricas"),n(),e(7,". "),n(),t(8,"div",35),p(9,$,2,3,"button",36),n(),t(10,"div",37)(11,"pre",38)(12,"code"),e(13),n()(),p(14,K,5,1,"div",39),n(),t(15,"div",40),e(16," \u{1F4A1} "),t(17,"strong"),e(18,"Integra con MLflow/W&B:"),n(),e(19," Guarda el SHA del commit como par\xE1metro del experimento \u2014 "),t(20,"code",42),e(21,'mlflow.log_param("git_sha", subprocess.check_output(["git","rev-parse","HEAD"]).decode().strip())'),n()()()),o&2){let i=s(2);r(9),l("ngForOf",i.workflowExamples),r(4),m(i.workflowExamples[i.activeWorkflowTab].code),r(),l("ngIf",i.workflowExamples[i.activeWorkflowTab].output)}}function J(o,a){if(o&1){let i=_();t(0,"button",57),u("click",function(){let d=b(i).index,g=s(3);return x(g.selectedChallenge=d)}),t(1,"span",58),e(2),n(),t(3,"span"),e(4),n()()}if(o&2){let i=a.$implicit,c=a.index,d=s(3);f("active",d.selectedChallenge===c),r(2),m(c===0?"\u{1F7E2}":c===1?"\u{1F7E1}":"\u{1F534}"),r(2),m(i.difficulty)}}function Q(o,a){if(o&1&&(t(0,"li"),e(1),n()),o&2){let i=a.$implicit;r(),m(i)}}function X(o,a){if(o&1&&(t(0,"div",47)(1,"h2"),e(2,"\u{1F3CB}\uFE0F Retos Pr\xE1cticos"),n(),t(3,"p",29),e(4,"Aplica Git en escenarios reales de ML. Elige tu nivel:"),n(),t(5,"div",48),p(6,J,5,4,"button",49),n(),t(7,"div",50)(8,"div",51)(9,"span",52),e(10),n(),t(11,"h3"),e(12),n()(),t(13,"p",53),e(14),n(),t(15,"div",54)(16,"pre",38)(17,"code"),e(18),n()()(),t(19,"div",55)(20,"strong"),e(21,"\u{1F4A1} Pistas:"),n(),t(22,"ul"),p(23,Q,2,1,"li",56),n()()()()),o&2){let i=s(2);r(6),l("ngForOf",i.challenges),r(),v("border-left-color",i.challenges[i.selectedChallenge].difficultyColor.includes("green")?"#4ade80":i.challenges[i.selectedChallenge].difficultyColor.includes("yellow")?"#facc15":"#f87171"),r(2),l("ngClass",i.challenges[i.selectedChallenge].difficultyColor),r(),y(" ",i.challenges[i.selectedChallenge].difficulty," "),r(2),m(i.challenges[i.selectedChallenge].title),r(2),m(i.challenges[i.selectedChallenge].description),r(4),m(i.challenges[i.selectedChallenge].starterCode),r(5),l("ngForOf",i.challenges[i.selectedChallenge].hints)}}function Z(o,a){if(o&1&&(t(0,"div",59)(1,"h2"),e(2,"\u2705 Resumen \u2014 Git & Version Control"),n(),t(3,"p",29),e(4,"Ahora tienes el control de versiones que un ML Engineer profesional usa:"),n(),t(5,"div",60)(6,"div",61)(7,"span",62),e(8,"\u{1F680}"),n(),t(9,"div")(10,"strong"),e(11,"Git B\xE1sico"),n(),t(12,"p"),e(13,"init \xB7 add \xB7 commit \xB7 log \xB7 diff \xB7 stash \xB7 restore \xB7 revert"),n()()(),t(14,"div",61)(15,"span",62),e(16,"\u{1F33F}"),n(),t(17,"div")(18,"strong"),e(19,"Branching"),n(),t(20,"p"),e(21,"switch \xB7 branch \xB7 merge \xB7 rebase \xB7 rebase -i \xB7 tags"),n()()(),t(22,"div",61)(23,"span",62),e(24,"\u2601\uFE0F"),n(),t(25,"div")(26,"strong"),e(27,"Colaboraci\xF3n"),n(),t(28,"p"),e(29,"push \xB7 pull \xB7 fetch \xB7 PR \xB7 GitHub CLI \xB7 code review en ML"),n()()(),t(30,"div",61)(31,"span",62),e(32,"\u{1F6AB}"),n(),t(33,"div")(34,"strong"),e(35,".gitignore & LFS"),n(),t(36,"p"),e(37,"Excluir datos masivos \xB7 Git LFS para artefactos \xB7 filter-repo"),n()()(),t(38,"div",61)(39,"span",62),e(40,"\u{1F4E6}"),n(),t(41,"div")(42,"strong"),e(43,"DVC"),n(),t(44,"p"),e(45,"Versionado de datos \xB7 pipelines reproducibles \xB7 dvc repro"),n()()(),t(46,"div",61)(47,"span",62),e(48,"\u{1F9EA}"),n(),t(49,"div")(50,"strong"),e(51,"Workflow ML"),n(),t(52,"p"),e(53,"Ramas por experimento \xB7 commits descriptivos \xB7 tags de versi\xF3n \xB7 pre-commit hooks"),n()()()(),t(54,"div",63)(55,"div",64),e(56,"\u{1F689} Siguiente Estaci\xF3n"),n(),t(57,"h3"),e(58),n(),t(59,"p"),e(60),n(),t(61,"a",65),e(62," Ver en el MetroMap "),t(63,"span"),e(64,"\u2192"),n()()(),t(65,"div",40)(66,"strong"),e(67,"\u{1F4DA} Recursos:"),n(),t(68,"span",66)(69,"a",67),e(70,"Pro Git Book (gratis)"),n(),e(71," \xB7 "),t(72,"a",68),e(73,"DVC Get Started"),n(),e(74," \xB7 "),t(75,"a",41),e(76,"Conventional Commits"),n()()()()),o&2){let i=s(2);r(58),m(i.nextStation.name),r(2),m(i.nextStation.description),r(),l("routerLink",i.nextStation.route)}}function ee(o,a){if(o&1&&(t(0,"div",14),p(1,T,63,0,"div",15)(2,A,15,1,"div",16)(3,V,43,3,"div",16)(4,H,23,3,"div",16)(5,N,22,0,"div",16)(6,W,23,0,"div",16)(7,U,24,0,"div",16)(8,Y,22,3,"div",16)(9,X,24,9,"div",17)(10,Z,77,3,"div",18),n()),o&2){let i=a.$implicit,c=a.index,d=s();f("active",c===d.currentSlide),r(),l("ngIf",i.type==="title"),r(),l("ngIf",i.type==="why-git-ml"),r(),l("ngIf",i.type==="git-basics"),r(),l("ngIf",i.type==="branching"),r(),l("ngIf",i.type==="remote-collab"),r(),l("ngIf",i.type==="gitignore-lfs"),r(),l("ngIf",i.type==="dvc-intro"),r(),l("ngIf",i.type==="ml-workflow"),r(),l("ngIf",i.type==="challenge"),r(),l("ngIf",i.type==="summary")}}var z=class o{currentSlide=0;selectedChallenge=0;activeBasicsTab=0;activeBranchTab=0;activeWorkflowTab=0;slides=[{type:"title"},{type:"why-git-ml"},{type:"git-basics"},{type:"branching"},{type:"remote-collab"},{type:"gitignore-lfs"},{type:"dvc-intro"},{type:"ml-workflow"},{type:"challenge"},{type:"summary"}];whyReasons=[{icon:"\u{1F501}",title:"Reproducibilidad",desc:"Volver exactamente al c\xF3digo que gener\xF3 un resultado publicado o una demo."},{icon:"\u{1F9EA}",title:"Experimentos",desc:"Cada experimento en su propia rama \u2014 compara, descarta o mergea resultados."},{icon:"\u{1F465}",title:"Colaboraci\xF3n",desc:"M\xFAltiples personas en el mismo modelo sin pisarse el trabajo."},{icon:"\u{1F4E6}",title:"CI/CD para ML",desc:"Pipelines autom\xE1ticos que re-entrenan, eval\xFAan y despliegan modelos."},{icon:"\u{1F575}\uFE0F",title:"Auditor\xEDa",desc:"Historial completo de qui\xE9n cambi\xF3 qu\xE9 hiperpar\xE1metro y cu\xE1ndo."},{icon:"\u{1F680}",title:"Despliegue",desc:"Tags de versi\xF3n para modelos en producci\xF3n \u2014 rollback inmediato si falla."}];basicsExamples=[{label:"\u{1F680} Primeros pasos",code:`# Configuraci\xF3n inicial (s\xF3lo una vez)
git config --global user.name  "Tu Nombre"
git config --global user.email "tu@email.com"
git config --global init.defaultBranch main

# Iniciar repositorio en proyecto ML existente
cd mi-proyecto-ml
git init

# Flujo b\xE1sico: modify \u2192 stage \u2192 commit
git status                    # Ver qu\xE9 cambi\xF3
git add src/train.py          # Stage archivo espec\xEDfico
git add src/                  # Stage toda la carpeta
git add -p                    # Stage interactivo (patch)
git commit -m "feat: add training loop with early stopping"

# Ver historial
git log --oneline --graph     # Vista compacta con \xE1rbol
git log -p src/train.py       # Ver qu\xE9 cambi\xF3 en un archivo
git show abc1234              # Ver un commit espec\xEDfico`,output:`* abc1234 (HEAD -> main) feat: add training loop with early stopping
* def5678 feat: implement data loader with augmentation
* 789abcd chore: initial project structure`},{label:"\u21A9\uFE0F Deshacer cambios",code:`# \u2500\u2500 ANTES DEL COMMIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git restore src/train.py         # Descartar cambios no staged
git restore --staged src/train.py # Quitar del staging area

# \u2500\u2500 DESPU\xC9S DEL COMMIT \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git revert HEAD                  # Nuevo commit que deshace (SEGURO en remoto)
git reset --soft HEAD~1          # Volver atr\xE1s, mantener cambios staged
git reset --mixed HEAD~1         # Volver atr\xE1s, mantener cambios sin stage
git reset --hard HEAD~1          # \u26A0\uFE0F Volver atr\xE1s y BORRAR cambios

# \u2500\u2500 BUSCAR REGRESIONES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git bisect start
git bisect bad                   # El commit actual est\xE1 roto
git bisect good v1.0.0           # Esta versi\xF3n funcionaba
# Git selecciona el punto medio \u2014 t\xFA testeas y marcas:
git bisect good   # o
git bisect bad
# Repite hasta aislar el commit que introdujo el bug
git bisect reset  # Volver al HEAD original`,output:`Bisecting: 3 revisions left to test after this
[a3f1c89] feat: change learning rate scheduler`},{label:"\u{1F50D} Inspecci\xF3n",code:`# Ver diferencias
git diff                         # Working tree vs staging
git diff --staged                # Staging vs \xFAltimo commit
git diff main..feature-branch    # Entre ramas

# Buscar en el historial
git log --all --grep="learning rate"  # Buscar en mensajes
git log -S "dropout"                  # Buscar cuando apareci\xF3 una string
git log --author="Ana"                # Commits de una persona
git log --since="2 weeks ago"         # Por fecha

# Blame \u2014 qui\xE9n toc\xF3 cada l\xEDnea
git blame src/model.py
# \u2192 cd1234aa (Ana Garc\xEDa 2024-03-01) class TransformerModel:

# Stash \u2014 guardar trabajo temporal
git stash                        # Guarda cambios sucios
git stash pop                    # Recupera \xFAltimos cambios
git stash list                   # Lista todos los stashes
git stash apply stash@{2}        # Aplica un stash espec\xEDfico`,output:`stash@{0}: WIP on feature/attention: abc1234 add self-attention
stash@{1}: WIP on main: def5678 fix batch normalization`}];branchExamples=[{label:"\u{1F33F} Crear y navegar",code:`# Crear y cambiar de rama
git branch feature/transformer-encoder    # Crear rama
git switch feature/transformer-encoder    # Cambiar a ella
git switch -c feature/attention-mechanism # Crear + cambiar en un paso

# Ver ramas
git branch -a         # Locales y remotas
git branch -v         # Con \xFAltimo commit de cada una
git branch --merged   # Ramas ya mergeadas en main

# Eliminar
git branch -d feature/old-experiment     # Seguro (solo si mergeada)
git branch -D feature/abandoned-model    # Forzado`,output:`* feature/transformer-encoder  abc1234 feat: add positional encoding
  main                           def5678 fix: normalize loss scaling
  remotes/origin/main            def5678 fix: normalize loss scaling`},{label:"\u{1F500} Merge y Rebase",code:`# \u2500\u2500 MERGE \u2014 preserva historial completo \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git switch main
git merge feature/transformer-encoder   # Fast-forward si posible
git merge --no-ff feature/attention     # Siempre crea merge commit

# \u2500\u2500 REBASE \u2014 historial lineal m\xE1s limpio \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git switch feature/transformer-encoder
git rebase main                         # Reapplies commits on top of main

# Rebase interactivo \u2014 reorganiza commits antes del PR
git rebase -i HEAD~4
# Editor: pick, squash, fixup, reword, drop

# \u2500\u2500 RESOLVER CONFLICTOS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
git merge feature/another-branch
# CONFLICT en src/train.py \u2192 edita el archivo
# <<<<<<< HEAD        tu versi\xF3n
# =======             separador
# >>>>>>> feature/... versi\xF3n de la otra rama
git add src/train.py
git merge --continue   # o git rebase --continue`,output:`Auto-merging src/train.py
CONFLICT (content): Merge conflict in src/train.py
Automatic merge failed; fix conflicts and then commit the result.`}];workflowExamples=[{label:"\u{1F9EA} Feature Branch para experimentos",code:`# Convenci\xF3n de nombres para ML
# feat/      \u2192 nueva capacidad del modelo
# exp/       \u2192 experimento (puede descartarse)
# fix/       \u2192 correcci\xF3n de bug
# data/      \u2192 cambios en data pipeline
# model/     \u2192 cambios en arquitectura

# Flujo recomendado para un experimento
git switch -c exp/bert-finetuning-lr-3e5

# Entrena y logea resultados
python train.py --lr 3e-5 --epochs 10

# Guarda resultados junto con el c\xF3digo
echo "accuracy=0.94, f1=0.93" >> experiments/results.txt
git add experiments/results.txt src/
git commit -m "exp: BERT lr=3e-5 \u2192 accuracy=0.94 (+2% vs baseline)"

# Si el experimento fue bueno \u2192 PR a main
# Si no \u2192 branch queda como referencia hist\xF3rica
git switch main`,output:"[exp/bert-finetuning-lr-3e5 abc1234] exp: BERT lr=3e-5 \u2192 accuracy=0.94 (+2%)"},{label:"\u{1F3F7}\uFE0F Tags y releases",code:`# Tags para versiones de modelo en producci\xF3n
git tag -a v1.2.0 -m "Modelo: BERT-base, accuracy=94.2%, F1=93.8%"
git tag -a v1.2.0-staging abc1234 -m "Candidato a producci\xF3n"

# Listar y buscar tags
git tag                       # Todos los tags
git tag -l "v1.*"             # Tags que coinciden con patr\xF3n

# Push de tags al remoto
git push origin v1.2.0        # Un tag espec\xEDfico
git push origin --tags        # Todos los tags

# Rollback a versi\xF3n anterior en producci\xF3n
git checkout v1.1.0           # Detached HEAD en la versi\xF3n estable
git switch -c hotfix/v1.1.1   # Desde ah\xED, crea rama de fix

# Ver qu\xE9 cambi\xF3 entre versiones
git diff v1.1.0..v1.2.0 -- src/model.py`,output:`v1.0.0  \u2192 baseline model, accuracy=91.5%
v1.1.0  \u2192 added data augmentation, accuracy=93.1%
v1.2.0  \u2192 BERT finetuning, accuracy=94.2%`}];challenges=[{difficulty:"Principiante",title:"Setup de repositorio ML",description:"Inicializa un repositorio Git para un proyecto de ML con la estructura est\xE1ndar, crea un .gitignore apropiado para Python/ML, realiza el primer commit y conecta con un repositorio remoto en GitHub.",hints:["github.com/github/gitignore tiene plantillas para Python","Agrega: __pycache__/, *.pyc, .env, data/raw/, models/*.pkl, .ipynb_checkpoints/","git remote add origin <url> para conectar el remoto","git push -u origin main para el primer push (establece tracking)"],starterCode:`# Ejecuta estos comandos en tu terminal
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
echo "## Setup
pip install -r requirements.txt" >> README.md

# TODO: git add + commit inicial
# TODO: conectar con remoto en GitHub
# TODO: push`,expectedOutput:`[main (root-commit) abc1234] chore: initial project structure
 4 files changed, 45 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md`,color:"border-l-green-400",difficultyColor:"bg-green-100 text-green-800"},{difficulty:"Intermedio",title:"Gesti\xF3n de experimentos con ramas",description:"Simula un flujo de experimentaci\xF3n real: crea una rama por experimento, registra resultados en un archivo de tracking, compara experimentos con git diff, y mergea el mejor resultado a main con un commit descriptivo.",hints:["Usa git switch -c exp/nombre-experimento para cada variante","Guarda hiperpar\xE1metros y m\xE9tricas en experiments/log.yaml","git diff exp/A..exp/B para comparar dos experimentos","Squash-merge: git merge --squash para un commit limpio en main"],starterCode:`# Simula 3 experimentos y elige el mejor

# Experimento A: lr=1e-3
git switch -c exp/lr-1e-3
echo "exp_id: A
lr: 1e-3
epochs: 20
accuracy: 0.891
f1: 0.887" > experiments/run_A.yaml
git add experiments/run_A.yaml
git commit -m "exp: baseline lr=1e-3 \u2192 accuracy=0.891"

# Experimento B: lr=1e-4
git switch main
git switch -c exp/lr-1e-4
echo "exp_id: B
lr: 1e-4
epochs: 20
accuracy: 0.923
f1: 0.919" > experiments/run_B.yaml
git add experiments/run_B.yaml
git commit -m "exp: lr=1e-4 \u2192 accuracy=0.923"

# TODO: mergea el mejor experimento a main
# TODO: crea un tag v0.1.0 con el resultado`,expectedOutput:`Merged exp/lr-1e-4 with accuracy=0.923 (+3.2% sobre baseline)
Tag v0.1.0 creado \u2192 candidato a producci\xF3n`,color:"border-l-yellow-400",difficultyColor:"bg-yellow-100 text-yellow-800"},{difficulty:"Avanzado",title:"Git Hooks para calidad de c\xF3digo ML",description:"Implementa git hooks que garanticen calidad antes de cada commit en un proyecto ML: verifica sintaxis Python, corre tests unitarios, detecta credenciales en el c\xF3digo, y valida que los notebooks no tengan outputs de datos sensibles.",hints:["Los hooks viven en .git/hooks/ \u2014 pre-commit es el m\xE1s com\xFAn","pre-commit framework (pip install pre-commit) simplifica la gesti\xF3n","Detecta secretos con detect-secrets o git-secrets","nbstripout limpia outputs de notebooks autom\xE1ticamente","El hook debe retornar exit code 0 para permitir el commit"],starterCode:`# Instalar pre-commit
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
pre-commit run --all-files  # Test completo`,expectedOutput:`black....................................................................Passed
detect-private-key...............................................Passed
check-added-large-files..........................................Passed
nbstripout.......................................................Passed
Todos los hooks pasaron \u2014 commit permitido \u2713`,color:"border-l-red-400",difficultyColor:"bg-red-100 text-red-800"}];nextStation={name:"CLI & Terminal Mastery",route:"/metro-map-ai/l1-cli",description:"Domina la terminal: shell scripting, automatizaci\xF3n de pipelines ML y productividad con herramientas de l\xEDnea de comandos."};nextSlide(){this.currentSlide<this.slides.length-1&&this.currentSlide++}prevSlide(){this.currentSlide>0&&this.currentSlide--}goToSlide(a){this.currentSlide=a}onKeydown(a){(a.key==="ArrowRight"||a.key==="ArrowDown")&&(a.preventDefault(),this.nextSlide()),(a.key==="ArrowLeft"||a.key==="ArrowUp")&&(a.preventDefault(),this.prevSlide())}static \u0275fac=function(i){return new(i||o)};static \u0275cmp=O({type:o,selectors:[["app-l1-git"]],hostBindings:function(i,c){i&1&&u("keydown",function(g){return c.onKeydown(g)})},decls:19,vars:6,consts:[["tabindex","0",1,"presentation-container",3,"keydown"],[1,"back-to-menu"],["routerLink","/metro-map-ai",1,"back-btn"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 19l-7-7m0 0l7-7m-7 7h18"],[1,"controls"],[1,"control-btn",3,"click","disabled"],[1,"flex","items-center","gap-3"],[1,"slide-counter"],[1,"flex","gap-1.5"],["class","w-2.5 h-2.5 rounded-full transition-all duration-200",3,"bg-accent-orange","bg-gray-300","click",4,"ngFor","ngForOf"],[1,"slide-wrapper"],["class","slide",3,"active",4,"ngFor","ngForOf"],[1,"w-2.5","h-2.5","rounded-full","transition-all","duration-200",3,"click"],[1,"slide"],["class","slide-title",4,"ngIf"],["class","slide-content",4,"ngIf"],["class","slide-content challenge-slide",4,"ngIf"],["class","slide-content summary-slide",4,"ngIf"],[1,"slide-title"],[1,"workshop-badge"],[2,"color","#f59e0b"],[1,"subtitle"],[1,"info-grid"],[1,"info-item"],[1,"info-icon"],[1,"agenda-preview"],[1,"agenda-grid"],[1,"slide-content"],[1,"slide-intro"],[1,"theory-grid"],["class","theory-card",4,"ngFor","ngForOf"],[1,"highlight-box"],[1,"theory-card"],[1,"theory-icon"],[1,"code-tabs"],["class","tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"code-block-wrapper"],[1,"code-block"],["class","output-block",4,"ngIf"],[1,"tip-box","mt-4"],["href","https://www.conventionalcommits.org/","target","_blank","rel","noopener noreferrer",1,"resource-link"],[1,"inline-code"],[1,"tab-btn",3,"click"],[1,"output-block"],[1,"output-label"],[1,"warning-box","mt-4"],[1,"slide-content","challenge-slide"],[1,"challenge-tabs"],["class","challenge-tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"challenge-card"],[1,"challenge-header"],[1,"badge",3,"ngClass"],[1,"challenge-description"],[1,"code-block-wrapper","mb-3"],[1,"hints-box"],[4,"ngFor","ngForOf"],[1,"challenge-tab-btn",3,"click"],[1,"text-lg"],[1,"slide-content","summary-slide"],[1,"summary-grid"],[1,"summary-item"],[1,"summary-icon"],[1,"next-station-card","mt-6"],[1,"next-station-label"],[1,"next-station-btn",3,"routerLink"],[1,"ml-2"],["href","https://git-scm.com/book/es/v2","target","_blank","rel","noopener noreferrer",1,"resource-link"],["href","https://dvc.org/doc/start","target","_blank","rel","noopener noreferrer",1,"resource-link"]],template:function(i,c){i&1&&(t(0,"div",0),u("keydown",function(g){return c.onKeydown(g)}),t(1,"div",1)(2,"a",2),h(),t(3,"svg",3),C(4,"path",4),n(),M(),t(5,"span"),e(6,"Volver al MetroMap AI"),n()()(),t(7,"div",5)(8,"button",6),u("click",function(){return c.prevSlide()}),e(9,"\u2190 Anterior"),n(),t(10,"div",7)(11,"span",8),e(12),n(),t(13,"div",9),p(14,B,1,5,"button",10),n()(),t(15,"button",6),u("click",function(){return c.nextSlide()}),e(16,"Siguiente \u2192"),n()(),t(17,"div",11),p(18,ee,11,12,"div",12),n()()),i&2&&(r(8),l("disabled",c.currentSlide===0),r(4),E("",c.currentSlide+1," / ",c.slides.length),r(2),l("ngForOf",c.slides),r(),l("disabled",c.currentSlide===c.slides.length-1),r(3),l("ngForOf",c.slides))},dependencies:[D,w,k,S,L,F],styles:['.presentation-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;padding:2rem;position:relative;outline:none}.back-to-menu[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-bottom:1rem}.back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#fffffff2;color:#667eea;padding:.75rem 1.25rem;border-radius:8px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 6px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.back-btn[_ngcontent-%COMP%]:hover{background:#fff;transform:translate(-4px);box-shadow:0 6px 12px #00000026;color:#764ba2}.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;transition:transform .3s ease}.back-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:translate(-2px)}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin-bottom:2rem;gap:1rem}.control-btn[_ngcontent-%COMP%]{background:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px #0000001a}.control-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.control-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.slide-counter[_ngcontent-%COMP%]{background:#fff;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;color:#667eea;box-shadow:0 4px 6px #0000001a}.slide-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;min-height:600px;position:relative}.slide[_ngcontent-%COMP%]{display:none;width:100%;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 20px 60px #0000004d;animation:_ngcontent-%COMP%_slideIn .5s ease}.slide.active[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}.slide-title[_ngcontent-%COMP%]{text-align:center}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.5rem 1.5rem;border-radius:50px;font-weight:700;font-size:.9rem;letter-spacing:1px;margin-bottom:2rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#2d3748;margin-bottom:1rem}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;color:#718096;margin-bottom:3rem}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:3rem}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem;background:#f7fafc;border-radius:12px;border-left:4px solid #667eea}.info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;font-weight:600}.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.125rem;color:#2d3748;font-weight:700}.slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#2d3748;margin-bottom:1.5rem;border-bottom:3px solid #667eea;padding-bottom:.5rem}.slide-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:#718096;margin-bottom:2rem;text-align:center}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:2rem}.theory-card[_ngcontent-%COMP%]{padding:2rem;border-radius:12px;border-left:6px solid;box-shadow:0 4px 6px #0000001a}.theory-card.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#22c55e}.theory-card.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#3b82f6}.theory-card.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2d3748;margin-bottom:.75rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;position:relative;padding:.5rem 0 .5rem 1.5rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.warning-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1rem 1.5rem;border-radius:8px;margin-top:2rem}.examples-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.example-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:all .3s ease}.example-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.example-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;cursor:pointer;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.example-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.accordion-icon[_ngcontent-%COMP%]{color:#667eea;font-weight:700;font-size:1.25rem}.example-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.25rem}.example-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}@keyframes _ngcontent-%COMP%_expandDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}.hu-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.hu-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.hu-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0c4a6e}.bad-prompt[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.bad-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#dc2626;margin-bottom:1rem}.good-prompt[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.good-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#16a34a;margin-bottom:1rem}.prompt-text[_ngcontent-%COMP%]{background:#fff;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.9rem;color:#000;white-space:pre-wrap;margin-bottom:1rem}.problems-list[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]{margin-top:1rem}.problems-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#2d3748}.problems-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2717";position:absolute;left:0;color:#ef4444;font-weight:700}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.output-preview[_ngcontent-%COMP%]{background:#faf5ff;border-left:4px solid #a855f7;padding:1.5rem;border-radius:8px}.output-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7e22ce;margin-bottom:1rem}.output-list[_ngcontent-%COMP%]{list-style:none;padding:0}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;position:relative}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#a855f7}.process-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.process-step[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.process-step[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.step-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.step-number[_ngcontent-%COMP%]{background:#fff;color:#667eea;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;flex-shrink:0}.step-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex:1}.step-title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem}.step-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.step-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.step-example[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;margin-bottom:1rem;border-left:3px solid #0ea5e9}.step-tips[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b}.step-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:.5rem}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#78350f}.template-container[_ngcontent-%COMP%]{background:#1e293b;border-radius:12px;overflow:hidden}.template-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.template-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.template-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0}.copy-btn[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:none;padding:.5rem 1rem;border-radius:6px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003}.template-code[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:2rem;margin:0;font-family:Courier New,monospace;font-size:.9rem;line-height:1.6;white-space:pre-wrap;overflow-x:auto}.template-instructions[_ngcontent-%COMP%]{background:#fff;padding:2rem}.template-instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:1rem}.template-instructions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:#4a5568;line-height:1.8}.template-instructions[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f7fafc;padding:.2rem .5rem;border-radius:4px;color:#667eea;font-family:Courier New,monospace}.challenges-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{border:3px solid;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.challenge-card.green[_ngcontent-%COMP%]{border-color:#22c55e}.challenge-card.blue[_ngcontent-%COMP%]{border-color:#3b82f6}.challenge-card.orange[_ngcontent-%COMP%]{border-color:#f97316}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #00000026}.challenge-header[_ngcontent-%COMP%]{padding:1.5rem;background:#f7fafc}.difficulty-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;border-radius:50px;font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:.75rem}.difficulty-badge.F\\e1 cil[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.difficulty-badge.Intermedio[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.difficulty-badge.Avanzado[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.125rem;display:flex;align-items:center;gap:.5rem}.challenge-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.hu-section[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hu-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem}.hu-text[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;border-left:3px solid #0ea5e9;font-style:italic;color:#0369a1}.context-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#4a5568}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#667eea;font-weight:700}.requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.action-section[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:2px dashed #e2e8f0}.start-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:1rem 2rem;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 16px #667eea66}.timer-note[_ngcontent-%COMP%]{color:#718096;font-size:.875rem}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.tip-card[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.tip-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem;font-size:1.125rem}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.tip-example[_ngcontent-%COMP%]{background:#fff;padding:.75rem;border-radius:6px;border:1px solid #e2e8f0}.tip-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#667eea;font-family:Courier New,monospace;font-size:.875rem}.deliverables-section[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]{margin-bottom:3rem}.deliverables-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1.75rem;margin-bottom:1.5rem;border-left:5px solid #667eea;padding-left:1rem}.deliverables-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.deliverable-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:1.5rem;border-radius:12px;border-left:5px solid #0ea5e9}.deliverable-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.deliverable-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#075985;margin-bottom:1rem}.checkpoints[_ngcontent-%COMP%]{list-style:none;padding:0}.checkpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#0c4a6e;display:flex;align-items:flex-start;gap:.5rem}.checkbox[_ngcontent-%COMP%]{color:#0ea5e9;font-size:1.25rem}.next-steps-list[_ngcontent-%COMP%]{background:#fef3c7;padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;color:#78350f;line-height:1.8}.closing-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-bottom:2rem}.closing-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;margin-bottom:1rem}.closing-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.closing-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#92400e;margin-bottom:1rem}.quote[_ngcontent-%COMP%]{font-style:italic;font-weight:600;text-align:center;padding:1rem;background:#fff;border-radius:8px;margin-top:1rem}.preview-next[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);padding:1.5rem;border-radius:12px;border-left:5px solid #22c55e;color:#166534;font-weight:600;text-align:center}.progress-dots[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover, .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background:#fffc;transform:scale(1.2)}.progress-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background:#fff;width:32px;border-radius:6px}@media (max-width: 768px){.presentation-container[_ngcontent-%COMP%]{padding:1rem}.slide[_ngcontent-%COMP%]{padding:1.5rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem}.info-grid[_ngcontent-%COMP%], .theory-grid[_ngcontent-%COMP%], .challenges-grid[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%], .deliverables-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.control-btn[_ngcontent-%COMP%], .slide-counter[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.875rem}}.formats-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.format-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.format-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.format-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.format-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.format-icon[_ngcontent-%COMP%]{font-size:2rem}.format-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0;color:#2d3748;font-size:1.25rem}.format-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.format-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.use-case-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:3px solid #0ea5e9;padding:1rem;border-radius:8px;margin-bottom:1rem;color:#0369a1}.format-example[_ngcontent-%COMP%]{background:#1e293b;padding:1.5rem;border-radius:8px}.format-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e2e8f0;margin-bottom:.75rem}.format-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e2e8f0;margin:0;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap}.requirement-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.requirement-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.requirement-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78350f;line-height:1.6}.requirement-text[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b;font-style:italic;color:#92400e}.requirement-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.sample-output[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.85rem;line-height:1.5;white-space:pre-wrap;overflow-x:auto}.testcase-box[_ngcontent-%COMP%]{background:#1e293b;border-left:4px solid #3b82f6;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.testcase-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#93c5fd;font-size:1.25rem;font-weight:700;margin-bottom:1rem}.testcase-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d1d5db;font-weight:600}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;font-weight:400;margin-left:.5rem}.testcase-text[_ngcontent-%COMP%]{background:#fff;color:#1e293b;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap;margin:0}.testcases-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.testcases-list[_ngcontent-%COMP%]{background:#f0f9ff;padding:1.5rem 1.5rem 1.5rem 2.5rem;border-radius:8px;border-left:3px solid #0ea5e9;color:#0c4a6e;line-height:1.8}.testcases-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.pros-cons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1rem}.pros-box[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px}.pros-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#166534;margin-bottom:.75rem}.pros-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.cons-box[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px}.cons-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#991b1b;margin-bottom:.75rem}.cons-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";position:absolute;left:0;color:#ef4444;font-weight:700}@media (max-width: 768px){.pros-cons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.final-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-top:2rem;text-align:center}.final-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;font-size:2rem;margin-bottom:1rem}.final-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f2937;font-size:1.1rem;margin-bottom:.75rem;line-height:1.6}.final-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#78350f;font-weight:700}',".slide-intro[_ngcontent-%COMP%]{color:#4b5563;font-size:1.05rem;margin-bottom:1.5rem;line-height:1.7;max-width:860px}.agenda-preview[_ngcontent-%COMP%]{margin-top:2rem;background:#667eea12;border:1px solid rgba(102,126,234,.2);border-radius:12px;padding:1.25rem 1.5rem;max-width:820px;width:100%}.agenda-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1rem;font-weight:700;margin-bottom:.75rem}.agenda-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.5rem 1rem}.agenda-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#4b5563;font-size:.875rem;display:flex;align-items:center;gap:.35rem}.code-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.5rem}.tab-btn[_ngcontent-%COMP%]{padding:.45rem 1rem;border-radius:8px 8px 0 0;font-size:.82rem;font-weight:600;background:#f1f5f9;color:#6b7280;border:1px solid #e2e8f0;border-bottom:none;transition:all .2s;cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0;color:#374151}.tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.code-block-wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;border-radius:0 10px 10px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 16px #00000014}.code-block-header[_ngcontent-%COMP%]{background:#2d2d3d;color:#a0aec0;font-size:.8rem;font-weight:600;padding:.5rem 1rem;border-bottom:1px solid rgba(255,255,255,.1)}.code-block[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;padding:1.25rem 1.5rem;font-size:.82rem;line-height:1.7;overflow-x:auto;margin:0;white-space:pre;font-family:Fira Code,Cascadia Code,Consolas,monospace;max-height:340px;overflow-y:auto}.code-block.bash[_ngcontent-%COMP%], .code-block.shell[_ngcontent-%COMP%]{color:#a8ff78}.output-block[_ngcontent-%COMP%]{background:#0d1117;border-top:1px solid rgba(255,255,255,.08);padding:.75rem 1.5rem}.output-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#4ade80;font-family:Fira Code,monospace;font-size:.8rem;margin:.25rem 0 0;white-space:pre-wrap}.output-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em}.inline-code[_ngcontent-%COMP%]{background:#fef9c3;color:#b45309;padding:.15rem .4rem;border-radius:4px;font-family:monospace;font-size:.85em;border:1px solid #fde68a}.comparison-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.75rem;margin-top:1rem}.mini-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #667eea;border-radius:10px;padding:.75rem 1rem}.mini-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.3rem}.mini-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;line-height:1.5;margin:0}.concepts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem;margin-top:1rem}.concept-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:1rem;display:flex;flex-direction:column;gap:.3rem}.concept-icon[_ngcontent-%COMP%]{font-size:1.5rem}.concept-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem}.concept-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;margin:0}.concept-card[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:monospace;color:#b45309;font-size:.78rem;background:#fef3c7;padding:.1rem .3rem;border-radius:3px}.info-box[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:1.25rem 1.5rem;margin-top:1.25rem}.info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:700;margin-bottom:1rem}.workflow-steps[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.5rem}.workflow-step[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem;background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:.6rem .8rem;flex:1;min-width:140px;box-shadow:0 1px 3px #0000000f}.step-num[_ngcontent-%COMP%]{background:#f59e0b;color:#fff;font-weight:900;font-size:.75rem;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.workflow-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.82rem;display:block}.workflow-step[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#16a34a;font-family:monospace;font-size:.72rem;display:block;margin-top:.15rem;background:#f0fdf4;padding:.1rem .25rem;border-radius:3px}.workflow-arrow[_ngcontent-%COMP%]{color:#9ca3af;font-size:1.2rem;font-weight:700;flex-shrink:0}.challenge-slide[_ngcontent-%COMP%]{padding-bottom:1rem}.challenge-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-bottom:1rem;flex-wrap:wrap}.challenge-tab-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:.5rem 1rem;color:#374151;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s}.challenge-tab-btn[_ngcontent-%COMP%]:hover, .challenge-tab-btn.active[_ngcontent-%COMP%]{background:#e2e8f0;border-color:#cbd5e1;color:#1e293b}.challenge-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid;border-radius:12px;padding:1.25rem 1.5rem}.challenge-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.1rem;font-weight:700;margin:0}.challenge-description[_ngcontent-%COMP%]{color:#374151;font-size:.9rem;line-height:1.65;margin-bottom:.75rem}.hints-box[_ngcontent-%COMP%]{background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:.75rem 1rem}.hints-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#92400e;font-size:.85rem}.hints-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.35rem 0 0 1rem;padding:0}.hints-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#374151;font-size:.82rem;line-height:1.8}.summary-slide[_ngcontent-%COMP%]{gap:1rem}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.75rem;margin:1rem 0;width:100%}.summary-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.75rem;background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #667eea;border-radius:10px;padding:.9rem 1rem}.summary-icon[_ngcontent-%COMP%]{font-size:1.5rem;flex-shrink:0}.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.2rem}.summary-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;line-height:1.5;margin:0}.next-station-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #fde68a;border-radius:14px;padding:1.25rem 1.5rem;width:100%;margin-top:.5rem}.next-station-label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:#b45309;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem}.next-station-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.25rem;font-weight:800;margin:0 0 .4rem}.next-station-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.88rem;line-height:1.6;margin-bottom:.75rem}.next-station-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;background:#f59e0b;color:#fff;font-size:.85rem;font-weight:700;padding:.5rem 1.1rem;border-radius:8px;text-decoration:none;transition:all .2s}.next-station-btn[_ngcontent-%COMP%]:hover{background:#d97706;transform:translate(2px)}.resource-link[_ngcontent-%COMP%]{color:#2563eb;text-decoration:underline}.resource-link[_ngcontent-%COMP%]:hover{color:#1d4ed8}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}"]})};export{z as L1GitComponent};
