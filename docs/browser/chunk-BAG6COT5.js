import{d as F,f as T}from"./chunk-V6XJS2PW.js";import"./chunk-DGPQBSVR.js";import{$ as h,Ab as e,Bb as P,Ib as b,Jc as E,Kb as u,Kc as S,Lb as c,Lc as w,Mc as k,Oa as r,Pc as D,Ub as f,Wb as n,Xb as m,Yb as C,Z as x,Zb as M,_,aa as v,db as O,hb as g,hc as y,yb as s,zb as t}from"./chunk-GRUBSZXT.js";import"./chunk-EQDQRRRY.js";var I=i=>({background:i});function A(i,a){if(i&1){let o=b();t(0,"button",13),u("click",function(){let d=x(o).index,p=c();return _(p.goToSlide(d))}),e()}if(i&2){let o=a.index,l=c();f("bg-white",o===l.currentSlide)("bg-white",o===l.currentSlide)("scale-125",o===l.currentSlide)("bg-white_40",o!==l.currentSlide),s("ngStyle",y(9,I,o===l.currentSlide?"white":"rgba(255,255,255,0.35)"))}}function B(i,a){i&1&&(t(0,"div",19)(1,"div",20),n(2,"\u{1F5FA}\uFE0F METROMAP AI \u2014 L\xCDNEA 1: FOUNDATIONS STATION"),e(),t(3,"h1"),n(4,"Python Programming"),P(5,"br"),t(6,"span",21),n(7,"Basics"),e()(),t(8,"h2",22),n(9,"Estaci\xF3n 1 de 9 \xB7 Tu lenguaje nativo para la Inteligencia Artificial"),e(),t(10,"div",23)(11,"div",24)(12,"span",25),n(13,"\u23F1\uFE0F"),e(),t(14,"span",26),n(15,"Duraci\xF3n"),e(),t(16,"span",27),n(17,"90 minutos"),e()(),t(18,"div",24)(19,"span",25),n(20,"\u{1F3AF}"),e(),t(21,"span",26),n(22,"Nivel"),e(),t(23,"span",27),n(24,"Fundamentos"),e()(),t(25,"div",24)(26,"span",25),n(27,"\u{1F4A1}"),e(),t(28,"span",26),n(29,"Slides"),e(),t(30,"span",27),n(31,"10 secciones"),e()(),t(32,"div",24)(33,"span",25),n(34,"\u{1F3C6}"),e(),t(35,"span",26),n(36,"Retos"),e(),t(37,"span",27),n(38,"3 desaf\xEDos pr\xE1cticos"),e()()(),t(39,"div",28)(40,"h3"),n(41,"\u{1F4CB} Agenda de hoy"),e(),t(42,"div",29)(43,"span"),n(44,"\u{1F40D} \xBFPor qu\xE9 Python para IA?"),e(),t(45,"span"),n(46,"\u{1F4CA} Variables y tipos de datos"),e(),t(47,"span"),n(48,"\u{1F500} Control de flujo"),e(),t(49,"span"),n(50,"\u{1F4E6} Funciones avanzadas"),e(),t(51,"span"),n(52,"\u{1F5C2}\uFE0F Estructuras de datos"),e(),t(53,"span"),n(54,"\u{1F3D7}\uFE0F POO b\xE1sica"),e(),t(55,"span"),n(56,"\u2699\uFE0F M\xF3dulos y entorno virtual"),e(),t(57,"span"),n(58,"\u{1F3CB}\uFE0F 3 Retos pr\xE1cticos"),e()()()())}function L(i,a){if(i&1&&(t(0,"div",36)(1,"div",37),n(2),e(),t(3,"h3"),n(4),e(),t(5,"p"),n(6),e()()),i&2){let o=a.$implicit;s("ngClass",o.color),r(2),m(o.icon),r(2),m(o.title),r(2),m(o.description)}}function N(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F40D} \xBFPor qu\xE9 Python para IA?"),e(),t(3,"p",31),n(4,"Python no es solo una opci\xF3n \u2014 es "),t(5,"strong"),n(6,"el est\xE1ndar de facto"),e(),n(7," en Machine Learning, Deep Learning y toda la industria de IA."),e(),t(8,"div",32),g(9,L,7,4,"div",33),e(),t(10,"div",34)(11,"strong"),n(12,"\u{1F914} \xBFY los dem\xE1s lenguajes?"),e(),t(13,"span",35),n(14,"R (estad\xEDstica pura), Julia (velocidad num\xE9rica), JavaScript (browser/mobile AI) \u2014 \xFAtiles en nichos. Python domina por ecosistema, comunidad y versatilidad completa."),e()()()),i&2){let o=c(2);r(9),s("ngForOf",o.whyPythonReasons)}}function q(i,a){if(i&1){let o=b();t(0,"button",45),u("click",function(){let d=x(o).index,p=c(3);return _(p.activeDataTypeTab=d)}),n(1),e()}if(i&2){let o=a.$implicit,l=a.index,d=c(3);f("active",d.activeDataTypeTab===l),r(),C(" ",o.label," ")}}function j(i,a){if(i&1&&(t(0,"div",46)(1,"span",47),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=c(3);r(4),m(o.dataTypes[o.activeDataTypeTab].output)}}function R(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F4CA} Variables y Tipos de Datos"),e(),t(3,"p",31),n(4,"Python es "),t(5,"strong"),n(6,"tipado din\xE1mico"),e(),n(7," \u2014 no declaras el tipo, Python lo infiere. Desde Python 3.5+ puedes agregar "),t(8,"em"),n(9,"type hints"),e(),n(10," opcionales."),e(),t(11,"div",38),g(12,q,2,3,"button",39),e(),t(13,"div",40)(14,"pre",41)(15,"code"),n(16),e()(),g(17,j,5,1,"div",42),e(),t(18,"div",43)(19,"strong"),n(20,"\u{1F4A1} Type Hints en IA:"),e(),n(21," \xDAsalos para hacerlo legible: "),t(22,"code",44),n(23,"def normalizar(datos: list[float]) -> list[float]:"),e()()()),i&2){let o=c(2);r(12),s("ngForOf",o.dataTypes),r(4),m(o.dataTypes[o.activeDataTypeTab].code),r(),s("ngIf",o.dataTypes[o.activeDataTypeTab].output)}}function V(i,a){if(i&1){let o=b();t(0,"button",45),u("click",function(){let d=x(o).index,p=c(3);return _(p.activeControlFlowTab=d)}),n(1),e()}if(i&2){let o=a.$implicit,l=a.index,d=c(3);f("active",d.activeControlFlowTab===l),r(),C(" ",o.label," ")}}function H(i,a){if(i&1&&(t(0,"div",46)(1,"span",47),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=c(3);r(4),m(o.controlFlowExamples[o.activeControlFlowTab].output)}}function U(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F500} Control de Flujo"),e(),t(3,"p",31),n(4,"Los bucles y condicionales son la base de cualquier algoritmo, desde un simple clasificador hasta un loop de entrenamiento de \xE9pocas."),e(),t(5,"div",38),g(6,V,2,3,"button",39),e(),t(7,"div",40)(8,"pre",41)(9,"code"),n(10),e()(),g(11,H,5,1,"div",42),e(),t(12,"div",48)(13,"strong"),n(14,"\u26A0\uFE0F Indentaci\xF3n en Python:"),e(),n(15," Python usa espacios (4 espacios PEP8) para definir bloques \u2014 \xA1no llaves! Un error de indentaci\xF3n es un error de sintaxis. "),e()()),i&2){let o=c(2);r(6),s("ngForOf",o.controlFlowExamples),r(4),m(o.controlFlowExamples[o.activeControlFlowTab].code),r(),s("ngIf",o.controlFlowExamples[o.activeControlFlowTab].output)}}function G(i,a){if(i&1){let o=b();t(0,"button",45),u("click",function(){let d=x(o).index,p=c(3);return _(p.activeFunctionTab=d)}),n(1),e()}if(i&2){let o=a.$implicit,l=a.index,d=c(3);f("active",d.activeFunctionTab===l),r(),C(" ",o.label," ")}}function $(i,a){if(i&1&&(t(0,"div",46)(1,"span",47),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=c(3);r(4),m(o.functionExamples[o.activeFunctionTab].output)}}function K(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F4E6} Funciones \u2014 El Bloque Constructivo de IA"),e(),t(3,"p",31),n(4,"En IA vas a escribir "),t(5,"strong"),n(6,"much\xEDsimas funciones"),e(),n(7,": de preprocesamiento, m\xE9tricas, data augmentation, p\xE9rdidas personalizadas. Dominarlas es esencial."),e(),t(8,"div",38),g(9,G,2,3,"button",39),e(),t(10,"div",40)(11,"pre",41)(12,"code"),n(13),e()(),g(14,$,5,1,"div",42),e(),t(15,"div",43)(16,"strong"),n(17,"\u{1F4A1} Principio DRY:"),e(),t(18,"em"),n(19,"Don't Repeat Yourself."),e(),n(20," Si copias y pegas c\xF3digo 3 veces \u2192 convi\xE9rtelo en funci\xF3n. En pipelines de ML esto es cr\xEDtico para mantenibilidad. "),e()()),i&2){let o=c(2);r(9),s("ngForOf",o.functionExamples),r(4),m(o.functionExamples[o.activeFunctionTab].code),r(),s("ngIf",o.functionExamples[o.activeFunctionTab].output)}}function Y(i,a){if(i&1){let o=b();t(0,"button",45),u("click",function(){let d=x(o).index,p=c(3);return _(p.activeDataStructureTab=d)}),n(1),e()}if(i&2){let o=a.$implicit,l=a.index,d=c(3);f("active",d.activeDataStructureTab===l),r(),C(" ",o.label," ")}}function J(i,a){if(i&1&&(t(0,"div",46)(1,"span",47),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=c(3);r(4),m(o.dataStructureExamples[o.activeDataStructureTab].output)}}function W(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F5C2}\uFE0F Estructuras de Datos"),e(),t(3,"p",31),n(4,"Son la base de c\xF3mo manipular\xE1s datos en IA. Antes de NumPy arrays, entiendes listas. Antes de DataFrames, entiendes diccionarios."),e(),t(5,"div",38),g(6,Y,2,3,"button",39),e(),t(7,"div",40)(8,"pre",41)(9,"code"),n(10),e()(),g(11,J,5,1,"div",42),e(),t(12,"div",49)(13,"div",50)(14,"strong"),n(15,"Lista []"),e(),t(16,"p"),n(17,"Ordenada, mutable, acepta duplicados. Para datos secuenciales."),e()(),t(18,"div",50)(19,"strong"),n(20,"Diccionario {}"),e(),t(21,"p"),n(22,"Clave-valor, acceso O(1). Para configuraciones y resultados."),e()(),t(23,"div",50)(24,"strong"),n(25,"Tupla ()"),e(),t(26,"p"),n(27,"Inmutable. Para coordenadas, dimensiones, retornos m\xFAltiples."),e()(),t(28,"div",50)(29,"strong"),n(30,"Set {}"),e(),t(31,"p"),n(32,"Sin duplicados. Para etiquetas \xFAnicas, operaciones de conjuntos."),e()()()()),i&2){let o=c(2);r(6),s("ngForOf",o.dataStructureExamples),r(4),m(o.dataStructureExamples[o.activeDataStructureTab].code),r(),s("ngIf",o.dataStructureExamples[o.activeDataStructureTab].output)}}function Q(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F3D7}\uFE0F Programaci\xF3n Orientada a Objetos"),e(),t(3,"p",31),n(4,"PyTorch, Scikit-learn, Keras \u2014 "),t(5,"strong"),n(6,"todos est\xE1n construidos con POO"),e(),n(7,". Entender clases te permite extenderlos, crear modelos custom y pipelines profesionales."),e(),t(8,"div",40)(9,"pre",41)(10,"code"),n(11),e()(),t(12,"div",46)(13,"span",47),n(14,"\u25B6 Output"),e(),t(15,"pre"),n(16),e()()(),t(17,"div",51)(18,"div",52)(19,"span",53),n(20,"\u{1F9F1}"),e(),t(21,"strong"),n(22,"Encapsulamiento"),e(),t(23,"p"),n(24,"Datos y comportamiento juntos en una clase."),e()(),t(25,"div",52)(26,"span",53),n(27,"\u{1F9EC}"),e(),t(28,"strong"),n(29,"Herencia"),e(),t(30,"p")(31,"code"),n(32,"class CNN(ModeloIA)"),e(),n(33," \u2014 reutiliza c\xF3digo del padre."),e()(),t(34,"div",52)(35,"span",53),n(36,"\u{1F3AD}"),e(),t(37,"strong"),n(38,"Polimorfismo"),e(),t(39,"p"),n(40,"Mismo m\xE9todo, comportamiento diferente por clase."),e()(),t(41,"div",52)(42,"span",53),n(43,"\u{1F512}"),e(),t(44,"strong"),n(45,"Abstracci\xF3n"),e(),t(46,"p"),n(47,"Ocultar complejidad, exponer interfaz simple."),e()()()()),i&2){let o=c(2);r(11),m(o.oopExample.code),r(5),m(o.oopExample.output)}}function X(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u2699\uFE0F M\xF3dulos, Paquetes y Entorno Virtual"),e(),t(3,"p",31),n(4,"Un entorno virtual ("),t(5,"code"),n(6,"venv"),e(),n(7,") a\xEDsla las dependencias de cada proyecto. Es "),t(8,"strong"),n(9,"obligatorio en IA"),e(),n(10," \u2014 distintos proyectos necesitan versiones diferentes de NumPy, PyTorch, etc."),e(),t(11,"div",40)(12,"pre",54)(13,"code"),n(14),e()()(),t(15,"div",55)(16,"h3"),n(17,"\u{1F504} Flujo de trabajo est\xE1ndar para proyectos IA"),e(),t(18,"div",56)(19,"div",57)(20,"span",58),n(21,"1"),e(),t(22,"div")(23,"strong"),n(24,"Crear entorno"),e(),t(25,"code"),n(26,"python -m venv venv_ia"),e()()(),t(27,"div",59),n(28,"\u2192"),e(),t(29,"div",57)(30,"span",58),n(31,"2"),e(),t(32,"div")(33,"strong"),n(34,"Activar"),e(),t(35,"code"),n(36,"source venv_ia/bin/activate"),e()()(),t(37,"div",59),n(38,"\u2192"),e(),t(39,"div",57)(40,"span",58),n(41,"3"),e(),t(42,"div")(43,"strong"),n(44,"Instalar deps"),e(),t(45,"code"),n(46,"pip install -r requirements.txt"),e()()(),t(47,"div",59),n(48,"\u2192"),e(),t(49,"div",57)(50,"span",58),n(51,"4"),e(),t(52,"div")(53,"strong"),n(54,"Desarrollar"),e(),t(55,"code"),n(56,"jupyter notebook"),e()()(),t(57,"div",59),n(58,"\u2192"),e(),t(59,"div",57)(60,"span",58),n(61,"5"),e(),t(62,"div")(63,"strong"),n(64,"Guardar deps"),e(),t(65,"code"),n(66,"pip freeze > requirements.txt"),e()()()()(),t(67,"div",48)(68,"strong"),n(69,"\u{1F6AB} Nunca uses pip install sin entorno virtual activo"),e(),n(70," \u2014 contaminar\xE1s las librer\xEDas del sistema y tendr\xE1s conflictos entre proyectos. "),e()()),i&2){let o=c(2);r(14),m(o.modulesExample.code)}}function Z(i,a){if(i&1){let o=b();t(0,"button",72),u("click",function(){let d=x(o).index,p=c(3);return _(p.selectedChallenge=d)}),t(1,"span",73),n(2),e(),t(3,"span"),n(4),e()()}if(i&2){let o=a.$implicit,l=a.index,d=c(3);f("active",d.selectedChallenge===l),s("ngClass",d.selectedChallenge===l?"":"opacity-70"),r(),s("ngClass",o.difficultyColor),r(),C(" ",o.difficulty," "),r(2),m(o.title)}}function ee(i,a){if(i&1&&(t(0,"li"),n(1),e()),i&2){let o=a.$implicit;r(),m(o)}}function te(i,a){if(i&1&&(t(0,"div",60)(1,"h2"),n(2,"\u{1F3CB}\uFE0F Retos Pr\xE1cticos"),e(),t(3,"p",31),n(4,"Pon a prueba lo aprendido. Selecciona tu nivel y resuelve el desaf\xEDo en tu IDE favorito."),e(),t(5,"div",61),g(6,Z,5,6,"button",62),e(),t(7,"div",63)(8,"div",64)(9,"span",65),n(10),e(),t(11,"h3"),n(12),e()(),t(13,"p",66),n(14),e(),t(15,"div",67)(16,"strong"),n(17,"\u{1F4A1} Pistas:"),e(),t(18,"ul"),g(19,ee,2,1,"li",68),e()(),t(20,"div",69)(21,"div",70),n(22,"\u{1F4DD} C\xF3digo de inicio"),e(),t(23,"pre",41)(24,"code"),n(25),e()()(),t(26,"div",71)(27,"span",47),n(28,"\u{1F3AF} Output esperado"),e(),t(29,"pre"),n(30),e()()()()),i&2){let o=c(2);r(6),s("ngForOf",o.challenges),r(),s("ngClass",o.challenges[o.selectedChallenge].color),r(2),s("ngClass",o.challenges[o.selectedChallenge].difficultyColor),r(),C(" ",o.challenges[o.selectedChallenge].difficulty," "),r(2),m(o.challenges[o.selectedChallenge].title),r(2),m(o.challenges[o.selectedChallenge].description),r(5),s("ngForOf",o.challenges[o.selectedChallenge].hints),r(6),m(o.challenges[o.selectedChallenge].starterCode),r(5),m(o.challenges[o.selectedChallenge].expectedOutput)}}function ne(i,a){i&1&&(t(0,"div",74)(1,"div",75),n(2," \u2705 ESTACI\xD3N COMPLETADA \u2014 L\xCDNEA 1 \xB7 FOUNDATIONS STATION "),e(),t(3,"h2"),n(4,"\u{1F389} Resumen: Python Programming Basics"),e(),t(5,"div",76)(6,"div",77)(7,"span",78),n(8,"\u{1F4CA}"),e(),t(9,"div")(10,"strong"),n(11,"Variables y Tipos"),e(),t(12,"p"),n(13,"int, float, str, bool, None. Tipado din\xE1mico + type hints opcionales."),e()()(),t(14,"div",77)(15,"span",78),n(16,"\u{1F500}"),e(),t(17,"div")(18,"strong"),n(19,"Control de Flujo"),e(),t(20,"p"),n(21,"if/elif/else, for/range/enumerate, while, break/continue, list comprehensions."),e()()(),t(22,"div",77)(23,"span",78),n(24,"\u{1F4E6}"),e(),t(25,"div")(26,"strong"),n(27,"Funciones"),e(),t(28,"p"),n(29,"def, par\xE1metros default, *args/**kwargs, lambda, map/filter, decoradores."),e()()(),t(30,"div",77)(31,"span",78),n(32,"\u{1F5C2}\uFE0F"),e(),t(33,"div")(34,"strong"),n(35,"Estructuras de Datos"),e(),t(36,"p"),n(37,"list, dict, tuple, set \u2014 cu\xE1ndo usar cada una en contexto de IA."),e()()(),t(38,"div",77)(39,"span",78),n(40,"\u{1F3D7}\uFE0F"),e(),t(41,"div")(42,"strong"),n(43,"POO B\xE1sica"),e(),t(44,"p"),n(45,"class, __init__, herencia, encapsulamiento \u2014 base de PyTorch y Scikit-learn."),e()()(),t(46,"div",77)(47,"span",78),n(48,"\u2699\uFE0F"),e(),t(49,"div")(50,"strong"),n(51,"Entorno Virtual"),e(),t(52,"p"),n(53,"venv, pip, requirements.txt \u2014 aislamiento profesional de dependencias."),e()()()(),t(54,"div",79)(55,"div",80),n(56,"\u{1F689} Pr\xF3xima estaci\xF3n en L\xEDnea 1"),e(),t(57,"h3"),n(58,"NumPy & Pandas"),e(),t(59,"p"),n(60,"El duo esencial para manipulaci\xF3n de datos num\xE9ricos y tabulares en IA. Arrays multidimensionales, broadcasting, DataFrames y operaciones vectorizadas."),e(),t(61,"a",81),n(62," Ver en el MetroMap "),t(63,"span"),n(64,"\u2192"),e()()(),t(65,"div",82)(66,"strong"),n(67,"\u{1F4DA} Recursos recomendados:"),e(),t(68,"span",35)(69,"a",83),n(70,"Docs oficiales Python"),e(),n(71," \xB7 "),t(72,"a",84),n(73,"Learn Python interactivo"),e(),n(74," \xB7 "),t(75,"a",85),n(76,"Kaggle Python Course (gratis)"),e()()()())}function oe(i,a){if(i&1&&(t(0,"div",14),g(1,B,59,0,"div",15)(2,N,15,1,"div",16)(3,R,24,3,"div",16)(4,U,16,3,"div",16)(5,K,21,3,"div",16)(6,W,33,3,"div",16)(7,Q,48,2,"div",16)(8,X,71,1,"div",16)(9,te,31,9,"div",17)(10,ne,77,0,"div",18),e()),i&2){let o=a.$implicit,l=a.index,d=c();f("active",l===d.currentSlide),r(),s("ngIf",o.type==="title"),r(),s("ngIf",o.type==="why-python"),r(),s("ngIf",o.type==="variables-types"),r(),s("ngIf",o.type==="control-flow"),r(),s("ngIf",o.type==="functions"),r(),s("ngIf",o.type==="data-structures"),r(),s("ngIf",o.type==="oop-basics"),r(),s("ngIf",o.type==="modules-env"),r(),s("ngIf",o.type==="challenge"),r(),s("ngIf",o.type==="summary")}}var z=class i{currentSlide=0;slides=[{type:"title"},{type:"why-python"},{type:"variables-types"},{type:"control-flow"},{type:"functions"},{type:"data-structures"},{type:"oop-basics"},{type:"modules-env"},{type:"challenge"},{type:"summary"}];whyPythonReasons=[{icon:"\u{1F9E0}",title:"Ecosistema de IA sin rival",description:"NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow \u2014 todas las librer\xEDas l\xEDderes de IA est\xE1n en Python. No hay alternativa.",color:"bg-purple-50"},{icon:"\u{1F4D6}",title:"Sintaxis legible como pseudoc\xF3digo",description:"Python lee casi como ingl\xE9s. Puedes concentrarte en los algoritmos sin batallar con la sintaxis del lenguaje.",color:"bg-blue-50"},{icon:"\u26A1",title:"Prototipado ultrarr\xE1pido",description:"Con Jupyter Notebooks puedes explorar datos, visualizar resultados y ajustar modelos en tiempo real, celda por celda.",color:"bg-yellow-50"},{icon:"\u{1F30D}",title:"Comunidad masiva de IA",description:"Millones de ejemplos en Kaggle, GitHub, Hugging Face. Si tienes un problema, alguien ya lo resolvi\xF3 en Python.",color:"bg-green-50"},{icon:"\u{1F517}",title:"Interoperabilidad total",description:"Se integra con C/C++ (velocidad cr\xEDtica), SQL, APIs REST, cloud providers y pr\xE1cticamente cualquier herramienta.",color:"bg-orange-50"},{icon:"\u{1F3C6}",title:"Est\xE1ndar de la industria",description:"OpenAI, Google DeepMind, Meta AI, Hugging Face \u2014 todos usan Python como lenguaje principal para investigaci\xF3n y producci\xF3n.",color:"bg-red-50"}];dataTypes=[{label:"\u{1F522} Tipos num\xE9ricos",code:`# Enteros (int)
edad = 25
temperatura = -10
pixels = 1920 * 1080  # \u2192 2073600

# Flotantes (float)
precision = 0.95
pi = 3.14159

# Complejos
z = 3 + 4j

# Verificar tipo
print(type(edad))       # <class 'int'>
print(type(precision))  # <class 'float'>`,output:`<class 'int'>
<class 'float'>`},{label:"\u{1F4DD} Strings y operaciones",code:`nombre = "Python"
apellido = 'para IA'

# Concatenaci\xF3n
completo = nombre + " " + apellido

# f-strings (forma moderna \u2705)
version = 3.11
msg = f"Usando {nombre} v{version}"
print(msg)  # Usando Python v3.11

# M\xE9todos \xFAtiles
print("  hola mundo  ".strip())   # "hola mundo"
print("hola".upper())             # "HOLA"
print("Python IA".split())        # ['Python', 'IA']`,output:`Usando Python v3.11
hola mundo
HOLA
['Python', 'IA']`},{label:"\u2705 Booleanos y None",code:`# Booleanos
activo = True
terminado = False

# Operadores l\xF3gicos
print(True and False)   # False
print(True or False)    # True
print(not True)         # False

# None (ausencia de valor)
resultado = None
print(resultado is None)  # True

# Comparaciones \u2192 booleano
x = 10
print(x > 5)   # True
print(x == 10) # True
print(x != 3)  # True`}];controlFlowExamples=[{label:"\u{1F500} Condicionales",code:`score = 85

# If / elif / else
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Score {score} \u2192 Grade {grade}")
# Score 85 \u2192 Grade B

# Ternario (una l\xEDnea)
status = "aprobado" if score >= 60 else "reprobado"`,output:"Score 85 \u2192 Grade B"},{label:"\u{1F501} Bucles for",code:`# Iterar lista
frutas = ["manzana", "pera", "uva"]
for fruta in frutas:
    print(f"  \u2192 {fruta}")

# range() \u2014 muy usado en IA
for i in range(5):          # 0,1,2,3,4
    print(i, end=" ")

# enumerate() \u2014 \xEDndice + valor
modelos = ["CNN", "RNN", "Transformer"]
for idx, modelo in enumerate(modelos, 1):
    print(f"{idx}. {modelo}")

# List comprehension \u26A1
cuadrados = [x**2 for x in range(6)]
# [0, 1, 4, 9, 16, 25]`,output:`\u2192 manzana
\u2192 pera
\u2192 uva
0 1 2 3 4
1. CNN
2. RNN
3. Transformer`},{label:"\u23F3 Bucle while",code:`# While con contador
epoch = 0
loss = 1.0

while loss > 0.1:
    loss *= 0.7
    epoch += 1
    print(f"Epoch {epoch}: loss={loss:.4f}")

print(f"Entrenado en {epoch} \xE9pocas")

# break y continue
for num in range(10):
    if num == 3:
        continue  # salta el 3
    if num == 7:
        break     # para en 7
    print(num, end=" ")
# 0 1 2 4 5 6`,output:`Epoch 1: loss=0.7000
Epoch 2: loss=0.4900
...
Epoch 8: loss=0.0576`}];functionExamples=[{label:"\u{1F4E6} Funciones b\xE1sicas",code:`# Definici\xF3n con def
def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("IA"))  # Hola, IA!

# Par\xE1metros con valor por defecto
def entrenar(epochs=10, lr=0.001):
    return f"Training {epochs} epochs con lr={lr}"

print(entrenar())           # defaults
print(entrenar(50, 0.01))   # override

# *args y **kwargs (muy com\xFAn en librer\xEDas IA)
def info(*args, **kwargs):
    print("args:", args)
    print("kwargs:", kwargs)

info("PyTorch", "v2", framework="DL", gpu=True)`,output:`Hola, IA!
Training 10 epochs con lr=0.001
Training 50 epochs con lr=0.01`},{label:"\u26A1 Lambda y funciones avanzadas",code:`# Lambda \u2014 funciones an\xF3nimas de una l\xEDnea
cuadrado = lambda x: x ** 2
print(cuadrado(5))  # 25

# map() \u2014 aplicar funci\xF3n a cada elemento
numeros = [1, 2, 3, 4, 5]
cuadrados = list(map(lambda x: x**2, numeros))
# [1, 4, 9, 16, 25]

# filter() \u2014 filtrar elementos
pares = list(filter(lambda x: x % 2 == 0, numeros))
# [2, 4]

# Funciones como par\xE1metros (higher-order)
def aplicar(func, valor):
    return func(valor)

resultado = aplicar(lambda x: x * 3, 7)  # 21

# Decoradores (patr\xF3n com\xFAn en FastAPI/Flask)
def log_llamada(func):
    def wrapper(*args, **kwargs):
        print(f"Llamando: {func.__name__}")
        return func(*args, **kwargs)
    return wrapper`}];dataStructureExamples=[{label:"\u{1F4CB} Listas \u2014 la estructura m\xE1s usada en IA",code:`# Crear y acceder
datos = [10, 20, 30, 40, 50]
print(datos[0])    # 10  (primero)
print(datos[-1])   # 50  (\xFAltimo)
print(datos[1:3])  # [20, 30] (slicing)

# Operaciones clave
datos.append(60)        # a\xF1adir al final
datos.insert(0, 0)      # insertar en posici\xF3n
datos.remove(30)        # remover por valor
popped = datos.pop()    # sacar \xFAltimo

# Ordenar
scores = [0.85, 0.92, 0.78, 0.95]
scores.sort(reverse=True)
print(scores)  # [0.95, 0.92, 0.85, 0.78]

# Listas de listas \u2014 matrices b\xE1sicas
matriz = [[1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]]
print(matriz[1][2])  # 6`},{label:"\u{1F4D6} Diccionarios \u2014 clave/valor fundamental",code:`# Crear diccionario
modelo = {
    "nombre": "ResNet50",
    "precision": 0.94,
    "params": 25_000_000,
    "framework": "PyTorch"
}

# Acceder y modificar
print(modelo["nombre"])           # ResNet50
print(modelo.get("lr", 0.001))    # default si no existe

modelo["version"] = "2.0"         # a\xF1adir clave
del modelo["params"]              # eliminar

# Iterar
for clave, valor in modelo.items():
    print(f"  {clave}: {valor}")

# Dict comprehension \u26A1
metricas = {"acc": 0.94, "loss": 0.12, "f1": 0.91}
porcentajes = {k: f"{v*100:.1f}%" for k, v in metricas.items()}`,output:`ResNet50
0.001
nombre: ResNet50
precision: 0.94
...`},{label:"\u{1F3AF} Tuplas y Sets",code:`# Tuplas \u2014 inmutables, \xFAtiles para coords/dimensiones
dimensiones = (224, 224, 3)   # altura, ancho, canales
x, y, canales = dimensiones    # unpacking
print(f"Imagen: {x}x{y} px, {canales} canales")

# Muy usadas para retornar m\xFAltiples valores
def estadisticas(datos):
    return min(datos), max(datos), sum(datos)/len(datos)

minimo, maximo, media = estadisticas([1,2,3,4,5])

# Sets \u2014 colecciones sin duplicados
etiquetas_pred  = {"gato", "perro", "gato", "ave"}
etiquetas_real  = {"gato", "perro", "pez"}

print(etiquetas_pred)                             # {'gato', 'perro', 'ave'}
print(etiquetas_pred & etiquetas_real)            # intersecci\xF3n
print(etiquetas_pred | etiquetas_real)            # uni\xF3n
print(etiquetas_pred - etiquetas_real)            # diferencia`}];oopExample={label:"\u{1F3D7}\uFE0F Clases y objetos en IA",code:`class ModeloIA:
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
            raise ValueError("\xA1Debes entrenar primero!")
        return f"Predicci\xF3n de {self.nombre}: {datos}"

    def __repr__(self):
        estado = "\u2705 Entrenado" if self.entrenado else "\u23F3 Sin entrenar"
        return f"ModeloIA({self.nombre} v{self.version}) \u2014 {estado}"


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
print(red.resumen())`,output:`Entrenando MiRed v1.0...
  Epoch 1/3 - loss: 1.0000
  Epoch 2/3 - loss: 0.5000
  Epoch 3/3 - loss: 0.3333`};modulesExample={label:"\u{1F4E6} M\xF3dulos, paquetes y entorno virtual",code:`# === Crear entorno virtual ===
# Terminal:
python -m venv venv_ia
source venv_ia/bin/activate      # Linux/Mac
venv_ia\\Scripts\\activate         # Windows

# === Instalar paquetes ===
pip install numpy pandas scikit-learn matplotlib

# === requirements.txt ===
pip freeze > requirements.txt
pip install -r requirements.txt   # en otro equipo

# === Importar m\xF3dulos ===
import os                          # m\xF3dulo est\xE1ndar
import math
from datetime import datetime

import numpy as np                 # alias convenio
import pandas as pd

# importar funci\xF3n espec\xEDfica
from sklearn.model_selection import train_test_split

# === Crear tu propio m\xF3dulo ===
# archivo: utils.py
def normalizar(datos):
    minimo = min(datos)
    maximo = max(datos)
    return [(x - minimo)/(maximo - minimo) for x in datos]

# otro archivo: main.py
from utils import normalizar
datos_norm = normalizar([10, 20, 30, 40, 50])
# [0.0, 0.25, 0.5, 0.75, 1.0]`};challenges=[{difficulty:"Principiante",difficultyColor:"text-green-600 bg-green-100",title:"Analizador de Dataset",description:"Crea una funci\xF3n que reciba una lista de n\xFAmeros (como si fueran datos de entrenamiento) y retorne un diccionario con sus estad\xEDsticas b\xE1sicas.",hints:["Usa len(), sum(), min(), max() de Python built-in","Para la media: suma / cantidad","Para la desviaci\xF3n: usa math.sqrt()",'Retorna un diccionario con las claves: "count", "min", "max", "mean", "std"'],starterCode:`import math

def analizar_dataset(datos: list) -> dict:
    """
    Recibe lista de n\xFAmeros y retorna estad\xEDsticas.

    >>> analizar_dataset([1, 2, 3, 4, 5])
    {'count': 5, 'min': 1, 'max': 5, 'mean': 3.0, 'std': 1.41}
    """
    # Tu c\xF3digo aqu\xED
    pass

# Test
print(analizar_dataset([85, 92, 78, 95, 88, 76, 95, 89]))`,expectedOutput:"{'count': 8, 'min': 76, 'max': 95, 'mean': 87.25, 'std': 6.47}",color:"border-green-400"},{difficulty:"Intermedio",difficultyColor:"text-yellow-700 bg-yellow-100",title:"Clase DataPreprocessor",description:"Implementa una clase que preprocese datos num\xE9ricos: normalizaci\xF3n Min-Max, detecci\xF3n de valores faltantes (None) y codificaci\xF3n de etiquetas.",hints:["Atributos: min_val, max_val (se calculan en fit())","M\xE9todo fit(datos): calcula los par\xE1metros del escalador","M\xE9todo transform(datos): aplica la normalizaci\xF3n","M\xE9todo fit_transform(datos): hace ambos","Maneja None como valor faltante (reemplaza con la media)"],starterCode:`class DataPreprocessor:
    def __init__(self):
        self.min_val = None
        self.max_val = None
        self.mean_val = None

    def fit(self, datos):
        # Filtrar None y calcular estad\xEDsticas
        pass

    def transform(self, datos):
        # Aplicar Min-Max normalization
        # None \u2192 self.mean_val
        pass

    def fit_transform(self, datos):
        return self.fit(datos).transform(datos)

# Test
prep = DataPreprocessor()
resultado = prep.fit_transform([10, None, 30, 40, None, 60])
print(resultado)`,expectedOutput:"[0.0, 0.375, 0.4, 0.6, 0.375, 1.0]  # None \u2192 media=28",color:"border-yellow-400"},{difficulty:"Avanzado",difficultyColor:"text-red-700 bg-red-100",title:"Mini Pipeline de ML",description:'Crea un mini pipeline que: carga datos simulados, los preprocesa, divide en train/test, y eval\xFAa un "modelo" simple (media de entrenamiento como predictor baseline).',hints:["Genera datos con comprensi\xF3n de listas","Divide con slicing: 80% train, 20% test","Predictor baseline: predice siempre la media del train set","M\xE9trica: MAE = promedio de |predicci\xF3n - real|","Usa clases: Pipeline con m\xE9todos run() y report()"],starterCode:`import random
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
        # Split train/test sin librer\xEDas
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
pipeline.run().report()`,expectedOutput:`Train size: 80
Test size:  20
Baseline (mean): 49.73
MAE: 25.18`,color:"border-red-400"}];selectedChallenge=0;copiedTab=null;activeDataTypeTab=0;activeControlFlowTab=0;activeFunctionTab=0;activeDataStructureTab=0;nextSlide(){this.currentSlide<this.slides.length-1&&this.currentSlide++}prevSlide(){this.currentSlide>0&&this.currentSlide--}goToSlide(a){this.currentSlide=a}onKeydown(a){a.key==="ArrowRight"||a.key==="ArrowDown"?this.nextSlide():(a.key==="ArrowLeft"||a.key==="ArrowUp")&&this.prevSlide()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=O({type:i,selectors:[["app-l1-python-basics"]],hostBindings:function(o,l){o&1&&u("keydown",function(p){return l.onKeydown(p)})},decls:19,vars:6,consts:[["tabindex","0",1,"presentation-container",3,"keydown"],[1,"back-to-menu"],["routerLink","/metro-map-ai",1,"back-btn"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 19l-7-7m0 0l7-7m-7 7h18"],[1,"controls"],[1,"control-btn",3,"click","disabled"],[1,"flex","items-center","gap-3"],[1,"slide-counter"],[1,"flex","gap-1.5"],["class","w-2.5 h-2.5 rounded-full transition-all duration-200",3,"bg-white","scale-125","bg-white_40","ngStyle","click",4,"ngFor","ngForOf"],[1,"slide-wrapper"],["class","slide",3,"active",4,"ngFor","ngForOf"],[1,"w-2.5","h-2.5","rounded-full","transition-all","duration-200",3,"click","ngStyle"],[1,"slide"],["class","slide-title",4,"ngIf"],["class","slide-content",4,"ngIf"],["class","slide-content challenge-slide",4,"ngIf"],["class","slide-content summary-slide",4,"ngIf"],[1,"slide-title"],[1,"workshop-badge"],[2,"color","#f59e0b"],[1,"subtitle"],[1,"info-grid"],[1,"info-item"],[1,"icon"],[1,"label"],[1,"value"],[1,"agenda-preview"],[1,"agenda-grid"],[1,"slide-content"],[1,"slide-intro"],[1,"theory-grid"],["class","theory-card",3,"ngClass",4,"ngFor","ngForOf"],[1,"highlight-box"],[1,"ml-2"],[1,"theory-card",3,"ngClass"],[1,"theory-icon"],[1,"code-tabs"],["class","tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"code-block-wrapper"],[1,"code-block","python"],["class","output-block",4,"ngIf"],[1,"tip-box"],[1,"inline-code"],[1,"tab-btn",3,"click"],[1,"output-block"],[1,"output-label"],[1,"warning-box"],[1,"comparison-row"],[1,"mini-card"],[1,"oop-concepts-grid"],[1,"oop-concept"],[1,"oop-icon"],[1,"code-block","bash"],[1,"env-workflow"],[1,"workflow-steps"],[1,"workflow-step"],[1,"step-num"],[1,"workflow-arrow"],[1,"slide-content","challenge-slide"],[1,"challenge-tabs"],["class","challenge-tab-btn",3,"active","ngClass","click",4,"ngFor","ngForOf"],[1,"challenge-card",3,"ngClass"],[1,"challenge-header"],[1,"text-sm","font-bold","px-3","py-1","rounded-full",3,"ngClass"],[1,"challenge-description"],[1,"hints-box"],[4,"ngFor","ngForOf"],[1,"code-block-wrapper","mt-4"],[1,"code-block-header"],[1,"output-block","mt-3"],[1,"challenge-tab-btn",3,"click","ngClass"],[1,"text-xs","font-semibold","px-2","py-0.5","rounded",3,"ngClass"],[1,"slide-content","summary-slide"],[1,"workshop-badge",2,"background","rgba(245,158,11,0.15)","color","#f59e0b","border","1px solid rgba(245,158,11,0.3)"],[1,"summary-grid"],[1,"summary-item"],[1,"summary-icon"],[1,"next-station-card"],[1,"next-station-label"],["routerLink","/metro-map-ai",1,"next-station-btn"],[1,"tip-box","mt-6"],["rel","noopener noreferrer","href","https://docs.python.org/es/3/","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://www.learnpython.org/es/","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://kaggle.com/learn/python","target","_blank",1,"resource-link"]],template:function(o,l){o&1&&(t(0,"div",0),u("keydown",function(p){return l.onKeydown(p)}),t(1,"div",1)(2,"a",2),h(),t(3,"svg",3),P(4,"path",4),e(),v(),t(5,"span"),n(6,"Volver al MetroMap AI"),e()()(),t(7,"div",5)(8,"button",6),u("click",function(){return l.prevSlide()}),n(9,"\u2190 Anterior"),e(),t(10,"div",7)(11,"span",8),n(12),e(),t(13,"div",9),g(14,A,1,11,"button",10),e()(),t(15,"button",6),u("click",function(){return l.nextSlide()}),n(16,"Siguiente \u2192"),e()(),t(17,"div",11),g(18,oe,11,12,"div",12),e()()),o&2&&(r(8),s("disabled",l.currentSlide===0),r(4),M("",l.currentSlide+1," / ",l.slides.length),r(2),s("ngForOf",l.slides),r(),s("disabled",l.currentSlide===l.slides.length-1),r(3),s("ngForOf",l.slides))},dependencies:[D,E,S,w,k,T,F],styles:['.presentation-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;padding:2rem;position:relative;outline:none}.back-to-menu[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-bottom:1rem}.back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#fffffff2;color:#667eea;padding:.75rem 1.25rem;border-radius:8px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 6px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.back-btn[_ngcontent-%COMP%]:hover{background:#fff;transform:translate(-4px);box-shadow:0 6px 12px #00000026;color:#764ba2}.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;transition:transform .3s ease}.back-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:translate(-2px)}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin-bottom:2rem;gap:1rem}.control-btn[_ngcontent-%COMP%]{background:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px #0000001a}.control-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.control-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.slide-counter[_ngcontent-%COMP%]{background:#fff;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;color:#667eea;box-shadow:0 4px 6px #0000001a}.slide-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;min-height:600px;position:relative}.slide[_ngcontent-%COMP%]{display:none;width:100%;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 20px 60px #0000004d;animation:_ngcontent-%COMP%_slideIn .5s ease}.slide.active[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}.slide-title[_ngcontent-%COMP%]{text-align:center}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.5rem 1.5rem;border-radius:50px;font-weight:700;font-size:.9rem;letter-spacing:1px;margin-bottom:2rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#2d3748;margin-bottom:1rem}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;color:#718096;margin-bottom:3rem}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:3rem}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem;background:#f7fafc;border-radius:12px;border-left:4px solid #667eea}.info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;font-weight:600}.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.125rem;color:#2d3748;font-weight:700}.slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#2d3748;margin-bottom:1.5rem;border-bottom:3px solid #667eea;padding-bottom:.5rem}.slide-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:#718096;margin-bottom:2rem;text-align:center}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:2rem}.theory-card[_ngcontent-%COMP%]{padding:2rem;border-radius:12px;border-left:6px solid;box-shadow:0 4px 6px #0000001a}.theory-card.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#22c55e}.theory-card.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#3b82f6}.theory-card.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2d3748;margin-bottom:.75rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;position:relative;padding:.5rem 0 .5rem 1.5rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.warning-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1rem 1.5rem;border-radius:8px;margin-top:2rem}.examples-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.example-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:all .3s ease}.example-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.example-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;cursor:pointer;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.example-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.accordion-icon[_ngcontent-%COMP%]{color:#667eea;font-weight:700;font-size:1.25rem}.example-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.25rem}.example-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}@keyframes _ngcontent-%COMP%_expandDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}.hu-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.hu-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.hu-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0c4a6e}.bad-prompt[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.bad-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#dc2626;margin-bottom:1rem}.good-prompt[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.good-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#16a34a;margin-bottom:1rem}.prompt-text[_ngcontent-%COMP%]{background:#fff;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.9rem;color:#000;white-space:pre-wrap;margin-bottom:1rem}.problems-list[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]{margin-top:1rem}.problems-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#2d3748}.problems-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2717";position:absolute;left:0;color:#ef4444;font-weight:700}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.output-preview[_ngcontent-%COMP%]{background:#faf5ff;border-left:4px solid #a855f7;padding:1.5rem;border-radius:8px}.output-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7e22ce;margin-bottom:1rem}.output-list[_ngcontent-%COMP%]{list-style:none;padding:0}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;position:relative}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#a855f7}.process-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.process-step[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.process-step[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.step-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.step-number[_ngcontent-%COMP%]{background:#fff;color:#667eea;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;flex-shrink:0}.step-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex:1}.step-title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem}.step-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.step-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.step-example[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;margin-bottom:1rem;border-left:3px solid #0ea5e9}.step-tips[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b}.step-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:.5rem}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#78350f}.template-container[_ngcontent-%COMP%]{background:#1e293b;border-radius:12px;overflow:hidden}.template-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.template-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.template-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0}.copy-btn[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:none;padding:.5rem 1rem;border-radius:6px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003}.template-code[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:2rem;margin:0;font-family:Courier New,monospace;font-size:.9rem;line-height:1.6;white-space:pre-wrap;overflow-x:auto}.template-instructions[_ngcontent-%COMP%]{background:#fff;padding:2rem}.template-instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:1rem}.template-instructions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:#4a5568;line-height:1.8}.template-instructions[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f7fafc;padding:.2rem .5rem;border-radius:4px;color:#667eea;font-family:Courier New,monospace}.challenges-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{border:3px solid;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.challenge-card.green[_ngcontent-%COMP%]{border-color:#22c55e}.challenge-card.blue[_ngcontent-%COMP%]{border-color:#3b82f6}.challenge-card.orange[_ngcontent-%COMP%]{border-color:#f97316}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #00000026}.challenge-header[_ngcontent-%COMP%]{padding:1.5rem;background:#f7fafc}.difficulty-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;border-radius:50px;font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:.75rem}.difficulty-badge.F\\e1 cil[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.difficulty-badge.Intermedio[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.difficulty-badge.Avanzado[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.125rem;display:flex;align-items:center;gap:.5rem}.challenge-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.hu-section[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hu-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem}.hu-text[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;border-left:3px solid #0ea5e9;font-style:italic;color:#0369a1}.context-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#4a5568}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#667eea;font-weight:700}.requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.action-section[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:2px dashed #e2e8f0}.start-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:1rem 2rem;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 16px #667eea66}.timer-note[_ngcontent-%COMP%]{color:#718096;font-size:.875rem}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.tip-card[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.tip-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem;font-size:1.125rem}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.tip-example[_ngcontent-%COMP%]{background:#fff;padding:.75rem;border-radius:6px;border:1px solid #e2e8f0}.tip-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#667eea;font-family:Courier New,monospace;font-size:.875rem}.deliverables-section[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]{margin-bottom:3rem}.deliverables-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1.75rem;margin-bottom:1.5rem;border-left:5px solid #667eea;padding-left:1rem}.deliverables-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.deliverable-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:1.5rem;border-radius:12px;border-left:5px solid #0ea5e9}.deliverable-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.deliverable-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#075985;margin-bottom:1rem}.checkpoints[_ngcontent-%COMP%]{list-style:none;padding:0}.checkpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#0c4a6e;display:flex;align-items:flex-start;gap:.5rem}.checkbox[_ngcontent-%COMP%]{color:#0ea5e9;font-size:1.25rem}.next-steps-list[_ngcontent-%COMP%]{background:#fef3c7;padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;color:#78350f;line-height:1.8}.closing-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-bottom:2rem}.closing-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;margin-bottom:1rem}.closing-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.closing-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#92400e;margin-bottom:1rem}.quote[_ngcontent-%COMP%]{font-style:italic;font-weight:600;text-align:center;padding:1rem;background:#fff;border-radius:8px;margin-top:1rem}.preview-next[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);padding:1.5rem;border-radius:12px;border-left:5px solid #22c55e;color:#166534;font-weight:600;text-align:center}.progress-dots[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover, .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background:#fffc;transform:scale(1.2)}.progress-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background:#fff;width:32px;border-radius:6px}@media (max-width: 768px){.presentation-container[_ngcontent-%COMP%]{padding:1rem}.slide[_ngcontent-%COMP%]{padding:1.5rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem}.info-grid[_ngcontent-%COMP%], .theory-grid[_ngcontent-%COMP%], .challenges-grid[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%], .deliverables-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.control-btn[_ngcontent-%COMP%], .slide-counter[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.875rem}}.formats-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.format-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.format-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.format-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.format-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.format-icon[_ngcontent-%COMP%]{font-size:2rem}.format-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0;color:#2d3748;font-size:1.25rem}.format-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.format-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.use-case-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:3px solid #0ea5e9;padding:1rem;border-radius:8px;margin-bottom:1rem;color:#0369a1}.format-example[_ngcontent-%COMP%]{background:#1e293b;padding:1.5rem;border-radius:8px}.format-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e2e8f0;margin-bottom:.75rem}.format-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e2e8f0;margin:0;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap}.requirement-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.requirement-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.requirement-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78350f;line-height:1.6}.requirement-text[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b;font-style:italic;color:#92400e}.requirement-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.sample-output[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.85rem;line-height:1.5;white-space:pre-wrap;overflow-x:auto}.testcase-box[_ngcontent-%COMP%]{background:#1e293b;border-left:4px solid #3b82f6;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.testcase-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#93c5fd;font-size:1.25rem;font-weight:700;margin-bottom:1rem}.testcase-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d1d5db;font-weight:600}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;font-weight:400;margin-left:.5rem}.testcase-text[_ngcontent-%COMP%]{background:#fff;color:#1e293b;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap;margin:0}.testcases-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.testcases-list[_ngcontent-%COMP%]{background:#f0f9ff;padding:1.5rem 1.5rem 1.5rem 2.5rem;border-radius:8px;border-left:3px solid #0ea5e9;color:#0c4a6e;line-height:1.8}.testcases-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.pros-cons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1rem}.pros-box[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px}.pros-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#166534;margin-bottom:.75rem}.pros-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.cons-box[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px}.cons-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#991b1b;margin-bottom:.75rem}.cons-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";position:absolute;left:0;color:#ef4444;font-weight:700}@media (max-width: 768px){.pros-cons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.final-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-top:2rem;text-align:center}.final-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;font-size:2rem;margin-bottom:1rem}.final-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f2937;font-size:1.1rem;margin-bottom:.75rem;line-height:1.6}.final-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#78350f;font-weight:700}',".slide-intro[_ngcontent-%COMP%]{color:#4b5563;font-size:1.05rem;margin-bottom:1.5rem;line-height:1.7;max-width:860px}.agenda-preview[_ngcontent-%COMP%]{margin-top:2rem;background:#667eea12;border:1px solid rgba(102,126,234,.2);border-radius:12px;padding:1.25rem 1.5rem;max-width:800px;width:100%}.agenda-preview[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1rem;font-weight:700;margin-bottom:.75rem}.agenda-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));gap:.5rem 1rem}.agenda-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#4b5563;font-size:.875rem;display:flex;align-items:center;gap:.35rem}.code-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:.5rem}.tab-btn[_ngcontent-%COMP%]{padding:.45rem 1rem;border-radius:8px 8px 0 0;font-size:.82rem;font-weight:600;background:#f1f5f9;color:#6b7280;border:1px solid #e2e8f0;border-bottom:none;transition:all .2s;cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0;color:#374151}.tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.code-block-wrapper[_ngcontent-%COMP%]{width:100%;max-width:100%;border-radius:0 10px 10px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 4px 16px #00000014}.code-block-header[_ngcontent-%COMP%]{background:#2d2d3d;color:#a0aec0;font-size:.8rem;font-weight:600;padding:.5rem 1rem;border-bottom:1px solid rgba(255,255,255,.1)}.code-block[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;padding:1.25rem 1.5rem;font-size:.82rem;line-height:1.7;overflow-x:auto;margin:0;white-space:pre;font-family:Fira Code,Cascadia Code,Consolas,monospace;max-height:340px;overflow-y:auto}.code-block.bash[_ngcontent-%COMP%]{color:#a8ff78}.output-block[_ngcontent-%COMP%]{background:#0d1117;border-top:1px solid rgba(255,255,255,.08);padding:.75rem 1.5rem}.output-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#4ade80;font-family:Fira Code,monospace;font-size:.8rem;margin:.25rem 0 0;white-space:pre-wrap}.output-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;color:#9ca3af;text-transform:uppercase;letter-spacing:.08em}.inline-code[_ngcontent-%COMP%]{background:#fef9c3;color:#b45309;padding:.15rem .4rem;border-radius:4px;font-family:monospace;font-size:.85em;border:1px solid #fde68a}.comparison-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:.75rem;margin-top:1rem}.mini-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #667eea;border-radius:10px;padding:.75rem 1rem}.mini-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.3rem}.mini-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;line-height:1.5;margin:0}.oop-concepts-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:.75rem;margin-top:1rem}.oop-concept[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:1rem;display:flex;flex-direction:column;gap:.3rem}.oop-icon[_ngcontent-%COMP%]{font-size:1.5rem}.oop-concept[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem}.oop-concept[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;margin:0}.oop-concept[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{font-family:monospace;color:#b45309;font-size:.78rem;background:#fef3c7;padding:.1rem .3rem;border-radius:3px}.env-workflow[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:1.25rem 1.5rem;margin-top:1.25rem}.env-workflow[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:700;margin-bottom:1rem}.workflow-steps[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.5rem}.workflow-step[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem;background:#fff;border:1px solid #e2e8f0;border-radius:8px;padding:.6rem .8rem;flex:1;min-width:140px;box-shadow:0 1px 3px #0000000f}.step-num[_ngcontent-%COMP%]{background:#f59e0b;color:#fff;font-weight:900;font-size:.75rem;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}.workflow-step[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.82rem;display:block}.workflow-step[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#16a34a;font-family:monospace;font-size:.72rem;display:block;margin-top:.15rem;background:#f0fdf4;padding:.1rem .25rem;border-radius:3px}.workflow-arrow[_ngcontent-%COMP%]{color:#9ca3af;font-size:1.2rem;font-weight:700;flex-shrink:0}.challenge-slide[_ngcontent-%COMP%]{padding-bottom:1rem}.challenge-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;margin-bottom:1rem;flex-wrap:wrap}.challenge-tab-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;background:#f1f5f9;border:1px solid #e2e8f0;border-radius:8px;padding:.5rem 1rem;color:#374151;font-size:.85rem;font-weight:600;cursor:pointer;transition:all .2s}.challenge-tab-btn[_ngcontent-%COMP%]:hover, .challenge-tab-btn.active[_ngcontent-%COMP%]{background:#e2e8f0;border-color:#cbd5e1;color:#1e293b}.challenge-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid;border-radius:12px;padding:1.25rem 1.5rem}.challenge-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.1rem;font-weight:700;margin:0}.challenge-description[_ngcontent-%COMP%]{color:#374151;font-size:.9rem;line-height:1.65;margin-bottom:.75rem}.hints-box[_ngcontent-%COMP%]{background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:.75rem 1rem}.hints-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#92400e;font-size:.85rem}.hints-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.35rem 0 0 1rem;padding:0}.hints-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#374151;font-size:.82rem;line-height:1.8}.summary-slide[_ngcontent-%COMP%]{gap:1rem}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.75rem;margin:1rem 0;width:100%}.summary-item[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.75rem;background:#f8fafc;border:1px solid #e2e8f0;border-left:3px solid #667eea;border-radius:10px;padding:.9rem 1rem}.summary-icon[_ngcontent-%COMP%]{font-size:1.5rem;flex-shrink:0}.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.2rem}.summary-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#64748b;font-size:.8rem;line-height:1.5;margin:0}.next-station-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #fde68a;border-radius:14px;padding:1.25rem 1.5rem;width:100%;margin-top:.5rem}.next-station-label[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;color:#b45309;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.3rem}.next-station-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.25rem;font-weight:800;margin:0 0 .4rem}.next-station-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.88rem;line-height:1.6;margin-bottom:.75rem}.next-station-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;background:#f59e0b;color:#fff;font-size:.85rem;font-weight:700;padding:.5rem 1.1rem;border-radius:8px;text-decoration:none;transition:all .2s}.next-station-btn[_ngcontent-%COMP%]:hover{background:#d97706;transform:translate(2px)}.resource-link[_ngcontent-%COMP%]{color:#2563eb;text-decoration:underline}.resource-link[_ngcontent-%COMP%]:hover{color:#1d4ed8}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}"]})};export{z as L1PythonBasicsComponent};
