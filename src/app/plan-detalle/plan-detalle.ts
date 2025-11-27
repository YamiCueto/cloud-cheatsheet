import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-plan-detalle',
  imports: [RouterModule, CommonModule],
  templateUrl: './plan-detalle.html',
  styleUrl: './plan-detalle.css'
})
export class PlanDetalle {
  isGeneratingPDF = false;

  downloadPDF() {
    this.isGeneratingPDF = true;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const element = document.querySelector('.bg-white.rounded-lg.shadow-xl.p-8') as HTMLElement;

    if (element) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const rect = element.getBoundingClientRect();
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        ctx.scale(2, 2);

        pdf.html(element, {
          callback: (doc) => {
            doc.save('plan-estudio-ia-generativa.pdf');
            this.isGeneratingPDF = false;
          },
          x: 10,
          y: 10,
          html2canvas: {
            scale: 0.5
          }
        });
      }
    } else {
      this.isGeneratingPDF = false;
    }
  }
}
