import { Injectable } from '@angular/core';

export interface BulletDetail {
  title: string;
  details: string;
  examples?: string[];
  keyPoints?: string[];
}

export interface TimelineDetail {
  era: string;
  description: string;
  code?: string;
  example?: string;
  color: string;
  expandedInfo?: {
    characteristics: string[];
    useCases: string[];
    evolution: string;
  };
}

export interface ToolDetail {
  name: string;
  strength: string;
  use: string;
  details?: {
    pricing: string;
    bestFor: string[];
    limitations: string[];
    tips: string[];
  };
}

export interface BenefitDetail {
  icon: string;
  title: string;
  description: string;
  color: string;
  expandedInfo?: {
    metrics: string[];
    realCases: string[];
    bestPractices: string[];
  };
}

export interface LimitationDetail {
  icon: string;
  title: string;
  description: string;
  code?: string;
  color: string;
  expandedInfo?: {
    howToAvoid: string[];
    realExamples: string[];
    solutions: string[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class SlideContentService {

  getSlide2BulletDetails(): BulletDetail[] {
    return [
      {
        title: 'Diferenciar entre IA, ML e IA Generativa',
        details: 'Comprender las diferencias fundamentales entre estos conceptos es clave para aplicarlos correctamente en QA y Desarrollo.',
        keyPoints: [
          '🤖 IA (Inteligencia Artificial): Sistemas que imitan la inteligencia humana. Ejemplo: sistemas expertos con reglas if-then.',
          '📊 ML (Machine Learning): Algoritmos que aprenden de datos sin programación explícita. Ejemplo: detección de fraude analizando millones de transacciones.',
          '✨ IA Generativa: Crea contenido nuevo (texto, código, imágenes) basándose en patrones aprendidos. Ejemplo: ChatGPT generando casos de prueba completos.'
        ],
        examples: [
          'IA Clásica: "SI saldo < 0 ENTONCES bloquear cuenta"',
          'ML: Analiza 100K transacciones para predecir riesgo crediticio',
          'GenIA: "Genera 10 test cases para login con 2FA y bloqueo por intentos"'
        ]
      },
      {
        title: 'Comprender cómo funcionan los LLMs',
        details: 'Los Large Language Models son el motor detrás de herramientas como ChatGPT, Claude y Gemini. Entender sus fundamentos te permite usarlos eficientemente.',
        keyPoints: [
          '🔤 Tokens (fichas): Unidad básica de procesamiento ≈ 4 caracteres. "Banistmo" = 2 tokens. Importante porque los modelos tienen límites (ej: GPT-4 = 128K tokens).',
          '📚 Context Window (ventana de contexto): Memoria del modelo. GPT-4: ~300 páginas, Claude: ~500 páginas. Todo lo que envías (prompt + historial) consume este espacio.',
          '🌡️ Temperatura (0.0 - 2.0): Controla creatividad vs precisión. Para QA/Dev usa 0.0-0.3 (más predecible). Para lluvia de ideas usa 0.7-1.5 (más creativo).',
          '⚡ Velocidad vs Precisión: Modelos más rápidos (GPT-3.5) vs más precisos (GPT-4, Claude Opus). Elige según necesidad.'
        ],
        examples: [
          'Temperatura 0.0: Genera el mismo código cada vez → ideal para producción',
          'Temperatura 1.5: Genera diferentes versiones creativas → ideal para explorar alternativas',
          'Ventana de contexto: Puedes enviar archivo completo de 1000 líneas y pedir análisis'
        ]
      },
      {
        title: 'Conocer herramientas y sus casos de uso',
        details: 'Cada herramienta de IA tiene fortalezas específicas. Usar la correcta para cada tarea multiplica tu productividad.',
        keyPoints: [
          '💬 ChatGPT (GPT-4): Versatilidad y velocidad. Mejor para análisis de HU, generación de test cases, documentación rápida.',
          '🧠 Claude (Sonnet/Opus): Código limpio y refactoring. Excelente para migración VB6→Java, análisis de arquitectura, code review profundo.',
          '🔍 Gemini (Google): Integración con ecosistema Google. Ideal para análisis de sheets, docs, Drive. Multimodal (texto + imágenes).',
          '👨‍💻 GitHub Copilot: Autocompletado inteligente en IDE. Genera código mientras escribes, sugiere tests, completa funciones.',
          '🖥️ Cursor: IDE completo con IA integrada. Mejor para refactoring de proyectos enteros, aplicar cambios en múltiples archivos.'
        ],
        examples: [
          'ChatGPT: "Analiza esta HU y genera matriz de trazabilidad"',
          'Claude: "Migra este módulo VB6 a Java Spring Boot manteniendo lógica"',
          'Copilot: Escribes "function calculateTax" y genera implementación completa',
          'Cursor: "Refactoriza todo el proyecto para usar async/await"'
        ]
      },
      {
        title: 'Identificar beneficios y limitaciones',
        details: 'La IA Generativa es poderosa pero tiene límites. Conocerlos te permite maximizar beneficios y evitar errores críticos.',
        keyPoints: [
          '✅ BENEFICIOS:',
          '  ⚡ Velocidad: Acelera análisis HU → casos de prueba 75% más rápido',
          '  🔧 Automatización: Genera controllers, DTOs, tests, documentación automáticamente',
          '  📝 Cobertura: Detecta edge cases que podrías pasar por alto (valores nulos, límites, concurrencia)',
          '  🎯 Consistencia: Mantiene estándares de código y nomenclatura',
          '',
          '⚠️ LIMITACIONES:',
          '  🌀 Alucinaciones: Inventa APIs, métodos o bibliotecas que no existen. Siempre verifica.',
          '  🔍 Contexto limitado: No conoce tu arquitectura completa ni reglas de negocio específicas',
          '  ❌ No ejecuta: Solo genera código, no lo compila ni valida. Tú debes probarlo.',
          '  📊 Sesgos: Reproduce patrones de entrenamiento. Puede generar código anticuado o inseguro.',
          '  🔒 Seguridad: No envíes credenciales, tokens, datos sensibles a modelos públicos.'
        ],
        examples: [
          'Alucinación real: Generó "bancoService.consultarBureau()" que no existe en tu API',
          'Contexto limitado: No sabe que tu base de datos usa stored procedures, no ORMs',
          'Sesgo: Puede generar SQL con concatenación (vulnerable) en vez de prepared statements',
          'Regla de oro: SIEMPRE valida, compila y prueba el código generado'
        ]
      }
    ];
  }

  getSlide3TimelineDetails(): TimelineDetail[] {
    return [
      {
        era: '① IA - Años 1950s',
        description: 'Sistemas basados en reglas fijas, sin aprendizaje',
        code: 'SI ingreso > $3000 Y historial = "bueno"\nENTONCES aprobar_préstamo',
        color: 'blue',
        expandedInfo: {
          characteristics: [
            '🔧 Programación manual de todas las reglas',
            '📋 Árbol de decisiones fijo y predefinido',
            '⚙️ No se adapta a nuevos escenarios sin reprogramación',
            '🎯 Preciso para casos conocidos, frágil ante lo inesperado',
            '💾 No requiere grandes volúmenes de datos'
          ],
          useCases: [
            'Sistemas expertos médicos (diagnóstico por síntomas)',
            'Chatbots con respuestas predefinidas',
            'Sistemas de aprobación crediticia básica',
            'Validaciones de formularios complejos',
            'Configuradores de productos con reglas de negocio'
          ],
          evolution: 'Dominó hasta los 80s-90s. Limitación principal: mantenimiento costoso al crecer las reglas. Cualquier cambio requería modificar el código manualmente.'
        }
      },
      {
        era: '② ML - Años 1990s',
        description: 'Aprende de datos, detecta patrones en miles de casos',
        example: 'Ejemplo: Predice riesgo crediticio con 100K casos históricos',
        color: 'blue',
        expandedInfo: {
          characteristics: [
            '📊 Aprende de datos históricos automáticamente',
            '🔍 Detecta patrones que humanos no verían',
            '📈 Mejora con más datos (self-improving)',
            '🎲 Probabilístico: da predicciones con nivel de confianza',
            '⚡ Requiere entrenamiento antes de producción'
          ],
          useCases: [
            'Detección de fraude bancario (analiza millones de transacciones)',
            'Sistemas de recomendación (Netflix, Amazon)',
            'Predicción de fallas en equipos industriales',
            'Clasificación automática de tickets de soporte',
            'Análisis predictivo de churn de clientes',
            'Reconocimiento de voz y facial'
          ],
          evolution: 'Boom en los 2000s con Big Data. Permitió procesar volúmenes masivos y encontrar correlaciones complejas. Base de la revolución actual.'
        }
      },
      {
        era: '③ GenIA - 2020s',
        description: 'Crea contenido nuevo: texto, código, imágenes',
        example: 'Ejemplo: ChatGPT genera casos de prueba, código, documentación',
        color: 'orange',
        expandedInfo: {
          characteristics: [
            '✨ Genera contenido original (no solo clasifica)',
            '🧠 Comprende contexto y detalles del lenguaje',
            '🎨 Multimodal (multi-formato): texto, código, imágenes, audio',
            '💬 Interacción conversacional natural',
            '🔄 Aprende de tus comentarios en la conversación',
            '⚡ Billones de parámetros (GPT-4: ~1.7T)'
          ],
          useCases: [
            '🧪 QA: Genera test cases completos desde HU',
            '💻 Dev: Escribe código completo de features',
            '📝 Documentación: README, JavaDoc, Swagger automático',
            '🔧 Refactoring: Migra código legacy (VB6→Java)',
            '🐛 Debugging: Analiza logs y sugiere soluciones',
            '🎓 Onboarding: Explica arquitectura y código',
            '📊 Análisis: Genera reportes desde datos raw'
          ],
          evolution: 'Revolución desde 2022 con ChatGPT. Cambió QA/Dev de "hacer todo manual" a "dirigir IA para automatizar". El futuro está en combinar tu experiencia + potencia de GenIA.'
        }
      }
    ];
  }

  getSlide6ToolDetails(): ToolDetail[] {
    return [
      {
        name: 'ChatGPT (GPT-4)',
        strength: 'Versatilidad, velocidad',
        use: 'Análisis HU, test cases',
        details: {
          pricing: 'GPT-3.5: Gratis | GPT-4: $20/mes (Plus) | API: pay-per-token',
          bestFor: [
            'Análisis rápido de historias de usuario',
            'Generación de casos de prueba y datos sintéticos (datos de prueba)',
            'Documentación y comentarios de código',
            'Lluvia de ideas para soluciones',
            'Traducción de documentación técnica',
            'Generación de queries SQL complejas'
          ],
          limitations: [
            'Puede alucinar nombres de APIs',
            'Conocimiento hasta Oct 2023 (GPT-4)',
            'No ejecuta código, solo lo genera',
            'Context window limitado (128K tokens GPT-4)'
          ],
          tips: [
            'Usa GPT-4 para tareas críticas, GPT-3.5 para rápidas',
            'Proporciona contexto específico en el prompt (instrucción)',
            'Itera: mejora la respuesta haciendo preguntas adicionales',
            'Usa temperatura baja (0.0-0.3) para código'
          ]
        }
      },
      {
        name: 'Claude (Sonnet)',
        strength: 'Código limpio',
        use: 'Migración VB6→Java',
        details: {
          pricing: 'Claude: Gratis (limitado) | Pro: $20/mes | API: pay-per-token',
          bestFor: [
            'Migración de código legacy completo',
            'Refactoring profundo manteniendo lógica',
            'Análisis de arquitectura y code review',
            'Generación de código siguiendo estándares',
            'Explicación detallada de código complejo',
            'Ventana de contexto gigante (200K tokens = ~500 páginas)'
          ],
          limitations: [
            'Menos conocido que ChatGPT (menos ejemplos online)',
            'Puede ser más conservador en sugerencias',
            'API más costosa que GPT en algunos casos'
          ],
          tips: [
            'Envía archivos completos aprovechando la ventana de contexto',
            'Úsalo para proyectos que requieren consistencia',
            'Excelente para "lee todo este repo y refactoriza"',
            'Especifica el estilo de código (código limpio, SOLID, etc)'
          ]
        }
      },
      {
        name: 'Gemini',
        strength: 'Integración Google',
        use: 'Análisis sheets, docs',
        details: {
          pricing: 'Gemini: Gratis | Advanced (Ultra): Incluido en Google One AI Premium $20/mes',
          bestFor: [
            'Análisis de Google Sheets con datos masivos',
            'Procesamiento de Google Docs y PDFs',
            'Búsqueda en Drive con contexto',
            'Integración con Gmail y Calendar',
            'Multimodal (multi-formato): analiza imágenes + texto',
            'Generación de presentaciones desde docs'
          ],
          limitations: [
            'Menos adoptado que ChatGPT en dev',
            'Integración limitada fuera del ecosistema Google',
            'Calidad de código inferior a Claude/GPT-4'
          ],
          tips: [
            'Ideal si tu empresa usa Google Workspace',
            'Usa para analizar reports en Sheets',
            'Combínalo con Apps Script para automatización',
            'Aprovecha su capacidad multi-formato (diagramas + texto)'
          ]
        }
      },
      {
        name: 'GitHub Copilot',
        strength: 'Autocompletado IDE',
        use: 'Desarrollo en VS Code',
        details: {
          pricing: '$10/mes individual | $19/mes empresarial | Gratis para estudiantes',
          bestFor: [
            'Autocompletado inteligente mientras escribes',
            'Generación de tests unitarios automáticos',
            'Completar funciones desde comentarios',
            'Sugerir refactorings en tiempo real',
            'Generar código base repetitivo (DTOs, controllers, etc)',
            'Aprender sintaxis de nuevos lenguajes/tecnologías'
          ],
          limitations: [
            'Solo sugiere, no explica el porqué',
            'Puede sugerir código inseguro o anticuado',
            'Requiere verificación constante',
            'No tiene contexto de todo el proyecto'
          ],
          tips: [
            'Escribe comentarios claros antes de código',
            'Usa Tab para aceptar, Esc para rechazar',
            'Revisa siempre las sugerencias antes de aceptar',
            'Combínalo con Copilot Chat para explicaciones'
          ]
        }
      },
      {
        name: 'Cursor',
        strength: 'IDE con IA integrada',
        use: 'Refactoring proyectos',
        details: {
          pricing: 'Gratis (limitado) | Pro: $20/mes con GPT-4 incluido',
          bestFor: [
            'Refactoring de proyectos enteros',
            'Aplicar cambios en múltiples archivos',
            'Migración de frameworks completos',
            'Composer: genera features completas',
            'Chat con contexto de todo el workspace',
            'Edición multi-archivo con un comando'
          ],
          limitations: [
            'Fork de VS Code (no todas las extensiones)',
            'Requiere acostumbrarse a nuevos shortcuts',
            'Consumo alto de tokens en proyectos grandes'
          ],
          tips: [
            'Usa @workspace para incluir todo el contexto',
            'Composer es ideal para features nuevas',
            'Cmd/Ctrl+K para ediciones inline',
            'Revisa los cambios antes de aplicar en producción'
          ]
        }
      }
    ];
  }

  getSlide7BenefitDetails(): BenefitDetail[] {
    return [
      {
        icon: '⚡',
        title: 'Velocidad',
        description: 'Acelera análisis HU a casos de prueba 75% más rápido',
        color: 'green',
        expandedInfo: {
          metrics: [
            '⏱️ Antes: 2 horas analizando HU + generando 20 casos de prueba',
            '🚀 Con IA: 30 minutos (IA genera 20 casos, tú validas y ajustas)',
            '📊 Ahorro: 75% del tiempo, liberando 1.5hrs para pruebas complejas',
            '💰 ROI: En proyecto de 50 HU, ahorras ~75 horas = casi 2 semanas'
          ],
          realCases: [
            'Equipo QA en fintech: Redujo sprint de testing de 2 semanas a 1',
            'Developer: Generación de CRUD completo en 10 min vs 2 horas',
            'Tech Lead: Migración VB6→Java de módulo en 3 días vs 3 semanas'
          ],
          bestPractices: [
            'Usa IA para tareas repetitivas (código base repetitivo, tests básicos)',
            'Reserva tu tiempo para lógica compleja y edge cases',
            'Mide antes/después para justificar adopción de IA',
            'No confíes 100%: velocidad con validación = éxito'
          ]
        }
      },
      {
        icon: '🔧',
        title: 'Código Base Repetitivo',
        description: 'Genera controllers, DTOs, tests automáticamente',
        color: 'green',
        expandedInfo: {
          metrics: [
            '📝 Antes: 200 líneas de DTO + Controller + Tests = 1 hora',
            '⚡ Con IA: 5 minutos generando + 10 min validando = 15 min total',
            '🎯 Consistencia: 0 errores de typo en nombres de campos',
            '♻️ Reutilizable: Crea templates personalizados con IA'
          ],
          realCases: [
            'API REST con 15 endpoints: Antes 3 días, con IA 1 día',
            'DTOs para integración con 20 campos: 5 min vs 30 min manual',
            'Tests unitarios: IA genera 90% cobertura inicial en minutos'
          ],
          bestPractices: [
            'Define estándares: "Usa Lombok, validaciones JSR-303"',
            'Genera y valida: IA genera, tú verificas inyección dependencias',
            'Crea biblioteca de prompts reutilizables',
            'Ajusta una vez, luego copia el patrón para similares'
          ]
        }
      },
      {
        icon: '📝',
        title: 'Documentación',
        description: 'Crea README, JavaDoc y Swagger automáticamente',
        color: 'green',
        expandedInfo: {
          metrics: [
            '📚 Antes: README completo = 2-3 horas escribiendo',
            '🤖 Con IA: 15 min (IA genera estructura, tú ajustas ejemplos)',
            '💬 JavaDoc: IA documenta 100 métodos en 5 min',
            '📊 Swagger: Genera annotations completas desde código'
          ],
          realCases: [
            'Onboarding: Nuevo dev entendió proyecto en 1 día vs 1 semana',
            'Documentación API: Generó Swagger completo de 50 endpoints',
            'README multilenguaje: EN/ES en 30 min vs 4 horas manual'
          ],
          bestPractices: [
            'Genera docs al finalizar funcionalidad, no al final del proyecto',
            'Pide ejemplos prácticos: "Incluye curl examples"',
            'Mantén consistencia: usa mismo prompt para todo el equipo',
            'Valida precisión técnica (IA puede inventar flags CLI)'
          ]
        }
      },
      {
        icon: '🎯',
        title: 'Edge Cases',
        description: 'Detecta escenarios alternos que podrías pasar por alto',
        color: 'green',
        expandedInfo: {
          metrics: [
            '🐛 Antes: 60% cobertura de edge cases (basado en experiencia)',
            '🤖 Con IA: 85-90% cobertura (IA sugiere casos de: null, concurrencia, límites)',
            '💥 Bugs en producción: Reducción de 40% al detectar edge cases temprano'
          ],
          realCases: [
            'Login: IA detectó caso "contraseña con emoji que rompe encoding"',
            'API: IA sugirió "¿qué pasa si llegan 1000 requests simultáneas?"',
            'Pago: IA identificó "monto negativo", "overflow de decimales"'
          ],
          bestPractices: [
            'Instrucción: "Genera casos extremos para [funcionalidad], incluye concurrencia, límites, valores nulos"',
            'Revisa con equipo: IA sugiere, equipo prioriza',
            'Documenta: Crea checklist reutilizable de edge cases por tipo',
            'Testing: Genera tests automatizados para edge cases críticos'
          ]
        }
      }
    ];
  }

  getSlide8LimitationDetails(): LimitationDetail[] {
    return [
      {
        icon: '🌀',
        title: 'Alucinaciones',
        description: 'Inventa APIs que no existen',
        code: '// ⚠️ Puede generar:\nbancoService.consultarBureau',
        color: 'yellow',
        expandedInfo: {
          howToAvoid: [
            '✅ Proporciona contexto real: "Usa SOLO métodos de esta clase: [código]"',
            '✅ Valida contra documentación oficial siempre',
            '✅ Usa temperatura baja (0.0-0.3) para código crítico',
            '✅ Pide referencias: "Incluye link a documentación"',
            '✅ Code review obligatorio de salida de IA'
          ],
          realExamples: [
            '❌ ChatGPT inventó: "Arrays.sortByCustomComparator()" (no existe en Java)',
            '❌ Sugirió: "npm install react-native-super-forms" (package inexistente)',
            '❌ Generó: "SELECT * FROM users USE INDEX (idx_magic)" (sintaxis inválida)',
            '❌ Propuso: "df.apply_ml_magic()" en pandas (método inventado)'
          ],
          solutions: [
            '🔍 Verifica en IDE: Si no autocompleta, probablemente no existe',
            '📚 Consulta docs oficiales antes de usar API desconocida',
            '🧪 Ejecuta en entorno test antes de commit',
            '👥 Pair programming: otra persona revisa código IA'
          ]
        }
      },
      {
        icon: '🔍',
        title: 'Contexto Limitado',
        description: 'No conoce tu código completo ni arquitectura específica',
        color: 'yellow',
        expandedInfo: {
          howToAvoid: [
            '📋 Proporciona contexto explícito: arquitectura, patrones, constraints',
            '📎 Adjunta archivos relevantes: interfaces, DTOs, configs',
            '🗺️ Describe el big picture: "Microservicios con eventos asíncronos"',
            '🎯 Sé específico: "Usa repository pattern, no DAO directo"',
            '🔄 Itera: Primera versión genérica, luego ajusta al contexto'
          ],
          realExamples: [
            '❌ IA generó REST cuando arquitectura era GraphQL',
            '❌ Usó JPA cuando proyecto usaba jOOQ exclusivamente',
            '❌ Código síncrono cuando todo es reactive (WebFlux)',
            '❌ Olvidó validaciones custom del dominio bancario'
          ],
          solutions: [
            '📝 Crea "context.md" con arquitectura y guías del proyecto',
            '🎨 Define templates: "Todos los controllers siguen este patrón"',
            '🔧 Usa herramientas con workspace context (Cursor, Copilot Chat)',
            '👨‍🏫 Educa a la IA: "En ESTE proyecto usamos X porque Y"'
          ]
        }
      },
      {
        icon: '❌',
        title: 'No Ejecuta',
        description: 'Solo genera código, no lo valida ni compila',
        color: 'yellow',
        expandedInfo: {
          howToAvoid: [
            '✅ SIEMPRE compila y ejecuta antes de commit',
            '✅ Tests automáticos: Si IA genera código, genera tests también',
            '✅ Linters y formatters: Detectan errores básicos',
            '✅ CI/CD: Pipeline valida antes de merge',
            '✅ Staging environment: Prueba en entorno real'
          ],
          realExamples: [
            '❌ Código sintácticamente correcto pero con NPE en runtime',
            '❌ Imports faltantes o incorrectos',
            '❌ Lógica que funciona en happy path pero falla con null',
            '❌ Queries SQL correctas en teoría, lentas en producción'
          ],
          solutions: [
            '🧪 TDD: Genera tests primero, luego código',
            '🔍 Static analysis: SonarQube, ESLint detectan issues',
            '📊 Profiling: Verifica performance de código IA',
            '🐛 Debugging: Step-through para entender qué hace realmente'
          ]
        }
      },
      {
        icon: '📊',
        title: 'Sesgos',
        description: 'Reproduce patrones de entrenamiento',
        color: 'yellow',
        expandedInfo: {
          howToAvoid: [
            '🔒 Security review: Busca vulnerabilidades conocidas',
            '📅 Verifica actualidad: "Usa versión más reciente de [biblioteca]"',
            '🎯 Especifica estándares: "Código debe ser OWASP Top 10 compliant"',
            '👥 Diversidad de revisores: Diferentes perspectivas detectan sesgos',
            '📚 Training continuo: Mantén al equipo actualizado'
          ],
          realExamples: [
            '❌ SQL concatenation en vez de prepared statements (vulnerable a SQL injection)',
            '❌ Código Python 2.7 cuando Python 3.11 es estándar',
            '❌ jQuery cuando proyecto usa React',
            '❌ Passwords en plaintext en ejemplos de código'
          ],
          solutions: [
            '🛡️ Security scanner: Detecta vulnerabilidades en código IA',
            '📖 Style guide: "Sigue estas convenciones: [link]"',
            '🔄 Refactoring continuo: Actualiza código IA a estándares actuales',
            '🎓 Code review educativo: Explica por qué algo es mejor práctica'
          ]
        }
      }
    ];
  }
}
