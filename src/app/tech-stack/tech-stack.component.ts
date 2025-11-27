import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  icon: string;
  description: string;
  category: string;
  tags: string[];
}

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.css']
})
export class TechStackComponent {
  showStack = false;

  technologies: Technology[] = [
    // Editores y Herramientas de Desarrollo
    {
      name: 'Visual Studio Code',
      icon: '💻',
      description: 'Editor de código preferido para el curso. Ligero, extensible y con integración nativa de IA',
      category: 'Editores',
      tags: ['Editor', 'IDE', 'Principal']
    },
    {
      name: 'GitHub Copilot',
      icon: '🤖',
      description: 'IA integrada en VSCode para autocompletado inteligente, generación de código y asistencia en tiempo real',
      category: 'IA & Asistentes',
      tags: ['IA', 'Autocompletado', 'Premium']
    },
    {
      name: 'ChatGPT (OpenAI)',
      icon: '💬',
      description: 'LLM para generación de prompts, análisis de requerimientos y solución de problemas complejos',
      category: 'IA & Asistentes',
      tags: ['IA', 'LLM', 'Gratuito']
    },
    {
      name: 'Claude (Anthropic)',
      icon: '🧠',
      description: 'LLM con contexto extendido, ideal para analizar código completo y documentación técnica',
      category: 'IA & Asistentes',
      tags: ['IA', 'LLM', 'Contexto']
    },
    {
      name: 'Cursor AI',
      icon: '✨',
      description: 'Editor con IA integrada para desarrollo asistido, alternativa a VSCode con IA nativa',
      category: 'Editores',
      tags: ['Editor', 'IA', 'Alternativo']
    },

    // Frontend
    {
      name: 'HTML5 + CSS3',
      icon: '🌐',
      description: 'Fundamentos web para estructura y estilos (Clase 7 - Vanilla JS)',
      category: 'Frontend',
      tags: ['Web', 'Básico', 'Legacy']
    },
    {
      name: 'JavaScript (Vanilla)',
      icon: '🟨',
      description: 'JavaScript puro sin frameworks para entender fundamentos (Clase 7)',
      category: 'Frontend',
      tags: ['JavaScript', 'Legacy', 'DOM']
    },
    {
      name: 'Angular 18+',
      icon: '🅰️',
      description: 'Framework moderno para aplicaciones enterprise escalables (Clases 8, 9, 12)',
      category: 'Frontend',
      tags: ['Framework', 'TypeScript', 'Enterprise']
    },
    {
      name: 'TypeScript',
      icon: '🔷',
      description: 'Superset de JavaScript con tipado estático para código más robusto',
      category: 'Frontend',
      tags: ['JavaScript', 'Tipado', 'Angular']
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      description: 'Framework CSS utility-first para diseño rápido y consistente',
      category: 'Frontend',
      tags: ['CSS', 'Diseño', 'Utilidades']
    },

    // Backend
    {
      name: 'Java 17+',
      icon: '☕',
      description: 'Lenguaje robusto para backend enterprise (Clase 6)',
      category: 'Backend',
      tags: ['Lenguaje', 'Enterprise', 'JVM']
    },
    {
      name: 'Spring Boot',
      icon: '🍃',
      description: 'Framework líder para APIs REST y microservicios en Java (Clase 6)',
      category: 'Backend',
      tags: ['Framework', 'REST', 'Java']
    },
    {
      name: 'Python 3.10+',
      icon: '🐍',
      description: 'Lenguaje versátil para scripting, APIs y testing (Clases 3, 4, 5)',
      category: 'Backend',
      tags: ['Lenguaje', 'Scripting', 'Testing']
    },
    {
      name: 'FastAPI',
      icon: '⚡',
      description: 'Framework moderno Python para APIs REST con validación automática',
      category: 'Backend',
      tags: ['Framework', 'REST', 'Python']
    },

    // Bases de Datos
    {
      name: 'H2 Database',
      icon: '💾',
      description: 'Base de datos en memoria para desarrollo rápido con Spring Boot (Clase 6)',
      category: 'Bases de Datos',
      tags: ['SQL', 'In-Memory', 'Java']
    },
    {
      name: 'SQLite',
      icon: '📦',
      description: 'Base de datos embebida ligera para Python y demos (FastAPI)',
      category: 'Bases de Datos',
      tags: ['SQL', 'Embebida', 'Python']
    },

    // Testing & QA
    {
      name: 'Selenium WebDriver',
      icon: '🤖',
      description: 'Automatización de pruebas E2E en navegadores (Clase 4)',
      category: 'Testing & QA',
      tags: ['Automatización', 'E2E', 'Browser']
    },
    {
      name: 'Cypress',
      icon: '🌲',
      description: 'Framework moderno para testing E2E con experiencia developer-first (Clases 4, 9)',
      category: 'Testing & QA',
      tags: ['E2E', 'JavaScript', 'Moderno']
    },
    {
      name: 'JUnit 5',
      icon: '✅',
      description: 'Framework de testing unitario para Java/Spring Boot (Clases 6, 9)',
      category: 'Testing & QA',
      tags: ['Unit Testing', 'Java', 'Backend']
    },
    {
      name: 'Mockito',
      icon: '🎭',
      description: 'Framework para mocking en tests unitarios Java (Clases 6, 9)',
      category: 'Testing & QA',
      tags: ['Mocking', 'Java', 'Unit Testing']
    },
    {
      name: 'Jasmine + Karma',
      icon: '🧪',
      description: 'Framework de testing unitario para Angular (Clases 8, 9)',
      category: 'Testing & QA',
      tags: ['Unit Testing', 'Angular', 'Frontend']
    },
    {
      name: 'Postman',
      icon: '📮',
      description: 'Herramienta para testing manual y automatizado de APIs REST (Clase 5)',
      category: 'Testing & QA',
      tags: ['API Testing', 'REST', 'Manual']
    },
    {
      name: 'REST Assured',
      icon: '🔐',
      description: 'Librería Java para testing automatizado de APIs REST (Clase 5)',
      category: 'Testing & QA',
      tags: ['API Testing', 'Java', 'Automatizado']
    },
    {
      name: 'pytest',
      icon: '🧬',
      description: 'Framework de testing para Python con sintaxis simple (FastAPI)',
      category: 'Testing & QA',
      tags: ['Unit Testing', 'Python', 'Backend']
    },

    // Build & Deploy
    {
      name: 'Gradle',
      icon: '🐘',
      description: 'Build tool moderno para proyectos Java/Spring Boot (Clase 6)',
      category: 'Build & Deploy',
      tags: ['Build', 'Java', 'Automatización']
    },
    {
      name: 'npm',
      icon: '📦',
      description: 'Gestor de paquetes para JavaScript/TypeScript y Angular',
      category: 'Build & Deploy',
      tags: ['Package Manager', 'JavaScript', 'Node']
    },
    {
      name: 'Git',
      icon: '🔀',
      description: 'Sistema de control de versiones distribuido',
      category: 'Build & Deploy',
      tags: ['Version Control', 'Colaboración']
    },
    {
      name: 'GitHub',
      icon: '🐙',
      description: 'Plataforma para hosting de repositorios y colaboración',
      category: 'Build & Deploy',
      tags: ['Repository', 'Colaboración', 'CI/CD']
    },

    // Librerías y Herramientas Adicionales
    {
      name: 'Swagger UI',
      icon: '📘',
      description: 'Documentación interactiva automática para APIs REST (Clases 5, 6)',
      category: 'Documentación',
      tags: ['API Docs', 'OpenAPI', 'Interactivo']
    },
    {
      name: 'Faker.js / Faker (Python)',
      icon: '🎲',
      description: 'Generación de datos sintéticos realistas para testing (Clase 3)',
      category: 'Testing & QA',
      tags: ['Datos Sintéticos', 'Mocking', 'Testing']
    },
    {
      name: 'Lombok',
      icon: '🌶️',
      description: 'Librería Java para reducir boilerplate code (Clase 6)',
      category: 'Librerías',
      tags: ['Java', 'Productividad', 'Backend']
    },
    {
      name: 'RxJS',
      icon: '🔄',
      description: 'Librería para programación reactiva en Angular',
      category: 'Librerías',
      tags: ['Reactive', 'Angular', 'Observables']
    }
  ];

  get categories(): string[] {
    return [...new Set(this.technologies.map(t => t.category))];
  }

  getTechnologiesByCategory(category: string): Technology[] {
    return this.technologies.filter(t => t.category === category);
  }

  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Editores': 'from-slate-500 to-slate-600',
      'IA & Asistentes': 'from-violet-500 to-purple-600',
      'Frontend': 'from-blue-500 to-cyan-600',
      'Backend': 'from-green-500 to-emerald-600',
      'Bases de Datos': 'from-orange-500 to-amber-600',
      'Testing & QA': 'from-pink-500 to-rose-600',
      'Build & Deploy': 'from-indigo-500 to-blue-600',
      'Documentación': 'from-yellow-500 to-orange-500',
      'Librerías': 'from-teal-500 to-green-600'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  }

  toggleStack(): void {
    this.showStack = !this.showStack;
  }
}
