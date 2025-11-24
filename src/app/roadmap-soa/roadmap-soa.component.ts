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
  selector: 'app-roadmap-soa',
  standalone: true,
  imports: [CommonModule, RouterModule, MatStepperModule, MatCheckboxModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './roadmap-soa.component.html',
  styleUrls: ['./roadmap-soa.component.css']
})
export class RoadmapSoaComponent {
  roadmapId = 'soaRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1: Fundamentos de Operaciones', topics: [{ title: 'AWS Organizations' }, { title: 'Service Control Policies' }, { title: 'Control Tower' }, { title: 'Landing Zones' }] },
    { id: 'week2', title: 'Semana 2: Monitoring y Alertas', topics: [{ title: 'CloudWatch profundo' }, { title: 'Metricas custom' }, { title: 'Dashboards' }, { title: 'Alarms' }, { title: 'SNS integration' }] },
    { id: 'week3', title: 'Semana 3: Auditoria y Compliance', topics: [{ title: 'CloudTrail' }, { title: 'Config Rules' }, { title: 'AWS Audit Manager' }, { title: 'Artifact' }] },
    { id: 'week4', title: 'Semana 4: Systems Manager', topics: [{ title: 'Session Manager' }, { title: 'Patch Manager' }, { title: 'Parameter Store' }, { title: 'Automation' }, { title: 'OpsCenter' }] },
    { id: 'week5', title: 'Semana 5: Deployment y Provisionamiento', topics: [{ title: 'CloudFormation profundo' }, { title: 'Elastic Beanstalk' }, { title: 'OpsWorks' }, { title: 'Service Catalog' }] },
    { id: 'week6', title: 'Semana 6: Alta Disponibilidad', topics: [{ title: 'Auto Scaling avanzado' }, { title: 'ELB health checks' }, { title: 'Multi-AZ deployments' }, { title: 'Disaster Recovery' }] },
    { id: 'week7', title: 'Semana 7: Networking Operativo', topics: [{ title: 'VPC troubleshooting' }, { title: 'VPN' }, { title: 'Direct Connect' }, { title: 'Transit Gateway' }] },
    { id: 'week8', title: 'Semana 8: Data Management', topics: [{ title: 'EBS snapshots' }, { title: 'Lifecycle policies' }, { title: 'Backup' }, { title: 'Data recovery' }] },
    { id: 'week9', title: 'Semana 9: Optimizacion de Costos', topics: [{ title: 'Cost optimization' }, { title: 'Trusted Advisor' }, { title: 'Compute Optimizer' }, { title: 'Right-sizing' }] },
    { id: 'week10', title: 'Semana 10: Practica y Examen', topics: [{ title: 'Troubleshooting scenarios' }, { title: 'Practice exams' }, { title: 'Laboratorios' }, { title: 'Simulacros' }] }
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

  toggleTopic(w: WeekProgress, t: Topic) {
    t.completed = !t.completed;
    this.save();
  }

  weekProgressPercent(w: WeekProgress): number {
    const total = w.topics.length;
    const done = w.topics.filter(t => t.completed).length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }

  progressPercent(): number {
    const totalTopics = this.weeks.reduce((acc, w) => acc + w.topics.length, 0);
    const doneTopics = this.weeks.reduce((acc, w) => acc + w.topics.filter(t => t.completed).length, 0);
    return totalTopics === 0 ? 0 : Math.round((doneTopics / totalTopics) * 100);
  }

  save() {
    const data = this.weeks.map(w => ({ id: w.id, topics: w.topics.map(t => ({ title: t.title, completed: !!t.completed })) }));
    try { localStorage.setItem(this.roadmapId, JSON.stringify(data)); } catch (e) { /* ignore */ }
  }

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

  resetProgress() {
    this.weeks.forEach(w => w.topics.forEach(t => t.completed = false));
    this.save();
  }

  finishStepper() {
    this.weeks.forEach(w => w.topics.forEach(t => t.completed = true));
    this.save();
  }

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
