import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./aws-dashboard/aws-dashboard.component').then(m => m.AwsDashboardComponent)
  },
  {
    path: 'roadmaps',
    loadComponent: () => import('./roadmaps-hub/roadmaps-hub.component').then(m => m.RoadmapsHubComponent)
  },
  {
    path: 'roadmap/cloud-practitioner',
    loadComponent: () => import('./roadmap-clf/roadmap-clf.component').then(m => m.RoadmapClfComponent)
  },
  {
    path: 'roadmap/solutions-architect',
    loadComponent: () => import('./roadmap-saa/roadmap-saa.component').then(m => m.RoadmapSaaComponent)
  },
  {
    path: 'roadmap/developer',
    loadComponent: () => import('./roadmap-dva/roadmap-dva.component').then(m => m.RoadmapDvaComponent)
  },
  {
    path: 'roadmap/sysops',
    loadComponent: () => import('./roadmap-soa/roadmap-soa.component').then(m => m.RoadmapSoaComponent)
  },
  {
    path: 'aws-roadmap',
    redirectTo: 'roadmaps',
    pathMatch: 'full'
  },
  {
    path: 'study-plan',
    loadComponent: () => import('./study-plan/study-plan.component').then(m => m.StudyPlanComponent)
  },
  {
    path: 'plan-detalle',
    loadComponent: () => import('./plan-detalle/plan-detalle').then(m => m.PlanDetalle)
  },
  {
    path: 'plan-dev-detallado',
    loadComponent: () => import('./plan-dev-detallado/plan-dev-detallado.component').then(m => m.PlanDevDetalladoComponent)
  },
  {
    path: 'clase1-ia-generativa',
    loadComponent: () => import('./clase1-ia-generativa/clase1-ia-generativa.component').then(m => m.Clase1IaGenerativaComponent)
  },
  {
    path: 'clase2-taller-test-cases',
    loadComponent: () => import('./clase2-taller-test-cases/clase2-taller-test-cases.component').then(m => m.Clase2TallerTestCasesComponent)
  },
  {
    path: 'clase3-datos-prueba',
    loadComponent: () => import('./clase3-datos-prueba/clase3-datos-prueba.component').then(m => m.Clase3DatosPruebaComponent)
  },
  {
    path: 'clase4-automatizacion',
    loadComponent: () => import('./clase4-automatizacion/clase4-automatizacion.component').then(m => m.Clase4AutomatizacionComponent)
  },
  {
    path: 'clase5-testing-apis',
    loadComponent: () => import('./clase5-testing-apis/clase5-testing-apis.component').then(m => m.Clase5TestingApisComponent)
  },
  {
    path: 'clase6-crud-backend',
    loadComponent: () => import('./clase6-crud-backend/clase6-crud-backend.component').then(m => m.Clase6CrudBackendComponent)
  },
  {
    path: 'clase7-frontend-legacy-vanilla',
    loadComponent: () => import('./clase7-frontend-legacy-vanilla/clase7-frontend-legacy-vanilla.component').then(m => m.Clase7FrontendLegacyVanillaComponent)
  },
  {
    path: 'clase8-migracion-angular',
    loadComponent: () => import('./clase8-migracion-angular/clase8-migracion-angular.component').then(m => m.Clase8MigracionAngularComponent)
  },
  {
    path: 'clase9-testing-e2e',
    loadComponent: () => import('./clase9-testing-e2e/clase9-testing-e2e.component').then(m => m.Clase9TestingE2eComponent)
  },
  {
    path: 'clase1-dev-fundamentos',
    loadComponent: () => import('./clase1-dev-fundamentos/clase1-dev-fundamentos.component').then(m => m.Clase1DevFundamentosComponent)
  },
  {
    path: 'clase2-dev-spring-boot',
    loadComponent: () => import('./clase2-dev-spring-boot/clase2-dev-spring-boot.component').then(m => m.Clase2DevSpringBootComponent)
  },
  {
    path: 'clase3-dev-migracion-legacy',
    loadComponent: () => import('./clase3-dev-migracion-legacy/clase3-dev-migracion-legacy.component').then(m => m.Clase3DevMigracionLegacyComponent)
  },
  {
    path: 'clase4-dev-integracion-apis',
    loadComponent: () => import('./clase4-dev-integracion-apis/clase4-dev-integracion-apis.component').then(m => m.Clase4DevIntegracionApisComponent)
  },
  {
    path: 'clase5-dev-testing-avanzado',
    loadComponent: () => import('./clase5-dev-testing-avanzado/clase5-dev-testing-avanzado.component').then(m => m.Clase5DevTestingAvanzadoComponent)
  },
  {
    path: 'clase6-dev-modulo-angular',
    loadComponent: () => import('./clase6-dev-modulo-angular/clase6-dev-modulo-angular.component').then(m => m.Clase6DevModuloAngularComponent)
  },
  {
    path: 'clase7-dev-frontend-legacy',
    loadComponent: () => import('./clase7-dev-frontend-legacy/clase7-dev-frontend-legacy.component').then(m => m.Clase7DevFrontendLegacyComponent)
  },
  {
    path: 'clase8-dev-estado-rxjs',
    loadComponent: () => import('./clase8-dev-estado-rxjs/clase8-dev-estado-rxjs.component').then(m => m.Clase8DevEstadoRxjsComponent)
  },
  {
    path: 'clase9-dev-testing-e2e',
    loadComponent: () => import('./clase9-dev-testing-e2e/clase9-dev-testing-e2e.component').then(m => m.Clase9DevTestingE2eComponent)
  },
  {
    path: 'clase10-dev-fastapi',
    loadComponent: () => import('./clase10-dev-fastapi/clase10-dev-fastapi.component').then(m => m.Clase10DevFastapiComponent)
  },
  {
    path: 'clase11-dev-lambda-serverless',
    loadComponent: () => import('./clase11-dev-lambda-serverless/clase11-dev-lambda-serverless.component').then(m => m.Clase11DevLambdaServerlessComponent)
  },
  {
    path: 'clase12-dev-proyecto-final',
    loadComponent: () => import('./clase12-dev-proyecto-final/clase12-dev-proyecto-final.component').then(m => m.Clase12DevProyectoFinalComponent)
  },
  {
    path: 'metro-map-ai',
    loadComponent: () => import('./metro-map-ai/metro-map-ai.component').then(m => m.MetroMapAiComponent)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
