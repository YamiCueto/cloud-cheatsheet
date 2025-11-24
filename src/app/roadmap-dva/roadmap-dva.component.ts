import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';

interface Topic { title: string; completed?: boolean }
interface WeekProgress { id: string; title: string; topics: Topic[] }

@Component({
  selector: 'app-roadmap-dva',
  standalone: true,
  imports: [CommonModule, RouterModule, MatStepperModule, MatButtonModule, MatCheckboxModule, MatProgressBarModule],
  templateUrl: './roadmap-dva.component.html',
  styleUrls: ['./roadmap-dva.component.css']
})
export class RoadmapDvaComponent {
  roadmapId = 'dvaRoadmapProgress_v1';

  weeks: WeekProgress[] = [
    { id: 'week1', title: 'Semana 1: Fundamentos de Desarrollo AWS', topics: [{ title: 'SDKs y CLI' }, { title: 'APIs' }, { title: 'Credenciales' }, { title: 'IAM para desarrolladores' }] },
    { id: 'week2', title: 'Semana 2: Lambda y Serverless', topics: [{ title: 'Lambda profundo' }, { title: 'Triggers' }, { title: 'Layers' }, { title: 'SAM' }, { title: 'Serverless Framework' }] },
    { id: 'week3', title: 'Semana 3: API Gateway', topics: [{ title: 'REST APIs' }, { title: 'HTTP APIs' }, { title: 'WebSocket' }, { title: 'Autorizacion' }, { title: 'Throttling' }] },
    { id: 'week4', title: 'Semana 4: DynamoDB para Developers', topics: [{ title: 'Modelado de datos' }, { title: 'Particiones' }, { title: 'GSI/LSI' }, { title: 'Streams' }, { title: 'DAX' }] },
    { id: 'week5', title: 'Semana 5: Aplicaciones Desacopladas', topics: [{ title: 'SQS' }, { title: 'SNS' }, { title: 'EventBridge' }, { title: 'Step Functions' }, { title: 'Kinesis' }] },
    { id: 'week6', title: 'Semana 6: ECS y Contenedores', topics: [{ title: 'Docker basics' }, { title: 'ECS' }, { title: 'Fargate' }, { title: 'ECR' }, { title: 'Task definitions' }] },
    { id: 'week7', title: 'Semana 7: CI/CD', topics: [{ title: 'CodeCommit' }, { title: 'CodeBuild' }, { title: 'CodeDeploy' }, { title: 'CodePipeline' }, { title: 'CodeStar' }] },
    { id: 'week8', title: 'Semana 8: Monitoreo y Debugging', topics: [{ title: 'CloudWatch Logs' }, { title: 'CloudWatch Metrics' }, { title: 'X-Ray' }, { title: 'CloudTrail' }] },
    { id: 'week9', title: 'Semana 9: Seguridad para Developers', topics: [{ title: 'KMS' }, { title: 'Secrets Manager' }, { title: 'Parameter Store' }, { title: 'Cognito' }, { title: 'STS' }] },
    { id: 'week10', title: 'Semana 10: Practica y Examen', topics: [{ title: 'Laboratorios' }, { title: 'Practice exams' }, { title: 'Casos practicos' }, { title: 'Simulacros' }] }
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

  async onFinish(): Promise<void> {
    const pct = (typeof (this as any).progressPercent === 'function') ? (this as any).progressPercent() : (this as any).progressPercent;
    const Swal = (await import('sweetalert2')).default;
    if (pct < 100) {
      const result = await Swal.fire({
        title: 'No completado',
        text: `Tu progreso es ${pct}%. ¿Marcar todo como completado de todas formas?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Marcar todo',
        cancelButtonText: 'Cancelar'
      });
      if (result.isConfirmed) {
        this.finishStepper();
        await Swal.fire('Completado', 'El roadmap se ha marcado como completado.', 'success');
      }
    } else {
      this.finishStepper();
      await Swal.fire('¡Listo!', 'Has completado el roadmap.', 'success');
    }
  }
}
