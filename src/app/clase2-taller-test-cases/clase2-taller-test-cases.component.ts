import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Example {
  title: string;
  hu: string;
  badPrompt: {
    text: string;
    problems: string[];
  };
  goodPrompt: {
    text: string;
    benefits: string[];
  };
  expectedOutput: string[];
}

interface Step {
  number: number;
  title: string;
  description: string;
  example?: string;
  tips: string[];
}

interface Challenge {
  id: number;
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  title: string;
  hu: string;
  context: string[];
  requirements: string[];
  hints: string[];
  color: string;
}

@Component({
  selector: 'app-clase2-taller-test-cases',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clase2-taller-test-cases.component.html',
  styleUrls: [
    '../shared-presentation.css',
    './clase2-taller-test-cases.component.css'
  ]
})
export class Clase2TallerTestCasesComponent {
  currentSlide = 0;
  expandedExample: number | null = null;
  expandedStep: number | null = null;
  expandedChallenge: number | null = null;

  slides = [
    { id: 1, type: 'title', title: 'Clase 2: Taller Práctico' },
    { id: 2, type: 'theory', title: 'Teoría Rápida (10 min)' },
    { id: 3, type: 'examples', title: 'Ejemplos Comparativos' },
    { id: 4, type: 'process', title: 'Proceso Paso a Paso' },
    { id: 5, type: 'template', title: 'Template Reutilizable' },
    { id: 6, type: 'challenges', title: 'Desafíos Prácticos' },
    { id: 7, type: 'tips', title: 'Tips Profesionales' },
    { id: 8, type: 'summary', title: 'Resumen y Entregables' }
  ];

  theoryPoints = [
    {
      icon: '🎯',
      title: 'Objetivo del Taller',
      description: 'Aprender a generar test cases completos desde Historias de Usuario usando IA, incluyendo edge cases y validaciones de negocio.',
      color: 'blue'
    },
    {
      icon: '📋',
      title: 'Qué vamos a lograr',
      items: [
        'Analizar HU bancarias reales',
        'Estructurar prompts efectivos',
        'Generar 15+ test cases en minutos',
        'Incluir edge cases automáticamente',
        'Crear suites reutilizables'
      ],
      color: 'green'
    },
    {
      icon: '⚡',
      title: 'Por qué es importante',
      description: 'Antes: 2 horas analizando HU + generando 20 casos manualmente. Ahora: 30 minutos con IA (genera 20 casos, tú validas). Ahorro: 75% del tiempo.',
      color: 'orange'
    }
  ];

  examples: Example[] = [
    {
      title: 'Ejemplo 1: Consulta Bureau de Crédito',
      hu: 'Como oficial de crédito, quiero consultar el historial crediticio del cliente en el Bureau de Crédito para evaluar su capacidad de pago antes de aprobar el préstamo.',
      badPrompt: {
        text: 'Genera casos de prueba para consultar Bureau de Crédito',
        problems: [
          '❌ Sin contexto de negocio (bancario)',
          '❌ No especifica el actor (oficial de crédito)',
          '❌ No menciona criticidad (decisión crediticia)',
          '❌ Sin formato de salida definido',
          '❌ No solicita edge cases explícitamente'
        ]
      },
      goodPrompt: {
        text: `[ROL] Actúa como QA senior especializado en sistemas bancarios

[CONTEXTO]
- Sistema: Préstamos Bancarios
- Usuario: Oficial de crédito
- Integración: API Bureau de Crédito (externa)
- Criticidad: Alta (decisión crediticia)
- Regulación: Cumplimiento normativo financiero

[TAREA]
Genera 15 casos de prueba para consulta Bureau de Crédito incluyendo:
1. Path feliz (cliente con buen historial)
2. Cliente con deudas activas
3. Cliente en lista de riesgo CIFIN
4. Validaciones: documento de identidad válido, formato correcto
5. Manejo errores: servicio caído, timeout 5seg, respuesta inválida
6. Edge cases: documento duplicado, cliente extranjero, sin historial

[FORMATO]
Tabla con columnas: ID | Escenario | Pre-condiciones | Pasos | Resultado Esperado | Prioridad | Datos de Prueba`,
        benefits: [
          '✅ Contexto completo de negocio bancario',
          '✅ Criticidad especificada (alta)',
          '✅ Edge cases explícitos (6 tipos diferentes)',
          '✅ Formato de tabla estructurado',
          '✅ Incluye datos de prueba',
          '✅ Priorización solicitada'
        ]
      },
      expectedOutput: [
        'TC001: Cliente con buen historial - Score > 700',
        'TC002: Cliente con deudas activas pero al día',
        'TC003: Cliente en lista de riesgo CIFIN',
        'TC004: Documento de identidad inválido',
        'TC005: Timeout en servicio Bureau (> 5seg)',
        'TC006: Cliente sin historial crediticio previo',
        'TC007: Documento duplicado en sistema',
        'TC008: Cliente extranjero sin NIT colombiano',
        'TC009: Respuesta con datos incompletos del Bureau',
        'TC010: Múltiples consultas simultáneas mismo cliente'
      ]
    },
    {
      title: 'Ejemplo 2: Transferencia Bancaria',
      hu: 'Como usuario del banco, quiero transferir dinero a otra cuenta para pagar a mis proveedores de forma rápida y segura.',
      badPrompt: {
        text: 'Hazme test cases para transferencias',
        problems: [
          '❌ Demasiado genérico',
          '❌ No especifica límites de transferencia',
          '❌ Sin validaciones de seguridad',
          '❌ No menciona tipos de cuenta',
          '❌ Sin casos de concurrencia'
        ]
      },
      goodPrompt: {
        text: `[ROL] Actúa como QA senior en banca digital

[CONTEXTO]
- Sistema: Banca Online
- Usuario: Cliente con cuenta activa
- Límites: $50.000 diarios, $5.000.000 mensuales
- Seguridad: Token OTP obligatorio > $1.000.000
- Horario: 24/7 con mantenimiento 1AM-3AM

[TAREA]
Genera 15 casos de prueba para transferencias incluyendo:
1. Path feliz (transferencia exitosa dentro de límites)
2. Exceder límite diario
3. Exceder límite mensual
4. Saldo insuficiente
5. Token OTP inválido para montos altos
6. Transferencia en horario de mantenimiento
7. Cuenta destino inválida o inexistente
8. Edge cases: transferencia $0.01, monto negativo, decimales excesivos
9. Concurrencia: 2 transferencias simultáneas agotando saldo
10. Validaciones: cuentas bloqueadas, cuenta origen = destino

[FORMATO]
Tabla: ID | Escenario | Pre-condiciones | Pasos | Validaciones | Resultado Esperado | Datos Prueba`,
        benefits: [
          '✅ Límites específicos de negocio',
          '✅ Seguridad con OTP incluida',
          '✅ Horarios y mantenimiento considerados',
          '✅ Edge cases financieros ($0.01, negativos)',
          '✅ Casos de concurrencia',
          '✅ Validaciones de cuenta'
        ]
      },
      expectedOutput: [
        'TC001: Transferencia $500.000 exitosa con saldo suficiente',
        'TC002: Transferencia $51.000 excede límite diario',
        'TC003: Transferencia acumulada mes excede $5.000.000',
        'TC004: Transferencia $2.000.000 con saldo $1.500.000',
        'TC005: Transferencia $1.500.000 sin token OTP',
        'TC006: Transferencia 2:00 AM durante mantenimiento',
        'TC007: Cuenta destino formato inválido',
        'TC008: Transferencia $0.01 (monto mínimo)',
        'TC009: Transferencia monto negativo -$100',
        'TC010: Dos transferencias simultáneas agotando saldo'
      ]
    }
  ];

  processSteps: Step[] = [
    {
      number: 1,
      title: 'Leer y entender la HU completa',
      description: 'Antes de escribir NADA en la IA, dedica 2-3 minutos a entender profundamente la Historia de Usuario.',
      example: 'HU: "Como oficial de crédito..." → Identifica: ¿Quién? ¿Qué hace? ¿Para qué?',
      tips: [
        'Lee la HU 2 veces para no omitir detalles',
        'Identifica el formato: Como [ROL] quiero [ACCIÓN] para [BENEFICIO]',
        'Busca criterios de aceptación si existen'
      ]
    },
    {
      number: 2,
      title: 'Identificar actores y sistemas',
      description: 'Extrae todos los actores humanos y sistemas externos involucrados.',
      example: 'Actores: Oficial de crédito (primario), Cliente (secundario). Sistemas: Bureau de Crédito (API externa), BD Clientes',
      tips: [
        'Actor primario: quien ejecuta la acción',
        'Actores secundarios: afectados por la acción',
        'Sistemas externos: APIs, servicios de terceros'
      ]
    },
    {
      number: 3,
      title: 'Extraer acciones y datos',
      description: 'Identifica qué acciones se realizan y qué datos entran/salen.',
      example: 'Acción: Consultar. Entrada: Documento identidad. Salida: Score crediticio, deudas activas, estado CIFIN',
      tips: [
        'Verbos = acciones (consultar, validar, aprobar)',
        'Sustantivos = datos (documento, score, deudas)',
        'Flujo: entrada → proceso → salida'
      ]
    },
    {
      number: 4,
      title: 'Identificar reglas de negocio',
      description: 'Extrae validaciones, límites, restricciones y reglas específicas del dominio.',
      example: 'Reglas: Documento válido formato CC/CE. Timeout 5seg. Cliente en riesgo = rechazar automáticamente.',
      tips: [
        'Límites: montos, tiempos, cantidades',
        'Validaciones: formatos, estados, permisos',
        'Restricciones: horarios, disponibilidad'
      ]
    },
    {
      number: 5,
      title: 'Pensar en edge cases',
      description: 'Antes de escribir el prompt, lista mentalmente escenarios extremos y alternos.',
      example: 'Edge cases: documento duplicado, sin historial, cliente extranjero, servicio caído, timeout',
      tips: [
        'Valores extremos: $0.01, monto máximo, cadena vacía',
        'Estados inválidos: null, undefined, formato incorrecto',
        'Concurrencia: 2 usuarios simultáneos',
        'Errores externos: API caída, timeout, respuesta corrupta'
      ]
    },
    {
      number: 6,
      title: 'Estructurar el prompt con [ROL] [CONTEXTO] [TAREA] [FORMATO]',
      description: 'Ahora sí, escribe el prompt estructurado con toda la información recopilada.',
      example: '[ROL] QA senior banca → [CONTEXTO] Sistema, criticidad → [TAREA] Genera 15 casos → [FORMATO] Tabla',
      tips: [
        'ROL: Define expertise específico (QA senior en banca)',
        'CONTEXTO: Sistema, usuarios, criticidad, regulaciones',
        'TAREA: Específica, con números (15 casos, 6 edge cases)',
        'FORMATO: Tabla, JSON, Gherkin - define salida'
      ]
    },
    {
      number: 7,
      title: 'Ejecutar en IA (ChatGPT, Claude)',
      description: 'Copia el prompt en la IA y espera la generación completa.',
      tips: [
        'Usa GPT-4 para calidad (no GPT-3.5)',
        'Temperatura 0.0-0.3 para consistencia',
        'Espera respuesta completa antes de iterar'
      ]
    },
    {
      number: 8,
      title: 'Validar y refinar',
      description: 'Revisa los casos generados contra tu conocimiento del negocio y la HU original.',
      example: '¿Falta algún edge case? ¿Los datos de prueba son realistas? ¿Prioridades correctas?',
      tips: [
        'Verifica que cubra path feliz + alternos + edge cases',
        'Valida datos de prueba sean realistas del negocio',
        'Confirma prioridades (críticos primero)',
        'Si falta algo: "Agrega 3 casos más para concurrencia"'
      ]
    },
    {
      number: 9,
      title: 'Iterar si es necesario (2-3 veces)',
      description: 'No te conformes con la primera respuesta. Refina hasta tener casos óptimos.',
      example: 'Iteración 1: Genera base. Iteración 2: "Agrega validaciones de seguridad". Iteración 3: "Detalla datos de prueba"',
      tips: [
        'Primera iteración: estructura base',
        'Segunda: agregar edge cases faltantes',
        'Tercera: detallar datos de prueba específicos',
        'Promedio profesional: 2-3 iteraciones'
      ]
    }
  ];

  template = `[ROL]
Actúa como QA senior especializado en [DOMINIO: banca, e-commerce, salud, etc]

[CONTEXTO]
- Sistema: [Nombre del sistema]
- Usuario: [Tipo de usuario/actor]
- Criticidad: [Alta/Media/Baja]
- Integraciones: [Sistemas externos si aplica]
- Regulaciones: [Normativas aplicables si aplica]

[TAREA]
Genera [CANTIDAD: 15-20] casos de prueba para [FUNCIONALIDAD] incluyendo:
1. Path feliz (escenario exitoso)
2. [Validación específica 1]
3. [Validación específica 2]
4. [Validación específica 3]
5. Edge cases: [listar específicos: valores nulos, límites, concurrencia]
6. Manejo de errores: [errores esperados del sistema]

[RESTRICCIONES]
- Usar datos de prueba realistas del dominio
- Priorizar casos por criticidad
- Incluir pre-condiciones y post-condiciones
- Validaciones de seguridad si aplica

[FORMATO]
Tabla con columnas:
ID | Escenario | Pre-condiciones | Pasos (numerados) | Resultado Esperado | Prioridad | Datos de Prueba`;

  challenges: Challenge[] = [
    {
      id: 1,
      difficulty: 'Fácil',
      title: 'Login de Usuario',
      hu: 'Como usuario registrado, quiero iniciar sesión con mi correo y contraseña para acceder a mi cuenta.',
      context: [
        'Sistema: Aplicación web de banca',
        'Usuarios: Clientes registrados',
        'Seguridad: Bloqueo después de 3 intentos fallidos',
        'Sesión: Expira después de 15 minutos inactivo'
      ],
      requirements: [
        'Mínimo 10 casos de prueba',
        'Incluir path feliz y 2 alternos',
        'Edge cases: credenciales vacías, SQL injection, sesión expirada',
        'Formato tabla con ID, Escenario, Pasos, Resultado Esperado'
      ],
      hints: [
        '💡 Piensa en diferentes estados de cuenta: activa, bloqueada, inactiva',
        '💡 Considera validaciones de formato: email inválido, contraseña débil',
        '💡 No olvides casos de concurrencia: 2 logins simultáneos'
      ],
      color: 'green'
    },
    {
      id: 2,
      difficulty: 'Intermedio',
      title: 'Aprobación de Préstamo',
      hu: 'Como oficial de crédito, quiero revisar y aprobar solicitudes de préstamo evaluando el historial crediticio, ingresos y capacidad de pago del cliente.',
      context: [
        'Sistema: Módulo de Préstamos',
        'Actores: Oficial de crédito (aprobador), Cliente (solicitante)',
        'Límites: Préstamos hasta $50.000.000, plazo máximo 60 meses',
        'Validaciones: Score CIFIN > 650, ingresos 3x cuota mensual',
        'Flujo: Solicitud → Análisis → Aprobación/Rechazo → Desembolso'
      ],
      requirements: [
        'Mínimo 15 casos de prueba',
        'Incluir validaciones de score crediticio',
        'Edge cases: cliente en mora, sin ingresos comprobables, co-deudor',
        'Considerar diferentes tipos de préstamo: consumo, vivienda, vehículo',
        'Formato tabla detallada con prioridades'
      ],
      hints: [
        '💡 Valida límites: monto solicitado vs capacidad de pago',
        '💡 Score CIFIN: >650 aprueba, 500-649 análisis manual, <500 rechaza',
        '💡 Considera flujos de aprobación: automático vs manual',
        '💡 Edge cases: cliente con deudas activas pero al día'
      ],
      color: 'blue'
    },
    {
      id: 3,
      difficulty: 'Avanzado',
      title: 'Transferencia Internacional',
      hu: 'Como usuario premium, quiero realizar transferencias internacionales en múltiples divisas para pagar a proveedores en el extranjero, cumpliendo con regulaciones de prevención de lavado de activos.',
      context: [
        'Sistema: Banca Internacional',
        'Usuarios: Clientes Premium con habilitación internacional',
        'Divisas: USD, EUR, GBP, MXN',
        'Límites: $10.000 USD diarios, $50.000 USD mensuales',
        'Regulaciones: FATCA, PLD (Prevención Lavado Dinero)',
        'Validaciones: Origen de fondos, país destino en lista blanca',
        'Tasa de cambio: Consulta en tiempo real, vigencia 30 min'
      ],
      requirements: [
        'Mínimo 20 casos de prueba',
        'Incluir conversión de divisas con tasas variables',
        'Validaciones regulatorias: FATCA, listas de control',
        'Edge cases: país sancionado, monto sospechoso, múltiples transferencias seguidas',
        'Considerar flujos: Consulta tasa → Confirmación → Autorización 2FA → Ejecución',
        'Formato tabla con: ID, Escenario, Pre-condiciones, Pasos, Validaciones Regulatorias, Resultado, Prioridad, Datos'
      ],
      hints: [
        '💡 Tasa de cambio: validar vigencia 30 min, qué pasa si expira',
        '💡 Regulaciones: país en lista OFAC, monto > $10K requiere reporte',
        '💡 Edge cases complejos: transferencia durante fin de semana, feriado en país destino',
        '💡 Concurrencia: múltiples transferencias agotando límite diario',
        '💡 Seguridad: 2FA obligatorio, validación origen de fondos'
      ],
      color: 'orange'
    }
  ];

  professionalTips = [
    {
      icon: '🎯',
      title: 'Sé específico con cantidades',
      description: 'No digas "genera casos de prueba", di "genera 15 casos incluyendo 5 edge cases específicos"',
      example: '❌ "Hazme test cases" → ✅ "Genera 15 test cases: 1 path feliz, 8 validaciones, 6 edge cases"'
    },
    {
      icon: '🏦',
      title: 'Incluye contexto de negocio SIEMPRE',
      description: 'La IA no sabe que trabajas en banca, que hay regulaciones CIFIN, límites de transacción, etc.',
      example: '✅ "Sistema bancario con regulación CIFIN, límites $50K diarios, Token OTP obligatorio >$1M"'
    },
    {
      icon: '📊',
      title: 'Define el formato de salida',
      description: 'Tabla, JSON, Gherkin, Excel - especifica exactamente cómo quieres el resultado',
      example: '✅ "Formato tabla: ID | Escenario | Pre-condiciones | Pasos | Resultado Esperado | Prioridad | Datos"'
    },
    {
      icon: '🔄',
      title: 'Itera 2-3 veces mínimo',
      description: 'Primera respuesta = borrador. Refina: "Agrega 5 casos de concurrencia", "Detalla datos de prueba"',
      example: 'Iteración 1: Base → Iteración 2: +Edge cases → Iteración 3: +Datos específicos'
    },
    {
      icon: '✅',
      title: 'Valida contra tu conocimiento',
      description: 'La IA puede alucinar. Verifica que los casos tengan sentido con las reglas de negocio reales',
      example: '⚠️ Si IA genera "cliente con score -50", eso no existe. Corrige: "Score válido 0-999"'
    },
    {
      icon: '📚',
      title: 'Construye tu biblioteca de prompts',
      description: 'Guarda prompts que funcionan bien. Categoriza por: Login, Transacciones, APIs, etc.',
      example: '💾 Crea carpeta "Prompts QA" con templates reutilizables por tipo de funcionalidad'
    },
    {
      icon: '🎨',
      title: 'Personaliza según el dominio',
      description: 'Banca ≠ E-commerce ≠ Salud. Ajusta terminología, regulaciones y validaciones',
      example: 'Banca: CIFIN, PLD, FATCA | E-commerce: Stock, Carrito, Pago | Salud: HIPAA, Historia clínica'
    },
    {
      icon: '⏱️',
      title: 'Usa temperatura baja (0.0-0.3)',
      description: 'Para test cases necesitas consistencia, no creatividad. Temperatura baja = resultados predecibles',
      example: 'GPT-4 con temperatura 0.0 → mismo prompt genera mismos casos (útil para regresión)'
    }
  ];

  deliverables = [
    {
      title: '📋 Suite de Test Cases',
      description: '15+ casos de prueba documentados en tabla',
      checkpoints: [
        'Path feliz cubierto',
        'Mínimo 5 edge cases identificados',
        'Validaciones de negocio incluidas',
        'Prioridades asignadas',
        'Datos de prueba específicos'
      ]
    },
    {
      title: '🎯 Prompt Estructurado',
      description: 'Prompt reutilizable con [ROL] [CONTEXTO] [TAREA] [FORMATO]',
      checkpoints: [
        'ROL específico del dominio',
        'CONTEXTO completo (sistema, usuarios, criticidad)',
        'TAREA con cantidades exactas',
        'FORMATO de salida definido'
      ]
    },
    {
      title: '💡 Aprendizajes Documentados',
      description: 'Qué funcionó, qué no, mejoras para próxima vez',
      checkpoints: [
        '¿Cuántas iteraciones necesité?',
        '¿Qué edge cases olvidé inicialmente?',
        '¿Qué validaciones agregó la IA que no había considerado?',
        '¿El formato de salida fue útil o necesita ajustes?'
      ]
    }
  ];

  nextSteps = [
    'Practiquen con las 3 HU de desafío (Fácil, Intermedio, Avanzado)',
    'Comparen sus prompts con compañeros - diferentes approaches',
    'Guarden sus mejores prompts en su biblioteca personal',
    'Próxima clase: Generación de Datos de Prueba Masivos (1000+ registros)'
  ];

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.resetExpansions();
    }
  }

  nextSlide(): void {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
      this.resetExpansions();
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetExpansions();
  }

  toggleExample(index: number): void {
    this.expandedExample = this.expandedExample === index ? null : index;
  }

  toggleStep(index: number): void {
    this.expandedStep = this.expandedStep === index ? null : index;
  }

  toggleChallenge(index: number): void {
    this.expandedChallenge = this.expandedChallenge === index ? null : index;
  }

  resetExpansions(): void {
    this.expandedExample = null;
    this.expandedStep = null;
    this.expandedChallenge = null;
  }

  copyTemplate(): void {
    navigator.clipboard.writeText(this.template).then(() => {
      alert('✅ Template copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }
}
