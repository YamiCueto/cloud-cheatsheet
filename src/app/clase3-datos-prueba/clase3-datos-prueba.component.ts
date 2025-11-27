import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Example {
  title: string;
  requirement: string;
  badPrompt: {
    text: string;
    problems: string[];
  };
  goodPrompt: {
    text: string;
    benefits: string[];
  };
  sampleOutput: string;
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
  requirement: string;
  context: string[];
  requirements: string[];
  hints: string[];
  color: string;
}

interface Format {
  name: string;
  icon: string;
  description: string;
  useCase: string;
  example: string;
}

@Component({
  selector: 'app-clase3-datos-prueba',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clase3-datos-prueba.component.html',
  styleUrls: [
    '../shared-presentation.css',
    './clase3-datos-prueba.component.css'
  ]
})
export class Clase3DatosPruebaComponent {
  currentSlide = 0;
  expandedExample: number | null = null;
  expandedStep: number | null = null;
  expandedChallenge: number | null = null;
  expandedFormat: number | null = null;

  slides = [
    { type: 'title', title: 'Clase 3' },
    { type: 'theory', title: '¿Por qué necesitas datos de prueba masivos?' },
    { type: 'formats', title: 'Formatos de Salida Disponibles' },
    { type: 'examples', title: 'Ejemplos Comparativos' },
    { type: 'process', title: 'Proceso de 8 Pasos' },
    { type: 'template', title: 'Template Reutilizable' },
    { type: 'challenges', title: 'Desafíos Prácticos' },
    { type: 'tips', title: 'Tips Profesionales' },
    { type: 'summary', title: 'Resumen y Entregables' }
  ];

  theoryPoints = [
    {
      icon: '⏱️',
      title: 'Ahorro de Tiempo',
      color: 'green',
      description: 'Crear 1000 registros manualmente = 8-10 horas. Con IA = 5 minutos.',
      items: [
        'Evita trabajo repetitivo y propenso a errores',
        'Escala masivamente sin esfuerzo adicional',
        'Genera variaciones realistas automáticamente'
      ]
    },
    {
      icon: '🎯',
      title: 'Calidad de Testing',
      color: 'blue',
      description: 'Datos realistas = Tests más confiables',
      items: [
        'Detecta bugs que no aparecen con "test123"',
        'Simula escenarios de producción reales',
        'Valida límites y edge cases efectivamente'
      ]
    },
    {
      icon: '🔒',
      title: 'Cumplimiento y Seguridad',
      color: 'orange',
      description: 'Evita usar datos reales de producción',
      items: [
        'Cumple GDPR, CCPA y regulaciones locales',
        'Protege PII (Personally Identifiable Information)',
        'Ambiente de testing sin riesgos legales'
      ]
    }
  ];

  formats: Format[] = [
    {
      name: 'JSON',
      icon: '📋',
      description: 'Formato ideal para APIs REST, NoSQL y testing de servicios',
      useCase: 'Postman collections, carga en MongoDB, payloads de APIs',
      example: `{
  "id": "CLT-20241001",
  "nombre": "María Rodríguez",
  "email": "maria.rodriguez@example.com",
  "saldoCuenta": 15750.50,
  "fechaApertura": "2023-03-15"
}`
    },
    {
      name: 'SQL INSERT',
      icon: '🗄️',
      description: 'Statements listos para ejecutar en bases de datos relacionales',
      useCase: 'Carga masiva en MySQL, PostgreSQL, Oracle, SQL Server',
      example: `INSERT INTO clientes (id, nombre, email, saldo, fecha_apertura)
VALUES ('CLT-20241001', 'María Rodríguez', 'maria.rodriguez@example.com', 15750.50, '2023-03-15');`
    },
    {
      name: 'CSV',
      icon: '📊',
      description: 'Universal para Excel, importación masiva y análisis',
      useCase: 'Carga batch, reporting, integración con herramientas BI',
      example: `id,nombre,email,saldo,fecha_apertura
CLT-20241001,María Rodríguez,maria.rodriguez@example.com,15750.50,2023-03-15`
    },
    {
      name: 'XML',
      icon: '📄',
      description: 'Formato legacy para sistemas empresariales y SOAP',
      useCase: 'Integración con sistemas bancarios antiguos, web services SOAP',
      example: `<cliente>
  <id>CLT-20241001</id>
  <nombre>María Rodríguez</nombre>
  <email>maria.rodriguez@example.com</email>
  <saldo>15750.50</saldo>
  <fechaApertura>2023-03-15</fechaApertura>
</cliente>`
    }
  ];

  examples: Example[] = [
    {
      title: 'Caso 1: 1000 Clientes para Testing de Préstamos',
      requirement: 'Sistema de aprobación de préstamos necesita datos realistas de clientes con perfiles variados (buenos, malos, promedio) para testing de algoritmo de scoring crediticio.',
      badPrompt: {
        text: 'Dame 1000 clientes en JSON',
        problems: [
          'No especifica qué campos necesita',
          'Sin contexto de dominio (banca)',
          'No indica rangos realistas de datos',
          'Falta formato específico de IDs',
          'No menciona variedad de perfiles',
          'Sin validaciones de negocio'
        ]
      },
      goodPrompt: {
        text: `[ROL] Actúa como especialista en generación de datos sintéticos para banca.

[CONTEXTO]
Sistema de préstamos personales en banco colombiano.
Necesito dataset para testing de algoritmo de scoring crediticio.

[TAREA]
Genera 1000 clientes sintéticos en formato JSON con esta estructura:

CAMPOS REQUERIDOS:
- id: formato "CLT-YYYYMMDD-NNNN" (año, mes, día, consecutivo)
- cedulaCiudadania: 10 dígitos, número válido colombiano
- nombreCompleto: nombres y apellidos colombianos realistas
- email: formato corporativo válido
- telefono: celular colombiano (+57 3XX XXX XXXX)
- fechaNacimiento: rango 1960-2000 (edades 24-64 años)
- ciudadResidencia: ciudades principales (Bogotá 40%, Medellín 20%, Cali 15%, otras 25%)
- ingresoMensual: rango $1.500.000 - $20.000.000 COP
- tipoEmpleo: [Empleado, Independiente, Pensionado] (70%-20%-10%)
- antiguedadLaboral: 0-30 años consistente con edad
- historialCrediticio: [Excelente, Bueno, Regular, Malo] (20%-40%-30%-10%)
- deudaActual: 0 - 80% del ingreso mensual
- saldoCuentaAhorros: $0 - $50.000.000 COP
- scoreCrediticio: 300-850 (consistente con historial)

DISTRIBUCIÓN:
- 20% perfiles excelentes (score 750-850, deuda <20%)
- 40% perfiles buenos (score 650-749, deuda 20-40%)
- 30% perfiles regulares (score 550-649, deuda 40-60%)
- 10% perfiles malos (score 300-549, deuda >60%)

VALIDACIONES:
- Email único por registro
- Cédula única
- Scoring consistente con historial crediticio
- Deuda no excede capacidad de pago
- Edad consistente con antigüedad laboral

OUTPUT: Array JSON con 1000 objetos`,
        benefits: [
          '✅ Especifica formato colombiano (cédulas, teléfonos, moneda)',
          '✅ Define estructura clara con todos los campos',
          '✅ Rangos realistas de datos financieros',
          '✅ Distribución de perfiles (20-40-30-10)',
          '✅ Validaciones de consistencia de negocio',
          '✅ Casos de testing balanceados'
        ]
      },
      sampleOutput: `[
  {
    "id": "CLT-20241125-0001",
    "cedulaCiudadania": "1234567890",
    "nombreCompleto": "Camila González Martínez",
    "email": "camila.gonzalez@example.com",
    "telefono": "+57 312 456 7890",
    "fechaNacimiento": "1985-04-12",
    "ciudadResidencia": "Bogotá",
    "ingresoMensual": 5500000,
    "tipoEmpleo": "Empleado",
    "antiguedadLaboral": 8,
    "historialCrediticio": "Bueno",
    "deudaActual": 1650000,
    "saldoCuentaAhorros": 12000000,
    "scoreCrediticio": 720
  },
  { ... 999 registros más }
]`
    },
    {
      title: 'Caso 2: SQL Inserts para Transacciones Bancarias',
      requirement: 'Testing de performance de sistema de transacciones requiere 10,000 movimientos históricos en SQL para carga en base de datos.',
      badPrompt: {
        text: 'Genera inserts SQL de transacciones bancarias',
        problems: [
          'No especifica cantidad de registros',
          'Sin estructura de tabla definida',
          'No indica tipos de transacciones',
          'Falta rangos de montos',
          'Sin fechas históricas',
          'No valida saldos negativos'
        ]
      },
      goodPrompt: {
        text: `[ROL] Experto en datos sintéticos para testing de sistemas financieros.

[CONTEXTO]
Sistema core bancario con tabla "transacciones" en PostgreSQL.
Necesito carga masiva para testing de performance y reportes históricos.

[TAREA]
Genera 10,000 SQL INSERTs para tabla transacciones con esta estructura:

TABLA: transacciones
- id_transaccion: VARCHAR(20), formato "TRX-YYYYMMDD-NNNNN"
- fecha_hora: TIMESTAMP, rango últimos 2 años distribuido uniformemente
- id_cuenta_origen: VARCHAR(15), formato "ACC-NNNNN" (pool de 500 cuentas)
- id_cuenta_destino: VARCHAR(15), formato "ACC-NNNNN" (pool de 500 cuentas, diferente a origen)
- tipo_transaccion: ['TRANSFERENCIA', 'DEPOSITO', 'RETIRO', 'PAGO_SERVICIO'] (40%-25%-20%-15%)
- monto: DECIMAL(15,2), rangos por tipo:
  * TRANSFERENCIA: $10.000 - $5.000.000
  * DEPOSITO: $20.000 - $10.000.000
  * RETIRO: $10.000 - $3.000.000
  * PAGO_SERVICIO: $5.000 - $500.000
- estado: ['EXITOSA', 'PENDIENTE', 'RECHAZADA'] (85%-10%-5%)
- canal: ['APP_MOVIL', 'WEB', 'CAJERO', 'SUCURSAL'] (50%-30%-15%-5%)
- descripcion: texto descriptivo según tipo (ej: "Transferencia a Juan Pérez", "Pago Energía")

REGLAS NEGOCIO:
- Cuentas origen y destino diferentes en transferencias
- Depósitos sin cuenta destino (NULL)
- Retiros sin cuenta destino (NULL)
- Fechas ordenadas cronológicamente (más antiguas primero)
- No exceder 50 transacciones por cuenta por día
- Rechazos solo en TRANSFERENCIA y RETIRO (5% cada uno)

OUTPUT: 10,000 statements INSERT INTO listos para ejecutar`,
        benefits: [
          '✅ Define estructura completa de tabla SQL',
          '✅ Rangos de montos por tipo de transacción',
          '✅ Distribución temporal (2 años)',
          '✅ Pool de cuentas reutilizables (realista)',
          '✅ Validaciones de negocio (origen ≠ destino)',
          '✅ Estados y canales distribuidos'
        ]
      },
      sampleOutput: `INSERT INTO transacciones VALUES ('TRX-20221201-00001', '2022-12-01 08:15:23', 'ACC-00123', 'ACC-00456', 'TRANSFERENCIA', 250000.00, 'EXITOSA', 'APP_MOVIL', 'Transferencia a María López');
INSERT INTO transacciones VALUES ('TRX-20221201-00002', '2022-12-01 09:22:15', 'ACC-00789', NULL, 'DEPOSITO', 1500000.00, 'EXITOSA', 'SUCURSAL', 'Depósito en efectivo');
... (9,998 registros más)`
    }
  ];

  processSteps: Step[] = [
    {
      number: 1,
      title: 'Definir Requerimiento de Datos',
      description: 'Identifica qué datos necesitas, para qué sistema, y cuántos registros.',
      example: 'Necesito 5000 transacciones bancarias para testing de reportes de auditoría del último año',
      tips: [
        'Pregunta al BA/PO: ¿Qué escenarios necesitan cubrir?',
        'Define cantidad: ¿100 o 100,000 registros?',
        'Contexto de uso: ¿Performance, funcional, integración?'
      ]
    },
    {
      number: 2,
      title: 'Mapear Estructura de Datos',
      description: 'Lista todos los campos, tipos de dato, y formatos específicos.',
      example: 'Campo "email" debe tener formato válido con dominio corporativo @empresa.com',
      tips: [
        'Revisa el modelo de base de datos o DTOs',
        'Anota restricciones: NOT NULL, UNIQUE, FK',
        'Identifica formatos especiales (fechas, IDs, monedas)'
      ]
    },
    {
      number: 3,
      title: 'Establecer Rangos y Distribuciones',
      description: 'Define valores mínimos, máximos y distribución estadística realista.',
      example: 'Edades: 18-70 años, concentración 25-45 (70%), extremos 18-24 y 46-70 (15% cada uno)',
      tips: [
        'Pregunta: ¿Qué valores son normales en producción?',
        'Define outliers: casos extremos pero válidos',
        'Balancea distribución: evita solo valores promedio'
      ]
    },
    {
      number: 4,
      title: 'Identificar Relaciones y Consistencia',
      description: 'Asegura que datos relacionados sean lógicamente consistentes.',
      example: 'Si edad = 25 años, antigüedad laboral no puede ser 30 años',
      tips: [
        'Lista dependencias: scoring ↔ historial crediticio',
        'Valida FK: IDs referenciados deben existir',
        'Consistencia temporal: fechas coherentes'
      ]
    },
    {
      number: 5,
      title: 'Elegir Formato de Salida',
      description: 'Selecciona JSON, SQL, CSV o XML según destino de carga.',
      example: 'Postman → JSON, MySQL → SQL, Excel → CSV, SOAP → XML',
      tips: [
        'API testing → JSON (fácil de parsear)',
        'Carga masiva DB → SQL (directo)',
        'Reporting/BI → CSV (universal)',
        'Legacy systems → XML (compatibilidad)'
      ]
    },
    {
      number: 6,
      title: 'Construir Prompt Estructurado',
      description: 'Usa template [ROL][CONTEXTO][TAREA] con campos, rangos y validaciones.',
      example: 'Ver ejemplos comparativos en slide anterior',
      tips: [
        'Sé específico: evita ambigüedad',
        'Incluye ejemplos de output esperado',
        'Lista validaciones de negocio explícitamente'
      ]
    },
    {
      number: 7,
      title: 'Generar y Validar Sample',
      description: 'Ejecuta prompt y valida primeros 10-20 registros antes de generar todo.',
      example: 'Revisa que emails sean únicos, montos en rangos, fechas válidas',
      tips: [
        'No generes 10,000 de una vez sin validar',
        'Pide sample pequeño primero (10-50 registros)',
        'Verifica manualmente casos extremos',
        'Si hay errores, ajusta prompt y regenera'
      ]
    },
    {
      number: 8,
      title: 'Escalar y Cargar Dataset Completo',
      description: 'Genera dataset completo, guarda en archivo, y carga en sistema target.',
      example: 'Genera 10,000 → Guarda en clientes.json → Importa con script',
      tips: [
        'Genera en lotes si cantidad > 5000 registros',
        'Guarda en archivo antes de cargar',
        'Valida integridad post-carga (COUNT, checksums)',
        'Ten backup antes de cargar en ambiente compartido'
      ]
    }
  ];

  template = `[ROL] Actúa como especialista en generación de datos sintéticos para [DOMINIO: banca/e-commerce/salud/etc].

[CONTEXTO]
Sistema: [NOMBRE DEL SISTEMA]
Propósito: [Testing funcional/Performance/Carga masiva]
Ambiente: [Dev/QA/Staging]

[TAREA]
Genera [CANTIDAD] registros sintéticos en formato [JSON/SQL/CSV/XML] para tabla/entidad [NOMBRE].

ESTRUCTURA DE DATOS:
- campo1: tipo, formato, rango
- campo2: tipo, formato, rango
- campo3: tipo, formato, rango
[Listar TODOS los campos con especificaciones completas]

RANGOS Y DISTRIBUCIONES:
- Campo numérico: [mín] - [máx], distribución [uniforme/normal/específica]
- Campo categórico: [valor1, valor2, valor3] con % [X%, Y%, Z%]
- Campo fecha: rango [fecha_inicio] a [fecha_fin]
- Campo texto: [formato/patrón específico]

REGLAS DE NEGOCIO:
- Unicidad: [campos que deben ser únicos]
- Relaciones: [campo_A debe ser consistente con campo_B]
- Validaciones: [restricciones de dominio]
- Foreign Keys: [relaciones con otras entidades]

DISTRIBUCIÓN DE ESCENARIOS:
- [Escenario 1]: X% de registros con características [...]
- [Escenario 2]: Y% de registros con características [...]
- [Escenario 3]: Z% de registros con características [...]

FORMATO OUTPUT:
[Especificar formato exacto: array JSON, statements SQL, CSV con headers, XML con schema]

VALIDACIONES FINALES:
- Todos los emails/IDs únicos
- Fechas lógicamente consistentes
- Montos dentro de rangos permitidos
- Relaciones FK válidas`;

  challenges: Challenge[] = [
    {
      id: 1,
      difficulty: 'Fácil',
      title: '500 Productos para E-commerce',
      requirement: 'Tienda online de electrónicos necesita catálogo de 500 productos sintéticos para testing de búsqueda y filtros.',
      context: [
        'Categorías: Laptops, Smartphones, Tablets, Accesorios, Audio',
        'Marcas realistas: Apple, Samsung, HP, Lenovo, Sony, etc.',
        'Rangos de precio: $100 - $5,000 USD',
        'Stock variable: 0-200 unidades (incluir agotados)',
        'Rating: 1-5 estrellas con reviews (0-500)'
      ],
      requirements: [
        'Formato JSON con array de 500 productos',
        'Campos: id, nombre, categoria, marca, precio, stock, rating, descripción',
        'Distribución: 30% Laptops, 30% Smartphones, 20% Tablets, 20% otros',
        '10% productos agotados (stock = 0)',
        'Precios realistas según categoría'
      ],
      hints: [
        'Define pool de marcas por categoría (Apple hace iPhones, no hace Laptops Windows)',
        'Nombres descriptivos: "MacBook Pro 16 M3 2024" no "Producto 123"',
        'Descripciones cortas (50-100 palabras) realistas',
        'Stock agotado debe tener rating alto (productos populares)'
      ],
      color: 'green'
    },
    {
      id: 2,
      difficulty: 'Intermedio',
      title: '2000 Historiales Médicos en CSV',
      requirement: 'Sistema de historia clínica electrónica necesita dataset de 2000 pacientes con consultas, diagnósticos y tratamientos para testing de reportes epidemiológicos.',
      context: [
        'Pacientes con datos demográficos completos',
        'Múltiples consultas por paciente (1-20 consultas en 3 años)',
        'Diagnósticos CIE-10 realistas (top 50 diagnósticos comunes)',
        'Medicamentos prescritos según diagnóstico',
        'Alergias medicamentosas (15% pacientes)'
      ],
      requirements: [
        'Formato CSV (compatible Excel) con headers',
        'Estructura: id_paciente, nombre, edad, genero, fecha_consulta, diagnostico_cie10, medicamento_prescrito, dosis, alergias',
        'Total ~15,000 registros (2000 pacientes × promedio 7-8 consultas cada uno)',
        'Fechas distribuidas en últimos 3 años',
        'Validar: no prescribir medicamento si paciente alérgico',
        'Enfermedades crónicas deben repetirse en múltiples consultas'
      ],
      hints: [
        'Usa códigos CIE-10 reales comunes: J06 (Infección respiratoria), K29 (Gastritis), E11 (Diabetes tipo 2)',
        'Consulta tabla medicamentos-diagnósticos: Diabetes → Metformina, Hipertensión → Losartán',
        'Distribuye edades realisticamente: más consultas en niños (0-5) y adultos mayores (60+)',
        'Alergias comunes: Penicilina, Aspirina, Sulfa'
      ],
      color: 'blue'
    },
    {
      id: 3,
      difficulty: 'Avanzado',
      title: '10,000 Transacciones Financieras Multi-Tabla en SQL',
      requirement: 'Sistema bancario core necesita dataset completo de 10,000 transacciones con impacto en múltiples tablas relacionadas (cuentas, clientes, saldos históricos) para testing de integridad referencial y triggers.',
      context: [
        'Schema con 4 tablas: clientes, cuentas, transacciones, saldos_historicos',
        'Relaciones FK: transacciones.id_cuenta → cuentas.id, cuentas.id_cliente → clientes.id',
        '500 clientes con 1-3 cuentas cada uno (total ~1000 cuentas)',
        'Transacciones afectan saldos: INSERT en transacciones debe reflejarse en saldos_historicos',
        'Validación: saldo no puede ser negativo (excepto sobregiro autorizado)'
      ],
      requirements: [
        'Formato: SQL INSERTs para PostgreSQL con transacciones',
        'Orden de carga: 1) clientes, 2) cuentas, 3) transacciones, 4) saldos_historicos',
        '500 INSERTs en tabla clientes',
        '~1000 INSERTs en tabla cuentas (vinculadas a clientes)',
        '10,000 INSERTs en tabla transacciones (origen/destino válidos)',
        '~10,000 INSERTs en saldos_historicos (snapshot después de cada transacción)',
        'Incluir BEGIN TRANSACTION y COMMIT para atomicidad',
        'Validar: suma de transacciones = diferencia de saldos'
      ],
      hints: [
        'Genera primero 500 clientes con IDs fijos: CLT-00001 a CLT-00500',
        'Cuentas: usa IDs de clientes generados, tipos [AHORROS, CORRIENTE]',
        'Transacciones: usa pool de cuentas existentes, valida origen ≠ destino en transferencias',
        'Saldos históricos: calcula saldo_anterior + monto (débito) o - monto (crédito)',
        'Agrega CHECK constraints en prompt: CHECK (saldo >= -sobregiro_autorizado)',
        'Incluye índices sugeridos al final: CREATE INDEX idx_transacciones_fecha ON transacciones(fecha);'
      ],
      color: 'orange'
    }
  ];

  professionalTips = [
    {
      icon: '🔢',
      title: 'Genera en Lotes para Volúmenes Grandes',
      description: 'Si necesitas 50,000 registros, genera 10 lotes de 5,000. Más manejable y menos errores.',
      example: 'Genera 5,000 registros, valida, luego repite 9 veces más con IDs consecutivos'
    },
    {
      icon: '🎲',
      title: 'Usa Seeds para Reproducibilidad',
      description: 'Si necesitas regenerar el mismo dataset, especifica un seed aleatorio en el prompt.',
      example: '"Usa seed=12345 para generación aleatoria reproducible"'
    },
    {
      icon: '🔗',
      title: 'Mantén Pools de IDs para Relaciones',
      description: 'Crea primero entidades padre (clientes), luego usa sus IDs en entidades hija (cuentas).',
      example: 'Genera 100 clientes con IDs CLT-001 a CLT-100, luego usa esos IDs en tabla pedidos'
    },
    {
      icon: '📅',
      title: 'Distribuye Fechas Realisticamente',
      description: 'No uses distribución uniforme en fechas. Simula patrones reales (más actividad entre semana, menos domingos).',
      example: '"70% transacciones Lun-Vie 8am-6pm, 20% noches, 10% fines de semana"'
    },
    {
      icon: '💾',
      title: 'Guarda Datasets Reutilizables',
      description: 'Si el dataset es bueno, guárdalo. Reutiliza en múltiples sprints.',
      example: 'Crea repositorio git con /test-data/ carpeta con JSONs/SQLs versionados'
    },
    {
      icon: '✅',
      title: 'Automatiza Validación Post-Generación',
      description: 'Crea script que valide: unicidad, rangos, FK válidas, consistencia.',
      example: 'Script Python que lee JSON y verifica: len(set(emails)) == len(registros)'
    },
    {
      icon: '🌍',
      title: 'Especifica Localización',
      description: 'Nombres, formatos de fecha, moneda deben ser del país/región correcta.',
      example: '"Nombres colombianos, fechas DD/MM/YYYY, moneda COP con puntos de miles"'
    },
    {
      icon: '🔐',
      title: 'Anonimiza Datos Reales si Partes de Ellos',
      description: 'Si usas estructura de producción, NUNCA copies datos reales. Anonimiza o sintetiza.',
      example: '"Basado en estructura tabla clientes (adjunto schema.sql), genera datos 100% sintéticos"'
    }
  ];

  deliverables = [
    {
      title: '📦 Dataset Completo',
      description: 'Archivo con cantidad solicitada de registros en formato elegido',
      checkpoints: [
        'Archivo .json / .sql / .csv / .xml con registros completos',
        'Cumple cantidad especificada (ej: 1000 registros)',
        'Sintaxis válida (parseable sin errores)',
        'Codificación UTF-8 para caracteres especiales'
      ]
    },
    {
      title: '📋 Prompt Documentado',
      description: 'Prompt estructurado reutilizable para regenerar o ajustar dataset',
      checkpoints: [
        'Template completo con campos, rangos, distribuciones',
        'Validaciones de negocio listadas',
        'Comentarios explicando decisiones de diseño',
        'Versionado si hiciste ajustes iterativos'
      ]
    },
    {
      title: '✅ Reporte de Validación',
      description: 'Documento breve confirmando calidad del dataset generado',
      checkpoints: [
        'Verificación de unicidad (IDs, emails únicos)',
        'Rangos de valores dentro de límites',
        'Consistencia de relaciones (FK válidas)',
        'Sample de 5-10 registros representativos',
        'Issues encontrados y cómo se resolvieron'
      ]
    }
  ];

  nextSteps = [
    'Guarda el dataset en repositorio de equipo (/test-data/)',
    'Documenta en README cómo usarlo y regenerarlo',
    'Comparte prompt con equipo para futuros proyectos',
    'Próxima clase: Taller de Scripts de Automatización con IA (Selenium/Cypress desde test cases)'
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

  toggleFormat(index: number): void {
    this.expandedFormat = this.expandedFormat === index ? null : index;
  }

  resetExpansions(): void {
    this.expandedExample = null;
    this.expandedStep = null;
    this.expandedChallenge = null;
    this.expandedFormat = null;
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
