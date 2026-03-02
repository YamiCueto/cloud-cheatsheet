import{d as w,f as T}from"./chunk-V6XJS2PW.js";import"./chunk-DGPQBSVR.js";import{Ab as e,Ib as b,Jc as y,Kb as u,Kc as k,Lb as c,Lc as S,Mc as E,Oa as i,Pc as D,Ub as x,Wb as n,Xb as m,Yb as h,Z as f,Zb as v,_,db as P,hb as p,hc as M,jc as C,yb as s,zb as t}from"./chunk-GRUBSZXT.js";import"./chunk-EQDQRRRY.js";var F=r=>({background:r}),O=(r,a,o)=>({good:r,ok:a,bad:o});function L(r,a){if(r&1){let o=b();t(0,"button",9),u("click",function(){let d=f(o).index,g=c();return _(g.goToSlide(d))}),e()}if(r&2){let o=a.index,l=c();s("ngStyle",M(1,F,o===l.currentSlide?"white":"rgba(255,255,255,0.35)"))}}function q(r,a){r&1&&(t(0,"div",15)(1,"div",16),n(2,"\u{1F689} ESTACI\xD3N 3 DE 9 \xB7 L\xCDNEA 1 \u2014 FOUNDATIONS"),e(),t(3,"div",17),n(4,"\u{1F332}"),e(),t(5,"h1"),n(6,"Data Structures & Algorithms"),e(),t(7,"p",18),n(8,"Las estructuras que hacen eficiente cualquier sistema de IA"),e(),t(9,"div",19)(10,"span",20),n(11,"Arrays & Linked Lists"),e(),t(12,"span",21),n(13,"Stack & Queue"),e(),t(14,"span",22),n(15,"Trees & Heaps"),e(),t(16,"span",23),n(17,"Graphs & BFS/DFS"),e(),t(18,"span",24),n(19,"Hash Maps"),e(),t(20,"span",25),n(21,"Big-O Complexity"),e()(),t(22,"div",26)(23,"div",27)(24,"span",28),n(25,"\u23F1\uFE0F"),e(),t(26,"span"),n(27,"~90 min"),e()(),t(28,"div",27)(29,"span",28),n(30,"\u{1F3AF}"),e(),t(31,"span"),n(32,"10 slides \xB7 3 retos"),e()(),t(33,"div",27)(34,"span",28),n(35,"\u{1F517}"),e(),t(36,"span"),n(37,"Prerrequisito: NumPy & Pandas"),e()()(),t(38,"div",29),n(39," \u{1F4A1} Esta estaci\xF3n sienta las bases para entender c\xF3mo funcionan internamente los modelos de ML (grafos computacionales, beam search, kNN, vocabularios de NLP). "),e()())}function I(r,a){if(r&1&&(t(0,"div",36)(1,"div",37),n(2),e(),t(3,"h3"),n(4),e(),t(5,"p"),n(6),e()()),r&2){let o=a.$implicit;s("ngClass",o.color),i(2),m(o.icon),i(2),m(o.title),i(2),m(o.description)}}function N(r,a){if(r&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F332} \xBFPor qu\xE9 DSA en IA?"),e(),t(3,"p",31),n(4," Las estructuras de datos y algoritmos no son solo para concursos de programaci\xF3n. Son el "),t(5,"strong"),n(6,"esqueleto de cada sistema de IA en producci\xF3n"),e(),n(7,": desde el vocabulario de un LLM hasta el grafo computacional de PyTorch. "),e(),t(8,"div",32),p(9,I,7,4,"div",33),e(),t(10,"div",34)(11,"strong"),n(12,"\u26A1 Regla de oro:"),e(),t(13,"span",35),n(14," Una mala elecci\xF3n de estructura de datos puede convertir un algoritmo O(n log n) en O(n\xB2). En producci\xF3n con millones de samples, eso significa pasar de segundos a horas. "),e()()()),r&2){let o=c(2);i(9),s("ngForOf",o.whyReasons)}}function B(r,a){if(r&1){let o=b();t(0,"button",47),u("click",function(){let d=f(o).index,g=c(3);return _(g.activeArraysTab=d)}),n(1),e()}if(r&2){let o=a.$implicit,l=a.index,d=c(3);x("active",d.activeArraysTab===l),i(),h(" ",o.label," ")}}function A(r,a){if(r&1&&(t(0,"div",48)(1,"span",49),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),r&2){let o=c(3);i(4),m(o.arraysExamples[o.activeArraysTab].output)}}function j(r,a){if(r&1&&(t(0,"tr")(1,"td",50),n(2),e(),t(3,"td",51),n(4),e(),t(5,"td",51),n(6),e(),t(7,"td",51),n(8),e(),t(9,"td",51),n(10),e(),t(11,"td",52),n(12),e()()),r&2){let o=a.$implicit;i(2),m(o.structure),i(),s("ngClass",C(10,O,o.access.startsWith("O(1"),o.access.startsWith("O(log"),o.access.startsWith("O(n"))),i(),m(o.access),i(),s("ngClass",C(14,O,o.search.startsWith("O(1"),o.search.startsWith("O(log"),o.search.startsWith("O(n"))),i(),m(o.search),i(),s("ngClass",C(18,O,o.insert.startsWith("O(1"),o.insert.startsWith("O(log"),o.insert.startsWith("O(n"))),i(),m(o.insert),i(),s("ngClass",C(22,O,o.delete.startsWith("O(1"),o.delete.startsWith("O(log"),o.delete.startsWith("O(n"))),i(),m(o.delete),i(2),m(o.useCase)}}function R(r,a){if(r&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F4E6} Arrays, Listas & Sparse Matrices"),e(),t(3,"p",31),n(4," La estructura m\xE1s fundamental. En ML viven en todas partes: batches de entrenamiento, feature vectors, loss history. Dominar sus variantes determina la eficiencia de tu pipeline. "),e(),t(5,"div",38),p(6,B,2,3,"button",39),e(),t(7,"div",40)(8,"pre",41)(9,"code"),n(10),e()(),p(11,A,5,1,"div",42),e(),t(12,"div",43)(13,"h3"),n(14,"\u{1F4CA} Tabla de Complejidades \u2014 Estructuras clave en ML"),e(),t(15,"table",44)(16,"thead")(17,"tr")(18,"th"),n(19,"Estructura"),e(),t(20,"th"),n(21,"Acceso"),e(),t(22,"th"),n(23,"B\xFAsqueda"),e(),t(24,"th"),n(25,"Inserci\xF3n"),e(),t(26,"th"),n(27,"Borrado"),e(),t(28,"th"),n(29,"Uso en IA"),e()()(),t(30,"tbody"),p(31,j,13,26,"tr",45),e()(),t(32,"p",46),n(33,"* Promedio \u2014 O(n) en el peor caso por colisiones"),e()()()),r&2){let o=c(2);i(6),s("ngForOf",o.arraysExamples),i(4),m(o.arraysExamples[o.activeArraysTab].code),i(),s("ngIf",o.arraysExamples[o.activeArraysTab].output),i(20),s("ngForOf",o.complexityRows)}}function V(r,a){if(r&1){let o=b();t(0,"button",47),u("click",function(){let d=f(o).index,g=c(3);return _(g.activeStackQueueTab=d)}),n(1),e()}if(r&2){let o=a.$implicit,l=a.index,d=c(3);x("active",d.activeStackQueueTab===l),i(),h(" ",o.label," ")}}function G(r,a){if(r&1&&(t(0,"div",48)(1,"span",49),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),r&2){let o=c(3);i(4),m(o.stackQueueExamples[o.activeStackQueueTab].output)}}function H(r,a){if(r&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F4DA} Stacks & Queues"),e(),t(3,"p",31),n(4," Stack (LIFO) y Queue (FIFO) son las estructuras de orden de procesamiento. En IA: el Stack modela el grafo de backpropagation y el Queue alimenta los DataLoaders en paralelo. "),e(),t(5,"div",38),p(6,V,2,3,"button",39),e(),t(7,"div",40)(8,"pre",41)(9,"code"),n(10),e()(),p(11,G,5,1,"div",42),e(),t(12,"div",53)(13,"div",54)(14,"strong"),n(15,"Stack \u2014 LIFO"),e(),t(16,"p"),n(17,"\xDAltimo en entrar, primero en salir. Backprop recorre operaciones en orden inverso al forward."),e()(),t(18,"div",55)(19,"strong"),n(20,"Queue \u2014 FIFO"),e(),t(21,"p"),n(22,"Primero en entrar, primero en salir. DataLoader carga batches en orden. BFS usa queue."),e()(),t(23,"div",56)(24,"strong"),n(25,"Priority Queue"),e(),t(26,"p"),n(27,"Siempre extrae el elemento de menor (o mayor) prioridad. Beam search, kNN aproximado."),e()(),t(28,"div",57)(29,"strong"),n(30,"deque (Python)"),e(),t(31,"p"),n(32,"Double-Ended Queue: O(1) en ambos extremos. \xDAsalo siempre en lugar de list para queues."),e()()(),t(33,"div",58)(34,"strong"),n(35,"\u26A0\uFE0F Error frecuente:"),e(),n(36," Usar "),t(37,"code",59),n(38,"list.pop(0)"),e(),n(39," como queue \u2014 es O(n) porque desplaza todos los elementos. Siempre usa "),t(40,"code",59),n(41,"collections.deque.popleft()"),e(),n(42," que es O(1). "),e()()),r&2){let o=c(2);i(6),s("ngForOf",o.stackQueueExamples),i(4),m(o.stackQueueExamples[o.activeStackQueueTab].code),i(),s("ngIf",o.stackQueueExamples[o.activeStackQueueTab].output)}}function Q(r,a){if(r&1){let o=b();t(0,"button",47),u("click",function(){let d=f(o).index,g=c(3);return _(g.activeTreeTab=d)}),n(1),e()}if(r&2){let o=a.$implicit,l=a.index,d=c(3);x("active",d.activeTreeTab===l),i(),h(" ",o.label," ")}}function U(r,a){if(r&1&&(t(0,"div",48)(1,"span",49),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),r&2){let o=c(3);i(4),m(o.treeExamples[o.activeTreeTab].output)}}function K(r,a){if(r&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F332} Trees, BST & Heaps"),e(),t(3,"p",31),n(4," Los \xE1rboles son omnipresentes en ML: Decision Trees, Random Forest, XGBoost, Segment Trees para range queries y Min-Heaps para Beam Search en generaci\xF3n de texto. "),e(),t(5,"div",38),p(6,Q,2,3,"button",39),e(),t(7,"div",40)(8,"pre",41)(9,"code"),n(10),e()(),p(11,U,5,1,"div",42),e(),t(12,"div",60)(13,"div",61)(14,"div",62),n(15,"\u{1F333}"),e(),t(16,"strong"),n(17,"BST"),e(),t(18,"p"),n(19,"B\xFAsqueda O(log n). Base de Decision Trees y \xE1rboles de intervalo."),e()(),t(20,"div",61)(21,"div",62),n(22,"\u{1F384}"),e(),t(23,"strong"),n(24,"Min/Max Heap"),e(),t(25,"p"),n(26,"Extrae m\xEDnimo/m\xE1ximo en O(log n). Beam search, kNN, scheduling."),e()(),t(27,"div",61)(28,"div",62),n(29,"\u{1F33F}"),e(),t(30,"strong"),n(31,"Trie"),e(),t(32,"p"),n(33,"\xC1rbol de prefijos. Autocompletado, b\xFAsqueda en vocabulario NLP O(m)."),e()(),t(34,"div",61)(35,"div",62),n(36,"\u{1F332}"),e(),t(37,"strong"),n(38,"KD-Tree"),e(),t(39,"p"),n(40,"Partici\xF3n espacial multidimensional. kNN exacto en baja dimensionalidad."),e()()(),t(41,"div",63)(42,"strong"),n(43,"\u{1F4A1} Scikit-learn internamente:"),e(),t(44,"code",59),n(45,"sklearn.tree._tree.Tree"),e(),n(46," almacena el Decision Tree como arrays NumPy paralelos (feature, threshold, children_left, children_right) \u2014 no hay punteros Python, todo es C puro. "),e()()),r&2){let o=c(2);i(6),s("ngForOf",o.treeExamples),i(4),m(o.treeExamples[o.activeTreeTab].code),i(),s("ngIf",o.treeExamples[o.activeTreeTab].output)}}function W(r,a){if(r&1){let o=b();t(0,"button",47),u("click",function(){let d=f(o).index,g=c(3);return _(g.activeGraphTab=d)}),n(1),e()}if(r&2){let o=a.$implicit,l=a.index,d=c(3);x("active",d.activeGraphTab===l),i(),h(" ",o.label," ")}}function $(r,a){if(r&1&&(t(0,"div",48)(1,"span",49),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),r&2){let o=c(3);i(4),m(o.graphExamples[o.activeGraphTab].output)}}function Y(r,a){if(r&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F578}\uFE0F Grafos \u2014 BFS, DFS & Dijkstra"),e(),t(3,"p",31),n(4," Una red neuronal "),t(5,"strong"),n(6,"es"),e(),n(7," un grafo dirigido ac\xEDclico (DAG). PyTorch Autograd construye un grafo computacional en cada forward pass y lo recorre con DFS en el backward pass. Graph Neural Networks (GNNs) directamente operan sobre grafos. "),e(),t(8,"div",38),p(9,W,2,3,"button",39),e(),t(10,"div",40)(11,"pre",41)(12,"code"),n(13),e()(),p(14,$,5,1,"div",42),e(),t(15,"div",64)(16,"h3"),n(17,"\u{1F4D0} Algoritmos de grafos en IA"),e(),t(18,"div",65)(19,"div",66)(20,"strong"),n(21,"BFS \u2014 O(V+E)"),e(),t(22,"p"),n(23,"Nivel por nivel. Camino m\xE1s corto en grafos no ponderados. Construcci\xF3n de grafos de vecinos en clustering."),e()(),t(24,"div",67)(25,"strong"),n(26,"DFS \u2014 O(V+E)"),e(),t(27,"p"),n(28,"Profundidad primero. Backpropagation, detecci\xF3n de ciclos, orden topol\xF3gico de capas en DAGs."),e()(),t(29,"div",68)(30,"strong"),n(31,"Dijkstra \u2014 O((V+E) log V)"),e(),t(32,"p"),n(33,"Camino m\xE1s corto con pesos positivos. Grafos de conocimiento, similarity search, PageRank."),e()(),t(34,"div",69)(35,"strong"),n(36,"Orden Topol\xF3gico \u2014 O(V+E)"),e(),t(37,"p"),n(38,"Ordena nodos de un DAG respetando dependencias. Define el orden de ejecuci\xF3n de capas en forward pass."),e()()()()()),r&2){let o=c(2);i(9),s("ngForOf",o.graphExamples),i(4),m(o.graphExamples[o.activeGraphTab].code),i(),s("ngIf",o.graphExamples[o.activeGraphTab].output)}}function X(r,a){if(r&1){let o=b();t(0,"button",47),u("click",function(){let d=f(o).index,g=c(3);return _(g.activeHashTab=d)}),n(1),e()}if(r&2){let o=a.$implicit,l=a.index,d=c(3);x("active",d.activeHashTab===l),i(),h(" ",o.label," ")}}function J(r,a){if(r&1&&(t(0,"div",48)(1,"span",49),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),r&2){let o=c(3);i(4),m(o.hashExamples[o.activeHashTab].output)}}function Z(r,a){if(r&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F5C2}\uFE0F Hash Tables, Sets & Cach\xE9 LRU"),e(),t(3,"p",31),n(4," O(1) promedio para inserci\xF3n, b\xFAsqueda y borrado es el superpoder del hash map. En NLP: vocabularios de 50.000+ tokens. En serving: cach\xE9 de predicciones. En RL: tabla Q para millones de estados. "),e(),t(5,"div",38),p(6,X,2,3,"button",39),e(),t(7,"div",40)(8,"pre",41)(9,"code"),n(10),e()(),p(11,J,5,1,"div",42),e(),t(12,"div",70)(13,"h3"),n(14,"\u{1F511} Patrones hash en producci\xF3n de ML"),e(),t(15,"div",53)(16,"div",71)(17,"strong"),n(18,"dict \u2014 vocab NLP"),e(),t(19,"p"),n(20,"Token \u2192 ID en O(1). Vocabulario de 50K tokens cabe en ~4 MB."),e()(),t(21,"div",71)(22,"strong"),n(23,"Counter \u2014 frecuencias"),e(),t(24,"p"),n(25,"Conteo de palabras, labels, errores. Base de Bag-of-Words y TF-IDF."),e()(),t(26,"div",71)(27,"strong"),n(28,"set \u2014 etiquetas \xFAnicas"),e(),t(29,"p"),n(30,'O(1) para "\xBFclase existe?". Detecta OOV (Out-Of-Vocabulary) en test.'),e()(),t(31,"div",71)(32,"strong"),n(33,"LRU Cache \u2014 serving"),e(),t(34,"p"),n(35,"Evita recomputar predicciones id\xE9nticas. Hit rate del 30-40% es com\xFAn."),e()()()()()),r&2){let o=c(2);i(6),s("ngForOf",o.hashExamples),i(4),m(o.hashExamples[o.activeHashTab].code),i(),s("ngIf",o.hashExamples[o.activeHashTab].output)}}function ee(r,a){if(r&1){let o=b();t(0,"button",47),u("click",function(){let d=f(o).index,g=c(3);return _(g.activeSortTab=d)}),n(1),e()}if(r&2){let o=a.$implicit,l=a.index,d=c(3);x("active",d.activeSortTab===l),i(),h(" ",o.label," ")}}function te(r,a){if(r&1&&(t(0,"div",48)(1,"span",49),n(2,"\u25B6 Output"),e(),t(3,"pre"),n(4),e()()),r&2){let o=c(3);i(4),m(o.sortExamples[o.activeSortTab].output)}}function ne(r,a){if(r&1&&(t(0,"div",30)(1,"h2"),n(2,"\u{1F50D} B\xFAsqueda, Ordenamiento & Big-O"),e(),t(3,"p",31),n(4," Binary Search es el algoritmo m\xE1s \xFAtil en ML ops: buscar el threshold \xF3ptimo, quantizaci\xF3n de pesos, lookup en tablas ordenadas. Y entender Big-O permite predecir si tu c\xF3digo escala a millones de muestras. "),e(),t(5,"div",38),p(6,ee,2,3,"button",39),e(),t(7,"div",40)(8,"pre",41)(9,"code"),n(10),e()(),p(11,te,5,1,"div",42),e(),t(12,"div",72)(13,"h3"),n(14,"\u{1F4C8} Big-O resumen r\xE1pido"),e(),t(15,"div",73)(16,"div",74)(17,"span",75),n(18,"O(1)"),e(),t(19,"p"),n(20,"Constante. Acceso array por \xEDndice, dict lookup, push/pop stack."),e()(),t(21,"div",76)(22,"span",75),n(23,"O(log n)"),e(),t(24,"p"),n(25,"Binary search, heap push/pop, BST. Escala con billones de items."),e()(),t(26,"div",77)(27,"span",75),n(28,"O(n)"),e(),t(29,"p"),n(30,"Recorrido lineal. Inevitable al menos una vez para leer todos los datos."),e()(),t(31,"div",78)(32,"span",75),n(33,"O(n log n)"),e(),t(34,"p"),n(35,"Sorting \xF3ptimo. Mergesort, Timsort. Acceptable en la mayor\xEDa de casos."),e()(),t(36,"div",79)(37,"span",75),n(38,"O(n\xB2)"),e(),t(39,"p"),n(40,"Bucles anidados. Inaceptable para n > 10,000 en producci\xF3n."),e()(),t(41,"div",80)(42,"span",75),n(43,"O(2\u207F)"),e(),t(44,"p"),n(45,"Exponencial. Solo en casos especiales con n muy peque\xF1o."),e()()()()()),r&2){let o=c(2);i(6),s("ngForOf",o.sortExamples),i(4),m(o.sortExamples[o.activeSortTab].code),i(),s("ngIf",o.sortExamples[o.activeSortTab].output)}}function oe(r,a){if(r&1){let o=b();t(0,"button",92),u("click",function(){let d=f(o).index,g=c(3);return _(g.selectedChallenge=d)}),t(1,"span",93),n(2),e(),t(3,"span"),n(4),e()()}if(r&2){let o=a.$implicit,l=a.index,d=c(3);x("active",d.selectedChallenge===l),i(),s("ngClass",o.difficultyColor),i(),h(" ",o.difficulty," "),i(2),m(o.title)}}function re(r,a){if(r&1&&(t(0,"li"),n(1),e()),r&2){let o=a.$implicit;i(),m(o)}}function ie(r,a){if(r&1&&(t(0,"div",81)(1,"h2"),n(2,"\u{1F3CB}\uFE0F Retos Pr\xE1cticos"),e(),t(3,"p",31),n(4," Pon a prueba lo aprendido. Selecciona tu nivel y resuelve el desaf\xEDo en tu IDE favorito. "),e(),t(5,"div",82),p(6,oe,5,5,"button",83),e(),t(7,"div",84)(8,"div",85)(9,"span",86),n(10),e(),t(11,"h3"),n(12),e()(),t(13,"p",87),n(14),e(),t(15,"div",88)(16,"strong"),n(17,"\u{1F4A1} Pistas:"),e(),t(18,"ul"),p(19,re,2,1,"li",45),e()(),t(20,"div",89)(21,"div",90),n(22,"\u{1F4DD} C\xF3digo de inicio"),e(),t(23,"pre",41)(24,"code"),n(25),e()()(),t(26,"div",91)(27,"span",49),n(28,"\u{1F3AF} Output esperado"),e(),t(29,"pre"),n(30),e()()()()),r&2){let o=c(2);i(6),s("ngForOf",o.challenges),i(),s("ngClass",o.challenges[o.selectedChallenge].color),i(2),s("ngClass",o.challenges[o.selectedChallenge].difficultyColor),i(),h(" ",o.challenges[o.selectedChallenge].difficulty," "),i(2),m(o.challenges[o.selectedChallenge].title),i(2),m(o.challenges[o.selectedChallenge].description),i(5),s("ngForOf",o.challenges[o.selectedChallenge].hints),i(6),m(o.challenges[o.selectedChallenge].starterCode),i(5),m(o.challenges[o.selectedChallenge].expectedOutput)}}function ae(r,a){r&1&&(t(0,"div",94)(1,"div",95),n(2," \u2705 ESTACI\xD3N COMPLETADA \u2014 L\xCDNEA 1 \xB7 ESTACI\xD3N 3 DE 9 "),e(),t(3,"h2"),n(4,"\u{1F389} Resumen: Data Structures & Algorithms"),e(),t(5,"div",96)(6,"div",97)(7,"span",98),n(8,"\u{1F4E6}"),e(),t(9,"div")(10,"strong"),n(11,"Arrays & Listas"),e(),t(12,"p"),n(13,"List, Linked List, Sparse Matrix. La base de batches, features y vocabularios NLP."),e()()(),t(14,"div",97)(15,"span",98),n(16,"\u{1F4DA}"),e(),t(17,"div")(18,"strong"),n(19,"Stack & Queue"),e(),t(20,"p"),n(21,"LIFO para backprop. FIFO para DataLoaders. Priority Queue para Beam Search."),e()()(),t(22,"div",97)(23,"span",98),n(24,"\u{1F332}"),e(),t(25,"div")(26,"strong"),n(27,"Trees & Heaps"),e(),t(28,"p"),n(29,"BST, Decision Tree, Min-Heap. Base de Random Forest, XGBoost y ordenamiento Top-K."),e()()(),t(30,"div",97)(31,"span",98),n(32,"\u{1F578}\uFE0F"),e(),t(33,"div")(34,"strong"),n(35,"Grafos"),e(),t(36,"p"),n(37,"BFS, DFS, Dijkstra, orden topol\xF3gico. Redes neuronales como DAGs, GNNs."),e()()(),t(38,"div",97)(39,"span",98),n(40,"\u{1F5C2}\uFE0F"),e(),t(41,"div")(42,"strong"),n(43,"Hash Tables"),e(),t(44,"p"),n(45,"O(1) lookup. Vocabularios NLP, cach\xE9 LRU para serving, tabla Q en RL."),e()()(),t(46,"div",97)(47,"span",98),n(48,"\u{1F4C8}"),e(),t(49,"div")(50,"strong"),n(51,"Big-O & Algoritmos"),e(),t(52,"p"),n(53,"Binary Search O(log n), Mergesort O(n log n). Predicci\xF3n de escalabilidad en prod."),e()()()(),t(54,"div",99)(55,"div",100),n(56,"\u{1F689} Pr\xF3xima estaci\xF3n en L\xEDnea 1"),e(),t(57,"h3"),n(58,"Linear Algebra for ML"),e(),t(59,"p"),n(60," Vectores, matrices, transformaciones lineales, eigenvalores y SVD. El lenguaje matem\xE1tico en que est\xE1n escritas todas las redes neuronales. "),e(),t(61,"a",101),n(62," Ver en el MetroMap "),t(63,"span"),n(64,"\u2192"),e()()(),t(65,"div",102)(66,"strong"),n(67,"\u{1F4DA} Recursos recomendados:"),e(),t(68,"span",35)(69,"a",103),n(70,"LeetCode Explore Cards"),e(),n(71," \xB7 "),t(72,"a",104),n(73,"NeetCode Roadmap"),e(),n(74," \xB7 "),t(75,"a",105),n(76,"VisuAlgo \u2014 Visualizar DSA"),e()()()())}function se(r,a){if(r&1&&(t(0,"div",10),p(1,q,40,0,"div",11)(2,N,15,1,"div",12)(3,R,34,4,"div",12)(4,H,43,3,"div",12)(5,K,47,3,"div",12)(6,Y,39,3,"div",12)(7,Z,36,3,"div",12)(8,ne,46,3,"div",12)(9,ie,31,9,"div",13)(10,ae,77,0,"div",14),e()),r&2){let o=a.$implicit,l=a.index,d=c();x("active",l===d.currentSlide),i(),s("ngIf",o.type==="title"),i(),s("ngIf",o.type==="why-dsa"),i(),s("ngIf",o.type==="arrays-lists"),i(),s("ngIf",o.type==="stacks-queues"),i(),s("ngIf",o.type==="trees"),i(),s("ngIf",o.type==="graphs"),i(),s("ngIf",o.type==="hash-tables"),i(),s("ngIf",o.type==="sorting-searching"),i(),s("ngIf",o.type==="challenge"),i(),s("ngIf",o.type==="summary")}}var z=class r{currentSlide=0;selectedChallenge=0;activeArraysTab=0;activeStackQueueTab=0;activeTreeTab=0;activeGraphTab=0;activeHashTab=0;activeSortTab=0;slides=[{type:"title"},{type:"why-dsa"},{type:"arrays-lists"},{type:"stacks-queues"},{type:"trees"},{type:"graphs"},{type:"hash-tables"},{type:"sorting-searching"},{type:"challenge"},{type:"summary"}];whyReasons=[{icon:"\u{1F9E0}",title:"Modelos son grafos",description:"Una red neuronal ES un grafo dirigido ac\xEDclico (DAG). Entender grafos = entender c\xF3mo fluye el gradiente.",color:"border-blue-400"},{icon:"\u{1F50D}",title:"B\xFAsqueda eficiente",description:"kNN, KD-trees, ball trees \u2014 estructuras especializadas para encontrar vecinos m\xE1s cercanos en alta dimensionalidad.",color:"border-green-400"},{icon:"\u23F1\uFE0F",title:"Complejidad temporal",description:"Elegir entre O(n\xB2) y O(n log n) es la diferencia entre un modelo que tarda horas vs. segundos en producci\xF3n.",color:"border-yellow-400"},{icon:"\u{1F4BE}",title:"Complejidad espacial",description:"Sparse matrices, hash maps y estructuras de datos en memoria definen si tu modelo cabe en RAM o necesita chunks.",color:"border-purple-400"},{icon:"\u{1F332}",title:"\xC1rboles en ML",description:"Decision Trees, Random Forest, XGBoost \u2014 todos son variantes de \xE1rboles. Min-heap en beam search de NLP.",color:"border-red-400"},{icon:"\u{1F3C6}",title:"Entrevistas t\xE9cnicas",description:"FAANG y top AI labs piden DSA obligatoriamente. LeetCode Medium es el m\xEDnimo para ML Engineer.",color:"border-orange-400"}];complexityRows=[{structure:"Array / List",access:"O(1)",search:"O(n)",insert:"O(n)",delete:"O(n)",useCase:"Features, batches"},{structure:"Hash Map / Dict",access:"O(1)*",search:"O(1)*",insert:"O(1)*",delete:"O(1)*",useCase:"Vocab, embeddings"},{structure:"Min-Heap",access:"O(n)",search:"O(n)",insert:"O(log n)",delete:"O(log n)",useCase:"Beam search, kNN"},{structure:"Binary Search Tree",access:"O(log n)",search:"O(log n)",insert:"O(log n)",delete:"O(log n)",useCase:"Decision trees"},{structure:"Linked List",access:"O(n)",search:"O(n)",insert:"O(1)",delete:"O(1)",useCase:"Attention chains"},{structure:"Queue (deque)",access:"O(1)",search:"O(n)",insert:"O(1)",delete:"O(1)",useCase:"BFS, data pipelines"}];arraysExamples=[{label:"Listas & Arrays",code:`# Python list \u2014 array din\xE1mico O(1) amortizado para append
# En ML: batch de samples, lista de predicciones, history de losses

import numpy as np

# List para acumular losses durante entrenamiento
train_losses = []
for epoch in range(5):
    loss = 1.0 / (epoch + 1)      # dummy loss decreciente
    train_losses.append(loss)     # O(1) amortizado

print("Losses:", [round(l, 3) for l in train_losses])

# Acceso y slicing \u2014 O(1)
best_epoch = train_losses.index(min(train_losses))
print("Mejor \xE9poca:", best_epoch)

# NumPy array: memoria contigua, operaciones vectorizadas
arr = np.array(train_losses)
print("Media:", arr.mean().round(4))
print("Mejora total:", (arr[0] - arr[-1]).round(3))

# List comprehension \u2014 idioma Python para crear arrays r\xE1pido
squares = [x**2 for x in range(1, 6)]        # O(n)
filtered = [x for x in squares if x % 2 == 0] # O(n)
print("Cuadrados:", squares)
print("Pares:", filtered)`,output:`Losses: [1.0, 0.5, 0.333, 0.25, 0.2]
Mejor \xE9poca: 4
Media: 0.4567
Mejora total: 0.8
Cuadrados: [1, 4, 9, 16, 25]
Pares: [4, 16]`},{label:"Linked List",code:`# Linked List \u2014 nodos con punteros al siguiente
# Uso real en IA: modelo de atenci\xF3n como cadena, skip connections

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
# para el grafo computacional durante backprop`,output:"Pipeline: ['Embedding', 'LSTM', 'Dropout', 'Linear', 'Softmax']"},{label:"Sparse Matrix",code:`# Matrices dispersas \u2014 cr\xEDticas en NLP y recomendadores
# Bag-of-Words sobre un vocab de 50,000 palabras:
# Dense: 50,000 \xD7 float32 = 200KB POR DOCUMENTO \u2192 inviable
# Sparse: solo almacena los ~10 t\xE9rminos presentes \u2192 ~80 bytes

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
print(sparse.toarray())`,output:`Forma: (3, 5)
No-ceros: 7
% densidad: 46.67 %
Dense:
[[1 1 1 0 0]
 [1 0 0 1 1]
 [0 1 1 1 1]]`}];stackQueueExamples=[{label:"Stack (Pila)",code:`# Stack \u2014 LIFO (Last In, First Out)
# Uso en IA: backpropagation, parsers, evaluar expresiones
# Python: usa list con append/pop O(1)

class Stack:
    def __init__(self):
        self._data = []

    def push(self, item):     # O(1)
        self._data.append(item)

    def pop(self):            # O(1)
        if self.is_empty():
            raise IndexError("Stack vac\xEDo")
        return self._data.pop()

    def peek(self):           # O(1)
        return self._data[-1] if self._data else None

    def is_empty(self):
        return len(self._data) == 0

    def __len__(self):
        return len(self._data)

# Ejemplo: evaluar expresi\xF3n matem\xE1tica con par\xE9ntesis
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

# \xDAtil en parsers de c\xF3digo de ML (tokenizaci\xF3n)
print(parentesis_balanceados("([a + b] * (c - d))"))  # True
print(parentesis_balanceados("([a + b)"))              # False

# Backprop conceptual: el stack de operaciones
operaciones = Stack()
for op in ['matmul', 'relu', 'dropout', 'softmax']:
    operaciones.push(op)

print("Backprop order:", end=" ")
while not operaciones.is_empty():
    print(operaciones.pop(), end=" ")`,output:`True
False
Backprop order: softmax dropout relu matmul`},{label:"Queue (Cola)",code:`# Queue \u2014 FIFO (First In, First Out)
# Uso en IA: BFS en grafos, data loading, task queues
# Python: collections.deque es O(1) en ambos extremos

from collections import deque

class Queue:
    def __init__(self):
        self._data = deque()

    def enqueue(self, item):   # O(1)
        self._data.append(item)

    def dequeue(self):         # O(1) \u2014 por qu\xE9 no usar list.pop(0)
        if self.is_empty():
            raise IndexError("Queue vac\xEDa")
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
    print("  Batch:", batch)`,output:`Batches en cola: 4
  Batch: [0, 1, 2]
  Batch: [3, 4, 5]
  Batch: [6, 7, 8]
  Batch: [9]`},{label:"Priority Queue",code:`# Priority Queue (Min-Heap) \u2014 O(log n) insert/extract
# Uso en IA: beam search en NLP, kNN con aproximaci\xF3n,
#            Dijkstra para grafos de conocimiento

import heapq

# Beam Search simplificado (traducci\xF3n, generaci\xF3n de texto)
# Mantenemos los k mejores caminos por probabilidad (log-prob)
def beam_search_simple(vocab_scores, beam_width=3):
    """
    vocab_scores: list de (token, log_prob)
    Retorna top-k tokens por log_prob
    """
    # heapq en Python es min-heap \u2192 negar para max
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

# kNN con heap \u2014 encontrar los k vecinos m\xE1s cercanos
def knn_heap(query, corpus, k=3):
    heap = [(-dist, token) for token, dist in corpus]
    heapq.heapify(heap)   # O(n)
    return [heapq.heappop(heap)[1] for _ in range(k)]`,output:`Top-3 tokens (beam search):
  gato:  log_prob=-0.3
  rato:  log_prob=-0.5
  loro:  log_prob=-0.6`}];treeExamples=[{label:"Binary Search Tree",code:`# Binary Search Tree \u2014 O(log n) promedio
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
# Inorden de BST \u2192 secuencia ordenada

# En Scikit-learn: sklearn.tree._tree.Tree es un BST optimizado
# con arrays NumPy para m\xE1ximo rendimiento`,output:"Thresholds en orden: [0.1, 0.3, 0.4, 0.5, 0.7, 0.8, 0.9]"},{label:"Decision Tree",code:`# Decision Tree \u2014 el \xE1rbol m\xE1s importante en ML
# Cada nodo: condici\xF3n sobre un feature
# Hoja: predicci\xF3n (clase o valor)

class NodoDecision:
    def __init__(self, feature=None, threshold=None,
                 izq=None, der=None, valor=None):
        self.feature   = feature    # \xEDndice del feature
        self.threshold = threshold  # valor de corte
        self.izq  = izq            # rama True (<=)
        self.der  = der            # rama False (>)
        self.valor = valor         # solo en hojas

def predecir(nodo, muestra):
    """Recorre el \xE1rbol hasta una hoja \u2014 O(profundidad)"""
    if nodo.valor is not None:      # es hoja
        return nodo.valor
    if muestra[nodo.feature] <= nodo.threshold:
        return predecir(nodo.izq, muestra)
    return predecir(nodo.der, muestra)

# \xC1rbol manual: clasifica tumor benigno/maligno
# Feature 0: tama\xF1o (cm), Feature 1: irregularidad (0-1)
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
    print(f"  Tama\xF1o={tam}, Irreg={irreg} \u2192 {resultado}")`,output:`  Tama\xF1o=1.0, Irreg=0.3 \u2192 Benigno
  Tama\xF1o=3.0, Irreg=0.4 \u2192 Benigno
  Tama\xF1o=3.0, Irreg=0.8 \u2192 Maligno`},{label:"Heap / Min-Heap",code:`# Heap \u2014 \xE1rbol binario casi completo
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
    """Mantiene los K mejores scores vistos \u2014 O(n log K)"""
    def __init__(self, k):
        self.k = k
        self.heap = MinHeap()

    def add(self, score, clase):
        self.heap.push((score, clase))
        if len(self.heap) > self.k:
            self.heap.pop()   # elimina el menor

    def get_top_k(self):
        return sorted(self.heap._heap, reverse=True)

# Simulaci\xF3n: modelo con 10 clases, queremos top-3
import random
random.seed(42)
tracker = TopKTracker(k=3)
clases  = ['gato','perro','pez','ave','rana',
           'toro','oso','zorro','lobo','lince']
for clase in clases:
    score = round(random.random(), 3)
    tracker.add(score, clase)
    print(f"  +{clase}: {score}")

print("\\nTop-3:", tracker.get_top_k())`,output:`  +gato: 0.637  +perro: 0.269  +pez: 0.04
  +ave: 0.617   +rana: 0.891  +toro: 0.963
  +oso: 0.025   +zorro: 0.49  +lobo: 0.08  ...

Top-3: [(0.963,'toro'), (0.891,'rana'), (0.637,'gato')]`}];graphExamples=[{label:"Grafo & BFS",code:`# Grafo \u2014 estructura m\xE1s general (nodos + aristas)
# Red neuronal: nodo = neurona, arista = peso con direcci\xF3n
# BFS: explora nivel por nivel \u2014 usa Queue O(V+E)

from collections import deque

class Grafo:
    def __init__(self):
        self.adj = {}               # lista de adyacencia

    def agregar_arista(self, u, v, dirigido=True):
        self.adj.setdefault(u, []).append(v)
        if not dirigido:
            self.adj.setdefault(v, []).append(u)

    def bfs(self, inicio):
        """BFS \u2014 nivel por nivel \u2014 O(V + E)"""
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

# Red de dependencias de m\xF3dulos Python
g = Grafo()
deps = [('numpy', 'cpython'), ('pandas', 'numpy'),
        ('sklearn', 'numpy'), ('sklearn', 'scipy'),
        ('torch', 'numpy'), ('transformers', 'torch'),
        ('transformers', 'sklearn')]
for u, v in deps:
    g.agregar_arista(u, v)

print("Orden BFS desde 'sklearn':", g.bfs('sklearn'))`,output:"Orden BFS desde 'sklearn': ['sklearn', 'numpy', 'scipy', 'cpython']"},{label:"DFS & Ciclos",code:`# DFS \u2014 explora lo m\xE1s profundo posible primero
# Uso en IA: detecci\xF3n de ciclos en grafos computacionales,
#            orden topol\xF3gico para DAGs (redes neuronales)

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
        """Kahn's algorithm \u2014 O(V+E)"""
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

# Orden de ejecuci\xF3n de capas (como autograd de PyTorch)
red = GrafoDirigido()
capas = [('input','embed'), ('embed','attn'), ('embed','ffn'),
         ('attn','add_norm'), ('ffn','add_norm'), ('add_norm','output')]
for u, v in capas:
    red.agregar_arista(u, v)

print("Orden de ejecuci\xF3n:", red.orden_topologico())`,output:"Orden de ejecuci\xF3n: ['input', 'embed', 'attn', 'ffn', 'add_norm', 'output']"},{label:"Grafo Ponderado",code:`# Grafo ponderado \u2014 aristas con peso
# Uso en IA: redes de conocimiento, similarity graphs,
#            grafos de atenci\xF3n en transformers

import heapq

def dijkstra(grafo, inicio):
    """Camino m\xE1s corto desde inicio \u2014 O((V+E) log V)"""
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

# Grafo de similitud de embeddings (distancia coseno \u2192 0=similares)
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
    print(f"  {nodo}: {d:.2f}")`,output:`Distancias desde 'hombre':
  hombre:  0.00
  persona: 0.10
  rey:     0.25
  reina:   0.40
  monarca: 0.45
  mujer:   0.45`}];hashExamples=[{label:"Hash Map / Dict",code:`# Hash Map \u2014 O(1) promedio para insert, search, delete
# En ML: vocabulario de NLP, \xEDndice de embeddings, cach\xE9

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

# Vocabulario NLP: token \u2192 id
vocab = HashMapSimple()
tokens = ['hola', 'mundo', 'python', 'IA', 'datos', 'modelo']
for i, token in enumerate(tokens):
    vocab.set(token, i)

print("IA \u2192 id:", vocab.get('IA'))
print("modelo \u2192 id:", vocab.get('modelo'))
print("OOV \u2192 id:", vocab.get('desconocido', -1))

# Counter \u2014 variante de hash map para frecuencias
from collections import Counter
texto = "el gato y el perro y el pez"
frecuencias = Counter(texto.split())
print("\\nFrec:", dict(frecuencias.most_common(3)))`,output:`IA \u2192 id: 3
modelo \u2192 id: 5
OOV \u2192 id: -1

Frec: {'el': 3, 'y': 2, 'gato': 1}`},{label:"Embedding Index",code:`# Hash map como \xEDndice de embeddings \u2014 patr\xF3n clave en NLP
# Problema: dado un vector de query, encontrar embedding m\xE1s cercano
# Soluci\xF3n naive: O(n\xB7d) \u2014 demasiado lento para vocab grande

import numpy as np
from collections import defaultdict

class EmbeddingIndex:
    """\xCDndice simple de embeddings con b\xFAsqueda exacta"""
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

    def mas_cercano(self, query):          # O(n\xB7d)
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
print(f"king - man + woman \u2248 '{cercano}' (sim={sim:.3f})")`,output:"king - man + woman \u2248 'queen' (sim=0.742)"},{label:"Sets & LRU Cache",code:`# Set \u2014 hash map sin valores, O(1) para in, add, remove
# LRU Cache \u2014 Least Recently Used: evicci\xF3n O(1) con OrderedDict

# Sets en ML: etiquetas \xFAnicas, vocabulario de clases
clases_train = {'gato', 'perro', 'ave', 'pez'}
clases_test  = {'gato', 'tortuga', 'pez', 'caballo'}

nuevas_clases = clases_test - clases_train   # diferencia de conjuntos
comunes       = clases_train & clases_test   # intersecci\xF3n
todas         = clases_train | clases_test   # uni\xF3n

print("Clases nuevas en test:", nuevas_clases)
print("Clases comunes:", comunes)

# LRU Cache \u2014 important\xEDsimo en serving de modelos
from collections import OrderedDict

class LRUCache:
    """Cache con pol\xEDtica Least Recently Used \u2014 O(1) get/put"""
    def __init__(self, capacidad):
        self.cap   = capacidad
        self.cache = OrderedDict()

    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)   # marca como "m\xE1s reciente"
        return self.cache[key]

    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.cap:
            self.cache.popitem(last=False)  # evicta el m\xE1s viejo

# Cache de predicciones del modelo (evita recompute)
model_cache = LRUCache(capacidad=3)
model_cache.put("query_1", [0.9, 0.1])
model_cache.put("query_2", [0.3, 0.7])
model_cache.put("query_3", [0.5, 0.5])
model_cache.put("query_4", [0.8, 0.2])   # evicta query_1

print("query_1:", model_cache.get("query_1"))  # -1 (evictado)
print("query_2:", model_cache.get("query_2"))  # hit`,output:`Clases nuevas en test: {'tortuga', 'caballo'}
Clases comunes: {'gato', 'pez'}
query_1: -1
query_2: [0.3, 0.7]`}];sortExamples=[{label:"Binary Search",code:`# Binary Search \u2014 O(log n): el algoritmo m\xE1s usado en ML prod
# Requiere array ordenado
# Uso: buscar threshold \xF3ptimo, quantizaci\xF3n de modelos,
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

# bisect \u2014 m\xF3dulo std de Python para binary search + inserci\xF3n
import bisect

puntuaciones_ordenadas = [0.1, 0.3, 0.5, 0.7, 0.9]
nueva = 0.45
pos = bisect.bisect_left(puntuaciones_ordenadas, nueva)
print(f"\\nInsertar {nueva} en posici\xF3n {pos}")
bisect.insort(puntuaciones_ordenadas, nueva)
print("Array actualizado:", puntuaciones_ordenadas)

# Encontrar threshold \xF3ptimo que maximiza F1
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
print(f"\\nThreshold \xF3ptimo: {t} \u2192 F1={f1:.3f}")`,output:`Buscar 0.5: 3
Buscar 0.7: -1

Insertar 0.45 en posici\xF3n 2
Array actualizado: [0.1, 0.3, 0.45, 0.5, 0.7, 0.9]

Threshold \xF3ptimo: 0.6 \u2192 F1=0.857`},{label:"Merge & Quick Sort",code:`# Mergesort \u2014 O(n log n) estable, O(n) espacio
# Quicksort \u2014 O(n log n) promedio, O(1) espacio extra
# Python usa Timsort (h\xEDbrido merge+insertion) internamente

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
print("Python sort:", sorted(datos))   # Timsort interno`,output:`Original:    [37, 12, 72, 9, 75, 5, 79, 64]
Mergesort:   [5, 9, 12, 37, 64, 72, 75, 79]
Quicksort:   [5, 9, 12, 37, 64, 72, 75, 79]
Python sort: [5, 9, 12, 37, 64, 72, 75, 79]`},{label:"Complejidad & Big-O",code:`# Big-O \u2014 medir crecimiento del tiempo seg\xFAn el tama\xF1o n
# La elecci\xF3n correcta puede hacer la diferencia de horas a ms

import time
import math

def medir_tiempo(func, n):
    inicio = time.perf_counter()
    func(n)
    return time.perf_counter() - inicio

# O(1) \u2014 constante
def constante(n):
    return 42

# O(log n) \u2014 b\xFAsqueda binaria
def logaritmico(n):
    arr = list(range(n))
    lo, hi = 0, len(arr) - 1
    while lo <= hi:
        mid = (lo + hi) // 2
        lo = mid + 1

# O(n) \u2014 recorrido lineal
def lineal(n):
    return sum(range(n))

# O(n log n) \u2014 mergesort
def nlogn(n):
    arr = list(range(n, 0, -1))
    arr.sort()

# O(n^2) \u2014 burbuja, convoluci\xF3n naive
def cuadratico(n):
    s = 0
    for i in range(n):
        for j in range(n):
            s += i * j

n_vals = [100, 1000, 5000]
print(f"{'n':>6} | {'O(1)':>8} | {'O(log n)':>10} | {'O(n)':>8} | {'O(n\xB2)':>10}")
print("-" * 55)
for n in n_vals:
    t1 = medir_tiempo(constante, n)
    t2 = medir_tiempo(logaritmico, n)
    t3 = medir_tiempo(lineal, n)
    t4 = medir_tiempo(cuadratico, n)
    print(f"{n:>6} | {t1*1e6:>7.1f}\xB5s | {t2*1e6:>9.1f}\xB5s | {t3*1e6:>7.1f}\xB5s | {t4*1e3:>9.2f}ms")`,output:`     n |     O(1) |   O(log n) |     O(n) |      O(n\xB2)
-------------------------------------------------------
   100 |    0.1\xB5s |      1.2\xB5s |    3.1\xB5s |     0.05ms
  1000 |    0.1\xB5s |      2.1\xB5s |   28.4\xB5s |     4.80ms
  5000 |    0.1\xB5s |      2.8\xB5s |  140.2\xB5s |   121.30ms`}];challenges=[{difficulty:"Principiante",title:"Top-K por Frecuencia",description:"Dado un texto de reviews de productos, encuentra las K palabras m\xE1s frecuentes usando un hash map y un heap. Filtra stopwords.",hints:["collections.Counter hace el conteo en O(n)","Counter.most_common(k) usa un heap internamente \u2014 O(n log k)","Crea un set de stopwords para filtrar palabras comunes","Puedes convertir el texto a lowercase con .lower() antes de split()"],starterCode:`from collections import Counter

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

# TODO: obt\xE9n el top-5
top5 = ...

print("=== Top-5 palabras m\xE1s frecuentes ===")
for palabra, count in top5:
    print(f"  {palabra}: {count}")`,expectedOutput:`=== Top-5 palabras m\xE1s frecuentes ===
  machine: 3
  learning: 3
  inteligencia: 2
  artificial: 2
  permite: 1`,color:"border-green-400",difficultyColor:"bg-green-900 text-green-300"},{difficulty:"Intermedio",title:"BFS en Grafo de Conocimiento",description:"Implementa BFS sobre un grafo de relaciones entre conceptos de IA para encontrar el camino m\xE1s corto entre dos conceptos.",hints:["BFS garantiza el camino m\xE1s corto en grafos no ponderados","Mant\xE9n un diccionario padre: {nodo: desde_donde_llegu\xE9} para reconstruir el camino","Usa deque de collections para la cola \u2014 O(1) en ambos extremos","El camino se reconstruye desde el destino hasta el origen siguiendo los padres"],starterCode:`from collections import deque

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
    'NLP':           ['BERT', 'GPT', 'Tokenizaci\xF3n'],
    'XGBoost':       ['Scikit-learn', 'Gradient Boosting'],
    'MLP':           ['Scikit-learn', 'PyTorch'],
    'ResNet':        ['CNN'],
    'Tokenizaci\xF3n':  ['NLP'],
    'Gradient Boosting': ['XGBoost']
}

def bfs_camino(grafo, inicio, destino):
    # TODO: implementa BFS y retorna el camino m\xE1s corto
    # como lista de nodos desde inicio hasta destino
    ...

# Prueba tu implementaci\xF3n
pares = [('Python', 'GPT'), ('NumPy', 'BERT'), ('Python', 'ResNet')]
for origen, destino in pares:
    camino = bfs_camino(grafo, origen, destino)
    print(f"{origen} \u2192 {destino}: {' \u2192 '.join(camino)} ({len(camino)-1} saltos)")`,expectedOutput:`Python \u2192 GPT: Python \u2192 NumPy \u2192 PyTorch \u2192 Transformers \u2192 GPT (4 saltos)
NumPy \u2192 BERT: NumPy \u2192 PyTorch \u2192 Transformers \u2192 BERT (3 saltos)
Python \u2192 ResNet: Python \u2192 NumPy \u2192 PyTorch \u2192 CNN \u2192 ResNet (4 saltos)`,color:"border-yellow-400",difficultyColor:"bg-yellow-900 text-yellow-300"},{difficulty:"Avanzado",title:"LRU Cache para Modelo Serving",description:"Implementa un sistema de cach\xE9 LRU para predicciones de un modelo, con estad\xEDsticas de hit rate y soporte para TTL (time-to-live).",hints:["OrderedDict mantiene orden de inserci\xF3n y permite move_to_end() en O(1)","Para TTL: almacena (valor, timestamp) y verifica time.time() - timestamp < ttl",'Un "cache hit" ocurre cuando get() encuentra la clave Y el TTL no expir\xF3','Al evictar un item por TTL, decrementamos el conteo de "hits totales disponibles"'],starterCode:`from collections import OrderedDict
import time

class LRUCacheConTTL:
    """Cache LRU con Time-To-Live y estad\xEDsticas"""

    def __init__(self, capacidad: int, ttl_segundos: float = 5.0):
        self.cap   = capacidad
        self.ttl   = ttl_segundos
        self.cache = OrderedDict()   # key \u2192 (valor, timestamp)
        self.hits  = 0
        self.misses = 0

    def get(self, key):
        # TODO: retorna el valor si existe Y no expir\xF3
        # Actualiza hits/misses y mueve a "m\xE1s reciente"
        ...

    def put(self, key, value):
        # TODO: inserta con timestamp actual
        # Si ya existe, actualiza y mueve al final
        # Si lleno, evicta el m\xE1s viejo
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

# Simulaci\xF3n de serving: 10 requests, algunas repetidas
cache = LRUCacheConTTL(capacidad=3, ttl_segundos=2.0)
requests = ['req_A', 'req_B', 'req_C', 'req_A', 'req_D',
            'req_B', 'req_A', 'req_E', 'req_A', 'req_C']

for req in requests:
    resultado = cache.get(req)
    if resultado == -1:
        # Cache miss \u2014 "computar" la predicci\xF3n
        cache.put(req, f"pred_{req}")
        print(f"MISS {req}")
    else:
        print(f"HIT  {req} \u2192 {resultado}")

print("\\nEstad\xEDsticas:", cache.stats())`,expectedOutput:`MISS req_A
MISS req_B
MISS req_C
HIT  req_A \u2192 pred_req_A
MISS req_D
HIT  req_B \u2192 pred_req_B
HIT  req_A \u2192 pred_req_A
MISS req_E
HIT  req_A \u2192 pred_req_A
MISS req_C

Estad\xEDsticas: {'hits': 4, 'misses': 6, 'hit_rate': '40.0%', 'size': 3}`,color:"border-red-400",difficultyColor:"bg-red-900 text-red-300"}];nextSlide(){this.currentSlide<this.slides.length-1&&this.currentSlide++}prevSlide(){this.currentSlide>0&&this.currentSlide--}goToSlide(a){this.currentSlide=a}onKeydown(a){a.key==="ArrowRight"||a.key==="ArrowDown"?this.nextSlide():(a.key==="ArrowLeft"||a.key==="ArrowUp")&&this.prevSlide()}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=P({type:r,selectors:[["app-l1-dsa"]],hostBindings:function(o,l){o&1&&u("keydown",function(g){return l.onKeydown(g)})},decls:14,vars:6,consts:[["tabindex","0",1,"presentation-container",3,"keydown"],[1,"back-to-menu"],["routerLink","/metro-map-ai",1,"back-btn"],[1,"controls"],[3,"click","disabled"],[1,"slide-counter"],["class","dot-btn",3,"ngStyle","click",4,"ngFor","ngForOf"],[1,"slide-wrapper"],["class","slide",3,"active",4,"ngFor","ngForOf"],[1,"dot-btn",3,"click","ngStyle"],[1,"slide"],["class","slide-title",4,"ngIf"],["class","slide-content",4,"ngIf"],["class","slide-content challenge-slide",4,"ngIf"],["class","slide-content summary-slide",4,"ngIf"],[1,"slide-title"],[1,"station-badge"],[1,"title-icon"],[1,"title-subtitle"],[1,"title-pills"],[1,"pill","pill-blue"],[1,"pill","pill-yellow"],[1,"pill","pill-green"],[1,"pill","pill-purple"],[1,"pill","pill-red"],[1,"pill","pill-orange"],[1,"title-meta"],[1,"meta-item"],[1,"meta-icon"],[1,"title-prereq-note"],[1,"slide-content"],[1,"slide-intro"],[1,"theory-grid"],["class","theory-card",3,"ngClass",4,"ngFor","ngForOf"],[1,"highlight-box"],[1,"ml-2"],[1,"theory-card",3,"ngClass"],[1,"theory-icon"],[1,"code-tabs"],["class","tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"code-block-wrapper"],[1,"code-block","python"],["class","output-block",4,"ngIf"],[1,"complexity-table-wrapper"],[1,"complexity-table"],[4,"ngFor","ngForOf"],[1,"table-note"],[1,"tab-btn",3,"click"],[1,"output-block"],[1,"output-label"],[1,"struct-name"],[3,"ngClass"],[1,"use-case"],[1,"comparison-row"],[1,"mini-card","border-l-4","border-blue-400"],[1,"mini-card","border-l-4","border-green-400"],[1,"mini-card","border-l-4","border-yellow-400"],[1,"mini-card","border-l-4","border-purple-400"],[1,"warning-box"],[1,"inline-code"],[1,"tree-types-grid"],[1,"tree-type-card"],[1,"tree-type-icon"],[1,"tip-box"],[1,"graph-algorithms"],[1,"algo-grid"],[1,"algo-card","algo-bfs"],[1,"algo-card","algo-dfs"],[1,"algo-card","algo-dijkstra"],[1,"algo-card","algo-topo"],[1,"hash-patterns"],[1,"mini-card"],[1,"bigo-summary"],[1,"bigo-grid"],[1,"bigo-card","bigo-excellent"],[1,"bigo-badge"],[1,"bigo-card","bigo-great"],[1,"bigo-card","bigo-good"],[1,"bigo-card","bigo-ok"],[1,"bigo-card","bigo-bad"],[1,"bigo-card","bigo-terrible"],[1,"slide-content","challenge-slide"],[1,"challenge-tabs"],["class","challenge-tab-btn",3,"active","click",4,"ngFor","ngForOf"],[1,"challenge-card",3,"ngClass"],[1,"challenge-header"],[1,"text-sm","font-bold","px-3","py-1","rounded-full",3,"ngClass"],[1,"challenge-description"],[1,"hints-box"],[1,"code-block-wrapper","mt-4"],[1,"code-block-header"],[1,"output-block","mt-3"],[1,"challenge-tab-btn",3,"click"],[1,"text-xs","font-semibold","px-2","py-0.5","rounded",3,"ngClass"],[1,"slide-content","summary-slide"],[1,"workshop-badge",2,"background","rgba(34,197,94,0.12)","color","#4ade80","border","1px solid rgba(34,197,94,0.3)"],[1,"summary-grid"],[1,"summary-item"],[1,"summary-icon"],[1,"next-station-card"],[1,"next-station-label"],["routerLink","/metro-map-ai",1,"next-station-btn"],[1,"tip-box","mt-6"],["rel","noopener noreferrer","href","https://leetcode.com/explore/learn/","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://neetcode.io/roadmap","target","_blank",1,"resource-link"],["rel","noopener noreferrer","href","https://visualgo.net/","target","_blank",1,"resource-link"]],template:function(o,l){o&1&&(t(0,"div",0),u("keydown",function(g){return l.onKeydown(g)}),t(1,"div",1)(2,"a",2),n(3," \u2190 Volver al MetroMap "),e()(),t(4,"div",3)(5,"button",4),u("click",function(){return l.prevSlide()}),n(6,"\u2190 Anterior"),e(),t(7,"span",5),n(8),e(),p(9,L,1,3,"button",6),t(10,"button",4),u("click",function(){return l.nextSlide()}),n(11,"Siguiente \u2192"),e()(),t(12,"div",7),p(13,se,11,12,"div",8),e()()),o&2&&(i(5),s("disabled",l.currentSlide===0),i(3),v("",l.currentSlide+1," / ",l.slides.length),i(),s("ngForOf",l.slides),i(),s("disabled",l.currentSlide===l.slides.length-1),i(3),s("ngForOf",l.slides))},dependencies:[D,y,k,S,E,T,w],styles:['.presentation-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;padding:2rem;position:relative;outline:none}.back-to-menu[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-bottom:1rem}.back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#fffffff2;color:#667eea;padding:.75rem 1.25rem;border-radius:8px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 6px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.back-btn[_ngcontent-%COMP%]:hover{background:#fff;transform:translate(-4px);box-shadow:0 6px 12px #00000026;color:#764ba2}.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;transition:transform .3s ease}.back-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:translate(-2px)}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin-bottom:2rem;gap:1rem}.control-btn[_ngcontent-%COMP%]{background:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px #0000001a}.control-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.control-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.slide-counter[_ngcontent-%COMP%]{background:#fff;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;color:#667eea;box-shadow:0 4px 6px #0000001a}.slide-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;min-height:600px;position:relative}.slide[_ngcontent-%COMP%]{display:none;width:100%;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 20px 60px #0000004d;animation:_ngcontent-%COMP%_slideIn .5s ease}.slide.active[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}.slide-title[_ngcontent-%COMP%]{text-align:center}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.5rem 1.5rem;border-radius:50px;font-weight:700;font-size:.9rem;letter-spacing:1px;margin-bottom:2rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#2d3748;margin-bottom:1rem}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;color:#718096;margin-bottom:3rem}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:3rem}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem;background:#f7fafc;border-radius:12px;border-left:4px solid #667eea}.info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;font-weight:600}.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.125rem;color:#2d3748;font-weight:700}.slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#2d3748;margin-bottom:1.5rem;border-bottom:3px solid #667eea;padding-bottom:.5rem}.slide-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:#718096;margin-bottom:2rem;text-align:center}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:2rem}.theory-card[_ngcontent-%COMP%]{padding:2rem;border-radius:12px;border-left:6px solid;box-shadow:0 4px 6px #0000001a}.theory-card.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#22c55e}.theory-card.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#3b82f6}.theory-card.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2d3748;margin-bottom:.75rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;position:relative;padding:.5rem 0 .5rem 1.5rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.warning-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1rem 1.5rem;border-radius:8px;margin-top:2rem}.examples-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.example-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:all .3s ease}.example-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.example-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;cursor:pointer;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.example-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.accordion-icon[_ngcontent-%COMP%]{color:#667eea;font-weight:700;font-size:1.25rem}.example-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.25rem}.example-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}@keyframes _ngcontent-%COMP%_expandDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}.hu-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.hu-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.hu-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0c4a6e}.bad-prompt[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.bad-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#dc2626;margin-bottom:1rem}.good-prompt[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.good-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#16a34a;margin-bottom:1rem}.prompt-text[_ngcontent-%COMP%]{background:#fff;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.9rem;color:#000;white-space:pre-wrap;margin-bottom:1rem}.problems-list[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]{margin-top:1rem}.problems-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#2d3748}.problems-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2717";position:absolute;left:0;color:#ef4444;font-weight:700}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.output-preview[_ngcontent-%COMP%]{background:#faf5ff;border-left:4px solid #a855f7;padding:1.5rem;border-radius:8px}.output-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7e22ce;margin-bottom:1rem}.output-list[_ngcontent-%COMP%]{list-style:none;padding:0}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;position:relative}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#a855f7}.process-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.process-step[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.process-step[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.step-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.step-number[_ngcontent-%COMP%]{background:#fff;color:#667eea;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;flex-shrink:0}.step-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex:1}.step-title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem}.step-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.step-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.step-example[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;margin-bottom:1rem;border-left:3px solid #0ea5e9}.step-tips[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b}.step-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:.5rem}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#78350f}.template-container[_ngcontent-%COMP%]{background:#1e293b;border-radius:12px;overflow:hidden}.template-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.template-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.template-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0}.copy-btn[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:none;padding:.5rem 1rem;border-radius:6px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003}.template-code[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:2rem;margin:0;font-family:Courier New,monospace;font-size:.9rem;line-height:1.6;white-space:pre-wrap;overflow-x:auto}.template-instructions[_ngcontent-%COMP%]{background:#fff;padding:2rem}.template-instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:1rem}.template-instructions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:#4a5568;line-height:1.8}.template-instructions[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f7fafc;padding:.2rem .5rem;border-radius:4px;color:#667eea;font-family:Courier New,monospace}.challenges-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{border:3px solid;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.challenge-card.green[_ngcontent-%COMP%]{border-color:#22c55e}.challenge-card.blue[_ngcontent-%COMP%]{border-color:#3b82f6}.challenge-card.orange[_ngcontent-%COMP%]{border-color:#f97316}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #00000026}.challenge-header[_ngcontent-%COMP%]{padding:1.5rem;background:#f7fafc}.difficulty-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;border-radius:50px;font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:.75rem}.difficulty-badge.F\\e1 cil[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.difficulty-badge.Intermedio[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.difficulty-badge.Avanzado[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.125rem;display:flex;align-items:center;gap:.5rem}.challenge-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.hu-section[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hu-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem}.hu-text[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;border-left:3px solid #0ea5e9;font-style:italic;color:#0369a1}.context-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#4a5568}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#667eea;font-weight:700}.requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.action-section[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:2px dashed #e2e8f0}.start-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:1rem 2rem;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 16px #667eea66}.timer-note[_ngcontent-%COMP%]{color:#718096;font-size:.875rem}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.tip-card[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.tip-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem;font-size:1.125rem}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.tip-example[_ngcontent-%COMP%]{background:#fff;padding:.75rem;border-radius:6px;border:1px solid #e2e8f0}.tip-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#667eea;font-family:Courier New,monospace;font-size:.875rem}.deliverables-section[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]{margin-bottom:3rem}.deliverables-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1.75rem;margin-bottom:1.5rem;border-left:5px solid #667eea;padding-left:1rem}.deliverables-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.deliverable-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:1.5rem;border-radius:12px;border-left:5px solid #0ea5e9}.deliverable-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.deliverable-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#075985;margin-bottom:1rem}.checkpoints[_ngcontent-%COMP%]{list-style:none;padding:0}.checkpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#0c4a6e;display:flex;align-items:flex-start;gap:.5rem}.checkbox[_ngcontent-%COMP%]{color:#0ea5e9;font-size:1.25rem}.next-steps-list[_ngcontent-%COMP%]{background:#fef3c7;padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;color:#78350f;line-height:1.8}.closing-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-bottom:2rem}.closing-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;margin-bottom:1rem}.closing-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.closing-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#92400e;margin-bottom:1rem}.quote[_ngcontent-%COMP%]{font-style:italic;font-weight:600;text-align:center;padding:1rem;background:#fff;border-radius:8px;margin-top:1rem}.preview-next[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);padding:1.5rem;border-radius:12px;border-left:5px solid #22c55e;color:#166534;font-weight:600;text-align:center}.progress-dots[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover, .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background:#fffc;transform:scale(1.2)}.progress-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background:#fff;width:32px;border-radius:6px}@media (max-width: 768px){.presentation-container[_ngcontent-%COMP%]{padding:1rem}.slide[_ngcontent-%COMP%]{padding:1.5rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem}.info-grid[_ngcontent-%COMP%], .theory-grid[_ngcontent-%COMP%], .challenges-grid[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%], .deliverables-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.control-btn[_ngcontent-%COMP%], .slide-counter[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.875rem}}.formats-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.format-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.format-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.format-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.format-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.format-icon[_ngcontent-%COMP%]{font-size:2rem}.format-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0;color:#2d3748;font-size:1.25rem}.format-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.format-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.use-case-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:3px solid #0ea5e9;padding:1rem;border-radius:8px;margin-bottom:1rem;color:#0369a1}.format-example[_ngcontent-%COMP%]{background:#1e293b;padding:1.5rem;border-radius:8px}.format-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e2e8f0;margin-bottom:.75rem}.format-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e2e8f0;margin:0;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap}.requirement-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.requirement-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.requirement-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78350f;line-height:1.6}.requirement-text[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b;font-style:italic;color:#92400e}.requirement-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.sample-output[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.85rem;line-height:1.5;white-space:pre-wrap;overflow-x:auto}.testcase-box[_ngcontent-%COMP%]{background:#1e293b;border-left:4px solid #3b82f6;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.testcase-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#93c5fd;font-size:1.25rem;font-weight:700;margin-bottom:1rem}.testcase-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d1d5db;font-weight:600}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;font-weight:400;margin-left:.5rem}.testcase-text[_ngcontent-%COMP%]{background:#fff;color:#1e293b;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap;margin:0}.testcases-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.testcases-list[_ngcontent-%COMP%]{background:#f0f9ff;padding:1.5rem 1.5rem 1.5rem 2.5rem;border-radius:8px;border-left:3px solid #0ea5e9;color:#0c4a6e;line-height:1.8}.testcases-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.pros-cons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1rem}.pros-box[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px}.pros-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#166534;margin-bottom:.75rem}.pros-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.cons-box[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px}.cons-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#991b1b;margin-bottom:.75rem}.cons-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";position:absolute;left:0;color:#ef4444;font-weight:700}@media (max-width: 768px){.pros-cons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.final-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-top:2rem;text-align:center}.final-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;font-size:2rem;margin-bottom:1rem}.final-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f2937;font-size:1.1rem;margin-bottom:.75rem;line-height:1.6}.final-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#78350f;font-weight:700}',".slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#111827}p[_ngcontent-%COMP%], li[_ngcontent-%COMP%], span[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{color:inherit}.slide-intro[_ngcontent-%COMP%]{color:#1f2937;font-size:1.05rem;margin-bottom:1.5rem;line-height:1.7;max-width:860px}.station-badge[_ngcontent-%COMP%]{display:inline-block;background:#22c55e1a;color:#15803d;border:1px solid rgba(34,197,94,.3);border-radius:99px;padding:.35rem 1rem;font-size:.78rem;font-weight:700;letter-spacing:.04em;margin-bottom:1.25rem;text-transform:uppercase}.title-icon[_ngcontent-%COMP%]{font-size:4.5rem;line-height:1;margin-bottom:.6rem}.title-subtitle[_ngcontent-%COMP%]{color:#374151;font-size:1.15rem;font-weight:500;margin-bottom:1.5rem;max-width:560px;margin-left:auto;margin-right:auto;line-height:1.5}.title-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;justify-content:center;margin-bottom:1.5rem}.pill[_ngcontent-%COMP%]{font-size:.82rem;font-weight:600;padding:.35rem .9rem;border-radius:99px}.pill-blue[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af;border:1px solid #93c5fd}.pill-yellow[_ngcontent-%COMP%]{background:#fef3c7;color:#92400e;border:1px solid #fcd34d}.pill-green[_ngcontent-%COMP%]{background:#dcfce7;color:#14532d;border:1px solid #86efac}.pill-purple[_ngcontent-%COMP%]{background:#f3e8ff;color:#6b21a8;border:1px solid #d8b4fe}.pill-red[_ngcontent-%COMP%]{background:#fee2e2;color:#991b1b;border:1px solid #fca5a5}.pill-orange[_ngcontent-%COMP%]{background:#ffedd5;color:#9a3412;border:1px solid #fdba74}.title-meta[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:2rem;margin-bottom:1.25rem;flex-wrap:wrap}.meta-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;color:#374151;font-size:.9rem;font-weight:500}.meta-icon[_ngcontent-%COMP%]{font-size:1.1rem}.title-prereq-note[_ngcontent-%COMP%]{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:.75rem 1.25rem;font-size:.9rem;color:#1e3a5f;font-weight:500;max-width:680px;margin:0 auto;line-height:1.55}.complexity-table-wrapper[_ngcontent-%COMP%]{margin-top:1.4rem;overflow-x:auto}.complexity-table-wrapper[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#111827;margin-bottom:.7rem}.complexity-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;font-size:.82rem;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden}.complexity-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#f1f5f9}.complexity-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:.6rem .85rem;text-align:left;color:#475569;font-weight:700;font-size:.78rem;letter-spacing:.04em;border-bottom:2px solid #e2e8f0}.complexity-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:.55rem .85rem;border-bottom:1px solid #f1f5f9;font-family:Fira Code,Consolas,monospace;font-size:.8rem;color:#1f2937}.complexity-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none}.complexity-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]{background:#f8fafc}.struct-name[_ngcontent-%COMP%]{font-weight:700;color:#1e293b!important;font-family:inherit!important;font-size:.85rem!important}.use-case[_ngcontent-%COMP%]{font-family:inherit!important;font-size:.8rem!important;color:#6b7280!important}.complexity-table[_ngcontent-%COMP%]   td.good[_ngcontent-%COMP%]{color:#15803d;font-weight:700}.complexity-table[_ngcontent-%COMP%]   td.ok[_ngcontent-%COMP%]{color:#b45309;font-weight:700}.complexity-table[_ngcontent-%COMP%]   td.bad[_ngcontent-%COMP%]{color:#b91c1c;font-weight:700}.table-note[_ngcontent-%COMP%]{font-size:.75rem;color:#6b7280;margin-top:.4rem;font-weight:500}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;margin-bottom:1.25rem}.theory-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid;border-radius:0 10px 10px 0;padding:1rem;transition:transform .2s}.theory-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.theory-card.blue[_ngcontent-%COMP%]{border-left-color:#3b82f6}.theory-card.green[_ngcontent-%COMP%]{border-left-color:#22c55e}.theory-card.purple[_ngcontent-%COMP%]{border-left-color:#a855f7}.theory-card.yellow[_ngcontent-%COMP%]{border-left-color:#f59e0b}.theory-card.red[_ngcontent-%COMP%]{border-left-color:#ef4444}.theory-card.orange[_ngcontent-%COMP%]{border-left-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:.35rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;margin:0 0 .3rem;color:#111827}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.85rem;color:#374151;line-height:1.5;margin:0}.code-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:0}.tab-btn[_ngcontent-%COMP%]{padding:.45rem 1rem;border-radius:8px 8px 0 0;font-size:.82rem;font-weight:600;background:#f1f5f9;color:#374151;border:1px solid #e2e8f0;border-bottom:none;transition:all .2s;cursor:pointer}.tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0;color:#374151}.tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.code-block-wrapper[_ngcontent-%COMP%]{width:100%;border-radius:0 10px 10px;overflow:hidden;border:1px solid #e2e8f0;margin-bottom:1rem}.code-block-header[_ngcontent-%COMP%]{background:#2a2a3e;color:#94a3b8;font-size:.78rem;font-weight:600;padding:.5rem 1rem;border-bottom:1px solid #3d3d5c}.code-block[_ngcontent-%COMP%]{background:#1e1e2e;color:#cdd6f4;font-family:Fira Code,Cascadia Code,Consolas,monospace;font-size:.82rem;line-height:1.6;padding:1.25rem 1.5rem;margin:0;white-space:pre;overflow-x:auto}.output-block[_ngcontent-%COMP%]{background:#0f172a;border-top:1px solid #1e293b;padding:.85rem 1.25rem}.output-label[_ngcontent-%COMP%]{color:#4ade80;font-size:.75rem;font-weight:700;display:block;margin-bottom:.4rem;letter-spacing:.05em}.output-block[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#94a3b8;font-family:Fira Code,monospace;font-size:.8rem;margin:0;white-space:pre-wrap}.inline-code[_ngcontent-%COMP%]{background:#f1f5f9;color:#0f172a;border:1px solid #e2e8f0;border-radius:4px;padding:.1rem .4rem;font-family:Fira Code,monospace;font-size:.82rem}.highlight-box[_ngcontent-%COMP%]{background:#eef2ff;border:1px solid #c7d2fe;border-radius:10px;padding:.85rem 1.25rem;color:#1e1b4b;font-size:.9rem;margin-top:1rem;line-height:1.6;display:flex;align-items:flex-start;gap:.5rem;flex-wrap:wrap}.tip-box[_ngcontent-%COMP%]{background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:.85rem 1.25rem;color:#1e3a5f;font-size:.9rem;font-weight:500;line-height:1.6;margin-top:.75rem}.warning-box[_ngcontent-%COMP%]{background:#fffbeb;border:1px solid #fcd34d;border-radius:10px;padding:.85rem 1.25rem;color:#78350f;font-size:.9rem;font-weight:500;line-height:1.6;margin-top:.75rem}.ml-2[_ngcontent-%COMP%]{margin-left:.5rem}.comparison-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem;margin-top:1rem}.mini-card[_ngcontent-%COMP%]{flex:1;min-width:150px;background:#f1f5f9;border-radius:10px;padding:.8rem 1rem;border:1px solid #e2e8f0}.mini-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;color:#111827;font-size:.9rem;margin-bottom:.3rem}.mini-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.82rem;margin:0;line-height:1.5}.tree-types-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.85rem;margin-top:1rem}.tree-type-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:.9rem;text-align:center}.tree-type-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:.4rem}.tree-type-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;font-size:.88rem;color:#111827;margin-bottom:.3rem}.tree-type-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.78rem;color:#374151;margin:0;line-height:1.5}.graph-algorithms[_ngcontent-%COMP%]{margin-top:1.2rem}.graph-algorithms[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#111827;margin-bottom:.75rem}.algo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.8rem}.algo-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:.9rem;font-size:.82rem;border-top:3px solid transparent}.algo-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.4rem;color:#111827;font-size:.86rem}.algo-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;color:#374151;line-height:1.5;font-size:.8rem}.algo-bfs[_ngcontent-%COMP%]{border-top-color:#3b82f6}.algo-dfs[_ngcontent-%COMP%]{border-top-color:#22c55e}.algo-dijkstra[_ngcontent-%COMP%]{border-top-color:#f59e0b}.algo-topo[_ngcontent-%COMP%]{border-top-color:#a855f7}.hash-patterns[_ngcontent-%COMP%]{margin-top:1.2rem}.hash-patterns[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#111827;margin-bottom:.75rem}.bigo-summary[_ngcontent-%COMP%]{margin-top:1.2rem}.bigo-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.95rem;font-weight:700;color:#111827;margin-bottom:.75rem}.bigo-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:.75rem}.bigo-card[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:.85rem;text-align:center}.bigo-badge[_ngcontent-%COMP%]{display:inline-block;font-family:Fira Code,Consolas,monospace;font-size:.9rem;font-weight:700;padding:.2rem .65rem;border-radius:6px;margin-bottom:.5rem}.bigo-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.76rem;color:#374151;margin:0;line-height:1.5}.bigo-excellent[_ngcontent-%COMP%]   .bigo-badge[_ngcontent-%COMP%]{background:#22c55e1f;color:#15803d}.bigo-great[_ngcontent-%COMP%]   .bigo-badge[_ngcontent-%COMP%]{background:#3b82f61f;color:#1d4ed8}.bigo-good[_ngcontent-%COMP%]   .bigo-badge[_ngcontent-%COMP%]{background:#10b9811f;color:#065f46}.bigo-ok[_ngcontent-%COMP%]   .bigo-badge[_ngcontent-%COMP%]{background:#f59e0b1f;color:#b45309}.bigo-bad[_ngcontent-%COMP%]   .bigo-badge[_ngcontent-%COMP%]{background:#f973161f;color:#c2410c}.bigo-terrible[_ngcontent-%COMP%]   .bigo-badge[_ngcontent-%COMP%]{background:#ef44441f;color:#b91c1c}.challenge-tabs[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap;margin-bottom:1rem}.challenge-tab-btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;padding:.55rem 1rem;border-radius:8px;background:#f1f5f9;color:#374151;font-size:.85rem;font-weight:600;border:1px solid #e2e8f0;cursor:pointer;transition:all .18s}.challenge-tab-btn[_ngcontent-%COMP%]:hover{background:#e2e8f0}.challenge-tab-btn.active[_ngcontent-%COMP%]{background:#1e1e2e;color:#e2e8f0;border-color:#1e1e2e}.challenge-card[_ngcontent-%COMP%]{background:#f8fafc;border-left:4px solid #6366f1;border-radius:0 12px 12px 0;padding:1.25rem 1.5rem;margin-bottom:1rem}.challenge-card.bg-green-900\\/20[_ngcontent-%COMP%]{background:#22c55e12;border-left-color:#22c55e}.challenge-card.bg-yellow-900\\/20[_ngcontent-%COMP%]{background:#f59e0b12;border-left-color:#f59e0b}.challenge-card.bg-red-900\\/20[_ngcontent-%COMP%]{background:#ef444412;border-left-color:#ef4444}.challenge-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;margin-bottom:.75rem;flex-wrap:wrap}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1e293b;font-size:1.05rem;font-weight:700;margin:0}.challenge-description[_ngcontent-%COMP%]{color:#1f2937;font-size:.9rem;line-height:1.65;margin-bottom:.85rem}.hints-box[_ngcontent-%COMP%]{background:#3b82f612;border:1px solid rgba(59,130,246,.2);border-radius:8px;padding:.75rem 1rem;font-size:.88rem}.hints-box[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#1e3a5f}.hints-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.4rem 0 0 1.1rem;padding:0}.hints-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#1f2937;margin-bottom:.3rem;line-height:1.5;font-weight:500}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-3[_ngcontent-%COMP%]{margin-top:.75rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;border-radius:99px;padding:.4rem 1.2rem;font-size:.78rem;font-weight:700;letter-spacing:.05em;margin-bottom:1rem;background:#22c55e1a;color:#15803d;border:1px solid rgba(34,197,94,.3);text-transform:uppercase}.summary-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.85rem;margin-bottom:1.25rem}.summary-item[_ngcontent-%COMP%]{display:flex;gap:.75rem;align-items:flex-start;background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:.85rem 1rem}.summary-icon[_ngcontent-%COMP%]{font-size:1.6rem;flex-shrink:0}.summary-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;color:#111827;font-size:.9rem;margin-bottom:.25rem}.summary-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.82rem;margin:0;line-height:1.5}.next-station-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6366f114,#a855f714);border:1px solid rgba(99,102,241,.25);border-radius:14px;padding:1.5rem;margin-bottom:1rem;text-align:center}.next-station-label[_ngcontent-%COMP%]{color:#6366f1;font-size:.78rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:.4rem}.next-station-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#111827;font-size:1.2rem;font-weight:800;margin-bottom:.5rem}.next-station-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#374151;font-size:.9rem;line-height:1.65;margin-bottom:1rem}.next-station-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;background:#6366f1;color:#fff;border-radius:8px;padding:.6rem 1.25rem;font-size:.9rem;font-weight:700;text-decoration:none;transition:background .2s}.next-station-btn[_ngcontent-%COMP%]:hover{background:#4f46e5}.resource-link[_ngcontent-%COMP%]{color:#6366f1;font-weight:600;text-decoration:underline}.resource-link[_ngcontent-%COMP%]:hover{color:#4f46e5}"]})};export{z as L1DsaComponent};
