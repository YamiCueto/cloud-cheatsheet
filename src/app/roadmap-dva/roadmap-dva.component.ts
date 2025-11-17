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
  selector: 'app-roadmap-dva',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './roadmap-dva.component.html',
  styleUrls: ['./roadmap-dva.component.css']
})
export class RoadmapDvaComponent {
  roadmapId = 'dvaRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1: Fundamentos de Desarrollo AWS', topics: ['SDKs y CLI', 'APIs', 'Credenciales', 'IAM para desarrolladores'], completed: false },
    { id: 'week2', title: 'Semana 2: Lambda y Serverless', topics: ['Lambda profundo', 'Triggers', 'Layers', 'SAM', 'Serverless Framework'], completed: false },
    { id: 'week3', title: 'Semana 3: API Gateway', topics: ['REST APIs', 'HTTP APIs', 'WebSocket', 'Autorizacion', 'Throttling'], completed: false },
    { id: 'week4', title: 'Semana 4: DynamoDB para Developers', topics: ['Modelado de datos', 'Particiones', 'GSI/LSI', 'Streams', 'DAX'], completed: false },
    { id: 'week5', title: 'Semana 5: Aplicaciones Desacopladas', topics: ['SQS', 'SNS', 'EventBridge', 'Step Functions', 'Kinesis'], completed: false },
    { id: 'week6', title: 'Semana 6: ECS y Contenedores', topics: ['Docker basics', 'ECS', 'Fargate', 'ECR', 'Task definitions'], completed: false },
    { id: 'week7', title: 'Semana 7: CI/CD', topics: ['CodeCommit', 'CodeBuild', 'CodeDeploy', 'CodePipeline', 'CodeStar'], completed: false },
    { id: 'week8', title: 'Semana 8: Monitoreo y Debugging', topics: ['CloudWatch Logs', 'CloudWatch Metrics', 'X-Ray', 'CloudTrail'], completed: false },
    { id: 'week9', title: 'Semana 9: Seguridad para Developers', topics: ['KMS', 'Secrets Manager', 'Parameter Store', 'Cognito', 'STS'], completed: false },
    { id: 'week10', title: 'Semana 10: Practica y Examen', topics: ['Laboratorios', 'Practice exams', 'Casos practicos', 'Simulacros'], completed: false }
  ];

  resources = {
    free: [
      { label: 'AWS Skill Builder - DVA', url: 'https://skillbuilder.aws/' },
      { label: 'AWS Developer Center', url: 'https://aws.amazon.com/developer/' },
      { label: 'AWS Samples GitHub', url: 'https://github.com/aws-samples' }
    ],
    paid: [
      { label: 'Udemy - Stephane Maarek DVA-C02', url: 'https://www.udemy.com/' },
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
