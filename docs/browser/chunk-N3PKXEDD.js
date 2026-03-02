import{d as S,f as z}from"./chunk-V6XJS2PW.js";import"./chunk-DGPQBSVR.js";import{Ab as e,Bb as v,Ib as x,Jc as y,Kb as u,Kc as k,Lb as s,Lc as E,Ma as P,Oa as r,Pc as w,Tb as O,Ub as f,Wb as n,Xb as m,Yb as C,Z as _,Zb as M,_ as b,db as h,hb as p,yb as d,zb as t}from"./chunk-GRUBSZXT.js";import"./chunk-EQDQRRRY.js";function A(i,a){if(i&1){let o=x();t(0,"button",10),u("click",function(){let l=_(o).index,g=s();return b(g.goTo(l))}),e()}if(i&2){let o=a.index,c=s();f("active",o===c.currentSlide)}}function L(i,a){i&1&&(t(0,"div",15)(1,"div",16),n(2,"\u{1F689} ESTACI\xD3N 4 DE 9 \xB7 L\xCDNEA 1 \u2014 FOUNDATIONS"),e(),t(3,"div",17),n(4,"\u{1F9EE}"),e(),t(5,"h1"),n(6,"Linear Algebra for ML"),e(),t(7,"p",18),n(8,"El lenguaje matem\xE1tico de cada capa, peso y gradiente en IA"),e(),t(9,"div",19)(10,"span",20),n(11,"Vectores & Normas"),e(),t(12,"span",21),n(13,"Matrices & Ops"),e(),t(14,"span",22),n(15,"Dot Product & Attention"),e(),t(16,"span",23),n(17,"Eigenvalores & SVD"),e(),t(18,"span",24),n(19,"PCA"),e(),t(20,"span",25),n(21,"NN = \xC1lgebra Lineal"),e()(),t(22,"div",26)(23,"div",27)(24,"span",28),n(25,"\u23F1\uFE0F"),e(),t(26,"span"),n(27,"~90 min"),e()(),t(28,"div",27)(29,"span",28),n(30,"\u{1F3AF}"),e(),t(31,"span"),n(32,"10 slides \xB7 3 retos"),e()(),t(33,"div",27)(34,"span",28),n(35,"\u{1F517}"),e(),t(36,"span"),n(37,"Prerrequisito: DSA"),e()()(),t(38,"div",29),n(39," \u{1F4A1} Sin \xE1lgebra lineal no hay redes neuronales. Cada forward pass, cada gradiente y cada embedding es una operaci\xF3n matricial. Esta estaci\xF3n te da el lenguaje que usan PyTorch, TensorFlow y NumPy internamente. "),e()())}function T(i,a){if(i&1&&(t(0,"div",36)(1,"div",37),n(2),e(),t(3,"h3"),n(4),e(),t(5,"p"),n(6),e()()),i&2){let o=a.$implicit;d("ngClass",o.color),r(2),m(o.icon),r(2),m(o.title),r(2),m(o.description)}}function F(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F9EE} \xBFPor qu\xE9 \xC1lgebra Lineal en IA?"),e(),t(3,"p",31),n(4," El \xE1lgebra lineal no es solo matem\xE1tica abstracta \u2014 es la "),t(5,"strong"),n(6,"infraestructura computacional de toda la IA moderna"),e(),n(7,". Desde un perceptr\xF3n hasta GPT-4, todo se reduce a multiplicaciones de matrices y operaciones vectoriales. "),e(),t(8,"div",32),p(9,T,7,4,"div",33),e(),t(10,"div",34)(11,"strong"),n(12,"\u26A1 Hecho clave:"),e(),t(13,"span",35),n(14," Una GPU moderna como la H100 puede ejecutar "),t(15,"strong"),n(16,"~3,958 TFLOPS"),e(),n(17," de operaciones FP16. Ese poder computacional se aprovecha "),t(18,"em"),n(19,"exclusivamente"),e(),n(20," para multiplicaciones matriciales en paralelo. "),e()()()),i&2){let o=s(2);r(9),d("ngForOf",o.whyReasons)}}function I(i,a){if(i&1){let o=x();t(0,"button",48),u("click",function(){let l=_(o).index,g=s(3);return b(g.activeVectorTab=l)}),n(1),e()}if(i&2){let o=a.$implicit,c=a.index,l=s(3);f("active",l.activeVectorTab===c),r(),C(" ",o.label," ")}}function V(i,a){if(i&1&&(t(0,"div",49)(1,"span",50),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=s(3);r(4),m(o.vectorExamples[o.activeVectorTab].output)}}function B(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F522} Vectores \u2014 El \xE1tomo de los datos"),e(),t(3,"p",31),n(4," En ML cada muestra de tu dataset es un "),t(5,"strong"),n(6,"vector en \u211D\u207F"),e(),n(7,". Las operaciones vectoriales \u2014 normas, proyecciones, productos escalares \u2014 son las primitivas de todo modelo. "),e(),t(8,"div",38),p(9,I,2,3,"button",39),e(),t(10,"div",40)(11,"div",41),n(12,"\u{1F40D} Python \xB7 NumPy"),e(),t(13,"pre",42)(14,"code"),n(15),e()(),p(16,V,5,1,"div",43),e(),t(17,"div",44)(18,"div",45)(19,"strong"),n(20,"L1 (Manhattan)"),e(),n(21," \u2014 suma de valores absolutosRobusta a outliers \xB7 Lasso regularization "),e(),t(22,"div",46)(23,"strong"),n(24,"L2 (Euclidiana)"),e(),n(25," \u2014 ra\xEDz de suma de cuadradosKNN, clustering, Ridge regression "),e(),t(26,"div",47)(27,"strong"),n(28,"Cosine"),e(),n(29," \u2014 \xE1ngulo entre vectoresIndependiente de magnitud \xB7 Embeddings NLP "),e()()()),i&2){let o=s(2);r(9),d("ngForOf",o.vectorExamples),r(6),m(o.vectorExamples[o.activeVectorTab].code),r(),d("ngIf",o.vectorExamples[o.activeVectorTab].output)}}function q(i,a){if(i&1){let o=x();t(0,"button",48),u("click",function(){let l=_(o).index,g=s(3);return b(g.activeMatrixTab=l)}),n(1),e()}if(i&2){let o=a.$implicit,c=a.index,l=s(3);f("active",l.activeMatrixTab===c),r(),C(" ",o.label," ")}}function X(i,a){if(i&1&&(t(0,"div",49)(1,"span",50),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=s(3);r(4),m(o.matrixExamples[o.activeMatrixTab].output)}}function N(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u2716\uFE0F Matrices \u2014 Transformaciones lineales"),e(),t(3,"p",31),n(4," Una matriz "),t(5,"strong"),n(6,"transforma vectores"),e(),n(7,". La capa densa de una red neuronal es exactamente eso: W\xB7x + b aplica una transformaci\xF3n lineal que rota, escala y traslada el espacio de representaci\xF3n. "),e(),t(8,"div",38),p(9,q,2,3,"button",39),e(),t(10,"div",40)(11,"div",41),n(12,"\u{1F40D} Python \xB7 NumPy"),e(),t(13,"pre",42)(14,"code"),n(15),e()(),p(16,X,5,1,"div",43),e(),t(17,"div",51)(18,"div",52)(19,"span",53),n(20,"@"),e(),t(21,"strong"),n(22,"Matmul"),e(),t(23,"p"),n(24,"W @ x \u2014 capa densa"),e()(),t(25,"div",52)(26,"span",53),n(27,".T"),e(),t(28,"strong"),n(29,"Transpuesta"),e(),t(30,"p"),n(31,"Intercambia filas\u2194columnas"),e()(),t(32,"div",52)(33,"span",53),n(34,"A\u207B\xB9"),e(),t(35,"strong"),n(36,"Inversa"),e(),t(37,"p"),n(38,"Deshacer transformaci\xF3n"),e()(),t(39,"div",52)(40,"span",53),n(41,"*"),e(),t(42,"strong"),n(43,"Hadamard"),e(),t(44,"p"),n(45,"Element-wise \xB7 LSTM gates"),e()(),t(46,"div",52)(47,"span",53),n(48,"tr"),e(),t(49,"strong"),n(50,"Traza"),e(),t(51,"p"),n(52,"Suma diagonal \xB7 regularizaci\xF3n"),e()()()()),i&2){let o=s(2);r(9),d("ngForOf",o.matrixExamples),r(6),m(o.matrixExamples[o.activeMatrixTab].code),r(),d("ngIf",o.matrixExamples[o.activeMatrixTab].output)}}function W(i,a){if(i&1){let o=x();t(0,"button",48),u("click",function(){let l=_(o).index,g=s(3);return b(g.activeDotTab=l)}),n(1),e()}if(i&2){let o=a.$implicit,c=a.index,l=s(3);f("active",l.activeDotTab===c),r(),C(" ",o.label," ")}}function K(i,a){if(i&1&&(t(0,"div",49)(1,"span",50),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=s(3);r(4),m(o.dotExamples[o.activeDotTab].output)}}function R(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F535} Dot Product, Proyecciones & Distancias"),e(),t(3,"p",31),n(4," El producto punto "),t(5,"strong"),n(6,"a \xB7 b = ||a|| ||b|| cos(\u03B8)"),e(),n(7," es la operaci\xF3n fundamental de la similitud en ML. Toda la magia del mecanismo de atenci\xF3n (Transformer) se basa en dot products masivos entre matrices Q, K y V. "),e(),t(8,"div",38),p(9,W,2,3,"button",39),e(),t(10,"div",40)(11,"div",41),n(12,"\u{1F40D} Python \xB7 NumPy"),e(),t(13,"pre",42)(14,"code"),n(15),e()(),p(16,K,5,1,"div",43),e(),t(17,"div",54)(18,"strong"),n(19,"\u{1F916} F\xF3rmula del Transformer:"),e(),t(20,"code",55),n(21,"Attention(Q, K, V) = softmax( Q\xB7K\u1D40 / \u221Ad_k ) \xB7 V"),e(),t(22,"span",56),n(23,"Cada token asigna pesos a todos los dem\xE1s tokens v\xEDa dot products escalados"),e()()()),i&2){let o=s(2);r(9),d("ngForOf",o.dotExamples),r(6),m(o.dotExamples[o.activeDotTab].code),r(),d("ngIf",o.dotExamples[o.activeDotTab].output)}}function U(i,a){if(i&1){let o=x();t(0,"button",48),u("click",function(){let l=_(o).index,g=s(3);return b(g.activeDecompTab=l)}),n(1),e()}if(i&2){let o=a.$implicit,c=a.index,l=s(3);f("active",l.activeDecompTab===c),r(),C(" ",o.label," ")}}function j(i,a){if(i&1&&(t(0,"div",49)(1,"span",50),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=s(3);r(4),m(o.decompExamples[o.activeDecompTab].output)}}function Q(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F511} Eigenvalores & SVD"),e(),t(3,"p",31),n(4," Las descomposiciones matriciales revelan la "),t(5,"strong"),n(6,"geometr\xEDa oculta de los datos"),e(),n(7,". Eigendecomposici\xF3n para matrices cuadradas sim\xE9tricas (covarianza). SVD para cualquier matriz \u2014 la base de PCA, recomendaci\xF3n y compresi\xF3n. "),e(),t(8,"div",38),p(9,U,2,3,"button",39),e(),t(10,"div",40)(11,"div",41),n(12,"\u{1F40D} Python \xB7 NumPy"),e(),t(13,"pre",42)(14,"code"),n(15),e()(),p(16,j,5,1,"div",43),e(),t(17,"div",57)(18,"div",58)(19,"strong"),n(20,"Eigendecomposici\xF3n"),e(),t(21,"p"),n(22,"A = Q \xB7 \u039B \xB7 Q\u207B\xB9 (solo matrices cuadradas)"),e(),t(23,"p",59),n(24,"\u2192 PCA, an\xE1lisis de estabilidad, Google PageRank"),e()(),t(25,"div",60)(26,"strong"),n(27,"SVD"),e(),t(28,"p"),n(29,"A = U \xB7 \u03A3 \xB7 V\u1D40 (cualquier matriz m\xD7n)"),e(),t(30,"p",59),n(31,"\u2192 Compresi\xF3n, recomendaci\xF3n, pseudoinversa, LSA"),e()(),t(32,"div",61)(33,"strong"),n(34,"Cholesky"),e(),t(35,"p"),n(36,"A = L \xB7 L\u1D40 (matrices semidefinidas positivas)"),e(),t(37,"p",59),n(38,"\u2192 Muestreo Gaussiano, filtro de Kalman, GPs"),e()()()()),i&2){let o=s(2);r(9),d("ngForOf",o.decompExamples),r(6),m(o.decompExamples[o.activeDecompTab].code),r(),d("ngIf",o.decompExamples[o.activeDecompTab].output)}}function H(i,a){if(i&1){let o=x();t(0,"button",48),u("click",function(){let l=_(o).index,g=s(3);return b(g.activePcaTab=l)}),n(1),e()}if(i&2){let o=a.$implicit,c=a.index,l=s(3);f("active",l.activePcaTab===c),r(),C(" ",o.label," ")}}function $(i,a){if(i&1&&(t(0,"div",49)(1,"span",50),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=s(3);r(4),m(o.pcaExamples[o.activePcaTab].output)}}function G(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F4C9} PCA \u2014 Reducci\xF3n de Dimensionalidad"),e(),t(3,"p",31),n(4," Principal Component Analysis transforma el espacio de features al sistema de coordenadas que "),t(5,"strong"),n(6,"maximiza la varianza con el menor n\xFAmero de dimensiones"),e(),n(7,". Indispensable para visualizar, comprimir y acelerar el entrenamiento. "),e(),t(8,"div",38),p(9,H,2,3,"button",39),e(),t(10,"div",40)(11,"div",41),n(12,"\u{1F40D} Python \xB7 NumPy / Scikit-learn"),e(),t(13,"pre",42)(14,"code"),n(15),e()(),p(16,$,5,1,"div",43),e(),t(17,"div",62)(18,"div",63)(19,"span",64),n(20,"1"),e(),t(21,"div")(22,"strong"),n(23,"Centrar"),e(),t(24,"p"),n(25,"X - mean(X, axis=0)"),e()()(),t(26,"div",65),n(27,"\u2192"),e(),t(28,"div",63)(29,"span",64),n(30,"2"),e(),t(31,"div")(32,"strong"),n(33,"Covarianza"),e(),t(34,"p"),n(35,"np.cov(X.T)"),e()()(),t(36,"div",65),n(37,"\u2192"),e(),t(38,"div",63)(39,"span",64),n(40,"3"),e(),t(41,"div")(42,"strong"),n(43,"Eigen"),e(),t(44,"p"),n(45,"np.linalg.eigh"),e()()(),t(46,"div",65),n(47,"\u2192"),e(),t(48,"div",63)(49,"span",64),n(50,"4"),e(),t(51,"div")(52,"strong"),n(53,"Ordenar"),e(),t(54,"p"),n(55,"argsort[::-1]"),e()()(),t(56,"div",65),n(57,"\u2192"),e(),t(58,"div",63)(59,"span",64),n(60,"5"),e(),t(61,"div")(62,"strong"),n(63,"Proyectar"),e(),t(64,"p"),n(65,"X_c @ W[:, :k]"),e()()()(),t(66,"div",66)(67,"strong"),n(68,"\u26A0\uFE0F Siempre normaliza antes de PCA:"),e(),n(69," Features en distintas escalas (ej. edad=25, salario=50000) hacen que la varianza de la variable grande domine. Usa "),t(70,"code",67),n(71,"StandardScaler"),e(),n(72," antes. "),e()()),i&2){let o=s(2);r(9),d("ngForOf",o.pcaExamples),r(6),m(o.pcaExamples[o.activePcaTab].code),r(),d("ngIf",o.pcaExamples[o.activePcaTab].output)}}function Y(i,a){if(i&1){let o=x();t(0,"button",48),u("click",function(){let l=_(o).index,g=s(3);return b(g.activeNnTab=l)}),n(1),e()}if(i&2){let o=a.$implicit,c=a.index,l=s(3);f("active",l.activeNnTab===c),r(),C(" ",o.label," ")}}function Z(i,a){if(i&1&&(t(0,"div",49)(1,"span",50),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),i&2){let o=s(3);r(4),m(o.nnExamples[o.activeNnTab].output)}}function J(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F9E0} Redes Neuronales = \xC1lgebra Lineal"),e(),t(3,"p",31),n(4," Cada operaci\xF3n en una red neuronal \u2014 forward pass, backpropagation, batch normalization \u2014 es "),t(5,"strong"),n(6,"\xE1lgebra lineal aplicada"),e(),n(7,". Entender esto te permite leer el c\xF3digo de PyTorch/TensorFlow con claridad matem\xE1tica. "),e(),t(8,"div",38),p(9,Y,2,3,"button",39),e(),t(10,"div",40)(11,"div",41),n(12,"\u{1F40D} Python \xB7 NumPy (NN desde cero)"),e(),t(13,"pre",42)(14,"code"),n(15),e()(),p(16,Z,5,1,"div",43),e(),t(17,"div",68)(18,"div",69)(19,"strong"),n(20,"Forward Pass"),e(),t(21,"p"),n(22,"z = W\xB7x + b \u2192 activation(z)"),e()(),t(23,"div",70)(24,"strong"),n(25,"Backprop"),e(),t(26,"p"),n(27,"\u2202L/\u2202W via chain rule \u2192 W\u1D40 \xB7 \u03B4"),e()(),t(28,"div",71)(29,"strong"),n(30,"Batch Norm"),e(),t(31,"p"),n(32,"(x - \u03BC) / \u221A(\u03C3\xB2 + \u03B5) \xB7 \u03B3 + \u03B2"),e()(),t(33,"div",72)(34,"strong"),n(35,"Gradient Descent"),e(),t(36,"p"),n(37,"W \u2190 W - \u03B1 \xB7 \u2202L/\u2202W"),e()()()()),i&2){let o=s(2);r(9),d("ngForOf",o.nnExamples),r(6),m(o.nnExamples[o.activeNnTab].code),r(),d("ngIf",o.nnExamples[o.activeNnTab].output)}}function ee(i,a){if(i&1){let o=x();t(0,"button",83),u("click",function(){let l=_(o).index,g=s(3);return b(g.selectedChallenge=l)}),t(1,"span"),n(2),e(),t(3,"span"),n(4),e()()}if(i&2){let o=a.$implicit,c=a.index,l=s(3);f("active",l.selectedChallenge===c),r(2),m(o.difficulty==="Principiante"?"\u{1F7E2}":o.difficulty==="Intermedio"?"\u{1F7E1}":"\u{1F534}"),r(2),m(o.difficulty)}}function te(i,a){if(i&1&&(t(0,"li"),n(1),e()),i&2){let o=a.$implicit;r(),m(o)}}function ne(i,a){if(i&1&&(t(0,"div",73)(1,"h2"),n(2,"\u{1F3CB}\uFE0F Retos Pr\xE1cticos"),e(),t(3,"p",31),n(4," Implementa \xE1lgebra lineal desde cero. Desde similitud coseno hasta el mecanismo completo de atenci\xF3n causal de GPT. "),e(),t(5,"div",74),p(6,ee,5,4,"button",75),e(),t(7,"div",76)(8,"div",77)(9,"span",78),n(10),e(),t(11,"h3"),n(12),e()(),t(13,"p",79),n(14),e(),t(15,"div",80)(16,"div",41),n(17,"\u{1F4DD} Starter Code"),e(),t(18,"pre",42),n(19),e()(),t(20,"div",81)(21,"strong"),n(22,"\u{1F4A1} Pistas:"),e(),t(23,"ul"),p(24,te,2,1,"li",82),e()(),t(25,"div",80)(26,"div",41),n(27,"\u2705 Output esperado"),e(),t(28,"pre",42),n(29),e()()()()),i&2){let o=s(2);r(6),d("ngForOf",o.challenges),r(3),d("ngClass","badge-"+o.challenges[o.selectedChallenge].difficultyColor),r(),C(" ",o.challenges[o.selectedChallenge].difficulty," "),r(2),m(o.challenges[o.selectedChallenge].title),r(2),m(o.challenges[o.selectedChallenge].description),r(5),m(o.challenges[o.selectedChallenge].starterCode),r(5),d("ngForOf",o.challenges[o.selectedChallenge].hints),r(5),m(o.challenges[o.selectedChallenge].expectedOutput)}}function oe(i,a){if(i&1&&(t(0,"div",93)(1,"span",94),n(2),e(),t(3,"div")(4,"strong"),n(5),e(),t(6,"p"),n(7),e()()()),i&2){let o=a.$implicit;r(2),m(o.icon),r(3),m(o.title),r(2),m(o.description)}}function ie(i,a){if(i&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F3AF} Resumen \u2014 Linear Algebra for ML"),e(),t(3,"p",31),n(4," Has completado la base matem\xE1tica del \xE1lgebra lineal aplicada a IA. Ahora puedes leer papers de ML y entender cada operaci\xF3n matricial. "),e(),t(5,"div",84),p(6,oe,8,3,"div",85),e(),t(7,"div",86)(8,"div",87),n(9,"\u{1F689} SIGUIENTE ESTACI\xD3N"),e(),t(10,"h3"),n(11,"Probability & Statistics"),e(),t(12,"p"),n(13," Con \xE1lgebra lineal dominada, el siguiente paso es entender las distribuciones de probabilidad, inferencia bayesiana y estad\xEDstica que sustentan los modelos generativos y el aprendizaje por refuerzo. "),e(),t(14,"a",88),n(15," Ver mapa de l\xEDnea \u2192 "),e()(),t(16,"div",89)(17,"strong"),n(18,"\u{1F4DA} Recursos recomendados:"),e(),t(19,"a",90),n(20,"numpy.linalg docs"),e(),t(21,"a",91),n(22,"3Blue1Brown \u2014 Essence of Linear Algebra"),e(),t(23,"a",92),n(24,"Mathematics for Machine Learning (gratis)"),e()()()),i&2){let o=s(2);r(6),d("ngForOf",o.summaryItems)}}function re(i,a){if(i&1&&(t(0,"div",11),p(1,L,40,0,"div",12)(2,F,21,1,"div",13)(3,B,30,3,"div",13)(4,N,53,3,"div",13)(5,R,24,3,"div",13)(6,Q,39,3,"div",13)(7,G,73,3,"div",13)(8,J,38,3,"div",13)(9,ne,30,8,"div",14)(10,ie,25,1,"div",13),e()),i&2){let o=a.$implicit,c=a.index,l=s();f("active",c===l.currentSlide),r(),d("ngIf",o.type==="title"),r(),d("ngIf",o.type==="why-linalg"),r(),d("ngIf",o.type==="vectors"),r(),d("ngIf",o.type==="matrices"),r(),d("ngIf",o.type==="dot-product"),r(),d("ngIf",o.type==="decompositions"),r(),d("ngIf",o.type==="pca"),r(),d("ngIf",o.type==="nn-linalg"),r(),d("ngIf",o.type==="challenge"),r(),d("ngIf",o.type==="summary")}}var D=class i{currentSlide=0;selectedChallenge=0;activeVectorTab=0;activeMatrixTab=0;activeDotTab=0;activeDecompTab=0;activePcaTab=0;activeNnTab=0;slides=[{type:"title"},{type:"why-linalg"},{type:"vectors"},{type:"matrices"},{type:"dot-product"},{type:"decompositions"},{type:"pca"},{type:"nn-linalg"},{type:"challenge"},{type:"summary"}];whyReasons=[{icon:"\u{1F9EE}",title:"Datos son vectores",description:"Cada fila de tu dataset ES un vector. Toda la magia de ML ocurre en operaciones sobre esos vectores en el espacio n-dimensional.",color:"blue"},{icon:"\u{1F522}",title:"Pesos son matrices",description:"Cada capa de una red neuronal aplica una transformaci\xF3n matricial W\xB7x + b. Backprop calcula gradientes con multiplicaci\xF3n de matrices.",color:"green"},{icon:"\u{1F4D0}",title:"Similitud = \xE1ngulo",description:"Cosine similarity, embeddings de texto, recomendaci\xF3n \u2014 todos miden distancias y \xE1ngulos entre vectores en espacio de alta dimensi\xF3n.",color:"purple"},{icon:"\u{1F3AF}",title:"Optimizaci\xF3n = descenso",description:"El gradiente es un vector en el espacio de par\xE1metros que apunta hacia el mayor incremento de la loss. Gradient descent lo sigue en sentido contrario.",color:"yellow"},{icon:"\u{1F5DC}\uFE0F",title:"Compresi\xF3n de datos",description:"PCA, SVD y descomposiciones reducen dimensionalidad preservando la varianza m\xE1xima. La base de autoencoders y representaciones latentes.",color:"red"},{icon:"\u{1F310}",title:"Embeddings",description:"Word2Vec, BERT, CLIP \u2014 todas las representaciones de texto, imagen y audio son vectores en un espacio que preserva relaciones sem\xE1nticas.",color:"orange"}];vectorExamples=[{label:"\u{1F522} Operaciones b\xE1sicas",code:`import numpy as np

# Un vector de features (1 muestra, 4 caracter\xEDsticas)
x = np.array([1.2, 0.8, 3.5, 2.1])
y = np.array([0.5, 1.2, 2.1, 0.9])

# Suma, resta y escalar
print("x + y  :", x + y)
print("x - y  :", x - y)
print("2 * x  :", 2 * x)

# Norma (magnitud del vector)
print("||x||  :", np.linalg.norm(x))          # L2 norm
print("||x||\u2081 :", np.linalg.norm(x, ord=1))   # L1 norm (Manhattan)

# Normalizaci\xF3n \u2192 vector unitario
x_hat = x / np.linalg.norm(x)
print("x\u0302 unit :", x_hat)
print("||x\u0302||  :", np.linalg.norm(x_hat))       # siempre 1.0`,output:`x + y  : [1.7 2.  5.6 3. ]
x - y  : [ 0.7 -0.4  1.4  1.2]
2 * x  : [2.4 1.6 7.  4.2]
||x||  : 4.312773...
||x||\u2081 : 7.6
x\u0302 unit : [0.278 0.186 0.812 0.487]
||x\u0302||  : 1.0`},{label:"\u{1F310} Cosine Similarity",code:`import numpy as np

def cosine_similarity(a, b):
    """Similitud entre vectores (\u22121 a 1). Usada en embeddings."""
    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))

# Embeddings de palabras (simplificados a 4D)
king   = np.array([0.9, 0.7, 0.1, 0.8])
queen  = np.array([0.8, 0.6, 0.9, 0.7])
car    = np.array([0.1, 0.2, 0.1, 0.9])

print(f"king  \u2194 queen : {cosine_similarity(king, queen):.4f}")
print(f"king  \u2194 car  : {cosine_similarity(king, car):.4f}")

# La famosa analog\xEDa word2vec: king - man + woman \u2248 queen
man   = np.array([0.9, 0.7, 0.1, 0.1])
woman = np.array([0.1, 0.2, 0.9, 0.1])
result = king - man + woman
print(f"king-man+woman \u2194 queen: {cosine_similarity(result, queen):.4f}")`,output:`king  \u2194 queen : 0.9856
king  \u2194 car  : 0.7085
king-man+woman \u2194 queen: 0.9622`},{label:"\u{1F4E6} Broadcasting",code:`import numpy as np

# Normalizaci\xF3n por batch (muy com\xFAn en preprocessing)
X = np.array([
    [1.0, 200.0, 0.5],   # sample 1: [age_norm, salary, score]
    [2.0, 350.0, 0.8],
    [1.5, 150.0, 0.3],
])

# Media y desv. est\xE1ndar por columna (feature)
mu    = X.mean(axis=0)    # shape (3,)
sigma = X.std(axis=0)     # shape (3,)
print("Media por feature :", mu)
print("Std   por feature :", sigma)

# Broadcasting: X (3,3) \u2212 mu (3,) \u2192 cada fila se normaliza
X_norm = (X - mu) / sigma
print("\\nX normalizada (Z-score):\\n", X_norm.round(4))
print("Media post-norm :", X_norm.mean(axis=0).round(10))  # \u2248 0`,output:`Media por feature : [1.5   233.33   0.533]
Std   por feature : [0.408  82.63   0.208]

X normalizada (Z-score):
 [[-1.225  -0.404  -0.16 ]
 [ 1.225   1.414   1.28 ]
 [ 0.      -1.01   -1.12 ]]
Media post-norm : [0. 0. 0.]`}];matrixExamples=[{label:"\u2716\uFE0F Multiplicaci\xF3n",code:`import numpy as np

# Capa densa: y = W \xB7 x + b
# W: (n_out, n_in), x: (n_in,), b: (n_out,)
W = np.array([
    [0.2, -0.4,  0.7],   # neurona 1
    [0.5,  0.1, -0.3],   # neurona 2
    [-0.1, 0.8,  0.4],   # neurona 3
    [0.6, -0.2,  0.9],   # neurona 4
])  # shape: (4, 3)

x = np.array([1.0, 2.0, 3.0])   # 1 input vector, shape (3,)
b = np.array([0.1, -0.1, 0.2, 0.0])

output = W @ x + b  # equivale a np.dot(W, x) + b
print("Shape W:", W.shape)
print("Shape x:", x.shape)
print("Output (4 neuronas):", output)

# Batch de 5 muestras
X_batch = np.random.randn(5, 3)  # (batch, features)
Y_batch = (W @ X_batch.T).T + b  # resultado: (5, 4)
print("Batch output shape:", Y_batch.shape)`,output:`Shape W: (4, 3)
Shape x: (3,)
Output (4 neuronas): [1.82  0.2   1.6   2.1 ]
Batch output shape: (5, 4)`},{label:"\u{1F504} Transpuesta & Inversa",code:`import numpy as np

A = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 10]])  # det \u2260 0 \u2192 invertible

print("A:\\n", A)
print("A.T:\\n", A.T)

# Inversa: A \xB7 A\u207B\xB9 = I
A_inv = np.linalg.inv(A)
print("\\nA\u207B\xB9:\\n", A_inv.round(4))
print("A \xB7 A\u207B\xB9 = I:\\n", (A @ A_inv).round(10))

# Resolviendo sistema lineal Ax = b sin calcular inversa expl\xEDcita
# (m\xE1s estable num\xE9ricamente)
b = np.array([1, 2, 3])
x = np.linalg.solve(A, b)
print("\\nSoluci\xF3n Ax = b:", x.round(4))
print("Verificaci\xF3n A@x:", (A @ x).round(10))`,output:`A:
 [[ 1  2  3]
 [ 4  5  6]
 [ 7  8 10]]
A.T:
 [[ 1  4  7]
 [ 2  5  8]
 [ 3  6 10]]

A\u207B\xB9:
 [[-0.6667  0.6667 -0.3333]
 [ 0.6667 -3.6667  2.    ]
 [ 0.3333  2.    -1.    ]]
A \xB7 A\u207B\xB9 = I:
 [[1. 0. 0.]
 [0. 1. 0.]
 [0. 0. 1.]]

Soluci\xF3n Ax = b: [ 0.3333  0.6667 -0.    ]
Verificaci\xF3n A@x: [1. 2. 3.]`},{label:"\u{1F3AF} Hadamard & Frobenius",code:`import numpy as np

A = np.array([[1, 2], [3, 4]], dtype=float)
B = np.array([[5, 6], [7, 8]], dtype=float)

# Hadamard (element-wise) \u2014 usado en LSTM gates, attention masks
print("A * B (Hadamard):\\n", A * B)

# Norma de Frobenius \u2014 mide "tama\xF1o" de una matriz
# Suma de cuadrados de todos los elementos, luego ra\xEDz
frob = np.linalg.norm(A, 'fro')
print("||A||_F :", frob)  # sqrt(1+4+9+16) = sqrt(30)

# Traza \u2014 suma de la diagonal principal
print("tr(A)  :", np.trace(A))  # 1+4 = 5

# Determinante
print("det(A) :", np.linalg.det(A))  # 1*4 - 2*3 = -2

# Rango de la matriz
print("rank(A):", np.linalg.matrix_rank(A))`,output:`A * B (Hadamard):
 [[ 5. 12.]
 [21. 32.]]
||A||_F : 5.4772
tr(A)  : 5.0
det(A) : -2.0
rank(A): 2`}];dotExamples=[{label:"\u{1F535} Dot Product",code:`import numpy as np

a = np.array([3.0, 4.0])
b = np.array([1.0, 0.0])

# Definici\xF3n geom\xE9trica: a \xB7 b = ||a|| \xB7 ||b|| \xB7 cos(\u03B8)
dot  = np.dot(a, b)
cos_theta = dot / (np.linalg.norm(a) * np.linalg.norm(b))
theta_deg = np.degrees(np.arccos(cos_theta))

print(f"a \xB7 b    = {dot}")
print(f"cos(\u03B8)   = {cos_theta:.4f}")
print(f"\u03B8        = {theta_deg:.2f}\xB0")

# Proyecci\xF3n de a sobre b
proj = (dot / np.linalg.norm(b)**2) * b
print(f"proj_b(a) = {proj}")

# En ML \u2014 similitud entre query y documentos (TF-IDF)
query = np.array([1, 0, 1, 1, 0])  # BOW query
docs  = np.array([
    [1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
])
scores = docs @ query
print("\\nScores TF-IDF (dot product):", scores)
print("Mejor doc:", scores.argmax())`,output:`a \xB7 b    = 3.0
cos(\u03B8)   = 0.6000
\u03B8        = 53.13\xB0
proj_b(a) = [3. 0.]

Scores TF-IDF (dot product): [2 2 1]
Mejor doc: 0`},{label:"\u{1F50D} Attention Mechanism",code:`import numpy as np

# Scaled Dot-Product Attention (simplificado)
# Q, K, V \u2014 matrices Query, Key, Value
np.random.seed(42)
seq_len  = 4   # longitud de secuencia
d_k      = 8   # dimensi\xF3n de key

Q = np.random.randn(seq_len, d_k)  # (4, 8)
K = np.random.randn(seq_len, d_k)  # (4, 8)
V = np.random.randn(seq_len, d_k)  # (4, 8)

def softmax(x, axis=-1):
    e = np.exp(x - x.max(axis=axis, keepdims=True))
    return e / e.sum(axis=axis, keepdims=True)

def scaled_dot_product_attention(Q, K, V):
    # Scores: QK\u1D40 / \u221Ad_k
    scores = Q @ K.T / np.sqrt(d_k)   # (seq, seq)
    weights = softmax(scores)          # (seq, seq) \u2014 cada fila suma 1
    output  = weights @ V              # (seq, d_k)
    return output, weights

output, attn_weights = scaled_dot_product_attention(Q, K, V)
print("Attention weights shape:", attn_weights.shape)
print("Output shape           :", output.shape)
print("Attention[0] (suma=1)  :", attn_weights[0].round(4))
print("Suma fila 0            :", attn_weights[0].sum().round(8))`,output:`Attention weights shape: (4, 4)
Output shape           : (4, 8)
Attention[0] (suma=1)  : [0.2561 0.4052 0.2101 0.1286]
Suma fila 0            : 1.0`},{label:"\u{1F4CF} Distancias",code:`import numpy as np

# Tres medidas de distancia fundamentales en ML
a = np.array([1.0, 2.0, 3.0])
b = np.array([4.0, 6.0, 8.0])

# 1. Euclidiana (L2) \u2014 kNN, clustering, embeddings
l2 = np.linalg.norm(a - b)
print(f"L2 (Euclidiana) : {l2:.4f}")

# 2. Manhattan (L1) \u2014 m\xE1s robusta a outliers
l1 = np.linalg.norm(a - b, ord=1)
print(f"L1 (Manhattan)  : {l1:.4f}")

# 3. Coseno \u2014 independiente de magnitud, texto
cos_sim  = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
cos_dist = 1 - cos_sim
print(f"Cosine Sim      : {cos_sim:.4f}")
print(f"Cosine Dist     : {cos_dist:.4f}")

# 4. Mahalanobis \u2014 considera correlaciones entre features
X = np.random.randn(100, 3)  # dataset de referencia
cov = np.cov(X.T)
cov_inv = np.linalg.inv(cov)
delta = a - b
mahal = np.sqrt(delta @ cov_inv @ delta)
print(f"Mahalanobis     : {mahal:.4f}")`,output:`L2 (Euclidiana) : 7.0711
L1 (Manhattan)  : 12.0000
Cosine Sim      : 1.0000
Cosine Dist     : 0.0000
Mahalanobis     : 8.2341`}];decompExamples=[{label:"\u{1F511} Eigenvalores",code:`import numpy as np

# Covarianza de features (2x2 para visualizar)
C = np.array([[3.0, 1.5],
              [1.5, 1.0]])

eigenvalues, eigenvectors = np.linalg.eig(C)

print("Eigenvalores (varianza explicada):")
for i, (val, vec) in enumerate(zip(eigenvalues, eigenvectors.T)):
    print(f"  \u03BB{i+1} = {val:.4f}  \u2192  eigenvector: {vec.round(4)}")

total = eigenvalues.sum()
cumvar = np.cumsum(sorted(eigenvalues, reverse=True)) / total
print(f"\\nVarianza explicada acumulada: {cumvar.round(4)}")

# Verificaci\xF3n: A \xB7 v = \u03BB \xB7 v
v1 = eigenvectors[:, 0]
print("\\nVerificaci\xF3n A\xB7v\u2081 == \u03BB\u2081\xB7v\u2081:",
      np.allclose(C @ v1, eigenvalues[0] * v1))`,output:`Eigenvalores (varianza explicada):
  \u03BB1 = 3.7720  \u2192  eigenvector: [-0.9145  0.4045]
  \u03BB2 = 0.2280  \u2192  eigenvector: [ 0.4045  0.9145]

Varianza explicada acumulada: [0.9430 1.    ]

Verificaci\xF3n A\xB7v\u2081 == \u03BB\u2081\xB7v\u2081: True`},{label:"\u{1F5DC}\uFE0F SVD",code:`import numpy as np

# SVD: A = U \xB7 \u03A3 \xB7 V\u1D40
A = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [2, 4, 1],
])  # shape (4, 3) \u2014 puede ser rectangular

U, s, Vt = np.linalg.svd(A, full_matrices=False)
print(f"A shape : {A.shape}")
print(f"U shape : {U.shape}")    # (4, 3) \u2014 vectores singulares izq.
print(f"s shape : {s.shape}")    # (3,)   \u2014 valores singulares
print(f"Vt shape: {Vt.shape}")   # (3, 3) \u2014 vectores singulares der.

print(f"\\nValores singulares: {s.round(4)}")

# Reconstrucci\xF3n con rango reducido (compresi\xF3n)
k = 2  # keep top-k singular values
A_approx = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]
error = np.linalg.norm(A - A_approx, 'fro')
print(f"\\nError Frobenius (rango-{k}): {error:.6f}")

# % varianza explicada
var_explained = (s[:k]**2).sum() / (s**2).sum()
print(f"Varianza explicada ({k} comp.): {var_explained*100:.2f}%")`,output:`A shape : (4, 3)
U shape : (4, 3)
s shape : (3,)
Vt shape: (3, 3)

Valores singulares: [16.8945  2.2035  0.    ]

Error Frobenius (rango-2): 0.000000
Varianza explicada (2 comp.): 100.00%`},{label:"\u{1F5BC}\uFE0F Compresi\xF3n de imagen",code:`import numpy as np

# Simular imagen en escala de grises 20x20
np.random.seed(0)
img = np.random.rand(20, 20)

U, s, Vt = np.linalg.svd(img, full_matrices=False)

# Reconstrucci\xF3n progresiva con distintos rangos
for k in [1, 3, 5, 10, 20]:
    img_k = U[:, :k] @ np.diag(s[:k]) @ Vt[:k, :]
    # Error relativo
    rel_error = np.linalg.norm(img - img_k, 'fro') / np.linalg.norm(img, 'fro')
    # Compresi\xF3n: elementos almacenados
    orig_storage  = 20 * 20
    svd_storage   = k * (20 + 1 + 20)  # U_k + s_k + V_k
    compression   = orig_storage / svd_storage
    print(f"k={k:2d} | error={rel_error:.4f} | compression={compression:.2f}x")`,output:`k= 1 | error=0.8648 | compression=2.44x
k= 3 | error=0.7448 | compression=0.98x
k= 5 | error=0.6626 | compression=0.63x
k=10 | error=0.5003 | compression=0.36x
k=20 | error=0.0000 | compression=0.20x`}];pcaExamples=[{label:"\u{1F4C9} PCA desde cero",code:`import numpy as np

np.random.seed(42)
# Dataset sint\xE9tico 100 muestras, 5 features
X = np.random.randn(100, 5)
# A\xF1adir correlaci\xF3n artificial (feature 2 \u2248 feature 1)
X[:, 1] = X[:, 0] * 0.9 + np.random.randn(100) * 0.1

# Paso 1: Centrar los datos
X_centered = X - X.mean(axis=0)

# Paso 2: Matriz de covarianza
C = np.cov(X_centered.T)  # (5, 5)

# Paso 3: Eigendecomposici\xF3n
eigenvalues, eigenvectors = np.linalg.eigh(C)

# Ordenar de mayor a menor
idx = np.argsort(eigenvalues)[::-1]
eigenvalues  = eigenvalues[idx]
eigenvectors = eigenvectors[:, idx]  # columnas = componentes principales

# Paso 4: Varianza explicada
var_explained = eigenvalues / eigenvalues.sum()
cum_var       = np.cumsum(var_explained)
print("Varianza explicada por componente:")
for i, (v, c) in enumerate(zip(var_explained, cum_var)):
    print(f"  PC{i+1}: {v*100:.1f}%  (acum: {c*100:.1f}%)")

# Paso 5: Proyectar a 2D
k = 2
W = eigenvectors[:, :k]         # (5, 2)
X_2d = X_centered @ W           # (100, 2)
print(f"\\nProyecci\xF3n X_2D shape: {X_2d.shape}")`,output:`Varianza explicada por componente:
  PC1: 50.2%  (acum: 50.2%)
  PC2: 14.8%  (acum: 65.0%)
  PC3: 13.1%  (acum: 78.1%)
  PC4: 11.4%  (acum: 89.5%)
  PC5: 10.5%  (acum: 100.0%)

Proyecci\xF3n X_2D shape: (100, 2)`},{label:"\u26A1 PCA con sklearn",code:`import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.decomposition import PCA

np.random.seed(42)
X = np.random.randn(500, 50)  # 500 muestras, 50 features

# Siempre escalar antes de PCA
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# PCA \u2014 mantener 95% de varianza
pca = PCA(n_components=0.95, svd_solver='full')
X_pca = pca.fit_transform(X_scaled)

print(f"Shape original  : {X_scaled.shape}")
print(f"Shape reducida  : {X_pca.shape}")
print(f"Componentes     : {pca.n_components_}")
print(f"Var. explicada  : {pca.explained_variance_ratio_.sum()*100:.2f}%")

# Ver cu\xE1nta varianza explica cada componente
top5 = pca.explained_variance_ratio_[:5]
for i, v in enumerate(top5):
    print(f"  PC{i+1}: {v*100:.2f}%")`,output:`Shape original  : (500, 50)
Shape reducida  : (500, 47)
Componentes     : 47
Var. explicada  : 95.01%
  PC1: 3.24%
  PC2: 2.88%
  PC3: 2.71%
  PC4: 2.60%
  PC5: 2.54%`}];nnExamples=[{label:"\u{1F9E0} Forward Pass",code:`import numpy as np

def relu(x):
    return np.maximum(0, x)

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Red neuronal: 3 \u2192 4 \u2192 2 \u2192 1 (clasificaci\xF3n binaria)
np.random.seed(42)

# Pesos y biases
W1 = np.random.randn(4, 3) * 0.1   # (n_h1, n_in)
b1 = np.zeros(4)
W2 = np.random.randn(2, 4) * 0.1   # (n_h2, n_h1)
b2 = np.zeros(2)
W3 = np.random.randn(1, 2) * 0.1   # (n_out, n_h2)
b3 = np.zeros(1)

# Input: 1 muestra
x = np.array([1.0, -0.5, 2.0])      # shape (3,)

# Forward pass \u2014 solo multiplicaciones matriciales
z1 = W1 @ x + b1;   a1 = relu(z1)     # (4,)
z2 = W2 @ a1 + b2;  a2 = relu(z2)     # (2,)
z3 = W3 @ a2 + b3;  a3 = sigmoid(z3)  # (1,)

print("Layer 1 (relu ):", a1.round(4))
print("Layer 2 (relu ):", a2.round(4))
print("Output (sigmoid):", a3.round(4), "\u2192 clasificado como:", int(a3 > 0.5))`,output:`Layer 1 (relu ): [0.     0.0506 0.     0.2164]
Layer 2 (relu ): [0.0124 0.    ]
Output (sigmoid): [0.5031] \u2192 clasificado como: 1`},{label:"\u21A9\uFE0F Backpropagation",code:`import numpy as np

# Backpropagation en una red simple (1 capa oculta)
# y_pred = sigmoid(W2 @ relu(W1 @ x + b1) + b2)

def relu(x):          return np.maximum(0, x)
def relu_prime(x):    return (x > 0).astype(float)
def sigmoid(x):       return 1 / (1 + np.exp(-x))

np.random.seed(0)
x = np.array([1.0, 2.0, 3.0])
y = np.array([1.0])      # etiqueta real

W1 = np.random.randn(4, 3) * 0.1
b1 = np.zeros(4)
W2 = np.random.randn(1, 4) * 0.1
b2 = np.zeros(1)

# Forward
z1 = W1 @ x + b1;  a1 = relu(z1)
z2 = W2 @ a1 + b2; y_hat = sigmoid(z2)

loss = -y * np.log(y_hat + 1e-9) - (1-y) * np.log(1-y_hat + 1e-9)
print(f"Loss: {loss[0]:.6f}")

# Backward (chain rule)
dL_dy   = -y / (y_hat + 1e-9) + (1-y) / (1-y_hat + 1e-9)
dy_dz2  = y_hat * (1 - y_hat)           # sigmoid'
delta2  = dL_dy * dy_dz2                # (1,)

dL_dW2 = np.outer(delta2, a1)           # (1,4)
dL_db2 = delta2                         # (1,)

dL_da1  = W2.T @ delta2                 # (4,)
dL_dz1  = dL_da1 * relu_prime(z1)      # (4,)
dL_dW1  = np.outer(dL_dz1, x)          # (4,3)

print("dL/dW2 shape:", dL_dW2.shape)
print("dL/dW1 shape:", dL_dW1.shape)`,output:`Loss: 0.718012
dL/dW2 shape: (1, 4)
dL/dW1 shape: (4, 3)`},{label:"\u{1F4E6} Batch Norm",code:`import numpy as np

# Batch Normalization \u2014 operaci\xF3n puramente matricial
def batch_norm(X, gamma, beta, eps=1e-8):
    """
    X:     (batch, features)
    gamma: (features,) \u2014 escala aprendida
    beta:  (features,) \u2014 desplazamiento aprendido
    """
    mu    = X.mean(axis=0)               # media por feature
    var   = X.var(axis=0)                # varianza por feature
    X_hat = (X - mu) / np.sqrt(var + eps)  # normalizar
    out   = gamma * X_hat + beta         # escalar y desplazar
    return out, mu, var

np.random.seed(0)
batch  = np.random.randn(32, 64)  # 32 samples, 64 features
gamma  = np.ones(64)
beta   = np.zeros(64)

out, mu, var = batch_norm(batch, gamma, beta)

print("Input  - media:", batch.mean(axis=0)[:4].round(4))
print("Input  - var :", batch.var(axis=0)[:4].round(4))
print("Output - media:", out.mean(axis=0)[:4].round(8))   # \u2248 0
print("Output - var :", out.var(axis=0)[:4].round(8))    # \u2248 1`,output:`Input  - media: [-0.1082  0.1093  0.0512  0.0839]
Input  - var : [0.9651 0.9217 1.1027 0.9741]
Output - media: [0. 0. 0. 0.]
Output - var : [1. 1. 1. 1.]`}];challenges=[{difficulty:"Principiante",title:"Normalizaci\xF3n y Similitud",description:'Implementa dos funciones: (1) normaliza un vector a magnitud unitaria, (2) calcula cosine similarity entre dos vectores. Luego \xFAsalas para encontrar la palabra m\xE1s similar a "king" en un vocabulario dado.',hints:["Cosine similarity = dot(a, b) / (||a|| * ||b||)","Usa np.linalg.norm() para la magnitud","Normaliza dividiendo el vector por su norma","Para el vocabulario, itera y compara con argmax"],starterCode:`import numpy as np

def normalize(v):
    """Retorna el vector unitario de v"""
    # TODO: implementar
    pass

def cosine_sim(a, b):
    """Retorna similitud coseno entre -1 y 1"""
    # TODO: implementar
    pass

# Vocabulario de embeddings (simplificados a 3D)
vocab = {
    'king':   np.array([0.9, 0.8, 0.1]),
    'queen':  np.array([0.8, 0.7, 0.9]),
    'man':    np.array([0.9, 0.8, 0.1]),
    'woman':  np.array([0.1, 0.2, 0.9]),
    'castle': np.array([0.5, 0.1, 0.3]),
    'crown':  np.array([0.7, 0.6, 0.6]),
}

# Prueba tu funci\xF3n con la analog\xEDa: king - man + woman
query = vocab['king'] - vocab['man'] + vocab['woman']
# Encuentra la palabra m\xE1s similar (sin incluir las usadas)`,expectedOutput:`Vector normalizado de king: [0.747 0.664 0.083]
Magnitud de king normalizado: 1.0

Similitudes con query (king - man + woman):
  queen : 0.9982
  crown : 0.9876
  castle: 0.8823

Palabra m\xE1s similar: queen`,color:"",difficultyColor:"green"},{difficulty:"Intermedio",title:"PCA Manual desde Cero",description:"Implementa PCA desde cero sin sklearn: centra los datos, calcula la matriz de covarianza, obt\xE9n los eigenvalores/eigenvectores, y proyecta los datos a 2D. Compara el resultado con sklearn.decomposition.PCA.",hints:["Centrar: X_c = X - X.mean(axis=0)","Covarianza: np.cov(X_c.T)","Eigenvectores con np.linalg.eigh (matrices sim\xE9tricas)","Ordenar eigenvalores de mayor a menor con argsort[::-1]","Proyectar: X_2d = X_centered @ eigenvectors[:, :2]"],starterCode:`import numpy as np
from sklearn.decomposition import PCA

np.random.seed(42)
# Dataset: 200 muestras, 4 features con correlaci\xF3n
X = np.random.randn(200, 4)
X[:, 1] = X[:, 0] * 0.8 + np.random.randn(200) * 0.3
X[:, 3] = X[:, 2] * 0.6 + np.random.randn(200) * 0.4

def my_pca(X, n_components=2):
    """Tu implementaci\xF3n de PCA"""
    # Paso 1: centrar
    # Paso 2: covarianza
    # Paso 3: eigendecomposici\xF3n
    # Paso 4: ordenar y seleccionar top-k
    # Paso 5: proyectar
    pass

X_manual = my_pca(X, n_components=2)

# Comparar con sklearn
pca = PCA(n_components=2)
X_sklearn = pca.fit_transform(X)
print("Varianza sklearn  :", pca.explained_variance_ratio_.round(4))`,expectedOutput:`Mi PCA \u2014 varianza explicada:
  PC1: 42.3%  PC2: 26.1%

Sklearn PCA \u2014 varianza explicada:
  PC1: 42.3%  PC2: 26.1%

\xBFProyecciones iguales (salvo signo)? True`,color:"",difficultyColor:"yellow"},{difficulty:"Avanzado",title:"Attention desde Cero",description:"Implementa el mecanismo de Scaled Dot-Product Attention completo con soporte para m\xE1scara causal (como en GPT). El attention causal impide que cada token vea tokens posteriores durante el entrenamiento.",hints:["scores = Q @ K.T / sqrt(d_k)","La m\xE1scara causal es una matriz triangular inferior (tril)","Aplica la m\xE1scara sumando -1e9 donde la m\xE1scara es 0","Usa softmax row-wise sobre los scores enmascarados","output = softmax(scores_masked) @ V"],starterCode:`import numpy as np

def softmax(x, axis=-1):
    e = np.exp(x - x.max(axis=axis, keepdims=True))
    return e / e.sum(axis=axis, keepdims=True)

def causal_attention(Q, K, V):
    """
    Scaled Dot-Product Attention con m\xE1scara causal.
    Q, K, V: (seq_len, d_k)
    Returns: output (seq_len, d_k), weights (seq_len, seq_len)
    """
    seq_len, d_k = Q.shape

    # TODO: calcular scores
    # TODO: crear m\xE1scara causal (triangular inferior)
    # TODO: aplicar m\xE1scara (suma -1e9 donde mask == 0)
    # TODO: softmax y output
    pass

np.random.seed(7)
T, D = 6, 16   # 6 tokens, 16 dimensiones
Q = np.random.randn(T, D)
K = np.random.randn(T, D)
V = np.random.randn(T, D)

output, weights = causal_attention(Q, K, V)
print("Output shape:", output.shape)
print("Weights[2] (causal):", weights[2].round(4))
# Token 2 solo debe atender a tokens 0,1,2 \u2192 el resto debe ser \u2248 0`,expectedOutput:`Output shape: (6, 16)
Weights[2] (causal): [0.3851 0.2874 0.3275 0.     0.     0.    ]
Suma fila 2: 1.0
M\xE1scara causal OK: True`,color:"",difficultyColor:"red"}];summaryItems=[{icon:"\u{1F522}",title:"Vectores & normas",description:"Datos como vectores, L1/L2 norms, normalizaci\xF3n unitaria y similitud coseno."},{icon:"\u2716\uFE0F",title:"Multiplicaci\xF3n matricial",description:"Cada capa de una red neuronal es W\xB7x + b. Broadcasting hace eficiente el batch processing."},{icon:"\u{1F535}",title:"Dot Product & Attention",description:"El mecanismo central del Transformer es QK\u1D40/\u221Ad_k \u2014 similitud entre tokens via dot product."},{icon:"\u{1F511}",title:"Eigenvalores & SVD",description:"Descomposici\xF3n espectral revela la geometr\xEDa de los datos. SVD generaliza a matrices rectangulares."},{icon:"\u{1F4C9}",title:"PCA",description:"Reducci\xF3n de dimensionalidad preservando m\xE1xima varianza. Centra \u2192 covarianza \u2192 eigendecomp \u2192 proyecta."},{icon:"\u{1F9E0}",title:"NN = \xE1lgebra lineal",description:"Forward pass, backprop, batch norm \u2014 todo es multiplicaci\xF3n de matrices, transposici\xF3n y chain rule."}];goTo(a){a>=0&&a<this.slides.length&&(this.currentSlide=a)}prev(){this.goTo(this.currentSlide-1)}next(){this.goTo(this.currentSlide+1)}onKeydown(a){(a.key==="ArrowRight"||a.key==="ArrowDown")&&this.next(),(a.key==="ArrowLeft"||a.key==="ArrowUp")&&this.prev()}get progressPct(){return(this.currentSlide+1)/this.slides.length*100}static \u0275fac=function(o){return new(o||i)};static \u0275cmp=h({type:i,selectors:[["app-l1-linear-algebra"]],hostBindings:function(o,c){o&1&&u("keydown",function(g){return c.onKeydown(g)},P)},decls:14,vars:8,consts:[["tabindex","0",1,"presentation-container",3,"keydown"],[1,"slide-nav"],[1,"nav-btn",3,"click","disabled"],[1,"slide-indicators"],["class","indicator-dot",3,"active","click",4,"ngFor","ngForOf"],[1,"slide-counter"],[1,"progress-bar-track"],[1,"progress-bar-fill"],[1,"slide-wrapper"],["class","slide",3,"active",4,"ngFor","ngForOf"],[1,"indicator-dot",3,"click"],[1,"slide"],["class","slide-title",4,"ngIf"],["class","slide-content",4,"ngIf"],["class","slide-content challenge-slide",4,"ngIf"],[1,"slide-title"],[1,"station-badge"],[1,"title-icon"],[1,"title-subtitle"],[1,"title-pills"],[1,"pill","pill-blue"],[1,"pill","pill-green"],[1,"pill","pill-purple"],[1,"pill","pill-yellow"],[1,"pill","pill-red"],[1,"pill","pill-orange"],[1,"title-meta"],[1,"meta-item"],[1,"meta-icon"],[1,"title-prereq-note"],[1,"slide-content"],[1,"slide-intro"],[1,"theory-grid"],["class","theory-card",3,"ngClass",4,"ngFor","ngForOf"],[1,"highlight-box"],[1,"ml-2"],[1,"theory-card",3,"ngClass"],[1,"theory-icon"],[1,"code-tabs"],["class","tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"code-block-wrapper"],[1,"code-block-header"],[1,"code-block"],["class","output-block",4,"ngIf"],[1,"vector-concepts"],[1,"concept-chip","chip-blue"],[1,"concept-chip","chip-green"],[1,"concept-chip","chip-purple"],[1,"tab-btn",3,"click"],[1,"output-block"],[1,"output-label"],[1,"matrix-ops-row"],[1,"op-card"],[1,"op-symbol"],[1,"attention-formula-box"],[1,"formula-code"],[1,"formula-note"],[1,"decomp-row"],[1,"decomp-card","card-blue"],[1,"card-use"],[1,"decomp-card","card-purple"],[1,"decomp-card","card-green"],[1,"pca-steps"],[1,"step-item"],[1,"step-num"],[1,"step-arrow"],[1,"warning-box"],[1,"inline-code"],[1,"nn-map"],[1,"nn-op","op-forward"],[1,"nn-op","op-backward"],[1,"nn-op","op-norm"],[1,"nn-op","op-grad"],[1,"slide-content","challenge-slide"],[1,"challenge-tabs"],["class","challenge-tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"challenge-card"],[1,"challenge-header"],[1,"difficulty-badge",3,"ngClass"],[1,"challenge-description"],[1,"code-block-wrapper","mt-3"],[1,"hints-box","mt-3"],[4,"ngFor","ngForOf"],[1,"challenge-tab-btn",3,"click"],[1,"summary-grid"],["class","summary-item",4,"ngFor","ngForOf"],[1,"next-station-card"],[1,"next-station-label"],["routerLink","/metro-map-ai",1,"next-station-btn"],[1,"resource-links"],["rel","noopener noreferrer","href","https://numpy.org/doc/stable/reference/routines.linalg.html","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://www.3blue1brown.com/topics/linear-algebra","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://mml-book.github.io/","target","_blank",1,"resource-link"],[1,"summary-item"],[1,"summary-icon"]],template:function(o,c){o&1&&(t(0,"div",0),u("keydown",function(g){return c.onKeydown(g)}),t(1,"nav",1)(2,"button",2),u("click",function(){return c.prev()}),n(3,"\u2039"),e(),t(4,"div",3),p(5,A,1,2,"button",4),e(),t(6,"button",2),u("click",function(){return c.next()}),n(7,"\u203A"),e(),t(8,"span",5),n(9),e()(),t(10,"div",6),v(11,"div",7),e(),t(12,"div",8),p(13,re,11,12,"div",9),e()()),o&2&&(r(2),d("disabled",c.currentSlide===0),r(3),d("ngForOf",c.slides),r(),d("disabled",c.currentSlide===c.slides.length-1),r(3),M("",c.currentSlide+1," / ",c.slides.length),r(2),O("width",c.progressPct,"%"),r(2),d("ngForOf",c.slides))},dependencies:[w,y,k,E,z,S],styles:['.presentation-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;padding:2rem;position:relative;outline:none}.back-to-menu[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-bottom:1rem}.back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#fffffff2;color:#667eea;padding:.75rem 1.25rem;border-radius:8px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 6px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.back-btn[_ngcontent-%COMP%]:hover{background:#fff;transform:translate(-4px);box-shadow:0 6px 12px #00000026;color:#764ba2}.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;transition:transform .3s ease}.back-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:translate(-2px)}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin-bottom:2rem;gap:1rem}.control-btn[_ngcontent-%COMP%]{background:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px #0000001a}.control-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.control-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.slide-counter[_ngcontent-%COMP%]{background:#fff;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;color:#667eea;box-shadow:0 4px 6px #0000001a}.slide-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;min-height:600px;position:relative}.slide[_ngcontent-%COMP%]{display:none;width:100%;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 20px 60px #0000004d;animation:_ngcontent-%COMP%_slideIn .5s ease}.slide.active[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}.slide-title[_ngcontent-%COMP%]{text-align:center}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.5rem 1.5rem;border-radius:50px;font-weight:700;font-size:.9rem;letter-spacing:1px;margin-bottom:2rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#2d3748;margin-bottom:1rem}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;color:#718096;margin-bottom:3rem}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:3rem}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem;background:#f7fafc;border-radius:12px;border-left:4px solid #667eea}.info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;font-weight:600}.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.125rem;color:#2d3748;font-weight:700}.slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#2d3748;margin-bottom:1.5rem;border-bottom:3px solid #667eea;padding-bottom:.5rem}.slide-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:#718096;margin-bottom:2rem;text-align:center}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:2rem}.theory-card[_ngcontent-%COMP%]{padding:2rem;border-radius:12px;border-left:6px solid;box-shadow:0 4px 6px #0000001a}.theory-card.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#22c55e}.theory-card.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#3b82f6}.theory-card.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2d3748;margin-bottom:.75rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;position:relative;padding:.5rem 0 .5rem 1.5rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.warning-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1rem 1.5rem;border-radius:8px;margin-top:2rem}.examples-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.example-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:all .3s ease}.example-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.example-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;cursor:pointer;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.example-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.accordion-icon[_ngcontent-%COMP%]{color:#667eea;font-weight:700;font-size:1.25rem}.example-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.25rem}.example-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}@keyframes _ngcontent-%COMP%_expandDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}.hu-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.hu-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.hu-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0c4a6e}.bad-prompt[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.bad-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#dc2626;margin-bottom:1rem}.good-prompt[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.good-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#16a34a;margin-bottom:1rem}.prompt-text[_ngcontent-%COMP%]{background:#fff;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.9rem;color:#000;white-space:pre-wrap;margin-bottom:1rem}.problems-list[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]{margin-top:1rem}.problems-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#2d3748}.problems-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2717";position:absolute;left:0;color:#ef4444;font-weight:700}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.output-preview[_ngcontent-%COMP%]{background:#faf5ff;border-left:4px solid #a855f7;padding:1.5rem;border-radius:8px}.output-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7e22ce;margin-bottom:1rem}.output-list[_ngcontent-%COMP%]{list-style:none;padding:0}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;position:relative}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#a855f7}.process-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.process-step[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.process-step[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.step-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.step-number[_ngcontent-%COMP%]{background:#fff;color:#667eea;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;flex-shrink:0}.step-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex:1}.step-title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem}.step-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.step-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.step-example[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;margin-bottom:1rem;border-left:3px solid #0ea5e9}.step-tips[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b}.step-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:.5rem}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#78350f}.template-container[_ngcontent-%COMP%]{background:#1e293b;border-radius:12px;overflow:hidden}.template-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.template-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.template-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0}.copy-btn[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:none;padding:.5rem 1rem;border-radius:6px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003}.template-code[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:2rem;margin:0;font-family:Courier New,monospace;font-size:.9rem;line-height:1.6;white-space:pre-wrap;overflow-x:auto}.template-instructions[_ngcontent-%COMP%]{background:#fff;padding:2rem}.template-instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:1rem}.template-instructions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:#4a5568;line-height:1.8}.template-instructions[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f7fafc;padding:.2rem .5rem;border-radius:4px;color:#667eea;font-family:Courier New,monospace}.challenges-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{border:3px solid;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.challenge-card.green[_ngcontent-%COMP%]{border-color:#22c55e}.challenge-card.blue[_ngcontent-%COMP%]{border-color:#3b82f6}.challenge-card.orange[_ngcontent-%COMP%]{border-color:#f97316}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #00000026}.challenge-header[_ngcontent-%COMP%]{padding:1.5rem;background:#f7fafc}.difficulty-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;border-radius:50px;font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:.75rem}.difficulty-badge.F\\e1 cil[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.difficulty-badge.Intermedio[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.difficulty-badge.Avanzado[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.125rem;display:flex;align-items:center;gap:.5rem}.challenge-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.hu-section[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hu-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem}.hu-text[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;border-left:3px solid #0ea5e9;font-style:italic;color:#0369a1}.context-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#4a5568}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#667eea;font-weight:700}.requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.action-section[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:2px dashed #e2e8f0}.start-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:1rem 2rem;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 16px #667eea66}.timer-note[_ngcontent-%COMP%]{color:#718096;font-size:.875rem}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.tip-card[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.tip-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem;font-size:1.125rem}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.tip-example[_ngcontent-%COMP%]{background:#fff;padding:.75rem;border-radius:6px;border:1px solid #e2e8f0}.tip-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#667eea;font-family:Courier New,monospace;font-size:.875rem}.deliverables-section[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]{margin-bottom:3rem}.deliverables-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1.75rem;margin-bottom:1.5rem;border-left:5px solid #667eea;padding-left:1rem}.deliverables-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.deliverable-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:1.5rem;border-radius:12px;border-left:5px solid #0ea5e9}.deliverable-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.deliverable-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#075985;margin-bottom:1rem}.checkpoints[_ngcontent-%COMP%]{list-style:none;padding:0}.checkpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#0c4a6e;display:flex;align-items:flex-start;gap:.5rem}.checkbox[_ngcontent-%COMP%]{color:#0ea5e9;font-size:1.25rem}.next-steps-list[_ngcontent-%COMP%]{background:#fef3c7;padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;color:#78350f;line-height:1.8}.closing-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-bottom:2rem}.closing-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;margin-bottom:1rem}.closing-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.closing-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#92400e;margin-bottom:1rem}.quote[_ngcontent-%COMP%]{font-style:italic;font-weight:600;text-align:center;padding:1rem;background:#fff;border-radius:8px;margin-top:1rem}.preview-next[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);padding:1.5rem;border-radius:12px;border-left:5px solid #22c55e;color:#166534;font-weight:600;text-align:center}.progress-dots[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover, .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background:#fffc;transform:scale(1.2)}.progress-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background:#fff;width:32px;border-radius:6px}@media (max-width: 768px){.presentation-container[_ngcontent-%COMP%]{padding:1rem}.slide[_ngcontent-%COMP%]{padding:1.5rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem}.info-grid[_ngcontent-%COMP%], .theory-grid[_ngcontent-%COMP%], .challenges-grid[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%], .deliverables-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.control-btn[_ngcontent-%COMP%], .slide-counter[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.875rem}}.formats-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.format-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.format-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.format-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.format-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.format-icon[_ngcontent-%COMP%]{font-size:2rem}.format-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0;color:#2d3748;font-size:1.25rem}.format-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.format-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.use-case-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:3px solid #0ea5e9;padding:1rem;border-radius:8px;margin-bottom:1rem;color:#0369a1}.format-example[_ngcontent-%COMP%]{background:#1e293b;padding:1.5rem;border-radius:8px}.format-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e2e8f0;margin-bottom:.75rem}.format-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e2e8f0;margin:0;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap}.requirement-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.requirement-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.requirement-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78350f;line-height:1.6}.requirement-text[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b;font-style:italic;color:#92400e}.requirement-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.sample-output[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.85rem;line-height:1.5;white-space:pre-wrap;overflow-x:auto}.testcase-box[_ngcontent-%COMP%]{background:#1e293b;border-left:4px solid #3b82f6;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.testcase-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#93c5fd;font-size:1.25rem;font-weight:700;margin-bottom:1rem}.testcase-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d1d5db;font-weight:600}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;font-weight:400;margin-left:.5rem}.testcase-text[_ngcontent-%COMP%]{background:#fff;color:#1e293b;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap;margin:0}.testcases-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.testcases-list[_ngcontent-%COMP%]{background:#f0f9ff;padding:1.5rem 1.5rem 1.5rem 2.5rem;border-radius:8px;border-left:3px solid #0ea5e9;color:#0c4a6e;line-height:1.8}.testcases-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.pros-cons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1rem}.pros-box[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px}.pros-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#166534;margin-bottom:.75rem}.pros-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.cons-box[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px}.cons-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#991b1b;margin-bottom:.75rem}.cons-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";position:absolute;left:0;color:#ef4444;font-weight:700}@media (max-width: 768px){.pros-cons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.final-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-top:2rem;text-align:center}.final-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;font-size:2rem;margin-bottom:1rem}.final-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f2937;font-size:1.1rem;margin-bottom:.75rem;line-height:1.6}.final-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#78350f;font-weight:700}',".slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#111827}.station-badge[_ngcontent-%COMP%]{display:inline-block;background:#6366f11a;color:#3730a3;border:1px solid rgba(99,102,241,.35);border-radius:99px;padding:.35rem 1rem;font-size:.78rem;font-weight:700;letter-spacing:.04em;margin-bottom:1.25rem;text-transform:uppercase}.title-icon[_ngcontent-%COMP%]{font-size:4.5rem;line-height:1;margin-bottom:.6rem}.title-subtitle[_ngcontent-%COMP%]{color:#374151;font-size:1.15rem;font-weight:500;margin-bottom:1.5rem;max-width:560px;margin-left:auto;margin-right:auto;line-height:1.5}.title-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-bottom:1.5rem}.pill[_ngcontent-%COMP%]{font-size:.82rem;font-weight:600;padding:.35rem .9rem;border-radius:99px}.pill-blue[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af;border:1px solid #93c5fd}.pill-yellow[_ngcontent-%COMP%]{background:#fef3c7;color:#92400e;border:1px solid #fcd34d}.pill-green[_ngcontent-%COMP%]{background:#dcfce7;color:#14532d;border:1px solid #86efac}.pill-purple[_ngcontent-%COMP%]{background:#f3e8ff;color:#6b21a8;border:1px solid #d8b4fe}.pill-red[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b;border:1px solid #fca5a5}.pill-orange[_ngcontent-%COMP%]{background:#ffedd5;color:#9a3412;border:1px solid #fdba74}.title-meta[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:2rem;margin-bottom:1.25rem;flex-wrap:wrap}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;color:#374151;font-size:.9rem;font-weight:500}.meta-icon[_ngcontent-%COMP%]{font-size:1.1rem}.title-prereq-note[_ngcontent-%COMP%]{background:#eef2ff;border:1px solid #c7d2fe;border-radius:10px;padding:.75rem 1.25rem;font-size:.9rem;color:#1e1b4b;font-weight:500;max-width:700px;margin:0 auto;line-height:1.55}.slide-intro[_ngcontent-%COMP%]{color:#1f2937;font-size:1.05rem;margin-bottom:1.5rem;line-height:1.7;max-width:860px}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;margin-bottom:1.25rem}.theory-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid #e2e8f0;border-radius:0 10px 10px 0;padding:1rem;transition:transform .2s}.theory-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.theory-card.blue[_ngcontent-%COMP%]{border-left-color:#3b82f6}.theory-card.green[_ngcontent-%COMP%]{border-left-color:#22c55e}.theory-card.purple[_ngcontent-%COMP%]{border-left-color:#a855f7}.theory-card.yellow[_ngcontent-%COMP%]{border-left-color:#f59e0b}.theory-card.red[_ngcontent-%COMP%]{border-left-color:#ef4444}.theory-card.orange[_ngcontent-%COMP%]{border-left-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:.35rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;margin:0 0 .3rem;color:#111827}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem;color:#374151;line-height:1.5;margin:0}.highlight-box[_ngcontent-%COMP%]{background:#eef2ff;border:1px solid #c7d2fe;border-radius:10px;padding:.85rem 1.25rem;color:#1e1b4b;font-size:.9rem;margin-top:1rem;line-height:1.6;display:flex;align-items:flex-start;gap:.5rem;flex-wrap:wrap;font-weight:500}.tip-box[_ngcontent-%COMP%]{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:.85rem 1.25rem;color:#1e3a5f;font-size:.9rem;font-weight:500;line-height:1.6;margin-top:.75rem}.warning-box[_ngcontent-%COMP%]{background:#fffbeb;border:1px solid #fcd34d;border-radius:10px;padding:.85rem 1.25rem;color:#78350f;font-size:.9rem;font-weight:500;line-height:1.6;margin-top:.75rem}.ml-2[_ngcontent-%COMP%]{margin-left:.5rem}.code-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:0}.tab-btn[_ngcontent-%COMP%]{padding:.45rem 1rem;border-radius:8px 8px 0 0;font-size:.82rem;font-weight:600;background:#f1f5f9;color:#374151;border:1px solid #e2e8f0;border-bottom:none;transition:all .2s;cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0;color:#1f2937}.tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.code-block-wrapper[_ngcontent-%COMP%]{width:100%;border-radius:0 10px 10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:1rem}.code-block-header[_ngcontent-%COMP%]{background:#2a2a3e;color:#94a3b8;font-size:.78rem;font-weight:600;padding:.5rem 1rem;border-bottom:1px solid #3d3d5c}.code-block[_ngcontent-%COMP%]{background:#1e1e2e;color:#cdd6f4;font-family:Fira Code,Cascadia Code,Consolas,monospace;font-size:.82rem;line-height:1.6;padding:1.25rem 1.5rem;margin:0;white-space:pre;overflow-x:auto}.output-block[_ngcontent-%COMP%]{background:#0f172a;border-top:1px solid #1e293b;padding:.85rem 1.25rem}.output-label[_ngcontent-%COMP%]{color:#4ade80;font-size:.75rem;font-weight:700;display:block;margin-bottom:.4rem;letter-spacing:.05em}.output-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#94a3b8;font-family:Fira Code,monospace;font-size:.8rem;margin:0;white-space:pre-wrap}.inline-code[_ngcontent-%COMP%]{background:#f1f5f9;color:#0f172a;border:1px solid #e2e8f0;border-radius:4px;padding:.1rem .4rem;font-family:Fira Code,monospace;font-size:.82rem}.vector-concepts[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:.5rem}.concept-chip[_ngcontent-%COMP%]{flex:1;min-width:180px;border-radius:10px;padding:.75rem 1rem;font-size:.82rem;line-height:1.55;color:#1f2937;font-weight:500}.concept-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.2rem}.chip-blue[_ngcontent-%COMP%]{background:#dbeafe;border:1px solid #93c5fd}.chip-blue[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e40af}.chip-green[_ngcontent-%COMP%]{background:#dcfce7;border:1px solid #86efac}.chip-green[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#14532d}.chip-purple[_ngcontent-%COMP%]{background:#f3e8ff;border:1px solid #d8b4fe}.chip-purple[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#6b21a8}.matrix-ops-row[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:.5rem}.op-card[_ngcontent-%COMP%]{flex:1;min-width:110px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:.85rem;text-align:center}.op-symbol[_ngcontent-%COMP%]{display:block;font-family:Fira Code,monospace;font-size:1.4rem;font-weight:800;color:#4f46e5;margin-bottom:.3rem}.op-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:.85rem;color:#111827;margin-bottom:.2rem}.op-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.76rem;color:#374151;margin:0;line-height:1.4}.attention-formula-box[_ngcontent-%COMP%]{background:#faf5ff;border:1px solid #e9d5ff;border-radius:12px;padding:1rem 1.4rem;margin-top:.75rem;display:flex;flex-direction:column;gap:.4rem}.attention-formula-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#4c1d95;font-size:.9rem}.formula-code[_ngcontent-%COMP%]{font-family:Fira Code,monospace;font-size:.95rem;font-weight:700;color:#1e1b4b;background:#ede9fe;border-radius:6px;padding:.4rem .75rem;display:inline-block}.formula-note[_ngcontent-%COMP%]{font-size:.82rem;color:#374151}.decomp-row[_ngcontent-%COMP%]{display:flex;gap:.85rem;flex-wrap:wrap;margin-top:.75rem}.decomp-card[_ngcontent-%COMP%]{flex:1;min-width:180px;border-radius:12px;padding:1rem 1.1rem;border:1px solid}.decomp-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:.9rem;margin-bottom:.4rem}.decomp-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;margin:0 0 .25rem;line-height:1.5;color:#374151}.decomp-card[_ngcontent-%COMP%]   .card-use[_ngcontent-%COMP%]{font-size:.75rem;color:#4b5563;font-style:italic}.card-blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.card-blue[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e40af}.card-purple[_ngcontent-%COMP%]{background:#faf5ff;border-color:#e9d5ff}.card-purple[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#6b21a8}.card-green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#bbf7d0}.card-green[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#14532d}.pca-steps[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.4rem;margin-top:.75rem;margin-bottom:.5rem}.step-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:.6rem .9rem}.step-num[_ngcontent-%COMP%]{background:#4f46e5;color:#fff;width:1.5rem;height:1.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:800;flex-shrink:0}.step-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:.82rem;color:#111827}.step-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.72rem;color:#374151;margin:0;font-family:Fira Code,monospace}.step-arrow[_ngcontent-%COMP%]{color:#9ca3af;font-size:1.2rem;font-weight:700}.nn-map[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.85rem;margin-top:.75rem}.nn-op[_ngcontent-%COMP%]{border-radius:12px;padding:.9rem 1rem;border:1px solid}.nn-op[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:.88rem;font-weight:700;margin-bottom:.3rem}.nn-op[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.78rem;margin:0;font-family:Fira Code,monospace;line-height:1.55;color:#374151}.op-forward[_ngcontent-%COMP%]{background:#eff6ff;border-color:#bfdbfe}.op-forward[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e40af}.op-backward[_ngcontent-%COMP%]{background:#fef3c7;border-color:#fcd34d}.op-backward[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#92400e}.op-norm[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#bbf7d0}.op-norm[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#14532d}.op-grad[_ngcontent-%COMP%]{background:#faf5ff;border-color:#e9d5ff}.op-grad[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#6b21a8}.challenge-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem}.challenge-tab-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.55rem 1rem;border-radius:8px;background:#f1f5f9;color:#374151;font-size:.85rem;font-weight:600;border:1px solid #e2e8f0;cursor:pointer;transition:all .18s}.challenge-tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0}.challenge-tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.challenge-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid #6366f1;border-radius:0 12px 12px 0;padding:1.25rem 1.5rem;margin-bottom:1rem}.challenge-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem;flex-wrap:wrap}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#111827;font-size:1.05rem;font-weight:700;margin:0}.challenge-description[_ngcontent-%COMP%]{color:#1f2937;font-size:.9rem;line-height:1.65;margin-bottom:.85rem;font-weight:500}.difficulty-badge[_ngcontent-%COMP%]{border-radius:99px;padding:.2rem .75rem;font-size:.75rem;font-weight:700}.badge-green[_ngcontent-%COMP%]{background:#dcfce7;color:#14532d;border:1px solid #86efac}.badge-yellow[_ngcontent-%COMP%]{background:#fef3c7;color:#92400e;border:1px solid #fcd34d}.badge-red[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b;border:1px solid #fca5a5}.hints-box[_ngcontent-%COMP%]{background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:.75rem 1rem;font-size:.88rem}.hints-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e3a5f}.hints-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.4rem 0 0 1.1rem;padding:0}.hints-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#1f2937;margin-bottom:.3rem;line-height:1.5;font-weight:500}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.challenge-card[_ngcontent-%COMP%]   .code-block-wrapper[_ngcontent-%COMP%]{border-radius:10px}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.85rem;margin-bottom:1.25rem}.summary-item[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:flex-start;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:.85rem 1rem}.summary-icon[_ngcontent-%COMP%]{font-size:1.6rem;flex-shrink:0}.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;color:#111827;font-size:.9rem;margin-bottom:.25rem}.summary-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.82rem;margin:0;line-height:1.5}.next-station-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6366f114,#a855f714);border:1px solid rgba(99,102,241,.25);border-radius:14px;padding:1.5rem;margin-bottom:1rem;text-align:center}.next-station-label[_ngcontent-%COMP%]{color:#6366f1;font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.4rem}.next-station-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#111827;font-size:1.2rem;font-weight:800;margin-bottom:.5rem}.next-station-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.9rem;line-height:1.65;margin-bottom:1rem}.next-station-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;background:#6366f1;color:#fff;border-radius:8px;padding:.6rem 1.25rem;font-size:.9rem;font-weight:700;text-decoration:none;transition:background .2s}.next-station-btn[_ngcontent-%COMP%]:hover{background:#4f46e5}.slide-nav[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;width:100%;max-width:1200px;margin-bottom:.75rem}.nav-btn[_ngcontent-%COMP%]{background:#fff;border:none;width:2.5rem;height:2.5rem;border-radius:50%;font-size:1.5rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;transition:all .2s ease;box-shadow:0 2px 8px #00000026;color:#3730a3;flex-shrink:0}.nav-btn[_ngcontent-%COMP%]:hover:not(:disabled){background:#e0e7ff;transform:scale(1.1);box-shadow:0 4px 12px #0003}.nav-btn[_ngcontent-%COMP%]:disabled{opacity:.35;cursor:not-allowed;transform:none}.slide-indicators[_ngcontent-%COMP%]{display:flex;gap:.4rem;flex:1;justify-content:center;flex-wrap:wrap}.indicator-dot[_ngcontent-%COMP%]{width:.6rem;height:.6rem;border-radius:50%;background:#fff6;border:none;cursor:pointer;padding:0;transition:all .2s ease}.indicator-dot.active[_ngcontent-%COMP%]{background:#fff;transform:scale(1.4)}.indicator-dot[_ngcontent-%COMP%]:hover:not(.active){background:#ffffffb3}.slide-counter[_ngcontent-%COMP%]{background:#fff3;color:#fff;font-size:.85rem;font-weight:700;padding:.3rem .75rem;border-radius:99px;flex-shrink:0;letter-spacing:.02em}.progress-bar-track[_ngcontent-%COMP%]{width:100%;max-width:1200px;height:4px;background:#fff3;border-radius:2px;margin-bottom:1.5rem;overflow:hidden}.progress-bar-fill[_ngcontent-%COMP%]{height:100%;background:#fff;border-radius:2px;transition:width .3s ease}.resource-links[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.75rem;font-size:.88rem;color:#374151;font-weight:600}.resource-link[_ngcontent-%COMP%]{color:#6366f1;font-weight:600;text-decoration:underline}.resource-link[_ngcontent-%COMP%]:hover{color:#4f46e5}"]})};export{D as L1LinearAlgebraComponent};
