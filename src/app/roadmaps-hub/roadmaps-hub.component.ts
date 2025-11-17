import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Certification {
  id: string;
  code: string;
  name: string;
  level: string;
  duration: string;
  description: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-roadmaps-hub',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roadmaps-hub.component.html',
  styleUrls: ['./roadmaps-hub.component.css']
})
export class RoadmapsHubComponent {
  certifications: Certification[] = [
    {
      id: 'clf',
      code: 'CLF-C02',
      name: 'AWS Cloud Practitioner',
      level: 'Foundational',
      duration: '8 semanas',
      description: 'Comprension general de AWS Cloud, servicios fundamentales y mejores practicas.',
      route: '/roadmap/cloud-practitioner',
      color: 'bg-green-500'
    },
    {
      id: 'saa',
      code: 'SAA-C03',
      name: 'AWS Solutions Architect Associate',
      level: 'Associate',
      duration: '12 semanas',
      description: 'Diseño de arquitecturas escalables, seguras y de alto rendimiento en AWS.',
      route: '/roadmap/solutions-architect',
      color: 'bg-blue-500'
    },
    {
      id: 'dva',
      code: 'DVA-C02',
      name: 'AWS Developer Associate',
      level: 'Associate',
      duration: '10 semanas',
      description: 'Desarrollo y mantenimiento de aplicaciones basadas en servicios AWS.',
      route: '/roadmap/developer',
      color: 'bg-purple-500'
    },
    {
      id: 'soa',
      code: 'SOA-C02',
      name: 'AWS SysOps Administrator Associate',
      level: 'Associate',
      duration: '10 semanas',
      description: 'Implementacion, gestion y operacion de cargas de trabajo en AWS.',
      route: '/roadmap/sysops',
      color: 'bg-orange-500'
    }
  ];
}
