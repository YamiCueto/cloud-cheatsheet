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
  selector: 'app-roadmap-clf',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roadmap-clf.component.html',
  styleUrls: ['./roadmap-clf.component.css']
})
export class RoadmapClfComponent {
  roadmapId = 'awsRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1-2: Fundamentos', topics: ['Cloud Computing', 'Infraestructura global', 'Well-Architected', 'Modelos de servicio'], completed: false },
    { id: 'week2', title: 'Semana 1-2: Fundamentos (cont.)', topics: ['Regiones & AZs', 'Casos de uso', 'Modelos de despliegue'], completed: false },
    { id: 'week3', title: 'Semana 3-4: Compute & Storage', topics: ['EC2', 'Lambda', 'Elastic Beanstalk', 'S3', 'EBS', 'EFS'], completed: false },
    { id: 'week4', title: 'Semana 3-4: Bases de Datos & Networking', topics: ['RDS', 'DynamoDB', 'VPC', 'CloudFront', 'Route 53'], completed: false },
    { id: 'week5', title: 'Semana 5: Security & Compliance', topics: ['Shared Responsibility', 'IAM', 'Shield, WAF, GuardDuty', 'Encryption'], completed: false },
    { id: 'week6', title: 'Semana 6: Billing & Support', topics: ['Pricing models', 'Cost Explorer', 'Support Plans', 'Free Tier'], completed: false },
    { id: 'week7', title: 'Semana 7: Servicios Adicionales', topics: ['CloudWatch, CloudFormation', 'SQS, SNS', 'Analytics, ML'], completed: false },
    { id: 'week8', title: 'Semana 8: Práctica Intensiva', topics: ['Practice exams', 'Simulacros', 'Revisión'], completed: false }
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

  toggleWeek(w: WeekProgress) {
    w.completed = !w.completed;
    this.save();
    // debug: log progress to help verify visual bar
    // eslint-disable-next-line no-console
    console.log('roadmap progress', this.progressPercent + '%');
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
