import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'cloud-cheatsheet';
  // Control del submenu de Roadmaps en el sidebar
  public roadmapsOpen = true;
  // Control para colapsar/expandir el sidebar
  public sidebarCollapsed = false;

  public toggleRoadmaps(): void {
    this.roadmapsOpen = !this.roadmapsOpen;
  }

  public toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
