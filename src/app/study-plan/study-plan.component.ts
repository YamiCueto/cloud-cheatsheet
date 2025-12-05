import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TechStackComponent } from '../tech-stack/tech-stack.component';
import { InstallationGuidesComponent } from '../installation-guides/installation-guides.component';

interface Clase {
  route: string;
  numero: number;
  titulo: string;
  subtitulo: string;
  colorFrom: string;
  colorTo: string;
  items: string[];
}

interface Categoria {
  id: string;
  nombre: string;
  descripcion: string;
  icon: string;
  colorFrom: string;
  colorTo: string;
  clases: Clase[];
}

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule, RouterModule, TechStackComponent, InstallationGuidesComponent],
  templateUrl: './study-plan.component.html',
  styleUrls: ['./study-plan.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ height: '0', opacity: 0, overflow: 'hidden' }),
        animate('300ms ease-out', style({ height: '*', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ height: '*', opacity: 1, overflow: 'hidden' }),
        animate('300ms ease-in', style({ height: '0', opacity: 0 }))
      ])
    ])
  ]
})
export class StudyPlanComponent {
  selectedCategoria: string | null = null;
  currentPage: { [key: string]: number } = {};
  itemsPerPage = 3;
  Math = Math;

  // Estado de expansión de planes
  planQAExpanded = false;
  planDevExpanded = false;
  planBusinessExpanded = false;
  planLeadersExpanded = false;

  categorias: Categoria[] = [
    {
      id: 'talleres-qa',
      nombre: 'Talleres para QA',
      descripcion: 'Aprende a automatizar pruebas y generar casos de test con IA Generativa',
      icon: '🧪',
      colorFrom: 'from-green-500',
      colorTo: 'to-emerald-600',
      clases: [
        {
          route: '/clase1-ia-generativa',
          numero: 1,
          titulo: 'Introducción a IA Generativa',
          subtitulo: 'Introducción a IA Generativa',
          colorFrom: 'from-blue-500',
          colorTo: 'to-blue-600',
          items: ['Fundamentos de IA Generativa', 'Prompt Engineering', 'Casos de uso en testing', 'Taller práctico']
        },
        {
          route: '/clase2-taller-test-cases',
          numero: 2,
          titulo: 'Generación de Casos de Prueba',
          subtitulo: 'Generación de Casos de Prueba',
          colorFrom: 'from-green-500',
          colorTo: 'to-green-600',
          items: ['Test cases con IA', 'Escenarios de prueba', 'Optimización de cobertura', 'Taller práctico']
        },
        {
          route: '/clase3-datos-prueba',
          numero: 3,
          titulo: 'Generación de Datos de Prueba',
          subtitulo: 'Generación de Datos de Prueba',
          colorFrom: 'from-purple-500',
          colorTo: 'to-purple-600',
          items: ['Estrategias de datos', 'Datos sintéticos con IA', 'Validación de datos', 'Taller práctico']
        },
        {
          route: '/clase4-automatizacion',
          numero: 4,
          titulo: 'Automatización con IA',
          subtitulo: 'Automatización con IA',
          colorFrom: 'from-orange-500',
          colorTo: 'to-orange-600',
          items: ['Scripts de automatización', 'Generación de código', 'Mantenimiento inteligente', 'Taller práctico']
        },
        {
          route: '/clase5-testing-apis',
          numero: 5,
          titulo: 'Testing de APIs',
          subtitulo: 'Testing de APIs',
          colorFrom: 'from-red-500',
          colorTo: 'to-red-600',
          items: ['Pruebas de APIs REST', 'Validación de responses', 'Automatización con IA', 'Taller práctico']
        },
        {
          route: '/clase6-crud-backend',
          numero: 6,
          titulo: 'CRUD Backend con FastAPI',
          subtitulo: 'CRUD Backend con FastAPI',
          colorFrom: 'from-indigo-500',
          colorTo: 'to-indigo-600',
          items: ['Desarrollo de APIs', 'CRUD operations', 'Testing backend', 'Taller práctico']
        },
        {
          route: '/clase7-frontend-legacy-vanilla',
          numero: 7,
          titulo: 'Frontend Legacy Vanilla',
          subtitulo: 'Frontend Legacy Vanilla',
          colorFrom: 'from-pink-500',
          colorTo: 'to-pink-600',
          items: ['JavaScript vanilla', 'Integración con backend', 'Testing frontend', 'Taller práctico']
        },
        {
          route: '/clase8-migracion-angular',
          numero: 8,
          titulo: 'Migración a Angular',
          subtitulo: 'Migración a Angular',
          colorFrom: 'from-teal-500',
          colorTo: 'to-teal-600',
          items: ['Modernización frontend', 'Angular components', 'Testing en Angular', 'Taller práctico']
        },
        {
          route: '/clase9-testing-e2e',
          numero: 9,
          titulo: 'Testing E2E',
          subtitulo: 'Testing E2E',
          colorFrom: 'from-yellow-500',
          colorTo: 'to-yellow-600',
          items: ['Pruebas end-to-end', 'Cypress/Playwright', 'Integración con IA', 'Taller práctico']
        }
      ]
    },
    {
      id: 'talleres-dev',
      nombre: 'Talleres para Developers',
      descripcion: 'Aprende desarrollo full-stack con IA Generativa - Spring Boot, Angular, AWS',
      icon: '💻',
      colorFrom: 'from-indigo-500',
      colorTo: 'to-purple-600',
      clases: [
        {
          route: '/clase1-dev-fundamentos',
          numero: 1,
          titulo: 'Fundamentos IA Generativa',
          subtitulo: 'De Usuario Casual a Prompt Engineer',
          colorFrom: 'from-purple-500',
          colorTo: 'to-indigo-600',
          items: ['IA, ML y GenIA', 'LLMs y herramientas', 'Prompt Engineering', 'Limitaciones']
        },
        {
          route: '/clase2-dev-spring-boot',
          numero: 2,
          titulo: 'Spring Boot Microservicio',
          subtitulo: 'Generación Completa con IA',
          colorFrom: 'from-green-500',
          colorTo: 'to-emerald-600',
          items: ['Arquitectura hexagonal', 'Prompt estructurado', 'Código production-ready', 'Testing automático']
        },
        {
          route: '/clase3-dev-migracion-legacy',
          numero: 3,
          titulo: 'Migración Legacy VB6',
          subtitulo: 'De Visual Basic a Spring Boot',
          colorFrom: 'from-orange-500',
          colorTo: 'to-red-600',
          items: ['Análisis de código legacy', 'Traducción inteligente', 'Preservar lógica de negocio', 'Tests de equivalencia']
        },
        {
          route: '/clase4-dev-integracion-apis',
          numero: 4,
          titulo: 'Integración APIs Externas',
          subtitulo: 'Bureau de Crédito y Servicios REST',
          colorFrom: 'from-blue-500',
          colorTo: 'to-cyan-600',
          items: ['WebClient + Circuit Breaker', 'DTOs y validaciones', 'Resilience4j + Cache', 'Tests con WireMock']
        },
        {
          route: '/clase5-dev-testing-avanzado',
          numero: 5,
          titulo: 'Testing Avanzado',
          subtitulo: 'Suite Completa con JUnit y JaCoCo',
          colorFrom: 'from-teal-500',
          colorTo: 'to-green-600',
          items: ['JUnit 5 + Mockito', 'Testcontainers', 'Cobertura con JaCoCo', 'Tests E2E con WireMock']
        },
        {
          route: '/clase6-dev-modulo-angular',
          numero: 6,
          titulo: 'Módulo Angular',
          subtitulo: 'CRUD Completo con Material',
          colorFrom: 'from-pink-500',
          colorTo: 'to-rose-600',
          items: ['Lazy loading + routing', 'Reactive Forms', 'HttpClient + interceptores', 'Angular Material']
        },
        {
          route: '/clase7-dev-frontend-legacy',
          numero: 7,
          titulo: 'Frontend Legacy',
          subtitulo: 'Refactoring Angular Moderno',
          colorFrom: 'from-indigo-500',
          colorTo: 'to-purple-600',
          items: ['OnPush + takeUntil', 'Smart/Dumb pattern', 'Memory leaks', 'Change Detection']
        },
        {
          route: '/clase8-dev-estado-rxjs',
          numero: 8,
          titulo: 'Estado RxJS',
          subtitulo: 'BehaviorSubject + Operators',
          colorFrom: 'from-teal-500',
          colorTo: 'to-cyan-600',
          items: ['BehaviorSubject', 'shareReplay', 'combineLatest', 'State Service']
        },
        {
          route: '/clase9-dev-testing-e2e',
          numero: 9,
          titulo: 'Testing E2E',
          subtitulo: 'Cypress + Page Objects',
          colorFrom: 'from-emerald-500',
          colorTo: 'to-green-600',
          items: ['Cypress setup', 'Page Object pattern', 'cy.intercept()', 'CI/CD integration']
        },
        {
          route: '/clase10-dev-fastapi',
          numero: 10,
          titulo: 'FastAPI Python',
          subtitulo: 'API REST de Alto Performance',
          colorFrom: 'from-green-500',
          colorTo: 'to-emerald-600',
          items: ['Pydantic schemas', 'Async/await', 'Swagger auto', 'Pytest tests']
        }
      ]
    }
  ];

  constructor() {
    // Inicializar currentPage para cada categoría
    this.categorias.forEach(cat => {
      this.currentPage[cat.id] = 1;
    });
  }

  selectCategoria(categoriaId: string): void {
    this.selectedCategoria = this.selectedCategoria === categoriaId ? null : categoriaId;
  }

  togglePlanQA(): void {
    this.planQAExpanded = !this.planQAExpanded;
  }

  togglePlanDev(): void {
    this.planDevExpanded = !this.planDevExpanded;
  }

  togglePlanBusiness(): void {
    this.planBusinessExpanded = !this.planBusinessExpanded;
  }

  togglePlanLeaders(): void {
    this.planLeadersExpanded = !this.planLeadersExpanded;
  }

  getTotalPages(categoriaId: string): number {
    const categoria = this.categorias.find(c => c.id === categoriaId);
    if (!categoria) return 0;
    return Math.ceil(categoria.clases.length / this.itemsPerPage);
  }

  getPaginatedClases(categoriaId: string): Clase[] {
    const categoria = this.categorias.find(c => c.id === categoriaId);
    if (!categoria) return [];

    const page = this.currentPage[categoriaId] || 1;
    const startIndex = (page - 1) * this.itemsPerPage;
    return categoria.clases.slice(startIndex, startIndex + this.itemsPerPage);
  }

  getPages(categoriaId: string): number[] {
    const totalPages = this.getTotalPages(categoriaId);
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  goToPage(categoriaId: string, page: number): void {
    const totalPages = this.getTotalPages(categoriaId);
    if (page >= 1 && page <= totalPages) {
      this.currentPage[categoriaId] = page;
    }
  }

  nextPage(categoriaId: string): void {
    const currentPageNum = this.currentPage[categoriaId] || 1;
    this.goToPage(categoriaId, currentPageNum + 1);
  }

  previousPage(categoriaId: string): void {
    const currentPageNum = this.currentPage[categoriaId] || 1;
    this.goToPage(categoriaId, currentPageNum - 1);
  }

  getCurrentPage(categoriaId: string): number {
    return this.currentPage[categoriaId] || 1;
  }
}
