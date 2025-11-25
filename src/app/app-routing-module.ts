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
    path: 'clase1-ia-generativa',
    loadComponent: () => import('./clase1-ia-generativa/clase1-ia-generativa.component').then(m => m.Clase1IaGenerativaComponent)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
