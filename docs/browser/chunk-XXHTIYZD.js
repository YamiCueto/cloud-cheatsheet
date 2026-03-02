import{d as I,f as T}from"./chunk-V6XJS2PW.js";import"./chunk-DGPQBSVR.js";import{$ as h,Ab as e,Bb as O,Ib as x,Jc as y,Kb as u,Kc as S,Lb as s,Lc as E,Oa as i,Pc as A,Ub as _,Wb as n,Xb as d,Yb as b,Z as f,Zb as v,_ as C,aa as P,db as M,hb as m,yb as l,zb as t}from"./chunk-GRUBSZXT.js";import"./chunk-EQDQRRRY.js";function k(r,a){if(r&1&&(t(0,"div",15)(1,"div",16),n(2,"\u{1F3AF} TALLER PR\xC1CTICO"),e(),t(3,"h1"),n(4),e(),t(5,"h2",17),n(6,"Refactoring Legacy Frontend con IA (Vanilla JS/jQuery \u2192 Angular)"),e(),t(7,"div",18)(8,"div",19)(9,"span",20),n(10,"\u23F1\uFE0F"),e(),t(11,"span",21),n(12,"Duraci\xF3n"),e(),t(13,"span",22),n(14,"60 minutos"),e()(),t(15,"div",19)(16,"span",20),n(17,"\u{1F4CA}"),e(),t(18,"span",21),n(19,"Estructura"),e(),t(20,"span",22),n(21,"10 min teor\xEDa + 50 min pr\xE1ctica"),e()(),t(22,"div",19)(23,"span",20),n(24,"\u{1F381}"),e(),t(25,"span",21),n(26,"Entregable"),e(),t(27,"span",22),n(28,"C\xF3digo Angular funcional"),e()(),t(29,"div",19)(30,"span",20),n(31,"\u{1F4AA}"),e(),t(32,"span",21),n(33,"Nivel"),e(),t(34,"span",22),n(35,"Principiante-Intermedio"),e()()()()),r&2){let o=s().$implicit;i(4),d(o.title)}}function D(r,a){if(r&1&&(t(0,"li"),n(1),e()),r&2){let o=a.$implicit;i(),d(o)}}function F(r,a){if(r&1&&(t(0,"div",27)(1,"div",28),n(2),e(),t(3,"h3"),n(4),e(),t(5,"p"),n(6),e(),t(7,"ul"),m(8,D,2,1,"li",29),e()()),r&2){let o=a.$implicit;l("ngClass",o.color),i(2),d(o.icon),i(2),d(o.title),i(2),d(o.description),i(2),l("ngForOf",o.items)}}function j(r,a){if(r&1&&(t(0,"div",23)(1,"h2"),n(2),e(),t(3,"div",24),m(4,F,9,5,"div",25),e(),t(5,"div",26)(6,"strong"),n(7,"\u23F0 Recuerda:"),e(),n(8," Migrar\xE1s apps legacy Vanilla JS/jQuery a Angular moderno con arquitectura escalable. "),e()()),r&2){let o=s().$implicit,c=s();i(2),d(o.title),i(2),l("ngForOf",c.theoryPoints)}}function R(r,a){if(r&1&&(t(0,"li"),n(1),e()),r&2){let o=a.$implicit;i(),d(o)}}function z(r,a){if(r&1&&(t(0,"li"),n(1),e()),r&2){let o=a.$implicit;i(),d(o)}}function L(r,a){if(r&1&&(t(0,"div",37)(1,"p",38),n(2),e(),t(3,"div",39)(4,"strong"),n(5,"\u{1F4A1} Cu\xE1ndo usar:"),e(),n(6),e(),t(7,"div",40)(8,"div",41)(9,"h4"),n(10,"\u2705 Pros"),e(),t(11,"ul"),m(12,R,2,1,"li",29),e()(),t(13,"div",42)(14,"h4"),n(15,"\u26A0\uFE0F Cons"),e(),t(16,"ul"),m(17,z,2,1,"li",29),e()()(),t(18,"div",43)(19,"strong"),n(20,"Complejidad:"),e(),n(21),e()()),r&2){let o=s().$implicit;i(2),d(o.description),i(4),b(" ",o.whenToUse," "),i(6),l("ngForOf",o.pros),i(5),l("ngForOf",o.cons),i(),l("ngClass","complexity-"+o.complexity.toLowerCase()),i(3),b(" ",o.complexity," ")}}function q(r,a){if(r&1){let o=x();t(0,"div",32),u("click",function(){let p=f(o).index,g=s(3);return C(g.toggleTool(p))}),t(1,"div",33)(2,"span",34),n(3),e(),t(4,"h3"),n(5),e(),t(6,"span",35),n(7),e()(),m(8,L,22,6,"div",36),e()}if(r&2){let o=a.$implicit,c=a.index,p=s(3);i(3),d(o.icon),i(2),d(o.name),i(2),d(p.expandedTool===c?"\u25BC":"\u25B8"),i(),l("ngIf",p.expandedTool===c)}}function $(r,a){if(r&1&&(t(0,"div",23)(1,"h2"),n(2),e(),t(3,"p",17),n(4,"Estrategias de migraci\xF3n frontend seg\xFAn tama\xF1o, tiempo y riesgo"),e(),t(5,"div",30),m(6,q,9,4,"div",31),e()()),r&2){let o=s().$implicit,c=s();i(2),d(o.title),i(4),l("ngForOf",c.migrationStrategies)}}function V(r,a){if(r&1&&(t(0,"div",50)(1,"div",51)(2,"h4",52),n(3,"\u{1F4DC} C\xF3digo Legacy"),e(),t(4,"div",53)(5,"div")(6,"span",54),n(7,"Stack:"),e(),t(8,"span",55),n(9),e()(),t(10,"div")(11,"span",54),n(12,"Descripci\xF3n:"),e(),t(13,"span",55),n(14),e()()(),t(15,"pre",56)(16,"code"),n(17),e()()(),t(18,"div",57)(19,"div",58)(20,"div",59)(21,"span",20),n(22,"\u274C"),e(),t(23,"h4"),n(24,"Prompt Gen\xE9rico (No Recomendado)"),e()(),t(25,"div",60),n(26),e()(),t(27,"div",61)(28,"div",59)(29,"span",20),n(30,"\u2705"),e(),t(31,"h4"),n(32,"Prompt Estructurado (Recomendado)"),e()(),t(33,"div",60),n(34),e()()(),t(35,"div",62)(36,"h4",63),n(37,"\u2705 C\xF3digo Angular Refactorizado"),e(),t(38,"pre",64)(39,"code"),n(40),e()(),t(41,"div",65)(42,"h4",66),n(43,"\u{1F4DD} Notas de Migraci\xF3n"),e(),t(44,"pre",67),n(45),e()()()()),r&2){let o=s().$implicit;i(9),v("",o.legacyTech," \u2192 ",o.targetTech),i(5),d(o.description),i(3),d(o.legacyCode),i(9),d(o.badPrompt),i(8),d(o.goodPrompt),i(6),d(o.refactoredCode),i(5),d(o.migrationNotes)}}function N(r,a){if(r&1){let o=x();t(0,"div",46)(1,"div",47),u("click",function(){let p=f(o).index,g=s(3);return C(g.toggleExample(p))}),t(2,"span",48),n(3),e(),t(4,"h3"),n(5),e(),t(6,"span",35),n(7),e()(),m(8,V,46,8,"div",49),e()}if(r&2){let o=a.$implicit,c=a.index,p=s(3);i(3),b("Ejemplo ",c+1),i(2),d(o.title),i(2),d(p.expandedExample===c?"\u25BC":"\u25B8"),i(),l("ngIf",p.expandedExample===c)}}function B(r,a){if(r&1&&(t(0,"div",23)(1,"h2"),n(2),e(),t(3,"p",17),n(4,"Aprende viendo el contraste entre prompts b\xE1sicos vs estructurados"),e(),t(5,"div",44),m(6,N,9,4,"div",45),e()()),r&2){let o=s().$implicit,c=s();i(2),d(o.title),i(4),l("ngForOf",c.examples)}}function U(r,a){if(r&1&&(t(0,"div",75)(1,"div",76)(2,"strong"),n(3,"\u{1F3AF} Acci\xF3n:"),e(),t(4,"pre",77),n(5),e()(),t(6,"div",78)(7,"strong"),n(8,"\u{1F4A1} Tip Profesional:"),e(),t(9,"p",79),n(10),e()()()),r&2){let o=s().$implicit;i(5),d(o.action),i(5),d(o.tip)}}function J(r,a){if(r&1){let o=x();t(0,"div",70),u("click",function(){let p=f(o).index,g=s(3);return C(g.toggleStep(p))}),t(1,"div",71)(2,"div",72),n(3),e(),t(4,"div",73)(5,"h3"),n(6),e(),t(7,"p"),n(8),e()(),t(9,"span",35),n(10),e()(),m(11,U,11,2,"div",74),e()}if(r&2){let o=a.$implicit,c=a.index,p=s(3);i(3),d(o.number),i(3),d(o.title),i(2),d(o.description),i(2),d(p.expandedStep===c?"\u25BC":"\u25B8"),i(),l("ngIf",p.expandedStep===c)}}function G(r,a){if(r&1&&(t(0,"div",23)(1,"h2"),n(2),e(),t(3,"p",17),n(4,"Metodolog\xEDa probada para migrar legacy frontend a Angular moderno"),e(),t(5,"div",68),m(6,J,12,5,"div",69),e()()),r&2){let o=s().$implicit,c=s();i(2),d(o.title),i(4),l("ngForOf",c.migrationProcess)}}function H(r,a){if(r&1){let o=x();t(0,"div",23)(1,"h2"),n(2),e(),t(3,"p",17),n(4,"Usa este template para cualquier endpoint de tu API"),e(),t(5,"div",80)(6,"div",81)(7,"h3"),n(8,"\u{1F3AF} Template para Generaci\xF3n de API Tests"),e(),t(9,"button",82),u("click",function(){f(o);let p=s(2);return C(p.copyTemplate())}),n(10,"\u{1F4CB} Copiar Template"),e()(),t(11,"pre",83)(12,"code"),n(13),e()(),t(14,"div",84)(15,"h4"),n(16,"\u{1F4DD} Instrucciones de Uso:"),e(),t(17,"ol")(18,"li"),n(19,"Completa las secciones [ROL], [CONTEXTO], [TAREA] con info de tu API"),e(),t(20,"li"),n(21,"Reemplaza [METHOD] [PATH] con tu endpoint real"),e(),t(22,"li"),n(23,"Documenta estructura request/response"),e(),t(24,"li"),n(25,"Lista todos los casos de prueba (happy + negativos)"),e(),t(26,"li"),n(27,"Especifica herramienta: Postman, REST Assured o Pytest"),e(),t(28,"li"),n(29,"Copia y pega el prompt completo en ChatGPT/Copilot"),e()()()()()}if(r&2){let o=s().$implicit,c=s();i(2),d(o.title),i(11),d(c.template)}}function Q(r,a){if(r&1&&(t(0,"li"),n(1),e()),r&2){let o=a.$implicit;i(),d(o)}}function Y(r,a){if(r&1&&(t(0,"div",91)(1,"div",92)(2,"h4"),n(3,"\u{1F4DC} Escenario Legacy"),e(),t(4,"pre",93),n(5),e()(),t(6,"div",92)(7,"h4"),n(8,"\u{1F3AF} Descripci\xF3n"),e(),t(9,"p"),n(10),e()(),t(11,"div",92)(12,"h4"),n(13,"\u2705 Requisitos"),e(),t(14,"ul"),m(15,Q,2,1,"li",29),e()(),t(16,"div",92)(17,"h4"),n(18,"\u{1F381} Resultado Esperado"),e(),t(19,"p"),n(20),e()()()),r&2){let o=s().$implicit;i(5),d(o.legacyScenario),i(5),d(o.description),i(5),l("ngForOf",o.requirements),i(5),d(o.expectedOutcome)}}function K(r,a){if(r&1){let o=x();t(0,"div",87),u("click",function(){let p=f(o).index,g=s(3);return C(g.toggleChallenge(p))}),t(1,"div",88)(2,"span",89),n(3),e(),t(4,"h3"),n(5),e(),t(6,"span",35),n(7),e()(),m(8,Y,21,4,"div",90),e()}if(r&2){let o=a.$implicit,c=a.index,p=s(3);l("ngClass",o.color),i(2),l("ngClass",o.difficulty.toLowerCase()),i(),b(" ",o.difficulty," "),i(2),d(o.title),i(2),d(p.expandedChallenge===c?"\u25BC":"\u25B8"),i(),l("ngIf",p.expandedChallenge===c)}}function X(r,a){if(r&1&&(t(0,"div",23)(1,"h2"),n(2),e(),t(3,"p",17),n(4,"3 desaf\xEDos reales para practicar con tu IA favorita"),e(),t(5,"div",85),m(6,K,9,6,"div",86),e()()),r&2){let o=s().$implicit,c=s();i(2),d(o.title),i(4),l("ngForOf",c.challenges)}}function W(r,a){if(r&1&&(t(0,"div",96)(1,"div",97),n(2),e(),t(3,"h3"),n(4),e(),t(5,"p"),n(6),e()()),r&2){let o=a.$implicit;i(2),d(o.icon),i(2),d(o.title),i(2),d(o.description)}}function Z(r,a){if(r&1&&(t(0,"div",23)(1,"h2"),n(2),e(),t(3,"p",17),n(4,"Consejos de expertos para refactoring frontend de nivel profesional"),e(),t(5,"div",94),m(6,W,7,3,"div",95),e()()),r&2){let o=s().$implicit,c=s();i(2),d(o.title),i(4),l("ngForOf",c.professionalTips)}}function ee(r,a){if(r&1&&(t(0,"li")(1,"span",106),n(2,"\u2611\uFE0F"),e(),n(3),e()),r&2){let o=a.$implicit;i(3),b(" ",o," ")}}function te(r,a){if(r&1&&(t(0,"div",104)(1,"h4"),n(2),e(),t(3,"p"),n(4),e(),t(5,"ul",105),m(6,ee,4,1,"li",29),e()()),r&2){let o=a.$implicit;i(2),d(o.title),i(2),d(o.description),i(2),l("ngForOf",o.checkpoints)}}function ne(r,a){if(r&1&&(t(0,"div",107)(1,"span",72),n(2),e(),t(3,"span",108),n(4),e()()),r&2){let o=a.$implicit,c=a.index;i(2),d(c+1),i(2),d(o)}}function oe(r,a){if(r&1&&(t(0,"div",23)(1,"h2"),n(2),e(),t(3,"div",98)(4,"h3"),n(5,"\u{1F4E6} Entregables del Taller"),e(),t(6,"div",99),m(7,te,7,3,"div",100),e()(),t(8,"div",98)(9,"h3"),n(10,"\u{1F680} Pr\xF3ximos Pasos"),e(),t(11,"div",101),m(12,ne,5,2,"div",102),e()(),t(13,"div",103)(14,"h3"),n(15,"\u{1F389} \xA1Excelente trabajo!"),e(),t(16,"p"),n(17,"Ya dominas estrategias de migraci\xF3n frontend legacy a Angular moderno. Ahora podr\xE1s refactorizar aplicaciones Vanilla JS/jQuery con arquitectura escalable y componentes reutilizables."),e(),t(18,"p")(19,"strong"),n(20,"Pr\xF3xima clase:"),e(),n(21," Taller de Debugging y Soluci\xF3n de Errores con IA"),e()()()),r&2){let o=s(2);i(2),d(o.slides[o.currentSlide].title),i(5),l("ngForOf",o.deliverables),i(5),l("ngForOf",o.nextSteps)}}function ie(r,a){if(r&1&&(t(0,"div",12),m(1,k,36,1,"div",13)(2,j,9,2,"div",14)(3,$,7,2,"div",14)(4,B,7,2,"div",14)(5,G,7,2,"div",14)(6,H,30,2,"div",14)(7,X,7,2,"div",14)(8,Z,7,2,"div",14)(9,oe,22,3,"div",14),e()),r&2){let o=a.$implicit,c=a.index,p=s();_("active",c===p.currentSlide),i(),l("ngIf",o.type==="title"),i(),l("ngIf",o.type==="theory"),i(),l("ngIf",o.type==="tools"),i(),l("ngIf",o.type==="examples"),i(),l("ngIf",o.type==="process"),i(),l("ngIf",o.type==="template"),i(),l("ngIf",o.type==="challenges"),i(),l("ngIf",o.type==="tips"),i(),l("ngIf",p.slides[p.currentSlide].type==="summary")}}function re(r,a){if(r&1){let o=x();t(0,"span",109),u("click",function(){let p=f(o).index,g=s();return C(g.currentSlide=p)}),e()}if(r&2){let o=a.index,c=s();_("active",o===c.currentSlide)}}var w=class r{activeSlide=0;migrationStrategies=[{name:"Rewrite Completo",icon:"\u{1F504}",description:"Reescribir toda la aplicaci\xF3n desde cero en Angular",whenToUse:"App peque\xF1a (<5000 l\xEDneas), l\xF3gica simple, tiempo disponible",pros:["C\xF3digo limpio desde cero","Arquitectura moderna (componentes, servicios, RxJS)","Best practices Angular aplicadas","Sin deuda t\xE9cnica"],cons:["Tiempo considerable (2-4 semanas)","Riesgo de perder funcionalidad","Requiere testing exhaustivo","No viable para apps grandes"],complexity:"Alta"},{name:"Incremental (Strangler Fig)",icon:"\u{1F331}",description:"Migrar m\xF3dulo por m\xF3dulo, coexistiendo legacy y Angular",whenToUse:"Apps grandes (>10000 l\xEDneas), en producci\xF3n, sin downtime",pros:["Sin interrumpir producci\xF3n","Testing progresivo por m\xF3dulo","Rollback f\xE1cil si falla","Equipo aprende Angular gradualmente"],cons:["Periodo de coexistencia largo (3-12 meses)","Complejidad gesti\xF3n routing dual","Duplicaci\xF3n temporal de c\xF3digo","Requiere disciplina del equipo"],complexity:"Media"},{name:"Component-by-Component",icon:"\u{1F9E9}",description:"Convertir cada funci\xF3n/m\xF3dulo en componente Angular standalone",whenToUse:"App modular, funciones independientes, migraci\xF3n \xE1gil",pros:["Conversi\xF3n 1 a 1 predictible","Reutilizaci\xF3n de l\xF3gica existente","Testing por componente","Entregables incrementales cada sprint"],cons:["Puede heredar malas pr\xE1cticas","Arquitectura fragmentada si no se planea","Requiere refactoring posterior","Variables globales legacy problem\xE1ticas"],complexity:"Media"},{name:"Lift-and-Shift (Wrapper)",icon:"\u{1F4E6}",description:"Envolver c\xF3digo legacy en componentes Angular como wrapper",whenToUse:"Prototipo r\xE1pido, PoC, validar factibilidad migraci\xF3n",pros:["Migraci\xF3n r\xE1pida (d\xEDas)","C\xF3digo legacy funciona sin cambios","Permite probar Angular en producci\xF3n","Bajo riesgo inicial"],cons:["No es migraci\xF3n real (sigue siendo legacy)","Debugging complejo (2 paradigmas)","Performance degradado","Deuda t\xE9cnica aumenta"],complexity:"Baja"}];mainExample={title:"CRUD Productos Vanilla JS \u2192 Angular",legacyCode:`<!-- legacy-products.html (Vanilla JS) -->
<!DOCTYPE html>
<html>
<head>
  <title>Productos</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app">
    <h1>Gesti\xF3n de Productos</h1>

    <!-- Formulario -->
    <div id="form-container">
      <h2>Nuevo Producto</h2>
      <form id="product-form">
        <input type="text" id="name" placeholder="Nombre" required>
        <input type="number" id="price" placeholder="Precio" required>
        <select id="category">
          <option value="Electr\xF3nica">Electr\xF3nica</option>
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
            <th>Categor\xEDa</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="products-tbody"></tbody>
      </table>
    </div>
  </div>

  <script src="products.js"><\/script>
</body>
</html>`,legacyTech:"Vanilla JS + HTML + LocalStorage",targetTech:"Angular 18 Standalone + TypeScript",description:"CRUD completo de productos con formulario, tabla, y persistencia en LocalStorage",badPrompt:"Convierte este c\xF3digo HTML y JavaScript a Angular",goodPrompt:`[ROL] Act\xFAa como arquitecto senior de Angular especializado en migraciones frontend

[CONTEXTO]
- Legacy: Aplicaci\xF3n Vanilla JS de gesti\xF3n de productos (CRUD)
- Persistencia: LocalStorage
- Funcionalidad: Crear, listar, editar, eliminar productos
- Campos: id (generado), nombre (string), precio (number), categor\xEDa (select)
- Validaciones: nombre requerido, precio > 0, categor\xEDa obligatoria

[AN\xC1LISIS C\xD3DIGO LEGACY]
Identificado:
- Manipulaci\xF3n directa del DOM (document.getElementById, innerHTML)
- Event listeners inline y addEventListener
- Variables globales (products array)
- LocalStorage.getItem/setItem sin tipado
- Sin separaci\xF3n de responsabilidades (todo en un archivo)
- Sin manejo de errores en localStorage

[TAREA]
Migra este CRUD a Angular 18 standalone con arquitectura moderna:

1. **Estructura de componentes:**
   - ProductListComponent (componente principal)
   - ProductFormComponent (formulario hijo)
   - ProductTableComponent (tabla hijo)
   - ProductService (l\xF3gica negocio + localStorage)

2. **Modelo TypeScript:**
   - Interface Product { id: string; name: string; price: number; category: string; }
   - Enum Category { Electronics, Clothing, Food }

3. **Servicios:**
   - ProductService con m\xE9todos: getAll(), create(), update(), delete()
   - LocalStorageService gen\xE9rico reutilizable

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
   - Comunicaci\xF3n padre-hijo con @Input/@Output
   - Reactive Forms con validaciones
   - Service para l\xF3gica reutilizable
   - Error handling en localStorage (try/catch)
   - Confirmaci\xF3n antes de eliminar

[FORMATO]
Genera c\xF3digo completo funcional para:
- product.model.ts (interface + enum)
- product.service.ts (con localStorage wrapper)
- product-form.component.ts + .html
- product-table.component.ts + .html
- product-list.component.ts + .html (componente principal)

Incluye imports, decoradores, tipado completo, y comentarios explicativos.`,refactoredCode:`// ========== product.model.ts ==========
export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
}

export enum Category {
  Electronics = 'Electr\xF3nica',
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
      id: crypto.randomUUID() // Generaci\xF3n segura de ID
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
            M\xEDnimo 3 caracteres
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
            <option value="">Seleccione categor\xEDa</option>
            <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
          </select>
          <span class="error-msg" *ngIf="productForm.get('category')?.invalid && productForm.get('category')?.touched">
            Categor\xEDa es requerida
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
            <th>Categor\xEDa</th>
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
      <h1>Gesti\xF3n de Productos</h1>

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
    // TODO: Implementar modal de edici\xF3n
    console.log('Editar producto:', product);
  }

  onDelete(id: string): void {
    if (confirm('\xBFEst\xE1 seguro de eliminar este producto?')) {
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
});`,migrationNotes:`**Mejoras arquitect\xF3nicas respecto al legacy:**

1. **Tipado TypeScript:** Interfaces y enums eliminan errores de runtime
2. **Reactive Programming:** BehaviorSubject permite reactividad autom\xE1tica
3. **Componentes reutilizables:** Form y Table son independientes y reutilizables
4. **Reactive Forms:** Validaciones declarativas, mejor UX
5. **Comunicaci\xF3n componentes:** @Input/@Output clara y predecible
6. **Error handling:** Try/catch en localStorage, mensajes al usuario
7. **Testing:** Service testeable con Jasmine/Karma (sin DOM)
8. **Separaci\xF3n responsabilidades:** Service maneja datos, components maneja UI

**Diferencias clave legacy vs Angular:**
- **Legacy:** Manipulaci\xF3n directa DOM \u2192 **Angular:** Data binding autom\xE1tico
- **Legacy:** Variables globales \u2192 **Angular:** Services con inyecci\xF3n dependencias
- **Legacy:** addEventListener dispersos \u2192 **Angular:** (click) declarativo
- **Legacy:** Sin tipado \u2192 **Angular:** TypeScript estricto
- **Legacy:** Sin arquitectura \u2192 **Angular:** Componentes, services, pipes, modelos`};additionalExamples=[{title:"jQuery SPA \u2192 Angular Router",legacyCode:`// jQuery SPA with routing
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
});`,legacyTech:"jQuery SPA + Manual Routing + AJAX",targetTech:"Angular Router + HttpClient + Services",description:"SPA de e-commerce con routing manual y gesti\xF3n de carrito global",badPrompt:"Convierte este c\xF3digo jQuery a Angular Router",goodPrompt:`[ROL] Act\xFAa como experto en migraci\xF3n jQuery \u2192 Angular

[AN\xC1LISIS LEGACY]
- Routing: Manual con hashchange listener
- State management: Variables globales (cart, products)
- HTTP: jQuery.ajax sin tipado
- Renderizado: Manipulaci\xF3n DOM con .append()
- Event handlers: onclick inline y funciones globales

[TAREA]
Migra a Angular con:
1. **Angular Router:** rutas /home, /cart con lazy loading
2. **Services:** ProductService (HttpClient), CartService (BehaviorSubject)
3. **State management:** Cart como Observable compartido
4. **Componentes:** ProductListComponent, ProductCardComponent, CartComponent
5. **Tipado:** Interfaces Product, CartItem

Genera c\xF3digo completo con routing module, services, components y comunicaci\xF3n entre ellos.`,refactoredCode:`// app-routing.module.ts con lazy loading
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
</div>`,migrationNotes:`**Mejoras clave:**
- Angular Router reemplaza routing manual
- HttpClient con tipado reemplaza $.ajax
- Services con RxJS reemplazan variables globales
- Async pipe evita suscripciones manuales
- Lazy loading mejora performance inicial`}];migrationProcess=[{number:1,title:"An\xE1lisis del C\xF3digo Legacy",description:"Identificar funcionalidades, dependencias y l\xF3gica de negocio",action:`1. Inventario de funcionalidades: listar todas las features
2. Identificar dependencias: jQuery plugins, librer\xEDas externas
3. Mapear flujos de datos: c\xF3mo viaja la informaci\xF3n
4. Detectar variables globales: candidatas a Services
5. Identificar manipulaci\xF3n DOM: candidatos a Components`,tip:`Crea un documento "Legacy Analysis" con:
- Funcionalidades principales (CRUD, routing, auth)
- Dependencias externas (jQuery, Lodash, Moment.js)
- Variables globales (estado compartido)
- Event handlers y listeners
- APIs consumidas`},{number:2,title:"Definir Estrategia de Migraci\xF3n",description:"Elegir approach seg\xFAn tama\xF1o, tiempo y riesgo",action:`Evaluar:
- **Tama\xF1o:** <5000 l\xEDneas \u2192 Rewrite, >10000 l\xEDneas \u2192 Incremental
- **Producci\xF3n:** Sin downtime \u2192 Strangler Fig
- **Equipo:** Sin experiencia Angular \u2192 Component-by-Component
- **Tiempo:** Urgente \u2192 Lift-and-Shift (temporal)

Decisi\xF3n documentada: estrategia elegida + justificaci\xF3n`,tip:`Para apps medianas (5000-10000 l\xEDneas), Component-by-Component es el sweet spot:
- Balance velocidad/calidad
- Entregables cada sprint
- Equipo aprende progresivamente`},{number:3,title:"Crear Modelos TypeScript",description:"Definir interfaces para datos que manejaba el legacy",action:`1. Identificar objetos del legacy (user, product, order)
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
  Electronics = 'Electr\xF3nica',
  Clothing = 'Ropa'
}
\`\`\``,tip:`Usa el c\xF3digo legacy como fuente de verdad:
- Revisa qu\xE9 campos realmente se usan
- Identifica campos opcionales (? en TypeScript)
- Documenta campos deprecated`},{number:4,title:"Migrar L\xF3gica de Negocio a Services",description:"Variables globales y funciones \u2192 Angular Services con RxJS",action:`1. Identificar variables globales (cart, currentUser, products)
2. Crear Service por dominio (CartService, AuthService)
3. Usar BehaviorSubject para estado reactivo
4. Migrar funciones helpers a m\xE9todos del service

Antes (legacy):
\`\`\`javascript
let cart = [];
function addToCart(product) { cart.push(product); }
\`\`\`

Despu\xE9s (Angular):
\`\`\`typescript
@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    this.cartSubject.next([...this.cartSubject.value, product]);
  }
}
\`\`\``,tip:`No migres funciones 1 a 1 ciegamente:
- Agrupa funciones relacionadas en un Service
- Usa RxJS operators (map, filter, switchMap) para flujos complejos
- Evita l\xF3gica en componentes, mu\xE9vela a Services`},{number:5,title:"Convertir HTML/JS en Componentes Angular",description:"Secciones HTML + JS handlers \u2192 Componentes standalone",action:`1. Dividir UI en componentes (1 responsabilidad cada uno)
2. Crear componente standalone con decorador @Component
3. Migrar HTML: eliminar manipulaci\xF3n DOM, usar property binding
4. Migrar eventos: onclick \u2192 (click), addEventListener \u2192 (event)
5. Inyectar Services necesarios en constructor

Estructura:
- ProductListComponent (lista)
- ProductCardComponent (card individual)
- ProductFormComponent (formulario)
- ProductDetailComponent (detalle)`,tip:`Regla de oro: componentes peque\xF1os y reutilizables
- Si un componente tiene >200 l\xEDneas HTML, div\xEDdelo
- Si maneja >3 responsabilidades, div\xEDdelo
- Usa @Input/@Output para comunicaci\xF3n clara`},{number:6,title:"Implementar Routing (si aplica)",description:"Routing manual \u2192 Angular Router con lazy loading",action:`1. Identificar "rutas" del legacy (hashchange, URLs manuales)
2. Crear routes config con lazy loading
3. Reemplazar navegaci\xF3n manual con routerLink
4. Migrar guards si hab\xEDa validaciones de acceso

Ejemplo:
\`\`\`typescript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./home/home.component') },
  { path: 'product/:id', loadComponent: () => import('./product-detail/detail.component') }
];
\`\`\``,tip:`Lazy loading es cr\xEDtico para performance:
- Divide por features (productos, carrito, perfil)
- Carga solo lo necesario por ruta
- Mejora initial load time vs legacy monol\xEDtico`},{number:7,title:"Testing y Validaci\xF3n de Equivalencia",description:"Asegurar que Angular funciona igual que legacy",action:`1. **Tests unitarios:** Services con Jasmine/Karma
2. **Tests integraci\xF3n:** Componentes con TestBed
3. **Tests E2E:** Flujos completos con Cypress/Playwright
4. **Validaci\xF3n manual:** Comparar lado a lado legacy vs Angular

Checklist:
\u2705 Todas las funcionalidades legacy funcionan en Angular
\u2705 Datos se persisten igual (localStorage, API)
\u2705 Validaciones de formularios equivalentes
\u2705 Performance igual o mejor que legacy
\u2705 Tests automatizados con >70% coverage`,tip:`Test de equivalencia cr\xEDtico:
Ejecuta legacy y Angular en paralelo (mismo backend):
- Mismo input \u2192 mismo output
- Mismos datos en BD/localStorage
- Misma UX (o mejor)

Si difiere, documenta por qu\xE9 (mejora intencional vs bug)`}];challenges=[{level:"F\xE1cil",difficulty:"Facil",color:"green",title:"Migrar Contador Interactivo Vanilla JS",description:"App simple de contador con incrementar/decrementar",legacyScenario:`<!-- index.html -->
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
<\/script>`,requirements:["Crear CounterComponent standalone","Usar property binding para mostrar count","Convertir onclick a (click) event binding",'Agregar bot\xF3n "Historial" que muestre array de valores anteriores',"Agregar validaci\xF3n: no permitir valores negativos","Styling con Tailwind CSS"],expectedOutcome:"Componente Angular funcional con estado reactivo, sin manipulaci\xF3n directa del DOM"},{level:"Intermedio",difficulty:"Intermedio",color:"orange",title:"Migrar Todo List con jQuery a Angular",description:"CRUD completo con filtros y persistencia localStorage",legacyScenario:`// Todo List jQuery
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
});`,requirements:["Crear arquitectura: TodoListComponent (principal) + TodoItemComponent (hijo) + TodoService","Interface Todo: { id: string; text: string; done: boolean; createdAt: Date; }","Reactive Forms para agregar todo con validaci\xF3n (m\xEDnimo 3 caracteres)","Filtros: Todos | Pendientes | Completados (botones toggle)","LocalStorageService gen\xE9rico reutilizable","Tests unitarios para TodoService (crear, toggle, eliminar)","Animaciones al agregar/eliminar (Angular animations)"],expectedOutcome:"App Angular completa con arquitectura limpia, componentes reutilizables, service con RxJS, tests"},{level:"Avanzado",difficulty:"Avanzado",color:"red",title:"Migrar Dashboard SPA Multi-p\xE1gina Legacy",description:"Sistema completo con routing, autenticaci\xF3n, gr\xE1ficos, y API real",legacyScenario:`// Dashboard legacy con routing manual
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
}`,requirements:["Angular Router con guards (AuthGuard para rutas protegidas)","Arquitectura modular: AuthModule, DashboardModule, ReportsModule, SettingsModule (lazy loading)","AuthService con JWT: login(), logout(), verifyToken(), interceptor para agregar token autom\xE1tico","HttpClient con interceptores: token, manejo errores global, loading indicator","State management con Services + BehaviorSubject o NgRx (opcional)","Integraci\xF3n Chart.js en DashboardComponent con datos reales API","Guards: AuthGuard (verifica token), RoleGuard (admin/user)","Error handling: p\xE1gina 404, manejo errores API, toast notifications","Tests E2E con Cypress: flujo login \u2192 dashboard \u2192 logout","Responsive design: funciona mobile/tablet/desktop"],expectedOutcome:"SPA Angular enterprise-grade completa: routing avanzado, autenticaci\xF3n JWT, guards, lazy loading, interceptores HTTP, gr\xE1ficos interactivos, tests E2E, arquitectura escalable"}];professionalTips=[{title:"Analiza Profundamente Antes de Migrar",description:"Dedica 20-30% del tiempo a an\xE1lisis del legacy. Identifica: funcionalidades reales usadas (vs c\xF3digo muerto), dependencias cr\xEDticas, edge cases, y reglas de negocio ocultas. Un an\xE1lisis pobre resulta en migraciones incompletas.",icon:"\u{1F50D}"},{title:"No Migres C\xF3digo Muerto",description:"Legacy tiene funcionalidades obsoletas nunca usadas. Valida con stakeholders qu\xE9 se usa realmente. Migrar todo ciegamente aumenta deuda t\xE9cnica en Angular sin valor.",icon:"\u{1F5D1}\uFE0F"},{title:"Mant\xE9n L\xF3gica de Negocio, Mejora Arquitectura",description:'La l\xF3gica de negocio del legacy es valiosa (a\xF1os de refinamiento). Migrala exactamente, pero en arquitectura moderna (Services, RxJS). No "mejores" la l\xF3gica durante migraci\xF3n (riesgo bugs).',icon:"\u2696\uFE0F"},{title:"Tests de Equivalencia Son Cr\xEDticos",description:"Ejecuta legacy y Angular en paralelo (mismo backend). Mismo input debe dar mismo output. Automatiza con Cypress: graba flujos en legacy, reprod\xFAcelos en Angular, compara resultados.",icon:"\u{1F9EA}"},{title:"Migraci\xF3n Incremental en Producci\xF3n",description:"Para apps grandes, usa Strangler Fig: despliega Angular y legacy simult\xE1neamente, redirect progresivo de rutas (semana 1: /productos a Angular, semana 2: /carrito, etc). Rollback f\xE1cil si falla.",icon:"\u{1F331}"},{title:"Documenta Decisiones de Migraci\xF3n",description:'Crea doc "Migration Decisions": por qu\xE9 elegiste X estrategia, por qu\xE9 no migraste feature Y, cambios intencionales vs bugs. Cr\xEDtico para auditor\xEDas y onboarding futuro.',icon:"\u{1F4CB}"},{title:"Usa IA para An\xE1lisis, No para Migraci\xF3n Ciega",description:"IA excelente para: analizar legacy, identificar patrones, sugerir arquitectura Angular. Mala para: migrar 10,000 l\xEDneas autom\xE1ticamente. Usa IA m\xF3dulo por m\xF3dulo con supervisi\xF3n.",icon:"\u{1F916}"},{title:"Plan de Rollback y Contingencia",description:"Migraci\xF3n puede fallar. Ten plan B: c\xF3mo revertir a legacy, cu\xE1nto downtime es aceptable, backup de BD antes de migraci\xF3n. Feature flags ayudan: activa/desactiva Angular vs legacy sin redeploy.",icon:"\u{1F519}"}];examples=[this.mainExample,...this.additionalExamples];slides=[{type:"title",title:"Refactoring Legacy Frontend con IA"},{type:"theory",title:"Por qu\xE9 Migrar Legacy a Angular"},{type:"tools",title:"Estrategias de Migraci\xF3n"},{type:"examples",title:"Ejemplos: Legacy \u2192 Angular"},{type:"process",title:"Proceso de Migraci\xF3n Paso a Paso"},{type:"template",title:"Template Reutilizable"},{type:"challenges",title:"Desaf\xEDos Pr\xE1cticos"},{type:"tips",title:"Tips Profesionales"},{type:"summary",title:"Resumen y Pr\xF3ximos Pasos"}];currentSlide=0;expandedTool=-1;expandedExample=-1;expandedStep=-1;expandedChallenge=-1;theoryPoints=[{icon:"\u{1F3AF}",title:"Reducir Deuda T\xE9cnica",description:"Legacy acumula a\xF1os de parches. Angular moderno elimina c\xF3digo espagueti.",items:["Arquitectura clara","Componentes reutilizables","TypeScript tipado"],color:"blue"},{icon:"\u{1F680}",title:"Mejor Performance",description:"Angular optimiza con lazy loading, change detection, y AOT compilation.",items:["Carga inicial reducida","Virtual scrolling","Bundle optimizado"],color:"green"},{icon:"\u{1F527}",title:"Mantenibilidad",description:"C\xF3digo estructurado es m\xE1s f\xE1cil de mantener y escalar.",items:["Testing unitario","Debugging facilitado","Onboarding r\xE1pido"],color:"purple"},{icon:"\u{1F465}",title:"Talento Moderno",description:"Desarrolladores prefieren stacks modernos (Angular, React, Vue).",items:["Atracci\xF3n talento","Motivaci\xF3n equipo","Skills transferibles"],color:"orange"}];template=`[ROL] Act\xFAa como arquitecto senior de Angular especializado en migraciones frontend

[AN\xC1LISIS C\xD3DIGO LEGACY]
- Tecnolog\xEDa actual: [ej: Vanilla JS, jQuery]
- Funcionalidad: [descripci\xF3n breve]
- Manipulaci\xF3n DOM: [ej: document.getElementById, .innerHTML]
- Variables globales: [listar]
- Event listeners: [c\xF3mo se manejan]
- Persistencia: [localStorage, cookies, etc]

[TAREA]
Migra este c\xF3digo a Angular 18 standalone con:
1. **Arquitectura componentes:** [ComponentePrincipal + hijos]
2. **Modelo TypeScript:** [interfaces necesarias]
3. **Services:** [l\xF3gica negocio + estado reactivo con RxJS]
4. **Comunicaci\xF3n:** [@Input/@Output entre componentes]
5. **Mejoras:** [tipado, validaciones, error handling]

[C\xD3DIGO LEGACY]
\`\`\`javascript
// Pegar c\xF3digo legacy aqu\xED
\`\`\`

[FORMATO SALIDA]
Genera c\xF3digo completo Angular funcional:
- model.ts (interfaces + enums)
- service.ts (BehaviorSubject + m\xE9todos)
- components.ts + .html separados
- Incluir imports, decoradores, tipado completo`;deliverables=[{title:"C\xF3digo Angular Migrado",description:"App legacy completamente refactorizada",checkpoints:["Componentes standalone","Services con RxJS","Tipado TypeScript","Arquitectura escalable"]}];nextSteps=["Practica con una app legacy real de tu proyecto","Elige estrategia seg\xFAn tama\xF1o y riesgo","Documenta decisiones de migraci\xF3n","Usa tests de equivalencia para validar","Migra incrementalmente m\xF3dulo por m\xF3dulo"];setActiveSlide(a){this.activeSlide=a}isActiveSlide(a){return this.activeSlide===a}nextSlide(){this.currentSlide<this.slides.length-1&&this.currentSlide++}prevSlide(){this.currentSlide>0&&this.currentSlide--}onKeydown(a){a.key==="ArrowRight"&&this.nextSlide(),a.key==="ArrowLeft"&&this.prevSlide()}toggleTool(a){this.expandedTool=this.expandedTool===a?-1:a}toggleExample(a){this.expandedExample=this.expandedExample===a?-1:a}toggleStep(a){this.expandedStep=this.expandedStep===a?-1:a}toggleChallenge(a){this.expandedChallenge=this.expandedChallenge===a?-1:a}copyTemplate(){navigator.clipboard.writeText(this.template),alert("\u2705 Template copiado al portapapeles")}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=M({type:r,selectors:[["app-clase8-migracion-angular"]],decls:18,vars:6,consts:[["tabindex","0",1,"presentation-container",3,"keydown"],[1,"back-to-menu"],["routerLink","/study-plan",1,"back-btn"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-5","h-5"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M10 19l-7-7m0 0l7-7m-7 7h18"],[1,"controls"],[1,"control-btn",3,"click","disabled"],[1,"slide-counter"],[1,"slide-wrapper"],["class","slide",3,"active",4,"ngFor","ngForOf"],[1,"progress-dots"],["class","dot",3,"active","click",4,"ngFor","ngForOf"],[1,"slide"],["class","slide-title",4,"ngIf"],["class","slide-content",4,"ngIf"],[1,"slide-title"],[1,"workshop-badge"],[1,"subtitle"],[1,"info-grid"],[1,"info-item"],[1,"icon"],[1,"label"],[1,"value"],[1,"slide-content"],[1,"theory-grid"],["class","theory-card",3,"ngClass",4,"ngFor","ngForOf"],[1,"warning-box"],[1,"theory-card",3,"ngClass"],[1,"theory-icon"],[4,"ngFor","ngForOf"],[1,"formats-container"],["class","format-card",3,"click",4,"ngFor","ngForOf"],[1,"format-card",3,"click"],[1,"format-header"],[1,"format-icon"],[1,"accordion-icon"],["class","format-content",4,"ngIf"],[1,"format-content"],[1,"format-description"],[1,"use-case-box"],[1,"pros-cons-grid"],[1,"pros-box"],[1,"cons-box"],[1,"complexity-badge",3,"ngClass"],[1,"examples-container"],["class","example-card",4,"ngFor","ngForOf"],[1,"example-card"],[1,"example-header",3,"click"],[1,"example-number"],["class","example-content",4,"ngIf"],[1,"example-content"],[1,"testcase-box"],[1,"text-xl","font-bold","text-blue-300","mb-4"],[1,"space-y-3"],[1,"font-semibold","text-gray-300"],[1,"text-white","ml-2"],[1,"code-output","mt-4"],[1,"prompt-comparison"],[1,"prompt-bad"],[1,"prompt-header"],[1,"prompt-text"],[1,"prompt-good"],[1,"mt-8"],[1,"text-2xl","font-bold","text-green-300","mb-4"],[1,"code-output"],[1,"migration-notes-box","mt-6"],[1,"text-xl","font-bold","text-purple-300","mb-3"],[1,"text-sm","text-gray-300"],[1,"process-container"],["class","process-step",3,"click",4,"ngFor","ngForOf"],[1,"process-step",3,"click"],[1,"step-header"],[1,"step-number"],[1,"step-info"],["class","step-content",4,"ngIf"],[1,"step-content"],[1,"step-example"],[1,"text-sm","text-gray-300","whitespace-pre-wrap","mt-2"],[1,"step-tips","mt-4"],[1,"text-sm","text-gray-300","mt-2"],[1,"template-container"],[1,"template-header"],[1,"copy-button",3,"click"],[1,"template-code"],[1,"template-instructions"],[1,"challenges-container"],["class","challenge-card",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"challenge-card",3,"click","ngClass"],[1,"challenge-header"],[1,"difficulty-badge",3,"ngClass"],["class","challenge-content",4,"ngIf"],[1,"challenge-content"],[1,"challenge-section"],[1,"text-sm","text-gray-300","bg-gray-800","p-4","rounded"],[1,"tips-grid"],["class","tip-card",4,"ngFor","ngForOf"],[1,"tip-card"],[1,"tip-icon"],[1,"summary-section"],[1,"deliverables-grid"],["class","deliverable-card",4,"ngFor","ngForOf"],[1,"next-steps"],["class","next-step",4,"ngFor","ngForOf"],[1,"final-message"],[1,"deliverable-card"],[1,"checkpoints"],[1,"checkbox"],[1,"next-step"],[1,"step-text"],[1,"dot",3,"click"]],template:function(o,c){o&1&&(t(0,"div",0),u("keydown",function(g){return c.onKeydown(g)}),t(1,"div",1)(2,"a",2),h(),t(3,"svg",3),O(4,"path",4),e(),P(),t(5,"span"),n(6,"Volver al Plan de Estudio"),e()()(),t(7,"div",5)(8,"button",6),u("click",function(){return c.prevSlide()}),n(9,"\u2190 Anterior"),e(),t(10,"span",7),n(11),e(),t(12,"button",6),u("click",function(){return c.nextSlide()}),n(13,"Siguiente \u2192"),e()(),t(14,"div",8),m(15,ie,10,11,"div",9),e(),t(16,"div",10),m(17,re,1,2,"span",11),e()()),o&2&&(i(8),l("disabled",c.currentSlide===0),i(3),v("",c.currentSlide+1," / ",c.slides.length),i(),l("disabled",c.currentSlide===c.slides.length-1),i(3),l("ngForOf",c.slides),i(2),l("ngForOf",c.slides))},dependencies:[A,y,S,E,T,I],styles:['.presentation-container[_ngcontent-%COMP%]{width:100%;min-height:100vh;background:linear-gradient(135deg,#667eea,#764ba2);display:flex;flex-direction:column;align-items:center;padding:2rem;position:relative;outline:none}.back-to-menu[_ngcontent-%COMP%]{width:100%;max-width:1200px;margin-bottom:1rem}.back-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#fffffff2;color:#667eea;padding:.75rem 1.25rem;border-radius:8px;font-size:.95rem;font-weight:600;text-decoration:none;transition:all .3s ease;box-shadow:0 4px 6px #0000001a;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.back-btn[_ngcontent-%COMP%]:hover{background:#fff;transform:translate(-4px);box-shadow:0 6px 12px #00000026;color:#764ba2}.back-btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;transition:transform .3s ease}.back-btn[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]{transform:translate(-2px)}.controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;width:100%;max-width:1200px;margin-bottom:2rem;gap:1rem}.control-btn[_ngcontent-%COMP%]{background:#fff;border:none;padding:.75rem 1.5rem;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s ease;box-shadow:0 4px 6px #0000001a}.control-btn[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 12px #00000026}.control-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.slide-counter[_ngcontent-%COMP%]{background:#fff;padding:.75rem 1.5rem;border-radius:8px;font-weight:600;color:#667eea;box-shadow:0 4px 6px #0000001a}.slide-wrapper[_ngcontent-%COMP%]{width:100%;max-width:1200px;min-height:600px;position:relative}.slide[_ngcontent-%COMP%]{display:none;width:100%;background:#fff;border-radius:16px;padding:3rem;box-shadow:0 20px 60px #0000004d;animation:_ngcontent-%COMP%_slideIn .5s ease}.slide.active[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_slideIn{0%{opacity:0;transform:translate(50px)}to{opacity:1;transform:translate(0)}}.slide-title[_ngcontent-%COMP%]{text-align:center}.workshop-badge[_ngcontent-%COMP%]{display:inline-block;background:linear-gradient(135deg,#f093fb,#f5576c);color:#fff;padding:.5rem 1.5rem;border-radius:50px;font-weight:700;font-size:.9rem;letter-spacing:1px;margin-bottom:2rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3rem;color:#2d3748;margin-bottom:1rem}.subtitle[_ngcontent-%COMP%]{font-size:1.5rem;color:#718096;margin-bottom:3rem}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:2rem;margin-top:3rem}.info-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.5rem;padding:1.5rem;background:#f7fafc;border-radius:12px;border-left:4px solid #667eea}.info-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.info-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-size:.875rem;color:#718096;font-weight:600}.info-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{font-size:1.125rem;color:#2d3748;font-weight:700}.slide-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2.5rem;color:#2d3748;margin-bottom:1.5rem;border-bottom:3px solid #667eea;padding-bottom:.5rem}.slide-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{font-size:1.125rem;color:#718096;margin-bottom:2rem;text-align:center}.theory-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;margin-bottom:2rem}.theory-card[_ngcontent-%COMP%]{padding:2rem;border-radius:12px;border-left:6px solid;box-shadow:0 4px 6px #0000001a}.theory-card.green[_ngcontent-%COMP%]{background:#f0fdf4;border-color:#22c55e}.theory-card.blue[_ngcontent-%COMP%]{background:#eff6ff;border-color:#3b82f6}.theory-card.orange[_ngcontent-%COMP%]{background:#fff7ed;border-color:#f97316}.theory-icon[_ngcontent-%COMP%]{font-size:2.5rem;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.25rem;color:#2d3748;margin-bottom:.75rem}.theory-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;position:relative;padding:.5rem 0 .5rem 1.5rem}.theory-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.warning-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1rem 1.5rem;border-radius:8px;margin-top:2rem}.examples-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.example-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;transition:all .3s ease}.example-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.example-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;cursor:pointer;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.example-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.accordion-icon[_ngcontent-%COMP%]{color:#667eea;font-weight:700;font-size:1.25rem}.example-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.25rem}.example-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}@keyframes _ngcontent-%COMP%_expandDown{0%{opacity:0;max-height:0}to{opacity:1;max-height:2000px}}.hu-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:4px solid #0ea5e9;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.hu-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.hu-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#0c4a6e}.bad-prompt[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.bad-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#dc2626;margin-bottom:1rem}.good-prompt[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.good-prompt[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#16a34a;margin-bottom:1rem}.prompt-text[_ngcontent-%COMP%]{background:#fff;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.9rem;color:#000;white-space:pre-wrap;margin-bottom:1rem}.problems-list[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]{margin-top:1rem}.problems-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{display:block;margin-bottom:.5rem;color:#2d3748}.problems-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .benefits-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.problems-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2717";position:absolute;left:0;color:#ef4444;font-weight:700}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.benefits-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.output-preview[_ngcontent-%COMP%]{background:#faf5ff;border-left:4px solid #a855f7;padding:1.5rem;border-radius:8px}.output-preview[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#7e22ce;margin-bottom:1rem}.output-list[_ngcontent-%COMP%]{list-style:none;padding:0}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#4a5568;font-size:.9rem;padding:.5rem 0 .5rem 1.5rem;position:relative}.output-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#a855f7}.process-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.process-step[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.process-step[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.step-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.step-number[_ngcontent-%COMP%]{background:#fff;color:#667eea;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.25rem;flex-shrink:0}.step-title-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex:1}.step-title-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem}.step-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.step-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.step-example[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;margin-bottom:1rem;border-left:3px solid #0ea5e9}.step-tips[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b}.step-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:.5rem}.step-tips[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#78350f}.template-container[_ngcontent-%COMP%]{background:#1e293b;border-radius:12px;overflow:hidden}.template-header[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;padding:1.5rem;display:flex;align-items:center;gap:1rem}.template-header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:2rem}.template-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0}.copy-btn[_ngcontent-%COMP%]{background:#fff;color:#667eea;border:none;padding:.5rem 1rem;border-radius:6px;font-weight:600;cursor:pointer;transition:all .3s ease}.copy-btn[_ngcontent-%COMP%]:hover{transform:scale(1.05);box-shadow:0 4px 8px #0003}.template-code[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:2rem;margin:0;font-family:Courier New,monospace;font-size:.9rem;line-height:1.6;white-space:pre-wrap;overflow-x:auto}.template-instructions[_ngcontent-%COMP%]{background:#fff;padding:2rem}.template-instructions[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:1rem}.template-instructions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{color:#4a5568;line-height:1.8}.template-instructions[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{background:#f7fafc;padding:.2rem .5rem;border-radius:4px;color:#667eea;font-family:Courier New,monospace}.challenges-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));gap:2rem}.challenge-card[_ngcontent-%COMP%]{border:3px solid;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.challenge-card.green[_ngcontent-%COMP%]{border-color:#22c55e}.challenge-card.blue[_ngcontent-%COMP%]{border-color:#3b82f6}.challenge-card.orange[_ngcontent-%COMP%]{border-color:#f97316}.challenge-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 24px #00000026}.challenge-header[_ngcontent-%COMP%]{padding:1.5rem;background:#f7fafc}.difficulty-badge[_ngcontent-%COMP%]{display:inline-block;padding:.25rem .75rem;border-radius:50px;font-size:.75rem;font-weight:700;text-transform:uppercase;margin-bottom:.75rem}.difficulty-badge.F\\e1 cil[_ngcontent-%COMP%]{background:#dcfce7;color:#166534}.difficulty-badge.Intermedio[_ngcontent-%COMP%]{background:#dbeafe;color:#1e40af}.difficulty-badge.Avanzado[_ngcontent-%COMP%]{background:#fed7aa;color:#9a3412}.challenge-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#2d3748;font-size:1.125rem;display:flex;align-items:center;gap:.5rem}.challenge-content[_ngcontent-%COMP%]{padding:1.5rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.hu-section[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.hu-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .context-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem}.hu-text[_ngcontent-%COMP%]{background:#f0f9ff;padding:1rem;border-radius:8px;border-left:3px solid #0ea5e9;font-style:italic;color:#0369a1}.context-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#4a5568}.context-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2022";position:absolute;left:0;color:#667eea;font-weight:700}.requirements-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.hints-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\1f4a1";position:absolute;left:0}.action-section[_ngcontent-%COMP%]{text-align:center;padding-top:1rem;border-top:2px dashed #e2e8f0}.start-btn[_ngcontent-%COMP%]{background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none;padding:1rem 2rem;border-radius:8px;font-size:1rem;font-weight:700;cursor:pointer;transition:all .3s ease;margin-bottom:.5rem}.start-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 8px 16px #667eea66}.timer-note[_ngcontent-%COMP%]{color:#718096;font-size:.875rem}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem}.tip-card[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;border-radius:12px;border-left:4px solid #667eea;transition:all .3s ease}.tip-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:0 8px 16px #0000001a}.tip-icon[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;margin-bottom:.75rem;font-size:1.125rem}.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.tip-example[_ngcontent-%COMP%]{background:#fff;padding:.75rem;border-radius:6px;border:1px solid #e2e8f0}.tip-example[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{color:#667eea;font-family:Courier New,monospace;font-size:.875rem}.deliverables-section[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]{margin-bottom:3rem}.deliverables-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .next-steps-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#2d3748;font-size:1.75rem;margin-bottom:1.5rem;border-left:5px solid #667eea;padding-left:1rem}.deliverables-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5rem;margin-bottom:2rem}.deliverable-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0f9ff,#e0f2fe);padding:1.5rem;border-radius:12px;border-left:5px solid #0ea5e9}.deliverable-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#0369a1;margin-bottom:.75rem}.deliverable-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#075985;margin-bottom:1rem}.checkpoints[_ngcontent-%COMP%]{list-style:none;padding:0}.checkpoints[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0;color:#0c4a6e;display:flex;align-items:flex-start;gap:.5rem}.checkbox[_ngcontent-%COMP%]{color:#0ea5e9;font-size:1.25rem}.next-steps-list[_ngcontent-%COMP%]{background:#fef3c7;padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;color:#78350f;line-height:1.8}.closing-box[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-bottom:2rem}.closing-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;margin-bottom:1rem}.closing-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.closing-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{color:#92400e;margin-bottom:1rem}.quote[_ngcontent-%COMP%]{font-style:italic;font-weight:600;text-align:center;padding:1rem;background:#fff;border-radius:8px;margin-top:1rem}.preview-next[_ngcontent-%COMP%]{background:linear-gradient(135deg,#f0fdf4,#dcfce7);padding:1.5rem;border-radius:12px;border-left:5px solid #22c55e;color:#166534;font-weight:600;text-align:center}.progress-dots[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.75rem;margin-top:2rem}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.progress-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover, .slide-dots[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{background:#fffc;transform:scale(1.2)}.progress-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%], .slide-dots[_ngcontent-%COMP%]   .dot.active[_ngcontent-%COMP%]{background:#fff;width:32px;border-radius:6px}@media (max-width: 768px){.presentation-container[_ngcontent-%COMP%]{padding:1rem}.slide[_ngcontent-%COMP%]{padding:1.5rem}.slide-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.subtitle[_ngcontent-%COMP%]{font-size:1.125rem}.info-grid[_ngcontent-%COMP%], .theory-grid[_ngcontent-%COMP%], .challenges-grid[_ngcontent-%COMP%], .tips-grid[_ngcontent-%COMP%], .deliverables-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.control-btn[_ngcontent-%COMP%], .slide-counter[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.875rem}}.formats-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem}.format-card[_ngcontent-%COMP%]{border:2px solid #e2e8f0;border-radius:12px;overflow:hidden;cursor:pointer;transition:all .3s ease}.format-card[_ngcontent-%COMP%]:hover{border-color:#667eea;box-shadow:0 4px 12px #667eea33}.format-header[_ngcontent-%COMP%]{background:#f7fafc;padding:1.5rem;display:flex;align-items:center;gap:1rem;transition:background .3s ease}.format-header[_ngcontent-%COMP%]:hover{background:#edf2f7}.format-icon[_ngcontent-%COMP%]{font-size:2rem}.format-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{flex:1;margin:0;color:#2d3748;font-size:1.25rem}.format-content[_ngcontent-%COMP%]{padding:2rem;background:#fff;animation:_ngcontent-%COMP%_expandDown .3s ease}.format-description[_ngcontent-%COMP%]{color:#4a5568;line-height:1.6;margin-bottom:1rem}.use-case-box[_ngcontent-%COMP%]{background:#f0f9ff;border-left:3px solid #0ea5e9;padding:1rem;border-radius:8px;margin-bottom:1rem;color:#0369a1}.format-example[_ngcontent-%COMP%]{background:#1e293b;padding:1.5rem;border-radius:8px}.format-example[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#e2e8f0;margin-bottom:.75rem}.format-example[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{color:#e2e8f0;margin:0;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap}.requirement-box[_ngcontent-%COMP%]{background:#fef3c7;border-left:4px solid #f59e0b;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.requirement-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#92400e;margin-bottom:.75rem}.requirement-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#78350f;line-height:1.6}.requirement-text[_ngcontent-%COMP%]{background:#fef3c7;padding:1rem;border-radius:8px;border-left:3px solid #f59e0b;font-style:italic;color:#92400e}.requirement-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.sample-output[_ngcontent-%COMP%]{background:#1e293b;color:#e2e8f0;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.85rem;line-height:1.5;white-space:pre-wrap;overflow-x:auto}.testcase-box[_ngcontent-%COMP%]{background:#1e293b;border-left:4px solid #3b82f6;padding:1.5rem;border-radius:8px;margin-bottom:2rem}.testcase-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#93c5fd;font-size:1.25rem;font-weight:700;margin-bottom:1rem}.testcase-box[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d1d5db;font-weight:600}.testcase-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] + span[_ngcontent-%COMP%]{color:#fff;font-weight:400;margin-left:.5rem}.testcase-text[_ngcontent-%COMP%]{background:#fff;color:#1e293b;padding:1rem;border-radius:6px;font-family:Courier New,monospace;font-size:.875rem;line-height:1.6;white-space:pre-wrap;margin:0}.testcases-section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.testcases-list[_ngcontent-%COMP%]{background:#f0f9ff;padding:1.5rem 1.5rem 1.5rem 2.5rem;border-radius:8px;border-left:3px solid #0ea5e9;color:#0c4a6e;line-height:1.8}.testcases-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:.5rem}.pros-cons-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;margin-bottom:1rem}.pros-box[_ngcontent-%COMP%]{background:#f0fdf4;border-left:4px solid #22c55e;padding:1.5rem;border-radius:8px}.pros-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#166534;margin-bottom:.75rem}.pros-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#14532d}.pros-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\2713";position:absolute;left:0;color:#22c55e;font-weight:700}.cons-box[_ngcontent-%COMP%]{background:#fef2f2;border-left:4px solid #ef4444;padding:1.5rem;border-radius:8px}.cons-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#991b1b;margin-bottom:.75rem}.cons-box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:.5rem 0 .5rem 1.5rem;position:relative;color:#7f1d1d}.cons-box[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\26a0";position:absolute;left:0;color:#ef4444;font-weight:700}@media (max-width: 768px){.pros-cons-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}.final-message[_ngcontent-%COMP%]{background:linear-gradient(135deg,#fef3c7,#fde68a);padding:2rem;border-radius:12px;border-left:5px solid #f59e0b;margin-top:2rem;text-align:center}.final-message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#78350f;font-size:2rem;margin-bottom:1rem}.final-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#1f2937;font-size:1.1rem;margin-bottom:.75rem;line-height:1.6}.final-message[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#78350f;font-weight:700}',".presentation-container[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6366f1,#a855f7)}"]})};export{w as Clase8MigracionAngularComponent};
