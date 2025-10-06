export const serviceTranslations: any = {
  EC2: {
    es: {
      description: 'Servidores virtuales en la nube. Capacidad de cómputo escalable.',
      useCases: [
        'Alojamiento de aplicaciones web',
        'Entornos de desarrollo y prueba',
        'Computación de alto rendimiento',
        'Entrenamiento de machine learning'
      ],
      bestPractices: [
        'Usar Auto Scaling Groups para alta disponibilidad',
        'Habilitar monitoreo detallado para instancias de producción',
        'Usar roles IAM en lugar de claves de acceso',
        'Implementar security groups y NACLs apropiados',
        'Etiquetar recursos para mejor organización'
      ],
      pricing: '$0.0116/hora por t2.micro (Linux, us-east-1)'
    }
  },
  Lambda: {
    es: {
      description: 'Ejecuta código sin aprovisionar servidores. Paga solo por tiempo de cómputo.',
      useCases: [
        'Aplicaciones dirigidas por eventos',
        'Backends de microservicios',
        'Pipelines de procesamiento de datos',
        'Procesamiento de archivos en tiempo real'
      ],
      bestPractices: [
        'Mantener funciones pequeñas y enfocadas',
        'Usar variables de entorno para configuración',
        'Implementar manejo adecuado de errores y reintentos',
        'Monitorear con CloudWatch Logs y métricas',
        'Usar capas para dependencias compartidas'
      ],
      pricing: '$0.20 por 1M de solicitudes + $0.00001667 por GB-segundo'
    }
  },
  ECS: {
    es: {
      description: 'Servicio de orquestación de contenedores completamente administrado.',
      useCases: [
        'Aplicaciones en contenedores',
        'Arquitectura de microservicios',
        'Procesamiento por lotes'
      ],
      bestPractices: [
        'Usar Fargate para operaciones serverless',
        'Implementar health checks para alta disponibilidad',
        'Usar secretos de AWS para información sensible',
        'Implementar auto scaling basado en métricas'
      ],
      pricing: 'Fargate: $0.04048 por vCPU por hora + $0.004445 por GB por hora'
    }
  },
  EKS: {
    es: {
      description: 'Servicio Kubernetes administrado para ejecutar aplicaciones en contenedores.',
      useCases: [
        'Aplicaciones nativas de la nube',
        'Microservicios complejos',
        'Cargas de trabajo híbridas'
      ],
      bestPractices: [
        'Usar RBAC para control de acceso',
        'Implementar políticas de red',
        'Monitorear con Container Insights',
        'Usar Helm para gestión de paquetes'
      ],
      pricing: '$0.10 por hora por clúster + costos de nodos EC2'
    }
  },
  S3: {
    es: {
      description: 'Servicio de almacenamiento de objetos con durabilidad del 99.999999999%.',
      useCases: [
        'Copia de seguridad y recuperación',
        'Archivo y cumplimiento',
        'Almacenamiento de aplicaciones',
        'Alojamiento de sitios web estáticos'
      ],
      bestPractices: [
        'Habilitar versionado para datos críticos',
        'Usar políticas de ciclo de vida para optimización de costos',
        'Implementar cifrado en reposo y en tránsito',
        'Usar S3 Access Points para acceso a gran escala',
        'Habilitar registros de acceso para auditoría'
      ],
      pricing: '$0.023 por GB para los primeros 50 TB/mes (us-east-1)'
    }
  },
  EFS: {
    es: {
      description: 'Almacenamiento de archivos elástico y escalable para servicios AWS Cloud y on-premises.',
      useCases: [
        'Almacenamiento compartido para contenedores',
        'Directorios home para usuarios',
        'Análisis de big data'
      ],
      bestPractices: [
        'Usar clases de almacenamiento IA para ahorro de costos',
        'Implementar políticas de ciclo de vida',
        'Usar puntos de montaje en múltiples AZs',
        'Configurar límites de rendimiento apropiados'
      ],
      pricing: '$0.30 por GB-mes (Estándar) / $0.016 por GB-mes (IA)'
    }
  },
  Glacier: {
    es: {
      description: 'Almacenamiento de archivo de bajo costo con tiempos de recuperación de minutos a horas.',
      useCases: [
        'Archivo de datos a largo plazo',
        'Cumplimiento regulatorio',
        'Preservación de medios digitales'
      ],
      bestPractices: [
        'Usar políticas de ciclo de vida de S3',
        'Elegir la opción de recuperación apropiada',
        'Etiquetar archivos para organización',
        'Usar Vault Lock para cumplimiento'
      ],
      pricing: '$0.004 por GB/mes (recuperación estándar 3-5 horas)'
    }
  },
  RDS: {
    es: {
      description: 'Servicio de base de datos relacional administrado que soporta múltiples motores.',
      useCases: [
        'Aplicaciones web y móviles',
        'Comercio electrónico',
        'Aplicaciones empresariales'
      ],
      bestPractices: [
        'Habilitar Multi-AZ para alta disponibilidad',
        'Usar réplicas de lectura para escalar',
        'Implementar copias de seguridad automáticas',
        'Monitorear métricas de rendimiento',
        'Usar Parameter Groups para optimización'
      ],
      pricing: 'Desde $0.017/hora (db.t3.micro MySQL)'
    }
  },
  DynamoDB: {
    es: {
      description: 'Servicio de base de datos NoSQL rápido y flexible para cualquier escala.',
      useCases: [
        'Aplicaciones móviles',
        'Juegos',
        'IoT',
        'Aplicaciones web en tiempo real'
      ],
      bestPractices: [
        'Diseñar claves de partición eficientemente',
        'Usar índices secundarios globales apropiadamente',
        'Implementar DynamoDB Streams para procesamiento de eventos',
        'Usar modo bajo demanda para cargas impredecibles',
        'Implementar políticas de TTL para limpieza automática'
      ],
      pricing: 'Modo bajo demanda: $1.25 por millón de solicitudes de escritura'
    }
  },
  Aurora: {
    es: {
      description: 'Base de datos relacional compatible con MySQL y PostgreSQL construida para la nube.',
      useCases: [
        'Aplicaciones empresariales',
        'Software como servicio (SaaS)',
        'Videojuegos en línea'
      ],
      bestPractices: [
        'Usar Aurora Serverless para cargas variables',
        'Implementar réplicas de Aurora para lectura',
        'Usar clonación de Aurora para dev/test',
        'Configurar backtrack para recuperación rápida'
      ],
      pricing: 'Desde $0.041/hora (db.t3.small, MySQL-compatible)'
    }
  },
  VPC: {
    es: {
      description: 'Red virtual aislada para tus recursos AWS.',
      useCases: [
        'Aislamiento de red',
        'Conexiones híbridas',
        'Entornos multi-tier'
      ],
      bestPractices: [
        'Usar múltiples subredes en diferentes AZs',
        'Implementar NACLs y Security Groups en capas',
        'Usar VPC Flow Logs para análisis de tráfico',
        'Planificar rangos CIDR cuidadosamente'
      ],
      pricing: 'Sin costo (solo se cobran recursos asociados)'
    }
  },
  CloudFront: {
    es: {
      description: 'Red de entrega de contenido (CDN) para entrega rápida de contenido.',
      useCases: [
        'Distribución de contenido web',
        'Streaming de video',
        'Entrega de APIs',
        'Descarga de software'
      ],
      bestPractices: [
        'Usar certificados SSL/TLS para HTTPS',
        'Implementar políticas de cache apropiadas',
        'Usar funciones Lambda@Edge para personalización',
        'Configurar geo-restricciones cuando sea necesario'
      ],
      pricing: '$0.085 por GB para los primeros 10 TB/mes (us-east)'
    }
  },
  'Route 53': {
    es: {
      description: 'Servicio web de Sistema de Nombres de Dominio (DNS) escalable.',
      useCases: [
        'Registro de dominios',
        'Enrutamiento de DNS',
        'Health checks y failover'
      ],
      bestPractices: [
        'Usar políticas de enrutamiento para alta disponibilidad',
        'Implementar health checks para endpoints',
        'Usar alias records para recursos AWS',
        'Configurar TTL apropiado para registros'
      ],
      pricing: '$0.50 por zona alojada/mes + $0.40 por millón de consultas'
    }
  },
  'API Gateway': {
    es: {
      description: 'Servicio completamente administrado para crear, publicar y gestionar APIs.',
      useCases: [
        'APIs RESTful',
        'APIs WebSocket',
        'Backends de aplicaciones móviles',
        'Integración de microservicios'
      ],
      bestPractices: [
        'Implementar throttling y quotas',
        'Usar claves API para autenticación',
        'Habilitar caching para reducir latencia',
        'Monitorear con CloudWatch y X-Ray'
      ],
      pricing: '$3.50 por millón de llamadas API + transferencia de datos'
    }
  },
  IAM: {
    es: {
      description: 'Gestión de Identidad y Acceso para control de acceso seguro.',
      useCases: [
        'Gestión de usuarios y grupos',
        'Control de acceso a recursos',
        'Federación de identidad',
        'Acceso multi-cuenta'
      ],
      bestPractices: [
        'Usar principio de menor privilegio',
        'Habilitar MFA para usuarios',
        'Rotar credenciales regularmente',
        'Usar roles IAM para aplicaciones',
        'Auditar políticas con Access Analyzer'
      ],
      pricing: 'Gratis (sin costo)'
    }
  },
  KMS: {
    es: {
      description: 'Servicio de Gestión de Claves para crear y controlar claves de cifrado.',
      useCases: [
        'Cifrado de datos',
        'Firma digital',
        'Cumplimiento regulatorio',
        'Gestión centralizada de claves'
      ],
      bestPractices: [
        'Usar claves gestionadas por el cliente para control',
        'Implementar rotación automática de claves',
        'Usar políticas de claves para control de acceso',
        'Auditar uso de claves con CloudTrail'
      ],
      pricing: '$1/mes por clave gestionada + $0.03 por 10,000 solicitudes'
    }
  },
  Cognito: {
    es: {
      description: 'Servicio de identidad de usuario y sincronización de datos.',
      useCases: [
        'Autenticación de usuarios',
        'Inicio de sesión social',
        'Sincronización de datos de usuario',
        'Acceso a recursos AWS'
      ],
      bestPractices: [
        'Usar grupos para asignación de roles',
        'Implementar MFA para seguridad adicional',
        'Personalizar flujos de autenticación con Lambda',
        'Usar atributos personalizados para datos de usuario'
      ],
      pricing: 'Gratis hasta 50,000 MAUs, luego desde $0.0055 por MAU'
    }
  },
  CloudFormation: {
    es: {
      description: 'Servicio de Infraestructura como Código para modelar y aprovisionar recursos.',
      useCases: [
        'Aprovisionamiento de infraestructura',
        'Gestión de configuración',
        'Despliegues repetibles',
        'Entornos multi-región'
      ],
      bestPractices: [
        'Usar StackSets para despliegues multi-cuenta',
        'Modularizar plantillas con stacks anidados',
        'Usar parámetros y mapeos para flexibilidad',
        'Implementar políticas de cambio para seguridad'
      ],
      pricing: 'Sin costo adicional (solo recursos aprovisionados)'
    }
  },
  CodePipeline: {
    es: {
      description: 'Servicio de entrega continua para actualizaciones rápidas y confiables.',
      useCases: [
        'CI/CD automatizado',
        'Despliegues multi-etapa',
        'Automatización de lanzamientos',
        'Integración con herramientas de terceros'
      ],
      bestPractices: [
        'Implementar aprobaciones manuales para producción',
        'Usar variables de entorno para configuración',
        'Integrar pruebas automatizadas',
        'Monitorear ejecuciones de pipeline'
      ],
      pricing: '$1 por pipeline activo/mes'
    }
  },
  CloudWatch: {
    es: {
      description: 'Servicio de monitoreo y observabilidad para recursos y aplicaciones AWS.',
      useCases: [
        'Monitoreo de aplicaciones',
        'Análisis de logs',
        'Alertas operacionales',
        'Dashboards personalizados'
      ],
      bestPractices: [
        'Crear dashboards para métricas clave',
        'Configurar alarmas para eventos críticos',
        'Usar Logs Insights para análisis',
        'Implementar métricas personalizadas',
        'Usar Contributor Insights para análisis de tráfico'
      ],
      pricing: 'Desde $0.30 por métrica personalizada/mes'
    }
  }
};
