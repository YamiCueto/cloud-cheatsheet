# Instrucciones para Copilot: Agregar Componente Clase 1 IA Generativa

## 📋 Objetivo
Crear un nuevo componente Angular para las slides de "Clase 1: Fundamentos de IA, ML y GenIA" e integrarlo como opción de menú en el componente `study-plan`.

---

## 🎯 Paso 1: Crear Componente `clase1-ia-generativa`

### Ubicación
```
src/app/components/clase1-ia-generativa/
```

### Comando Angular CLI
```bash
ng generate component components/clase1-ia-generativa --standalone
```

### Estructura de archivos a crear
```
src/app/components/clase1-ia-generativa/
├── clase1-ia-generativa.component.ts
├── clase1-ia-generativa.component.html
├── clase1-ia-generativa.component.css
└── clase1-ia-generativa.component.spec.ts
```

---

## 🎯 Paso 2: Contenido del Componente TypeScript

### `clase1-ia-generativa.component.ts`

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        bullets: [
          'Diferenciar entre IA, ML e IA Generativa',
          'Comprender cómo funcionan los LLMs',
          'Conocer herramientas y sus casos de uso',
          'Identificar beneficios y limitaciones'
        ],
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
}
```

---

## 🎯 Paso 3: Template HTML

### `clase1-ia-generativa.component.html`

```html
<div class="presentation-container" (keydown)="onKeydown($event)" tabindex="0">
  <!-- Navigation Controls -->
  <div class="controls">
    <button (click)="prevSlide()" [disabled]="currentSlide === 0" class="control-btn">
      ← Anterior
    </button>
    <span class="slide-counter">{{ currentSlide + 1 }} / {{ slides.length }}</span>
    <button (click)="nextSlide()" [disabled]="currentSlide === slides.length - 1" class="control-btn">
      Siguiente →
    </button>
  </div>

  <!-- Slide Container -->
  <div class="slide-wrapper">
    <div class="slide" *ngFor="let slide of slides; let i = index" [class.active]="i === currentSlide">
      
      <!-- Title Slide (Slide 1) -->
      <div *ngIf="slide.type === 'title'" class="slide-title">
        <h1>{{ slide.title }}</h1>
        <h3 class="subtitle">{{ slide.data.subtitle }}</h3>
        <div class="info-box">
          <p>{{ slide.data.info }}</p>
        </div>
      </div>

      <!-- Content Slide -->
      <div *ngIf="slide.type === 'content'" class="slide-content">
        <h2>{{ slide.title }}</h2>
        
        <!-- Slide 2 - Objetivo -->
        <div *ngIf="slide.id === 2">
          <div class="highlight-box green">
            <h3>{{ slide.data.highlight }}</h3>
          </div>
          <ul class="bullet-list">
            <li *ngFor="let bullet of slide.data.bullets">{{ bullet }}</li>
          </ul>
          <div class="warning-box">
            <p>{{ slide.data.warning }}</p>
          </div>
        </div>

        <!-- Slide 3 - Evolución -->
        <div *ngIf="slide.id === 3" class="timeline">
          <div *ngFor="let item of slide.data.timeline" class="timeline-item" [ngClass]="item.color">
            <h3>{{ item.era }}</h3>
            <p>{{ item.description }}</p>
            <pre *ngIf="item.code"><code>{{ item.code }}</code></pre>
            <p *ngIf="item.example" class="example">{{ item.example }}</p>
          </div>
        </div>

        <!-- Slide 9 - Ejercicio -->
        <div *ngIf="slide.id === 9" class="exercise">
          <div class="box blue">
            <h4>{{ slide.data.userStory.title }}</h4>
            <div class="user-story">
              <p>{{ slide.data.userStory.content }}</p>
            </div>
          </div>
          <div class="box orange">
            <h4>{{ slide.data.instructions.title }}</h4>
            <ol>
              <li *ngFor="let item of slide.data.instructions.items">{{ item }}</li>
            </ol>
          </div>
          <div class="box green center">
            <p>{{ slide.data.objective }}</p>
          </div>
        </div>

        <!-- Slide 10 - Resumen -->
        <div *ngIf="slide.id === 10" class="summary">
          <div class="box blue">
            <h4>{{ slide.data.learned.title }}</h4>
            <p *ngFor="let item of slide.data.learned.items">{{ item }}</p>
          </div>
          <div class="box orange">
            <h4>{{ slide.data.nextClass.title }}</h4>
            <p>{{ slide.data.nextClass.content }}</p>
          </div>
          <div class="box green center">
            <p class="quote">{{ slide.data.quote }}</p>
          </div>
        </div>
      </div>

      <!-- Two Column Slide -->
      <div *ngIf="slide.type === 'two-column'" class="slide-two-column">
        <h2>{{ slide.title }}</h2>
        
        <!-- Slide 4 - LLMs -->
        <div *ngIf="slide.id === 4">
          <p class="subtitle">{{ slide.data.subtitle }}</p>
          <div class="two-columns">
            <div class="column">
              <div class="box blue">
                <h4>{{ slide.data.leftColumn.examples.title }}</h4>
                <p *ngFor="let item of slide.data.leftColumn.examples.items">{{ item }}</p>
              </div>
              <div class="box orange">
                <h4>{{ slide.data.leftColumn.capabilities.title }}</h4>
                <p *ngFor="let item of slide.data.leftColumn.capabilities.items">{{ item }}</p>
              </div>
            </div>
            <div class="column">
              <h4>{{ slide.data.rightColumn.title }}</h4>
              <div *ngFor="let concept of slide.data.rightColumn.concepts" class="concept">
                <p class="concept-name">{{ concept.name }}</p>
                <p class="concept-desc">{{ concept.description }}</p>
                <code *ngIf="concept.example">{{ concept.example }}</code>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide 5 - Temperatura -->
        <div *ngIf="slide.id === 5">
          <div class="box green center">
            <p>{{ slide.data.prompt }}</p>
          </div>
          <div class="two-columns">
            <div *ngFor="let comp of slide.data.comparison" class="box comparison" [ngClass]="comp.color">
              <h3>{{ comp.title }}</h3>
              <p class="subtitle">{{ comp.subtitle }}</p>
              <ul>
                <li *ngFor="let point of comp.points">{{ point }}</li>
              </ul>
              <div class="result">
                <p>{{ comp.result }}</p>
              </div>
            </div>
          </div>
          <div class="box orange center">
            <p>{{ slide.data.recommendation }}</p>
          </div>
        </div>
      </div>

      <!-- Table Slide -->
      <div *ngIf="slide.type === 'table'" class="slide-table">
        <h2>{{ slide.title }}</h2>
        <table>
          <thead>
            <tr>
              <th *ngFor="let header of slide.data.headers">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let row of slide.data.rows">
              <td *ngFor="let cell of row">{{ cell }}</td>
            </tr>
          </tbody>
        </table>
        <div class="box blue center">
          <p>{{ slide.data.footer }}</p>
        </div>
      </div>

      <!-- Grid Slide -->
      <div *ngIf="slide.type === 'grid'" class="slide-grid">
        <h2>{{ slide.title }}</h2>
        <div class="grid">
          <div *ngFor="let item of slide.data.items" class="grid-item box" [ngClass]="item.color">
            <h3>{{ item.icon }} {{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <pre *ngIf="item.code"><code>{{ item.code }}</code></pre>
          </div>
        </div>
        <div class="box" [ngClass]="slide.id === 7 ? 'blue' : 'orange'" class="center footer-box">
          <p [innerHTML]="slide.data.footer"></p>
        </div>
      </div>

    </div>
  </div>

  <!-- Slide Navigation Dots -->
  <div class="slide-dots">
    <span 
      *ngFor="let slide of slides; let i = index" 
      class="dot" 
      [class.active]="i === currentSlide"
      (click)="goToSlide(i)"
      [title]="slide.title">
    </span>
  </div>
</div>
```

---

## 🎯 Paso 4: Estilos CSS

### `clase1-ia-generativa.component.css`

```css
:host {
  display: block;
  width: 100%;
  height: 100vh;
}

.presentation-container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #1A1A2E 0%, #2E2E4E 100%);
  color: white;
  position: relative;
  overflow: hidden;
  outline: none;
}

/* Controls */
.controls {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  gap: 15px;
  align-items: center;
}

.control-btn {
  background: rgba(0, 163, 224, 0.8);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s;
}

.control-btn:hover:not(:disabled) {
  background: rgba(0, 163, 224, 1);
  transform: translateY(-2px);
}

.control-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slide-counter {
  background: rgba(255, 255, 255, 0.1);
  padding: 8px 15px;
  border-radius: 6px;
  font-weight: bold;
}

/* Slide Wrapper */
.slide-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 60px 80px;
  box-sizing: border-box;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.5s ease-in-out;
  overflow-y: auto;
}

.slide.active {
  opacity: 1;
  transform: translateX(0);
  z-index: 1;
}

/* Typography */
h1 {
  font-size: 3.5rem;
  margin: 0 0 20px 0;
  color: white;
}

h2 {
  font-size: 2.5rem;
  margin: 0 0 30px 0;
  color: #00A3E0;
  border-left: 5px solid #00A3E0;
  padding-left: 20px;
}

h3 {
  font-size: 1.8rem;
  margin: 0 0 15px 0;
}

h4 {
  font-size: 1.3rem;
  margin: 0 0 10px 0;
}

p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 10px 0;
}

/* Title Slide */
.slide-title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}

.slide-title .subtitle {
  color: #00A3E0;
  font-size: 2rem;
  margin-bottom: 40px;
}

.info-box {
  background: rgba(255, 107, 53, 0.2);
  padding: 20px 40px;
  border-radius: 8px;
}

/* Boxes */
.box {
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.box.blue {
  background: rgba(0, 163, 224, 0.2);
  border-left: 4px solid #00A3E0;
}

.box.orange {
  background: rgba(255, 107, 53, 0.2);
  border-left: 4px solid #FF6B35;
}

.box.green {
  background: rgba(16, 185, 129, 0.15);
  border-left: 4px solid #10B981;
}

.box.yellow {
  background: rgba(245, 158, 11, 0.15);
  border-left: 4px solid #F59E0B;
}

.box.center {
  text-align: center;
}

.highlight-box {
  background: rgba(16, 185, 129, 0.15);
  border-left: 4px solid #10B981;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 25px;
}

.warning-box {
  background: rgba(255, 107, 53, 0.2);
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #FF6B35;
}

/* Lists */
.bullet-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.bullet-list li {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;
  padding-left: 30px;
  position: relative;
}

.bullet-list li:before {
  content: "▸";
  color: #FF6B35;
  font-size: 1.5rem;
  position: absolute;
  left: 0;
  font-weight: bold;
}

ol {
  font-size: 1.1rem;
  line-height: 1.8;
}

/* Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.timeline-item {
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid;
}

.timeline-item.blue {
  background: rgba(0, 163, 224, 0.1);
  border-color: #00A3E0;
}

.timeline-item.orange {
  background: rgba(255, 107, 53, 0.1);
  border-color: #FF6B35;
}

.timeline-item h3 {
  color: inherit;
  margin-bottom: 10px;
}

.timeline-item .example {
  color: inherit;
  font-style: italic;
  margin-top: 10px;
}

/* Two Columns */
.two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.concept {
  margin-bottom: 15px;
}

.concept-name {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 0 0 5px 0;
}

.concept-desc {
  margin: 0 0 5px 0;
}

/* Comparison */
.comparison {
  border: 2px solid;
}

.comparison.blue {
  border-color: #00A3E0;
}

.comparison.orange {
  border-color: #FF6B35;
}

.comparison .result {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 6px;
  margin-top: 15px;
}

/* Table */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
}

table th {
  background: #FF6B35;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

table td {
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

table tr:nth-child(even) {
  background: rgba(255, 255, 255, 0.05);
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.grid-item {
  padding: 20px;
}

.grid-item h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.footer-box {
  margin-top: 25px;
  font-size: 1.2rem;
}

/* Code */
code {
  background: #2A2A3E;
  padding: 3px 8px;
  border-radius: 4px;
  color: #E0E0E0;
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 0.95rem;
}

pre {
  background: #2A2A3E;
  border-left: 3px solid #00A3E0;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 15px 0;
}

pre code {
  background: transparent;
  padding: 0;
  display: block;
  line-height: 1.5;
}

/* User Story */
.user-story {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #00A3E0;
  font-style: italic;
}

/* Summary */
.summary .quote {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
}

/* Slide Dots Navigation */
.slide-dots {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 1000;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s;
}

.dot:hover {
  background: rgba(255, 255, 255, 0.6);
  transform: scale(1.2);
}

.dot.active {
  background: #00A3E0;
  transform: scale(1.3);
}

/* Responsive */
@media (max-width: 1024px) {
  .slide {
    padding: 40px;
  }
  
  .two-columns,
  .grid {
    grid-template-columns: 1fr;
  }
  
  h1 {
    font-size: 2.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .controls {
    top: 10px;
    right: 10px;
    flex-wrap: wrap;
  }
  
  .control-btn {
    padding: 8px 15px;
    font-size: 14px;
  }
}
```

---

## 🎯 Paso 5: Agregar Ruta en `app.routes.ts`

```typescript
import { Routes } from '@angular/router';
import { Clase1IaGenerativaComponent } from './components/clase1-ia-generativa/clase1-ia-generativa.component';

export const routes: Routes = [
  // ... otras rutas existentes
  {
    path: 'clase1-ia-generativa',
    component: Clase1IaGenerativaComponent
  }
];
```

---

## 🎯 Paso 6: Actualizar `study-plan.component.ts`

Agregar nueva opción al array de secciones/menú:

```typescript
sections = [
  // ... secciones existentes
  {
    title: 'Clase 1: IA Generativa',
    description: 'Fundamentos de IA, ML y GenIA para QA y Desarrollo',
    icon: '🤖',
    route: '/clase1-ia-generativa',
    tags: ['IA', 'Machine Learning', 'ChatGPT', 'Capacitación']
  }
];
```

---

## 🎯 Paso 7: Actualizar Navegación en `study-plan.component.html`

Si usas cards o lista para navegar, agregar:

```html
<div class="card" *ngFor="let section of sections" [routerLink]="section.route">
  <div class="icon">{{ section.icon }}</div>
  <h3>{{ section.title }}</h3>
  <p>{{ section.description }}</p>
  <div class="tags">
    <span class="tag" *ngFor="let tag of section.tags">{{ tag }}</span>
  </div>
</div>
```

---

## ✅ Checklist de Implementación

- [ ] Crear componente con Angular CLI
- [ ] Copiar código TypeScript
- [ ] Copiar template HTML
- [ ] Copiar estilos CSS
- [ ] Agregar ruta en app.routes.ts
- [ ] Actualizar study-plan component
- [ ] Probar navegación
- [ ] Probar navegación con teclado (← →)
- [ ] Verificar responsive
- [ ] Commit y push a GitHub

---

## 🚀 Comandos Completos

```bash
# 1. Crear componente
ng generate component components/clase1-ia-generativa --standalone

# 2. Copiar archivos generados por este MD

# 3. Verificar que compile
ng serve

# 4. Abrir en navegador
# http://localhost:4200/clase1-ia-generativa

# 5. Commit
git add .
git commit -m "feat: Add Clase 1 IA Generativa component with slides"
git push origin main
```

---

## 📱 Features Implementadas

✅ **Navegación:**
- Botones Anterior/Siguiente
- Navegación con teclado (← →)
- Dots de navegación
- Contador de slides

✅ **Diseño:**
- Responsive (desktop, tablet, mobile)
- Transiciones suaves
- Colores corporativos Banistmo
- 10 slides completas

✅ **Tipos de Slides:**
- Title (portada)
- Content (contenido general)
- Two-column (comparaciones)
- Table (tablas)
- Grid (cuadrículas 2x2)

✅ **Componentes Visuales:**
- Boxes con colores (blue, orange, green, yellow)
- Code blocks
- Tablas
- Listas con bullets personalizados
- Timeline

---

## 🎨 Personalización Futura

### Agregar animaciones
```css
@keyframes slideIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.slide.active h2 {
  animation: slideIn 0.5s ease-out;
}
```

### Modo presentador
Agregar vista con notas y timer en TypeScript

### Export a PDF
Implementar función de print con CSS específico

---

¡Listo para que Copilot lo implemente! 🚀
