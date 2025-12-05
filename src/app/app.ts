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
      '/roadmaps': 'AWS Roadmaps'
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
      } else if (this.currentRoute.startsWith('/clase')) {
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
    // Roadmaps hub
    else if (this.currentRoute === '/roadmaps') {
      breadcrumbs.push({ label: 'AWS Roadmaps' });
    }

    return breadcrumbs;
  }
}
