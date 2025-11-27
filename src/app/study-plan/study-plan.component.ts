import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechStackComponent } from '../tech-stack/tech-stack.component';

@Component({
  selector: 'app-study-plan',
  standalone: true,
  imports: [CommonModule, RouterModule, TechStackComponent],
  templateUrl: './study-plan.component.html',
  styleUrls: ['./study-plan.component.css']
})
export class StudyPlanComponent {
}
