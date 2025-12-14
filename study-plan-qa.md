# IA Generativa para Equipos QA y Desarrollo

**Plan de Capacitación - 1 Mes (20 días hábiles)**

---

**Enfoque:** De Usuario Casual a Prompt Engineer Profesional  
**Duración:** 1 hora diaria  
**Modalidad:** Teórico-Práctica  
**Dirigido a:** Equipos QA y Desarrollo

---

## ⚠️ IMPORTANTE: No es solo "chatear con ChatGPT"

### El Mito del Chat Casual

Muchas personas creen que usar IA Generativa es simplemente conversar con ChatGPT de manera amplia y esperar respuestas. **Esta es la diferencia entre un usuario casual y un profesional:**

| Usuario Casual ❌ | Prompt Engineer Profesional ✅ |
|------------------|-------------------------------|
| **Prompt amplio y genérico:**<br>"Hazme casos de prueba" | **Prompt estructurado:**<br>"Actúa como QA senior en banca. Sistema de préstamos para oficiales. Genera 10 casos de prueba incluyendo validaciones CIFIN, formato tabla con ID, descripción, pasos, resultado esperado" |
| Acepta primera respuesta | Itera y refina hasta resultado óptimo |
| No analiza la necesidad | Analiza HU/requerimiento ANTES de escribir prompt |
| Copia/pega sin validar | Valida, ajusta y adapta al contexto |
| Resultados inconsistentes | Resultados predecibles y reutilizables |

> **⚡ CLAVE:** El poder de la IA no está en la herramienta, está en tu capacidad de ANALIZAR la necesidad y ESTRUCTURAR el prompt correctamente.

---

## Ejemplo Práctico: Historia de Usuario Real

### Historia de Usuario:
*Como oficial de crédito, quiero consultar el historial crediticio del cliente en el Bureau de Crédito para evaluar su capacidad de pago antes de aprobar el préstamo.*

### ❌ Prompt Casual (MAL):
```
"Hazme casos de prueba para consultar Bureau de Crédito"
```

**Problema:** Respuesta genérica, sin contexto de banca, sin validaciones específicas, casos incompletos.

### ✅ Prompt Profesional (BIEN):
```
[ROL] Actúa como QA senior especializado en sistemas bancarios

[CONTEXTO]
- Sistema: Préstamos Bancarios
- Usuario: Oficial de crédito
- Integración: API Bureau de Crédito (externa)
- Criticidad: Alta (decisión crediticia)

[TAREA]
Genera 15 casos de prueba para consulta Bureau de Crédito incluyendo:
1. Path feliz (cliente con buen historial)
2. Cliente con deudas activas
3. Cliente en lista de riesgo
4. Validaciones: documento de identidad válido, timeout 5seg
5. Manejo errores: servicio caído, timeout, respuesta inválida

[FORMATO]
Tabla con columnas: ID | Escenario | Pre-condiciones | Pasos | Resultado Esperado | Prioridad
```

> **💡 Resultado:** Casos de prueba completos, específicos, con validaciones de negocio, edge cases identificados, y priorizados por criticidad.

---

## 🎯 Proceso Crítico: Del Requerimiento al Prompt

| Paso | Acción | Output |
|------|--------|--------|
| 1 | Leer HU/Requerimiento | Entendimiento completo |
| 2 | Identificar Actores | Lista de roles involucrados |
| 3 | Extraer Acciones | CRUD, validaciones, flujos |
| 4 | Identificar Datos | Entradas/salidas/formatos |
| 5 | Reglas de Negocio | Validaciones específicas |
| 6 | Edge Cases | Escenarios alternativos |
| 7 | Estructurar Prompt | Rol+Contexto+Tarea+Formato |
| 8 | Ejecutar y Validar | Resultado vs esperado |
| 9 | Iterar si necesario | Refinar hasta óptimo |

---

## 📚 Plan de Estudios Reformado - 12 Clases Prácticas

**🎯 Filosofía del Curso:**
- ✅ Clase 1: Fundamentos teóricos (YA COMPLETADA)
- ✅ Clases 2-12: **100% talleres prácticos** con entregables reales
- ✅ Cada clase = 1 problema real → solución con IA → resultado tangible

### ✅ Módulo 1: Fundamentos (COMPLETADO - Clase 1)

**Clase 1: Fundamentos de IA Generativa** ✅
- ✅ Diferencias IA, ML y GenIA
- ✅ LLMs: tokens, contexto, temperatura
- ✅ Herramientas: ChatGPT, Claude, Gemini, Copilot, Cursor
- ✅ Beneficios y limitaciones reales
- ✅ Ejercicio práctico: Análisis de HU de Bureau de Crédito

---

### 🎯 Módulo 2: Talleres Prácticos para QA (4 sesiones)

> **Enfoque: Manos a la obra. Cada clase = 1 taller completo con resultados tangibles**

**Clase 2: Taller - Generación de Test Cases desde HU**
- **Reto:** HU real de consulta Bureau de Crédito
- **Práctica:** Analizar HU → Estructurar prompt → Generar 15 test cases con edge cases
- **Entregable:** Suite de casos de prueba lista para usar
- **Tiempo:** 15 min teoría + 45 min práctica

**Clase 3: Taller - Generación de Datos de Prueba Masivos**
- **Reto:** Necesitan 1000 clientes sintéticos para testing
- **Práctica:** Prompt para generar JSON, SQL inserts, CSV con datos realistas
- **Entregable:** Dataset completo listo para carga
- **Tiempo:** 10 min teoría + 50 min práctica

**Clase 4: Taller - Scripts de Automatización con IA**
- **Reto:** Automatizar flujo de login + consulta saldo
- **Práctica:** Desde test cases → generar scripts Selenium/Cypress funcionales
- **Entregable:** Script ejecutable con assertions
- **Tiempo:** 10 min teoría + 50 min práctica

**Clase 5: Taller - Testing de APIs y Validaciones**
- **Reto:** Suite completa de Postman/REST Assured para API de préstamos
- **Práctica:** HU → requests + validaciones + edge cases + manejo errores
- **Entregable:** Collection Postman exportable
- **Tiempo:** 10 min teoría + 50 min práctica

---

### 💻 Módulo 3: Talleres Prácticos para Desarrollo (4 sesiones)

**Clase 6: Taller - Generación de CRUD Backend Completo**
- **Reto:** API REST de gestión de clientes desde cero (Spring Boot + H2)
- **Práctica:** HU → Controller + Service + Repository + DTOs + Tests
- **Entregable:** Backend funcional con Swagger, listo para consumir
- **Tiempo:** 10 min teoría + 50 min práctica

**Clase 7: Taller - Frontend Legacy Consumiendo API**
- **Reto:** Cliente web Vanilla JS que consume API de Clientes (Clase 6)
- **Práctica:** Generar HTML + JS puro con fetch, DOM manipulation, localStorage
- **Entregable:** App legacy funcional (CRUD completo en navegador)
- **Tiempo:** 10 min teoría + 50 min práctica

**Clase 8: Taller - Refactoring Frontend Legacy a Angular**
- **Reto:** Migrar app Vanilla JS (Clase 7) a Angular moderno
- **Práctica:** Analizar legacy → Elegir estrategia → Migrar a Angular → Validar equivalencia
- **Entregable:** App Angular consumiendo misma API + arquitectura escalable
- **Tiempo:** 10 min teoría + 50 min práctica

**Clase 9: Taller - Testing E2E del Stack Completo**
- **Reto:** Suite de tests sobre Backend (Clase 6) + Frontend Angular (Clase 8)
- **Práctica:** Tests unitarios Service + Tests integración API + Tests E2E Cypress
- **Entregable:** Suite completa de tests automatizados pasando
- **Tiempo:** 10 min teoría + 50 min práctica

---

### 🚀 Módulo 4: Talleres Integrados Dev-QA (3 sesiones)

**Clase 10: Taller - Debugging y Solución de Errores**
- **Reto:** 5 bugs reales introducidos en el Stack (Backend + Frontend)
- **Práctica:** IA analiza stack traces → Sugiere solución → Implementar fix
- **Entregable:** Bugs resueltos con explicación y tests de regresión
- **Tiempo:** 10 min teoría + 50 min práctica

**Clase 11: Taller - Documentación Automática del Proyecto**
- **Reto:** Documentar Stack completo (Backend + Frontend Angular)
- **Práctica:** README completo, JavaDoc, JSDoc, diagramas arquitectura, guía deploy
- **Entregable:** Suite completa de documentación profesional
- **Tiempo:** 10 min teoría + 50 min práctica

**Clase 12: Proyecto Final Integrado**
- **Reto:** Extender sistema con módulo de Transacciones (Backend + Frontend + Tests)
- **Equipos mixtos Dev+QA:**
  - Analizar 3 HU complejas (Transacciones bancarias)
  - Dev: Backend transacciones + Frontend funcional
  - QA: Suite tests completa (unitarios, integración, E2E)
  - Code Review con IA + Documentación
  - Deploy y presentación
- **Entregable:** Sistema completo funcional + tests + docs + presentación
- **Tiempo:** 60 min (sin teoría, full hands-on)

---

## 🎓 Estructura de cada Taller (Clases 2-12)

### Formato Estándar (60 minutos):

**1. Intro Rápida (5-10 min):**
- Contexto del reto
- Ejemplo de prompt base
- Tips clave para este taller específico

**2. Trabajo Individual/Parejas (30 min):**
- Cada uno trabaja en su máquina con IA
- Instructor circula ayudando
- Resolución de dudas en vivo

**3. Revisión Grupal (15 min):**
- 2-3 personas comparten su solución
- Comparar diferentes approaches
- Identificar mejores prácticas

**4. Cierre y Tarea (5 min):**
- Lecciones aprendidas
- Tarea opcional: variación del ejercicio
- Preview próxima clase

---

## 📊 Evaluación y Entregables

### Entregables por Participante:

1. **Documento "Prompt Library"**: 20 prompts reutilizables categorizados (QA, Dev, Documentación)
2. **Repositorio GitHub**: código + tests generados durante el curso
3. **Video demo 5 minutos**: flujo HU → análisis → prompt → código → tests
4. **Presentación proyecto final**: 15 min por equipo

### Criterios de Evaluación:

- **Calidad del análisis de HU (30%)**: capacidad de extraer información clave
- **Estructura de prompts (30%)**: uso correcto de Rol, Contexto, Tarea, Formato
- **Resultados obtenidos (25%)**: calidad del código/tests generados
- **Iteración y refinamiento (15%)**: mejora del prompt hasta resultado óptimo

---

## 📋 Plantillas Reutilizables

### Plantilla 1: Análisis de Historia de Usuario
```markdown
## Historia de Usuario
[Pegar HU original]

## Análisis
**Actores:** [ej: Oficial de crédito, sistema Bureau de Crédito]
**Acción principal:** [ej: Consultar historial crediticio]
**Entradas:** [ej: documento de identidad, tipo consulta]
**Salidas:** [ej: score, deudas activas]
**Reglas de negocio:** [ej: validar lista de riesgo, timeout 5seg]
**Edge cases:** [ej: documento inválido, servicio caído]
**Dependencias:** [ej: API Bureau de Crédito, BD clientes]
```

### Plantilla 2: Prompt para Casos de Prueba
```
[ROL] Actúa como QA senior en [dominio: banca, e-commerce, etc]

[CONTEXTO]
- Sistema: [nombre sistema]
- Usuario: [tipo usuario]
- Criticidad: [Alta/Media/Baja]
- Integraciones: [sistemas externos]

[TAREA]
Genera [cantidad] casos de prueba para [funcionalidad] incluyendo:
1. Path feliz
2. [Validaciones específicas]
3. Edge cases: [listar]
4. Manejo de errores: [escenarios]

[FORMATO]
Tabla: ID | Escenario | Pre-condiciones | Pasos | Resultado Esperado | Prioridad
```

### Plantilla 3: Prompt para Code Generation
```
[ROL] Actúa como desarrollador senior [tecnología: Java/Spring Boot]

[CONTEXTO]
- Proyecto: [nombre]
- Arquitectura: [microservicios, monolito, etc]
- Estándares: [patrones a seguir]

[TAREA]
Genera [componente: controller, service, repository] para [funcionalidad]
Incluye:
- Validaciones de entrada
- Manejo de excepciones
- Logging
- Tests unitarios

[RESTRICCIONES]
- Usa [librerías específicas]
- Sigue [convenciones de naming]
- Documenta con JavaDoc

[FORMATO]
Código completo funcional + tests
```

---

## ✨ Mejores Prácticas

### Siempre analiza ANTES de escribir el prompt
Dedica 5 minutos a entender la HU/requerimiento antes de usar la IA

### Sé específico, no genérico
En vez de "genera tests", di "genera 10 tests para login incluyendo 2FA y bloqueo por intentos"

### Proporciona contexto de negocio
La IA no sabe que trabajas en banca, que hay regulaciones, límites, etc. Díselo.

### Define el formato de salida
Tabla, JSON, código con tests, Gherkin... especifica cómo quieres el resultado

### Itera, no te conformes
Si el resultado no es óptimo, refina el prompt. Promedio: 2-3 iteraciones.

### Valida SIEMPRE los resultados
La IA puede alucinar. Revisa código, ejecuta tests, verifica lógica de negocio.

### Construye tu biblioteca de prompts
Guarda los prompts que funcionan bien para reutilizarlos y mejorarlos.

### Combina IA con tu experiencia
La IA es una herramienta, no un reemplazo. Tu criterio profesional es irreemplazable.

---

## ❌ Errores Comunes a Evitar

| Error | Por qué es malo | Solución |
|-------|----------------|----------|
| Prompt muy amplio<br>"Hazme un sistema" | Resultado genérico e inútil | Especifica módulo, funcionalidad, tecnologías |
| Sin contexto de negocio<br>"Genera validaciones" | Validaciones genéricas sin reglas específicas | Incluye reglas de negocio, límites, formatos |
| No validar resultados<br>Copiar/pegar directo | Código con bugs, tests incompletos | Revisar, ejecutar, validar con casos reales |
| Prompt único sin iterar<br>Usar primera respuesta | Calidad subóptima | Refinar 2-3 veces hasta resultado ideal |
| Olvidar edge cases<br>Solo path feliz | Tests incompletos, bugs en producción | Listar explícitamente escenarios alternativos |
| No especificar formato<br>"Genera documentación" | Resultado en formato no deseado | Define: Markdown, tabla, diagrama, etc. |

---

## 🔗 Recursos Adicionales

### Herramientas Recomendadas:
- **ChatGPT (OpenAI):** https://chat.openai.com - Versión gratuita y Plus ($20/mes)
- **Claude (Anthropic):** https://claude.ai - Excelente para código y análisis
- **GitHub Copilot:** $10/mes - Integrado en VS Code
- **Cursor:** https://cursor.sh - IDE con IA integrada
- **Promptly:** Interfaz desarrollada internamente para múltiples LLMs

### Documentación y Guías:
- **Prompt Engineering Guide:** https://www.promptingguide.ai
- **OpenAI Best Practices:** https://platform.openai.com/docs/guides/prompt-engineering
- **Anthropic Prompt Library:** https://docs.anthropic.com/claude/prompt-library
- **Learn Prompting:** https://learnprompting.org

---

## 🎯 Conclusión

La IA Generativa no es magia, es una herramienta poderosa que amplifica tu conocimiento y experiencia cuando se usa correctamente.

**La diferencia entre un usuario casual y un profesional está en:**

1. **Entender profundamente la necesidad** antes de escribir cualquier prompt
2. **Estructurar prompts** con Rol, Contexto, Tarea y Formato específicos
3. **Iterar y refinar** hasta obtener el resultado óptimo
4. **Validar siempre** los resultados con tu criterio profesional

Este curso te dará las herramientas para pasar de usuario casual a Prompt Engineer profesional, multiplicando tu productividad sin sacrificar calidad.

> **Recuerda:** La IA es tu copiloto, no tu piloto. Tú sigues siendo el experto que toma las decisiones.

---

## 💡 ¡Éxito en tu jornada de aprendizaje!

Cualquier duda, estamos para apoyarte en este proceso de transformación digital.

---

**Para convertir este documento a PDF:**
- Usa pandoc: `pandoc curso_ia.md -o curso_ia.pdf`
- O desde Google Docs: importa el markdown y exporta como PDF
- O desde VS Code: instala la extensión "Markdown PDF"
- O usa herramientas online como: https://www.markdowntopdf.com
