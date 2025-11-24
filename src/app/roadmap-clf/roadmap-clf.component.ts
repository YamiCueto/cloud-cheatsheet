import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

interface Topic {
  title: string;
  completed?: boolean;
}

interface WeekProgress {
  id: string;
  title: string;
  topics: Topic[];
}

@Component({
  selector: 'app-roadmap-clf',
  standalone: true,
  imports: [CommonModule, RouterModule, MatStepperModule, MatButtonModule, MatCheckboxModule, MatProgressBarModule],
  templateUrl: './roadmap-clf.component.html',
  styleUrls: ['./roadmap-clf.component.css']
})
export class RoadmapClfComponent {
  roadmapId = 'awsRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1-2: Fundamentos', topics: [
      { title: 'Cloud Computing' }, { title: 'Infraestructura global' }, { title: 'Well-Architected' }, { title: 'Modelos de servicio' }
    ] },
    { id: 'week2', title: 'Semana 1-2: Fundamentos (cont.)', topics: [
      { title: 'Regiones & AZs' }, { title: 'Casos de uso' }, { title: 'Modelos de despliegue' }
    ] },
    { id: 'week3', title: 'Semana 3-4: Compute & Storage', topics: [
      { title: 'EC2' }, { title: 'Lambda' }, { title: 'Elastic Beanstalk' }, { title: 'S3' }, { title: 'EBS' }, { title: 'EFS' }
    ] },
    { id: 'week4', title: 'Semana 3-4: Bases de Datos & Networking', topics: [
      { title: 'RDS' }, { title: 'DynamoDB' }, { title: 'VPC' }, { title: 'CloudFront' }, { title: 'Route 53' }
    ] },
    { id: 'week5', title: 'Semana 5: Security & Compliance', topics: [
      { title: 'Shared Responsibility' }, { title: 'IAM' }, { title: 'Shield, WAF, GuardDuty' }, { title: 'Encryption' }
    ] },
    { id: 'week6', title: 'Semana 6: Billing & Support', topics: [
      { title: 'Pricing models' }, { title: 'Cost Explorer' }, { title: 'Support Plans' }, { title: 'Free Tier' }
    ] },
    { id: 'week7', title: 'Semana 7: Servicios Adicionales', topics: [
      { title: 'CloudWatch' }, { title: 'CloudFormation' }, { title: 'SQS' }, { title: 'SNS' }, { title: 'Analytics' }, { title: 'ML' }
    ] },
    { id: 'week8', title: 'Semana 8: Práctica Intensiva', topics: [
      { title: 'Practice exams' }, { title: 'Simulacros' }, { title: 'Revisión' }
    ] }
  ];

  resources = {
    free: [
      { label: 'AWS Skill Builder', url: 'https://skillbuilder.aws/' },
      { label: 'AWS Cloud Practitioner Essentials', url: 'https://www.aws.training/' },
      { label: 'AWS Whitepapers & FAQs', url: 'https://aws.amazon.com/whitepapers/' }
    ],
    paid: [
      { label: 'Udemy - Certificate courses', url: 'https://www.udemy.com/' },
      { label: 'Tutorials Dojo Practice Exams', url: 'https://tutorialsdojo.com/' }
    ]
  };

  constructor() {
    this.load();
  }
  toggleTopic(w: WeekProgress, t: Topic) {
    t.completed = !t.completed;
    this.save();
    // eslint-disable-next-line no-console
    console.log('toggled topic', w.id, t.title, t.completed);
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

  get progressPercent(): number {
    const totalTopics = this.weeks.reduce((acc, w) => acc + w.topics.length, 0);
    const doneTopics = this.weeks.reduce((acc, w) => acc + w.topics.filter(t => t.completed).length, 0);
    return totalTopics === 0 ? 0 : Math.round((doneTopics / totalTopics) * 100);
  }

  weekProgressPercent(w: WeekProgress): number {
    const total = w.topics.length;
    const done = w.topics.filter(t => t.completed).length;
    return total === 0 ? 0 : Math.round((done / total) * 100);
  }

  finishStepper(): void {
    // Mark all topics as completed and persist
    this.weeks.forEach(w => w.topics.forEach(t => t.completed = true));
    this.save();
    // Debug: log completion
    // eslint-disable-next-line no-console
    console.log('Roadmap completed');
  }

  onFinish(): void {
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
