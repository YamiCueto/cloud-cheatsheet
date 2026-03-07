import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type TrackType = 'QA' | 'DEV' | 'MIXTO';

interface ClaseDraft {
  titulo: string;
  track: TrackType;
  problema: string;
  dolorActual: string;
  hipotesisPrincipal: string;
  audiencia: string;
  nivel: string;
  contextoUso: string;
  objetivosAprendizaje: string;
  entregables: string;
  roadmap4Semanas: string;
  criteriosAceptacion: string;
  evidenciaEvaluacion: string;
  rubricBasica: string;
  recursosSugeridos: string;
}

@Component({
  selector: 'app-creador-clase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creador-clase.component.html',
  styleUrls: ['./creador-clase.component.css']
})
export class CreadorClaseComponent {
  currentStep = 1;
  readonly totalSteps = 4;

  draft: ClaseDraft = {
    titulo: '',
    track: 'MIXTO',
    problema: '',
    dolorActual: '',
    hipotesisPrincipal: '',
    audiencia: '',
    nivel: '',
    contextoUso: '',
    objetivosAprendizaje: '',
    entregables: '',
    roadmap4Semanas: '',
    criteriosAceptacion: '',
    evidenciaEvaluacion: '',
    rubricBasica: '',
    recursosSugeridos: ''
  };

  stepNames = ['Problema', 'Audiencia', 'Objetivos', 'Evaluacion'];

  goNext(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep += 1;
    }
  }

  goPrev(): void {
    if (this.currentStep > 1) {
      this.currentStep -= 1;
    }
  }

  goTo(step: number): void {
    if (step >= 1 && step <= this.totalSteps) {
      this.currentStep = step;
    }
  }

  get progressPercent(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  get markdownOutput(): string {
    const title = this.draft.titulo.trim() || 'Propuesta de clase';
    const today = new Date().toISOString().slice(0, 10);

    return `---\ntitle: "${title}"\ntrack: "${this.draft.track}"\nstatus: "proposal"\ncreatedAt: "${today}"\nsource: "creador-clase-cloud-cheatsheet"\n---\n\n# ${title}\n\n## 1. Problema (Discovery)\n- Problema principal: ${this.lineOrPlaceholder(this.draft.problema)}\n- Dolor actual: ${this.lineOrPlaceholder(this.draft.dolorActual)}\n- Hipotesis principal: ${this.lineOrPlaceholder(this.draft.hipotesisPrincipal)}\n\n## 2. Audiencia (Value Proposition)\n- Audiencia objetivo: ${this.lineOrPlaceholder(this.draft.audiencia)}\n- Nivel sugerido: ${this.lineOrPlaceholder(this.draft.nivel)}\n- Contexto de uso: ${this.lineOrPlaceholder(this.draft.contextoUso)}\n\n## 3. Objetivos y Plan (PRD + Roadmap)\n### Objetivos de aprendizaje\n${this.multilineOrPlaceholder(this.draft.objetivosAprendizaje)}\n\n### Entregables esperados\n${this.multilineOrPlaceholder(this.draft.entregables)}\n\n### Roadmap 4 semanas\n${this.multilineOrPlaceholder(this.draft.roadmap4Semanas)}\n\n## 4. Evaluacion (Acceptance + Test Scenarios)\n### Criterios de aceptacion\n${this.multilineOrPlaceholder(this.draft.criteriosAceptacion)}\n\n### Evidencia de evaluacion\n${this.multilineOrPlaceholder(this.draft.evidenciaEvaluacion)}\n\n### Rubrica basica\n${this.multilineOrPlaceholder(this.draft.rubricBasica)}\n\n## Recursos sugeridos\n${this.multilineOrPlaceholder(this.draft.recursosSugeridos)}\n\n## Checklist para PR\n- [ ] La propuesta describe un problema claro y medible.\n- [ ] La audiencia esta bien definida (nivel y contexto).\n- [ ] Los objetivos son verificables y alineados al track ${this.draft.track}.\n- [ ] La evaluacion define evidencia concreta de aprendizaje.\n- [ ] Incluye recursos y plan de ejecucion inicial.\n`;
  }

  copyMarkdown(): void {
    if (!navigator?.clipboard) {
      return;
    }

    navigator.clipboard.writeText(this.markdownOutput).catch(() => {
      // Ignore clipboard API errors in restricted environments.
    });
  }

  downloadMarkdown(): void {
    const fileName = this.suggestedFileName;
    const blob = new Blob([this.markdownOutput], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  }

  get suggestedFileName(): string {
    const title = this.draft.titulo.trim() || 'nueva-clase';
    const slug = this.slugify(title);
    const track = this.draft.track.toLowerCase();
    return `propuesta-clase-${slug}-${track}.md`;
  }

  private lineOrPlaceholder(value: string): string {
    return value.trim() || '(completar)';
  }

  private multilineOrPlaceholder(value: string): string {
    if (!value.trim()) {
      return '- (completar)';
    }

    const lines = value
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .map(line => (line.startsWith('- ') ? line : `- ${line}`));

    return lines.join('\n');
  }

  private slugify(input: string): string {
    return input
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60) || 'nueva-clase';
  }
}
