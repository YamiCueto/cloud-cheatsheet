# 🎓 Guía del Instructor - Clase 1: Fundamentos de IA Generativa

**¡Bienvenido instructor!** 👋

Esta guía te ayudará a explicar cada slide de manera clara, amigable y práctica. Recuerda: el objetivo no es impresionar con tecnicismos, sino que todos comprendan cómo usar IA Generativa para mejorar su trabajo diario.

---

## 📋 Estructura General

- **Duración total:** 60 minutos
- **Estilo:** Conversacional, con ejemplos prácticos
- **Interacción:** Anima preguntas en cada slide
- **Objetivo:** Que salgan con ganas de usar IA HOY mismo

---

## Slide 1: Título 🎯
**Duración:** 2 minutos

### Qué decir:

> "¡Hola a todos! Bienvenidos a la primera clase de nuestro curso de IA Generativa. Durante las próximas semanas vamos a aprender cómo multiplicar nuestra productividad usando herramientas de IA de forma PROFESIONAL, no solo como usuarios casuales.
>
> Esta clase es 100% práctica: nada de teoría pesada. Vamos a enfocarnos en cómo pueden aplicar esto MAÑANA en su trabajo."

### Tono:
- **Entusiasta** pero no exagerado
- **Cercano:** "ustedes" en vez de "los participantes"
- **Práctico:** Enfatiza que todo lo que verán es aplicable YA

### Tips:
- Haz contacto visual con todos
- Sonríe (genera confianza)
- Pregunta: "¿Cuántos han usado ChatGPT?" (para calibrar nivel)

---

## Slide 2: Objetivo 🎯
**Duración:** 8 minutos

### Intro:

> "Miren, hoy vamos a cubrir 4 puntos súper importantes. Pero antes de entrar en detalle, déjenme hacerles una pregunta: ¿Qué creen que es IA Generativa? ... Exacto, muchos piensan que es solo 'chatear con ChatGPT'. Y aquí está el primer gran error."

### Cómo explicar cada acordeón (expandir uno por uno):

#### 1️⃣ Diferenciar entre IA, ML e IA Generativa

**Analogía sencilla:**
> "Imaginen que la IA es como cocinar:
> - **IA Clásica** es seguir una receta exacta: SI tengo harina Y huevos ENTONCES hago pan. No improvisa.
> - **Machine Learning** es un chef que probó 10,000 platos y aprendió qué funciona. Ya no necesita receta, reconoce patrones.
> - **IA Generativa** es un chef que no solo cocina, sino que INVENTA nuevas recetas basándose en lo que aprendió. Crea contenido original."

**Ejemplo práctico para el equipo:**
> "En nuestro contexto:
> - IA Clásica: 'SI saldo < 0 ENTONCES bloquear cuenta' (regla fija)
> - ML: Analiza 100K transacciones y predice: 'Esta transacción tiene 85% probabilidad de ser fraude'
> - GenIA: 'Dame la HU de consulta de saldo y te genero 10 casos de prueba completos con validaciones'"

**Expande el acordeón y lee los puntos clave**, explicando cada emoji:
- 🤖 IA: Es la más antigua, todo programado manualmente
- 📊 ML: Aprende de datos, mejora con el tiempo
- ✨ GenIA: La más nueva, CREA contenido nuevo

**Pregunta de verificación:**
> "¿Cuál usarían para generar test cases? ... ¡Correcto! GenIA, porque necesitamos que CREE contenido nuevo."

---

#### 2️⃣ Comprender cómo funcionan los LLMs

**Intro amigable:**
> "Okay, ahora viene la parte técnica, pero se las voy a poner fácil. No necesitan ser expertos, solo entender 3 conceptos para usar esto como profesionales."

**🔤 Tokens (fichas):**
> "Piensen en tokens como las piezas de un rompecabezas de palabras. La IA no lee 'Banistmo', lee 'Ban-istmo' (2 tokens).
>
> ¿Por qué importa? Porque las IAs tienen límites. Es como WhatsApp: no puedes mandar un mensaje infinito. GPT-4 acepta como 300 páginas de contexto. Suena mucho, pero si le mandas un archivo gigante + historial de chat, se llena rápido."

**💡 Tip práctico:**
> "Regla de oro: 1 token ≈ 4 caracteres. Si tu código tiene 10,000 caracteres, son como 2,500 tokens. Siempre verifica cuánto estás enviando."

**📚 Context Window (ventana de contexto):**
> "Es la memoria de corto plazo de la IA. Claude tiene 500 páginas, GPT-4 unas 300.
>
> Ejemplo real: Si están analizando un módulo completo de VB6 legacy con 5,000 líneas, cabe perfecto en Claude. Pero si intentan mandar TODO el proyecto de 50,000 líneas, se quedará sin memoria."

**🌡️ Temperatura:**
> "Este es MI FAVORITO porque cambia TODO el comportamiento.
>
> **Temperatura baja (0.0-0.3):** Robot preciso
> - Mismo input = mismo output
> - Úsenlo para: código de producción, casos de prueba, documentación
> - La IA es predecible y consistente
>
> **Temperatura alta (0.7-1.5):** Creativo e impredecible
> - Mismo input = outputs diferentes
> - Úsenlo para: lluvia de ideas, explorar alternativas, nombres de variables creativos
> - La IA improvisa más"

**Ejemplo interactivo:**
> "Hagamos un ejercicio mental: Si le pido a ChatGPT 'genera test cases para login'
> - Con temperatura 0.0: Siempre va a generar los mismos 10 casos
> - Con temperatura 1.5: Cada vez genera casos diferentes, algunos raros pero interesantes
>
> ¿Cuál prefieren para producción? ... Exacto, 0.0. Queremos consistencia."

---

#### 3️⃣ Conocer herramientas y sus casos de uso

**Intro:**
> "Okay, ahora viene la parte divertida: ¿cuál herramienta usar para qué? Porque no todas son iguales."

**Analogía del taller:**
> "Es como herramientas de un taller:
> - ChatGPT es el martillo: versátil, lo usas para todo
> - Claude es la sierra de precisión: para trabajos finos
> - Gemini es la caja de herramientas Google: si ya tienes todo en Google, perfecto
> - Copilot es tu ayudante que te pasa herramientas mientras trabajas
> - Cursor es el taller completo automatizado"

**Expande el acordeón y explica cada herramienta:**

1. **💬 ChatGPT:** "El todoterreno"
   > "Este es el más conocido. Úsenlo para arrancar rápido: analizar HU, generar test cases, documentar. Es rápido y versátil."

2. **🧠 Claude:** "El programador senior"
   > "Si tienen que migrar código legacy (VB6 a Java), usen Claude. Es el mejor para código LIMPIO y refactoring complejo. Además, su ventana de contexto es gigante."

3. **🔍 Gemini:** "El integrador"
   > "Si su empresa usa Google Workspace, este es oro. Puede leer Sheets, Docs, analizar Drive. Además maneja imágenes + texto juntos."

4. **👨‍💻 GitHub Copilot:** "El asistente invisible"
   > "Se integra en VS Code y te ayuda mientras escribes. Tú pones `function calcularInteres` y él te completa la función entera. Es como tener un junior dev súper rápido a tu lado."

5. **🖥️ Cursor:** "El arquitecto"
   > "Para refactorings masivos. Puedes decirle 'cambia todos los archivos para usar async/await' y lo hace en segundos. Es un IDE completo con IA."

**Pregunta práctica:**
> "Situación real: Tienen que migrar un módulo VB6 de 3,000 líneas a Java. ¿Cuál usan? ... ¡Correcto! Claude, por su contexto grande y calidad de código."

---

#### 4️⃣ Identificar beneficios y limitaciones

**Intro honesta:**
> "Miren, les voy a decir algo importante: la IA NO es magia. Tiene beneficios ENORMES, pero también limitaciones que DEBEN conocer. Si solo les dijera lo bueno, les estaría mintiendo."

**✅ BENEFICIOS (explica con entusiasmo):**

> "**Velocidad:** Esto es real. Tareas que tomaban 2 horas, ahora toman 30 minutos. Ejemplo concreto: analizar una HU y generar 20 test cases. Antes: 2 horas. Con IA: 30 min (IA genera, tú validas). Ahorro: 75%."

> "**Automatización:** El código base repetitivo (DTOs, controllers, getters/setters) ya no lo escribes. La IA lo genera en segundos. Tú te enfocas en la lógica compleja."

> "**Cobertura:** La IA detecta edge cases que tu cerebro cansado un viernes a las 6pm NO va a ver. Ejemplo: '¿Qué pasa si el monto es negativo?' '¿Y si llegan 1000 requests simultáneos?' La IA lo sugiere."

**⚠️ LIMITACIONES (explica con seriedad):**

> "**Alucinaciones:** Aquí va la limitación MÁS peligrosa. La IA inventa cosas que suenan reales pero NO existen.
>
> Ejemplo REAL que me pasó: Le pedí generar código de integración con Bureau de Crédito y me generó:
> ```java
> bancoService.consultarBureau(cedula)
> ```
> Suena bien, ¿no? El problema: ESE MÉTODO NO EXISTE en nuestro código. Me lo inventó.
>
> **Regla de oro:** SIEMPRE valida el código contra tu base de código real."

> "**Contexto limitado:** La IA no conoce TU arquitectura. No sabe que usan microservicios, que todo es asíncrono, que tienen stored procedures custom. Tienes que DECÍRSELO."

> "**No ejecuta:** Esto es CRÍTICO. La IA genera código, pero NO lo compila, NO lo ejecuta, NO valida que funcione. Tú DEBES probarlo."

> "**Sesgos:** La IA aprendió de código viejo de internet. Puede generar SQL injection vulnerable, código Python 2.7 cuando deberías usar Python 3.11. Siempre revisa seguridad."

**Cierre fuerte:**
> "La conclusión es: La IA es tu copiloto, NO tu piloto. Tú sigues siendo el experto. La IA acelera, pero TÚ validas, TÚ decides, TÚ eres responsable del resultado final."

### Warning final del slide:

> "Y por eso este warning es tan importante: NO es solo chatear casualmente. Es analizar, estructurar, iterar y validar. ESA es la diferencia entre un usuario casual y un profesional."

---

## Slide 3: Evolución de IA, ML, GenIA 🔄
**Duración:** 6 minutos

### Intro con timeline:

> "Okay, ahora hagamos un viaje rápido en el tiempo para entender CÓMO llegamos aquí. Les prometo que es interesante y corto."

### Expande cada era (una por una):

#### ① IA - Años 1950s

**Analogía:**
> "Imaginen una máquina de Coca-Cola antigua con botones. Presionas Coca = sale Coca. Presionas Sprite = sale Sprite. Eso es IA clásica: reglas fijas que alguien programó manualmente.
>
> En banca: 'SI ingreso > $3000 Y historial = bueno ENTONCES aprobar préstamo'. No improvisa, no aprende, solo sigue reglas."

**Expande el acordeón:**
- Lee las características una por una
- Enfatiza: "No aprende, no se adapta"
- Casos de uso: "Chatbots tontos que responden lo mismo siempre"

**🔧 Problema histórico:**
> "El gran problema: mantener 10,000 reglas era una pesadilla. Cambiar una regla podía romper otras 50. Por eso necesitábamos algo mejor..."

---

#### ② ML - Años 1990s

**Analogía:**
> "Ahora imaginen un chef que probó 100,000 platos y aprendió qué ingredientes combinan bien. Ya no necesita recetas exactas, reconoce patrones.
>
> Machine Learning hace eso: le das 100,000 transacciones bancarias (50K legítimas, 50K fraude) y aprende a detectar patrones de fraude. Tú NO programas las reglas, él las descubre."

**Ejemplo práctico:**
> "Sistema anti-fraude: Antes tenías que programar 'SI monto > $10K Y país = Nigeria ENTONCES alerta'. Pero los estafadores cambian tácticas.
>
> Con ML: Analizas 1 millón de transacciones y el modelo aprende: 'Estas 47 características juntas indican 92% probabilidad de fraude'. Y mejora solo con más datos."

**Expande el acordeón:**
- Características: Enfatiza "aprende de datos automáticamente"
- Casos de uso: Netflix recomendaciones (aprendió de millones de usuarios)
- Evolución: "Boom en 2000s gracias a Big Data"

---

#### ③ GenIA - 2020s (¡Aquí estamos!)

**Intro emocionante:**
> "Y llegamos al presente. GenIA cambió TODO en 2022 con ChatGPT. Es el salto más grande desde que inventaron internet."

**Diferencia clave:**
> "IA clásica: Sigue reglas
> ML: Detecta patrones
> GenIA: CREA contenido nuevo
>
> Es como la diferencia entre:
> - Leer una receta (IA clásica)
> - Reconocer qué hace que un plato sea bueno (ML)
> - Inventar nuevas recetas originales (GenIA)"

**Expande el acordeón:**

**✨ Características:**
> "Comprende lenguaje natural: Le puedes hablar como a un humano.
> Multimodal: Texto, código, imágenes, audio, todo junto.
> Conversacional: Aprende de lo que le dijiste antes.
> Billones de parámetros: GPT-4 tiene 1.7 TRILLONES de conexiones neuronales. Es absurdamente poderoso."

**💼 Casos de uso para USTEDES:**
> "🧪 QA: 'Analiza esta HU y genera 15 test cases con edge cases' → LISTO en 2 minutos
> 💻 Dev: 'Genera un controller Spring Boot para gestión de préstamos con validaciones' → LISTO
> 🔧 Refactoring: 'Migra este módulo VB6 a Java manteniendo la lógica' → LISTO
> 🐛 Debugging: Le pegas un stack trace y te dice exactamente qué está mal"

**📈 Evolución:**
> "Esto es EL PRESENTE. Ya no es ciencia ficción. Empresas que adopten IA ahora tienen ventaja competitiva BRUTAL. Por eso estamos haciendo este curso."

---

## Slide 4: ¿Qué son los LLMs? 🤖
**Duración:** 5 minutos

### Intro simple:

> "Okay, LLM suena técnico pero es súper simple: Large Language Model = Modelo Grande de Lenguaje. Básicamente, cerebros artificiales entrenados con TODO internet para entender y generar lenguaje."

### Columna izquierda (ejemplos y capacidades):

**📝 Ejemplos:**
> "Los que van a usar:
> - GPT-4 (OpenAI): El más famoso
> - Claude (Anthropic): El rival fuerte
> - Gemini (Google): El integrador
>
> Todos hacen lo mismo: entienden texto y generan respuestas."

**🎯 Capacidades:**
> "Esto es lo que pueden hacer HOY:
> - Escriben código completo en cualquier lenguaje
> - Explican código legacy que ni el autor entiende
> - Traducen entre lenguajes (VB6→Java)
> - Generan documentación automática
> - Responden preguntas técnicas complejas"

### Columna derecha (conceptos clave):

**Lee cada concepto y da ejemplo:**

1. **🔤 Tokens:**
   > "Ya lo vimos: piezas del rompecabezas. GPT-4: 128K tokens = ~300 páginas. Si tu archivo es más grande, divídelo."

2. **📚 Context Window:**
   > "La memoria. Claude: 200K tokens = ~500 páginas. Aprovéchenlo: manden archivos completos."

3. **🌡️ Temperatura:**
   > "0.0 = robot preciso | 1.5 = artista creativo. Para código: 0.0-0.3 siempre."

4. **⚡ Prompting (instrucción):**
   > "ESTO es el arte. No es chatear casual, es ESTRUCTURAR la pregunta. Próximas clases veremos esto a fondo."

### Cierre:

> "No necesitan ser expertos en cómo funcionan por dentro. Solo entiendan: son modelos gigantes entrenados con billones de palabras, y ustedes los dirigen con prompts bien estructurados."

---

## Slide 5: Temperatura 🌡️
**Duración:** 5 minutos

### Intro divertida:

> "Este concepto les va a cambiar cómo usan IA. Es como el control de volumen, pero para creatividad."

### Prompt ejemplo (caja verde):

> "Miren este prompt: 'Genera 5 nombres para una función que valida saldo bancario'.
>
> Vamos a ver qué pasa con temperatura baja vs alta. Y aquí viene la magia..."

### Comparación lado a lado:

#### **🎯 Temperatura 0.0 (Preciso)**

> "Con temperatura 0.0, la IA es un robot predecible:
> - Mismo input = mismo output SIEMPRE
> - Nombres descriptivos y aburridos: `validarSaldoDisponible`, `verificarFondos`
> - Sin sorpresas, sin creatividad
>
> **Resultado:** 'validateAvailableFunds, checkAccountBalance, verifySufficientFunds'
>
> ¿Cuándo usar esto?
> - ✅ Código de producción
> - ✅ Tests automatizados
> - ✅ Documentación formal
> - ✅ Cualquier cosa que necesite ser CONSISTENTE"

#### **🎨 Temperatura 1.5 (Creativo)**

> "Con temperatura 1.5, la IA es un artista improvisando:
> - Mismo input = outputs DIFERENTES cada vez
> - Nombres creativos y variados: `ensureWalletHealth`, `guardPiggyBank`
> - Muchas sorpresas, algunas geniales, otras raras
>
> **Resultado:** 'ensureWalletSufficiency, guardFinancialGateway, validatePurchasePower'
>
> ¿Cuándo usar esto?
> - ✅ Lluvia de ideas
> - ✅ Explorar alternativas
> - ✅ Nombres creativos para proyectos
> - ✅ Cuando necesitas inspiración"

### Recomendación (caja naranja):

> "Para QA y Dev, la regla es clara:
> **Temperatura 0.0-0.3 para PRODUCCIÓN**
> **Temperatura 0.7-1.5 para EXPLORACIÓN**
>
> Si no especifican, muchas herramientas usan 0.7 por defecto. Ojo con eso."

### Ejercicio rápido:

> "Pregunta: Tienen que generar 100 test cases para regresión. ¿Qué temperatura usan? ... ¡Correcto! 0.0, queremos consistencia total."

---

## Slide 6: Herramientas Disponibles 🛠️
**Duración:** 8 minutos

### Intro:

> "Aquí viene el catálogo de herramientas. No se asusten, NO tienen que usar todas. Van a elegir 2-3 según su rol y estilo de trabajo."

### Expande cada herramienta (una por una):

#### **💬 ChatGPT (GPT-4)**

**Intro:**
> "El más famoso, el más usado. Si solo fueran a usar UNA herramienta, sería esta."

**💰 Precios:**
> "Tienen opciones:
> - Gratis: GPT-3.5 (más lento, menos preciso)
> - $20/mes: GPT-4 (lo que necesitan para trabajo serio)
> - API: Pagan por token (para automatizar)"

**✅ Mejor para:**
> "Todo lo rápido y versátil:
> - Analizar HU en 2 minutos
> - Generar test cases con validaciones
> - Crear datos sintéticos (JSON, SQL)
> - Documentar código
> - Traducir docs técnicas"

**⚠️ Limitaciones:**
> "Alucinaciones: Inventa métodos que no existen
> Conocimiento: Hasta octubre 2023
> No ejecuta: Solo genera, no valida"

**💡 Tips:**
> "Usen GPT-4 para cosas importantes, GPT-3.5 para rápidas.
> Temperatura baja (0.0-0.3) para código.
> Iterar: Primera respuesta es borrador, refinen."

---

#### **🧠 Claude (Sonnet)**

**Intro:**
> "El rival fuerte de ChatGPT. Si ChatGPT es el martillo, Claude es la sierra de precisión."

**💰 Precios:**
> "Gratis con límites | $20/mes Pro | API (más cara que GPT)"

**✅ Mejor para:**
> "Trabajos pesados y complejos:
> - Migración de código legacy COMPLETO
> - Refactoring manteniendo lógica
> - Code review profundo
> - Ventana de contexto GIGANTE (500 páginas)"

**Caso de uso real:**
> "Ejemplo: Tienen módulo VB6 de 5,000 líneas que nadie entiende. Lo pegan completo en Claude y le dicen: 'Explícame qué hace y migralo a Java Spring Boot manteniendo la lógica exacta'.
>
> Claude lo hace. ChatGPT se quedaría corto con archivos tan grandes."

**💡 Tips:**
> "Aprovechen la ventana gigante: manden archivos completos.
> Especifiquen estilo: 'Código limpio, SOLID, bien documentado'.
> Úsenlo cuando CALIDAD es más importante que velocidad."

---

#### **🔍 Gemini (Google)**

**Intro:**
> "Si su empresa vive en Google Workspace, este es oro puro."

**✅ Mejor para:**
> "Integración total con Google:
> - Analiza Sheets con millones de filas
> - Lee Docs y genera resúmenes
> - Busca en Drive con contexto
> - Multi-formato (multimodal): Imagen + texto juntos"

**Ejemplo práctico:**
> "Tienen un Sheet con 10K transacciones y necesitan análisis de fraude. Gemini lo lee, analiza y genera report. Todo sin salir de Google."

**⚠️ Limitaciones:**
> "Menos usado para desarrollo puro.
> Calidad de código inferior a Claude/GPT-4."

---

#### **👨‍💻 GitHub Copilot**

**Intro:**
> "Este es DIFERENTE. No es un chat, es un asistente dentro de tu IDE."

**💰 Precios:**
> "$10/mes individual (vale cada centavo)
> Gratis para estudiantes"

**✅ Mejor para:**
> "Desarrollo activo:
> - Autocompletado inteligente mientras escribes
> - Generas tests con un comentario
> - Completa funciones enteras
> - Sugiere refactorings en vivo"

**Demo mental:**
> "Imaginen esto: Escriben en VS Code:
> ```
> // Función para calcular interés compuesto con tasa variable
> function calcularInteres
> ```
> Y antes de terminar, Copilot ya generó la función COMPLETA con validaciones. Solo presionan Tab para aceptar."

**⚠️ Limitaciones:**
> "No explica, solo sugiere.
> Puede sugerir código inseguro.
> SIEMPRE revisen antes de aceptar."

---

#### **🖥️ Cursor**

**Intro:**
> "El nuevo niño del barrio. Es como VS Code + ChatGPT + Copilot todo en uno."

**✅ Mejor para:**
> "Refactorings masivos:
> - 'Cambia todo el proyecto a async/await'
> - 'Aplica este patrón en todos los controllers'
> - Composer: Genera features completas (componente + test + docs)"

**Ejemplo impactante:**
> "Comando: 'Refactoriza todos los servicios para usar inyección de dependencias con interfaces'.
>
> Cursor edita 30 archivos en 2 minutos. Manualmente tomaría horas."

**💡 Tips:**
> "Usen @workspace para contexto completo.
> Revisen cambios antes de aplicar en producción.
> Es $20/mes pero incluye GPT-4 ilimitado."

---

### Footer (caja azul):

> "Recuerden: No necesitan usar TODAS. Empiecen con ChatGPT, agreguen Copilot si están en VS Code, y ya. Con eso van a multiplicar su productividad 3x fácil."

---

## Slide 7: Beneficios ✅
**Duración:** 6 minutos

### Intro positiva:

> "Okay, aquí vienen las buenas noticias. Los beneficios REALES que van a experimentar. Y no es marketing, son números."

### Expande cada beneficio:

#### **⚡ Velocidad**

**Métrica impactante:**
> "Antes: 2 horas analizando HU + generando 20 casos de prueba
> Con IA: 30 minutos (IA genera, tú validas)
> **Ahorro: 75% del tiempo**
>
> En un sprint de 10 HUs, ahorran 15 horas. Eso es casi 2 días completos."

**Casos reales:**
> "Equipo QA en fintech: Redujo sprint de testing de 2 semanas a 1.
> Developer: CRUD completo en 10 min vs 2 horas manual."

**Mejores prácticas:**
> "Usen IA para repetitivo, ustedes para lo complejo.
> Midan antes/después para justificar adopción.
> Velocidad CON validación = éxito."

---

#### **🔧 Código Base Repetitivo**

**Ejemplo visceral:**
> "Nadie disfruta escribir getters, setters, DTOs con 20 campos. Es aburrido, repetitivo, propenso a typos.
>
> Antes: 200 líneas de código base repetitivo = 1 hora de tu vida que nunca recuperas
> Con IA: 5 min generando + 10 min validando = 15 min total
>
> **Ahorro: 45 minutos por DTO**"

**Caso real:**
> "API REST con 15 endpoints completos: Antes 3 días. Con IA: 1 día."

**Mejores prácticas:**
> "Definan estándares: 'Usa Lombok, validaciones JSR-303, ResponseEntity'
> Generen, validen, ajusten.
> Creen biblioteca de prompts reutilizables."

---

#### **📝 Documentación**

**Dolor común:**
> "Levanten la mano si les ENCANTA documentar código... Nadie, ¿verdad? Todos odiamos documentar.
>
> Problema: Sin docs, onboarding toma semanas, mantenimiento es pesadilla."

**Solución con IA:**
> "Antes: README completo = 2-3 horas escribiendo
> Con IA: 15 min (IA genera estructura, tú ajustas)
>
> JavaDoc: IA documenta 100 métodos en 5 minutos
> Swagger: Genera annotations completas desde código"

**Caso real:**
> "Onboarding: Nuevo dev entendió proyecto en 1 día vs 1 semana antes."

---

#### **🎯 Edge Cases**

**Problema silencioso:**
> "Este es peligroso: Los edge cases que NO detectamos terminan siendo bugs en producción.
>
> Viernes 6pm, cerebro cansado, no pensamos en: '¿Qué pasa si el monto es negativo? ¿Y si el usuario manda emoji en la contraseña?'"

**Solución con IA:**
> "IA sugiere casos extremos:
> - Valores nulos, negativos, vacíos
> - Límites (máximo int, overflow)
> - Concurrencia (1000 requests simultáneos)
> - Encoding (emoji, caracteres especiales)"

**Métrica:**
> "Antes: 60% cobertura de edge cases
> Con IA: 85-90% cobertura
> **Resultado: 40% menos bugs en producción**"

**Mejores prácticas:**
> "Instrucción: 'Genera casos extremos para login, incluye concurrencia, límites, valores nulos'
> Revisen con equipo y prioricen.
> Generen tests automatizados para edge cases críticos."

---

### Footer (caja azul):

> "Estos beneficios son REALES. Van a sentirlos desde el primer día. Pero ojo, también hay limitaciones que deben conocer..."

---

## Slide 8: Limitaciones ⚠️
**Duración:** 7 minutos

### Intro seria pero constructiva:

> "Okay, toca ser honestos. La IA NO es perfecta. Tiene limitaciones SERIAS, y si no las conocen, van a meter la pata. Pero tranquilos, cada limitación tiene solución."

### Expande cada limitación:

#### **🌀 Alucinaciones**

**Intro alarmante:**
> "Esta es la MÁS PELIGROSA. La IA inventa cosas que suenan 100% reales pero NO EXISTEN.
>
> Es como un compañero que miente con confianza total. Suena creíble, pero está mal."

**Ejemplos reales (enfatiza que SON REALES):**
> "❌ ChatGPT inventó: `Arrays.sortByCustomComparator()` en Java → NO EXISTE
> ❌ Sugirió: `npm install react-native-super-forms` → PACKAGE INEXISTENTE
> ❌ Generó: `bancoService.consultarBureau()` → MÉTODO INVENTADO"

**Cómo evitarlo:**
> "✅ Proporcionen contexto real: 'Usa SOLO métodos de esta clase: [código]'
> ✅ Validen contra documentación oficial SIEMPRE
> ✅ Temperatura baja (0.0-0.3) reduce alucinaciones
> ✅ Code review obligatorio de salida de IA
> ✅ Si no autocompleta en IDE, probablemente no existe"

**Regla de oro:**
> "NUNCA confíen 100% en código generado. SIEMPRE validen con docs oficiales y ejecuten."

---

#### **🔍 Contexto Limitado**

**Problema:**
> "La IA no conoce:
> - Tu arquitectura (¿microservicios? ¿monolito?)
> - Tus estándares (¿JPA? ¿jOOQ?)
> - Tus reglas de negocio (validaciones custom bancarias)
> - Tus constraints (performance, seguridad)"

**Ejemplos reales:**
> "❌ IA generó REST cuando arquitectura era GraphQL
> ❌ Usó JPA cuando proyecto usaba jOOQ exclusivamente
> ❌ Código síncrono cuando todo es reactive (WebFlux)"

**Soluciones:**
> "✅ Creen `context.md` con arquitectura del proyecto
> ✅ Describan el big picture: 'Microservicios con eventos asíncronos'
> ✅ Especifiquen: 'Usa repository pattern, no DAO directo'
> ✅ Usen herramientas con workspace context (Cursor, Copilot Chat)
> ✅ Eduquen a la IA: 'En ESTE proyecto usamos X porque Y'"

---

#### **❌ No Ejecuta**

**Realidad dura:**
> "La IA genera código que PARECE correcto, pero:
> - No lo compila
> - No lo ejecuta
> - No valida que funcione
> - No detecta NPE en runtime
> - No verifica performance"

**Ejemplos reales:**
> "❌ Código sintácticamente correcto pero con NullPointerException en runtime
> ❌ Imports faltantes o incorrectos
> ❌ Lógica que funciona en happy path pero falla con null
> ❌ Queries SQL correctas en teoría, lentas en producción (N+1 problem)"

**Soluciones:**
> "✅ SIEMPRE compilen y ejecuten antes de commit
> ✅ Tests automáticos: Si IA genera código, que genere tests también
> ✅ Linters y formatters detectan errores básicos
> ✅ CI/CD: Pipeline valida antes de merge
> ✅ TDD: Generen tests primero, luego código"

**Regla crítica:**
> "La IA es un junior developer SÚPER rápido, pero TÚ eres el senior que valida."

---

#### **📊 Sesgos**

**Problema:**
> "La IA aprendió de código viejo de internet. Reproduce:
> - Prácticas anticuadas
> - Vulnerabilidades conocidas
> - Código inseguro
> - Versiones obsoletas"

**Ejemplos reales:**
> "❌ SQL concatenation en vez de prepared statements → **SQL INJECTION**
> ❌ Código Python 2.7 cuando Python 3.11 es estándar
> ❌ jQuery cuando proyecto usa React
> ❌ Passwords en plaintext en ejemplos"

**Soluciones:**
> "✅ Security scanner detecta vulnerabilidades
> ✅ Especifiquen: 'Código debe ser OWASP Top 10 compliant'
> ✅ Style guide: 'Sigue estas convenciones: [link]'
> ✅ Code review educativo: Expliquen por qué algo es mejor práctica
> ✅ Mantengan al equipo actualizado en security"

**Historia real:**
> "Un equipo usó código IA con SQL injection vulnerable. Auditoría de seguridad lo detectó. Tuvieron que rehacer todo.
>
> Lección: SIEMPRE pasen security scanner en código IA."

---

### Footer (caja naranja):

> "Recuerden: Estos NO son razones para NO usar IA. Son razones para usarla BIEN. Con validación adecuada, los beneficios superan las limitaciones 10 a 1."

---

## Slide 9: Ejercicio Práctico 💪
**Duración:** 5 minutos

### Intro motivacional:

> "Okay, vamos a poner todo en práctica. Este es un ejercicio que van a hacer AHORA o en sus casas. Es una HU real de sistema bancario."

### HU (caja azul):

> "Lean esta HU conmigo:
>
> 'Como oficial de crédito, quiero consultar el historial crediticio del cliente en el Bureau de Crédito para evaluar su capacidad de pago antes de aprobar el préstamo.'
>
> Esto es REAL. Todas las financieras tienen esto."

### Instrucciones (caja naranja):

**Lee paso por paso:**

1. **Abrir ChatGPT o Claude**
   > "Usen lo que tengan. Gratis funciona para esto."

2. **Analizar la HU: Actores, acciones, datos**
   > "Antes de escribir NADA en la IA, analicen:
   > - Actor: Oficial de crédito
   > - Acción: Consultar historial crediticio
   > - Sistema externo: Bureau de Crédito (API)
   > - Criticidad: ALTA (decisión crediticia)
   > - Datos: Documento identidad → Score, deudas, lista riesgo"

3. **Escribir prompt estructurado con [ROL] [CONTEXTO] [TAREA] [FORMATO]**
   > "Esto es CRÍTICO. No escriban 'hazme casos de prueba'. Estructuren:
   >
   > ```
   > [ROL] Actúa como QA senior en banca
   >
   > [CONTEXTO]
   > - Sistema: Préstamos Bancarios
   > - Usuario: Oficial de crédito
   > - Integración: API Bureau de Crédito (externa)
   > - Criticidad: Alta (decisión crediticia)
   >
   > [TAREA]
   > Genera 15 casos de prueba incluyendo:
   > 1. Path feliz (cliente buen historial)
   > 2. Cliente con deudas activas
   > 3. Cliente en lista riesgo
   > 4. Validaciones: documento válido, timeout 5seg
   > 5. Manejo errores: servicio caído, timeout
   >
   > [FORMATO]
   > Tabla: ID | Escenario | Pre-condiciones | Pasos | Resultado Esperado | Prioridad
   > ```"

4. **Iterar: refinar resultado 2-3 veces**
   > "Primera respuesta = borrador. Refinen:
   > - 'Agrega 5 casos más para edge cases de concurrencia'
   > - 'Incluye validaciones de seguridad'
   > - 'Prioriza por criticidad'"

5. **Validar con tu conocimiento de QA/Dev**
   > "Revisen si hace sentido. ¿Falta algo? ¿Hay algo raro? Ajusten."

### Objetivo (caja verde):

> "El objetivo NO es que la IA lo haga todo. Es que en 10 minutos tengan una base sólida que manualmente tomaría 2 horas.
>
> Van a tener 15 casos de prueba completos que solo necesitan ajustar al contexto específico de su empresa."

### Cierre:

> "Este ejercicio hoy en su casa. Próxima clase revisamos resultados y vemos quién logró el mejor prompt. Esto se vuelve un juego, van a ver."

---

## Slide 10: Resumen y Cierre 🎯
**Duración:** 3 minutos

### Qué aprendimos hoy (caja azul):

> "Recapitulemos rápido lo que cubrimos:
>
> ✅ Diferenciamos IA, ML y GenIA (clásica vs aprendizaje vs creación)
> ✅ Entendemos LLMs: tokens, context, temperatura
> ✅ Conocemos herramientas: ChatGPT, Claude, Gemini, Copilot, Cursor
> ✅ Identificamos beneficios REALES: 75% más rápido, edge cases, docs automáticas
> ✅ Y lo MÁS importante: Conocemos las limitaciones y cómo evitarlas"

### Próxima clase (caja naranja):

> "La semana que viene vamos a lo FUERTE: Prompt Engineering.
>
> Van a aprender a estructurar prompts como profesionales. La diferencia entre:
> - Usuario casual: 'hazme test cases' → resultado genérico
> - Profesional: prompt estructurado → resultado perfecto en 2 iteraciones
>
> Les adelanto: Módulo 2 del plan de estudios es el MÁS CRÍTICO. Ahí es donde se vuelven profesionales."

### Quote final (caja verde):

> "Déjenme cerrar con esto:
>
> **'La IA es tu copiloto, NO tu piloto. Tú sigues siendo el experto que toma las decisiones.'**
>
> Esto resume TODO. La IA amplifica tu conocimiento, no lo reemplaza. Ustedes siguen siendo el cerebro, la IA es la herramienta súper poderosa.
>
> Ahora, vayan a jugar con ChatGPT, rompan cosas, experimenten. Próxima clase espero que vengan con dudas y ejemplos. ¡Nos vemos!"

---

## 🎯 Tips Finales para el Instructor

### Lenguaje corporal:
- **Entusiasmo genuino:** Si tú no estás emocionado, ellos no lo estarán
- **Contacto visual:** Conecta con todos, no solo con los que participan
- **Gestos:** Usa las manos para enfatizar puntos clave

### Manejo de preguntas:
- **Nunca digas "no sé":** Di "buena pregunta, investigamos juntos"
- **Valida al que pregunta:** "Excelente punto, justo iba a mencionar eso"
- **Redirige si es off-topic:** "Super interesante, hablemos de eso en el break"

### Ritmo:
- **Pausas estratégicas:** Después de conceptos clave, da 3 segundos de silencio
- **Chequeos rápidos:** "¿Tiene sentido hasta aquí?" cada 10 minutos
- **Energía variada:** Baja para serio (limitaciones), alta para beneficios

### Ejemplos:
- **Usa SU contexto:** Si trabajan en banca, todos ejemplos bancarios
- **Nombres reales:** No "función X", sino "consultarBureau()"
- **Historias:** "Me pasó esto..." (genera conexión)

### Cierre de clase:
- **Tarea clara:** "Hagan el ejercicio y manden screenshot del resultado"
- **Canal de dudas:** "Cualquier cosa, me escriben al Slack"
- **Hype próxima clase:** "La semana que viene se pone BUENA"

---

## 📊 Evaluación de éxito de la clase

### Indicadores que salió bien:
- ✅ Preguntas durante la clase (señal de engagement)
- ✅ "Ah!" de comprensión cuando explicas conceptos
- ✅ Se quedan después de clase haciendo preguntas
- ✅ En el break todos están probando ChatGPT

### Ajustes si pierdes atención:
- Acelera: Si ven celulares, estás yendo lento
- Agrega ejemplo: Si ves caras confundidas, da otro ejemplo práctico
- Pregunta directa: "Juan, ¿tú qué usarías para este caso?"

---

## 🎓 Recuerda:

**Tu objetivo NO es demostrar que sabes mucho. Es que ELLOS salgan sintiendo que PUEDEN usarlo mañana.**

Si al final de la clase alguien dice: *"Wow, esto es más fácil de lo que pensé"* → **GANASTE**.

¡Éxito, instructor! 🚀
