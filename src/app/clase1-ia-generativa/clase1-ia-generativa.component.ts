import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideContentService, BulletDetail, TimelineDetail, ToolDetail, BenefitDetail, LimitationDetail } from './slide-content.service';

interface Slide {
  id: number;
  title: string;
  content: string;
  type: 'title' | 'content' | 'two-column' | 'table' | 'grid';
  data?: any;
}

@Component({
  selector: 'app-clase1-ia-generativa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clase1-ia-generativa.component.html',
  styleUrls: ['./clase1-ia-generativa.component.css']
})
export class Clase1IaGenerativaComponent {
  currentSlide = 0;
  expandedBullet: number | null = null;
  expandedTimeline: number | null = null;
  expandedTool: number | null = null;
  expandedBenefit: number | null = null;
  expandedLimitation: number | null = null;

  slide2Bullets: BulletDetail[] = [];
  slide3Timeline: TimelineDetail[] = [];
  slide6Tools: ToolDetail[] = [];
  slide7Benefits: BenefitDetail[] = [];
  slide8Limitations: LimitationDetail[] = [];

  constructor(private slideContentService: SlideContentService) {
    this.slide2Bullets = this.slideContentService.getSlide2BulletDetails();
    this.slide3Timeline = this.slideContentService.getSlide3TimelineDetails();
    this.slide6Tools = this.slideContentService.getSlide6ToolDetails();
    this.slide7Benefits = this.slideContentService.getSlide7BenefitDetails();
    this.slide8Limitations = this.slideContentService.getSlide8LimitationDetails();
  }

  slides: Slide[] = [
    // Slide 1 - Portada
    {
      id: 1,
      title: 'IA Generativa para QA y Desarrollo',
      content: 'Clase 1: Fundamentos de IA, ML y GenIA',
      type: 'title',
      data: {
        subtitle: 'Clase 1: Fundamentos de IA, ML y GenIA',
        info: 'Duración: 60 minutos | Modalidad: Teórico-Práctica'
      }
    },

    // Slide 2 - Objetivo
    {
      id: 2,
      title: 'Objetivo del Día',
      content: 'Entender las bases tecnológicas de la IA Generativa',
      type: 'content',
      data: {
        highlight: 'Entender las bases tecnológicas de la IA Generativa',
        warning: '⚠️ No es solo chatear con ChatGPT'
      }
    },

    // Slide 3 - Evolución
    {
      id: 3,
      title: 'Evolución: IA → ML → GenIA',
      content: 'Línea de tiempo de la evolución de la inteligencia artificial',
      type: 'content',
      data: {
        timeline: [
          {
            era: '① IA - Años 1950s',
            description: 'Sistemas basados en reglas fijas, sin aprendizaje',
            code: 'SI ingreso > $3000 Y historial = "bueno"\nENTONCES aprobar_préstamo',
            color: 'blue'
          },
          {
            era: '② ML - Años 1990s',
            description: 'Aprende de datos, detecta patrones en miles de casos',
            example: 'Ejemplo: Predice riesgo crediticio con 100K casos históricos',
            color: 'blue'
          },
          {
            era: '③ GenIA - 2020s',
            description: 'Crea contenido nuevo: texto, código, imágenes',
            example: 'Ejemplo: ChatGPT genera casos de prueba, código, documentación',
            color: 'orange'
          }
        ]
      }
    },

    // Slide 4 - LLMs
    {
      id: 4,
      title: 'LLMs: El Motor de la GenIA',
      content: 'Large Language Model - Modelo entrenado con billones de palabras',
      type: 'two-column',
      data: {
        subtitle: 'Large Language Model - Modelo entrenado con billones de palabras',
        leftColumn: {
          examples: {
            title: '🔤 Ejemplos',
            items: ['GPT-4 (OpenAI)', 'Claude (Anthropic)', 'Gemini (Google)', 'Llama (Meta)']
          },
          capabilities: {
            title: '⚡ Capacidades',
            items: ['Generan texto coherente', 'Escriben código', 'Analizan documentos', 'Razonan problemas']
          }
        },
        rightColumn: {
          title: 'Conceptos Clave:',
          concepts: [
            {
              name: 'Tokens',
              description: 'Unidad ≈ 4 caracteres',
              example: '"Banistmo" = 2 tokens'
            },
            {
              name: 'Context Window',
              description: 'Memoria del modelo',
              example: 'GPT-4: ~300 pág | Claude: ~500 pág'
            },
            {
              name: 'Temperatura (0.0 - 2.0)',
              description: 'Creatividad vs precisión',
              example: 'Para QA/Dev: 0.0-0.3'
            }
          ]
        }
      }
    },

    // Slide 5 - Temperatura
    {
      id: 5,
      title: 'Temperatura: Impacto en Resultados',
      content: 'Comparación entre temperatura determinística y creativa',
      type: 'two-column',
      data: {
        prompt: '🎯 "Genera 3 casos de prueba para login bancario"',
        comparison: [
          {
            title: '❄️ Temperatura 0.0',
            subtitle: 'Determinístico',
            points: [
              '✓ Misma entrada = misma salida',
              '✓ Predecible',
              '✓ Ideal para QA y código'
            ],
            result: '3 ejecuciones → Idénticos',
            color: 'blue'
          },
          {
            title: '🔥 Temperatura 1.5',
            subtitle: 'Creativo',
            points: [
              'Más variedad',
              'Menos predecible',
              'Para brainstorming'
            ],
            result: '3 ejecuciones → Diferentes',
            color: 'orange'
          }
        ],
        recommendation: '💡 Para QA/Dev: usar temperatura baja (0.0 - 0.3)'
      }
    },

    // Slide 6 - Herramientas
    {
      id: 6,
      title: 'Herramientas Disponibles',
      content: 'Comparativa de herramientas de IA Generativa',
      type: 'table',
      data: {
        headers: ['Herramienta', 'Fortaleza', 'Uso Recomendado'],
        rows: [
          ['ChatGPT (GPT-4)', 'Versatilidad, velocidad', 'Análisis HU, test cases'],
          ['Claude (Sonnet)', 'Código limpio', 'Migración VB6→Java'],
          ['Gemini', 'Integración Google', 'Análisis sheets, docs'],
          ['GitHub Copilot', 'Autocompletado IDE', 'Desarrollo en VS Code'],
          ['Cursor', 'IDE con IA integrada', 'Refactoring proyectos']
        ],
        footer: '💡 Demo: ChatGPT (test cases) | Claude (migración VB6)'
      }
    },

    // Slide 7 - Beneficios
    {
      id: 7,
      title: '✅ Beneficios de la IA Generativa',
      content: 'Principales ventajas del uso de IA Generativa',
      type: 'grid',
      data: {
        items: [
          {
            icon: '⚡',
            title: 'Velocidad',
            description: 'Acelera análisis HU a casos de prueba 75% más rápido',
            color: 'green'
          },
          {
            icon: '🔧',
            title: 'Código Boilerplate',
            description: 'Genera controllers, DTOs, tests automáticamente',
            color: 'green'
          },
          {
            icon: '📝',
            title: 'Documentación',
            description: 'Crea README, JavaDoc y Swagger automáticamente',
            color: 'green'
          },
          {
            icon: '🎯',
            title: 'Edge Cases',
            description: 'Detecta escenarios alternos que podrías pasar por alto',
            color: 'green'
          }
        ],
        footer: '🚀 Resultado: Mayor productividad sin sacrificar calidad'
      }
    },

    // Slide 8 - Limitaciones
    {
      id: 8,
      title: '⚠️ Limitaciones de la IA Generativa',
      content: 'Restricciones y cuidados al usar IA Generativa',
      type: 'grid',
      data: {
        items: [
          {
            icon: '🌀',
            title: 'Alucinaciones',
            description: 'Inventa APIs que no existen',
            code: '// ⚠️ Puede generar:\nbancoService.consultarBureau',
            color: 'yellow'
          },
          {
            icon: '🔍',
            title: 'Contexto Limitado',
            description: 'No conoce tu código completo ni arquitectura específica',
            color: 'yellow'
          },
          {
            icon: '❌',
            title: 'No Ejecuta',
            description: 'Solo genera código, no lo valida ni compila',
            color: 'yellow'
          },
          {
            icon: '📊',
            title: 'Sesgos',
            description: 'Reproduce patrones de entrenamiento',
            color: 'yellow'
          }
        ],
        footer: '🎯 Regla de Oro: SIEMPRE valida el output\nTu criterio profesional es irreemplazable'
      }
    },

    // Slide 9 - Ejercicio
    {
      id: 9,
      title: '📝 Ejercicio Práctico - Tarea',
      content: 'Actividad práctica para la próxima clase',
      type: 'content',
      data: {
        userStory: {
          title: 'Historia de Usuario:',
          content: 'Como cajero del banco, quiero consultar el saldo de la cuenta del cliente ingresando su número de cuenta para informarle el monto disponible.'
        },
        instructions: {
          title: 'Instrucciones:',
          items: [
            'Usar ChatGPT o Claude: "Genera casos de prueba para esta HU"',
            'Anotar qué salió bien y qué faltó',
            'Traer la conversación (screenshot o texto)'
          ]
        },
        objective: '🎯 Objetivo: Ver diferencia prompt casual vs profesional'
      }
    },

    // Slide 10 - Resumen
    {
      id: 10,
      title: '📌 Resumen y Próximos Pasos',
      content: 'Recapitulación de la clase',
      type: 'content',
      data: {
        learned: {
          title: 'Hoy aprendimos:',
          items: [
            'Diferencia entre IA, ML y GenIA',
            'Cómo funcionan los LLMs',
            'Herramientas y sus fortalezas',
            'Beneficios y limitaciones'
          ]
        },
        nextClass: {
          title: '🔜 Próxima Clase (Día 2):',
          content: 'Análisis de Historias de Usuario - Extraer información clave ANTES de usar la IA'
        },
        quote: '💡 La IA es tu copiloto, no tu piloto'
      }
    }
  ];

  nextSlide(): void {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.nextSlide();
    } else if (event.key === 'ArrowLeft') {
      this.prevSlide();
    }
  }

  toggleBullet(index: number): void {
    this.expandedBullet = this.expandedBullet === index ? null : index;
  }

  toggleTimeline(index: number): void {
    this.expandedTimeline = this.expandedTimeline === index ? null : index;
  }

  toggleTool(index: number): void {
    this.expandedTool = this.expandedTool === index ? null : index;
  }

  toggleBenefit(index: number): void {
    this.expandedBenefit = this.expandedBenefit === index ? null : index;
  }

  toggleLimitation(index: number): void {
    this.expandedLimitation = this.expandedLimitation === index ? null : index;
  }
}
