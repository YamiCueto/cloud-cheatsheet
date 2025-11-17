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
*Como oficial de crédito, quiero consultar el historial crediticio del cliente en CIFIN para evaluar su capacidad de pago antes de aprobar el préstamo.*

### ❌ Prompt Casual (MAL):
```
"Hazme casos de prueba para consultar CIFIN"
```

**Problema:** Respuesta genérica, sin contexto de banca, sin validaciones específicas, casos incompletos.

### ✅ Prompt Profesional (BIEN):
```
[ROL] Actúa como QA senior especializado en sistemas bancarios

[CONTEXTO]
- Sistema: Préstamos Banistmo Panamá
- Usuario: Oficial de crédito
- Integración: API CIFIN (externa)
- Criticidad: Alta (decisión crediticia)

[TAREA]
Genera 15 casos de prueba para consulta CIFIN incluyendo:
1. Path feliz (cliente con buen historial)
2. Cliente con deudas activas
3. Cliente en lista Clinton
4. Validaciones: cédula formato Panamá, timeout 5seg
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

## 📚 Plan de Estudios - 4 Módulos en 20 Días

### Módulo 1: Fundamentos (3 días)

**Día 1: ¿Qué es IA, ML y GenIA?**
- Diferencias clave y evolución
- LLMs: tokens, contexto, temperatura

**Día 2: Herramientas disponibles**
- ChatGPT, Claude, Gemini (demo comparativa)
- GitHub Copilot, Cursor, Codeium

**Día 3: Beneficios y limitaciones**
- Casos reales en Dev/QA
- Alucinaciones, sesgos, verificación
- Ética y responsabilidad

---

### Módulo 2: Análisis y Entendimiento de Necesidades (5 días) ⭐

> **Este es el módulo MÁS CRÍTICO del curso**

**Día 4: Anatomía de una Historia de Usuario**
- Como/Quiero/Para qué
- Criterios de aceptación
- Definición de Done

**Día 5: Extraer información clave**
- Actores involucrados
- Acciones/verbos (CRUD, validaciones, flujos)
- Datos entrada/salida
- Reglas de negocio

**Día 6: De HU a Casos de Prueba**
- Path feliz vs alternos
- Edge cases y validaciones
- Taller: analizar HU real Banistmo

**Día 7: De HU a Requerimientos Técnicos**
- Identificar endpoints necesarios
- Modelos de datos
- Dependencias entre servicios

**Día 8: Taller intensivo**
- 3 HU reales → descomponer en tareas Dev/QA
- Trabajo en equipos

---

### Módulo 3: Prompt Engineering Aplicado (7 días) ⭐⭐

#### Fundamentos de Prompts (Días 9-10)

**Día 9: Estructura del prompt perfecto**
- [ROL] Identidad del asistente
- [CONTEXTO] Información relevante
- [TAREA] Qué debe hacer
- [RESTRICCIONES] Límites y validaciones
- [FORMATO] Cómo entregar resultado

**Día 10: Técnicas avanzadas**
- Zero-shot vs Few-shot (con ejemplos)
- Chain-of-thought: "Piensa paso a paso"
- Iteración: prompt → resultado → refinamiento

#### Aplicación para QA (Días 11-13)

**Día 11: Prompt para Test Cases**
- HU → casos de prueba completos
- Ejercicio: "Consulta de saldo" → 10 test cases

**Día 12: Prompt para Test Data**
- Generar datos sintéticos realistas
- JSON, SQL inserts, CSV para carga masiva

**Día 13: Prompt para Scripts Automatización**
- Selenium/Cypress desde casos de prueba
- Mantener locators, assertions

#### Aplicación para Dev (Días 14-15)

**Día 14: Prompt para Code Generation**
- HU → controller Spring Boot
- Validaciones, manejo errores, DTOs

**Día 15: Prompt para Refactoring y Debug**
- VB6 → Java (caso real migración)
- "Explica este código legacy y mígralo"

---

### Módulo 4: Integración Dev-QA (5 días) ⭐

**Día 16: Flujo completo con IA**
- HU → Análisis → Prompt Dev → Código → Prompt QA → Tests → Ejecución

**Día 17: Code Review con IA**
- Detectar bugs, code smells
- Sugerencias de mejora
- Validar estándares de código

**Día 18: Documentación automática**
- Swagger desde código
- README, diagramas de arquitectura
- Comentarios y JavaDoc

**Día 19: Caso real: Migración VB6**
- Analizar módulo legacy
- Prompts para migración + testing
- Validación funcional

**Día 20: Proyecto Final**
- HU real de Banistmo
- Equipo Dev: genera código con IA
- Equipo QA: genera suite completa con IA
- Presentación: prompt + resultado + lecciones

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
**Actores:** [ej: Oficial de crédito, sistema CIFIN]
**Acción principal:** [ej: Consultar historial crediticio]
**Entradas:** [ej: cédula, tipo consulta]
**Salidas:** [ej: score, deudas activas]
**Reglas de negocio:** [ej: validar lista Clinton, timeout 5seg]
**Edge cases:** [ej: cédula inválida, servicio caído]
**Dependencias:** [ej: API CIFIN, BD clientes]
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
