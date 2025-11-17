import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface WeekProgress {
  id: string;
  title: string;
  topics: string[];
  completed: boolean;
}

@Component({
  selector: 'app-roadmap-saa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roadmap-saa.component.html',
  styleUrls: ['./roadmap-saa.component.css']
})
export class RoadmapSaaComponent {
  roadmapId = 'saaRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1: Fundamentos de Arquitectura', topics: ['Well-Architected Framework', 'Pilares de arquitectura', 'Design patterns', 'Casos de uso empresariales'], completed: false },
    { id: 'week2', title: 'Semana 2: IAM y Seguridad', topics: ['IAM avanzado', 'Roles y politicas', 'STS', 'Organizations', 'Control Tower'], completed: false },
    { id: 'week3', title: 'Semana 3: Networking Avanzado', topics: ['VPC profundo', 'Subnetting', 'Route Tables', 'NAT Gateway', 'VPC Peering', 'Transit Gateway'], completed: false },
    { id: 'week4', title: 'Semana 4: Compute Services', topics: ['EC2 avanzado', 'Auto Scaling', 'ELB (ALB/NLB)', 'Lambda', 'ECS/EKS', 'Fargate'], completed: false },
    { id: 'week5', title: 'Semana 5: Storage y Databases', topics: ['S3 avanzado', 'EBS/EFS', 'Storage Gateway', 'RDS Multi-AZ', 'Aurora', 'DynamoDB'], completed: false },
    { id: 'week6', title: 'Semana 6: Migracion y Transferencia', topics: ['Database Migration Service', 'Server Migration Service', 'DataSync', 'Transfer Family', 'Snow Family'], completed: false },
    { id: 'week7', title: 'Semana 7: Caching y CDN', topics: ['CloudFront', 'ElastiCache', 'Global Accelerator', 'Route 53 avanzado'], completed: false },
    { id: 'week8', title: 'Semana 8: Aplicaciones Desacopladas', topics: ['SQS', 'SNS', 'EventBridge', 'Step Functions', 'API Gateway'], completed: false },
    { id: 'week9', title: 'Semana 9: Monitoreo y Auditoria', topics: ['CloudWatch', 'CloudTrail', 'Config', 'Systems Manager', 'X-Ray'], completed: false },
    { id: 'week10', title: 'Semana 10: Alta Disponibilidad y DR', topics: ['Estrategias de backup', 'Disaster Recovery', 'Multi-Region', 'Resilience'], completed: false },
    { id: 'week11', title: 'Semana 11: Optimizacion de Costos', topics: ['Cost Explorer', 'Budgets', 'Savings Plans', 'Reserved Instances', 'Spot Instances'], completed: false },
    { id: 'week12', title: 'Semana 12: Practica Intensiva', topics: ['Practice exams', 'Laboratorios', 'Casos de estudio', 'Simulacros'], completed: false }
  ];

  resources = {
    free: [
      { label: 'AWS Skill Builder - SAA', url: 'https://skillbuilder.aws/' },
      { label: 'AWS Whitepapers', url: 'https://aws.amazon.com/whitepapers/' },
      { label: 'AWS Well-Architected', url: 'https://aws.amazon.com/architecture/well-architected/' }
    ],
    paid: [
      { label: 'Udemy - Stephane Maarek SAA-C03', url: 'https://www.udemy.com/' },
      { label: 'Tutorials Dojo Practice Exams', url: 'https://tutorialsdojo.com/' },
      { label: 'A Cloud Guru', url: 'https://acloudguru.com/' }
    ]
  };

  constructor() {
    this.load();
  }

  toggleWeek(w: WeekProgress) {
    w.completed = !w.completed;
    this.save();
  }

  save() {
    const data = this.weeks.map(w => ({ id: w.id, completed: w.completed }));
    try { localStorage.setItem(this.roadmapId, JSON.stringify(data)); } catch (e) { /* ignore */ }
  }

  load() {
    try {
      const raw = localStorage.getItem(this.roadmapId);
      if (raw) {
        const parsed = JSON.parse(raw) as { id: string; completed: boolean }[];
        this.weeks.forEach(w => {
          const p = parsed.find(x => x.id === w.id);
          if (p) w.completed = !!p.completed;
        });
      }
    } catch (e) { /* ignore */ }
  }

  resetProgress() {
    this.weeks.forEach(w => w.completed = false);
    this.save();
  }

  get progressPercent(): number {
    const done = this.weeks.filter(w => w.completed).length;
    return Math.round((done / this.weeks.length) * 100);
  }
}
