import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule, RouterModule, TechStackComponent, InstallationGuidesComponent],
  templateUrl: './study-plan.component.html',
  styleUrls: ['./study-plan.component.css']
})
export class StudyPlanComponent {
  currentPage = 1;
  itemsPerPage = 3;
  Math = Math;

  clases: Clase[] = [
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
  ];

  get totalPages(): number {
    return Math.ceil(this.clases.length / this.itemsPerPage);
  }

  get paginatedClases(): Clase[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.clases.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }
}
