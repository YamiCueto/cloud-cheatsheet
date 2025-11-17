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
  selector: 'app-roadmap-soa',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roadmap-soa.component.html',
  styleUrls: ['./roadmap-soa.component.css']
})
export class RoadmapSoaComponent {
  roadmapId = 'soaRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1: Fundamentos de Operaciones', topics: ['AWS Organizations', 'Service Control Policies', 'Control Tower', 'Landing Zones'], completed: false },
    { id: 'week2', title: 'Semana 2: Monitoring y Alertas', topics: ['CloudWatch profundo', 'Metricas custom', 'Dashboards', 'Alarms', 'SNS integration'], completed: false },
    { id: 'week3', title: 'Semana 3: Auditoria y Compliance', topics: ['CloudTrail', 'Config Rules', 'AWS Audit Manager', 'Artifact'], completed: false },
    { id: 'week4', title: 'Semana 4: Systems Manager', topics: ['Session Manager', 'Patch Manager', 'Parameter Store', 'Automation', 'OpsCenter'], completed: false },
    { id: 'week5', title: 'Semana 5: Deployment y Provisionamiento', topics: ['CloudFormation profundo', 'Elastic Beanstalk', 'OpsWorks', 'Service Catalog'], completed: false },
    { id: 'week6', title: 'Semana 6: Alta Disponibilidad', topics: ['Auto Scaling avanzado', 'ELB health checks', 'Multi-AZ deployments', 'Disaster Recovery'], completed: false },
    { id: 'week7', title: 'Semana 7: Networking Operativo', topics: ['VPC troubleshooting', 'VPN', 'Direct Connect', 'Transit Gateway'], completed: false },
    { id: 'week8', title: 'Semana 8: Data Management', topics: ['EBS snapshots', 'Lifecycle policies', 'Backup', 'Data recovery'], completed: false },
    { id: 'week9', title: 'Semana 9: Optimizacion de Costos', topics: ['Cost optimization', 'Trusted Advisor', 'Compute Optimizer', 'Right-sizing'], completed: false },
    { id: 'week10', title: 'Semana 10: Practica y Examen', topics: ['Troubleshooting scenarios', 'Practice exams', 'Laboratorios', 'Simulacros'], completed: false }
  ];

  resources = {
    free: [
      { label: 'AWS Skill Builder - SOA', url: 'https://skillbuilder.aws/' },
      { label: 'AWS Systems Manager Docs', url: 'https://docs.aws.amazon.com/systems-manager/' },
      { label: 'AWS Operations Blog', url: 'https://aws.amazon.com/blogs/mt/' }
    ],
    paid: [
      { label: 'Udemy - SysOps Administrator', url: 'https://www.udemy.com/' },
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
