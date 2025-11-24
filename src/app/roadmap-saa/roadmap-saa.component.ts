import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

interface Topic { title: string; completed?: boolean }

interface WeekProgress { id: string; title: string; topics: Topic[] }

@Component({
  selector: 'app-roadmap-saa',
  standalone: true,
  imports: [CommonModule, RouterModule, MatStepperModule, MatButtonModule, MatCheckboxModule, MatProgressBarModule],
  templateUrl: './roadmap-saa.component.html',
  styleUrls: ['./roadmap-saa.component.css']
})
export class RoadmapSaaComponent {
  roadmapId = 'saaRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1: Fundamentos de Arquitectura', topics: [{ title: 'Well-Architected Framework' }, { title: 'Pilares de arquitectura' }, { title: 'Design patterns' }, { title: 'Casos de uso empresariales' }] },
    { id: 'week2', title: 'Semana 2: IAM y Seguridad', topics: [{ title: 'IAM avanzado' }, { title: 'Roles y politicas' }, { title: 'STS' }, { title: 'Organizations' }, { title: 'Control Tower' }] },
    { id: 'week3', title: 'Semana 3: Networking Avanzado', topics: [{ title: 'VPC profundo' }, { title: 'Subnetting' }, { title: 'Route Tables' }, { title: 'NAT Gateway' }, { title: 'VPC Peering' }, { title: 'Transit Gateway' }] },
    { id: 'week4', title: 'Semana 4: Compute Services', topics: [{ title: 'EC2 avanzado' }, { title: 'Auto Scaling' }, { title: 'ELB (ALB/NLB)' }, { title: 'Lambda' }, { title: 'ECS/EKS' }, { title: 'Fargate' }] },
    { id: 'week5', title: 'Semana 5: Storage y Databases', topics: [{ title: 'S3 avanzado' }, { title: 'EBS/EFS' }, { title: 'Storage Gateway' }, { title: 'RDS Multi-AZ' }, { title: 'Aurora' }, { title: 'DynamoDB' }] },
    { id: 'week6', title: 'Semana 6: Migracion y Transferencia', topics: [{ title: 'Database Migration Service' }, { title: 'Server Migration Service' }, { title: 'DataSync' }, { title: 'Transfer Family' }, { title: 'Snow Family' }] },
    { id: 'week7', title: 'Semana 7: Caching y CDN', topics: [{ title: 'CloudFront' }, { title: 'ElastiCache' }, { title: 'Global Accelerator' }, { title: 'Route 53 avanzado' }] },
    { id: 'week8', title: 'Semana 8: Aplicaciones Desacopladas', topics: [{ title: 'SQS' }, { title: 'SNS' }, { title: 'EventBridge' }, { title: 'Step Functions' }, { title: 'API Gateway' }] },
    { id: 'week9', title: 'Semana 9: Monitoreo y Auditoria', topics: [{ title: 'CloudWatch' }, { title: 'CloudTrail' }, { title: 'Config' }, { title: 'Systems Manager' }, { title: 'X-Ray' }] },
    { id: 'week10', title: 'Semana 10: Alta Disponibilidad y DR', topics: [{ title: 'Estrategias de backup' }, { title: 'Disaster Recovery' }, { title: 'Multi-Region' }, { title: 'Resilience' }] },
    { id: 'week11', title: 'Semana 11: Optimizacion de Costos', topics: [{ title: 'Cost Explorer' }, { title: 'Budgets' }, { title: 'Savings Plans' }, { title: 'Reserved Instances' }, { title: 'Spot Instances' }] },
    { id: 'week12', title: 'Semana 12: Practica Intensiva', topics: [{ title: 'Practice exams' }, { title: 'Laboratorios' }, { title: 'Casos de estudio' }, { title: 'Simulacros' }] }
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

  constructor() { this.load(); }

  toggleTopic(w: WeekProgress, t: Topic) { t.completed = !t.completed; this.save(); }

  save() { const data = this.weeks.map(w => ({ id: w.id, topics: w.topics.map(t => ({ title: t.title, completed: !!t.completed })) })); try { localStorage.setItem(this.roadmapId, JSON.stringify(data)); } catch (e) { /* ignore */ } }

  load() {
    try {
      const raw = localStorage.getItem(this.roadmapId);
      if (raw) {
        const parsed = JSON.parse(raw) as { id: string; topics: { title: string; completed: boolean }[] }[];
        this.weeks.forEach(w => {
          const p = parsed.find(x => x.id === w.id);
          if (p && Array.isArray(p.topics)) {
            w.topics.forEach(t => {
              const pt = p.topics.find(x => x.title === t.title);
              if (pt) t.completed = !!pt.completed;
            });
          }
        });
      }
    } catch (e) { /* ignore */ }
  }

  resetProgress() { this.weeks.forEach(w => w.topics.forEach(t => t.completed = false)); this.save(); }

  get progressPercent(): number { const totalTopics = this.weeks.reduce((acc, w) => acc + w.topics.length, 0); const doneTopics = this.weeks.reduce((acc, w) => acc + w.topics.filter(t => t.completed).length, 0); return totalTopics === 0 ? 0 : Math.round((doneTopics / totalTopics) * 100); }

  weekProgressPercent(w: WeekProgress): number { const total = w.topics.length; const done = w.topics.filter(t => t.completed).length; return total === 0 ? 0 : Math.round((done / total) * 100); }

  finishStepper() { this.weeks.forEach(w => w.topics.forEach(t => t.completed = true)); this.save(); }

  onFinish() {
    const pct = (typeof (this as any).progressPercent === 'function') ? (this as any).progressPercent() : (this as any).progressPercent;
    if (pct < 100) {
      Swal.fire({
        title: 'No completado',
        text: `Tu progreso es ${pct}%. ¿Marcar todo como completado de todas formas?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Marcar todo',
        cancelButtonText: 'Cancelar'
      }).then(result => {
        if (result.isConfirmed) {
          this.finishStepper();
          Swal.fire('Completado', 'El roadmap se ha marcado como completado.', 'success');
        }
      });
    } else {
      this.finishStepper();
      Swal.fire('¡Listo!', 'Has completado el roadmap.', 'success');
    }
  }
}
