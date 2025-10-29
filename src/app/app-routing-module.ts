import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./aws-dashboard/aws-dashboard.component').then(m => m.AwsDashboardComponent)
  },
  {
    path: 'aws-roadmap',
    loadComponent: () => import('./aws-roadmap/aws-roadmap.component').then(m => m.AwsRoadmapComponent)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
