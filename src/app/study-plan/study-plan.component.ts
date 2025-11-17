import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './study-plan.component.html',
  styleUrls: ['./study-plan.component.css']
})
export class StudyPlanComponent {
  isGeneratingPDF = false;

  downloadPDF() {
    this.isGeneratingPDF = true;

    try {
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const margin = 15;
      const contentWidth = pageWidth - (margin * 2);
      let yPosition = margin;

      // Helper function to add text with automatic page breaks
      const addText = (text: string, fontSize: number, isBold: boolean = false, indent: number = 0) => {
        pdf.setFontSize(fontSize);
        pdf.setFont('helvetica', isBold ? 'bold' : 'normal');

        const lines = pdf.splitTextToSize(text, contentWidth - indent);
        lines.forEach((line: string) => {
          if (yPosition > 270) {
            pdf.addPage();
            yPosition = margin;
          }
          pdf.text(line, margin + indent, yPosition);
          yPosition += fontSize * 0.5;
        });
        yPosition += 3;
      };

      const addSpacer = (space: number = 5) => {
        yPosition += space;
      };

      // Title
      pdf.setFillColor(35, 47, 62);
      pdf.rect(0, 0, pageWidth, 40, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text('IA Generativa para Equipos QA y Desarrollo', pageWidth / 2, 20, { align: 'center' });
      pdf.setFontSize(12);
      pdf.text('Plan de Capacitación - 1 Mes (20 días hábiles)', pageWidth / 2, 30, { align: 'center' });

      yPosition = 50;
      pdf.setTextColor(0, 0, 0);

      // Info básica
      addText('Enfoque: De Usuario Casual a Prompt Engineer Profesional', 11, true);
      addText('Duración: 1 hora diaria', 10);
      addText('Modalidad: Teórico-Práctica', 10);
      addText('Dirigido a: Equipos QA y Desarrollo', 10);
      addSpacer(8);

      // IMPORTANTE section
      pdf.setFillColor(255, 243, 205);
      pdf.rect(margin, yPosition, contentWidth, 15, 'F');
      pdf.setTextColor(146, 64, 14);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('IMPORTANTE: No es solo "chatear con ChatGPT"', margin + 5, yPosition + 10);
      yPosition += 20;
      pdf.setTextColor(0, 0, 0);

      addText('El Mito del Chat Casual', 13, true);
      addText('Muchas personas creen que usar IA Generativa es simplemente conversar con ChatGPT de manera amplia y esperar respuestas. Esta es la diferencia entre un usuario casual y un profesional:', 10);
      addSpacer(5);

      // Tabla comparativa
      autoTable(pdf, {
        startY: yPosition,
        head: [['Usuario Casual', 'Prompt Engineer Profesional']],
        body: [
          ['Prompt amplio y generico:\n"Hazme casos de prueba"', 'Prompt estructurado:\n"Actua como QA senior en banca. Sistema de Prestamos Bancarios..."'],
          ['Acepta primera respuesta', 'Itera y refina hasta resultado optimo'],
          ['No analiza la necesidad', 'Analiza HU/requerimiento ANTES de escribir prompt'],
          ['Copia/pega sin validar', 'Valida, ajusta y adapta al contexto'],
          ['Resultados inconsistentes', 'Resultados predecibles y reutilizables']
        ],
        theme: 'grid',
        headStyles: { fillColor: [35, 47, 62], fontSize: 10, fontStyle: 'bold' },
        bodyStyles: { fontSize: 9 },
        margin: { left: margin, right: margin },
        didDrawPage: (data) => {
          yPosition = data.cursor?.y || yPosition;
        }
      });

      yPosition += 10;

      // Proceso Crítico
      if (yPosition > 240) {
        pdf.addPage();
        yPosition = margin;
      }

      addText('Proceso Critico: Del Requerimiento al Prompt', 14, true);
      addSpacer(3);

      autoTable(pdf, {
        startY: yPosition,
        head: [['Paso', 'Acción', 'Output']],
        body: [
          ['1', 'Leer HU/Requerimiento', 'Entendimiento completo'],
          ['2', 'Identificar Actores', 'Lista de roles involucrados'],
          ['3', 'Extraer Acciones', 'CRUD, validaciones, flujos'],
          ['4', 'Identificar Datos', 'Entradas/salidas/formatos'],
          ['5', 'Reglas de Negocio', 'Validaciones específicas'],
          ['6', 'Edge Cases', 'Escenarios alternativos'],
          ['7', 'Estructurar Prompt', 'Rol+Contexto+Tarea+Formato'],
          ['8', 'Ejecutar y Validar', 'Resultado vs esperado'],
          ['9', 'Iterar si necesario', 'Refinar hasta óptimo']
        ],
        theme: 'striped',
        headStyles: { fillColor: [35, 47, 62], fontSize: 9, fontStyle: 'bold' },
        bodyStyles: { fontSize: 8 },
        margin: { left: margin, right: margin },
        didDrawPage: (data) => {
          yPosition = data.cursor?.y || yPosition;
        }
      });

      yPosition += 10;

      // Plan de Estudios
      pdf.addPage();
      yPosition = margin;

      addText('Plan de Estudios - 4 Modulos en 20 Dias', 16, true);
      addSpacer(5);

      // Modulo 1
      pdf.setFillColor(255, 153, 0);
      pdf.rect(margin, yPosition, contentWidth, 8, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Modulo 1: Fundamentos (3 dias)', margin + 3, yPosition + 6);
      yPosition += 12;
      pdf.setTextColor(0, 0, 0);

      addText('Dia 1: Que es IA, ML y GenIA?', 10, true, 5);
      addText('- Diferencias clave y evolucion', 9, false, 10);
      addText('- LLMs: tokens, contexto, temperatura', 9, false, 10);

      addText('Dia 2: Herramientas disponibles', 10, true, 5);
      addText('- ChatGPT, Claude, Gemini (demo comparativa)', 9, false, 10);
      addText('- GitHub Copilot, Cursor, Codeium', 9, false, 10);

      addText('Dia 3: Beneficios y limitaciones', 10, true, 5);
      addText('- Casos reales en Dev/QA', 9, false, 10);
      addText('- Alucinaciones, sesgos, verificacion', 9, false, 10);
      addText('- Etica y responsabilidad', 9, false, 10);
      addSpacer(8);      // Modulo 2
      if (yPosition > 240) {
        pdf.addPage();
        yPosition = margin;
      }

      pdf.setFillColor(255, 153, 0);
      pdf.rect(margin, yPosition, contentWidth, 8, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Modulo 2: Analisis y Entendimiento de Necesidades (5 dias) ***', margin + 3, yPosition + 6);
      yPosition += 12;
      pdf.setTextColor(0, 0, 0);

      pdf.setFillColor(254, 243, 199);
      pdf.rect(margin, yPosition, contentWidth, 8, 'F');
      pdf.setFontSize(10);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Este es el modulo MAS CRITICO del curso', margin + 3, yPosition + 6);
      yPosition += 12;

      const modulo2Days = [
        { title: 'Dia 4: Anatomia de una Historia de Usuario', items: ['Como/Quiero/Para que', 'Criterios de aceptacion', 'Definicion de Done'] },
        { title: 'Dia 5: Extraer informacion clave', items: ['Actores involucrados', 'Acciones/verbos (CRUD, validaciones, flujos)', 'Datos entrada/salida', 'Reglas de negocio'] },
        { title: 'Dia 6: De HU a Casos de Prueba', items: ['Path feliz vs alternos', 'Edge cases y validaciones', 'Taller: analizar HU real de sistema bancario'] },
        { title: 'Dia 7: De HU a Requerimientos Tecnicos', items: ['Identificar endpoints necesarios', 'Modelos de datos', 'Dependencias entre servicios'] },
        { title: 'Dia 8: Taller intensivo', items: ['3 HU reales > descomponer en tareas Dev/QA', 'Trabajo en equipos'] }
      ];

      modulo2Days.forEach(day => {
        addText(day.title, 10, true, 5);
        day.items.forEach(item => {
          addText(`- ${item}`, 9, false, 10);
        });
      });
      addSpacer(8);

      // Modulo 3
      pdf.addPage();
      yPosition = margin;

      pdf.setFillColor(255, 153, 0);
      pdf.rect(margin, yPosition, contentWidth, 8, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Modulo 3: Prompt Engineering Aplicado (7 dias) ***', margin + 3, yPosition + 6);
      yPosition += 12;
      pdf.setTextColor(0, 0, 0);

      addText('Fundamentos de Prompts (Dias 9-10)', 11, true, 5);
      addText('Dia 9: Estructura del prompt perfecto', 10, true, 10);
      addText('- [ROL] Identidad del asistente', 9, false, 15);
      addText('- [CONTEXTO] Informacion relevante', 9, false, 15);
      addText('- [TAREA] Que debe hacer', 9, false, 15);
      addText('- [RESTRICCIONES] Limites y validaciones', 9, false, 15);
      addText('- [FORMATO] Como entregar resultado', 9, false, 15);

      addText('Dia 10: Tecnicas avanzadas', 10, true, 10);
      addText('- Zero-shot vs Few-shot (con ejemplos)', 9, false, 15);
      addText('- Chain-of-thought: "Piensa paso a paso"', 9, false, 15);
      addText('- Iteracion: prompt > resultado > refinamiento', 9, false, 15);
      addSpacer(5);

      addText('Aplicacion para QA (Dias 11-13)', 11, true, 5);
      addText('Dia 11: Prompt para Test Cases | Dia 12: Prompt para Test Data | Dia 13: Scripts Automatizacion', 9, false, 10);
      addSpacer(5);

      addText('Aplicacion para Dev (Dias 14-15)', 11, true, 5);
      addText('Dia 14: Code Generation | Dia 15: Refactoring y Debug (VB6 > Java)', 9, false, 10);
      addSpacer(8);

      // Modulo 4
      pdf.setFillColor(255, 153, 0);
      pdf.rect(margin, yPosition, contentWidth, 8, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Modulo 4: Integracion Dev-QA (5 dias) ***', margin + 3, yPosition + 6);
      yPosition += 12;
      pdf.setTextColor(0, 0, 0);

      const modulo4Days = [
        'Dia 16: Flujo completo con IA (HU > Codigo > Tests)',
        'Dia 17: Code Review con IA (bugs, code smells)',
        'Dia 18: Documentacion automatica (Swagger, README)',
        'Dia 19: Caso real: Migracion VB6',
        'Dia 20: Proyecto Final (presentacion equipos)'
      ];

      modulo4Days.forEach(day => {
        addText(day, 10, true, 5);
      });
      addSpacer(8);

      // Mejores Practicas
      pdf.addPage();
      yPosition = margin;

      addText('Mejores Practicas', 16, true);
      addSpacer(5);

      const practices = [
        'Siempre analiza ANTES de escribir el prompt',
        'Se especifico, no generico',
        'Proporciona contexto de negocio',
        'Define el formato de salida',
        'Itera, no te conformes (2-3 iteraciones)',
        'Valida SIEMPRE los resultados',
        'Construye tu biblioteca de prompts',
        'Combina IA con tu experiencia profesional'
      ];

      practices.forEach(practice => {
        addText(`- ${practice}`, 10, false, 5);
      });
      addSpacer(10);

      // Conclusion
      pdf.setFillColor(255, 153, 0);
      pdf.rect(margin, yPosition, contentWidth, 8, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(14);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Conclusion', margin + 3, yPosition + 6);
      yPosition += 15;
      pdf.setTextColor(0, 0, 0);

      addText('La IA Generativa no es magia, es una herramienta poderosa que amplifica tu conocimiento y experiencia cuando se usa correctamente.', 10);
      addSpacer(5);

      addText('La diferencia entre un usuario casual y un profesional esta en:', 10, true);
      addText('1. Entender profundamente la necesidad antes de escribir cualquier prompt', 9, false, 5);
      addText('2. Estructurar prompts con Rol, Contexto, Tarea y Formato especificos', 9, false, 5);
      addText('3. Iterar y refinar hasta obtener el resultado optimo', 9, false, 5);
      addText('4. Validar siempre los resultados con tu criterio profesional', 9, false, 5);
      addSpacer(10);

      pdf.setFillColor(254, 243, 199);
      pdf.rect(margin, yPosition, contentWidth, 12, 'F');
      pdf.setFontSize(11);
      pdf.setFont('helvetica', 'bold');
      pdf.text('Recuerda: La IA es tu copiloto, no tu piloto. Tu sigues siendo el experto.', margin + 3, yPosition + 8);

      // Footer en ultima pagina
      const pageCount = pdf.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setTextColor(128, 128, 128);
        pdf.text(`Pagina ${i} de ${pageCount}`, pageWidth / 2, 290, { align: 'center' });
        pdf.text('IA Generativa - Plan de Capacitacion | Cloud Cheatsheet', pageWidth / 2, 285, { align: 'center' });
      }

      pdf.save('IA-Generativa-Plan-Estudio.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error al generar el PDF. Por favor, intenta de nuevo.');
    } finally {
      this.isGeneratingPDF = false;
    }
  }
}
