import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Example {
  title?: string;
  legacyCode: string;
  legacyTech: string;
  targetTech: string;
  description: string;
  badPrompt: string;
  goodPrompt: string;
  refactoredCode: string;
  migrationNotes: string;
}

interface MigrationStrategy {
  name: string;
  icon: string;
  description: string;
  whenToUse: string;
  pros: string[];
  cons: string[];
  complexity: 'Baja' | 'Media' | 'Alta';
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
  legacyScenario: string;
  requirements: string[];
  expectedOutcome: string;
}

@Component({
  selector: 'app-clase8-migracion-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clase8-migracion-angular.component.html',
  styleUrls: [
    '../clase6-crud-backend/clase6-crud-backend.component.css',
    './clase8-migracion-angular.component.css'
  ]
})
export class Clase8MigracionAngularComponent {
  // Estado de acordeones
  activeSlide = 0;

  // Strategies de migración frontend
  migrationStrategies: MigrationStrategy[] = [
    {
      name: 'Rewrite Completo',
      icon: '🔄',
      description: 'Reescribir toda la aplicación desde cero en Angular',
      whenToUse: 'App pequeña (<5000 líneas), lógica simple, tiempo disponible',
      pros: [
        'Código limpio desde cero',
        'Arquitectura moderna (componentes, servicios, RxJS)',
        'Best practices Angular aplicadas',
        'Sin deuda técnica'
      ],
      cons: [
        'Tiempo considerable (2-4 semanas)',
        'Riesgo de perder funcionalidad',
        'Requiere testing exhaustivo',
        'No viable para apps grandes'
      ],
      complexity: 'Alta'
    },
    {
      name: 'Incremental (Strangler Fig)',
      icon: '🌱',
      description: 'Migrar módulo por módulo, coexistiendo legacy y Angular',
      whenToUse: 'Apps grandes (>10000 líneas), en producción, sin downtime',
      pros: [
        'Sin interrumpir producción',
        'Testing progresivo por módulo',
        'Rollback fácil si falla',
        'Equipo aprende Angular gradualmente'
      ],
      cons: [
        'Periodo de coexistencia largo (3-12 meses)',
        'Complejidad gestión routing dual',
        'Duplicación temporal de código',
        'Requiere disciplina del equipo'
      ],
      complexity: 'Media'
    },
    {
      name: 'Component-by-Component',
      icon: '🧩',
      description: 'Convertir cada función/módulo en componente Angular standalone',
      whenToUse: 'App modular, funciones independientes, migración ágil',
      pros: [
        'Conversión 1 a 1 predictible',
        'Reutilización de lógica existente',
        'Testing por componente',
        'Entregables incrementales cada sprint'
      ],
      cons: [
        'Puede heredar malas prácticas',
        'Arquitectura fragmentada si no se planea',
        'Requiere refactoring posterior',
        'Variables globales legacy problemáticas'
      ],
      complexity: 'Media'
    },
    {
      name: 'Lift-and-Shift (Wrapper)',
      icon: '📦',
      description: 'Envolver código legacy en componentes Angular como wrapper',
      whenToUse: 'Prototipo rápido, PoC, validar factibilidad migración',
      pros: [
        'Migración rápida (días)',
        'Código legacy funciona sin cambios',
        'Permite probar Angular en producción',
        'Bajo riesgo inicial'
      ],
      cons: [
        'No es migración real (sigue siendo legacy)',
        'Debugging complejo (2 paradigmas)',
        'Performance degradado',
        'Deuda técnica aumenta'
      ],
      complexity: 'Baja'
    }
  ];

  // Ejemplo principal: CRUD de Productos en Vanilla JS → Angular
  mainExample: Example = {
    title: 'CRUD Productos Vanilla JS → Angular',
    legacyCode: `<!-- legacy-products.html (Vanilla JS) -->
<!DOCTYPE html>
<html>
<head>
  <title>Productos</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <h1>Gestión de Productos</h1>

    <!-- Formulario -->
    <div id="form-container">
      <h2>Nuevo Producto</h2>
      <form id="product-form">
        <input type="text" id="name" placeholder="Nombre" required>
        <input type="number" id="price" placeholder="Precio" required>
        <select id="category">
          <option value="Electrónica">Electrónica</option>
          <option value="Ropa">Ropa</option>
          <option value="Alimentos">Alimentos</option>
        </select>
        <button type="submit">Guardar</button>
      </form>
    </div>

    <!-- Tabla -->
    <div id="products-container">
      <h2>Lista de Productos</h2>
      <table id="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="products-tbody"></tbody>
      </table>
    </div>
  </div>

  <script src="products.js"></script>
</body>
</html>`,
    legacyTech: 'Vanilla JS + HTML + LocalStorage',
    targetTech: 'Angular 18 Standalone + TypeScript',
    description: 'CRUD completo de productos con formulario, tabla, y persistencia en LocalStorage',
    badPrompt: `Convierte este código HTML y JavaScript a Angular`,
    goodPrompt: `[ROL] Actúa como arquitecto senior de Angular especializado en migraciones frontend

[CONTEXTO]
- Legacy: Aplicación Vanilla JS de gestión de productos (CRUD)
- Persistencia: LocalStorage
- Funcionalidad: Crear, listar, editar, eliminar productos
- Campos: id (generado), nombre (string), precio (number), categoría (select)
- Validaciones: nombre requerido, precio > 0, categoría obligatoria

[ANÁLISIS CÓDIGO LEGACY]
Identificado:
- Manipulación directa del DOM (document.getElementById, innerHTML)
- Event listeners inline y addEventListener
- Variables globales (products array)
- LocalStorage.getItem/setItem sin tipado
- Sin separación de responsabilidades (todo en un archivo)
- Sin manejo de errores en localStorage

[TAREA]
Migra este CRUD a Angular 18 standalone con arquitectura moderna:

1. **Estructura de componentes:**
   - ProductListComponent (componente principal)
   - ProductFormComponent (formulario hijo)
   - ProductTableComponent (tabla hijo)
   - ProductService (lógica negocio + localStorage)

2. **Modelo TypeScript:**
   - Interface Product { id: string; name: string; price: number; category: string; }
   - Enum Category { Electronics, Clothing, Food }

3. **Servicios:**
   - ProductService con métodos: getAll(), create(), update(), delete()
   - LocalStorageService genérico reutilizable

4. **Componente Form:**
   - Reactive Forms con FormBuilder
   - Validaciones: name (required, minLength 3), price (required, min 1), category (required)
   - @Output() para emitir producto guardado al padre

5. **Componente Table:**
   - @Input() products
   - @Output() onEdit, onDelete para comunicar acciones al padre
   - Pipe para formatear precio ($)

6. **Mejoras sobre legacy:**
   - Tipado TypeScript estricto
   - Comunicación padre-hijo con @Input/@Output
   - Reactive Forms con validaciones
   - Service para lógica reutilizable
   - Error handling en localStorage (try/catch)
   - Confirmación antes de eliminar

[FORMATO]
Genera código completo funcional para:
- product.model.ts (interface + enum)
- product.service.ts (con localStorage wrapper)
- product-form.component.ts + .html
- product-table.component.ts + .html
- product-list.component.ts + .html (componente principal)

Incluye imports, decoradores, tipado completo, y comentarios explicativos.`,
    refactoredCode: `// ========== product.model.ts ==========
export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
}

export enum Category {
  Electronics = 'Electrónica',
  Clothing = 'Ropa',
  Food = 'Alimentos'
}

// ========== product.service.ts ==========
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, Category } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly STORAGE_KEY = 'products';
  private productsSubject = new BehaviorSubject<Product[]>([]);
  public products$ = this.productsSubject.asObservable();

  constructor() {
    this.loadProducts();
  }

  private loadProducts(): void {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      const products = stored ? JSON.parse(stored) : [];
      this.productsSubject.next(products);
    } catch (error) {
      console.error('Error loading products from localStorage:', error);
      this.productsSubject.next([]);
    }
  }

  private saveProducts(products: Product[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
      this.productsSubject.next(products);
    } catch (error) {
      console.error('Error saving products to localStorage:', error);
      throw new Error('No se pudo guardar el producto');
    }
  }

  getAll(): Observable<Product[]> {
    return this.products$;
  }

  create(product: Omit<Product, 'id'>): void {
    const products = this.productsSubject.value;
    const newProduct: Product = {
      ...product,
      id: crypto.randomUUID() // Generación segura de ID
    };
    this.saveProducts([...products, newProduct]);
  }

  update(id: string, updatedProduct: Partial<Product>): void {
    const products = this.productsSubject.value;
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
      throw new Error('Producto no encontrado');
    }

    products[index] = { ...products[index], ...updatedProduct };
    this.saveProducts([...products]);
  }

  delete(id: string): void {
    const products = this.productsSubject.value.filter(p => p.id !== id);
    this.saveProducts(products);
  }
}

// ========== product-form.component.ts ==========
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from './product.model';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: \`
    <div class="form-container">
      <h2>Nuevo Producto</h2>
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <input
            type="text"
            formControlName="name"
            placeholder="Nombre"
            [class.error]="productForm.get('name')?.invalid && productForm.get('name')?.touched">
          <span class="error-msg" *ngIf="productForm.get('name')?.hasError('required') && productForm.get('name')?.touched">
            Nombre es requerido
          </span>
          <span class="error-msg" *ngIf="productForm.get('name')?.hasError('minlength')">
            Mínimo 3 caracteres
          </span>
        </div>

        <div class="form-group">
          <input
            type="number"
            formControlName="price"
            placeholder="Precio"
            [class.error]="productForm.get('price')?.invalid && productForm.get('price')?.touched">
          <span class="error-msg" *ngIf="productForm.get('price')?.hasError('required') && productForm.get('price')?.touched">
            Precio es requerido
          </span>
          <span class="error-msg" *ngIf="productForm.get('price')?.hasError('min')">
            Precio debe ser mayor a 0
          </span>
        </div>

        <div class="form-group">
          <select formControlName="category">
            <option value="">Seleccione categoría</option>
            <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
          </select>
          <span class="error-msg" *ngIf="productForm.get('category')?.invalid && productForm.get('category')?.touched">
            Categoría es requerida
          </span>
        </div>

        <button type="submit" [disabled]="productForm.invalid">Guardar</button>
      </form>
    </div>
  \`
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated = new EventEmitter<Omit<Product, 'id'>>();

  productForm!: FormGroup;
  categories = Object.values(Category);

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(1)]],
      category: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productCreated.emit(this.productForm.value);
      this.productForm.reset();
    }
  }
}

// ========== product-table.component.ts ==========
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product.model';

@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div class="table-container">
      <h2>Lista de Productos ({{ products.length }})</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of products">
            <td>{{ product.id.substring(0, 8) }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.price | currency:'USD':'symbol':'1.2-2' }}</td>
            <td>{{ product.category }}</td>
            <td class="actions">
              <button class="edit-btn" (click)="edit.emit(product)">Editar</button>
              <button class="delete-btn" (click)="delete.emit(product.id)">Eliminar</button>
            </td>
          </tr>
          <tr *ngIf="products.length === 0">
            <td colspan="5" class="empty">No hay productos registrados</td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
})
export class ProductTableComponent {
  @Input() products: Product[] = [];
  @Output() edit = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<string>();
}

// ========== product-list.component.ts (Componente Principal) ==========
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './product.service';
import { ProductFormComponent } from './product-form.component';
import { ProductTableComponent } from './product-table.component';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductFormComponent, ProductTableComponent],
  template: \`
    <div class="product-app">
      <h1>Gestión de Productos</h1>

      <app-product-form
        (productCreated)="onProductCreated($event)">
      </app-product-form>

      <app-product-table
        [products]="products"
        (edit)="onEdit($event)"
        (delete)="onDelete($event)">
      </app-product-table>
    </div>
  \`
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  onProductCreated(product: Omit<Product, 'id'>): void {
    try {
      this.productService.create(product);
      alert('Producto creado exitosamente');
    } catch (error) {
      alert('Error al crear producto: ' + error);
    }
  }

  onEdit(product: Product): void {
    // TODO: Implementar modal de edición
    console.log('Editar producto:', product);
  }

  onDelete(id: string): void {
    if (confirm('¿Está seguro de eliminar este producto?')) {
      this.productService.delete(id);
      alert('Producto eliminado');
    }
  }
}

// ========== TESTS (product.service.spec.ts) ==========
import { TestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { Category } from './product.model';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should create product with generated ID', (done) => {
    const newProduct = {
      name: 'Laptop',
      price: 1500,
      category: Category.Electronics
    };

    service.create(newProduct);

    service.getAll().subscribe(products => {
      expect(products.length).toBe(1);
      expect(products[0].name).toBe('Laptop');
      expect(products[0].id).toBeDefined();
      done();
    });
  });

  it('should delete product by ID', (done) => {
    service.create({ name: 'Mouse', price: 25, category: Category.Electronics });

    service.getAll().subscribe(products => {
      const id = products[0].id;
      service.delete(id);

      service.getAll().subscribe(updatedProducts => {
        expect(updatedProducts.length).toBe(0);
        done();
      });
    });
  });

  it('should persist to localStorage', () => {
    service.create({ name: 'Teclado', price: 80, category: Category.Electronics });

    const stored = localStorage.getItem('products');
    expect(stored).toBeTruthy();

    const products = JSON.parse(stored!);
    expect(products.length).toBe(1);
    expect(products[0].name).toBe('Teclado');
  });
});`,
    migrationNotes: `**Mejoras arquitectónicas respecto al legacy:**

1. **Tipado TypeScript:** Interfaces y enums eliminan errores de runtime
2. **Reactive Programming:** BehaviorSubject permite reactividad automática
3. **Componentes reutilizables:** Form y Table son independientes y reutilizables
4. **Reactive Forms:** Validaciones declarativas, mejor UX
5. **Comunicación componentes:** @Input/@Output clara y predecible
6. **Error handling:** Try/catch en localStorage, mensajes al usuario
7. **Testing:** Service testeable con Jasmine/Karma (sin DOM)
8. **Separación responsabilidades:** Service maneja datos, components maneja UI

**Diferencias clave legacy vs Angular:**
- **Legacy:** Manipulación directa DOM → **Angular:** Data binding automático
- **Legacy:** Variables globales → **Angular:** Services con inyección dependencias
- **Legacy:** addEventListener dispersos → **Angular:** (click) declarativo
- **Legacy:** Sin tipado → **Angular:** TypeScript estricto
- **Legacy:** Sin arquitectura → **Angular:** Componentes, services, pipes, modelos`
  };

  // Ejemplos adicionales
  additionalExamples: Example[] = [
    {
      title: 'jQuery SPA → Angular Router',
      legacyCode: `// jQuery SPA with routing
$(document).ready(function() {
  // Router manual
  window.addEventListener('hashchange', router);

  function router() {
    const route = window.location.hash.slice(1);
    $('.page').hide();

    switch(route) {
      case '/home':
        $('#home-page').show();
        loadProducts();
        break;
      case '/cart':
        $('#cart-page').show();
        loadCart();
        break;
      default:
        $('#home-page').show();
    }
  }

  // Variables globales
  let cart = [];
  let products = [];

  // Cargar productos
  function loadProducts() {
    $.ajax({
      url: '/api/products',
      success: function(data) {
        products = data;
        renderProducts();
      }
    });
  }

  // Renderizar
  function renderProducts() {
    $('#products-list').empty();
    products.forEach(function(p) {
      $('#products-list').append(
        '<div class="product">' +
        '<h3>' + p.name + '</h3>' +
        '<p>$' + p.price + '</p>' +
        '<button onclick="addToCart(' + p.id + ')">Agregar</button>' +
        '</div>'
      );
    });
  }

  // Agregar al carrito
  window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
  }

  router(); // Init
});`,
      legacyTech: 'jQuery SPA + Manual Routing + AJAX',
      targetTech: 'Angular Router + HttpClient + Services',
      description: 'SPA de e-commerce con routing manual y gestión de carrito global',
      badPrompt: `Convierte este código jQuery a Angular Router`,
      goodPrompt: `[ROL] Actúa como experto en migración jQuery → Angular

[ANÁLISIS LEGACY]
- Routing: Manual con hashchange listener
- State management: Variables globales (cart, products)
- HTTP: jQuery.ajax sin tipado
- Renderizado: Manipulación DOM con .append()
- Event handlers: onclick inline y funciones globales

[TAREA]
Migra a Angular con:
1. **Angular Router:** rutas /home, /cart con lazy loading
2. **Services:** ProductService (HttpClient), CartService (BehaviorSubject)
3. **State management:** Cart como Observable compartido
4. **Componentes:** ProductListComponent, ProductCardComponent, CartComponent
5. **Tipado:** Interfaces Product, CartItem

Genera código completo con routing module, services, components y comunicación entre ellos.`,
      refactoredCode: `// app-routing.module.ts con lazy loading
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./cart/cart.component').then(m => m.CartComponent)
  }
];

// cart.service.ts - Estado global reactivo
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  public cart$ = this.cartSubject.asObservable();
  public cartCount$ = this.cart$.pipe(map(items => items.length));

  addToCart(product: Product): void {
    const current = this.cartSubject.value;
    this.cartSubject.next([...current, { product, quantity: 1 }]);
  }

  removeFromCart(productId: number): void {
    const updated = this.cartSubject.value.filter(item => item.product.id !== productId);
    this.cartSubject.next(updated);
  }
}

// home.component.ts - Lista productos
export class HomeComponent implements OnInit {
  products$ = this.productService.getAll(); // Observable directo

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}

// home.component.html - Template con async pipe
<div class="products-grid">
  <app-product-card
    *ngFor="let product of products$ | async"
    [product]="product"
    (addToCart)="addToCart(product)">
  </app-product-card>
</div>`,
      migrationNotes: `**Mejoras clave:**
- Angular Router reemplaza routing manual
- HttpClient con tipado reemplaza $.ajax
- Services con RxJS reemplazan variables globales
- Async pipe evita suscripciones manuales
- Lazy loading mejora performance inicial`
    }
  ];

  // Proceso de migración paso a paso
  migrationProcess: Step[] = [
    {
      number: 1,
      title: 'Análisis del Código Legacy',
      description: 'Identificar funcionalidades, dependencias y lógica de negocio',
      action: `1. Inventario de funcionalidades: listar todas las features
2. Identificar dependencias: jQuery plugins, librerías externas
3. Mapear flujos de datos: cómo viaja la información
4. Detectar variables globales: candidatas a Services
5. Identificar manipulación DOM: candidatos a Components`,
      tip: `Crea un documento "Legacy Analysis" con:
- Funcionalidades principales (CRUD, routing, auth)
- Dependencias externas (jQuery, Lodash, Moment.js)
- Variables globales (estado compartido)
- Event handlers y listeners
- APIs consumidas`
    },
    {
      number: 2,
      title: 'Definir Estrategia de Migración',
      description: 'Elegir approach según tamaño, tiempo y riesgo',
      action: `Evaluar:
- **Tamaño:** <5000 líneas → Rewrite, >10000 líneas → Incremental
- **Producción:** Sin downtime → Strangler Fig
- **Equipo:** Sin experiencia Angular → Component-by-Component
- **Tiempo:** Urgente → Lift-and-Shift (temporal)

Decisión documentada: estrategia elegida + justificación`,
      tip: `Para apps medianas (5000-10000 líneas), Component-by-Component es el sweet spot:
- Balance velocidad/calidad
- Entregables cada sprint
- Equipo aprende progresivamente`
    },
    {
      number: 3,
      title: 'Crear Modelos TypeScript',
      description: 'Definir interfaces para datos que manejaba el legacy',
      action: `1. Identificar objetos del legacy (user, product, order)
2. Crear interfaces TypeScript con tipado estricto
3. Crear enums para valores constantes (Status, Category)
4. Validar con datos reales del legacy

Ejemplo:
\`\`\`typescript
export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  stock: number;
  createdAt: Date;
}

export enum Category {
  Electronics = 'Electrónica',
  Clothing = 'Ropa'
}
\`\`\``,
      tip: `Usa el código legacy como fuente de verdad:
- Revisa qué campos realmente se usan
- Identifica campos opcionales (? en TypeScript)
- Documenta campos deprecated`
    },
    {
      number: 4,
      title: 'Migrar Lógica de Negocio a Services',
      description: 'Variables globales y funciones → Angular Services con RxJS',
      action: `1. Identificar variables globales (cart, currentUser, products)
2. Crear Service por dominio (CartService, AuthService)
3. Usar BehaviorSubject para estado reactivo
4. Migrar funciones helpers a métodos del service

Antes (legacy):
\`\`\`javascript
let cart = [];
function addToCart(product) { cart.push(product); }
\`\`\`

Después (Angular):
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    this.cartSubject.next([...this.cartSubject.value, product]);
  }
}
\`\`\``,
      tip: `No migres funciones 1 a 1 ciegamente:
- Agrupa funciones relacionadas en un Service
- Usa RxJS operators (map, filter, switchMap) para flujos complejos
- Evita lógica en componentes, muévela a Services`
    },
    {
      number: 5,
      title: 'Convertir HTML/JS en Componentes Angular',
      description: 'Secciones HTML + JS handlers → Componentes standalone',
      action: `1. Dividir UI en componentes (1 responsabilidad cada uno)
2. Crear componente standalone con decorador @Component
3. Migrar HTML: eliminar manipulación DOM, usar property binding
4. Migrar eventos: onclick → (click), addEventListener → (event)
5. Inyectar Services necesarios en constructor

Estructura:
- ProductListComponent (lista)
- ProductCardComponent (card individual)
- ProductFormComponent (formulario)
- ProductDetailComponent (detalle)`,
      tip: `Regla de oro: componentes pequeños y reutilizables
- Si un componente tiene >200 líneas HTML, divídelo
- Si maneja >3 responsabilidades, divídelo
- Usa @Input/@Output para comunicación clara`
    },
    {
      number: 6,
      title: 'Implementar Routing (si aplica)',
      description: 'Routing manual → Angular Router con lazy loading',
      action: `1. Identificar "rutas" del legacy (hashchange, URLs manuales)
2. Crear routes config con lazy loading
3. Reemplazar navegación manual con routerLink
4. Migrar guards si había validaciones de acceso

Ejemplo:
\`\`\`typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component') },
  { path: 'product/:id', loadComponent: () => import('./product-detail/detail.component') }
];
\`\`\``,
      tip: `Lazy loading es crítico para performance:
- Divide por features (productos, carrito, perfil)
- Carga solo lo necesario por ruta
- Mejora initial load time vs legacy monolítico`
    },
    {
      number: 7,
      title: 'Testing y Validación de Equivalencia',
      description: 'Asegurar que Angular funciona igual que legacy',
      action: `1. **Tests unitarios:** Services con Jasmine/Karma
2. **Tests integración:** Componentes con TestBed
3. **Tests E2E:** Flujos completos con Cypress/Playwright
4. **Validación manual:** Comparar lado a lado legacy vs Angular

Checklist:
✅ Todas las funcionalidades legacy funcionan en Angular
✅ Datos se persisten igual (localStorage, API)
✅ Validaciones de formularios equivalentes
✅ Performance igual o mejor que legacy
✅ Tests automatizados con >70% coverage`,
      tip: `Test de equivalencia crítico:
Ejecuta legacy y Angular en paralelo (mismo backend):
- Mismo input → mismo output
- Mismos datos en BD/localStorage
- Misma UX (o mejor)

Si difiere, documenta por qué (mejora intencional vs bug)`
    }
  ];

  // Desafíos progresivos
  challenges: Challenge[] = [
    {
      level: 'Fácil',
      difficulty: 'Facil',
      color: 'green',
      title: 'Migrar Contador Interactivo Vanilla JS',
      description: 'App simple de contador con incrementar/decrementar',
      legacyScenario: `<!-- index.html -->
<div id="counter-app">
  <h1>Contador</h1>
  <p>Valor: <span id="count">0</span></p>
  <button onclick="increment()">+</button>
  <button onclick="decrement()">-</button>
  <button onclick="reset()">Reset</button>
</div>

<script>
let count = 0;

function increment() {
  count++;
  document.getElementById('count').textContent = count;
}

function decrement() {
  count--;
  document.getElementById('count').textContent = count;
}

function reset() {
  count = 0;
  document.getElementById('count').textContent = count;
}
</script>`,
      requirements: [
        'Crear CounterComponent standalone',
        'Usar property binding para mostrar count',
        'Convertir onclick a (click) event binding',
        'Agregar botón "Historial" que muestre array de valores anteriores',
        'Agregar validación: no permitir valores negativos',
        'Styling con Tailwind CSS'
      ],
      expectedOutcome: 'Componente Angular funcional con estado reactivo, sin manipulación directa del DOM'
    },
    {
      level: 'Intermedio',
      difficulty: 'Intermedio',
      color: 'orange',
      title: 'Migrar Todo List con jQuery a Angular',
      description: 'CRUD completo con filtros y persistencia localStorage',
      legacyScenario: `// Todo List jQuery
$(document).ready(function() {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function render() {
    $('#todo-list').empty();
    todos.forEach(function(todo, index) {
      $('#todo-list').append(
        '<li class="' + (todo.done ? 'completed' : '') + '">' +
        '<input type="checkbox" ' + (todo.done ? 'checked' : '') +
        ' onchange="toggle(' + index + ')">' +
        '<span>' + todo.text + '</span>' +
        '<button onclick="deleteTodo(' + index + ')">X</button>' +
        '</li>'
      );
    });
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  $('#add-btn').click(function() {
    const text = $('#todo-input').val();
    todos.push({ text: text, done: false, createdAt: new Date() });
    render();
  });

  window.toggle = function(index) {
    todos[index].done = !todos[index].done;
    render();
  };

  window.deleteTodo = function(index) {
    todos.splice(index, 1);
    render();
  };

  render();
});`,
      requirements: [
        'Crear arquitectura: TodoListComponent (principal) + TodoItemComponent (hijo) + TodoService',
        'Interface Todo: { id: string; text: string; done: boolean; createdAt: Date; }',
        'Reactive Forms para agregar todo con validación (mínimo 3 caracteres)',
        'Filtros: Todos | Pendientes | Completados (botones toggle)',
        'LocalStorageService genérico reutilizable',
        'Tests unitarios para TodoService (crear, toggle, eliminar)',
        'Animaciones al agregar/eliminar (Angular animations)'
      ],
      expectedOutcome: 'App Angular completa con arquitectura limpia, componentes reutilizables, service con RxJS, tests'
    },
    {
      level: 'Avanzado',
      difficulty: 'Avanzado',
      color: 'red',
      title: 'Migrar Dashboard SPA Multi-página Legacy',
      description: 'Sistema completo con routing, autenticación, gráficos, y API real',
      legacyScenario: `// Dashboard legacy con routing manual
const app = {
  user: null,
  routes: {
    '/login': renderLogin,
    '/dashboard': renderDashboard,
    '/reports': renderReports,
    '/settings': renderSettings
  },

  init: function() {
    window.addEventListener('hashchange', this.router.bind(this));
    this.checkAuth();
    this.router();
  },

  checkAuth: function() {
    const token = localStorage.getItem('token');
    if (token) {
      $.ajax({
        url: '/api/auth/verify',
        headers: { 'Authorization': 'Bearer ' + token },
        success: function(user) {
          app.user = user;
        },
        error: function() {
          localStorage.removeItem('token');
          window.location.hash = '/login';
        }
      });
    }
  },

  router: function() {
    const route = window.location.hash.slice(1) || '/login';
    $('#app-container').empty();

    if (route !== '/login' && !this.user) {
      window.location.hash = '/login';
      return;
    }

    this.routes[route]();
  }
};

function renderDashboard() {
  $.ajax({
    url: '/api/dashboard/stats',
    success: function(stats) {
      $('#app-container').html(
        '<h1>Dashboard</h1>' +
        '<div class="stats">' +
        '<div>Ventas: $' + stats.sales + '</div>' +
        '<div>Usuarios: ' + stats.users + '</div>' +
        '</div>' +
        '<canvas id="chart"></canvas>'
      );
      renderChart(stats.chartData);
    }
  });
}

function renderChart(data) {
  new Chart($('#chart'), {
    type: 'line',
    data: data
  });
}`,
      requirements: [
        'Angular Router con guards (AuthGuard para rutas protegidas)',
        'Arquitectura modular: AuthModule, DashboardModule, ReportsModule, SettingsModule (lazy loading)',
        'AuthService con JWT: login(), logout(), verifyToken(), interceptor para agregar token automático',
        'HttpClient con interceptores: token, manejo errores global, loading indicator',
        'State management con Services + BehaviorSubject o NgRx (opcional)',
        'Integración Chart.js en DashboardComponent con datos reales API',
        'Guards: AuthGuard (verifica token), RoleGuard (admin/user)',
        'Error handling: página 404, manejo errores API, toast notifications',
        'Tests E2E con Cypress: flujo login → dashboard → logout',
        'Responsive design: funciona mobile/tablet/desktop'
      ],
      expectedOutcome: 'SPA Angular enterprise-grade completa: routing avanzado, autenticación JWT, guards, lazy loading, interceptores HTTP, gráficos interactivos, tests E2E, arquitectura escalable'
    }
  ];

  // Tips profesionales
  professionalTips = [
    {
      title: 'Analiza Profundamente Antes de Migrar',
      description: 'Dedica 20-30% del tiempo a análisis del legacy. Identifica: funcionalidades reales usadas (vs código muerto), dependencias críticas, edge cases, y reglas de negocio ocultas. Un análisis pobre resulta en migraciones incompletas.',
      icon: '🔍'
    },
    {
      title: 'No Migres Código Muerto',
      description: 'Legacy tiene funcionalidades obsoletas nunca usadas. Valida con stakeholders qué se usa realmente. Migrar todo ciegamente aumenta deuda técnica en Angular sin valor.',
      icon: '🗑️'
    },
    {
      title: 'Mantén Lógica de Negocio, Mejora Arquitectura',
      description: 'La lógica de negocio del legacy es valiosa (años de refinamiento). Migrala exactamente, pero en arquitectura moderna (Services, RxJS). No "mejores" la lógica durante migración (riesgo bugs).',
      icon: '⚖️'
    },
    {
      title: 'Tests de Equivalencia Son Críticos',
      description: 'Ejecuta legacy y Angular en paralelo (mismo backend). Mismo input debe dar mismo output. Automatiza con Cypress: graba flujos en legacy, reprodúcelos en Angular, compara resultados.',
      icon: '🧪'
    },
    {
      title: 'Migración Incremental en Producción',
      description: 'Para apps grandes, usa Strangler Fig: despliega Angular y legacy simultáneamente, redirect progresivo de rutas (semana 1: /productos a Angular, semana 2: /carrito, etc). Rollback fácil si falla.',
      icon: '🌱'
    },
    {
      title: 'Documenta Decisiones de Migración',
      description: 'Crea doc "Migration Decisions": por qué elegiste X estrategia, por qué no migraste feature Y, cambios intencionales vs bugs. Crítico para auditorías y onboarding futuro.',
      icon: '📋'
    },
    {
      title: 'Usa IA para Análisis, No para Migración Ciega',
      description: 'IA excelente para: analizar legacy, identificar patrones, sugerir arquitectura Angular. Mala para: migrar 10,000 líneas automáticamente. Usa IA módulo por módulo con supervisión.',
      icon: '🤖'
    },
    {
      title: 'Plan de Rollback y Contingencia',
      description: 'Migración puede fallar. Ten plan B: cómo revertir a legacy, cuánto downtime es aceptable, backup de BD antes de migración. Feature flags ayudan: activa/desactiva Angular vs legacy sin redeploy.',
      icon: '🔙'
    }
  ];

  // Array de ejemplos para slides
  examples = [this.mainExample, ...this.additionalExamples];

  // Slides configuration
  slides = [
    { type: 'title', title: 'Refactoring Legacy Frontend con IA' },
    { type: 'theory', title: 'Por qué Migrar Legacy a Angular' },
    { type: 'tools', title: 'Estrategias de Migración' },
    { type: 'examples', title: 'Ejemplos: Legacy → Angular' },
    { type: 'process', title: 'Proceso de Migración Paso a Paso' },
    { type: 'template', title: 'Template Reutilizable' },
    { type: 'challenges', title: 'Desafíos Prácticos' },
    { type: 'tips', title: 'Tips Profesionales' },
    { type: 'summary', title: 'Resumen y Próximos Pasos' }
  ];

  currentSlide = 0;
  expandedTool = -1;
  expandedExample = -1;
  expandedStep = -1;
  expandedChallenge = -1;

  // Puntos teoría
  theoryPoints = [
    {
      icon: '🎯',
      title: 'Reducir Deuda Técnica',
      description: 'Legacy acumula años de parches. Angular moderno elimina código espagueti.',
      items: ['Arquitectura clara', 'Componentes reutilizables', 'TypeScript tipado'],
      color: 'blue'
    },
    {
      icon: '🚀',
      title: 'Mejor Performance',
      description: 'Angular optimiza con lazy loading, change detection, y AOT compilation.',
      items: ['Carga inicial reducida', 'Virtual scrolling', 'Bundle optimizado'],
      color: 'green'
    },
    {
      icon: '🔧',
      title: 'Mantenibilidad',
      description: 'Código estructurado es más fácil de mantener y escalar.',
      items: ['Testing unitario', 'Debugging facilitado', 'Onboarding rápido'],
      color: 'purple'
    },
    {
      icon: '👥',
      title: 'Talento Moderno',
      description: 'Desarrolladores prefieren stacks modernos (Angular, React, Vue).',
      items: ['Atracción talento', 'Motivación equipo', 'Skills transferibles'],
      color: 'orange'
    }
  ];

  // Template reutilizable
  template = `[ROL] Actúa como arquitecto senior de Angular especializado en migraciones frontend

[ANÁLISIS CÓDIGO LEGACY]
- Tecnología actual: [ej: Vanilla JS, jQuery]
- Funcionalidad: [descripción breve]
- Manipulación DOM: [ej: document.getElementById, .innerHTML]
- Variables globales: [listar]
- Event listeners: [cómo se manejan]
- Persistencia: [localStorage, cookies, etc]

[TAREA]
Migra este código a Angular 18 standalone con:
1. **Arquitectura componentes:** [ComponentePrincipal + hijos]
2. **Modelo TypeScript:** [interfaces necesarias]
3. **Services:** [lógica negocio + estado reactivo con RxJS]
4. **Comunicación:** [@Input/@Output entre componentes]
5. **Mejoras:** [tipado, validaciones, error handling]

[CÓDIGO LEGACY]
\`\`\`javascript
// Pegar código legacy aquí
\`\`\`

[FORMATO SALIDA]
Genera código completo Angular funcional:
- model.ts (interfaces + enums)
- service.ts (BehaviorSubject + métodos)
- components.ts + .html separados
- Incluir imports, decoradores, tipado completo`;

  deliverables = [
    {
      title: 'Código Angular Migrado',
      description: 'App legacy completamente refactorizada',
      checkpoints: [
        'Componentes standalone',
        'Services con RxJS',
        'Tipado TypeScript',
        'Arquitectura escalable'
      ]
    }
  ];

  nextSteps = [
    'Practica con una app legacy real de tu proyecto',
    'Elige estrategia según tamaño y riesgo',
    'Documenta decisiones de migración',
    'Usa tests de equivalencia para validar',
    'Migra incrementalmente módulo por módulo'
  ];

  // Métodos de navegación
  setActiveSlide(index: number) {
    this.activeSlide = index;
  }

  isActiveSlide(index: number): boolean {
    return this.activeSlide === index;
  }

  nextSlide() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') this.nextSlide();
    if (event.key === 'ArrowLeft') this.prevSlide();
  }

  toggleTool(index: number) {
    this.expandedTool = this.expandedTool === index ? -1 : index;
  }

  toggleExample(index: number) {
    this.expandedExample = this.expandedExample === index ? -1 : index;
  }

  toggleStep(index: number) {
    this.expandedStep = this.expandedStep === index ? -1 : index;
  }

  toggleChallenge(index: number) {
    this.expandedChallenge = this.expandedChallenge === index ? -1 : index;
  }

  copyTemplate() {
    navigator.clipboard.writeText(this.template);
    alert('✅ Template copiado al portapapeles');
  }
}
