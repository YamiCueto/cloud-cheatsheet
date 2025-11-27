import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Example {
  title: string;
  description: string;
  legacyCode: string;
  apiEndpoints: string;
  badPrompt: {
    text: string;
    problems: string[];
  };
  goodPrompt: {
    text: string;
    benefits: string[];
  };
}

interface Step {
  number: number;
  title: string;
  description: string;
  action: string;
  tip: string;
}

interface Challenge {
  level: 'Fácil' | 'Intermedio' | 'Avanzado';
  difficulty: string;
  color: string;
  title: string;
  description: string;
  requirements: string[];
  hints: string[];
  expectedOutcome: string;
}

interface Tool {
  name: string;
  icon: string;
  description: string;
  pros: string[];
  cons: string[];
  color: string;
}

@Component({
  selector: 'app-clase7-frontend-legacy-vanilla',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clase7-frontend-legacy-vanilla.component.html',
  styleUrls: [
    '../shared-presentation.css',
    './clase7-frontend-legacy-vanilla.component.css'
  ]
})
export class Clase7FrontendLegacyVanillaComponent {
  activeSlide = 0;

  slides = [
    { type: 'title', title: 'Clase 7' },
    { type: 'theory', title: '¿Por qué Frontend Legacy?' },
    { type: 'tools', title: 'Stack Legacy vs Moderno' },
    { type: 'examples', title: 'CRUD Clientes Vanilla JS' },
    { type: 'process', title: 'Proceso de 7 Pasos' },
    { type: 'template', title: 'Template Reutilizable' },
    { type: 'challenges', title: 'Desafíos Prácticos' },
    { type: 'tips', title: 'Tips Profesionales' },
    { type: 'summary', title: 'Resumen y Entregables' }
  ];

  theoryPoints = [
    {
      icon: '📜',
      title: 'Comprender el Pasado',
      color: 'amber',
      description: 'Antes de modernizar, debes entender cómo funcionaban las apps legacy.',
      items: [
        'Vanilla JS: DOM manipulation directa (document.getElementById)',
        'Event listeners inline y variables globales',
        'localStorage para persistencia temporal',
        'fetch() sin abstracciones para llamadas HTTP',
        'Lógica de negocio mezclada con UI'
      ]
    },
    {
      icon: '🔗',
      title: 'Consumo de API Real',
      color: 'green',
      description: 'Conectar con el Backend de Clase 6 (Spring Boot API Clientes).',
      items: [
        'GET /api/clientes → Listar todos los clientes',
        'POST /api/clientes → Crear nuevo cliente',
        'PUT /api/clientes/{id} → Actualizar cliente',
        'DELETE /api/clientes/{id} → Eliminar cliente',
        'Manejo de errores HTTP (400, 404, 500)'
      ]
    },
    {
      icon: '🎯',
      title: 'Base para Migración',
      color: 'blue',
      description: 'Este código legacy será el que migrarás a Angular en Clase 8.',
      items: [
        'App funcional completa (no ejemplo ficticio)',
        'Código real que TÚ generaste con IA',
        'Casos de uso claros: CRUD operando',
        'Errores típicos de apps legacy (código espagueti)',
        'Oportunidad de mejora evidente'
      ]
    },
    {
      icon: '⚡',
      title: 'IA para Legacy Code',
      color: 'orange',
      description: 'Aprende a generar código legacy realista (no código moderno).',
      items: [
        'Prompt específico: "Vanilla JS sin frameworks"',
        'Solicitar anti-patterns intencionalmente',
        'innerHTML, event listeners inline, variables globales',
        'Código funcional pero no escalable',
        'Simular deuda técnica real'
      ]
    }
  ];

  legacyVsModern: Tool[] = [
    {
      name: 'Vanilla JavaScript',
      icon: '📜',
      description: 'JavaScript puro sin frameworks ni librerías.',
      pros: [
        'Cero dependencias (no npm install)',
        'Carga rápida (sin bundles)',
        'Compatible con cualquier navegador',
        'Simplicidad para apps pequeñas'
      ],
      cons: [
        'DOM manipulation manual (verbose)',
        'Sin reactividad (actualización manual)',
        'Sin modularización clara (archivos únicos)',
        'Difícil de testear y mantener',
        'Código espagueti en apps grandes'
      ],
      color: 'amber'
    },
    {
      name: 'HTML/CSS Simple',
      icon: '🎨',
      description: 'Estructura y estilos básicos sin preprocessors.',
      pros: [
        'Sin compiladores (CSS directo)',
        'Fácil de entender para principiantes',
        'Compatible con todos los navegadores'
      ],
      cons: [
        'Sin variables CSS organizadas',
        'Estilos repetitivos (no DRY)',
        'Sin componentización de estilos',
        'Difícil mantener consistencia'
      ],
      color: 'cyan'
    },
    {
      name: 'fetch() API',
      icon: '🔌',
      description: 'API nativa del navegador para HTTP requests.',
      pros: [
        'Nativo del navegador (no axios/HttpClient)',
        'Promesas modernas (async/await)',
        'Suficiente para APIs REST simples'
      ],
      cons: [
        'Sin interceptors (manejo auth manual)',
        'Sin retry automático en errores',
        'Sin caching inteligente',
        'Repetición de headers en cada llamada'
      ],
      color: 'green'
    },
    {
      name: 'localStorage',
      icon: '💾',
      description: 'Almacenamiento clave-valor en el navegador.',
      pros: [
        'Persistencia simple entre sesiones',
        'API sencilla (setItem/getItem)',
        'Sincrónico (no async/await)'
      ],
      cons: [
        'Solo strings (serializar objetos)',
        'Límite de 5-10MB por dominio',
        'Sin estructura ni validaciones',
        'Acceso global (no encapsulado)'
      ],
      color: 'purple'
    }
  ];

  mainExample: Example = {
    title: '📋 CRUD Clientes Vanilla JS + API Spring Boot',
    description: 'App legacy completa que consume los 5 endpoints de la Clase 6 (Backend).',
    apiEndpoints: `Endpoints de la API (Clase 6 - Spring Boot)
Base URL: http://localhost:8080

GET     /api/clientes           →  Listar todos los clientes
POST    /api/clientes           →  Crear nuevo cliente (body JSON)
GET     /api/clientes/{id}      →  Obtener un cliente por ID
PUT     /api/clientes/{id}      →  Actualizar cliente existente
DELETE  /api/clientes/{id}      →  Eliminar cliente`,
    badPrompt: {
      text: '❌ Crear una app para gestionar clientes',
      problems: [
        'No especifica tecnología (¿React? Angular? Vanilla?)',
        'No menciona la API existente a consumir',
        'No define estructura HTML ni estilos',
        'IA podría generar código moderno (no legacy)',
        'Sin contexto de deuda técnica intencional'
      ]
    },
    goodPrompt: {
      text: `✅ Genera una aplicación web CRUD de clientes en Vanilla JavaScript puro (sin frameworks) que consuma la siguiente API REST:

**Contexto:**
- Backend ya existe: Spring Boot API corriendo en http://localhost:8080
- Endpoints disponibles:
  * GET /api/clientes (listar todos)
  * POST /api/clientes (crear, body JSON: {nombre, email, telefono})
  * PUT /api/clientes/{id} (actualizar)
  * DELETE /api/clientes/{id} (eliminar)
- Modelo Cliente: {id, nombre, email, telefono}

**Requerimientos técnicos:**
- HTML en un solo archivo index.html
- CSS inline o en <style> tag (sin archivos externos)
- JavaScript puro en <script> tag (sin módulos ES6)
- fetch() para llamadas HTTP (incluir headers JSON)
- DOM manipulation con document.getElementById/querySelector
- Event listeners inline (onclick) o .addEventListener
- Tabla HTML para mostrar clientes (con botones Editar/Eliminar)
- Formulario para Crear/Actualizar (reusar mismo form)
- localStorage para guardar cliente en edición temporalmente
- Variables globales para estado (clienteEditando, etc)
- Manejo básico de errores (alert/console.log)

**Características legacy intencionales (anti-patterns):**
- Código en un solo archivo (no modular)
- innerHTML para actualizar tabla completa
- Sin validaciones cliente complejas
- Lógica mezclada con presentación
- Sin componentes reutilizables
- Variables globales para estado
- Callbacks anidados (no async/await limpio)

**Entregable:**
Archivo index.html completo (<300 líneas) con HTML + CSS + JS funcional que permita:
1. Ver lista de clientes en tabla
2. Crear nuevo cliente con formulario
3. Editar cliente existente (cargar datos en form)
4. Eliminar cliente con confirmación
5. Manejo de errores HTTP (mostrar alert)`,
      benefits: [
        'Especifica Vanilla JS explícitamente (no frameworks)',
        'Define API existente con endpoints exactos',
        'Lista anti-patterns deseados (código legacy realista)',
        'Estructura clara: un solo archivo HTML+CSS+JS',
        'Incluye modelo de datos (Cliente)',
        'Manejo de errores HTTP especificado',
        'Contexto pedagógico: base para migración Clase 8'
      ]
    },
    legacyCode: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gestión de Clientes - Legacy App</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #f0f2f5; padding: 20px; }
    .container { max-width: 900px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    h1 { color: #333; margin-bottom: 30px; text-align: center; }
    .form-section { background: #f8f9fa; padding: 20px; border-radius: 6px; margin-bottom: 30px; }
    .form-section h2 { color: #555; margin-bottom: 15px; font-size: 1.2rem; }
    .form-group { margin-bottom: 15px; }
    .form-group label { display: block; margin-bottom: 5px; color: #666; font-weight: bold; }
    .form-group input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 14px; }
    .btn { padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; transition: all 0.3s; }
    .btn-primary { background: #007bff; color: white; }
    .btn-primary:hover { background: #0056b3; }
    .btn-success { background: #28a745; color: white; }
    .btn-success:hover { background: #1e7e34; }
    .btn-danger { background: #dc3545; color: white; }
    .btn-danger:hover { background: #c82333; }
    .btn-secondary { background: #6c757d; color: white; margin-left: 10px; }
    .btn-secondary:hover { background: #545b62; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
    thead { background: #007bff; color: white; }
    th, td { padding: 12px; text-align: left; border-bottom: 1px solid #dee2e6; }
    tbody tr:hover { background: #f8f9fa; }
    .actions { display: flex; gap: 10px; }
    .loading { text-align: center; color: #666; padding: 20px; }
    .error { background: #f8d7da; color: #721c24; padding: 10px; border-radius: 4px; margin-bottom: 15px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏢 Sistema de Gestión de Clientes</h1>

    <!-- Formulario -->
    <div class="form-section">
      <h2 id="form-title">➕ Agregar Nuevo Cliente</h2>
      <div id="error-message" class="error" style="display: none;"></div>

      <form id="cliente-form">
        <input type="hidden" id="cliente-id">

        <div class="form-group">
          <label for="nombre">Nombre Completo *</label>
          <input type="text" id="nombre" required>
        </div>

        <div class="form-group">
          <label for="email">Email *</label>
          <input type="email" id="email" required>
        </div>

        <div class="form-group">
          <label for="telefono">Teléfono</label>
          <input type="tel" id="telefono">
        </div>

        <button type="submit" class="btn btn-primary" id="submit-btn">Guardar Cliente</button>
        <button type="button" class="btn btn-secondary" id="cancel-btn" style="display: none;">Cancelar</button>
      </form>
    </div>

    <!-- Tabla de Clientes -->
    <div>
      <h2>📋 Lista de Clientes</h2>
      <div id="loading" class="loading" style="display: none;">Cargando clientes...</div>
      <table id="clientes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="clientes-tbody">
          <!-- Filas dinámicas con JS -->
        </tbody>
      </table>
    </div>
  </div>

  <script>
    // Variables globales (anti-pattern legacy)
    const API_BASE_URL = 'http://localhost:8080/api/clientes';
    let clienteEditando = null;

    // Cargar clientes al iniciar
    document.addEventListener('DOMContentLoaded', function() {
      cargarClientes();

      // Event listener del formulario
      document.getElementById('cliente-form').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarCliente();
      });

      // Cancelar edición
      document.getElementById('cancel-btn').addEventListener('click', function() {
        cancelarEdicion();
      });
    });

    // Función para cargar clientes (GET)
    function cargarClientes() {
      document.getElementById('loading').style.display = 'block';
      document.getElementById('clientes-tbody').innerHTML = '';

      fetch(API_BASE_URL)
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al cargar clientes: ' + response.status);
          }
          return response.json();
        })
        .then(clientes => {
          document.getElementById('loading').style.display = 'none';
          mostrarClientes(clientes);
        })
        .catch(error => {
          document.getElementById('loading').style.display = 'none';
          console.error('Error:', error);
          alert('Error al cargar clientes. Asegúrate de que el backend esté corriendo en http://localhost:8080');
        });
    }

    // Mostrar clientes en tabla (innerHTML - anti-pattern)
    function mostrarClientes(clientes) {
      const tbody = document.getElementById('clientes-tbody');

      if (clientes.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #999;">No hay clientes registrados</td></tr>';
        return;
      }

      let html = '';
      clientes.forEach(cliente => {
        html += \`
          <tr>
            <td>\${cliente.id}</td>
            <td>\${cliente.nombre}</td>
            <td>\${cliente.email}</td>
            <td>\${cliente.telefono || 'N/A'}</td>
            <td class="actions">
              <button class="btn btn-success" onclick="editarCliente(\${cliente.id})">Editar</button>
              <button class="btn btn-danger" onclick="eliminarCliente(\${cliente.id})">Eliminar</button>
            </td>
          </tr>
        \`;
      });

      tbody.innerHTML = html;
    }

    // Guardar cliente (POST o PUT)
    function guardarCliente() {
      const id = document.getElementById('cliente-id').value;
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const telefono = document.getElementById('telefono').value.trim();

      if (!nombre || !email) {
        mostrarError('Nombre y Email son obligatorios');
        return;
      }

      const cliente = { nombre, email, telefono };
      const isEditing = id !== '';
      const url = isEditing ? \`\${API_BASE_URL}/\${id}\` : API_BASE_URL;
      const method = isEditing ? 'PUT' : 'POST';

      fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al guardar: ' + response.status);
          }
          return response.json();
        })
        .then(() => {
          limpiarFormulario();
          cargarClientes();
          alert(isEditing ? 'Cliente actualizado exitosamente' : 'Cliente creado exitosamente');
        })
        .catch(error => {
          console.error('Error:', error);
          mostrarError('Error al guardar cliente. Verifica los datos e intenta nuevamente.');
        });
    }

    // Editar cliente (GET by ID + cargar form)
    function editarCliente(id) {
      fetch(\`\${API_BASE_URL}/\${id}\`)
        .then(response => response.json())
        .then(cliente => {
          clienteEditando = cliente;
          document.getElementById('cliente-id').value = cliente.id;
          document.getElementById('nombre').value = cliente.nombre;
          document.getElementById('email').value = cliente.email;
          document.getElementById('telefono').value = cliente.telefono || '';
          document.getElementById('form-title').textContent = '✏️ Editar Cliente';
          document.getElementById('submit-btn').textContent = 'Actualizar Cliente';
          document.getElementById('cancel-btn').style.display = 'inline-block';
          document.getElementById('error-message').style.display = 'none';

          // Scroll al formulario
          document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error al cargar datos del cliente');
        });
    }

    // Eliminar cliente (DELETE)
    function eliminarCliente(id) {
      if (!confirm('¿Estás seguro de eliminar este cliente?')) {
        return;
      }

      fetch(\`\${API_BASE_URL}/\${id}\`, {
        method: 'DELETE'
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al eliminar: ' + response.status);
          }
          cargarClientes();
          alert('Cliente eliminado exitosamente');
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Error al eliminar cliente');
        });
    }

    // Cancelar edición
    function cancelarEdicion() {
      limpiarFormulario();
    }

    // Limpiar formulario
    function limpiarFormulario() {
      clienteEditando = null;
      document.getElementById('cliente-form').reset();
      document.getElementById('cliente-id').value = '';
      document.getElementById('form-title').textContent = '➕ Agregar Nuevo Cliente';
      document.getElementById('submit-btn').textContent = 'Guardar Cliente';
      document.getElementById('cancel-btn').style.display = 'none';
      document.getElementById('error-message').style.display = 'none';
    }

    // Mostrar error
    function mostrarError(mensaje) {
      const errorDiv = document.getElementById('error-message');
      errorDiv.textContent = mensaje;
      errorDiv.style.display = 'block';
      setTimeout(() => {
        errorDiv.style.display = 'none';
      }, 5000);
    }
  </script>
</body>
</html>`
  };

  process: Step[] = [
    {
      number: 1,
      title: 'Analizar la API Backend',
      description: 'Revisa los endpoints disponibles de la Clase 6 (Spring Boot).',
      action: 'Documentar: URL base, métodos HTTP, cuerpos JSON, respuestas esperadas.',
      tip: 'Usa Swagger UI (http://localhost:8080/swagger-ui.html) para explorar la API antes de codificar.'
    },
    {
      number: 2,
      title: 'Diseñar la Estructura HTML',
      description: 'Define los elementos UI: formulario, tabla, botones.',
      action: 'Crear wireframe mental: ¿Qué ve el usuario? ¿Dónde hace clic?',
      tip: 'Mantén simplicidad: una tabla para listar, un form para crear/editar.'
    },
    {
      number: 3,
      title: 'Generar Código Legacy con IA',
      description: 'Usa el prompt estructurado para pedir Vanilla JS puro.',
      action: 'Especificar: "sin frameworks", "innerHTML", "fetch()", "variables globales".',
      tip: 'Solicita anti-patterns intencionalmente (código espagueti realista).'
    },
    {
      number: 4,
      title: 'Implementar fetch() para CRUD',
      description: 'Conecta cada operación con su endpoint HTTP.',
      action: 'GET → listar, POST → crear, PUT → actualizar, DELETE → eliminar.',
      tip: 'Incluye headers { "Content-Type": "application/json" } en POST/PUT.'
    },
    {
      number: 5,
      title: 'Manejar Estado con Variables Globales',
      description: 'Guarda cliente en edición en variable global.',
      action: 'let clienteEditando = null; (antipattern legacy intencional).',
      tip: 'Esto es deuda técnica que arreglarás en Clase 8 con Angular Services.'
    },
    {
      number: 6,
      title: 'Probar CRUD Completo',
      description: 'Valida cada operación contra el backend real.',
      action: 'Crear → Ver en tabla → Editar → Actualizar → Eliminar.',
      tip: 'Abre DevTools Network tab para ver requests/responses HTTP.'
    },
    {
      number: 7,
      title: 'Documentar Deuda Técnica',
      description: 'Identifica problemas del código legacy para Clase 8.',
      action: 'Anotar: innerHTML, variables globales, falta de modularidad, sin tests.',
      tip: 'Esta lista será tu guía de refactoring en la próxima clase.'
    }
  ];

  challenges: Challenge[] = [
    {
      level: 'Fácil',
      difficulty: '🟢 Principiante',
      color: 'green',
      title: 'Agregar Búsqueda de Clientes',
      description: 'Implementa un input de búsqueda que filtre la tabla por nombre/email.',
      requirements: [
        'Input text con placeholder "Buscar cliente..."',
        'Filtrar tabla en tiempo real (sin llamar API)',
        'Usar .filter() sobre array de clientes cargados',
        'Actualizar tabla con innerHTML (mantener anti-pattern)'
      ],
      hints: [
        'Guarda clientes en variable global: let clientesCargados = [];',
        'Escucha evento "input" del campo búsqueda',
        'Filtra por nombre.includes() o email.includes()',
        'Reutiliza función mostrarClientes(clientesFiltrados)'
      ],
      expectedOutcome: 'Búsqueda funcional que filtra clientes localmente sin llamar al backend.'
    },
    {
      level: 'Intermedio',
      difficulty: '🟡 Intermedio',
      color: 'orange',
      title: 'Validaciones de Formulario',
      description: 'Agrega validaciones cliente antes de enviar al backend.',
      requirements: [
        'Email: validar formato con regex',
        'Teléfono: solo números, 10 dígitos exactos',
        'Nombre: mínimo 3 caracteres, sin números',
        'Mostrar mensajes de error específicos por campo'
      ],
      hints: [
        'Crea función validarFormulario() antes de fetch()',
        'Regex email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/',
        'Regex teléfono: /^\\d{10}$/',
        'Muestra errores en divs debajo de cada input'
      ],
      expectedOutcome: 'Formulario con validaciones cliente que previenen requests inválidos.'
    },
    {
      level: 'Avanzado',
      difficulty: '🔴 Avanzado',
      color: 'red',
      title: 'Paginación de Clientes',
      description: 'Implementa paginación local (10 clientes por página).',
      requirements: [
        'Mostrar solo 10 clientes por página',
        'Botones "Anterior" y "Siguiente"',
        'Indicador de página actual (ej: "Página 2 de 5")',
        'Navegación entre páginas sin llamar API',
        'Deshabilitar botones en primera/última página'
      ],
      hints: [
        'Variables globales: paginaActual = 1, clientesPorPagina = 10',
        'Calcular: inicio = (paginaActual - 1) * clientesPorPagina',
        'Usar .slice(inicio, inicio + clientesPorPagina)',
        'Actualizar estado onclick de botones'
      ],
      expectedOutcome: 'Sistema de paginación funcional con navegación entre páginas.'
    }
  ];

  tips = [
    {
      icon: '📖',
      title: 'Estudia la API Antes de Codificar',
      description: 'Usa Swagger UI (http://localhost:8080/swagger-ui.html) para ver endpoints, schemas, ejemplos de respuesta. Evita adivinanzas.'
    },
    {
      icon: '🎭',
      title: 'Acepta el Código Legacy',
      description: 'No intentes escribir código "perfecto". Este taller es para generar deuda técnica intencional que refactorizarás en Clase 8.'
    },
    {
      icon: '🔍',
      title: 'DevTools es tu Mejor Amigo',
      description: 'Abre Network tab para ver requests HTTP reales. Console tab para debuggear errores. Aprende a leer mensajes 400/404/500.'
    },
    {
      icon: '📝',
      title: 'Documenta los Anti-Patterns',
      description: 'Cada vez que uses innerHTML, variables globales, callbacks anidados: anótalo. Será tu checklist de refactoring en Clase 8.'
    },
    {
      icon: '🚀',
      title: 'Prompt para Código Funcional',
      description: 'Especifica: "código funcional completo, probado contra localhost:8080". IA debe generar index.html listo para abrir en navegador.'
    },
    {
      icon: '⚠️',
      title: 'CORS y Backend Levantado',
      description: 'Si ves errores CORS: agrega @CrossOrigin en Controllers. Si "net::ERR_CONNECTION_REFUSED": levanta el backend (mvn spring-boot:run).'
    },
    {
      icon: '💡',
      title: 'localStorage para Estado Temporal',
      description: 'Si necesitas "recordar" algo entre recargas: localStorage.setItem/getItem. Pero no reemplaces la API (siempre consulta backend).'
    },
    {
      icon: '🎯',
      title: 'Un Solo Archivo HTML',
      description: 'Mantén todo en index.html (CSS en <style>, JS en <script>). Esto simula apps legacy monolíticas sin build tools.'
    }
  ];

  nextSlide(): void {
    if (this.activeSlide < this.slides.length - 1) {
      this.activeSlide++;
    }
  }

  prevSlide(): void {
    if (this.activeSlide > 0) {
      this.activeSlide--;
    }
  }

  goToSlide(index: number): void {
    this.activeSlide = index;
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }
}
