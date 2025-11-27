# 🎯 Sesión Live: Generación de Datos de Prueba Masivos con IA (Clase 3)

## 📋 Objetivo
Aprender a generar datasets masivos de datos sintéticos (1000+ registros) utilizando IA Generativa para testing, carga de bases de datos y validación de sistemas, evitando el uso de datos reales de producción.

---

## 🎯 ¿Por qué necesitas datos de prueba masivos?

### ⏱️ **Ahorro de Tiempo**
- **Problema:** Crear 1000 registros manualmente = 8-10 horas de trabajo repetitivo
- **Solución con IA:** Generar 1000 registros = 5 minutos
- **Beneficios:**
  - Evita trabajo tedioso y propenso a errores humanos
  - Escala masivamente sin esfuerzo adicional (1K o 100K registros)
  - Genera variaciones realistas automáticamente

### 🎯 **Calidad de Testing**
- **Problema:** Datos poco realistas ("test123", "Juan Pérez", "12345") no detectan bugs reales
- **Solución:** Datos sintéticos realistas simulan producción
- **Beneficios:**
  - Detecta bugs que no aparecen con datos triviales
  - Simula escenarios de producción reales (nombres largos, caracteres especiales, edge cases)
  - Valida límites y casos extremos efectivamente

### 🔒 **Cumplimiento y Seguridad**
- **Problema:** Usar datos reales de producción en ambientes de testing viola GDPR/CCPA
- **Solución:** Datos 100% sintéticos que parecen reales pero no lo son
- **Beneficios:**
  - Cumple regulaciones de protección de datos (GDPR, CCPA, LGPD)
  - Protege PII (Personally Identifiable Information)
  - Ambiente de testing sin riesgos legales ni exposición de datos sensibles

---

## 📊 Formatos de Salida Disponibles

### 1. **JSON** 📋
**Ideal para:** APIs REST, NoSQL, testing de servicios, Postman collections

**Cuándo usarlo:**
- Testing de endpoints REST
- Carga en bases NoSQL (MongoDB, Couchbase)
- Payloads de requests/responses
- Integración con herramientas de testing (Postman, Insomnia)

**Ejemplo:**
```json
{
  "id": "CLT-20241125-0001",
  "nombre": "María Rodríguez García",
  "email": "maria.rodriguez@example.com",
  "saldoCuenta": 15750.50,
  "fechaApertura": "2023-03-15",
  "tipoCliente": "Premium"
}
```

### 2. **SQL INSERT** 🗄️
**Ideal para:** Carga masiva en bases relacionales (MySQL, PostgreSQL, Oracle, SQL Server)

**Cuándo usarlo:**
- Poblar bases de datos de testing
- Carga batch en ambientes QA
- Testing de performance con volúmenes altos
- Restauración de ambientes de desarrollo

**Ejemplo:**
```sql
INSERT INTO clientes (id, nombre, email, saldo, fecha_apertura, tipo_cliente)
VALUES ('CLT-20241125-0001', 'María Rodríguez García', 'maria.rodriguez@example.com', 15750.50, '2023-03-15', 'Premium');
```

### 3. **CSV** 📊
**Ideal para:** Excel, importación masiva, análisis de datos, reporting

**Cuándo usarlo:**
- Análisis en Excel/Google Sheets
- Importación en herramientas BI (Tableau, Power BI)
- Carga batch con GUI (importadores visuales)
- Compartir datasets con equipos no técnicos

**Ejemplo:**
```csv
id,nombre,email,saldo,fecha_apertura,tipo_cliente
CLT-20241125-0001,María Rodríguez García,maria.rodriguez@example.com,15750.50,2023-03-15,Premium
```

### 4. **XML** 📄
**Ideal para:** Sistemas legacy, SOAP web services, integraciones empresariales

**Cuándo usarlo:**
- Integración con sistemas bancarios antiguos
- Web services SOAP
- Formatos de intercambio legacy (EDI, HL7 salud)
- Cumplimiento de estándares específicos de industria

**Ejemplo:**
```xml
<cliente>
  <id>CLT-20241125-0001</id>
  <nombre>María Rodríguez García</nombre>
  <email>maria.rodriguez@example.com</email>
  <saldo>15750.50</saldo>
  <fechaApertura>2023-03-15</fechaApertura>
  <tipoCliente>Premium</tipoCliente>
</cliente>
```

---

## 🔄 Proceso de 8 Pasos para Generación Profesional

### **Paso 1: Definir Requerimiento de Datos**
**Objetivo:** Clarificar qué datos necesitas, para qué sistema, y cuántos registros.

**Preguntas clave:**
- ¿Qué escenarios de testing necesitan cubrir?
- ¿Cuántos registros? (100, 1000, 10000+)
- ¿Contexto de uso? (funcional, performance, integración, carga)
- ¿Ambiente destino? (dev, QA, staging)

**Ejemplo:**
> "Necesito 5000 transacciones bancarias para testing de reportes de auditoría del último año fiscal"

**Tips:**
- ✅ Pregunta al BA/PO: ¿Qué escenarios necesitan validar?
- ✅ Define volumen: pocos registros (exploración) vs masivos (performance)
- ✅ Identifica propósito: funcional, carga, integración, demo

---

### **Paso 2: Mapear Estructura de Datos**
**Objetivo:** Listar todos los campos, tipos de dato, y formatos específicos.

**Elementos a definir:**
- Nombres de todos los campos
- Tipos de dato (string, int, decimal, date, boolean, enum)
- Formatos específicos (emails, teléfonos, IDs, monedas, fechas)
- Restricciones (NOT NULL, UNIQUE, FK, CHECK constraints)

**Ejemplo:**
```
Campo "email":
- Tipo: VARCHAR(100)
- Formato: nombre.apellido@dominio.com
- Restricción: UNIQUE, NOT NULL
- Validación: formato válido de email
```

**Tips:**
- ✅ Revisa modelo de base de datos o schemas de API (DTOs)
- ✅ Anota restricciones: NOT NULL, UNIQUE, Foreign Keys
- ✅ Identifica formatos regionales (fechas DD/MM/YYYY vs MM/DD/YYYY)

---

### **Paso 3: Establecer Rangos y Distribuciones**
**Objetivo:** Definir valores mínimos, máximos y distribución estadística realista.

**Elementos clave:**
- Rangos numéricos (edad: 18-70, saldo: $0 - $50M)
- Distribuciones porcentuales (70% casos normales, 20% edge cases, 10% extremos)
- Valores categóricos y sus proporciones (Empleado 70%, Independiente 20%, Pensionado 10%)
- Patrones temporales (más actividad L-V 9am-5pm, menos fines de semana)

**Ejemplo:**
```
Campo "edad":
- Rango: 18-70 años
- Distribución:
  * 15% → 18-24 años (jóvenes)
  * 70% → 25-55 años (adultos activos)
  * 15% → 56-70 años (adultos mayores)
```

**Tips:**
- ✅ Pregunta: ¿Qué valores son normales en producción?
- ✅ Define outliers: casos extremos pero válidos
- ✅ Balancea distribución: evita solo valores promedio (poco realista)

---

### **Paso 4: Identificar Relaciones y Consistencia**
**Objetivo:** Asegurar que datos relacionados sean lógicamente consistentes.

**Validaciones comunes:**
- **Consistencia temporal:** Si fecha_nacimiento = 1995, edad actual ≈ 29 años
- **Consistencia lógica:** Si edad = 25, antigüedad laboral no puede ser 30 años
- **Scoring consistente:** Si historial crediticio = "Excelente", score debe estar en rango 750-850
- **Capacidad de pago:** Deuda mensual no puede exceder 80% del ingreso

**Ejemplo:**
```
Regla de consistencia:
- Si tipoCliente = "Premium" → saldoPromedio debe ser > $5,000,000
- Si scoreCrediticio < 500 → historialCrediticio debe ser "Malo"
- Si fechaNacimiento indica edad < 18 → no puede tener préstamos activos
```

**Tips:**
- ✅ Lista dependencias entre campos
- ✅ Valida Foreign Keys: IDs referenciados deben existir
- ✅ Asegura consistencia temporal: fechas coherentes
- ✅ Revisa reglas de negocio del dominio

---

### **Paso 5: Elegir Formato de Salida**
**Objetivo:** Seleccionar JSON, SQL, CSV o XML según destino de carga.

**Guía de selección:**

| Destino | Formato Recomendado | Razón |
|---------|-------------------|-------|
| APIs REST, Postman | JSON | Fácil de parsear, estándar web |
| MySQL, PostgreSQL | SQL INSERT | Carga directa en DB |
| Excel, Power BI | CSV | Universal, compatible BI |
| SOAP, Legacy | XML | Compatibilidad con sistemas antiguos |
| NoSQL (MongoDB) | JSON | Formato nativo |

**Tips:**
- ✅ API testing → JSON (directo para requests)
- ✅ Carga masiva DB → SQL (statements listos)
- ✅ Reporting/BI → CSV (importación universal)
- ✅ Legacy systems → XML (interoperabilidad)

---

### **Paso 6: Construir Prompt Estructurado**
**Objetivo:** Usar template [ROL][CONTEXTO][TAREA] con campos, rangos y validaciones explícitas.

**Template base:**
```
[ROL] Actúa como especialista en generación de datos sintéticos para [DOMINIO].

[CONTEXTO]
Sistema: [NOMBRE]
Propósito: [Testing funcional/Performance/Carga]
Ambiente: [Dev/QA/Staging]

[TAREA]
Genera [CANTIDAD] registros en formato [JSON/SQL/CSV/XML].

ESTRUCTURA:
- campo1: tipo, formato, rango
- campo2: tipo, formato, rango
[...todos los campos]

RANGOS Y DISTRIBUCIONES:
- CampoNumérico: [min-max], distribución [especificar]
- CampoCategorico: [valores] con % [distribuir]
- CampoFecha: rango [inicio-fin]

REGLAS DE NEGOCIO:
- Validación 1: [descripción]
- Validación 2: [descripción]

FORMATO OUTPUT:
[Especificar estructura exacta del output]
```

**Tips:**
- ✅ Sé específico: evita ambigüedad
- ✅ Incluye ejemplos de output esperado
- ✅ Lista validaciones de negocio explícitamente
- ✅ Define distribuciones (no solo rangos)

---

### **Paso 7: Generar y Validar Sample**
**Objetivo:** Ejecutar prompt y validar primeros 10-20 registros antes de generar todo.

**Checklist de validación:**
- [ ] **Unicidad:** Campos únicos (email, ID) no se repiten
- [ ] **Rangos:** Valores numéricos dentro de límites definidos
- [ ] **Formatos:** Emails válidos, teléfonos con formato correcto, fechas parseables
- [ ] **Consistencia:** Relaciones lógicas se cumplen
- [ ] **Distribución:** Proporciones aproximadas a lo solicitado
- [ ] **Sintaxis:** JSON parseable, SQL ejecutable, CSV con headers correctos

**Ejemplo de validación:**
```python
import json

# Cargar sample
with open('clientes_sample.json') as f:
    data = json.load(f)

# Validar unicidad de emails
emails = [c['email'] for c in data]
print(f"Total registros: {len(data)}")
print(f"Emails únicos: {len(set(emails))}")
assert len(emails) == len(set(emails)), "❌ Emails duplicados encontrados"

# Validar rangos
edades = [c['edad'] for c in data]
print(f"Edad mín: {min(edades)}, máx: {max(edades)}")
assert all(18 <= edad <= 70 for edad in edades), "❌ Edades fuera de rango"

print("✅ Validación exitosa")
```

**Tips:**
- ✅ NO generes 10,000 de una vez sin validar sample
- ✅ Pide sample pequeño primero (10-50 registros)
- ✅ Verifica manualmente casos extremos
- ✅ Si hay errores, ajusta prompt y regenera sample

---

### **Paso 8: Escalar y Cargar Dataset Completo**
**Objetivo:** Generar dataset completo, guardar en archivo, y cargar en sistema target.

**Proceso recomendado:**
1. **Generar en lotes** si cantidad > 5000 registros
   - Genera 5000 → valida → genera otros 5000 → consolida
2. **Guardar en archivo** antes de cargar
   - `clientes_20241125.json` (con fecha para versionado)
3. **Validar integridad post-generación**
   - COUNT total de registros
   - Checksums de archivos
   - Sample aleatorio de validación
4. **Cargar en ambiente**
   - Ten backup antes de cargar en ambiente compartido
   - Usa transacciones (BEGIN/COMMIT) en SQL
   - Valida post-carga (COUNT en DB = registros en archivo)

**Script ejemplo de carga SQL:**
```bash
# Backup antes de cargar
mysqldump -u user -p database > backup_$(date +%Y%m%d).sql

# Cargar datos
mysql -u user -p database < clientes_inserts.sql

# Validar
mysql -u user -p -e "SELECT COUNT(*) FROM clientes WHERE fecha_carga = CURDATE()" database
```

**Tips:**
- ✅ Genera en lotes si cantidad > 5000 registros
- ✅ Guarda archivo con timestamp para trazabilidad
- ✅ Valida integridad: COUNT, checksums
- ✅ Backup obligatorio antes de cargar en ambiente compartido

---

## 📝 Template Universal Reutilizable

```
[ROL] Actúa como especialista en generación de datos sintéticos para [DOMINIO: banca/e-commerce/salud/etc].

[CONTEXTO]
Sistema: [NOMBRE DEL SISTEMA]
Propósito: [Testing funcional/Performance/Carga masiva/Demo]
Ambiente: [Dev/QA/Staging/Producción simulada]
Volumen objetivo: [CANTIDAD] registros

[TAREA]
Genera [CANTIDAD] registros sintéticos en formato [JSON/SQL INSERT/CSV/XML] para tabla/entidad [NOMBRE].

ESTRUCTURA DE DATOS:
- campo1: [tipo de dato], formato [especificar], rango [min-max o valores permitidos]
- campo2: [tipo de dato], formato [especificar], rango [min-max o valores permitidos]
- campo3: [tipo de dato], formato [especificar], rango [min-max o valores permitidos]
[Listar TODOS los campos con especificaciones completas, sin omitir ninguno]

RANGOS Y DISTRIBUCIONES:
- Campo numérico 1: rango [mín] - [máx], distribución [uniforme/normal/70% en rango medio]
- Campo categórico 1: valores [valor1, valor2, valor3] con porcentajes [X%, Y%, Z%]
- Campo fecha 1: rango [fecha_inicio] a [fecha_fin], distribución [uniforme/concentrada en período]
- Campo texto 1: [formato/patrón específico, ej: "PRE-YYYYMMDD-NNNN"]

REGLAS DE NEGOCIO:
- Unicidad: [listar campos que deben ser únicos: email, ID, documento]
- Relaciones: [campo_A debe ser consistente con campo_B, ej: edad ↔ fecha_nacimiento]
- Validaciones: [restricciones de dominio, ej: score 300-850, saldo >= 0]
- Foreign Keys: [relaciones con otras entidades, IDs válidos]
- Consistencia temporal: [fechas lógicas, ej: fecha_apertura < fecha_primer_movimiento]

DISTRIBUCIÓN DE ESCENARIOS:
- Escenario 1 (X% de registros): características [describir perfil]
- Escenario 2 (Y% de registros): características [describir perfil]
- Escenario 3 (Z% de registros): características [describir perfil]
- Edge cases (5-10%): [casos extremos pero válidos]

FORMATO OUTPUT:
[Especificar formato exacto deseado:]
- JSON: array de objetos con estructura específica
- SQL: statements INSERT INTO con valores escapados correctamente
- CSV: con headers, delimitador coma, encoding UTF-8
- XML: con schema específico, tags anidados correctamente

VALIDACIONES FINALES A CUMPLIR:
- Todos los emails/IDs/documentos son únicos (sin duplicados)
- Fechas son lógicamente consistentes y parseables
- Montos y valores numéricos dentro de rangos permitidos
- Relaciones Foreign Key son válidas (IDs referenciados existen)
- Distribuciones de escenarios aproximadas a porcentajes solicitados
- Formato de salida es parseable sin errores (JSON válido, SQL ejecutable, CSV importable)

EJEMPLO DE OUTPUT ESPERADO:
[Incluir 2-3 registros completos de ejemplo mostrando la estructura exacta]
```

**Instrucciones de uso:**
1. Reemplaza todo lo que esté entre `[CORCHETES]` con valores específicos de tu proyecto
2. Define estructura completa de campos con tipos, formatos y rangos
3. Especifica distribuciones realistas (no todo uniforme)
4. Lista reglas de negocio y validaciones explícitamente
5. Agrega ejemplos de output esperado (2-3 registros completos)

---

## 💡 Ejemplos Comparativos: Prompt Básico vs Profesional

### **Ejemplo 1: 1000 Clientes para Sistema de Préstamos**

#### ❌ **Prompt Básico (MAL)**
```
Dame 1000 clientes en JSON para un sistema de préstamos
```

**Problemas:**
- ❌ No especifica qué campos necesita
- ❌ Sin contexto de dominio (banca colombiana)
- ❌ No indica rangos realistas de datos financieros
- ❌ Falta formato específico de IDs/documentos
- ❌ No menciona variedad de perfiles (buenos/malos pagadores)
- ❌ Sin validaciones de negocio

**Resultado:** Datos genéricos, poco realistas, inútiles para testing serio.

---

#### ✅ **Prompt Profesional (BIEN)**
```
[ROL] Actúa como especialista en generación de datos sintéticos para sector bancario colombiano.

[CONTEXTO]
Sistema de préstamos personales en banco comercial colombiano.
Necesito dataset para testing de algoritmo de scoring crediticio y aprobación automática.
Ambiente: QA

[TAREA]
Genera 1000 clientes sintéticos en formato JSON con esta estructura:

CAMPOS REQUERIDOS:
- id: formato "CLT-YYYYMMDD-NNNN" (año, mes, día actual, consecutivo 0001-1000)
- cedulaCiudadania: 10 dígitos, números válidos colombianos (sin repetir)
- nombreCompleto: nombres y apellidos colombianos realistas (variedad de longitudes)
- email: formato usuario@dominio.com (únicos, sin repetir)
- telefono: celular colombiano formato "+57 3XX XXX XXXX"
- fechaNacimiento: rango 1960-01-01 a 2000-12-31 (edades 24-64 años)
- ciudadResidencia: ciudades principales colombianas con distribución:
  * Bogotá: 40%
  * Medellín: 20%
  * Cali: 15%
  * Barranquilla: 10%
  * Otras ciudades: 15%
- ingresoMensual: rango $1.500.000 - $20.000.000 COP, distribución:
  * $1.5M - $3M: 40%
  * $3M - $6M: 35%
  * $6M - $12M: 20%
  * $12M - $20M: 5%
- tipoEmpleo: valores [Empleado, Independiente, Pensionado] con distribución [70%, 20%, 10%]
- antiguedadLaboral: 0-35 años, consistente con edad (no puede ser > edad-18)
- historialCrediticio: valores [Excelente, Bueno, Regular, Malo] con distribución [20%, 40%, 30%, 10%]
- deudaActual: $0 - 80% del ingresoMensual (no exceder capacidad de pago)
- saldoCuentaAhorros: $0 - $50.000.000 COP, distribución:
  * $0 - $1M: 40%
  * $1M - $5M: 35%
  * $5M - $20M: 20%
  * $20M - $50M: 5%
- scoreCrediticio: 300-850, consistente con historialCrediticio:
  * Excelente: 750-850
  * Bueno: 650-749
  * Regular: 550-649
  * Malo: 300-549

DISTRIBUCIÓN DE PERFILES (para testing de aprobación):
- 20% perfiles excelentes: score 750-850, deuda <20% ingreso, saldo >$5M
- 40% perfiles buenos: score 650-749, deuda 20-40% ingreso, saldo $1M-$5M
- 30% perfiles regulares: score 550-649, deuda 40-60% ingreso, saldo <$1M
- 10% perfiles malos: score 300-549, deuda >60% ingreso, historial malo

REGLAS DE NEGOCIO:
- Email único por registro (sin duplicados)
- Cédula única (sin duplicados)
- Scoring consistente con historial crediticio
- Deuda no excede 80% del ingreso mensual
- Edad consistente con antigüedad laboral (antigüedad <= edad-18)
- Pensionados tienen edad >= 55 años
- Independientes tienen ingresos más variables (distribución más amplia)

VALIDACIONES FINALES:
- 1000 registros exactos
- Todos los emails únicos
- Todas las cédulas únicas
- Scoring en rango 300-850
- Distribución de perfiles aproximada a porcentajes solicitados

OUTPUT: Array JSON con 1000 objetos, sin comentarios, formato válido parseable.

EJEMPLO ESPERADO (primeros 2 registros):
[
  {
    "id": "CLT-20241125-0001",
    "cedulaCiudadania": "1234567890",
    "nombreCompleto": "Camila González Martínez",
    "email": "camila.gonzalez@example.com",
    "telefono": "+57 312 456 7890",
    "fechaNacimiento": "1985-04-12",
    "ciudadResidencia": "Bogotá",
    "ingresoMensual": 5500000,
    "tipoEmpleo": "Empleado",
    "antiguedadLaboral": 8,
    "historialCrediticio": "Bueno",
    "deudaActual": 1650000,
    "saldoCuentaAhorros": 12000000,
    "scoreCrediticio": 720
  },
  {
    "id": "CLT-20241125-0002",
    "cedulaCiudadania": "0987654321",
    "nombreCompleto": "Andrés Felipe Rodríguez López",
    "email": "andres.rodriguez@example.com",
    "telefono": "+57 301 234 5678",
    "fechaNacimiento": "1992-11-28",
    "ciudadResidencia": "Medellín",
    "ingresoMensual": 3200000,
    "tipoEmpleo": "Independiente",
    "antiguedadLaboral": 5,
    "historialCrediticio": "Regular",
    "deudaActual": 1280000,
    "saldoCuentaAhorros": 800000,
    "scoreCrediticio": 620
  }
]
```

**Beneficios:**
- ✅ Especifica formato colombiano (cédulas, teléfonos, moneda COP)
- ✅ Define estructura completa con todos los campos y tipos
- ✅ Rangos realistas de datos financieros
- ✅ Distribución de perfiles balanceada (20-40-30-10)
- ✅ Validaciones de consistencia de negocio explícitas
- ✅ Casos de testing balanceados (buenos/malos pagadores)
- ✅ Incluye ejemplo de output esperado

---

### **Ejemplo 2: 10,000 Transacciones Bancarias en SQL**

#### ❌ **Prompt Básico (MAL)**
```
Genera SQL inserts de transacciones bancarias
```

**Problemas:**
- ❌ No especifica cantidad de registros
- ❌ Sin estructura de tabla definida
- ❌ No indica tipos de transacciones
- ❌ Falta rangos de montos
- ❌ Sin fechas históricas
- ❌ No valida saldos o consistencia

---

#### ✅ **Prompt Profesional (BIEN)**
```
[ROL] Experto en datos sintéticos para testing de sistemas financieros core bancarios.

[CONTEXTO]
Sistema core bancario con tabla "transacciones" en PostgreSQL.
Necesito carga masiva para testing de performance de reportes y consultas históricas.
Ambiente: QA

[TAREA]
Genera 10,000 SQL INSERTs para tabla transacciones con esta estructura:

ESQUEMA DE TABLA:
CREATE TABLE transacciones (
    id_transaccion VARCHAR(20) PRIMARY KEY,
    fecha_hora TIMESTAMP NOT NULL,
    id_cuenta_origen VARCHAR(15) NOT NULL,
    id_cuenta_destino VARCHAR(15),
    tipo_transaccion VARCHAR(20) NOT NULL,
    monto DECIMAL(15,2) NOT NULL,
    estado VARCHAR(15) NOT NULL,
    canal VARCHAR(20) NOT NULL,
    descripcion VARCHAR(200),
    CHECK (monto > 0)
);

CAMPOS DETALLADOS:
- id_transaccion: formato "TRX-YYYYMMDD-NNNNN" (fecha + consecutivo 00001-10000)
- fecha_hora: TIMESTAMP rango últimos 2 años (2022-11-25 a 2024-11-25), distribuido uniformemente
- id_cuenta_origen: formato "ACC-NNNNN" (pool de 500 cuentas: ACC-00001 a ACC-00500)
- id_cuenta_destino: formato "ACC-NNNNN" (pool de 500 cuentas, diferente a origen en TRANSFERENCIAS, NULL en DEPOSITO/RETIRO)
- tipo_transaccion: valores y distribución:
  * TRANSFERENCIA: 40%
  * DEPOSITO: 25%
  * RETIRO: 20%
  * PAGO_SERVICIO: 15%
- monto: DECIMAL(15,2), rangos por tipo:
  * TRANSFERENCIA: $10.000 - $5.000.000
  * DEPOSITO: $20.000 - $10.000.000
  * RETIRO: $10.000 - $3.000.000
  * PAGO_SERVICIO: $5.000 - $500.000
- estado: valores y distribución:
  * EXITOSA: 85%
  * PENDIENTE: 10%
  * RECHAZADA: 5%
- canal: valores y distribución:
  * APP_MOVIL: 50%
  * WEB: 30%
  * CAJERO: 15%
  * SUCURSAL: 5%
- descripcion: texto descriptivo según tipo:
  * TRANSFERENCIA: "Transferencia a [nombre]"
  * DEPOSITO: "Depósito en efectivo" o "Depósito por cheque"
  * RETIRO: "Retiro cajero [ubicación]"
  * PAGO_SERVICIO: "Pago [servicio: Energía/Agua/Internet/Teléfono]"

REGLAS DE NEGOCIO:
- Cuentas origen y destino DEBEN ser diferentes en TRANSFERENCIAS
- DEPOSITO y RETIRO tienen id_cuenta_destino = NULL
- Fechas ordenadas cronológicamente (más antiguas primero)
- No exceder 50 transacciones por cuenta por día (distribuir en horarios)
- Rechazos solo ocurren en TRANSFERENCIA y RETIRO (5% cada uno)
- Montos con 2 decimales, formato PostgreSQL: 1500000.50
- Timestamps con formato: '2024-11-25 14:30:45'

DISTRIBUCIÓN TEMPORAL:
- Horarios laborales (8am-6pm): 60% de transacciones
- Noches (6pm-12am): 30%
- Madrugada (12am-8am): 10%
- Más transacciones Lun-Vie (70%) que fines de semana (30%)

FORMATO OUTPUT:
- 10,000 statements INSERT INTO separados por salto de línea
- Sin BEGIN TRANSACTION / COMMIT (se ejecutarán por lotes)
- Valores de texto entre comillas simples
- NULL sin comillas
- Fechas en formato 'YYYY-MM-DD HH:MM:SS'

VALIDACIONES FINALES:
- Exactamente 10,000 INSERTs
- Cuenta origen != cuenta destino en transferencias
- Montos > 0 siempre
- Fechas en rango especificado
- Distribuciones aproximadas a porcentajes solicitados

EJEMPLO ESPERADO (primeros 3 registros):
INSERT INTO transacciones VALUES ('TRX-20221125-00001', '2022-11-25 08:15:23', 'ACC-00123', 'ACC-00456', 'TRANSFERENCIA', 250000.00, 'EXITOSA', 'APP_MOVIL', 'Transferencia a María López');
INSERT INTO transacciones VALUES ('TRX-20221125-00002', '2022-11-25 09:22:15', 'ACC-00789', NULL, 'DEPOSITO', 1500000.00, 'EXITOSA', 'SUCURSAL', 'Depósito en efectivo');
INSERT INTO transacciones VALUES ('TRX-20221125-00003', '2022-11-25 10:45:30', 'ACC-00234', NULL, 'RETIRO', 200000.00, 'EXITOSA', 'CAJERO', 'Retiro cajero Calle 100');
```

**Beneficios:**
- ✅ Define esquema completo de tabla SQL con constraints
- ✅ Rangos de montos específicos por tipo de transacción
- ✅ Distribución temporal realista (2 años, horarios pico)
- ✅ Pool de cuentas reutilizables (simula clientes reales)
- ✅ Validaciones de negocio (origen ≠ destino en transferencias)
- ✅ Estados y canales con distribución realista
- ✅ Formato SQL ejecutable directamente en PostgreSQL

---

## 🎯 Desafíos Prácticos (Elige Uno)

### **Desafío 1: 500 Productos E-commerce** 🟢 (Fácil)

**Requerimiento:**
Tienda online de electrónicos necesita catálogo de 500 productos sintéticos para testing de búsqueda, filtros y carrito de compras.

**Contexto:**
- Categorías: Laptops, Smartphones, Tablets, Accesorios, Audio
- Marcas realistas: Apple, Samsung, HP, Lenovo, Sony, Dell, Asus, etc.
- Rangos de precio: $100 - $5,000 USD
- Stock variable: 0-200 unidades (incluir productos agotados)
- Rating: 1.0-5.0 estrellas con cantidad de reviews (0-500)

**Requisitos del Entregable:**
- ✅ Formato JSON con array de 500 productos
- ✅ Campos: id, nombre, categoria, marca, precio, stock, rating, numReviews, descripcion
- ✅ Distribución: 30% Laptops, 30% Smartphones, 20% Tablets, 20% otros
- ✅ 10% productos agotados (stock = 0)
- ✅ Precios realistas según categoría (Laptops $500-$2500, Smartphones $200-$1500)

**Pistas:**
- Define pool de marcas por categoría (Apple hace iPhones, no Laptops Windows)
- Nombres descriptivos: "MacBook Pro 16 M3 2024" no "Producto 123"
- Descripciones cortas (50-100 palabras) realistas
- Stock agotado debe tener rating alto (productos populares)

**Tiempo sugerido:** 25 minutos

---

### **Desafío 2: 2000 Historiales Médicos en CSV** 🟡 (Intermedio)

**Requerimiento:**
Sistema de historia clínica electrónica necesita dataset de 2000 pacientes con consultas, diagnósticos y tratamientos para testing de reportes epidemiológicos.

**Contexto:**
- Pacientes con datos demográficos completos
- Múltiples consultas por paciente (1-20 consultas en últimos 3 años)
- Diagnósticos CIE-10 realistas (top 50 diagnósticos comunes)
- Medicamentos prescritos según diagnóstico
- Alergias medicamentosas (15% de pacientes)

**Requisitos del Entregable:**
- ✅ Formato CSV (compatible Excel) con headers
- ✅ Estructura: id_paciente, nombre, edad, genero, fecha_consulta, diagnostico_cie10, medicamento_prescrito, dosis, alergias
- ✅ Total ~15,000 registros (2000 pacientes × promedio 7-8 consultas cada uno)
- ✅ Fechas distribuidas en últimos 3 años
- ✅ Validar: no prescribir medicamento si paciente alérgico
- ✅ Enfermedades crónicas (diabetes, hipertensión) deben repetirse en múltiples consultas del mismo paciente

**Pistas:**
- Usa códigos CIE-10 reales comunes: J06 (Infección respiratoria), K29 (Gastritis), E11 (Diabetes tipo 2)
- Consulta tabla medicamentos-diagnósticos: Diabetes → Metformina, Hipertensión → Losartán
- Distribuye edades realisticamente: más consultas en niños (0-5) y adultos mayores (60+)
- Alergias comunes: Penicilina, Aspirina, Sulfa

**Tiempo sugerido:** 35 minutos

---

### **Desafío 3: 10,000 Transacciones Multi-Tabla en SQL** 🔴 (Avanzado)

**Requerimiento:**
Sistema bancario core necesita dataset completo de 10,000 transacciones con impacto en múltiples tablas relacionadas (clientes, cuentas, transacciones, saldos_historicos) para testing de integridad referencial y triggers.

**Contexto:**
- Schema con 4 tablas relacionadas: clientes, cuentas, transacciones, saldos_historicos
- Relaciones FK: transacciones.id_cuenta → cuentas.id, cuentas.id_cliente → clientes.id
- 500 clientes con 1-3 cuentas cada uno (total ~1000 cuentas)
- Transacciones afectan saldos: INSERT en transacciones debe reflejarse en saldos_historicos
- Validación: saldo no puede ser negativo (excepto sobregiro autorizado hasta -$500,000)

**Requisitos del Entregable:**
- ✅ Formato: SQL INSERTs para PostgreSQL con orden de carga correcto
- ✅ Orden de carga: 1) clientes, 2) cuentas, 3) transacciones, 4) saldos_historicos
- ✅ 500 INSERTs en tabla clientes
- ✅ ~1000 INSERTs en tabla cuentas (vinculadas a clientes existentes)
- ✅ 10,000 INSERTs en tabla transacciones (origen/destino válidos)
- ✅ ~10,000 INSERTs en saldos_historicos (snapshot después de cada transacción)
- ✅ Incluir BEGIN TRANSACTION y COMMIT para atomicidad
- ✅ Validar: suma de transacciones por cuenta = diferencia de saldos inicial vs final

**Pistas:**
- Genera primero 500 clientes con IDs fijos: CLT-00001 a CLT-00500
- Cuentas: usa IDs de clientes generados, tipos [AHORROS, CORRIENTE]
- Transacciones: usa pool de cuentas existentes, valida origen ≠ destino en transferencias
- Saldos históricos: calcula saldo_anterior + monto (débito) o - monto (crédito)
- Agrega CHECK constraints: CHECK (saldo >= -500000)
- Incluye índices sugeridos: CREATE INDEX idx_transacciones_fecha ON transacciones(fecha);

**Tiempo sugerido:** 45 minutos

---

## 💡 Tips Profesionales de QAs y Devs

### 🔢 **Genera en Lotes para Volúmenes Grandes**
Si necesitas 50,000 registros, genera 10 lotes de 5,000. Más manejable, menos errores, y puedes validar progresivamente.

**Ejemplo:**
```
Lote 1: Genera 5,000 clientes con IDs CLT-00001 a CLT-05000
Lote 2: Genera 5,000 clientes con IDs CLT-05001 a CLT-10000
... (repetir hasta completar)
```

---

### 🎲 **Usa Seeds para Reproducibilidad**
Si necesitas regenerar el mismo dataset (por ejemplo, después de encontrar un bug), especifica un seed aleatorio.

**Ejemplo en prompt:**
```
Usa seed=12345 para generación aleatoria reproducible.
Cualquier ejecución con seed=12345 debe producir exactamente el mismo output.
```

---

### 🔗 **Mantén Pools de IDs para Relaciones**
Crea primero entidades padre (clientes), luego usa sus IDs en entidades hija (cuentas, transacciones).

**Ejemplo:**
```
Paso 1: Genera 100 clientes con IDs CLT-001 a CLT-100
Paso 2: Genera 300 cuentas usando IDs de clientes CLT-001 a CLT-100 en campo id_cliente
Paso 3: Genera 10,000 transacciones usando IDs de cuentas generadas en paso 2
```

---

### 📅 **Distribuye Fechas Realisticamente**
No uses distribución uniforme en fechas. Simula patrones reales de negocio.

**Ejemplo:**
```
- 70% transacciones Lun-Vie 8am-6pm (horario laboral)
- 20% transacciones Lun-Vie 6pm-12am (noches)
- 10% transacciones fines de semana
- Picos a fin de mes (pagos de nómina, facturas)
```

---

### 💾 **Guarda Datasets Reutilizables**
Si el dataset es de calidad, guárdalo en repositorio. Reutiliza en múltiples sprints.

**Ejemplo:**
```
/test-data/
  ├── clientes_1000_v1.json
  ├── transacciones_10k_v2.sql
  ├── productos_500_ecommerce.csv
  └── README.md (documenta qué contiene cada dataset)
```

---

### ✅ **Automatiza Validación Post-Generación**
Crea script que valide automáticamente: unicidad, rangos, FK válidas, consistencia.

**Ejemplo Python:**
```python
import json

def validar_clientes(filepath):
    with open(filepath) as f:
        data = json.load(f)
    
    # Validar unicidad de emails
    emails = [c['email'] for c in data]
    assert len(emails) == len(set(emails)), "❌ Emails duplicados"
    
    # Validar rangos de edad
    edades = [c['edad'] for c in data]
    assert all(18 <= e <= 70 for e in edades), "❌ Edades fuera de rango"
    
    # Validar scoring vs historial
    for c in data:
        if c['historial'] == 'Excelente':
            assert c['score'] >= 750, f"❌ Score {c['score']} inconsistente con historial"
    
    print("✅ Validación exitosa")

validar_clientes('clientes.json')
```

---

### 🌍 **Especifica Localización**
Nombres, formatos de fecha, moneda, teléfonos deben ser del país/región correcta.

**Ejemplo:**
```
País: Colombia
- Nombres: colombianos realistas (Camila, Andrés, Valentina, Santiago)
- Fechas: formato DD/MM/YYYY
- Moneda: COP con puntos de miles ($1.500.000)
- Teléfonos: +57 3XX XXX XXXX
- Documentos: cédula de 10 dígitos
```

---

### 🔐 **Anonimiza si Partes de Datos Reales**
Si usas estructura de producción como referencia, NUNCA copies datos reales. Anonimiza o sintetiza completamente.

**Ejemplo:**
```
❌ MAL: Copiar tabla clientes de producción a QA
✅ BIEN: "Basado en estructura de tabla clientes (adjunto schema.sql), genera datos 100% sintéticos"
```

---

## 📦 Entregables Esperados

### **1. Dataset Completo** 📦
Archivo con cantidad solicitada de registros en formato elegido.

**Checklist:**
- [ ] Archivo .json / .sql / .csv / .xml con registros completos
- [ ] Cumple cantidad especificada (ej: 1000 registros exactos)
- [ ] Sintaxis válida (parseable sin errores)
- [ ] Codificación UTF-8 para caracteres especiales (ñ, tildes)
- [ ] Nombre de archivo con timestamp: `clientes_1000_20241125.json`

---

### **2. Prompt Documentado** 📋
Prompt estructurado reutilizable para regenerar o ajustar dataset.

**Checklist:**
- [ ] Template completo con [ROL][CONTEXTO][TAREA]
- [ ] Campos, rangos, distribuciones listados
- [ ] Validaciones de negocio explícitas
- [ ] Comentarios explicando decisiones de diseño
- [ ] Versionado si hiciste ajustes iterativos (v1, v2, v3)

**Ejemplo de versionado:**
```
clientes_prompt_v1.txt → Primera versión
clientes_prompt_v2.txt → Ajusté rangos de edad (18-65 → 18-70)
clientes_prompt_v3.txt → Agregué validación de scoring vs historial
```

---

### **3. Reporte de Validación** ✅
Documento breve confirmando calidad del dataset generado.

**Template:**
```markdown
# Reporte de Validación: Clientes 1000 registros

## Validaciones Ejecutadas
- ✅ Unicidad: 1000 emails únicos (sin duplicados)
- ✅ Rangos: Edades 18-70, ingresos $1.5M-$20M
- ✅ Consistencia: Scoring alineado con historial crediticio
- ✅ Distribución: 20% excelentes, 40% buenos, 30% regulares, 10% malos
- ✅ Formato: JSON parseable sin errores

## Sample Representativo
[Incluir 5-10 registros de ejemplo]

## Issues Encontrados y Soluciones
- Issue 1: 3 emails duplicados → Regeneré con validación de unicidad
- Issue 2: 5 registros con edad < 18 → Ajusté rango en prompt

## Conclusión
✅ Dataset listo para uso en testing
```

---

## 🚀 Próximos Pasos

1. **Guarda el dataset** en repositorio de equipo (`/test-data/`)
2. **Documenta en README** cómo usarlo y regenerarlo
3. **Comparte prompt** con equipo para futuros proyectos
4. **Próxima clase:** Taller de Scripts de Automatización con IA
   - Generaremos scripts Selenium/Cypress desde test cases
   - Aprenderás a automatizar flujos completos usando IA

---

## 💬 Compartir y Aprender (Revisión Grupal - 15 min)

**Actividad de cierre:**
- 2-3 personas muestran su dataset generado
- Discusión:
  - ¿Qué formato eligieron? ¿Por qué?
  - ¿Cómo validaron la calidad de los datos?
  - ¿Qué ajustes hicieron al prompt?
  - ¿Qué aprendizajes se llevan?

**Quote del día:**
> "Datos sintéticos bien hechos = Testing más confiable. No escatimes tiempo en generar datasets de calidad."

---

## 📚 Recursos Adicionales

- **Herramientas complementarias:**
  - [Faker (Python)](https://faker.readthedocs.io/) - Generación de datos fake programática
  - [Mockaroo](https://www.mockaroo.com/) - Generador online de datasets
  - [JSON Generator](https://json-generator.com/) - Templates personalizables
  
- **Documentación:**
  - [CIE-10 Códigos](https://www.who.int/standards/classifications/classification-of-diseases) - Diagnósticos médicos
  - [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) - Formato de fechas
  
- **Librerías útiles:**
  - Python: `faker`, `mimesis`, `factory_boy`
  - JavaScript: `faker-js`, `casual`
  - Java: `Java Faker`, `Easy Random`

---

## 🎓 Resumen de Aprendizajes Clave

✅ **Datos sintéticos masivos** ahorran tiempo (8-10h → 5min)  
✅ **Prompts estructurados** [ROL][CONTEXTO][TAREA] generan mejores resultados  
✅ **Validar sample pequeño** antes de generar volúmenes grandes  
✅ **Consistencia de datos** es clave: relaciones, rangos, distribuciones  
✅ **Formato correcto** según destino: JSON (APIs), SQL (DB), CSV (Excel), XML (Legacy)  
✅ **Distribuciones realistas** mejor que valores uniformes  
✅ **Guardar y versionar** datasets y prompts para reutilización  
✅ **Automatizar validación** con scripts para garantizar calidad  

---

**🎯 ¡Dataset sintético de calidad = Testing confiable!**
