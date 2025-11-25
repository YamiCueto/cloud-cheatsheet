import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Example {
  title: string;
  apiEndpoint: string;
  method: string;
  description: string;
  badPrompt: {
    text: string;
    problems: string[];
  };
  goodPrompt: {
    text: string;
    benefits: string[];
  };
  generatedTests: string;
}

interface Step {
  number: number;
  title: string;
  description: string;
  example?: string;
  tips: string[];
}

interface Challenge {
  id: number;
  difficulty: 'Fácil' | 'Intermedio' | 'Avanzado';
  title: string;
  api: string;
  endpoints: string[];
  requirements: string[];
  hints: string[];
  color: string;
}

interface Tool {
  name: string;
  icon: string;
  description: string;
  pros: string[];
  cons: string[];
  useCase: string;
}

@Component({
  selector: 'app-clase5-testing-apis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clase5-testing-apis.component.html',
  styleUrls: [
    '../clase6-crud-backend/clase6-crud-backend.component.css',
    './clase5-testing-apis.component.css'
  ]
})
export class Clase5TestingApisComponent {
  currentSlide = 0;
  expandedExample: number | null = null;
  expandedStep: number | null = null;
  expandedChallenge: number | null = null;
  expandedTool: number | null = null;

  slides = [
    { type: 'title', title: 'Clase 5' },
    { type: 'theory', title: '¿Por qué automatizar testing de APIs?' },
    { type: 'tools', title: 'Herramientas de API Testing' },
    { type: 'examples', title: 'De Endpoint a Test Suite' },
    { type: 'process', title: 'Proceso de 8 Pasos' },
    { type: 'template', title: 'Template Reutilizable' },
    { type: 'challenges', title: 'Desafíos Prácticos' },
    { type: 'tips', title: 'Tips Profesionales' },
    { type: 'summary', title: 'Resumen y Entregables' }
  ];

  theoryPoints = [
    {
      icon: '🚀',
      title: 'Testing Backend Sin UI',
      color: 'green',
      description: 'Prueba lógica de negocio directamente sin dependencia de frontend.',
      items: [
        'Ejecuta 100x más rápido que tests UI',
        'Detecta bugs backend antes de integración',
        'Perfecto para microservicios independientes',
        'Feedback inmediato en CI/CD'
      ]
    },
    {
      icon: '📊',
      title: 'Cobertura Completa',
      color: 'blue',
      description: 'Valida contratos, códigos de estado, schemas, casos edge.',
      items: [
        'Status codes: 200, 201, 400, 401, 404, 500',
        'Schema validation: estructura JSON/XML',
        'Headers: Content-Type, Authorization',
        'Response time: SLAs de performance'
      ]
    },
    {
      icon: '🔄',
      title: 'Integración Continua',
      color: 'orange',
      description: 'Suite de regresión que corre en cada deploy automáticamente.',
      items: [
        'Newman (Postman CLI) en GitHub Actions',
        'REST Assured en Jenkins Maven builds',
        'Smoke tests post-deploy en producción',
        'Monitoreo 24/7 con Postman Monitors'
      ]
    }
  ];

  tools: Tool[] = [
    {
      name: 'Postman',
      icon: '📬',
      description: 'Plataforma líder para API testing manual e automatizado con GUI intuitiva',
      pros: [
        'UI visual para construir requests fácilmente',
        'Collections organizadas con carpetas',
        'Variables de ambiente (dev, qa, prod)',
        'Newman CLI para CI/CD',
        'Colaboración en equipo (workspaces)',
        'Monitors para testing continuo'
      ],
      cons: [
        'JavaScript limitado en tests (no librerías externas)',
        'Debugging complejo en scripts grandes',
        'Versión gratis limitada (3 miembros, 25 requests/mes monitor)'
      ],
      useCase: 'Ideal para: QAs sin programación avanzada, equipos pequeños, testing manual + automatizado'
    },
    {
      name: 'REST Assured (Java)',
      icon: '☕',
      description: 'Framework Java para testing de APIs REST con sintaxis fluida (BDD-style)',
      pros: [
        'Integración perfecta con TestNG/JUnit',
        'Sintaxis legible: given().when().then()',
        'Validaciones potentes con Hamcrest matchers',
        'Soporta OAuth, cookies, multipart',
        'Logs detallados de request/response',
        'Maven/Gradle compatible'
      ],
      cons: [
        'Solo Java (no reutilizable en otros lenguajes)',
        'Curva de aprendizaje si no conoces Java',
        'Setup inicial más complejo que Postman'
      ],
      useCase: 'Ideal para: Equipos Java backend, integración con Selenium, proyectos enterprise'
    },
    {
      name: 'Pytest + Requests (Python)',
      icon: '🐍',
      description: 'Librería Python requests + framework pytest para testing flexible y potente',
      pros: [
        'Python simple y rápido de escribir',
        'Pytest fixtures para setup/teardown',
        'Parametrización fácil de tests',
        'Ecosistema rico (pydantic, jsonschema)',
        'Integración con allure reports',
        'Ideal para data-driven testing'
      ],
      cons: [
        'Requiere conocimiento Python',
        'Sin GUI (todo código)',
        'Configuración manual de reportes'
      ],
      useCase: 'Ideal para: Data scientists, equipos Python, testing con ML/AI, scripts flexibles'
    },
    {
      name: 'Insomnia',
      icon: '😴',
      description: 'Alternativa a Postman enfocada en GraphQL, gRPC y REST con diseño minimalista',
      pros: [
        'Soporte GraphQL nativo',
        'gRPC y WebSocket testing',
        'Diseño limpio y rápido',
        'Git sync para versionar colecciones',
        'Gratis sin limitaciones de equipo'
      ],
      cons: [
        'Menos features de colaboración que Postman',
        'Comunidad más pequeña',
        'Menos plugins/integraciones'
      ],
      useCase: 'Ideal para: APIs GraphQL, equipos que usan Git para todo, alternativa open-source'
    }
  ];

  examples: Example[] = [
    {
      title: 'Caso 1: API Login - POST /auth/login (Postman)',
      apiEndpoint: 'POST https://api-banco.com/v1/auth/login',
      method: 'POST',
      description: 'Endpoint de autenticación que retorna JWT token para sesión de usuario',
      badPrompt: {
        text: 'Genera tests de Postman para API de login',
        problems: [
          'No especifica estructura del request (body, headers)',
          'Sin validaciones concretas (status, token format)',
          'No menciona casos negativos (credenciales inválidas)',
          'Falta estructura de respuesta esperada',
          'Sin manejo de variables (guardar token)',
          'No indica ambiente (dev, qa, prod)'
        ]
      },
      goodPrompt: {
        text: `[ROL] Experto en API Testing con Postman + JavaScript.

[CONTEXTO]
API bancaria RESTful en https://api-banco.com/v1
Autenticación JWT con Bearer token
Ambientes: dev, qa, prod (usar variables {{baseUrl}})

[TAREA]
Genera suite completa de tests Postman para endpoint de login.

API ENDPOINT:
POST {{baseUrl}}/auth/login

REQUEST:
Headers:
- Content-Type: application/json

Body (JSON):
{
  "email": "usuario@banco.com",
  "password": "Pass123!"
}

RESPONSE EXITOSA (200):
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 3600,
  "user": {
    "id": "usr_123",
    "email": "usuario@banco.com",
    "role": "customer"
  }
}

CASOS DE PRUEBA A GENERAR:

1. Login Exitoso (200):
   - Validar status 200
   - Validar token existe y formato JWT
   - Validar expiresIn es número positivo
   - Validar user.email coincide con email enviado
   - Guardar token en variable de ambiente: pm.environment.set("authToken", token)
   - Response time < 500ms

2. Credenciales Inválidas (401):
   - Email correcto, password incorrecto
   - Validar status 401
   - Validar response.success === false
   - Validar mensaje error contiene "Invalid credentials"

3. Email No Registrado (404):
   - Email no existe en sistema
   - Validar status 404
   - Validar mensaje error contiene "User not found"

4. Campos Faltantes (400):
   - Request sin password
   - Request sin email
   - Validar status 400
   - Validar error.fields array contiene campos faltantes

5. Formato Email Inválido (400):
   - Email sin @ o formato incorrecto
   - Validar status 400
   - Validar mensaje error sobre formato email

VALIDACIONES TÉCNICAS:
- Schema validation con pm.response.to.have.jsonSchema()
- Assertions con pm.expect() (chai sintaxis)
- Variables: usar {{email}}, {{password}} de ambiente
- Tests en pestaña "Tests" de cada request

OUTPUT: Collection Postman JSON exportable con carpetas y tests`,
        benefits: [
          '✅ Especifica estructura completa request/response',
          '✅ Define 5 casos (happy path + 4 negativos)',
          '✅ Validaciones concretas por cada caso',
          '✅ Manejo de variables (guardar token)',
          '✅ Schema validation + response time',
          '✅ Usa variables de ambiente (reutilizable)',
          '✅ Collection organizada y exportable'
        ]
      },
      generatedTests: `// Collection: API Banco - Autenticación
// Folder: POST Login

// Request 1: Login Exitoso (200)
// Method: POST
// URL: {{baseUrl}}/auth/login
// Body (raw JSON):
{
  "email": "{{validEmail}}",
  "password": "{{validPassword}}"
}

// Tests Tab:
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response time < 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("Response has required fields", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property('success');
    pm.expect(jsonData).to.have.property('token');
    pm.expect(jsonData).to.have.property('expiresIn');
    pm.expect(jsonData).to.have.property('user');
});

pm.test("Token is valid JWT format", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.token).to.match(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
});

pm.test("ExpiresIn is positive number", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.expiresIn).to.be.a('number').and.to.be.above(0);
});

pm.test("User email matches request", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.user.email).to.eql(pm.environment.get("validEmail"));
});

// Save token to environment
var jsonData = pm.response.json();
if (jsonData.token) {
    pm.environment.set("authToken", jsonData.token);
    console.log("✓ Token saved to environment");
}

// ---

// Request 2: Credenciales Inválidas (401)
// Body:
{
  "email": "{{validEmail}}",
  "password": "WrongPassword123"
}

// Tests:
pm.test("Status code is 401", function () {
    pm.response.to.have.status(401);
});

pm.test("Success is false", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.success).to.be.false;
});

pm.test("Error message mentions invalid credentials", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message.toLowerCase()).to.include("invalid credentials");
});

// ---

// Request 3: Email No Registrado (404)
// Body:
{
  "email": "noexiste@banco.com",
  "password": "{{validPassword}}"
}

// Tests:
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

pm.test("Error message mentions user not found", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message.toLowerCase()).to.include("user not found");
});

// ---

// Request 4: Campo Faltante - Sin Password (400)
// Body:
{
  "email": "{{validEmail}}"
}

// Tests:
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Error includes missing field", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.error.fields).to.be.an('array');
    pm.expect(jsonData.error.fields).to.include('password');
});

// ---

// Request 5: Email Formato Inválido (400)
// Body:
{
  "email": "not-an-email",
  "password": "{{validPassword}}"
}

// Tests:
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});

pm.test("Error mentions email format", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message.toLowerCase()).to.include("email");
});

// Environment Variables Required:
// - baseUrl: https://api-banco.com/v1
// - validEmail: usuario@banco.com
// - validPassword: Pass123!
// - authToken: (se guarda automáticamente después de login exitoso)`
    },
    {
      title: 'Caso 2: API Transferencias - POST /transactions (REST Assured Java)',
      apiEndpoint: 'POST https://api-banco.com/v1/transactions',
      method: 'POST',
      description: 'Endpoint para crear transferencia bancaria entre cuentas con validación de saldo',
      badPrompt: {
        text: 'Tests REST Assured para API de transferencias',
        problems: [
          'No especifica estructura request/response',
          'Sin validaciones de negocio (saldo, montos)',
          'No menciona autenticación (Bearer token)',
          'Falta setup de datos (cuentas, saldo inicial)',
          'Sin casos negativos (saldo insuficiente)',
          'No indica integración TestNG/JUnit'
        ]
      },
      goodPrompt: {
        text: `[ROL] QA Automation senior con expertise en REST Assured + Java + TestNG.

[CONTEXTO]
API bancaria RESTful: https://api-banco.com/v1
Autenticación: Bearer token en header Authorization
Framework: REST Assured 5.x + TestNG + Maven
Patrón: Given-When-Then (BDD style)

[TAREA]
Genera clase Java con suite completa de tests para endpoint de transferencias.

API ENDPOINT:
POST /transactions

REQUEST:
Headers:
- Authorization: Bearer {{token}}
- Content-Type: application/json

Body:
{
  "fromAccount": "ACC-00123",
  "toAccount": "ACC-00456",
  "amount": 500.00,
  "currency": "COP",
  "description": "Pago servicio"
}

RESPONSE EXITOSA (201):
{
  "transactionId": "TRX-20241125-00001",
  "status": "COMPLETED",
  "timestamp": "2024-11-25T10:30:00Z",
  "fromAccount": "ACC-00123",
  "toAccount": "ACC-00456",
  "amount": 500.00,
  "newBalance": 9500.00
}

PRECONDICIONES:
- Cuenta origen ACC-00123 con saldo inicial $10,000
- Cuenta destino ACC-00456 existe
- Token válido obtenido de /auth/login

CASOS DE PRUEBA:

1. Transferencia Exitosa (201):
   - Validar status 201
   - Validar transactionId generado (formato TRX-YYYYMMDD-NNNNN)
   - Validar status === "COMPLETED"
   - Validar newBalance === saldoAnterior - amount
   - Response time < 1000ms

2. Saldo Insuficiente (400):
   - Amount mayor a saldo disponible
   - Validar status 400
   - Validar mensaje error contiene "Insufficient balance"

3. Cuenta Destino No Existe (404):
   - toAccount inválido
   - Validar status 404
   - Validar error contiene "Account not found"

4. Sin Autenticación (401):
   - Request sin header Authorization
   - Validar status 401

5. Monto Negativo (400):
   - Amount < 0
   - Validar status 400
   - Validar error sobre monto inválido

6. Moneda No Soportada (400):
   - Currency = "USD" (no soportada)
   - Validar status 400

REQUERIMIENTOS TÉCNICOS:
- Clase: TransactionApiTest.java
- Annotations: @Test, @BeforeClass (setup base URL + token)
- Assertions: Hamcrest matchers (equalTo, greaterThan)
- Logs: log().all() en requests/responses
- JSON path validation: body("transactionId", notNullValue())
- Extract response: String txId = response.path("transactionId")

OUTPUT: Código Java completo ejecutable con Maven`,
        benefits: [
          '✅ Especifica Java + REST Assured + TestNG stack',
          '✅ Define 6 casos (happy + 5 negativos)',
          '✅ Incluye precondiciones (saldo, cuentas)',
          '✅ Validaciones de negocio (saldo, balance)',
          '✅ Manejo de autenticación (Bearer token)',
          '✅ Patrón BDD (given-when-then)',
          '✅ Listo para CI/CD con Maven'
        ]
      },
      generatedTests: `// TransactionApiTest.java
import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class TransactionApiTest {

    private String baseUrl = "https://api-banco.com/v1";
    private String authToken;
    private String accountFrom = "ACC-00123";
    private String accountTo = "ACC-00456";

    @BeforeClass
    public void setup() {
        RestAssured.baseURI = baseUrl;

        // Login para obtener token
        Response loginResponse = given()
            .contentType("application/json")
            .body("{\\"email\\": \\"usuario@banco.com\\", \\"password\\": \\"Pass123!\\"}")
        .when()
            .post("/auth/login")
        .then()
            .statusCode(200)
            .extract().response();

        authToken = loginResponse.path("token");
        System.out.println("✓ Token obtenido: " + authToken.substring(0, 20) + "...");
    }

    @Test
    public void testTransferenciaExitosa() {
        System.out.println("\\n=== TEST: Transferencia Exitosa ===");

        given()
            .header("Authorization", "Bearer " + authToken)
            .contentType("application/json")
            .body("{\\"fromAccount\\": \\"" + accountFrom + "\\", " +
                  "\\"toAccount\\": \\"" + accountTo + "\\", " +
                  "\\"amount\\": 500.00, " +
                  "\\"currency\\": \\"COP\\", " +
                  "\\"description\\": \\"Pago servicio\\"}")
            .log().all()
        .when()
            .post("/transactions")
        .then()
            .log().all()
            .statusCode(201)
            .time(lessThan(1000L))
            .body("transactionId", notNullValue())
            .body("transactionId", matchesPattern("TRX-\\\\d{8}-\\\\d{5}"))
            .body("status", equalTo("COMPLETED"))
            .body("fromAccount", equalTo(accountFrom))
            .body("toAccount", equalTo(accountTo))
            .body("amount", equalTo(500.00f))
            .body("newBalance", equalTo(9500.00f));

        System.out.println("✓ Transferencia exitosa validada");
    }

    @Test
    public void testSaldoInsuficiente() {
        System.out.println("\\n=== TEST: Saldo Insuficiente ===");

        given()
            .header("Authorization", "Bearer " + authToken)
            .contentType("application/json")
            .body("{\\"fromAccount\\": \\"" + accountFrom + "\\", " +
                  "\\"toAccount\\": \\"" + accountTo + "\\", " +
                  "\\"amount\\": 50000.00, " +
                  "\\"currency\\": \\"COP\\", " +
                  "\\"description\\": \\"Intento exceder saldo\\"}")
        .when()
            .post("/transactions")
        .then()
            .statusCode(400)
            .body("success", equalTo(false))
            .body("message", containsStringIgnoringCase("insufficient balance"));

        System.out.println("✓ Validación saldo insuficiente correcta");
    }

    @Test
    public void testCuentaDestinoNoExiste() {
        System.out.println("\\n=== TEST: Cuenta Destino No Existe ===");

        given()
            .header("Authorization", "Bearer " + authToken)
            .contentType("application/json")
            .body("{\\"fromAccount\\": \\"" + accountFrom + "\\", " +
                  "\\"toAccount\\": \\"ACC-99999\\", " +
                  "\\"amount\\": 100.00, " +
                  "\\"currency\\": \\"COP\\", " +
                  "\\"description\\": \\"Test cuenta inexistente\\"}")
        .when()
            .post("/transactions")
        .then()
            .statusCode(404)
            .body("message", containsStringIgnoringCase("account not found"));

        System.out.println("✓ Validación cuenta inexistente correcta");
    }

    @Test
    public void testSinAutenticacion() {
        System.out.println("\\n=== TEST: Sin Autenticación ===");

        given()
            .contentType("application/json")
            .body("{\\"fromAccount\\": \\"" + accountFrom + "\\", " +
                  "\\"toAccount\\": \\"" + accountTo + "\\", " +
                  "\\"amount\\": 100.00, " +
                  "\\"currency\\": \\"COP\\", " +
                  "\\"description\\": \\"Sin token\\"}")
        .when()
            .post("/transactions")
        .then()
            .statusCode(401);

        System.out.println("✓ Validación sin auth correcta");
    }

    @Test
    public void testMontoNegativo() {
        System.out.println("\\n=== TEST: Monto Negativo ===");

        given()
            .header("Authorization", "Bearer " + authToken)
            .contentType("application/json")
            .body("{\\"fromAccount\\": \\"" + accountFrom + "\\", " +
                  "\\"toAccount\\": \\"" + accountTo + "\\", " +
                  "\\"amount\\": -500.00, " +
                  "\\"currency\\": \\"COP\\", " +
                  "\\"description\\": \\"Monto negativo\\"}")
        .when()
            .post("/transactions")
        .then()
            .statusCode(400)
            .body("message", containsStringIgnoringCase("invalid amount"));

        System.out.println("✓ Validación monto negativo correcta");
    }

    @Test
    public void testMonedaNoSoportada() {
        System.out.println("\\n=== TEST: Moneda No Soportada ===");

        given()
            .header("Authorization", "Bearer " + authToken)
            .contentType("application/json")
            .body("{\\"fromAccount\\": \\"" + accountFrom + "\\", " +
                  "\\"toAccount\\": \\"" + accountTo + "\\", " +
                  "\\"amount\\": 100.00, " +
                  "\\"currency\\": \\"USD\\", " +
                  "\\"description\\": \\"Moneda no soportada\\"}")
        .when()
            .post("/transactions")
        .then()
            .statusCode(400)
            .body("message", containsStringIgnoringCase("currency"));

        System.out.println("✓ Validación moneda no soportada correcta");
    }
}

// pom.xml dependencies:
// <dependency>
//     <groupId>io.rest-assured</groupId>
//     <artifactId>rest-assured</artifactId>
//     <version>5.3.2</version>
// </dependency>
// <dependency>
//     <groupId>org.testng</groupId>
//     <artifactId>testng</artifactId>
//     <version>7.8.0</version>
// </dependency>`
    }
  ];

  processSteps: Step[] = [
    {
      number: 1,
      title: 'Analizar Documentación de API',
      description: 'Lee Swagger/OpenAPI docs, identifica endpoints, métodos, headers, body, responses.',
      example: 'Swagger muestra POST /users requiere {"name", "email"} y retorna 201 con user ID',
      tips: [
        'Busca documentación en /api/docs, /swagger, README',
        'Identifica autenticación: API key, Bearer token, OAuth',
        'Nota códigos de estado por endpoint: 200, 201, 400, 401, 404',
        'Si no hay docs, usa Postman para explorar manualmente'
      ]
    },
    {
      number: 2,
      title: 'Identificar Casos de Prueba',
      description: 'Lista happy path + casos negativos (auth, validación, edge cases).',
      example: 'Login: exitoso (200), wrong password (401), email no existe (404), sin campos (400)',
      tips: [
        'Happy path: caso ideal con datos válidos',
        'Auth: sin token, token expirado, token inválido',
        'Validación: campos faltantes, formato incorrecto',
        'Edge: valores límite, datos especiales (@, ñ, emoji)'
      ]
    },
    {
      number: 3,
      title: 'Definir Estructura Request/Response',
      description: 'Documenta headers, body, y estructura esperada de response por cada caso.',
      example: 'Headers: Authorization, Content-Type. Body: JSON con validaciones. Response: schema definido',
      tips: [
        'Usa herramientas: JSON schema generator, Swagger codegen',
        'Valida tipos: string, number, boolean, array, object',
        'Campos opcionales vs requeridos',
        'Anota ejemplos de valores válidos/inválidos'
      ]
    },
    {
      number: 4,
      title: 'Preparar Datos de Prueba',
      description: 'Crea usuarios, cuentas, tokens necesarios para ejecutar tests.',
      example: 'User test: test@qa.com / Pass123!. Cuentas: ACC-TEST-001, ACC-TEST-002 con saldo mock',
      tips: [
        'Usa ambientes: dev (datos mock), qa (datos reales)',
        'Scripts de setup: crear usuarios/datos antes de tests',
        'Variables: guarda IDs, tokens en variables de ambiente',
        'Cleanup: borra datos de test después (teardown)'
      ]
    },
    {
      number: 5,
      title: 'Construir Prompt Estructurado',
      description: 'Usa template [ROL][CONTEXTO][TAREA] con endpoint, casos, validaciones.',
      example: 'Ver ejemplos comparativos en slide anterior',
      tips: [
        'Especifica herramienta: Postman vs REST Assured vs Pytest',
        'Incluye estructura completa request/response',
        'Lista todos los casos (no solo happy path)',
        'Detalla validaciones: status, campos, formato, response time'
      ]
    },
    {
      number: 6,
      title: 'Generar y Revisar Tests',
      description: 'Ejecuta prompt, obtén collection/código, revisa sintaxis y lógica.',
      example: 'Postman: valida sintaxis JavaScript. REST Assured: compila sin errores',
      tips: [
        'Postman: importa collection y revisa en UI',
        'REST Assured: compila con mvn compile',
        'Valida assertions: pm.expect(), Hamcrest matchers',
        'Revisa variables: {{baseUrl}}, {{token}} existen'
      ]
    },
    {
      number: 7,
      title: 'Ejecutar y Depurar Tests',
      description: 'Corre suite contra API, identifica fallos (endpoints, datos, timing).',
      example: 'Test falla con 404: endpoint cambió de /user a /users. Ajusta y re-ejecuta',
      tips: [
        'Postman: Collection Runner para ejecutar suite completa',
        'REST Assured: mvn test -Dtest=TransactionApiTest',
        'Logs: activa log().all() para ver requests/responses',
        'Debugging: Postman Console, REST Assured logs detallados',
        'Si API no disponible: usa mocks (Mockoon, WireMock)'
      ]
    },
    {
      number: 8,
      title: 'Integrar a CI/CD y Monitorear',
      description: 'Automatiza ejecución en pipeline, configura alertas de fallas.',
      example: 'GitHub Actions: newman run collection.json. Jenkins: mvn test con REST Assured',
      tips: [
        'Postman: Newman CLI + GitHub Actions/Jenkins',
        'REST Assured: Maven Surefire en CI/CD',
        'Smoke tests: ejecuta subset crítico post-deploy',
        'Monitors: Postman Monitors cada 5 min en producción',
        'Reportes: Allure, TestNG HTML, Newman HTML reporters'
      ]
    }
  ];

  template = `[ROL] Actúa como QA Automation especializado en API Testing con [HERRAMIENTA: Postman/REST Assured/Pytest].

[CONTEXTO]
- API: [Nombre y descripción del sistema]
- Base URL: [https://api.example.com/v1]
- Autenticación: [None / API Key / Bearer Token / OAuth 2.0]
- Documentación: [Swagger URL o descripción]
- Ambiente: [dev / qa / staging / prod]

[TAREA]
Genera suite completa de tests automatizados para el siguiente endpoint.

API ENDPOINT:
[METHOD] [PATH]
Ejemplo: POST /auth/login

REQUEST:
Headers:
- [Header-Name]: [valor o variable]
- Content-Type: [application/json / application/xml]

Body ([formato]):
{
  "campo1": "valor",
  "campo2": 123
}

RESPONSE EXITOSA ([status code]):
{
  "campo": "valor",
  "nested": {
    "field": "value"
  }
}

PRECONDICIONES:
- [Datos necesarios antes de ejecutar: usuarios, cuentas, configuraciones]
- [Estado del sistema requerido]

CASOS DE PRUEBA A GENERAR:

1. [Nombre caso happy path] ([status esperado]):
   - Validaciones específicas
   - Campos a verificar
   - Condiciones de éxito

2. [Caso negativo 1] ([status]):
   - Escenario de error
   - Validaciones

3. [Caso negativo 2] ([status]):
   - Otro escenario de error
   - Validaciones

4-N. [Más casos según complejidad]

VALIDACIONES REQUERIDAS:
- Status code correcto
- Schema validation (estructura JSON/XML)
- Valores de campos específicos
- Headers de response (Content-Type, etc.)
- Response time (SLA: < Xms)
- Manejo de variables (guardar IDs, tokens)

REQUERIMIENTOS TÉCNICOS (según herramienta):

[SI POSTMAN]:
- Collection JSON exportable
- Variables: {{baseUrl}}, {{token}}, etc.
- Tests en JavaScript con pm.test()
- Pre-request scripts si necesario
- Organización en carpetas

[SI REST ASSURED]:
- Clase Java con @Test annotations
- Framework: TestNG o JUnit 5
- Patrón: given().when().then()
- Hamcrest matchers para assertions
- Logs con log().all()
- Maven/Gradle compatible

[SI PYTEST + REQUESTS]:
- Archivo test_[nombre].py
- Fixtures para setup
- Assertions con assert
- Parametrización con @pytest.mark.parametrize
- Requests library para HTTP calls

OUTPUT:
[Código/Collection completo listo para ejecutar]
[Instrucciones de ejecución]
[Variables de ambiente necesarias]`;

  challenges: Challenge[] = [
    {
      id: 1,
      difficulty: 'Fácil',
      title: 'API Productos E-commerce (Postman)',
      api: 'GET /products - Lista productos con filtros',
      endpoints: [
        'GET /products - Lista todos (200)',
        'GET /products?category=laptops - Filtro por categoría (200)',
        'GET /products?minPrice=500&maxPrice=1000 - Rango precio (200)',
        'GET /products?page=1&limit=20 - Paginación (200)',
        'GET /products/12345 - Detalle producto por ID (200)',
        'GET /products/99999 - Producto no existe (404)'
      ],
      requirements: [
        'Collection Postman con 6 requests organizados',
        'Variables: {{baseUrl}}, {{validProductId}}',
        'Validar schema response con pm.response.to.have.jsonSchema()',
        'Verificar paginación: total, page, limit en metadata',
        'Response time < 300ms para lista',
        'Assertions sobre estructura de producto (id, name, price, category)'
      ],
      hints: [
        'Usa pm.response.json() para parsear respuesta',
        'Paginación: valida que products.length <= limit',
        'Filtros: verifica que todos los productos retornados cumplen filtro',
        'Schema: define JSON schema para producto en Tests',
        'Variables: guarda primer productId para usar en request de detalle'
      ],
      color: 'green'
    },
    {
      id: 2,
      difficulty: 'Intermedio',
      title: 'API CRUD Clientes Bancarios (REST Assured Java)',
      api: 'CRUD completo: Crear, Leer, Actualizar, Eliminar cliente',
      endpoints: [
        'POST /customers - Crear cliente (201)',
        'GET /customers/{id} - Obtener cliente (200)',
        'PUT /customers/{id} - Actualizar cliente (200)',
        'DELETE /customers/{id} - Eliminar cliente (204)',
        'GET /customers - Listar con query params (200)',
        'POST /customers - Email duplicado (409 Conflict)',
        'GET /customers/{id} - ID no existe (404)'
      ],
      requirements: [
        'Clase CustomersApiTest.java con TestNG',
        'Secuencia de tests: Crear → Leer → Actualizar → Eliminar',
        'Usar @Test(dependsOnMethods) para orden de ejecución',
        'Variables de clase para customerId generado',
        'Validaciones de negocio: email único, teléfono formato válido',
        'Cleanup en @AfterClass: eliminar clientes de test',
        'Logs detallados con log().all()',
        'Assertions con Hamcrest: equalTo(), hasSize(), notNullValue()'
      ],
      hints: [
        'BeforeClass: obtén token de autenticación',
        'POST crear cliente: extrae customerId del response',
        'Guarda ID en variable: String customerId = response.path("id")',
        'PUT: envía solo campos a actualizar (PATCH-like)',
        'DELETE: valida 204 (No Content, sin body)',
        'Test duplicado: intenta crear mismo email 2 veces',
        'dependsOnMethods: GET depende de POST (ID debe existir)'
      ],
      color: 'blue'
    },
    {
      id: 3,
      difficulty: 'Avanzado',
      title: 'API Préstamos con Flujo Multi-Paso (Pytest Python)',
      api: 'Flujo completo: Solicitar préstamo → Aprobar/Rechazar → Desembolsar → Consultar',
      endpoints: [
        'POST /loan-requests - Solicitar préstamo (201)',
        'GET /loan-requests/{id} - Consultar estado (200)',
        'PUT /loan-requests/{id}/approve - Aprobar (200)',
        'PUT /loan-requests/{id}/reject - Rechazar (200)',
        'POST /loan-requests/{id}/disburse - Desembolsar (201)',
        'GET /loans/{id}/payments - Plan de pagos (200)',
        'POST /loans/{id}/payments - Registrar pago (201)'
      ],
      requirements: [
        'Archivo test_loan_workflow.py con pytest',
        'Fixtures: setup_customer (crea cliente test), setup_auth (token)',
        'Test secuencial con assertions de estado en cada paso',
        'Parametrización: @pytest.mark.parametrize con múltiples montos',
        'Validación de lógica: scoring crediticio, tasa interés, cuotas',
        'Data-driven: leer casos de archivo loans_testdata.json',
        'Mocks: mockear servicio de scoring con responses library',
        'Reportes: Allure con screenshots de responses'
      ],
      hints: [
        'Fixtures con scope="module" para reutilizar datos',
        'Usa requests.Session() para mantener cookies/headers',
        'Workflow: guardar loan_request_id → approve → disburse → loan_id',
        'Validar estado: PENDING → APPROVED → DISBURSED',
        'Scoring: mock response de /credit-score con responses.add()',
        'Parametrización: @pytest.mark.parametrize("amount,expected_rate", [(1000, 0.15), (10000, 0.12)])',
        'Plan pagos: valida que sum(cuotas) == monto + intereses',
        'Allure: usa @allure.step("Aprobar préstamo") para reportes'
      ],
      color: 'orange'
    }
  ];

  professionalTips = [
    {
      icon: '📝',
      title: 'Documenta Contratos de API',
      description: 'Mantén Swagger/OpenAPI actualizado. Es la fuente de verdad para tests.',
      example: 'Usa Swagger Codegen para generar modelos y asegurar consistencia'
    },
    {
      icon: '🔐',
      title: 'Manejo Seguro de Credenciales',
      description: 'NUNCA hardcodees tokens o passwords en collections/código. Usa variables de ambiente.',
      example: 'Postman: {{apiKey}} en ambiente. REST Assured: System.getenv("API_TOKEN")'
    },
    {
      icon: '✅',
      title: 'Schema Validation Obligatoria',
      description: 'Valida estructura JSON/XML con schemas. Detecta cambios de contrato antes de romper frontend.',
      example: 'Postman: pm.response.to.have.jsonSchema(schema). REST Assured: .body(matchesJsonSchemaInClasspath("schema.json"))'
    },
    {
      icon: '⏱️',
      title: 'Monitorea Response Time',
      description: 'Incluye assertions de performance. APIs lentas = mala UX.',
      example: 'pm.expect(pm.response.responseTime).to.be.below(500) o .time(lessThan(1000L))'
    },
    {
      icon: '🧪',
      title: 'Tests Independientes e Idempotentes',
      description: 'Cada test debe poder ejecutarse solo. No dependas de orden de ejecución.',
      example: 'Usa fixtures/hooks para crear datos necesarios. Limpia después con teardown'
    },
    {
      icon: '📊',
      title: 'Data-Driven Testing',
      description: 'Reutiliza mismos tests con múltiples datasets. 1 test + 100 casos = eficiencia.',
      example: 'Postman: CSV data file. REST Assured: @DataProvider. Pytest: @parametrize'
    },
    {
      icon: '🚦',
      title: 'Smoke Tests Post-Deploy',
      description: 'Suite mínima que valida endpoints críticos después de cada deploy.',
      example: '5-10 tests críticos (login, transacciones, consultas) corriendo en <2 min'
    },
    {
      icon: '📈',
      title: 'Reportes Visuales y Métricas',
      description: 'Genera reportes HTML con gráficos. Facilita análisis de tendencias.',
      example: 'Newman HTML Extra, Allure Framework, TestNG HTML, Postman Monitors Dashboard'
    }
  ];

  deliverables = [
    {
      title: '📬 Collection/Suite Completa',
      description: 'Postman collection o código REST Assured/Pytest ejecutable',
      checkpoints: [
        'Todos los endpoints cubiertos (CRUD completo)',
        'Happy path + casos negativos (auth, validación)',
        'Organizado por carpetas/clases lógicas',
        'Ejecuta sin errores en ambiente de test'
      ]
    },
    {
      title: '📋 Prompt Documentado',
      description: 'Prompt estructurado usado para generar los tests',
      checkpoints: [
        'Template completo con endpoint y casos',
        'Estructura request/response documentada',
        'Validaciones listadas explícitamente',
        'Reutilizable para otros endpoints similares'
      ]
    },
    {
      title: '📊 Reporte de Ejecución',
      description: 'Evidencia de tests ejecutados con resultados',
      checkpoints: [
        'Collection Runner report (Postman) o TestNG/Pytest HTML',
        'Todos los tests en verde (passed)',
        'Tiempos de respuesta dentro de SLA',
        'Screenshots/logs de requests/responses clave',
        'Issues encontrados documentados (si aplica)'
      ]
    }
  ];

  nextSteps = [
    'Integra suite a CI/CD (Newman, Maven, Pytest en GitHub Actions)',
    'Configura monitores para testing continuo (Postman Monitors)',
    'Documenta en Wiki: cómo ejecutar, qué endpoints cubre, cómo agregar tests',
    'Próxima clase: Taller de Generación de CRUD Completo (Backend + Tests)'
  ];

  prevSlide(): void {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.resetExpansions();
    }
  }

  nextSlide(): void {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
      this.resetExpansions();
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.resetExpansions();
  }

  toggleExample(index: number): void {
    this.expandedExample = this.expandedExample === index ? null : index;
  }

  toggleStep(index: number): void {
    this.expandedStep = this.expandedStep === index ? null : index;
  }

  toggleChallenge(index: number): void {
    this.expandedChallenge = this.expandedChallenge === index ? null : index;
  }

  toggleTool(index: number): void {
    this.expandedTool = this.expandedTool === index ? null : index;
  }

  resetExpansions(): void {
    this.expandedExample = null;
    this.expandedStep = null;
    this.expandedChallenge = null;
    this.expandedTool = null;
  }

  copyTemplate(): void {
    navigator.clipboard.writeText(this.template).then(() => {
      alert('✅ Template copiado al portapapeles');
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.prevSlide();
    } else if (event.key === 'ArrowRight') {
      this.nextSlide();
    }
  }
}
