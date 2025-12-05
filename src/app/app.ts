import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  private currentRoute = '';

  constructor(private router: Router) {
    // Suscribirse a cambios de ruta para actualizar breadcrumbs
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.urlAfterRedirects;
    });
  }
  protected title = 'cloud-cheatsheet';
  // Control del submenu de Roadmaps en el sidebar
  public roadmapsOpen = true;
  // Control del submenu de Aprende IA en el sidebar
  public aprendeIAOpen = true;
  // Control para colapsar/expandir el sidebar
  public sidebarCollapsed = false;

  public toggleRoadmaps(): void {
    this.roadmapsOpen = !this.roadmapsOpen;
  }

  public toggleAprendeIA(): void {
    this.aprendeIAOpen = !this.aprendeIAOpen;
  }

  public toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  public getCurrentPageTitle(): string {
    const routeTitles: { [key: string]: string } = {
      '/': 'Dashboard',
      '/roadmap/cloud-practitioner': 'AWS Roadmaps / Cloud Practitioner',
      '/roadmap/solutions-architect': 'AWS Roadmaps / Solutions Architect',
      '/roadmap/developer': 'AWS Roadmaps / Developer',
      '/roadmap/sysops': 'AWS Roadmaps / SysOps',
      '/study-plan': 'Aprende IA / Plan de Estudio',
      '/plan-detalle': 'Aprende IA / Plan de QA',
      '/clase1-ia-generativa': 'Aprende IA / Clase 1: IA Generativa',
      '/clase2-taller-test-cases': 'Aprende IA / Clase 2: Test Cases',
      '/clase3-datos-prueba': 'Aprende IA / Clase 3: Datos de Prueba',
      '/clase4-automatizacion': 'Aprende IA / Clase 4: Automatización',
      '/clase5-testing-apis': 'Aprende IA / Clase 5: Testing APIs',
      '/clase6-crud-backend': 'Aprende IA / Clase 6: CRUD Backend',
      '/clase7-frontend-legacy-vanilla': 'Aprende IA / Clase 7: Frontend Legacy',
      '/clase8-migracion-angular': 'Aprende IA / Clase 8: Migración Angular',
      '/clase9-testing-e2e': 'Aprende IA / Clase 9: Testing E2E',
      '/clase1-dev-fundamentos': 'Aprende IA / Clase 1 DEV: Fundamentos IA',
      '/clase2-dev-spring-boot': 'Aprende IA / Clase 2 DEV: Spring Boot',
      '/clase3-dev-migracion-legacy': 'Aprende IA / Clase 3 DEV: Migración Legacy',
      '/clase4-dev-integracion-apis': 'Aprende IA / Clase 4 DEV: Integración APIs',
      '/clase5-dev-testing-avanzado': 'Aprende IA / Clase 5 DEV: Testing Avanzado',
      '/clase6-dev-modulo-angular': 'Aprende IA / Clase 6 DEV: Módulo Angular',
      '/clase7-dev-frontend-legacy': 'Aprende IA / Clase 7 DEV: Frontend Legacy',
      '/clase8-dev-estado-rxjs': 'Aprende IA / Clase 8 DEV: Estado RxJS',
      '/clase9-dev-testing-e2e': 'Aprende IA / Clase 9 DEV: Testing E2E',
      '/clase10-dev-fastapi': 'Aprende IA / Clase 10 DEV: FastAPI Python',
      '/clase11-dev-lambda-serverless': 'Aprende IA / Clase 11 DEV: Lambda Serverless',
      '/clase12-dev-proyecto-final': 'Aprende IA / Clase 12 DEV: Proyecto Final Integrado',
      '/roadmaps': 'AWS Roadmaps',
      '/plan-dev-detallado': 'Aprende IA / Plan de DEV'
    };

    return routeTitles[this.currentRoute] || 'Página actual';
  }

  public getBreadcrumbs(): Array<{ label: string; url?: string }> {
    const breadcrumbs: Array<{ label: string; url?: string }> = [];

    // Roadmaps de AWS
    if (this.currentRoute.startsWith('/roadmap/')) {
      breadcrumbs.push({ label: 'AWS Roadmaps', url: '/roadmaps' });

      if (this.currentRoute === '/roadmap/cloud-practitioner') {
        breadcrumbs.push({ label: 'Cloud Practitioner' });
      } else if (this.currentRoute === '/roadmap/solutions-architect') {
        breadcrumbs.push({ label: 'Solutions Architect' });
      } else if (this.currentRoute === '/roadmap/developer') {
        breadcrumbs.push({ label: 'Developer' });
      } else if (this.currentRoute === '/roadmap/sysops') {
        breadcrumbs.push({ label: 'SysOps' });
      }
    }
    // Aprende IA
    else if (this.currentRoute.startsWith('/study-plan') ||
             this.currentRoute.startsWith('/plan-detalle') ||
             this.currentRoute.startsWith('/clase')) {
      breadcrumbs.push({ label: 'Aprende IA', url: '/study-plan' });

      if (this.currentRoute === '/plan-detalle') {
        breadcrumbs.push({ label: 'Plan de QA' });
      } else if (this.currentRoute === '/plan-dev-detallado') {
        breadcrumbs.push({ label: 'Plan de DEV' });
      } else if (this.currentRoute.startsWith('/clase')) {
        // Clases DEV
        if (this.currentRoute.includes('-dev-')) {
          breadcrumbs.push({ label: 'Plan de DEV', url: '/plan-dev-detallado' });

          const claseDevNames: { [key: string]: string } = {
            '/clase1-dev-fundamentos': 'Clase 1: Fundamentos IA',
            '/clase2-dev-spring-boot': 'Clase 2: Spring Boot',
            '/clase3-dev-migracion-legacy': 'Clase 3: Migración Legacy',
            '/clase4-dev-integracion-apis': 'Clase 4: Integración APIs',
            '/clase5-dev-testing-avanzado': 'Clase 5: Testing Avanzado',
            '/clase6-dev-modulo-angular': 'Clase 6: Módulo Angular',
            '/clase7-dev-frontend-legacy': 'Clase 7: Frontend Legacy',
            '/clase8-dev-estado-rxjs': 'Clase 8: Estado RxJS',
            '/clase9-dev-testing-e2e': 'Clase 9: Testing E2E',
            '/clase10-dev-fastapi': 'Clase 10: FastAPI Python',
            '/clase11-dev-lambda-serverless': 'Clase 11: Lambda Serverless',
            '/clase12-dev-proyecto-final': 'Clase 12: Proyecto Final'
          };

          breadcrumbs.push({ label: claseDevNames[this.currentRoute] || 'Clase' });
        }
        // Clases QA
        else {
          breadcrumbs.push({ label: 'Plan de QA', url: '/plan-detalle' });

          const claseNames: { [key: string]: string } = {
            '/clase1-ia-generativa': 'Clase 1: IA Generativa',
            '/clase2-taller-test-cases': 'Clase 2: Test Cases',
            '/clase3-datos-prueba': 'Clase 3: Datos de Prueba',
            '/clase4-automatizacion': 'Clase 4: Automatización',
            '/clase5-testing-apis': 'Clase 5: Testing APIs',
            '/clase6-crud-backend': 'Clase 6: CRUD Backend',
            '/clase7-frontend-legacy-vanilla': 'Clase 7: Frontend Legacy',
            '/clase8-migracion-angular': 'Clase 8: Migración Angular',
            '/clase9-testing-e2e': 'Clase 9: Testing E2E'
          };

          breadcrumbs.push({ label: claseNames[this.currentRoute] || 'Clase' });
        }
      }
    }
    // Roadmaps hub
    else if (this.currentRoute === '/roadmaps') {
      breadcrumbs.push({ label: 'AWS Roadmaps' });
    }

    return breadcrumbs;
  }
}
