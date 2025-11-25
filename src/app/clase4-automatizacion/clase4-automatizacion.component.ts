import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Example {
  title: string;
  testCase: string;
  badPrompt: {
    text: string;
    problems: string[];
  };
  goodPrompt: {
    text: string;
    benefits: string[];
  };
  generatedCode: string;
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
  testCases: string[];
  context: string[];
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
  selector: 'app-clase4-automatizacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clase4-automatizacion.component.html',
  styleUrl: './clase4-automatizacion.component.css'
})
export class Clase4AutomatizacionComponent {
  currentSlide = 0;
  expandedExample: number | null = null;
  expandedStep: number | null = null;
  expandedChallenge: number | null = null;
  expandedTool: number | null = null;

  slides = [
    { type: 'title', title: 'Clase 4' },
    { type: 'theory', title: '¿Por qué automatizar con IA?' },
    { type: 'tools', title: 'Herramientas de Automatización' },
    { type: 'examples', title: 'De Test Case a Script' },
    { type: 'process', title: 'Proceso de 7 Pasos' },
    { type: 'template', title: 'Template Reutilizable' },
    { type: 'challenges', title: 'Desafíos Prácticos' },
    { type: 'tips', title: 'Tips Profesionales' },
    { type: 'summary', title: 'Resumen y Entregables' }
  ];

  theoryPoints = [
    {
      icon: '⚡',
      title: 'Velocidad de Desarrollo',
      color: 'green',
      description: 'De test case manual a script ejecutable en minutos, no horas.',
      items: [
        'Escribir 50 scripts manualmente = 2-3 días',
        'Con IA = 2-3 horas (incluye debugging)',
        'Aumenta cobertura de automatización 10x'
      ]
    },
    {
      icon: '🎯',
      title: 'Calidad del Código',
      color: 'blue',
      description: 'Scripts con buenas prácticas: waits explícitos, POM, assertions robustas.',
      items: [
        'IA aplica patrones: Page Object Model, AAA',
        'Genera waits inteligentes (no sleeps fijos)',
        'Incluye assertions descriptivas y manejo de errores'
      ]
    },
    {
      icon: '🔄',
      title: 'Mantenibilidad',
      color: 'orange',
      description: 'Código estructurado y documentado desde el inicio.',
      items: [
        'Comentarios explicativos automáticos',
        'Variables con nombres semánticos',
        'Fácil de actualizar cuando cambia UI'
      ]
    }
  ];

  tools: Tool[] = [
    {
      name: 'Selenium WebDriver',
      icon: '🌐',
      description: 'Framework de automatización web más usado, multi-lenguaje (Java, Python, JS, C#)',
      pros: [
        'Maduro y estable (15+ años)',
        'Soporta todos los navegadores',
        'Gran comunidad y recursos',
        'Integración con CI/CD robusta'
      ],
      cons: [
        'Curva de aprendizaje más empinada',
        'Requiere configuración inicial (drivers)',
        'Más verboso que alternativas modernas'
      ],
      useCase: 'Ideal para: Testing cross-browser, proyectos enterprise con Java/C#, integración con TestNG/JUnit'
    },
    {
      name: 'Cypress',
      icon: '🌲',
      description: 'Framework moderno JavaScript-only, ejecución en navegador, sintaxis simple',
      pros: [
        'Configuración mínima (zero-setup)',
        'Time-travel debugging visual',
        'Esperas automáticas inteligentes',
        'Sintaxis intuitiva y limpia'
      ],
      cons: [
        'Solo JavaScript/TypeScript',
        'Limitado a Chrome/Firefox/Edge (no Safari real)',
        'No soporta multi-tab nativo'
      ],
      useCase: 'Ideal para: Frontend developers, proyectos modernos JS/TS, testing de SPAs (React/Angular/Vue)'
    },
    {
      name: 'Playwright',
      icon: '🎭',
      description: 'Framework nuevo de Microsoft, multi-browser real, APIs modernas',
      pros: [
        'Soporta Chromium, Firefox, WebKit (Safari)',
        'Testing en paralelo nativo',
        'Auto-waits robustos',
        'Multi-lenguaje (JS, Python, Java, .NET)'
      ],
      cons: [
        'Más nuevo (menos recursos/ejemplos)',
        'Comunidad en crecimiento',
        'Algunas empresas no lo adoptan aún'
      ],
      useCase: 'Ideal para: Testing cross-browser real, proyectos nuevos, equipos que valoran performance'
    },
    {
      name: 'Appium',
      icon: '📱',
      description: 'Automatización para apps móviles (Android/iOS), extensión de WebDriver',
      pros: [
        'Testing de apps nativas, híbridas y web móvil',
        'Multi-plataforma (Android + iOS)',
        'Reutiliza conocimiento de Selenium',
        'Soporta emuladores y dispositivos reales'
      ],
      cons: [
        'Setup complejo (SDKs, emuladores)',
        'Más lento que testing web',
        'Debugging difícil en dispositivos reales'
      ],
      useCase: 'Ideal para: Apps móviles, testing multi-plataforma, equipos con skills de Selenium'
    }
  ];

  examples: Example[] = [
    {
      title: 'Caso 1: Login en App Bancaria (Selenium Java)',
      testCase: `Test Case: Login Exitoso con Credenciales Válidas

Precondiciones:
- Usuario registrado: usuario@banco.com / Pass123!
- App en homepage

Pasos:
1. Click en botón "Iniciar Sesión"
2. Ingresar email: usuario@banco.com
3. Ingresar password: Pass123!
4. Click en botón "Entrar"

Resultado Esperado:
- Redirección a dashboard
- Mostrar mensaje "Bienvenido, Usuario"
- Botón "Cerrar Sesión" visible`,
      badPrompt: {
        text: 'Genera script Selenium para login',
        problems: [
          'No especifica lenguaje (Java, Python, C#?)',
          'Sin selectores de elementos (IDs, XPath)',
          'No incluye assertions/validaciones',
          'Falta estructura del código (clase, métodos)',
          'Sin manejo de waits (puede fallar por timing)',
          'No indica configuración del driver'
        ]
      },
      goodPrompt: {
        text: `[ROL] Actúa como QA Automation Engineer senior especializado en Selenium WebDriver.

[CONTEXTO]
- Framework: Selenium WebDriver 4 con Java 17
- Patrón: Page Object Model (POM)
- Build tool: Maven
- Assertions: TestNG
- App: Sistema bancario web en https://banco-demo.com

[TAREA]
Genera script de automatización completo para test case de login exitoso.

TEST CASE COMPLETO:
Test Case: Login Exitoso con Credenciales Válidas

Precondiciones:
- Usuario registrado: usuario@banco.com / Pass123!
- App en homepage

Pasos:
1. Click en botón "Iniciar Sesión"
2. Ingresar email: usuario@banco.com
3. Ingresar password: Pass123!
4. Click en botón "Entrar"

Resultado Esperado:
- Redirección a dashboard
- Mostrar mensaje "Bienvenido, Usuario"
- Botón "Cerrar Sesión" visible

SELECTORES HTML (inspección previa):
- Botón "Iniciar Sesión": id="btnLogin"
- Campo Email: id="inputEmail"
- Campo Password: id="inputPassword"
- Botón "Entrar": xpath="//button[@type='submit']"
- Mensaje Bienvenida: xpath="//h2[contains(text(),'Bienvenido')]"
- Botón Cerrar Sesión: id="btnLogout"

REQUERIMIENTOS TÉCNICOS:
1. Clase LoginTest con métodos @BeforeMethod (setup) y @AfterMethod (teardown)
2. Clase LoginPage (POM) con locators y métodos de acción
3. Usar WebDriverWait explícito (no Thread.sleep)
4. Assertions con mensajes descriptivos
5. ChromeDriver configurado con opciones (headless optional)
6. Logs informativos en cada paso
7. Screenshot en caso de falla

OUTPUT: Código Java completo listo para ejecutar`,
        benefits: [
          '✅ Especifica Java 17 + Selenium 4 + TestNG',
          '✅ Incluye selectores reales inspeccionados',
          '✅ Pide estructura POM (buenas prácticas)',
          '✅ Requiere waits explícitos (anti-flakiness)',
          '✅ Assertions descriptivas para debugging',
          '✅ Setup/teardown completo',
          '✅ Listo para integrar en suite existente'
        ]
      },
      generatedCode: `// LoginPage.java (Page Object Model)
public class LoginPage {
    private WebDriver driver;
    private WebDriverWait wait;

    // Locators
    @FindBy(id = "btnLogin")
    private WebElement btnIniciarSesion;

    @FindBy(id = "inputEmail")
    private WebElement inputEmail;

    @FindBy(id = "inputPassword")
    private WebElement inputPassword;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement btnEntrar;

    @FindBy(xpath = "//h2[contains(text(),'Bienvenido')]")
    private WebElement msgBienvenida;

    @FindBy(id = "btnLogout")
    private WebElement btnCerrarSesion;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
        PageFactory.initElements(driver, this);
    }

    public void clickIniciarSesion() {
        wait.until(ExpectedConditions.elementToBeClickable(btnIniciarSesion));
        btnIniciarSesion.click();
        System.out.println("✓ Click en botón Iniciar Sesión");
    }

    public void ingresarCredenciales(String email, String password) {
        wait.until(ExpectedConditions.visibilityOf(inputEmail));
        inputEmail.sendKeys(email);
        System.out.println("✓ Email ingresado: " + email);

        inputPassword.sendKeys(password);
        System.out.println("✓ Password ingresado");
    }

    public void clickEntrar() {
        btnEntrar.click();
        System.out.println("✓ Click en botón Entrar");
    }

    public boolean isMensajeBienvenidaVisible() {
        try {
            wait.until(ExpectedConditions.visibilityOf(msgBienvenida));
            return msgBienvenida.isDisplayed();
        } catch (TimeoutException e) {
            return false;
        }
    }

    public boolean isBotonCerrarSesionVisible() {
        return wait.until(ExpectedConditions.visibilityOf(btnCerrarSesion)).isDisplayed();
    }
}

// LoginTest.java (Test Class)
public class LoginTest {
    private WebDriver driver;
    private LoginPage loginPage;

    @BeforeMethod
    public void setup() {
        // Configurar ChromeDriver
        WebDriverManager.chromedriver().setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--start-maximized");
        // options.addArguments("--headless"); // Descomentar para CI/CD

        driver = new ChromeDriver(options);
        driver.get("https://banco-demo.com");
        loginPage = new LoginPage(driver);
        System.out.println("✓ Setup completado - Navegador iniciado");
    }

    @Test
    public void testLoginExitoso() {
        System.out.println("=== INICIANDO TEST: Login Exitoso ===");

        // Step 1: Click Iniciar Sesión
        loginPage.clickIniciarSesion();

        // Step 2-3: Ingresar credenciales
        loginPage.ingresarCredenciales("usuario@banco.com", "Pass123!");

        // Step 4: Click Entrar
        loginPage.clickEntrar();

        // Validaciones
        Assert.assertTrue(loginPage.isMensajeBienvenidaVisible(),
            "ERROR: Mensaje de bienvenida no visible después de login");
        System.out.println("✓ Validación: Mensaje Bienvenida visible");

        Assert.assertTrue(loginPage.isBotonCerrarSesionVisible(),
            "ERROR: Botón Cerrar Sesión no encontrado");
        System.out.println("✓ Validación: Botón Cerrar Sesión visible");

        System.out.println("=== TEST EXITOSO ===");
    }

    @AfterMethod
    public void teardown(ITestResult result) {
        if (!result.isSuccess()) {
            // Screenshot en caso de falla
            TakesScreenshot ts = (TakesScreenshot) driver;
            File screenshot = ts.getScreenshotAs(OutputType.FILE);
            // Guardar screenshot con timestamp
            System.out.println("✗ Test falló - Screenshot capturado");
        }

        if (driver != null) {
            driver.quit();
            System.out.println("✓ Navegador cerrado");
        }
    }
}`
    },
    {
      title: 'Caso 2: Agregar al Carrito E-commerce (Cypress JS)',
      testCase: `Test Case: Agregar Producto al Carrito

Precondiciones:
- Usuario en página de producto: /producto/laptop-hp-pavilion

Pasos:
1. Verificar título producto = "Laptop HP Pavilion 15"
2. Verificar precio = "$899.99"
3. Seleccionar cantidad = 2
4. Click botón "Agregar al Carrito"
5. Esperar confirmación toast "Producto agregado"
6. Click ícono carrito (top-right)
7. Verificar carrito contiene 2 unidades del producto

Resultado Esperado:
- Carrito muestra 2x Laptop HP Pavilion
- Subtotal = $1,799.98`,
      badPrompt: {
        text: 'Script Cypress para agregar producto al carrito',
        problems: [
          'No especifica estructura del test (describe/it)',
          'Sin selectores CSS/data-testid',
          'No menciona validaciones específicas',
          'Falta espera de toast/confirmación',
          'Sin verificación de cantidad en carrito',
          'No indica organización de archivos'
        ]
      },
      goodPrompt: {
        text: `[ROL] QA Automation con expertise en Cypress + JavaScript moderno.

[CONTEXTO]
- Framework: Cypress 13.x
- Estructura: cypress/e2e/ + cypress/support/pages/
- App: E-commerce en https://shop-demo.com
- Sintaxis: ES6 con arrow functions

[TAREA]
Genera test automatizado completo para agregar producto al carrito.

TEST CASE:
Test Case: Agregar Producto al Carrito

Precondiciones:
- Usuario en página de producto: /producto/laptop-hp-pavilion

Pasos:
1. Verificar título producto = "Laptop HP Pavilion 15"
2. Verificar precio = "$899.99"
3. Seleccionar cantidad = 2
4. Click botón "Agregar al Carrito"
5. Esperar confirmación toast "Producto agregado"
6. Click ícono carrito (top-right)
7. Verificar carrito contiene 2 unidades del producto

Resultado Esperado:
- Carrito muestra 2x Laptop HP Pavilion
- Subtotal = $1,799.98

SELECTORES (data-testid preferido):
- Título producto: [data-testid="product-title"]
- Precio: [data-testid="product-price"]
- Input cantidad: [data-testid="quantity-input"]
- Botón agregar: [data-testid="add-to-cart-btn"]
- Toast confirmación: .toast-success (clase CSS)
- Ícono carrito: [data-testid="cart-icon"]
- Badge cantidad carrito: [data-testid="cart-badge"]
- Item en carrito: [data-testid="cart-item"]

REQUERIMIENTOS:
1. Archivo: cypress/e2e/cart/add-to-cart.cy.js
2. Page Object: cypress/support/pages/ProductPage.js
3. Hooks: beforeEach para navegación inicial
4. Esperas con cy.contains() y should('be.visible')
5. Assertions encadenadas con .should()
6. Logs descriptivos con cy.log()
7. Interceptar llamadas API (si aplica)

OUTPUT: Código Cypress listo para ejecutar con npm run cypress`,
        benefits: [
          '✅ Especifica Cypress 13 + estructura de folders',
          '✅ Usa data-testid (best practice para testing)',
          '✅ Incluye Page Object para reusabilidad',
          '✅ Validaciones con .should() (Cypress idiomático)',
          '✅ Espera toast con cy.contains()',
          '✅ Verificaciones numéricas explícitas'
        ]
      },
      generatedCode: `// cypress/support/pages/ProductPage.js
export class ProductPage {
  // Locators
  elements = {
    productTitle: () => cy.get('[data-testid="product-title"]'),
    productPrice: () => cy.get('[data-testid="product-price"]'),
    quantityInput: () => cy.get('[data-testid="quantity-input"]'),
    addToCartBtn: () => cy.get('[data-testid="add-to-cart-btn"]'),
    toastSuccess: () => cy.get('.toast-success'),
    cartIcon: () => cy.get('[data-testid="cart-icon"]'),
    cartBadge: () => cy.get('[data-testid="cart-badge"]'),
    cartItems: () => cy.get('[data-testid="cart-item"]')
  }

  // Actions
  visitProduct(productSlug) {
    cy.visit(\`/producto/\${productSlug}\`)
    cy.log('✓ Navegado a página de producto')
  }

  verifyProductTitle(expectedTitle) {
    this.elements.productTitle()
      .should('be.visible')
      .and('have.text', expectedTitle)
    cy.log(\`✓ Título verificado: \${expectedTitle}\`)
  }

  verifyProductPrice(expectedPrice) {
    this.elements.productPrice()
      .should('contain.text', expectedPrice)
    cy.log(\`✓ Precio verificado: \${expectedPrice}\`)
  }

  selectQuantity(quantity) {
    this.elements.quantityInput()
      .clear()
      .type(quantity.toString())
    cy.log(\`✓ Cantidad seleccionada: \${quantity}\`)
  }

  clickAddToCart() {
    this.elements.addToCartBtn()
      .should('be.enabled')
      .click()
    cy.log('✓ Click en Agregar al Carrito')
  }

  verifyToastConfirmation() {
    this.elements.toastSuccess()
      .should('be.visible')
      .and('contain.text', 'Producto agregado')
    cy.log('✓ Toast de confirmación visible')
  }

  openCart() {
    this.elements.cartIcon().click()
    cy.log('✓ Carrito abierto')
  }

  verifyCartItemCount(expectedCount) {
    this.elements.cartBadge()
      .should('have.text', expectedCount.toString())
    cy.log(\`✓ Badge carrito muestra: \${expectedCount}\`)
  }

  verifyCartContainsProduct(productName, quantity) {
    this.elements.cartItems()
      .should('contain.text', productName)
      .and('contain.text', \`\${quantity}x\`)
    cy.log(\`✓ Carrito contiene: \${quantity}x \${productName}\`)
  }
}

// cypress/e2e/cart/add-to-cart.cy.js
import { ProductPage } from '../../support/pages/ProductPage'

describe('Carrito de Compras - Agregar Productos', () => {
  const productPage = new ProductPage()

  beforeEach(() => {
    // Setup: Limpiar cookies y navegar
    cy.clearCookies()
    cy.clearLocalStorage()
    productPage.visitProduct('laptop-hp-pavilion')
  })

  it('Debe agregar 2 unidades de Laptop HP al carrito', () => {
    cy.log('=== INICIANDO TEST: Agregar al Carrito ===')

    // Step 1: Verificar título
    productPage.verifyProductTitle('Laptop HP Pavilion 15')

    // Step 2: Verificar precio
    productPage.verifyProductPrice('$899.99')

    // Step 3: Seleccionar cantidad 2
    productPage.selectQuantity(2)

    // Step 4: Click Agregar al Carrito
    productPage.clickAddToCart()

    // Step 5: Verificar toast confirmación
    productPage.verifyToastConfirmation()

    // Step 6: Abrir carrito
    productPage.openCart()

    // Step 7: Verificar producto en carrito
    productPage.verifyCartItemCount(2)
    productPage.verifyCartContainsProduct('Laptop HP Pavilion 15', 2)

    // Validación final: Subtotal
    cy.get('[data-testid="cart-subtotal"]')
      .should('contain.text', '$1,799.98')
    cy.log('✓ Subtotal verificado: $1,799.98')

    cy.log('=== TEST EXITOSO ===')
  })
})`
    }
  ];

  processSteps: Step[] = [
    {
      number: 1,
      title: 'Analizar Test Case Manual',
      description: 'Lee el test case completo: precondiciones, pasos, datos esperados.',
      example: 'Identifica: ¿Qué elementos interactúa? ¿Qué valida? ¿Cuántos pasos tiene?',
      tips: [
        'Subraya acciones clave: click, ingresar, verificar',
        'Identifica datos variables (credenciales, montos)',
        'Nota validaciones explícitas vs implícitas'
      ]
    },
    {
      number: 2,
      title: 'Inspeccionar Selectores HTML',
      description: 'Abre DevTools y encuentra locators estables (id, data-testid, clases únicas).',
      example: 'Botón Login: id="btnLogin" (preferible) vs xpath="//button[2]" (frágil)',
      tips: [
        'Prioridad: id > data-testid > class única > XPath',
        'Evita selectores con índices [1], [2]',
        'Verifica que selector sea único ($$("selector") retorna 1 elemento)'
      ]
    },
    {
      number: 3,
      title: 'Elegir Herramienta y Lenguaje',
      description: 'Decide: Selenium (Java/Python), Cypress (JS), Playwright (multi-lenguaje).',
      example: 'Frontend team con React → Cypress. Enterprise Java → Selenium TestNG',
      tips: [
        'Reutiliza stack del equipo (no mezcles 3 frameworks)',
        'Considera CI/CD: ¿Qué soporta tu pipeline?',
        'Revisa slide 3 de esta clase para comparativa'
      ]
    },
    {
      number: 4,
      title: 'Construir Prompt Estructurado',
      description: 'Usa template [ROL][CONTEXTO][TAREA] con test case, selectores, requerimientos técnicos.',
      example: 'Ver ejemplos comparativos en slide anterior',
      tips: [
        'Incluye test case completo (copy-paste)',
        'Lista selectores inspeccionados',
        'Especifica patrón: POM, AAA, Screenplay',
        'Pide waits explícitos y assertions'
      ]
    },
    {
      number: 5,
      title: 'Generar y Revisar Código',
      description: 'Ejecuta prompt, obtén código, haz code review rápido.',
      example: 'Verifica: ¿Usa waits? ¿Assertions claras? ¿Sin hardcoded sleeps?',
      tips: [
        'Revisa imports: librerías correctas',
        'Valida sintaxis con linter (ESLint, Checkstyle)',
        'Si hay errores obvios, pide correcciones a IA'
      ]
    },
    {
      number: 6,
      title: 'Ejecutar y Depurar',
      description: 'Corre el script localmente, identifica fallos (timing, selectores incorrectos).',
      example: 'ElementNotFound → Selector cambió o wait insuficiente',
      tips: [
        'Primera ejecución casi siempre falla (normal)',
        'Usa modo debug: Cypress UI, Selenium screenshots',
        'Ajusta waits si timeout: 10s → 20s en ambientes lentos',
        'Si selector falla, reinspecciona DOM (puede haber cambiado)'
      ]
    },
    {
      number: 7,
      title: 'Refactorizar y Documentar',
      description: 'Limpia código, extrae constantes, agrega comentarios, versionalo.',
      example: 'Extrae credenciales a config file, documenta en README cómo ejecutar',
      tips: [
        'Aplica DRY: si repites código, crea método helper',
        'Agrega README con: setup, ejecución, troubleshooting',
        'Commitea a repo con naming: feat(test): add login automation',
        'Integra a CI/CD pipeline (GitHub Actions, Jenkins)'
      ]
    }
  ];

  template = `[ROL] Actúa como QA Automation Engineer senior especializado en [HERRAMIENTA: Selenium/Cypress/Playwright/Appium].

[CONTEXTO]
- Framework: [Selenium WebDriver 4 / Cypress 13 / Playwright 1.x / Appium 2.x]
- Lenguaje: [Java 17 / Python 3.11 / JavaScript ES6 / TypeScript 5.x / C# .NET 8]
- Patrón de diseño: [Page Object Model / Screenplay / AAA (Arrange-Act-Assert)]
- Assertions: [TestNG / JUnit 5 / Cypress should() / Playwright expect() / PyTest]
- Build tool: [Maven / Gradle / npm / pip]
- CI/CD: [Jenkins / GitHub Actions / GitLab CI]
- App bajo test: [Descripción breve del sistema]

[TAREA]
Genera script de automatización completo y ejecutable para el siguiente test case.

TEST CASE MANUAL COMPLETO:
[Pegar test case textual con Precondiciones, Pasos numerados, Resultado Esperado]

SELECTORES HTML (INSPECCIONADOS):
- Elemento 1: [tipo="id/class/xpath/css/data-testid"] valor="[selector]"
- Elemento 2: [tipo] valor="[selector]"
- Elemento 3: [tipo] valor="[selector]"
[Listar TODOS los elementos que el script debe interactuar]

DATOS DE PRUEBA:
- Usuario: [usuario/email]
- Password: [password]
- Otros datos variables: [montos, textos, fechas]

REQUERIMIENTOS TÉCNICOS:
1. Estructura de archivos: [Page Object separado / Todo en un archivo]
2. Métodos setup/teardown: [@BeforeMethod/@AfterMethod / beforeEach/afterEach]
3. Waits: [Explícitos con WebDriverWait / Cypress auto-waits / Playwright auto-waits]
4. Assertions: [Con mensajes descriptivos para debugging]
5. Logs: [System.out / cy.log() / console.log / logger]
6. Screenshots: [En fallas / Siempre / Nunca]
7. Configuración driver: [ChromeDriver / geckodriver / headless options]

VALIDACIONES ESPECÍFICAS:
- Validación 1: [Qué verificar y cómo]
- Validación 2: [Elemento visible/invisible/texto/URL]
- Validación 3: [Valor numérico/fecha/estado]

OUTPUT:
- Código fuente completo y listo para ejecutar
- Comentarios explicativos en pasos críticos
- Manejo de errores y excepciones
- Compatible con ejecución local Y CI/CD`;

  challenges: Challenge[] = [
    {
      id: 1,
      difficulty: 'Fácil',
      title: 'Búsqueda de Productos en E-commerce (Cypress)',
      testCases: [
        'Usuario busca "laptop" en barra de búsqueda',
        'Sistema muestra resultados con título "Laptops"',
        'Al menos 5 productos visibles en grid',
        'Primer resultado contiene palabra "laptop" en título'
      ],
      context: [
        'App: E-commerce en React',
        'Framework: Cypress 13.x + JavaScript',
        'Selectores: data-testid disponibles',
        'API de búsqueda: /api/search?q=laptop'
      ],
      requirements: [
        'Archivo: cypress/e2e/search/product-search.cy.js',
        'Interceptar llamada API de búsqueda con cy.intercept()',
        'Validar que response.body.results.length >= 5',
        'Verificar grid de productos visible',
        'Assertion sobre primer producto (contains "laptop")'
      ],
      hints: [
        'Usa cy.intercept() para espiar request/response de API',
        'cy.get("[data-testid=product-grid]").children() para contar productos',
        'Assertion con .should("have.length.at.least", 5)',
        'cy.contains() es más robusto que cy.get() para textos dinámicos'
      ],
      color: 'green'
    },
    {
      id: 2,
      difficulty: 'Intermedio',
      title: 'Transferencia Bancaria con Validaciones (Selenium Java)',
      testCases: [
        'Login con usuario válido',
        'Navegar a módulo "Transferencias"',
        'Ingresar cuenta destino: 1234567890',
        'Ingresar monto: $500.00',
        'Ingresar descripción: "Pago servicio"',
        'Click "Transferir" → Confirmación con OTP',
        'Ingresar OTP: 123456 (mock)',
        'Confirmar → Validar mensaje éxito',
        'Verificar que saldo disminuyó en $500.00'
      ],
      context: [
        'App bancaria con flujo multi-paso',
        'Selenium WebDriver 4 + Java 17 + TestNG',
        'Patrón: Page Object Model (3 páginas: Login, Transfer, Confirmation)',
        'Saldo inicial mock: $10,000.00'
      ],
      requirements: [
        'Clases: LoginPage.java, TransferPage.java, ConfirmationPage.java, TransferTest.java',
        'WebDriverWait explícito en cada transición',
        'Assertion de saldo con tolerancia (ejemplo: delta ±$0.01)',
        'Screenshot si alguna validación falla',
        'Soft assertions con TestNG (continuar si falla una validación)',
        'Logs informativos en cada paso crítico'
      ],
      hints: [
        'Usa SoftAssert para no detener test en primera falla',
        'Parsea saldo: String "$10,000.00" → double 10000.00 (remove $ y comas)',
        'Espera modal de OTP con ExpectedConditions.visibilityOfElementLocated()',
        'Validación saldo: Assert.assertEquals(saldoFinal, saldoInicial - 500, 0.01)',
        'TakesScreenshot en @AfterMethod si ITestResult.getStatus() == FAILURE'
      ],
      color: 'blue'
    },
    {
      id: 3,
      difficulty: 'Avanzado',
      title: 'Checkout Completo Multi-Paso con Playwright (TypeScript)',
      testCases: [
        'Agregar 3 productos diferentes al carrito',
        'Ir a checkout',
        'Step 1: Ingresar dirección de envío (autocompletar con Google Maps API)',
        'Step 2: Seleccionar método de envío "Express" ($15)',
        'Step 3: Ingresar datos de tarjeta (mock: 4111 1111 1111 1111)',
        'Step 4: Revisar orden completa',
        'Confirmar compra',
        'Validar: Número de orden generado, Email de confirmación enviado (mock)',
        'Validar: Carrito vacío después de compra'
      ],
      context: [
        'E-commerce complejo con wizard multi-paso',
        'Playwright 1.x + TypeScript + Expect assertions',
        'Integraciones: Google Maps autocomplete, Stripe mock',
        'Tests paralelos (3 workers)',
        'Headless en CI/CD, headed local'
      ],
      requirements: [
        'Estructura: tests/checkout/complete-checkout.spec.ts + pages/ (POM)',
        'Fixtures: productos.json con 3 productos de test',
        'Manejar iframe de tarjeta (Stripe embedded)',
        'Esperar múltiples elementos con Promise.all()',
        'Assertions con expect(page).toHaveURL(), expect(element).toHaveText()',
        'Mock de API email: page.route("**/api/send-email", ...)',
        'Screenshot y video en fallas (playwright.config.ts)',
        'Cleanup: Vaciar carrito en afterEach'
      ],
      hints: [
        'Usa page.waitForLoadState("networkidle") después de cada step',
        'Iframe Stripe: const frame = page.frameLocator("iframe[name=stripe]")',
        'Productos fixture: await page.route("**/api/cart", { json: productos })',
        'Orden generada: const orderNumber = await page.locator("#order-number").textContent()',
        'Validar carrito vacío: expect(page.locator(".cart-item")).toHaveCount(0)',
        'Tests paralelos: workers: 3 en playwright.config.ts',
        'Video: use: { video: "on-first-retry" }'
      ],
      color: 'orange'
    }
  ];

  professionalTips = [
    {
      icon: '⏳',
      title: 'Usa Waits Explícitos, NO Sleeps',
      description: 'Thread.sleep(5000) es anti-pattern. Usa WebDriverWait, cy.should(), page.waitFor().',
      example: 'Mal: sleep(5000). Bien: wait.until(ExpectedConditions.visibilityOf(element))'
    },
    {
      icon: '🏗️',
      title: 'Page Object Model Siempre',
      description: 'Separa locators y acciones de tests. Facilita mantenimiento cuando cambia UI.',
      example: 'loginPage.ingresar(user, pass) vs driver.findElement(...).sendKeys(...) en test'
    },
    {
      icon: '🔍',
      title: 'Selectores Estables y Semánticos',
      description: 'Prioriza id, data-testid. Evita XPath frágiles con índices o texto cambiante.',
      example: 'Bien: [data-testid="submit-btn"]. Mal: //div[3]/button[contains(text(),"Enviar")]'
    },
    {
      icon: '✅',
      title: 'Assertions Descriptivas',
      description: 'Mensajes claros en assertions para debugging rápido.',
      example: 'Assert.assertTrue(loginSuccess, "ERROR: Login falló con credenciales válidas")'
    },
    {
      icon: '📸',
      title: 'Screenshots en Fallas',
      description: 'Captura screenshot automático cuando test falla. Invaluable para debugging en CI.',
      example: 'Configura en teardown/afterEach: if (testFailed) captureScreenshot()'
    },
    {
      icon: '🔄',
      title: 'Cleanup en AfterEach',
      description: 'Limpia estado entre tests: logout, vaciar carrito, reset DB. Tests deben ser independientes.',
      example: 'afterEach: cerrar sesión, borrar cookies, resetear datos de test'
    },
    {
      icon: '🚀',
      title: 'Integración CI/CD Desde Día 1',
      description: 'No esperes a tener 100 tests. Integra desde el primer script.',
      example: 'GitHub Actions: npm run test:e2e en cada PR. Jenkins: job nocturno ejecuta suite'
    },
    {
      icon: '📊',
      title: 'Reports Visuales',
      description: 'Genera reports HTML con screenshots, videos, logs. Facilita análisis de fallas.',
      example: 'TestNG reportng, Cypress Dashboard, Playwright HTML Reporter, Allure Framework'
    }
  ];

  deliverables = [
    {
      title: '🤖 Script Automatizado Ejecutable',
      description: 'Código fuente completo que se ejecuta sin errores',
      checkpoints: [
        'Archivo(s) de código con sintaxis válida',
        'Selectores correctos (verificados con inspección)',
        'Ejecuta localmente sin fallos',
        'Assertions pasan con datos de test'
      ]
    },
    {
      title: '📋 Prompt Documentado',
      description: 'Prompt estructurado usado para generar el script',
      checkpoints: [
        'Template completo con test case y selectores',
        'Requerimientos técnicos listados',
        'Puede ser reutilizado para test cases similares',
        'Ajustes iterativos documentados'
      ]
    },
    {
      title: '📹 Video/Screenshots de Ejecución',
      description: 'Evidencia visual del test ejecutándose exitosamente',
      checkpoints: [
        'Video o screenshots de pasos clave',
        'Assertions visibles (verde/pass)',
        'Logs de consola legibles',
        'Tiempo de ejecución aceptable (< 2 min por test)'
      ]
    }
  ];

  nextSteps = [
    'Integra script a suite de regresión del equipo',
    'Documenta en README: setup, dependencias, ejecución',
    'Configura ejecución en CI/CD (GitHub Actions, Jenkins)',
    'Próxima clase: Taller de Testing de APIs con IA (Postman/REST Assured)'
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
