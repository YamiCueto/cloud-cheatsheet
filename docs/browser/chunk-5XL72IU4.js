import{d as D,f as k}from"./chunk-V6XJS2PW.js";import"./chunk-DGPQBSVR.js";import{Ab as t,Ib as _,Jc as v,Kb as u,Kc as y,Lb as c,Lc as h,Mc as E,Oa as r,Pc as S,Ub as x,Wb as e,Xb as p,Yb as C,Z as f,Zb as O,_ as b,db as P,hb as g,hc as M,yb as l,zb as n}from"./chunk-GRUBSZXT.js";import"./chunk-EQDQRRRY.js";var F=i=>({background:i});function z(i,a){if(i&1){let o=_();n(0,"button",9),u("click",function(){let s=f(o).index,m=c();return b(m.goToSlide(s))}),t()}if(i&2){let o=a.index,d=c();l("ngStyle",M(1,F,o===d.currentSlide?"white":"rgba(255,255,255,0.35)"))}}function N(i,a){i&1&&(n(0,"div",15)(1,"div",16),e(2,"\u{1F689} ESTACI\xD3N 2 DE 9 \xB7 L\xCDNEA 1 \u2014 FOUNDATIONS"),t(),n(3,"div",17),e(4,"\u{1F522}"),t(),n(5,"h1"),e(6,"NumPy & Pandas"),t(),n(7,"p",18),e(8,"El d\xFAo esencial para manipulaci\xF3n de datos en IA"),t(),n(9,"div",19)(10,"span",20),e(11,"ndarray"),t(),n(12,"span",21),e(13,"Broadcasting"),t(),n(14,"span",22),e(15,"DataFrame"),t(),n(16,"span",23),e(17,"GroupBy"),t(),n(18,"span",24),e(19,"Feature Engineering"),t()(),n(20,"div",25)(21,"div",26)(22,"span",27),e(23,"\u23F1\uFE0F"),t(),n(24,"span"),e(25,"~90 min"),t()(),n(26,"div",26)(27,"span",27),e(28,"\u{1F3AF}"),t(),n(29,"span"),e(30,"10 slides \xB7 3 retos"),t()(),n(31,"div",26)(32,"span",27),e(33,"\u{1F517}"),t(),n(34,"span"),e(35,"Prerrequisito: Python Basics"),t()()(),n(36,"div",28),e(37," \u{1F4A1} Esta estaci\xF3n asume que dominas Python b\xE1sico (listas, funciones, loops). Si no, revisa la "),n(38,"a",29),e(39,"Estaci\xF3n 1 \u2192 Python Basics"),t(),e(40,". "),t()())}function T(i,a){if(i&1&&(n(0,"div",36)(1,"div",37),e(2),t(),n(3,"h3"),e(4),t(),n(5,"p"),e(6),t()()),i&2){let o=a.$implicit;l("ngClass",o.color),r(2),p(o.icon),r(2),p(o.title),r(2),p(o.description)}}function I(i,a){if(i&1&&(n(0,"div",30)(1,"h2"),e(2,"\u{1F522} \xBFPor qu\xE9 NumPy & Pandas?"),t(),n(3,"p",31),e(4," NumPy y Pandas son el "),n(5,"strong"),e(6,"backbone de la ciencia de datos en Python"),t(),e(7,". Antes de entrenar cualquier modelo necesitas limpiar, transformar y entender tus datos \u2014 eso se hace con estas dos librer\xEDas. "),t(),n(8,"div",32),g(9,T,7,4,"div",33),t(),n(10,"div",34)(11,"strong"),e(12,"\u{1F4D0} NumPy vs Pandas en una l\xEDnea:"),t(),n(13,"span",35)(14,"strong"),e(15,"NumPy"),t(),e(16," = matrices num\xE9ricas multidimensionales + \xE1lgebra lineal. "),n(17,"strong"),e(18,"Pandas"),t(),e(19," = tablas heterog\xE9neas (strings, fechas, n\xFAmeros) con etiquetas. "),t()()()),i&2){let o=c(2);r(9),l("ngForOf",o.whyReasons)}}function A(i,a){if(i&1){let o=_();n(0,"button",46),u("click",function(){let s=f(o).index,m=c(3);return b(m.activeArrayTab=s)}),e(1),t()}if(i&2){let o=a.$implicit,d=a.index,s=c(3);x("active",s.activeArrayTab===d),r(),C(" ",o.label," ")}}function L(i,a){if(i&1&&(n(0,"div",47)(1,"span",48),e(2,"\u25B6 Output"),t(),n(3,"pre"),e(4),t()()),i&2){let o=c(3);r(4),p(o.arrayExamples[o.activeArrayTab].output)}}function B(i,a){if(i&1&&(n(0,"div",30)(1,"h2"),e(2,"\u{1F9F1} NumPy Arrays \u2014 El ndarray"),t(),n(3,"p",31),e(4," El "),n(5,"code",38),e(6,"ndarray"),t(),e(7," (N-dimensional array) es la estructura de datos central de NumPy. Es una cuadr\xEDcula de valores del "),n(8,"strong"),e(9,"mismo tipo"),t(),e(10,", indexada por enteros. Los tensores de PyTorch y TensorFlow son variantes de este concepto. "),t(),n(11,"div",39),g(12,A,2,3,"button",40),t(),n(13,"div",41)(14,"pre",42)(15,"code"),e(16),t()(),g(17,L,5,1,"div",43),t(),n(18,"div",44)(19,"div",45)(20,"strong"),e(21,"1D array"),t(),n(22,"p")(23,"code"),e(24,"[1, 2, 3]"),t(),e(25," \u2192 shape "),n(26,"code"),e(27,"(3,)"),t(),e(28," \u2014 vector"),t()(),n(29,"div",45)(30,"strong"),e(31,"2D array"),t(),n(32,"p")(33,"code"),e(34,"[[1,2],[3,4]]"),t(),e(35," \u2192 shape "),n(36,"code"),e(37,"(2, 2)"),t(),e(38," \u2014 matriz"),t()(),n(39,"div",45)(40,"strong"),e(41,"3D array"),t(),n(42,"p"),e(43,"shape "),n(44,"code"),e(45,"(batch, H, W)"),t(),e(46," \u2014 batch de im\xE1genes"),t()(),n(47,"div",45)(48,"strong"),e(49,"4D array"),t(),n(50,"p"),e(51,"shape "),n(52,"code"),e(53,"(b, H, W, C)"),t(),e(54," \u2014 batch RGB con canales"),t()()()()),i&2){let o=c(2);r(12),l("ngForOf",o.arrayExamples),r(4),p(o.arrayExamples[o.activeArrayTab].code),r(),l("ngIf",o.arrayExamples[o.activeArrayTab].output)}}function q(i,a){if(i&1){let o=_();n(0,"button",46),u("click",function(){let s=f(o).index,m=c(3);return b(m.activeOpsTab=s)}),e(1),t()}if(i&2){let o=a.$implicit,d=a.index,s=c(3);x("active",s.activeOpsTab===d),r(),C(" ",o.label," ")}}function V(i,a){if(i&1&&(n(0,"div",47)(1,"span",48),e(2,"\u25B6 Output"),t(),n(3,"pre"),e(4),t()()),i&2){let o=c(3);r(4),p(o.numpyOpsExamples[o.activeOpsTab].output)}}function R(i,a){if(i&1&&(n(0,"div",30)(1,"h2"),e(2,"\u26A1 Operaciones NumPy"),t(),n(3,"p",31),e(4," El poder de NumPy est\xE1 en que "),n(5,"strong"),e(6,"no necesitas bucles"),t(),e(7," para operar sobre arrays. Las operaciones se aplican a todos los elementos simult\xE1neamente en c\xF3digo C optimizado. "),t(),n(8,"div",39),g(9,q,2,3,"button",40),t(),n(10,"div",41)(11,"pre",42)(12,"code"),e(13),t()(),g(14,V,5,1,"div",43),t(),n(15,"div",49)(16,"strong"),e(17,"\u{1F4A1} Broadcasting en la pr\xE1ctica:"),t(),e(18," La normalizaci\xF3n Z-score "),n(19,"code",38),e(20,"(X - mu) / sigma"),t(),e(21," es broadcasting puro \u2014 "),n(22,"code",38),e(23,"mu"),t(),e(24," y "),n(25,"code",38),e(26,"sigma"),t(),e(27," son vectores de forma "),n(28,"code",38),e(29,"(4,)"),t(),e(30,' que se "estiran" sobre las 100 filas de X autom\xE1ticamente. '),t()()),i&2){let o=c(2);r(9),l("ngForOf",o.numpyOpsExamples),r(4),p(o.numpyOpsExamples[o.activeOpsTab].code),r(),l("ngIf",o.numpyOpsExamples[o.activeOpsTab].output)}}function X(i,a){if(i&1){let o=_();n(0,"button",46),u("click",function(){let s=f(o).index,m=c(3);return b(m.activePandasIntroTab=s)}),e(1),t()}if(i&2){let o=a.$implicit,d=a.index,s=c(3);x("active",s.activePandasIntroTab===d),r(),C(" ",o.label," ")}}function G(i,a){if(i&1&&(n(0,"div",47)(1,"span",48),e(2,"\u25B6 Output"),t(),n(3,"pre"),e(4),t()()),i&2){let o=c(3);r(4),p(o.pandasIntroExamples[o.activePandasIntroTab].output)}}function j(i,a){if(i&1&&(n(0,"div",30)(1,"h2"),e(2,"\u{1F43C} Pandas \u2014 Series & DataFrame"),t(),n(3,"p",31),e(4," Pandas introduce dos estructuras de datos etiquetadas: "),n(5,"strong"),e(6,"Series"),t(),e(7," (1D con \xEDndice) y "),n(8,"strong"),e(9,"DataFrame"),t(),e(10," (2D tabla con columnas + \xEDndice). Piensa en un DataFrame como una hoja de Excel programable y ultrarr\xE1pida. "),t(),n(11,"div",39),g(12,X,2,3,"button",40),t(),n(13,"div",41)(14,"pre",42)(15,"code"),e(16),t()(),g(17,G,5,1,"div",43),t(),n(18,"div",50)(19,"strong"),e(20,"\u26A0\uFE0F loc vs iloc \u2014 regla de oro:"),t(),n(21,"code",38),e(22,"loc"),t(),e(23," usa "),n(24,"strong"),e(25,"etiquetas"),t(),e(26," (inclusive en extremos), "),n(27,"code",38),e(28,"iloc"),t(),e(29," usa "),n(30,"strong"),e(31,"posiciones enteras"),t(),e(32," (excluye el extremo derecho como Python). Confundirlos es uno de los bugs m\xE1s comunes. "),t()()),i&2){let o=c(2);r(12),l("ngForOf",o.pandasIntroExamples),r(4),p(o.pandasIntroExamples[o.activePandasIntroTab].code),r(),l("ngIf",o.pandasIntroExamples[o.activePandasIntroTab].output)}}function Q(i,a){if(i&1){let o=_();n(0,"button",46),u("click",function(){let s=f(o).index,m=c(3);return b(m.activePandasOpsTab=s)}),e(1),t()}if(i&2){let o=a.$implicit,d=a.index,s=c(3);x("active",s.activePandasOpsTab===d),r(),C(" ",o.label," ")}}function K(i,a){if(i&1&&(n(0,"div",47)(1,"span",48),e(2,"\u25B6 Output"),t(),n(3,"pre"),e(4),t()()),i&2){let o=c(3);r(4),p(o.pandasOpsExamples[o.activePandasOpsTab].output)}}function $(i,a){if(i&1&&(n(0,"div",30)(1,"h2"),e(2,"\u{1F527} Operaciones con DataFrames"),t(),n(3,"p",31),e(4," Las operaciones m\xE1s frecuentes en EDA y preparaci\xF3n de datos: filtrar, ordenar, agregar por grupos y combinar m\xFAltiples fuentes de datos. "),t(),n(5,"div",39),g(6,Q,2,3,"button",40),t(),n(7,"div",41)(8,"pre",42)(9,"code"),e(10),t()(),g(11,K,5,1,"div",43),t(),n(12,"div",49)(13,"strong"),e(14,"\u{1F4A1} GroupBy mental model:"),t(),e(15," Divide el DataFrame en grupos \u2192 aplica funci\xF3n \u2192 combina resultados. El m\xE9todo "),n(16,"code",38),e(17,"agg()"),t(),e(18," con nombres personalizados es el patr\xF3n m\xE1s limpio y legible para producci\xF3n. "),t()()),i&2){let o=c(2);r(6),l("ngForOf",o.pandasOpsExamples),r(4),p(o.pandasOpsExamples[o.activePandasOpsTab].code),r(),l("ngIf",o.pandasOpsExamples[o.activePandasOpsTab].output)}}function Y(i,a){if(i&1){let o=_();n(0,"button",46),u("click",function(){let s=f(o).index,m=c(3);return b(m.activeCleaningTab=s)}),e(1),t()}if(i&2){let o=a.$implicit,d=a.index,s=c(3);x("active",s.activeCleaningTab===d),r(),C(" ",o.label," ")}}function Z(i,a){if(i&1&&(n(0,"div",47)(1,"span",48),e(2,"\u25B6 Output"),t(),n(3,"pre"),e(4),t()()),i&2){let o=c(3);r(4),p(o.cleaningExamples[o.activeCleaningTab].output)}}function J(i,a){if(i&1&&(n(0,"div",30)(1,"h2"),e(2,"\u{1F9F9} Limpieza de Datos"),t(),n(3,"p",31),e(4," En proyectos reales el "),n(5,"strong"),e(6,"80% del tiempo"),t(),e(7," se gasta en limpieza. Datos nulos, outliers, tipos incorrectos y duplicados son los enemigos silenciosos que arruinan los modelos de IA. "),t(),n(8,"div",39),g(9,Y,2,3,"button",40),t(),n(10,"div",41)(11,"pre",42)(12,"code"),e(13),t()(),g(14,Z,5,1,"div",43),t(),n(15,"div",51)(16,"h3"),e(17,"\u{1F5FA}\uFE0F Estrategias para valores nulos"),t(),n(18,"div",44)(19,"div",45)(20,"strong"),e(21,"dropna()"),t(),n(22,"p"),e(23,"Eliminar. Solo si son <5% y aleatorios (MCAR)."),t()(),n(24,"div",45)(25,"strong"),e(26,"fillna(mediana)"),t(),n(27,"p"),e(28,"Para num\xE9ricas sesgadas (ingresos, precios)."),t()(),n(29,"div",45)(30,"strong"),e(31,"fillna(moda)"),t(),n(32,"p"),e(33,"Para categ\xF3ricas como ciudad o producto."),t()(),n(34,"div",45)(35,"strong"),e(36,"ffill/bfill"),t(),n(37,"p"),e(38,"Series temporales \u2014 propagar el valor anterior/siguiente."),t()()()()()),i&2){let o=c(2);r(9),l("ngForOf",o.cleaningExamples),r(4),p(o.cleaningExamples[o.activeCleaningTab].code),r(),l("ngIf",o.cleaningExamples[o.activeCleaningTab].output)}}function U(i,a){if(i&1&&(n(0,"div",30)(1,"h2"),e(2,"\u{1F680} Performance: Vectorizaci\xF3n vs Bucles"),t(),n(3,"p",31),e(4," El error m\xE1s frecuente de principiantes en Data Science: usar bucles for/apply donde una operaci\xF3n vectorizada har\xEDa el trabajo 100x m\xE1s r\xE1pido. "),t(),n(5,"div",52)(6,"div")(7,"h3",53),e(8,"\u26A1 NumPy: bucle vs vectorizado"),t(),n(9,"div",41)(10,"pre",42)(11,"code"),e(12),t()(),n(13,"div",47)(14,"span",48),e(15,"\u25B6 Output"),t(),n(16,"pre"),e(17),t()()()(),n(18,"div")(19,"h3",53),e(20,"\u{1F43C} Pandas: apply() vs vectorizado"),t(),n(21,"div",41)(22,"pre",42)(23,"code"),e(24),t()(),n(25,"div",47)(26,"span",48),e(27,"\u25B6 Output"),t(),n(28,"pre"),e(29),t()()()()(),n(30,"div",54)(31,"h3"),e(32,"\u{1F4CF} Reglas de oro de performance"),t(),n(33,"div",55)(34,"div",56)(35,"span",57),e(36,"\u2705 Preferir"),t(),n(37,"p"),e(38,"Operaciones vectorizadas: "),n(39,"code",38),e(40,"df['col'] * 2"),t()()(),n(41,"div",56)(42,"span",57),e(43,"\u2705 Preferir"),t(),n(44,"p")(45,"code",38),e(46,"np.where()"),t(),e(47," sobre "),n(48,"code",38),e(49,"apply(lambda...)"),t()()(),n(50,"div",56)(51,"span",57),e(52,"\u2705 Preferir"),t(),n(53,"p")(54,"code",38),e(55,"astype(np.int16)"),t(),e(56," para reducir memoria"),t()(),n(57,"div",58)(58,"span",59),e(59,"\u274C Evitar"),t(),n(60,"p")(61,"code",38),e(62,"for i, row in df.iterrows():"),t(),e(63," \u2014 muy lento"),t()(),n(64,"div",58)(65,"span",59),e(66,"\u274C Evitar"),t(),n(67,"p")(68,"code",38),e(69,"apply()"),t(),e(70," en columnas num\xE9ricas"),t()(),n(71,"div",58)(72,"span",59),e(73,"\u274C Evitar"),t(),n(74,"p"),e(75,"Cargar todo el CSV si el dataset es >1 GB \u2014 usa "),n(76,"code",38),e(77,"chunksize"),t()()()()()()),i&2){let o=c(2);r(12),p(o.performanceLoopCode),r(5),p(o.performanceLoopOutput),r(7),p(o.performancePandasCode),r(5),p(o.performancePandasOutput)}}function H(i,a){if(i&1){let o=_();n(0,"button",72),u("click",function(){let s=f(o).index,m=c(3);return b(m.selectedChallenge=s)}),n(1,"span",73),e(2),t(),n(3,"span"),e(4),t()()}if(i&2){let o=a.$implicit,d=a.index,s=c(3);x("active",s.selectedChallenge===d),r(),l("ngClass",o.difficultyColor),r(),C(" ",o.difficulty," "),r(2),p(o.title)}}function W(i,a){if(i&1&&(n(0,"li"),e(1),t()),i&2){let o=a.$implicit;r(),p(o)}}function ee(i,a){if(i&1&&(n(0,"div",60)(1,"h2"),e(2,"\u{1F3CB}\uFE0F Retos Pr\xE1cticos"),t(),n(3,"p",31),e(4," Pon a prueba lo aprendido. Selecciona tu nivel y resuelve el desaf\xEDo en tu IDE favorito. "),t(),n(5,"div",61),g(6,H,5,5,"button",62),t(),n(7,"div",63)(8,"div",64)(9,"span",65),e(10),t(),n(11,"h3"),e(12),t()(),n(13,"p",66),e(14),t(),n(15,"div",67)(16,"strong"),e(17,"\u{1F4A1} Pistas:"),t(),n(18,"ul"),g(19,W,2,1,"li",68),t()(),n(20,"div",69)(21,"div",70),e(22,"\u{1F4DD} C\xF3digo de inicio"),t(),n(23,"pre",42)(24,"code"),e(25),t()()(),n(26,"div",71)(27,"span",48),e(28,"\u{1F3AF} Output esperado"),t(),n(29,"pre"),e(30),t()()()()),i&2){let o=c(2);r(6),l("ngForOf",o.challenges),r(),l("ngClass",o.challenges[o.selectedChallenge].color),r(2),l("ngClass",o.challenges[o.selectedChallenge].difficultyColor),r(),C(" ",o.challenges[o.selectedChallenge].difficulty," "),r(2),p(o.challenges[o.selectedChallenge].title),r(2),p(o.challenges[o.selectedChallenge].description),r(5),l("ngForOf",o.challenges[o.selectedChallenge].hints),r(6),p(o.challenges[o.selectedChallenge].starterCode),r(5),p(o.challenges[o.selectedChallenge].expectedOutput)}}function te(i,a){i&1&&(n(0,"div",74)(1,"div",75),e(2," \u2705 ESTACI\xD3N COMPLETADA \u2014 L\xCDNEA 1 \xB7 ESTACI\xD3N 2 DE 9 "),t(),n(3,"h2"),e(4,"\u{1F389} Resumen: NumPy & Pandas"),t(),n(5,"div",76)(6,"div",77)(7,"span",78),e(8,"\u{1F9F1}"),t(),n(9,"div")(10,"strong"),e(11,"ndarray"),t(),n(12,"p"),e(13,"Array N-dimensional tipado, shapes, dtypes, reshape, indexing y boolean mask."),t()()(),n(14,"div",77)(15,"span",78),e(16,"\u26A1"),t(),n(17,"div")(18,"strong"),e(19,"Vectorizaci\xF3n & Broadcasting"),t(),n(20,"p"),e(21,"Operaciones sin for loops. Broadcasting autom\xE1tico por reglas de dimensiones."),t()()(),n(22,"div",77)(23,"span",78),e(24,"\u{1F522}"),t(),n(25,"div")(26,"strong"),e(27,"\xC1lgebra Lineal"),t(),n(28,"p"),e(29,"dot, matmul (@), SVD, inv \u2014 la base matem\xE1tica de las redes neuronales."),t()()(),n(30,"div",77)(31,"span",78),e(32,"\u{1F4CA}"),t(),n(33,"div")(34,"strong"),e(35,"DataFrame & Series"),t(),n(36,"p"),e(37,"Estructuras etiquetadas. loc/iloc. Filtrado booleano. Creaci\xF3n desde dict/CSV."),t()()(),n(38,"div",77)(39,"span",78),e(40,"\u{1F527}"),t(),n(41,"div")(42,"strong"),e(43,"GroupBy, Merge & Pivot"),t(),n(44,"p"),e(45,"Agrupaci\xF3n con agg(), joins tipo SQL con merge(), y pivot_table()."),t()()(),n(46,"div",77)(47,"span",78),e(48,"\u{1F9F9}"),t(),n(49,"div")(50,"strong"),e(51,"Limpieza & Feature Eng"),t(),n(52,"p"),e(53,"isna, fillna, drop_duplicates, outliers IQR, encoding, normalizaci\xF3n Z-score."),t()()()(),n(54,"div",79)(55,"div",80),e(56,"\u{1F689} Pr\xF3xima estaci\xF3n en L\xEDnea 1"),t(),n(57,"h3"),e(58,"Data Structures & Algorithms"),t(),n(59,"p"),e(60," Estructuras de datos fundamentales (listas enlazadas, \xE1rboles, grafos) y algoritmos de b\xFAsqueda y ordenamiento que potencian la eficiencia de tus pipelines de IA. "),t(),n(61,"a",81),e(62," Ver en el MetroMap "),n(63,"span"),e(64,"\u2192"),t()()(),n(65,"div",82)(66,"strong"),e(67,"\u{1F4DA} Recursos recomendados:"),t(),n(68,"span",35)(69,"a",83),e(70,"NumPy Quickstart"),t(),e(71," \xB7 "),n(72,"a",84),e(73,"Pandas en 10 minutos"),t(),e(74," \xB7 "),n(75,"a",85),e(76,"Kaggle Pandas Course (gratis)"),t()()()())}function ne(i,a){if(i&1&&(n(0,"div",10),g(1,N,41,0,"div",11)(2,I,20,1,"div",12)(3,B,55,3,"div",12)(4,R,31,3,"div",12)(5,j,33,3,"div",12)(6,$,19,3,"div",12)(7,J,39,3,"div",12)(8,U,78,4,"div",12)(9,ee,31,9,"div",13)(10,te,77,0,"div",14),t()),i&2){let o=a.$implicit,d=a.index,s=c();x("active",d===s.currentSlide),r(),l("ngIf",o.type==="title"),r(),l("ngIf",o.type==="why-numpy-pandas"),r(),l("ngIf",o.type==="numpy-arrays"),r(),l("ngIf",o.type==="numpy-operations"),r(),l("ngIf",o.type==="pandas-intro"),r(),l("ngIf",o.type==="pandas-operations"),r(),l("ngIf",o.type==="pandas-cleaning"),r(),l("ngIf",o.type==="performance"),r(),l("ngIf",o.type==="challenge"),r(),l("ngIf",o.type==="summary")}}var w=class i{currentSlide=0;selectedChallenge=0;activeArrayTab=0;activeOpsTab=0;activePandasIntroTab=0;activePandasOpsTab=0;activeCleaningTab=0;slides=[{type:"title"},{type:"why-numpy-pandas"},{type:"numpy-arrays"},{type:"numpy-operations"},{type:"pandas-intro"},{type:"pandas-operations"},{type:"pandas-cleaning"},{type:"performance"},{type:"challenge"},{type:"summary"}];whyReasons=[{icon:"\u26A1",title:"Velocidad C bajo cap\xF3",description:"NumPy ejecuta operaciones en C/Fortran \u2014 hasta 100x m\xE1s r\xE1pido que bucles Python puros.",color:"border-yellow-400"},{icon:"\u{1F9E0}",title:"Base de todo ML/IA",description:"Pandas, Scikit-learn, TensorFlow, PyTorch \u2014 todos usan NumPy arrays internamente.",color:"border-blue-400"},{icon:"\u{1F4CA}",title:"Datos tabulares \u2192 IA",description:"Pandas transforma CSVs y bases de datos en el formato exacto que los modelos necesitan.",color:"border-green-400"},{icon:"\u{1F522}",title:"Operaciones vectorizadas",description:"Aplica funciones a millones de filas sin un solo for loop. Broadcasting autom\xE1tico.",color:"border-purple-400"},{icon:"\u{1F9F9}",title:"EDA & Limpieza de datos",description:"Detecta nulls, outliers, distribuciones \u2014 la realidad del dato de producci\xF3n.",color:"border-red-400"},{icon:"\u{1F4BC}",title:"Est\xE1ndar de la industria",description:"Todo Data Scientist y ML Engineer usa estas dos librer\xEDas a diario en producci\xF3n.",color:"border-orange-400"}];arrayExamples=[{label:"Crear Arrays",code:`import numpy as np

# Desde lista Python
a = np.array([1, 2, 3, 4, 5])
print(a)           # [1 2 3 4 5]
print(type(a))     # <class 'numpy.ndarray'>

# Arrays especializados
zeros  = np.zeros((3, 4))       # 3x4 con ceros
ones   = np.ones((2, 3))        # 2x3 con unos
eye    = np.eye(3)              # Identidad 3x3
lleno  = np.full((2, 2), 7)    # Lleno de 7

# Rangos lineales
arange   = np.arange(0, 10, 2)      # [0 2 4 6 8]
linspace = np.linspace(0, 1, 5)     # [0. 0.25 0.5 0.75 1. ]

# Arrays aleatorios (seed para reproducibilidad)
np.random.seed(42)
normal  = np.random.randn(3, 3)     # Normal(0, 1)
uniform = np.random.rand(2, 4)      # Uniforme [0, 1)
enteros = np.random.randint(0, 100, (3, 3))

print("zeros shape:", zeros.shape)
print("linspace:", linspace)`,output:`[1 2 3 4 5]
<class 'numpy.ndarray'>
zeros shape: (3, 4)
linspace: [0.   0.25 0.5  0.75 1.  ]`},{label:"Shapes & Dtypes",code:`import numpy as np

arr = np.array([[1, 2, 3],
                [4, 5, 6]])

# Propiedades fundamentales
print(arr.shape)   # (2, 3)  \u2192 2 filas, 3 columnas
print(arr.ndim)    # 2       \u2192 2 dimensiones
print(arr.dtype)   # int64
print(arr.size)    # 6       \u2192 total de elementos

# Reshape \u2014 mismos datos, nueva forma
arr_col  = arr.reshape(6, 1)     # (6, 1) columna
arr_3d   = arr.reshape(1, 2, 3)  # (1, 2, 3)
arr_flat = arr.ravel()           # [1 2 3 4 5 6]

# Transponer
print(arr.T)          # (3, 2)

# Cambiar dtype
arr_float = arr.astype(np.float32)
arr_norm  = arr_float / arr_float.max()
print(arr_norm.round(2))

# Imagen para ML: (alto, ancho, canales) \u2192 batch
imagen = np.random.randint(0, 255, (28, 28, 1), dtype=np.uint8)
batch  = imagen.reshape(1, 28, 28, 1)   # batch de 1
print("batch shape:", batch.shape)`,output:`(2, 3)
2
int64
6
[[0.2 0.4 0.6]
 [0.8 1.0 1.2]]  \u2190 arr_norm
batch shape: (1, 28, 28, 1)`},{label:"Indexing & Slicing",code:`import numpy as np

arr = np.array([[10, 20, 30],
                [40, 50, 60],
                [70, 80, 90]])

# Indexing b\xE1sico
print(arr[0, 1])      # 20  \u2192 fila 0, col 1
print(arr[-1, -1])    # 90  \u2192 \xFAltima fila, \xFAltima col

# Slicing [fila_ini:fin, col_ini:fin]
print(arr[0:2, 1:])   # [[20 30], [50 60]]
print(arr[:, 0])      # [10 40 70] \u2014 toda la col 0

# Boolean indexing \u2014 muy usado en ML
mask = arr > 45
print(arr[mask])       # [50 60 70 80 90]

# Fancy indexing (acceso no contiguo)
filas = [0, 2]
print(arr[filas])      # fila 0 y fila 2

# Modificar con m\xE1scara
arr2 = arr.copy()
arr2[arr2 < 40] = 0
print(arr2)
# [[  0   0   0]
#  [ 40  50  60]
#  [ 70  80  90]]`,output:`20
90
[[20 30]
 [50 60]]
[10 40 70]
[50 60 70 80 90]`}];numpyOpsExamples=[{label:"Ops Vectorizadas",code:`import numpy as np

# Operaciones elemento a elemento \u2014 sin for loop
a = np.array([1.0, 2.0, 3.0, 4.0])
b = np.array([10.0, 20.0, 30.0, 40.0])

print(a + b)        # [11. 22. 33. 44.]
print(a * b)        # [ 10.  40.  90. 160.]
print(a ** 2)       # [ 1.  4.  9. 16.]
print(np.sqrt(a))   # [1.   1.41 1.73 2.  ]

# Funciones universales (ufuncs)
theta = np.linspace(0, np.pi, 5)
print(np.sin(theta).round(2))   # [0. 0.71 1. 0.71 0.]
print(np.exp(-a).round(4))      # [0.3679 0.1353 0.0498 0.0183]

# Reducci\xF3n (aggregation)
datos = np.array([[1, 2, 3], [4, 5, 6]])
print(datos.mean())            # 3.5  \u2014 promedio global
print(datos.mean(axis=0))      # [2.5 3.5 4.5] \u2014 por columna
print(datos.sum(axis=1))       # [ 6 15] \u2014 por fila
print(datos.std().round(2))    # 1.71`,output:`[11. 22. 33. 44.]
[ 10.  40.  90. 160.]
[ 1.  4.  9. 16.]
[1.   1.414 1.732 2.   ]
mean=3.5  std=1.71`},{label:"Broadcasting",code:`import numpy as np

# Broadcasting \u2014 NumPy "estira" arrays para que sean compatibles
# Regla: se comparan dimensiones de derecha a izquierda;
#        1 es compatible con cualquier n.

# Caso 1: escalar + array
a = np.array([1, 2, 3])
print(a + 10)           # [11 12 13]

# Caso 2: (3,1) + (3,) \u2192 (3,3)
col = np.array([[0], [10], [20]])  # shape (3, 1)
row = np.array([1, 2, 3])         # shape (3,)
print(col + row)
# [[ 1  2  3]
#  [11 12 13]
#  [21 22 23]]

# Caso real: normalizaci\xF3n Z-score para ML
X     = np.random.randn(100, 4)  # 100 muestras, 4 features
mu    = X.mean(axis=0)           # (4,) \u2014 media por feature
sigma = X.std(axis=0)            # (4,) \u2014 std por feature
X_norm = (X - mu) / sigma        # (100,4) broadcast autom\xE1tico

print("Media post-norm:", X_norm.mean(axis=0).round(10))  # \u2248 0
print("Std  post-norm:", X_norm.std(axis=0).round(2))     # \u2248 1`,output:`[11 12 13]
[[ 1  2  3]
 [11 12 13]
 [21 22 23]]
Media post-norm: [0. 0. 0. 0.]
Std  post-norm:  [1. 1. 1. 1.]`},{label:"\xC1lgebra Lineal",code:`import numpy as np

# Producto punto \u2014 coraz\xF3n de las redes neuronales
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.dot(a, b))    # 1*4 + 2*5 + 3*6 = 32

# Multiplicaci\xF3n matricial (@ es shorthand de matmul)
A = np.array([[1, 2], [3, 4]])   # (2, 2)
B = np.array([[5, 6], [7, 8]])   # (2, 2)
print(A @ B)
# [[19 22]
#  [43 50]]

# Capa Densa simulada: Z = X @ W + b
X = np.random.randn(32, 128)   # batch=32, input=128
W = np.random.randn(128, 64)   # pesos
b = np.zeros(64)               # bias
Z = X @ W + b                  # (32, 64) \u2014 salida de la capa
print("Forma capa densa:", Z.shape)

# Descomposici\xF3n SVD \u2014 compresi\xF3n, PCA
M = np.random.randn(4, 5)
U, s, Vt = np.linalg.svd(M, full_matrices=False)
print("Valores singulares:", s.round(2))

# Determinante e inversa
print("det(A) =", np.linalg.det(A).round(1))
A_inv = np.linalg.inv(A)
print("A @ A_inv \u2248 I:", (A @ A_inv).round(10))`,output:`32
[[19 22]
 [43 50]]
Forma capa densa: (32, 64)
Valores singulares: [3.2 2.1 1.1 0.4]
det(A) = -2.0`}];pandasIntroExamples=[{label:"Series",code:`import pandas as pd

# Series \u2014 array 1D etiquetado
ventas = pd.Series(
    [150, 230, 180, 290, 100],
    index=['Lun', 'Mar', 'Mi\xE9', 'Jue', 'Vie'],
    name='Ventas_Semana'
)
print(ventas)
print()
print("Total:", ventas.sum())
print("Media:", ventas.mean())
print("M\xE1ximo en:", ventas.idxmax(), "\u2192", ventas.max())

# Acceso
print(ventas['Mar'])       # 230
print(ventas[1])           # 230 por posici\xF3n
print(ventas[ventas > 170])  # filtrado booleano

# Operaciones
print(ventas.cumsum())            # suma acumulada
print(ventas.pct_change().round(2))  # variaci\xF3n porcentual

# Desde diccionario
scores = pd.Series({'Precision': 0.94, 'Recall': 0.91, 'F1': 0.925})
print(scores)`,output:`Lun    150
Mar    230
Mi\xE9    180
Jue    290
Vie    100
Name: Ventas_Semana, dtype: int64

Total: 950  Media: 190.0  M\xE1ximo en: Jue \u2192 290`},{label:"DataFrame",code:`import pandas as pd
import numpy as np

# DataFrame \u2014 tabla 2D con \xEDndice y columnas etiquetadas
datos = {
    'nombre': ['Ana', 'Luis', 'Mar\xEDa', 'Pedro', 'Sara'],
    'edad':   [28, 35, 22, 40, 31],
    'score':  [0.92, 0.88, 0.95, 0.78, 0.91],
    'ciudad': ['CDMX', 'GDL', 'CDMX', 'MTY', 'GDL']
}
df = pd.DataFrame(datos)

print(df)
print()
print("Shape:", df.shape)       # (5, 4)
print("Cols:", df.columns.tolist())
print("Dtypes:\\n", df.dtypes)
print()

# Info r\xE1pida
print(df.describe().round(2))   # estad\xEDsticas num\xE9ricas
print()
print(df.info())                 # null counts + mem usage

# Acceder a columnas
print(df['nombre'])              # Series
print(df[['nombre', 'score']])  # sub-DataFrame`,output:`  nombre  edad  score ciudad
0    Ana    28   0.92   CDMX
1   Luis    35   0.88    GDL
2  Mar\xEDa    22   0.95   CDMX
3  Pedro    40   0.78    MTY
4   Sara    31   0.91    GDL

Shape: (5, 4)`},{label:"loc & iloc",code:`import pandas as pd

df = pd.DataFrame({
    'nombre': ['Ana', 'Luis', 'Mar\xEDa'],
    'edad':   [28, 35, 22],
    'score':  [0.92, 0.88, 0.95]
}, index=['a', 'b', 'c'])

# loc \u2014 acceso por ETIQUETA (label)
print(df.loc['a'])                        # fila 'a' completa
print(df.loc['a', 'nombre'])              # 'Ana'
print(df.loc['a':'b', ['nombre','score']]) # rango de etiquetas

# iloc \u2014 acceso por POSICI\xD3N (integer)
print(df.iloc[0])           # primera fila
print(df.iloc[0, 1])        # fila 0, col 1 \u2192 28
print(df.iloc[:2, 1:])      # primeras 2 filas, col 1 en adelante

# Boolean indexing
print(df[df['edad'] > 25])
print(df[(df['score'] > 0.9) & (df['edad'] < 30)])

# Modificar un valor espec\xEDfico
df.at['a', 'score'] = 0.99   # por etiqueta (r\xE1pido)
df.iat[1, 2] = 0.85           # por posici\xF3n (r\xE1pido)
print(df)`,output:`nombre    Ana
edad       28
score    0.92
Name: a, dtype: object

  nombre  edad  score
a    Ana    28   0.99
b   Luis    35   0.85
c  Mar\xEDa    22   0.95`}];pandasOpsExamples=[{label:"Filtrar & Ordenar",code:`import pandas as pd
import numpy as np

np.random.seed(42)
df = pd.DataFrame({
    'modelo':   ['LogReg', 'RandomForest', 'XGBoost', 'SVM', 'MLP', 'KNN'],
    'accuracy': [0.82, 0.91, 0.94, 0.88, 0.92, 0.79],
    'tiempo_s': [0.1, 3.4, 2.1, 5.6, 8.2, 0.3],
    'tipo':     ['lineal', 'ensemble', 'ensemble', 'lineal', 'deep', 'lazy']
})

# Filtros con condiciones booleanas
buenos  = df[df['accuracy'] > 0.90]
rapidos = df[df['tiempo_s'] < 2.0]
mejores = df[(df['accuracy'] > 0.88) & (df['tiempo_s'] < 4)]

# Ordenar
print(df.sort_values('accuracy', ascending=False))

# nlargest / nsmallest \u2014 atajo \xFAtil
print(df.nlargest(3, 'accuracy')[['modelo', 'accuracy', 'tiempo_s']])

# query() \u2014 m\xE1s legible para condiciones complejas
resultado = df.query("accuracy > 0.88 and tiempo_s < 5")
print(resultado[['modelo', 'accuracy', 'tiempo_s']])

# isin() para filtrar por lista de valores
ensemble_models = df[df['tipo'].isin(['ensemble', 'deep'])]
print(ensemble_models['modelo'].tolist())`,output:`       modelo  accuracy  tiempo_s
2     XGBoost      0.94       2.1
4         MLP      0.92       8.2
1  RandomForest    0.91       3.4
3         SVM      0.88       5.6

Ensemble+Deep: ['RandomForest', 'XGBoost', 'MLP']`},{label:"GroupBy & Agg",code:`import pandas as pd

df = pd.DataFrame({
    'region':   ['Norte','Sur','Norte','Este','Sur','Este','Norte'],
    'producto': ['A', 'B', 'A', 'C', 'A', 'B', 'C'],
    'ventas':   [150, 200, 130, 300, 180, 250, 90],
    'margen':   [0.30, 0.22, 0.28, 0.41, 0.25, 0.35, 0.20]
})

# GroupBy b\xE1sico
print(df.groupby('region')['ventas'].sum())

# M\xFAltiples funciones con nombres personalizados
stats = df.groupby('region').agg(
    total_ventas =('ventas', 'sum'),
    prom_ventas  =('ventas', 'mean'),
    prom_margen  =('margen', 'mean'),
    n_registros  =('producto', 'count')
).round(2)
print(stats)

# Pivot table \u2014 ventas por regi\xF3n y producto
pivot = df.pivot_table(
    values='ventas',
    index='region',
    columns='producto',
    aggfunc='sum',
    fill_value=0
)
print(pivot)

# transform() \u2014 agrega sin colapsar filas
df['ventas_pct_region'] = df.groupby('region')['ventas'].transform(
    lambda x: (x / x.sum()).round(2)
)`,output:`region
Este    550
Norte   370
Sur     380

       total_ventas  prom_ventas  prom_margen  n_registros
Este           550       275.00         0.38            2
Norte          370       123.33         0.26            3
Sur            380       190.00         0.24            2`},{label:"Merge & Join",code:`import pandas as pd

empleados = pd.DataFrame({
    'emp_id': [1, 2, 3, 4, 5],
    'nombre': ['Ana', 'Luis', 'Mar\xEDa', 'Pedro', 'Sara'],
    'dept_id': [10, 20, 10, 30, 20]
})

departamentos = pd.DataFrame({
    'dept_id': [10, 20, 30, 40],
    'depto':   ['Data Science', 'Ingenier\xEDa', 'Producto', 'Marketing']
})

# INNER JOIN \u2014 solo filas con coincidencia
inner = pd.merge(empleados, departamentos, on='dept_id')
print(inner[['nombre', 'depto']])

# LEFT JOIN \u2014 todos los empleados, NaN si no hay depto
left = pd.merge(empleados, departamentos, on='dept_id', how='left')

# concat \u2014 apila DataFrames verticalmente
q1 = pd.DataFrame({'mes': ['Ene', 'Feb'], 'ventas': [100, 120]})
q2 = pd.DataFrame({'mes': ['Mar', 'Abr'], 'ventas': [110, 135]})
anual = pd.concat([q1, q2], ignore_index=True)
print(anual)

# join() \u2014 une por \xEDndice
df1 = pd.DataFrame({'score': [0.9, 0.8]}, index=['Ana', 'Luis'])
df2 = pd.DataFrame({'nivel': ['Sr', 'Jr']}, index=['Ana', 'Luis'])
print(df1.join(df2))`,output:`  nombre         depto
0    Ana   Data Science
1  Mar\xEDa   Data Science
2   Luis    Ingenier\xEDa
3   Sara    Ingenier\xEDa
4  Pedro       Producto

   mes  ventas
0  Ene     100
1  Feb     120
2  Mar     110
3  Abr     135`}];cleaningExamples=[{label:"Detectar Nulls",code:`import pandas as pd
import numpy as np

# Dataset con problemas t\xEDpicos de producci\xF3n
df = pd.DataFrame({
    'edad':     [25, None, 30, None, 35, 28],
    'ingresos': [50000, 65000, None, 45000, 80000, None],
    'ciudad':   ['CDMX', 'GDL', 'CDMX', None, 'MTY', 'GDL'],
    'score':    [0.88, 0.92, 0.75, 0.91, None, 0.84]
})

# Diagn\xF3stico de calidad
print("=== Nulls absolutos ===")
print(df.isna().sum())

print("\\n=== % de nulls ===")
print((df.isna().mean() * 100).round(1))

print("\\n=== Filas con ALG\xDAN null ===")
print(df[df.isna().any(axis=1)])

print("\\n=== Info completa ===")
df.info()

# Mapa booleano de nulls
print("\\nMapa de nulls:")
print(df.isna())`,output:`=== Nulls absolutos ===
edad        2
ingresos    2
ciudad      1
score       1

=== % de nulls ===
edad        33.3
ingresos    33.3
ciudad      16.7
score       16.7`},{label:"Limpiar Datos",code:`import pandas as pd
import numpy as np

df = pd.DataFrame({
    'edad':     [25.0, None, 30.0, None, 35.0, 28.0],
    'ingresos': [50000, 65000, None, 45000, 80000, None],
    'ciudad':   ['CDMX', 'GDL', 'CDMX', None, 'MTY', 'GDL'],
    'score':    [0.88, 0.92, 0.75, 0.91, None, 0.84]
})

# Estrategia 1: rellenar con estad\xEDsticas
df['edad']     = df['edad'].fillna(df['edad'].median())
df['ingresos'] = df['ingresos'].fillna(df['ingresos'].mean().round())
df['ciudad']   = df['ciudad'].fillna('Desconocida')
df['score']    = df['score'].fillna(df['score'].median())

# Estrategia 2: forward fill / back fill para series temporales
# df['precio'] = df['precio'].ffill().bfill()

# Cambiar dtypes para ahorrar memoria
df['edad']   = df['edad'].astype(int)
df['ciudad'] = df['ciudad'].astype('category')

# Eliminar duplicados
df_clean = df.drop_duplicates()

print("Nulls restantes:", df_clean.isna().sum().sum())
print(df_clean.dtypes)
print(df_clean)`,output:`Nulls restantes: 0
edad         int64
ingresos    float64
ciudad     category
score       float64

   edad  ingresos     ciudad  score
0    25   50000.0       CDMX   0.88
1    28   65000.0        GDL   0.92
...`},{label:"Outliers & Tipos",code:`import pandas as pd
import numpy as np

np.random.seed(42)
# Datos normales + outliers intencionados
valores = np.concatenate([
    np.random.randn(95) * 10 + 50,   # datos normales
    [200, -100, 185, 210, -90]        # outliers
])
df = pd.DataFrame({'valor': valores})

# M\xE9todo IQR (Interquartile Range)
Q1  = df['valor'].quantile(0.25)
Q3  = df['valor'].quantile(0.75)
IQR = Q3 - Q1
lower = Q1 - 1.5 * IQR
upper = Q3 + 1.5 * IQR

outliers = df[(df['valor'] < lower) | (df['valor'] > upper)]
print(f"Outliers detectados: {len(outliers)}")
print(f"Rango normal: [{lower:.1f}, {upper:.1f}]")

# Capping (winsorizing) \u2014 recorta en lugar de eliminar
df['valor_capped'] = df['valor'].clip(lower, upper)
print(f"Antes  \u2014 max: {df['valor'].max():.1f}")
print(f"Despu\xE9s \u2014 max: {df['valor_capped'].max():.1f}")

# M\xE9todo Z-score
from scipy import stats
z_scores = np.abs(stats.zscore(df['valor']))
df_sin_outliers = df[z_scores < 3]
print(f"Filas sin outliers (z<3): {len(df_sin_outliers)}")`,output:`Outliers detectados: 5
Rango normal: [24.2, 77.6]
Antes  \u2014 max: 210.0
Despu\xE9s \u2014 max:  77.6
Filas sin outliers (z<3): 95`}];performanceLoopCode=`import numpy as np
import time

n = 1_000_000
lista = list(range(n))
arr   = np.arange(n, dtype=float)

# \u274C Bucle Python puro \u2014 LENTO
inicio = time.time()
resultado_loop = [x ** 2 for x in lista]
t_loop = time.time() - inicio

# \u2705 NumPy vectorizado \u2014 R\xC1PIDO
inicio = time.time()
resultado_np = arr ** 2
t_np = time.time() - inicio

print(f"Bucle Python:      {t_loop:.3f}s")
print(f"NumPy vectorizado: {t_np:.4f}s")
print(f"Speedup: {t_loop / t_np:.0f}x m\xE1s r\xE1pido")`;performanceLoopOutput=`Bucle Python:      0.245s
NumPy vectorizado: 0.0021s
Speedup: ~117x m\xE1s r\xE1pido`;performancePandasCode=`import pandas as pd
import numpy as np
import time

df = pd.DataFrame({'valor': np.random.randn(500_000)})

# \u274C apply() \u2014 lento, evitar en producci\xF3n
inicio = time.time()
df['v1'] = df['valor'].apply(lambda x: x**2 + 2*x + 1)
t_apply = time.time() - inicio

# \u2705 Operaci\xF3n vectorizada \u2014 siempre preferir
inicio = time.time()
df['v2'] = df['valor']**2 + 2*df['valor'] + 1
t_vect = time.time() - inicio

print(f"apply():     {t_apply:.3f}s")
print(f"Vectorizado: {t_vect:.4f}s")
print(f"Speedup: {t_apply / t_vect:.0f}x")

# Memoria: usa dtypes eficientes
df['id'] = np.random.randint(0, 1000, 500_000)
print("int64:", df['id'].memory_usage(deep=True) // 1024, "KB")
df['id_small'] = df['id'].astype(np.int16)
print("int16:", df['id_small'].memory_usage(deep=True) // 1024, "KB")

# chunks para datasets grandes
# for chunk in pd.read_csv('big.csv', chunksize=10_000):
#     process(chunk)`;performancePandasOutput=`apply():     2.145s
Vectorizado: 0.012s
Speedup: 179x

int64: 4000 KB
int16: 1000 KB  \u2190 75% menos memoria`;challenges=[{difficulty:"Principiante",title:"Estad\xEDsticas de Notas",description:"Dado un array de calificaciones de 30 estudiantes (entre 50 y 100), calcula estad\xEDsticas y clasifica las notas por letra.",hints:["Usa np.random.seed(99) y np.random.randint(50, 101, 30) para generar datos","Los m\xE9todos mean(), std(), min(), max() son atributos del ndarray","Boolean indexing: notas[notas >= 90] filtra los A","Cuenta con len() o .sum() sobre la m\xE1scara booleana"],starterCode:`import numpy as np

np.random.seed(99)
notas = np.random.randint(50, 101, size=30)

# TODO: calcula media, desviaci\xF3n est\xE1ndar, m\xEDn y m\xE1x
media = ...
std   = ...
minimo = ...
maximo = ...

# TODO: cuenta cu\xE1ntos aprobaron (nota >= 70)
aprobados = ...

# TODO: clasifica \u2014 A>=90, B>=80, C>=70, F<70
A = len(notas[notas >= 90])
B = len(notas[(notas >= 80) & (notas < 90)])
C = len(notas[(notas >= 70) & (notas < 80)])
F = len(notas[notas < 70])

print(f"Media: {media:.1f} | Std: {std:.1f}")
print(f"Rango: [{minimo}, {maximo}]")
print(f"Aprobados: {aprobados}/30")
print(f"A:{A}  B:{B}  C:{C}  F:{F}")`,expectedOutput:`Media: 75.1 | Std: 14.2
Rango: [50, 100]
Aprobados: 20/30
A:4  B:7  C:9  F:10`,color:"border-green-400",difficultyColor:"bg-green-900 text-green-300"},{difficulty:"Intermedio",title:"Pipeline EDA de Ventas",description:"Crea un pipeline completo de An\xE1lisis Exploratorio de Datos sobre un DataFrame de ventas con 200 registros.",hints:['groupby + agg con nombres personalizados: agg(total=("ventas","sum"))',"pivot_table para ver ventas regi\xF3n vs mes","corr() sobre columnas num\xE9ricas para ver correlaciones",'nlargest(3, "ventas") para el top 3'],starterCode:`import pandas as pd
import numpy as np

np.random.seed(42)
n = 200
df = pd.DataFrame({
    'region':   np.random.choice(['Norte','Sur','Este','Oeste'], n),
    'producto': np.random.choice(['A','B','C','D'], n),
    'ventas':   np.random.randint(100, 1000, n),
    'costo':    np.random.randint(50, 600, n),
    'mes':      np.random.randint(1, 13, n)
})
df['margen'] = ((df['ventas'] - df['costo']) / df['ventas']).round(3)

# TODO 1: Resumen por regi\xF3n (total ventas, promedio margen, n registros)
resumen_region = ...

# TODO 2: Top 3 registros por ventas
top3 = ...

# TODO 3: Correlaci\xF3n entre columnas num\xE9ricas
correlacion = ...

# TODO 4: Mes con m\xE1s ventas totales
mes_top = ...

print("=== Resumen por Regi\xF3n ===")
print(resumen_region)
print("\\n=== Mes con m\xE1s ventas ===", mes_top)
print("\\n=== Top 3 ventas ===")
print(top3[['region', 'producto', 'ventas']])`,expectedOutput:`=== Resumen por Regi\xF3n ===
       total_ventas  prom_margen  n_registros
Este          12840         0.31           51
Norte         12230         0.30           49
Oeste         13110         0.29           52
Sur           11820         0.31           48

=== Mes con m\xE1s ventas === 7`,color:"border-yellow-400",difficultyColor:"bg-yellow-900 text-yellow-300"},{difficulty:"Avanzado",title:"Feature Engineering para ML",description:"Prepara un dataset de cr\xE9dito para ML: imputa nulls, one-hot encoding, normalizaci\xF3n y split train/test usando solo NumPy y Pandas.",hints:['pd.get_dummies(df, columns=["educacion"], drop_first=True) para one-hot encoding',"Normaliza num\xE9ricas con Z-score: (col - col.mean()) / col.std()","iloc para split: X.iloc[:int(0.8*n)] = train, X.iloc[int(0.8*n):] = test","fillna(df[col].median()) para imputar variables sesgadas como ingresos"],starterCode:`import pandas as pd
import numpy as np

np.random.seed(42)
n = 500

# Dataset sint\xE9tico de cr\xE9dito con valores faltantes
df = pd.DataFrame({
    'edad':      np.random.randint(18, 65, n).astype(float),
    'ingresos':  np.random.exponential(40000, n),
    'deuda':     np.random.exponential(15000, n),
    'educacion': np.random.choice(
        ['Basica','Bachillerato','Universidad','Posgrado'], n),
    'default':   np.random.choice([0, 1], n, p=[0.75, 0.25])
})

# Introduce ~5% de nulls
mask = np.random.rand(n, 3) < 0.05
df.loc[mask[:, 0], 'edad']     = np.nan
df.loc[mask[:, 1], 'ingresos'] = np.nan
df.loc[mask[:, 2], 'deuda']    = np.nan

# TODO 1: Imputa nulls (mediana para num\xE9ricas sesgadas)

# TODO 2: One-hot encode 'educacion'

# TODO 3: Normaliza columnas num\xE9ricas ['edad','ingresos','deuda']

# TODO 4: Separa features (X) y target (y), luego split 80/20 sin sklearn

print("X_train:", X_train.shape)
print("X_test: ", X_test.shape)
print("Ratio positivos train:", y_train.mean().round(3))
print("Nulls restantes:", df.isna().sum().sum())`,expectedOutput:`X_train: (400, 7)
X_test:  (100, 7)
Ratio positivos train: 0.248
Nulls restantes: 0`,color:"border-red-400",difficultyColor:"bg-red-900 text-red-300"}];nextSlide(){this.currentSlide<this.slides.length-1&&this.currentSlide++}prevSlide(){this.currentSlide>0&&this.currentSlide--}goToSlide(a){this.currentSlide=a}onKeydown(a){a.key==="ArrowRight"||a.key==="ArrowDown"?this.nextSlide():(a.key==="ArrowLeft"||a.key==="ArrowUp")&&this.prevSlide()}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=P({type:i,selectors:[["app-l1-numpy-pandas"]],hostBindings:function(o,d){o&1&&u("keydown",function(m){return d.onKeydown(m)})},decls:14,vars:6,consts:[["tabindex","0",1,"presentation-container",3,"keydown"],[1,"back-to-menu"],["routerLink","/metro-map-ai",1,"back-btn"],[1,"controls"],[3,"click","disabled"],[1,"slide-counter"],["class","dot-btn",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"slide-wrapper"],["class","slide",3,"active",4,"ngFor","ngForOf"],[1,"dot-btn",3,"click","ngStyle"],[1,"slide"],["class","slide-title",4,"ngIf"],["class","slide-content",4,"ngIf"],["class","slide-content challenge-slide",4,"ngIf"],["class","slide-content summary-slide",4,"ngIf"],[1,"slide-title"],[1,"station-badge"],[1,"title-icon"],[1,"title-subtitle"],[1,"title-pills"],[1,"pill","pill-blue"],[1,"pill","pill-yellow"],[1,"pill","pill-green"],[1,"pill","pill-purple"],[1,"pill","pill-red"],[1,"title-meta"],[1,"meta-item"],[1,"meta-icon"],[1,"title-prereq-note"],["routerLink","/metro-map-ai/l1-python-basics",1,"inline-link"],[1,"slide-content"],[1,"slide-intro"],[1,"theory-grid"],["class","theory-card",3,"ngClass",4,"ngFor","ngForOf"],[1,"highlight-box"],[1,"ml-2"],[1,"theory-card",3,"ngClass"],[1,"theory-icon"],[1,"inline-code"],[1,"code-tabs"],["class","tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"code-block-wrapper"],[1,"code-block","python"],["class","output-block",4,"ngIf"],[1,"comparison-row"],[1,"mini-card"],[1,"tab-btn",3,"click"],[1,"output-block"],[1,"output-label"],[1,"tip-box"],[1,"warning-box"],[1,"cleaning-strategies"],[1,"perf-grid"],[1,"perf-title"],[1,"perf-rules"],[1,"rules-grid"],[1,"rule-item","rule-do"],[1,"rule-badge","do"],[1,"rule-item","rule-dont"],[1,"rule-badge","dont"],[1,"slide-content","challenge-slide"],[1,"challenge-tabs"],["class","challenge-tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"challenge-card",3,"ngClass"],[1,"challenge-header"],[1,"text-sm","font-bold","px-3","py-1","rounded-full",3,"ngClass"],[1,"challenge-description"],[1,"hints-box"],[4,"ngFor","ngForOf"],[1,"code-block-wrapper","mt-4"],[1,"code-block-header"],[1,"output-block","mt-3"],[1,"challenge-tab-btn",3,"click"],[1,"text-xs","font-semibold","px-2","py-0.5","rounded",3,"ngClass"],[1,"slide-content","summary-slide"],[1,"workshop-badge",2,"background","rgba(99,102,241,0.15)","color","#818cf8","border","1px solid rgba(99,102,241,0.3)"],[1,"summary-grid"],[1,"summary-item"],[1,"summary-icon"],[1,"next-station-card"],[1,"next-station-label"],["routerLink","/metro-map-ai",1,"next-station-btn"],[1,"tip-box","mt-6"],["rel","noopener noreferrer","href","https://numpy.org/doc/stable/user/quickstart.html","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://pandas.pydata.org/docs/user_guide/10min.html","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://kaggle.com/learn/pandas","target","_blank",1,"resource-link"]],template:function(o,d){o&1&&(n(0,"div",0),u("keydown",function(m){return d.onKeydown(m)}),n(1,"div",1)(2,"a",2),e(3," \u2190 Volver al MetroMap "),t()(),n(4,"div",3)(5,"button",4),u("click",function(){return d.prevSlide()}),e(6,"\u2190 Anterior"),t(),n(7,"span",5),e(8),t(),g(9,z,1,3,"button",6),n(10,"button",4),u("click",function(){return d.nextSlide()}),e(11,"Siguiente \u2192"),t()(),n(12,"div",7),g(13,ne,11,12,"div",8),t()()),o&2&&(r(5),l("disabled",d.currentSlide===0),r(3),O("",d.currentSlide+1," / ",d.slides.length),r(),l("ngForOf",d.slides),r(),l("disabled",d.currentSlide===d.slides.length-1),r(3),l("ngForOf",d.slides))},dependencies:[S,v,y,h,E,k,D],styles:['.presentation-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;padding:2rem;position:relative;outline:none}.back-to-menu[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-bottom:1rem}.back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#fffffff2;color:#667eea;padding:.75rem 1.25rem;border-radius:8px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 6px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.back-btn[_ngcontent-%COMP%]:hover{background:#fff;transform:translate(-4px);box-shadow:0 6px 12px #00000026;color:#764ba2}.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;transition:transform .3s ease}.back-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:translate(-2px)}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin-bottom:2rem;gap:1rem}.control-btn[_ngcontent-%COMP%]{background:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px #0000001a}.control-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.control-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.slide-counter[_ngcontent-%COMP%]{background:#fff;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;color:#667eea;box-shadow:0 4px 6px #0000001a}.slide-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;min-height:600px;position:relative}.slide[_ngcontent-%COMP%]{display:none;width:100%;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 20px 60px #0000004d;animation:_ngcontent-%COMP%_slideIn .5s ease}.slide.active[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}.slide-title[_ngcontent-%COMP%]{text-align:center}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.5rem 1.5rem;border-radius:50px;font-weight:700;font-size:.9rem;letter-spacing:1px;margin-bottom:2rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#2d3748;margin-bottom:1rem}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;color:#718096;margin-bottom:3rem}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:3rem}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem;background:#f7fafc;border-radius:12px;border-left:4px solid #667eea}.info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;font-weight:600}.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.125rem;color:#2d3748;font-weight:700}.slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#2d3748;margin-bottom:1.5rem;border-bottom:3px solid #667eea;padding-bottom:.5rem}.slide-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:#718096;margin-bottom:2rem;text-align:center}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:2rem}.theory-card[_ngcontent-%COMP%]{padding:2rem;border-radius:12px;border-left:6px solid;box-shadow:0 4px 6px #0000001a}.theory-card.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#22c55e}.theory-card.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#3b82f6}.theory-card.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2d3748;margin-bottom:.75rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;position:relative;padding:.5rem 0 .5rem 1.5rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.warning-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1rem 1.5rem;border-radius:8px;margin-top:2rem}.examples-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.example-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:all .3s ease}.example-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.example-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;cursor:pointer;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.example-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.accordion-icon[_ngcontent-%COMP%]{color:#667eea;font-weight:700;font-size:1.25rem}.example-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.25rem}.example-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}@keyframes _ngcontent-%COMP%_expandDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}.hu-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.hu-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.hu-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0c4a6e}.bad-prompt[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.bad-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#dc2626;margin-bottom:1rem}.good-prompt[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.good-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#16a34a;margin-bottom:1rem}.prompt-text[_ngcontent-%COMP%]{background:#fff;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.9rem;color:#000;white-space:pre-wrap;margin-bottom:1rem}.problems-list[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]{margin-top:1rem}.problems-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#2d3748}.problems-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2717";position:absolute;left:0;color:#ef4444;font-weight:700}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.output-preview[_ngcontent-%COMP%]{background:#faf5ff;border-left:4px solid #a855f7;padding:1.5rem;border-radius:8px}.output-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7e22ce;margin-bottom:1rem}.output-list[_ngcontent-%COMP%]{list-style:none;padding:0}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;position:relative}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#a855f7}.process-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.process-step[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.process-step[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.step-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.step-number[_ngcontent-%COMP%]{background:#fff;color:#667eea;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;flex-shrink:0}.step-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex:1}.step-title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem}.step-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.step-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.step-example[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;margin-bottom:1rem;border-left:3px solid #0ea5e9}.step-tips[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b}.step-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:.5rem}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#78350f}.template-container[_ngcontent-%COMP%]{background:#1e293b;border-radius:12px;overflow:hidden}.template-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.template-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.template-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0}.copy-btn[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:none;padding:.5rem 1rem;border-radius:6px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003}.template-code[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:2rem;margin:0;font-family:Courier New,monospace;font-size:.9rem;line-height:1.6;white-space:pre-wrap;overflow-x:auto}.template-instructions[_ngcontent-%COMP%]{background:#fff;padding:2rem}.template-instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:1rem}.template-instructions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:#4a5568;line-height:1.8}.template-instructions[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f7fafc;padding:.2rem .5rem;border-radius:4px;color:#667eea;font-family:Courier New,monospace}.challenges-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{border:3px solid;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.challenge-card.green[_ngcontent-%COMP%]{border-color:#22c55e}.challenge-card.blue[_ngcontent-%COMP%]{border-color:#3b82f6}.challenge-card.orange[_ngcontent-%COMP%]{border-color:#f97316}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #00000026}.challenge-header[_ngcontent-%COMP%]{padding:1.5rem;background:#f7fafc}.difficulty-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;border-radius:50px;font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:.75rem}.difficulty-badge.F\\e1 cil[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.difficulty-badge.Intermedio[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.difficulty-badge.Avanzado[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.125rem;display:flex;align-items:center;gap:.5rem}.challenge-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.hu-section[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hu-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem}.hu-text[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;border-left:3px solid #0ea5e9;font-style:italic;color:#0369a1}.context-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#4a5568}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#667eea;font-weight:700}.requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.action-section[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:2px dashed #e2e8f0}.start-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:1rem 2rem;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 16px #667eea66}.timer-note[_ngcontent-%COMP%]{color:#718096;font-size:.875rem}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.tip-card[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.tip-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem;font-size:1.125rem}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.tip-example[_ngcontent-%COMP%]{background:#fff;padding:.75rem;border-radius:6px;border:1px solid #e2e8f0}.tip-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#667eea;font-family:Courier New,monospace;font-size:.875rem}.deliverables-section[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]{margin-bottom:3rem}.deliverables-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1.75rem;margin-bottom:1.5rem;border-left:5px solid #667eea;padding-left:1rem}.deliverables-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.deliverable-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:1.5rem;border-radius:12px;border-left:5px solid #0ea5e9}.deliverable-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.deliverable-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#075985;margin-bottom:1rem}.checkpoints[_ngcontent-%COMP%]{list-style:none;padding:0}.checkpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#0c4a6e;display:flex;align-items:flex-start;gap:.5rem}.checkbox[_ngcontent-%COMP%]{color:#0ea5e9;font-size:1.25rem}.next-steps-list[_ngcontent-%COMP%]{background:#fef3c7;padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;color:#78350f;line-height:1.8}.closing-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-bottom:2rem}.closing-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;margin-bottom:1rem}.closing-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.closing-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#92400e;margin-bottom:1rem}.quote[_ngcontent-%COMP%]{font-style:italic;font-weight:600;text-align:center;padding:1rem;background:#fff;border-radius:8px;margin-top:1rem}.preview-next[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);padding:1.5rem;border-radius:12px;border-left:5px solid #22c55e;color:#166534;font-weight:600;text-align:center}.progress-dots[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover, .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background:#fffc;transform:scale(1.2)}.progress-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background:#fff;width:32px;border-radius:6px}@media (max-width: 768px){.presentation-container[_ngcontent-%COMP%]{padding:1rem}.slide[_ngcontent-%COMP%]{padding:1.5rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem}.info-grid[_ngcontent-%COMP%], .theory-grid[_ngcontent-%COMP%], .challenges-grid[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%], .deliverables-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.control-btn[_ngcontent-%COMP%], .slide-counter[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.875rem}}.formats-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.format-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.format-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.format-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.format-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.format-icon[_ngcontent-%COMP%]{font-size:2rem}.format-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0;color:#2d3748;font-size:1.25rem}.format-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.format-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.use-case-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:3px solid #0ea5e9;padding:1rem;border-radius:8px;margin-bottom:1rem;color:#0369a1}.format-example[_ngcontent-%COMP%]{background:#1e293b;padding:1.5rem;border-radius:8px}.format-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e2e8f0;margin-bottom:.75rem}.format-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e2e8f0;margin:0;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap}.requirement-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.requirement-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.requirement-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78350f;line-height:1.6}.requirement-text[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b;font-style:italic;color:#92400e}.requirement-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.sample-output[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.85rem;line-height:1.5;white-space:pre-wrap;overflow-x:auto}.testcase-box[_ngcontent-%COMP%]{background:#1e293b;border-left:4px solid #3b82f6;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.testcase-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#93c5fd;font-size:1.25rem;font-weight:700;margin-bottom:1rem}.testcase-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d1d5db;font-weight:600}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;font-weight:400;margin-left:.5rem}.testcase-text[_ngcontent-%COMP%]{background:#fff;color:#1e293b;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap;margin:0}.testcases-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.testcases-list[_ngcontent-%COMP%]{background:#f0f9ff;padding:1.5rem 1.5rem 1.5rem 2.5rem;border-radius:8px;border-left:3px solid #0ea5e9;color:#0c4a6e;line-height:1.8}.testcases-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.pros-cons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1rem}.pros-box[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px}.pros-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#166534;margin-bottom:.75rem}.pros-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.cons-box[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px}.cons-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#991b1b;margin-bottom:.75rem}.cons-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";position:absolute;left:0;color:#ef4444;font-weight:700}@media (max-width: 768px){.pros-cons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.final-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-top:2rem;text-align:center}.final-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;font-size:2rem;margin-bottom:1rem}.final-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f2937;font-size:1.1rem;margin-bottom:.75rem;line-height:1.6}.final-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#78350f;font-weight:700}',".slide-intro[_ngcontent-%COMP%]{color:#4b5563;font-size:1.05rem;margin-bottom:1.5rem;line-height:1.7;max-width:860px}.station-badge[_ngcontent-%COMP%]{display:inline-block;background:#6366f11f;color:#6366f1;border:1px solid rgba(99,102,241,.3);border-radius:99px;padding:.35rem 1rem;font-size:.78rem;font-weight:700;letter-spacing:.04em;margin-bottom:1.25rem}.title-icon[_ngcontent-%COMP%]{font-size:4rem;margin-bottom:.5rem}.title-subtitle[_ngcontent-%COMP%]{color:#6b7280;font-size:1.2rem;margin-bottom:1.5rem}.title-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem;justify-content:center}.pill[_ngcontent-%COMP%]{padding:.35rem .9rem;border-radius:99px;font-size:.82rem;font-weight:600}.pill-blue[_ngcontent-%COMP%]{background:#3b82f61f;color:#3b82f6;border:1px solid rgba(59,130,246,.3)}.pill-yellow[_ngcontent-%COMP%]{background:#f59e0b1f;color:#f59e0b;border:1px solid rgba(245,158,11,.3)}.pill-green[_ngcontent-%COMP%]{background:#22c55e1f;color:#22c55e;border:1px solid rgba(34,197,94,.3)}.pill-purple[_ngcontent-%COMP%]{background:#a855f71f;color:#a855f7;border:1px solid rgba(168,85,247,.3)}.pill-red[_ngcontent-%COMP%]{background:#ef44441f;color:#ef4444;border:1px solid rgba(239,68,68,.3)}.title-meta[_ngcontent-%COMP%]{display:flex;gap:2rem;justify-content:center;margin-bottom:1.25rem;flex-wrap:wrap}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;color:#6b7280;font-size:.9rem}.meta-icon[_ngcontent-%COMP%]{font-size:1.1rem}.title-prereq-note[_ngcontent-%COMP%]{background:#f59e0b14;border:1px solid rgba(245,158,11,.25);border-radius:10px;padding:.75rem 1.25rem;color:#92400e;font-size:.9rem}.inline-link[_ngcontent-%COMP%]{color:#6366f1;text-decoration:underline;font-weight:600}.code-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:0}.tab-btn[_ngcontent-%COMP%]{padding:.45rem 1rem;border-radius:8px 8px 0 0;font-size:.82rem;font-weight:600;background:#f1f5f9;color:#6b7280;border:1px solid #e2e8f0;border-bottom:none;transition:all .2s;cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0;color:#374151}.tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.code-block-wrapper[_ngcontent-%COMP%]{width:100%;border-radius:0 10px 10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:1rem}.code-block[_ngcontent-%COMP%]{background:#1e1e2e;color:#cdd6f4;font-family:Fira Code,Cascadia Code,Consolas,monospace;font-size:.82rem;line-height:1.6;padding:1.25rem 1.5rem;margin:0;white-space:pre;overflow-x:auto}.code-block-header[_ngcontent-%COMP%]{background:#2a2a3e;color:#94a3b8;font-size:.78rem;font-weight:600;padding:.5rem 1rem;border-bottom:1px solid #3d3d5c}.output-block[_ngcontent-%COMP%]{background:#0f172a;border-top:1px solid #1e293b;padding:.85rem 1.25rem}.output-label[_ngcontent-%COMP%]{color:#4ade80;font-size:.75rem;font-weight:700;display:block;margin-bottom:.4rem;letter-spacing:.05em}.output-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#94a3b8;font-family:Fira Code,monospace;font-size:.8rem;margin:0;white-space:pre-wrap}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;margin-bottom:1.25rem}.theory-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid;border-radius:0 10px 10px 0;padding:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:700;margin:.4rem 0 .3rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4b5563;font-size:.85rem;line-height:1.5;margin:0}.theory-icon[_ngcontent-%COMP%]{font-size:1.5rem}.comparison-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:1rem}.mini-card[_ngcontent-%COMP%]{flex:1;min-width:150px;background:#f1f5f9;border-radius:10px;padding:.75rem 1rem;border:1px solid #e2e8f0}.mini-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.3rem}.mini-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6b7280;font-size:.82rem;margin:0;line-height:1.5}.highlight-box[_ngcontent-%COMP%]{background:#6366f112;border:1px solid rgba(99,102,241,.2);border-radius:10px;padding:.85rem 1.25rem;color:#374151;font-size:.9rem;margin-top:1rem;line-height:1.6}.tip-box[_ngcontent-%COMP%]{background:#3b82f612;border:1px solid rgba(59,130,246,.2);border-radius:10px;padding:.85rem 1.25rem;color:#1e3a5f;font-size:.9rem;line-height:1.6;margin-top:.75rem}.warning-box[_ngcontent-%COMP%]{background:#f59e0b12;border:1px solid rgba(245,158,11,.25);border-radius:10px;padding:.85rem 1.25rem;color:#78350f;font-size:.9rem;line-height:1.6;margin-top:.75rem}.inline-code[_ngcontent-%COMP%]{background:#f1f5f9;color:#0f172a;border:1px solid #e2e8f0;border-radius:4px;padding:.1rem .4rem;font-family:Fira Code,monospace;font-size:.82rem}.perf-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem;margin-bottom:1.25rem}@media (max-width: 900px){.perf-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.perf-title[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:700;margin-bottom:.5rem}.perf-rules[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:1rem 1.25rem}.perf-rules[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:700;margin-bottom:.75rem}.rules-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.6rem}.rule-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem;padding:.6rem .85rem;border-radius:8px}.rule-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4b5563;font-size:.82rem;margin:0}.rule-do[_ngcontent-%COMP%]{background:#22c55e12;border:1px solid rgba(34,197,94,.2)}.rule-dont[_ngcontent-%COMP%]{background:#ef444412;border:1px solid rgba(239,68,68,.2)}.rule-badge[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;border-radius:4px;padding:.1rem .4rem;width:fit-content;letter-spacing:.03em}.rule-badge.do[_ngcontent-%COMP%]{background:#22c55e26;color:#15803d}.rule-badge.dont[_ngcontent-%COMP%]{background:#ef444426;color:#b91c1c}.cleaning-strategies[_ngcontent-%COMP%]{margin-top:1rem;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:1rem 1.25rem}.cleaning-strategies[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:.95rem;font-weight:700;margin-bottom:.75rem}.challenge-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem}.challenge-tab-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.55rem 1rem;border-radius:8px;background:#f1f5f9;color:#374151;font-size:.85rem;font-weight:600;border:1px solid #e2e8f0;cursor:pointer;transition:all .18s}.challenge-tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0}.challenge-tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.challenge-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid;border-radius:0 12px 12px 0;padding:1.25rem 1.5rem;margin-bottom:1rem}.challenge-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.05rem;font-weight:700;margin:0}.challenge-description[_ngcontent-%COMP%]{color:#4b5563;font-size:.9rem;line-height:1.65;margin-bottom:.85rem}.hints-box[_ngcontent-%COMP%]{background:#3b82f612;border:1px solid rgba(59,130,246,.2);border-radius:8px;padding:.75rem 1rem;font-size:.88rem}.hints-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.4rem 0 0 1.1rem;padding:0}.hints-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#374151;margin-bottom:.3rem;line-height:1.5}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;border-radius:99px;padding:.4rem 1.2rem;font-size:.78rem;font-weight:700;letter-spacing:.05em;margin-bottom:1rem}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.85rem;margin-bottom:1.25rem}.summary-item[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:flex-start;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:.85rem 1rem}.summary-icon[_ngcontent-%COMP%]{font-size:1.6rem;flex-shrink:0}.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e293b;font-size:.9rem;display:block;margin-bottom:.25rem}.summary-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6b7280;font-size:.82rem;margin:0;line-height:1.5}.next-station-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6366f114,#a855f714);border:1px solid rgba(99,102,241,.25);border-radius:14px;padding:1.5rem;margin-bottom:1rem}.next-station-label[_ngcontent-%COMP%]{color:#6366f1;font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.4rem}.next-station-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.2rem;font-weight:800;margin-bottom:.5rem}.next-station-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4b5563;font-size:.9rem;line-height:1.65;margin-bottom:1rem}.next-station-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;background:#6366f1;color:#fff;border-radius:8px;padding:.6rem 1.25rem;font-size:.9rem;font-weight:700;text-decoration:none;transition:background .2s}.next-station-btn[_ngcontent-%COMP%]:hover{background:#4f46e5}.resource-link[_ngcontent-%COMP%]{color:#6366f1;font-weight:600;text-decoration:underline}.resource-link[_ngcontent-%COMP%]:hover{color:#4f46e5}"]})};export{w as L1NumpyPandasComponent};
