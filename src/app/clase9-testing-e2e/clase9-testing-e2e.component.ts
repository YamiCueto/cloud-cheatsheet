import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface TestLevel {
  name: string;
  icon: string;
  description: string;
  scope: string;
  tools: string[];
  pros: string[];
  cons: string[];
  color: string;
}

interface Example {
  title: string;
  description: string;
  testType: string;
  badPrompt: {
    text: string;
    problems: string[];
  };
  goodPrompt: {
    text: string;
    benefits: string[];
  };
  testCode: string;
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

interface Tip {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-clase9-testing-e2e',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './clase9-testing-e2e.component.html',
  styleUrls: [
    '../shared-presentation.css',
    './clase9-testing-e2e.component.css'
  ]
})
export class Clase9TestingE2eComponent {
  activeSlide = 0;

  slides = [
    { type: 'title', title: 'Clase 9' },
    { type: 'theory', title: '¿Por qué Testing E2E del Stack Completo?' },
    { type: 'tools', title: 'Niveles de Testing' },
    { type: 'examples', title: 'Tests sobre Stack Real' },
    { type: 'process', title: 'Proceso de 7 Pasos' },
    { type: 'template', title: 'Template Reutilizable' },
    { type: 'challenges', title: 'Desafíos Prácticos' },
    { type: 'tips', title: 'Tips Profesionales' },
    { type: 'summary', title: 'Resumen y Entregables' }
  ];

  theoryPoints = [
    {
      icon: '🎯',
      title: 'Testing Integrado Real',
      color: 'green',
      description: 'Probar el stack completo que TÚ construiste (Backend Clase 6 + Frontend Angular Clase 8).',
      items: [
        'Backend Spring Boot con H2 funcionando (Clase 6)',
        'Frontend Angular consumiendo API (Clase 8)',
        'Tests unitarios, integración y E2E sobre código real',
        'Validar flujo completo: UI → API → Base de datos',
        'Detectar errores de integración temprano'
      ]
    },
    {
      icon: '🔬',
      title: 'Pirámide de Testing',
      color: 'blue',
      description: '3 niveles de tests: Unitarios (rápidos) → Integración (moderados) → E2E (lentos).',
      items: [
        'Unitarios: Services, funciones puras (70%)',
        'Integración: API endpoints con base de datos (20%)',
        'E2E: Flujos completos UI → Backend (10%)',
        'Mayor cobertura != mejor calidad',
        'Balance: velocidad vs confianza'
      ]
    },
    {
      icon: '🤖',
      title: 'IA para Generar Tests',
      color: 'purple',
      description: 'Usa IA para crear suites completas a partir de tu código existente.',
      items: [
        'Input: Código de Service/Component/Controller',
        'Output: Tests con mocks, assertions, edge cases',
        'Detecta casos borde que olvidarías manualmente',
        'Genera datos de prueba sintéticos realistas',
        'Reduce tiempo de escritura de tests 70%'
      ]
    },
    {
      icon: '⚡',
      title: 'Tests Ejecutables Inmediatamente',
      color: 'orange',
      description: 'Suite completa lista para correr con npm test / mvn test.',
      items: [
        'Jasmine/Karma para Angular (frontend)',
        'JUnit + Mockito para Spring Boot (backend)',
        'Cypress para E2E (flujos completos)',
        'Tests verde = stack funcionando correctamente',
        'Tests rojo = detectaste un bug antes de producción'
      ]
    }
  ];

  testLevels: TestLevel[] = [
    {
      name: 'Tests Unitarios',
      icon: '🧪',
      description: 'Prueban funciones/métodos aislados sin dependencias externas.',
      scope: 'Services, componentes, funciones puras',
      tools: ['Jasmine', 'Karma', 'JUnit', 'Mockito'],
      pros: [
        'Muy rápidos (milisegundos)',
        'Fáciles de mantener',
        'Aislan el problema exacto',
        'Mayor cantidad en la pirámide (70%)',
        'Ejecutan en CI/CD sin problemas'
      ],
      cons: [
        'No prueban integración',
        'Requieren mocks/stubs',
        'Falso positivo: unitario pasa pero integración falla',
        'No validan flujo completo'
      ],
      color: 'green'
    },
    {
      name: 'Tests de Integración',
      icon: '🔗',
      description: 'Prueban comunicación entre componentes/capas (Controller + Service + DB).',
      scope: 'API endpoints, repositorios, servicios con dependencias',
      tools: ['Spring Boot Test', '@SpringBootTest', 'TestRestTemplate', 'MockMvc'],
      pros: [
        'Validan comunicación real entre capas',
        'Detectan errores de configuración',
        'Prueban queries SQL/JPA reales',
        'Moderadamente rápidos (segundos)',
        'Cobertura crítica de negocio'
      ],
      cons: [
        'Más lentos que unitarios',
        'Requieren base de datos de prueba',
        'Más complejos de configurar',
        'Pueden ser frágiles (cambios en DB/API)'
      ],
      color: 'blue'
    },
    {
      name: 'Tests E2E (End-to-End)',
      icon: '🎭',
      description: 'Simulan usuario real interactuando con la UI completa.',
      scope: 'Flujos completos: Login → CRUD → Logout',
      tools: ['Cypress', 'Playwright', 'Selenium', 'Puppeteer'],
      pros: [
        'Validan flujo completo como usuario real',
        'Detectan errores de integración UI-Backend',
        'Capturan screenshots/videos de fallos',
        'Confianza máxima: "funciona end-to-end"',
        'Documentan flujos críticos visualmente'
      ],
      cons: [
        'Muy lentos (minutos)',
        'Frágiles: cambios UI rompen tests',
        'Difíciles de debuggear',
        'Requieren backend + frontend levantados',
        'Menor cantidad en pirámide (10%)'
      ],
      color: 'orange'
    }
  ];

  examples: Example[] = [
    {
      title: '🧪 Test Unitario - ClienteService (Angular)',
      description: 'Prueba aislada del servicio que consume API sin hacer HTTP real.',
      testType: 'Unitario',
      badPrompt: {
        text: '❌ Crear tests para el servicio de clientes',
        problems: [
          'No especifica qué probar (CRUD completo? Un método?)',
          'No menciona framework de testing (Jasmine? Jest?)',
          'No indica si necesita mocks (HttpClient)',
          'IA podría generar tests incompletos',
          'Sin contexto de código existente'
        ]
      },
      goodPrompt: {
        text: `✅ Genera tests unitarios Jasmine/Karma para mi ClienteService de Angular que tiene estos métodos:

**Código del Service:**
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class ClienteService {
  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getCliente(id: number): Observable<Cliente> {
    return \`\${this.apiUrl}/\${id}\`;
  }

  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  updateCliente(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(\`\${this.apiUrl}/\${id}\`, cliente);
  }

  deleteCliente(id: number): Observable<void> {
    return this.http.delete<void>(\`\${this.apiUrl}/\${id}\`);
  }
}
\`\`\`

**Requerimientos:**
- Mock HttpClient con HttpClientTestingModule
- Test para cada método CRUD (5 tests)
- Validar URL correcta y método HTTP
- Verificar que retorna Observable con tipo correcto
- Caso exitoso (200) y error (404, 500)
- Assertions con .toBe(), .toEqual(), .toHaveBeenCalledWith()

**Entregable:**
Archivo cliente.service.spec.ts completo con describe/it/expect.`,
        benefits: [
          'Provee código completo del Service a probar',
          'Especifica Jasmine/Karma (framework Angular)',
          'Lista casos: éxito y error (404, 500)',
          'Menciona mocks necesarios (HttpClientTestingModule)',
          'Define assertions esperadas',
          'Formato claro: 5 métodos = 5 tests'
        ]
      },
      testCode: `import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.model';

describe('ClienteService', () => {
  let service: ClienteService;
  let httpMock: HttpTestingController;
  const apiUrl = 'http://localhost:8080/api/clientes';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService]
    });
    service = TestBed.inject(ClienteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica no quedan requests pendientes
  });

  it('should retrieve all clientes', () => {
    const mockClientes: Cliente[] = [
      { id: 1, nombre: 'Juan Pérez', email: 'juan@test.com', telefono: '1234567890' },
      { id: 2, nombre: 'María López', email: 'maria@test.com', telefono: '0987654321' }
    ];

    service.getClientes().subscribe(clientes => {
      expect(clientes.length).toBe(2);
      expect(clientes).toEqual(mockClientes);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockClientes);
  });

  it('should create a new cliente', () => {
    const newCliente: Cliente = { id: 3, nombre: 'Pedro Gómez', email: 'pedro@test.com', telefono: '1112223333' };

    service.createCliente(newCliente).subscribe(cliente => {
      expect(cliente).toEqual(newCliente);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newCliente);
    req.flush(newCliente);
  });

  it('should handle 404 error when getting cliente', () => {
    const clienteId = 999;

    service.getCliente(clienteId).subscribe(
      () => fail('should have failed with 404 error'),
      (error) => {
        expect(error.status).toBe(404);
      }
    );

    const req = httpMock.expectOne(\`\${apiUrl}/\${clienteId}\`);
    req.flush('Not Found', { status: 404, statusText: 'Not Found' });
  });
});`
    },
    {
      title: '🔗 Test de Integración - API /api/clientes (Spring Boot)',
      description: 'Prueba endpoint real con base de datos H2 en memoria.',
      testType: 'Integración',
      badPrompt: {
        text: '❌ Tests para la API de clientes',
        problems: [
          'No especifica Spring Boot Test',
          'No menciona qué endpoints probar',
          'No indica base de datos de prueba (H2)',
          'Sin contexto de estructura del Controller',
          'No define assertions esperadas'
        ]
      },
      goodPrompt: {
        text: `✅ Genera tests de integración Spring Boot para mi ClienteController que expone estos endpoints:

**Código del Controller:**
\`\`\`java
@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
  @Autowired
  private ClienteService service;

  @GetMapping
  public List<Cliente> getAllClientes() {
    return service.findAll();
  }

  @PostMapping
  public Cliente createCliente(@RequestBody Cliente cliente) {
    return service.save(cliente);
  }

  @PutMapping("/{id}")
  public Cliente updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
    return service.update(id, cliente);
  }

  @DeleteMapping("/{id}")
  public void deleteCliente(@PathVariable Long id) {
    service.delete(id);
  }
}
\`\`\`

**Requerimientos:**
- @SpringBootTest con @AutoConfigureMockMvc
- Base de datos H2 en memoria (test profile)
- TestRestTemplate o MockMvc para requests
- @BeforeEach para limpiar DB y crear datos iniciales
- Test para cada endpoint: GET, POST, PUT, DELETE
- Validar status codes (200, 201, 404)
- Assertions sobre body JSON (nombre, email, telefono)

**Entregable:**
Archivo ClienteControllerTest.java con @Test completos.`,
        benefits: [
          'Provee código completo del Controller',
          'Especifica @SpringBootTest (testing Spring)',
          'Menciona H2 en memoria (no DB real)',
          'Lista endpoints exactos a probar',
          'Define setup inicial (@BeforeEach)',
          'Assertions claras: status + body JSON'
        ]
      },
      testCode: `@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class ClienteControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @Autowired
  private ClienteRepository repository;

  @BeforeEach
  void setUp() {
    repository.deleteAll();
    repository.save(new Cliente(null, "Juan Pérez", "juan@test.com", "1234567890"));
    repository.save(new Cliente(null, "María López", "maria@test.com", "0987654321"));
  }

  @Test
  void shouldGetAllClientes() throws Exception {
    mockMvc.perform(get("/api/clientes"))
      .andExpect(status().isOk())
      .andExpect(jsonPath("$.length()").value(2))
      .andExpect(jsonPath("$[0].nombre").value("Juan Pérez"))
      .andExpect(jsonPath("$[1].email").value("maria@test.com"));
  }

  @Test
  void shouldCreateCliente() throws Exception {
    String newClienteJson = "{\\"nombre\\":\\"Pedro Gómez\\",\\"email\\":\\"pedro@test.com\\",\\"telefono\\":\\"1112223333\\"}";

    mockMvc.perform(post("/api/clientes")
        .contentType(MediaType.APPLICATION_JSON)
        .content(newClienteJson))
      .andExpect(status().isCreated())
      .andExpect(jsonPath("$.nombre").value("Pedro Gómez"))
      .andExpect(jsonPath("$.id").exists());

    assertEquals(3, repository.count());
  }

  @Test
  void shouldReturn404WhenClienteNotFound() throws Exception {
    mockMvc.perform(get("/api/clientes/999"))
      .andExpect(status().isNotFound());
  }

  @Test
  void shouldDeleteCliente() throws Exception {
    Cliente cliente = repository.findAll().get(0);

    mockMvc.perform(delete("/api/clientes/" + cliente.getId()))
      .andExpect(status().isNoContent());

    assertEquals(1, repository.count());
  }
}`
    }
  ];

  process: Step[] = [
    {
      number: 1,
      title: 'Identificar Código a Probar',
      description: 'Selecciona Services (Angular) y Controllers (Spring Boot) críticos.',
      action: 'Listar: ClienteService, ProductoService, ClienteController, etc.',
      tip: 'Prioriza lógica de negocio (validaciones, cálculos) sobre código trivial (getters/setters).'
    },
    {
      number: 2,
      title: 'Elegir Nivel de Testing',
      description: 'Decide: unitario (Service aislado), integración (API+DB), o E2E (UI completo).',
      action: 'Unitarios para Services, Integración para Controllers, E2E para flujos críticos.',
      tip: 'Comienza con unitarios (rápidos), luego integración, finalmente E2E (lentos).'
    },
    {
      number: 3,
      title: 'Generar Tests con IA',
      description: 'Provee código fuente completo + framework + casos a cubrir.',
      action: 'Prompt: "Genera tests Jasmine para este Service con casos: éxito, error 404, error 500".',
      tip: 'Incluye código completo del método a probar (no solo firma).'
    },
    {
      number: 4,
      title: 'Configurar Entorno de Tests',
      description: 'Setup de mocks (HttpClientTestingModule) o DB prueba (H2).',
      action: 'Angular: TestBed.configureTestingModule. Spring Boot: @SpringBootTest + H2.',
      tip: 'Aísla tests: @BeforeEach para limpiar estado, @AfterEach para verificar.'
    },
    {
      number: 5,
      title: 'Ejecutar y Validar',
      description: 'Corre suite completa: ng test (Angular), mvn test (Spring Boot).',
      action: 'Verdes = código funciona. Rojos = bugs detectados (arreglar código).',
      tip: 'No modifiques tests para pasar: tests exponen bugs reales.'
    },
    {
      number: 6,
      title: 'Agregar Tests E2E con Cypress',
      description: 'Flujos completos: Login → Crear cliente → Editar → Eliminar → Logout.',
      action: 'Cypress: cy.visit(), cy.get(), cy.type(), cy.click(), cy.contains().',
      tip: 'E2E solo para flujos críticos (1-3 flujos), no todos los casos.'
    },
    {
      number: 7,
      title: 'Documentar Cobertura',
      description: 'Genera reporte: ng test --code-coverage, mvn jacoco:report.',
      action: 'Objetivo: >70% cobertura en lógica de negocio (no getters/setters).',
      tip: '100% cobertura != calidad. Mejor 70% con casos reales que 100% triviales.'
    }
  ];

  challenges: Challenge[] = [
    {
      level: 'Fácil',
      difficulty: '🟢 Principiante',
      color: 'green',
      title: 'Tests Unitarios ClienteService',
      description: 'Genera suite completa de tests para ClienteService (5 métodos CRUD).',
      requirements: [
        'Usa Jasmine/Karma (Angular)',
        'Mock HttpClient con HttpClientTestingModule',
        'Test para: getClientes, getCliente, createCliente, updateCliente, deleteCliente',
        'Validar método HTTP correcto (GET, POST, PUT, DELETE)',
        'Caso éxito (200) y error (404)',
        'Archivo: cliente.service.spec.ts completo'
      ],
      hints: [
        'TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })',
        'httpMock = TestBed.inject(HttpTestingController)',
        'httpMock.expectOne(url) para capturar request',
        'req.flush(mockData) para simular respuesta',
        'req.flush(errorMsg, { status: 404 }) para error'
      ],
      expectedOutcome: 'Suite de 10+ tests (5 éxito + 5 error) pasando en verde.'
    },
    {
      level: 'Intermedio',
      difficulty: '🟡 Intermedio',
      color: 'orange',
      title: 'Tests de Integración API Spring Boot',
      description: 'Prueba endpoints /api/clientes con base de datos H2 real.',
      requirements: [
        'Usa @SpringBootTest con MockMvc',
        'Base de datos H2 en memoria (test profile)',
        '@BeforeEach para limpiar DB y crear datos iniciales',
        'Test para GET, POST, PUT, DELETE',
        'Validar status codes: 200, 201, 404, 400',
        'Assertions sobre JSON response (jsonPath)',
        'Archivo: ClienteControllerTest.java completo'
      ],
      hints: [
        '@AutoConfigureMockMvc para inyectar MockMvc',
        'mockMvc.perform(get("/api/clientes")).andExpect(status().isOk())',
        'jsonPath("$[0].nombre").value("Juan") para validar JSON',
        'repository.deleteAll() en @BeforeEach',
        'application-test.properties con H2: spring.datasource.url=jdbc:h2:mem:testdb'
      ],
      expectedOutcome: 'Suite de 8+ tests de integración pasando con DB H2 en memoria.'
    },
    {
      level: 'Avanzado',
      difficulty: '🔴 Avanzado',
      color: 'red',
      title: 'Tests E2E con Cypress',
      description: 'Flujo completo: Abrir app → Listar clientes → Crear nuevo → Editar → Eliminar.',
      requirements: [
        'Instalar Cypress: npm install cypress --save-dev',
        'Backend levantado en localhost:8080',
        'Frontend Angular en localhost:4200',
        'Flujo: cy.visit → cy.get → cy.type → cy.click → cy.contains',
        'Validar tabla actualizada después de crear/editar/eliminar',
        'Screenshots en caso de fallo',
        'Archivo: cliente.cy.ts con describe/it'
      ],
      hints: [
        'cy.visit("http://localhost:4200")',
        'cy.get("input[name=nombre]").type("Juan Pérez")',
        'cy.get("button[type=submit]").click()',
        'cy.contains("td", "Juan Pérez").should("exist")',
        'cy.intercept("POST", "/api/clientes").as("createCliente")',
        'cy.wait("@createCliente").its("response.statusCode").should("eq", 201)'
      ],
      expectedOutcome: 'Test E2E completo ejecutándose en Cypress con video del flujo.'
    }
  ];

  tips: Tip[] = [
    {
      icon: '🎯',
      title: 'Pirámide de Testing',
      description: '70% unitarios (rápidos), 20% integración (moderados), 10% E2E (lentos). No inviertas la pirámide.'
    },
    {
      icon: '🧪',
      title: 'Tests Antes de Código',
      description: 'TDD con IA: genera tests primero (casos esperados), luego código que los pase. Detecta bugs antes.'
    },
    {
      icon: '🚫',
      title: 'No Modifiques Tests para Pasar',
      description: 'Test rojo = código tiene bug. Arregla el código, no el test. Tests son la verdad.'
    },
    {
      icon: '💡',
      title: 'Mocks vs Tests Reales',
      description: 'Unitarios: mocks (rápidos). Integración: DB real H2 (confianza). Balance ambos.'
    },
    {
      icon: '📊',
      title: 'Cobertura != Calidad',
      description: '70% cobertura con casos reales > 100% cobertura con tests triviales (getters/setters).'
    },
    {
      icon: '⚡',
      title: 'Tests Rápidos = Tests Ejecutados',
      description: 'Suite lenta (>5min) = nadie la ejecuta. Optimiza: paralelize, mocks, skip E2E en local.'
    },
    {
      icon: '🔍',
      title: 'Casos Borde con IA',
      description: 'IA detecta edge cases que olvidas: null, vacío, negativo, overflow, caracteres especiales.'
    },
    {
      icon: '🎬',
      title: 'E2E Solo para Críticos',
      description: 'Flujos críticos de negocio (login, pago, registro). No pruebes todo con E2E (muy lento).'
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
