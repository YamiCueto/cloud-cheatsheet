# 🚀 Sesión Live: API FastAPI para Test Cases (Clase 2)

## 📋 Objetivo
Crear una API REST con FastAPI (Python) que permita ejecutar los test cases de la Clase 2 (Consulta Bureau de Crédito, Aprobación de Préstamo, Transferencia Internacional).

---

## 🎯 Casos de Uso a Implementar

### 1. **Consulta Bureau de Crédito**
**Historia de Usuario:**
> Como oficial de crédito, quiero consultar el historial crediticio del cliente en el Bureau de Crédito para evaluar su capacidad de pago antes de aprobar el préstamo.

**Endpoints a crear:**
- `POST /api/bureau/consultar` - Consulta score y historial crediticio
- `GET /api/bureau/{cliente_id}` - Obtiene última consulta guardada

**Test Cases clave (de la Clase 2):**
- ✅ **Path feliz:** Cliente con score 750, sin deudas → Respuesta exitosa
- ⚠️ **Edge case:** Cliente sin historial crediticio → Respuesta "Sin información"
- ❌ **Negativo:** Cliente en lista de riesgo → Bloqueo de consulta
- ⚠️ **Límite:** Múltiples consultas al mismo cliente en 24h → Solo 1 permitida


### 2. **Aprobación de Préstamo**
**Historia de Usuario:**
> Como oficial de crédito, quiero revisar y aprobar solicitudes de préstamo evaluando el historial crediticio, ingresos y capacidad de pago del cliente.

**Endpoints a crear:**
- `POST /api/prestamos/solicitar` - Crea nueva solicitud
- `PUT /api/prestamos/{id}/aprobar` - Aprueba préstamo
- `PUT /api/prestamos/{id}/rechazar` - Rechaza préstamo
- `GET /api/prestamos/{id}/estado` - Consulta estado actual

**Test Cases clave:**
- ✅ **Aprobación automática:** Score > 700, ingresos 4x cuota → Aprobado
- ⚠️ **Análisis manual:** Score 600-700, ingresos 3x cuota → Estado "En revisión"
- ❌ **Rechazo automático:** Score < 500 → Rechazado
- ⚠️ **Límite monto:** Solicitud $60M (límite $50M) → Error validación


### 3. **Transferencia Internacional (Avanzado)**
**Historia de Usuario:**
> Como usuario premium, quiero realizar transferencias internacionales en múltiples divisas para pagar a proveedores en el extranjero, cumpliendo con regulaciones de prevención de lavado de activos.

**Endpoints a crear:**
- `POST /api/transferencias/internacional` - Crea transferencia
- `GET /api/transferencias/{id}/tasa-cambio` - Consulta tasa del día
- `POST /api/transferencias/{id}/validar-pld` - Validación anti-lavado
- `PUT /api/transferencias/{id}/confirmar` - Confirma después de validaciones

**Test Cases clave:**
- ✅ **Path feliz:** Transferencia USD $5000, tasa $4200, sin alertas PLD → Exitosa
- ⚠️ **Validación PLD:** Monto > $10,000 USD → Requiere validación manual
- ❌ **Límite diario:** Usuario excede $30,000 USD/día → Bloqueado
- ⚠️ **Concurrencia:** 2 transferencias simultáneas con mismo saldo → Solo 1 aprobada

---

## 🛠️ Stack Tecnológico

```python
# Tecnologías principales
- Python 3.10+
- FastAPI (framework API REST)
- Pydantic (validación datos)
- SQLAlchemy (ORM base de datos)
- SQLite en memoria (sin persistencia, ideal para demos)
- pytest (testing)
- Faker (datos sintéticos)
```

---

## 📂 Estructura del Proyecto

```
fastapi-test-cases/
│
├── app/
│   ├── __init__.py
│   ├── main.py                    # Punto entrada FastAPI
│   ├── config.py                  # Configuraciones (DB, límites)
│   │
│   ├── models/                    # Modelos SQLAlchemy
│   │   ├── __init__.py
│   │   ├── cliente.py             # Modelo Cliente
│   │   ├── prestamo.py            # Modelo Préstamo
│   │   └── transferencia.py      # Modelo Transferencia
│   │
│   ├── schemas/                   # Schemas Pydantic (request/response)
│   │   ├── __init__.py
│   │   ├── bureau.py              # BureauRequest, BureauResponse
│   │   ├── prestamo.py            # PrestamoRequest, PrestamoResponse
│   │   └── transferencia.py      # TransferenciaRequest, Response
│   │
│   ├── routers/                   # Endpoints por dominio
│   │   ├── __init__.py
│   │   ├── bureau.py              # /api/bureau/*
│   │   ├── prestamos.py           # /api/prestamos/*
│   │   └── transferencias.py     # /api/transferencias/*
│   │
│   ├── services/                  # Lógica de negocio
│   │   ├── __init__.py
│   │   ├── bureau_service.py      # Validaciones score, historial
│   │   ├── prestamo_service.py    # Cálculo capacidad, aprobación
│   │   └── transferencia_service.py  # Validación PLD, tasas
│   │
│   └── database.py                # Setup conexión DB en memoria
│
├── tests/                         # Tests pytest
│   ├── __init__.py
│   ├── conftest.py                # Fixtures compartidas
│   ├── test_bureau.py             # Tests endpoints bureau
│   ├── test_prestamos.py          # Tests endpoints préstamos
│   └── test_transferencias.py    # Tests endpoints transferencias
│
├── requirements.txt               # Dependencias Python
└── README.md                     # Documentación
```

---

## ⚡ Plan de Implementación (Sesión Live)

### **Fase 1: Setup Inicial (10 min)**
```bash
# 1. Crear entorno virtual
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# 2. Instalar dependencias
pip install fastapi uvicorn sqlalchemy pydantic faker pytest httpx

# 3. Crear estructura de carpetas
mkdir -p app/{models,schemas,routers,services}
touch app/{__init__,main,config,database}.py
```

### **Fase 2: Configuración Base de Datos en Memoria (5 min)**

**`app/database.py`**
```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLite en memoria - datos se pierden al cerrar API (ideal para demos)
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

# check_same_thread=False permite usar SQLite desde múltiples threads
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, 
    connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    """Dependency para obtener sesión de DB en endpoints"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    """Crea todas las tablas al iniciar la API"""
    Base.metadata.create_all(bind=engine)

def seed_data(db):
    """Inserta datos iniciales para demostración"""
    from app.models.cliente import Cliente, EstadoCliente
    
    clientes_demo = [
        Cliente(
            id=1, nombre="Juan Pérez", identificacion="1234567890",
            email="juan@test.com", score_cifin=750, 
            ingresos_mensuales=5_000_000, estado=EstadoCliente.ACTIVO
        ),
        Cliente(
            id=2, nombre="María López", identificacion="0987654321",
            email="maria@test.com", score_cifin=None,  # Sin historial
            ingresos_mensuales=3_000_000, estado=EstadoCliente.ACTIVO
        ),
        Cliente(
            id=3, nombre="Pedro Gómez", identificacion="1122334455",
            email="pedro@test.com", score_cifin=450,  # Bajo score
            ingresos_mensuales=2_000_000, estado=EstadoCliente.ACTIVO
        ),
        Cliente(
            id=4, nombre="Ana Martínez", identificacion="5566778899",
            email="ana@test.com", score_cifin=650,
            ingresos_mensuales=4_000_000, estado=EstadoCliente.BLOQUEADO
        ),
    ]
    
    db.add_all(clientes_demo)
    db.commit()
    print("✅ Base de datos inicializada con 4 clientes demo")
```

### **Fase 3: Modelo de Datos (10 min)**

**`app/models/cliente.py`**
```python
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum
from datetime import datetime
import enum
from app.database import Base

class EstadoCliente(str, enum.Enum):
    ACTIVO = "activo"
    BLOQUEADO = "bloqueado"
    INACTIVO = "inactivo"

class Cliente(Base):
    __tablename__ = "clientes"
    
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    identificacion = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    score_cifin = Column(Integer)  # 300-900
    ingresos_mensuales = Column(Float)
    estado = Column(Enum(EstadoCliente), default=EstadoCliente.ACTIVO)
    fecha_creacion = Column(DateTime, default=datetime.utcnow)
```

**`app/models/prestamo.py`**
```python
from sqlalchemy import Column, Integer, String, Float, DateTime, Enum, ForeignKey
from datetime import datetime
import enum
from app.database import Base

class EstadoPrestamo(str, enum.Enum):
    SOLICITADO = "solicitado"
    EN_REVISION = "en_revision"
    APROBADO = "aprobado"
    RECHAZADO = "rechazado"
    DESEMBOLSADO = "desembolsado"

class Prestamo(Base):
    __tablename__ = "prestamos"
    
    id = Column(Integer, primary_key=True, index=True)
    cliente_id = Column(Integer, ForeignKey("clientes.id"))
    monto_solicitado = Column(Float, nullable=False)
    plazo_meses = Column(Integer, nullable=False)  # 12, 24, 36, 48, 60
    tasa_interes = Column(Float)  # %
    cuota_mensual = Column(Float)
    estado = Column(Enum(EstadoPrestamo), default=EstadoPrestamo.SOLICITADO)
    motivo_rechazo = Column(String, nullable=True)
    fecha_solicitud = Column(DateTime, default=datetime.utcnow)
    fecha_decision = Column(DateTime, nullable=True)
```

### **Fase 4: Schemas Pydantic (10 min)**

**`app/schemas/bureau.py`**
```python
from pydantic import BaseModel, Field
from typing import Optional

class BureauRequest(BaseModel):
    cliente_id: int = Field(..., description="ID del cliente")
    
class BureauResponse(BaseModel):
    cliente_id: int
    score: int = Field(..., ge=300, le=900, description="Score crediticio")
    deudas_activas: int
    monto_deudas: float
    puntualidad: str  # "Excelente", "Buena", "Regular", "Mala"
    tiene_historial: bool
    fecha_consulta: str
    mensaje: str
    
    class Config:
        json_schema_extra = {
            "example": {
                "cliente_id": 123,
                "score": 750,
                "deudas_activas": 2,
                "monto_deudas": 5000000.0,
                "puntualidad": "Excelente",
                "tiene_historial": True,
                "fecha_consulta": "2025-11-25T10:30:00",
                "mensaje": "Cliente apto para crédito"
            }
        }
```

### **Fase 5: Main App - Inicialización (5 min)**

**`app/main.py`**
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import init_db, seed_data, SessionLocal
from app.routers import bureau, prestamos

app = FastAPI(
    title="API Test Cases - Clase 2",
    description="API REST para ejecutar test cases de Bureau, Préstamos y Transferencias",
    version="1.0.0"
)

# CORS para permitir llamadas desde Angular (Clase 8)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción: dominios específicos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Event: Al iniciar API
@app.on_event("startup")
def startup_event():
    """Crea tablas e inserta datos demo en memoria"""
    print("🚀 Inicializando base de datos en memoria...")
    init_db()
    
    # Seed inicial
    db = SessionLocal()
    seed_data(db)
    db.close()

# Incluir routers
app.include_router(bureau.router)
app.include_router(prestamos.router)

@app.get("/")
def root():
    return {
        "message": "API Test Cases - Clase 2",
        "docs": "/docs",
        "endpoints": {
            "bureau": "/api/bureau/consultar",
            "prestamos": "/api/prestamos/solicitar"
        }
    }

@app.get("/health")
def health_check():
    return {"status": "OK", "database": "SQLite in-memory"}
```

### **Fase 6: Servicios (Lógica de Negocio) (20 min)**

**`app/services/bureau_service.py`**
```python
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from app.models.cliente import Cliente

class BureauService:
    # Límite: 1 consulta por cliente cada 24h
    LIMITE_CONSULTAS_24H = 1
    
    def consultar_score(self, db: Session, cliente_id: int):
        """
        Test Cases implementados:
        1. Path feliz: Cliente con score 750 → OK
        2. Sin historial: Cliente nuevo → score=0, mensaje="Sin historial"
        3. Límite consultas: >1 en 24h → Error
        4. Cliente bloqueado: estado=BLOQUEADO → Error
        """
        
        # Validar cliente existe
        cliente = db.query(Cliente).filter(Cliente.id == cliente_id).first()
        if not cliente:
            raise ValueError("Cliente no encontrado")
        
        # Test Case: Cliente bloqueado
        if cliente.estado == "bloqueado":
            raise ValueError("Cliente en lista de riesgo. Consulta bloqueada.")
        
        # Test Case: Límite de consultas (simular con cache/DB)
        ultima_consulta = self._obtener_ultima_consulta(db, cliente_id)
        if ultima_consulta and (datetime.utcnow() - ultima_consulta) < timedelta(hours=24):
            raise ValueError("Límite de consultas: solo 1 permitida cada 24 horas")
        
        # Test Case: Sin historial crediticio
        if cliente.score_cifin is None:
            return {
                "score": 0,
                "tiene_historial": False,
                "mensaje": "Cliente sin historial crediticio registrado"
            }
        
        # Test Case: Path feliz
        puntualidad = self._calcular_puntualidad(cliente.score_cifin)
        return {
            "cliente_id": cliente.id,
            "score": cliente.score_cifin,
            "deudas_activas": 2,  # Mock
            "monto_deudas": 5000000.0,
            "puntualidad": puntualidad,
            "tiene_historial": True,
            "fecha_consulta": datetime.utcnow().isoformat(),
            "mensaje": f"Score {cliente.score_cifin}. Cliente {'apto' if cliente.score_cifin > 650 else 'no apto'} para crédito."
        }
    
    def _calcular_puntualidad(self, score: int) -> str:
        if score >= 800: return "Excelente"
        if score >= 700: return "Buena"
        if score >= 600: return "Regular"
        return "Mala"
    
    def _obtener_ultima_consulta(self, db: Session, cliente_id: int):
        """
        Mock: En memoria no persiste entre requests.
        En producción: guardar timestamp en tabla 'consultas_bureau'
        """
        # Para demo: siempre retorna None (primera consulta)
        return None
```

**`app/services/prestamo_service.py`**
```python
class PrestamoService:
    # Constantes de negocio (de test cases Clase 2)
    LIMITE_MONTO = 50_000_000
    PLAZO_MAXIMO_MESES = 60
    SCORE_APROBACION_AUTOMATICA = 700
    SCORE_RECHAZO_AUTOMATICO = 500
    RATIO_INGRESOS_MINIMO = 3  # Ingresos deben ser 3x cuota
    
    def solicitar_prestamo(self, db: Session, cliente_id: int, monto: float, plazo_meses: int):
        """
        Test Cases implementados:
        1. Aprobación automática: score>700, ingresos 4x cuota → APROBADO
        2. Análisis manual: score 600-700, ingresos 3x cuota → EN_REVISION
        3. Rechazo automático: score<500 → RECHAZADO
        4. Límite monto: monto>50M → Error validación
        """
        
        # Test Case: Validar límite de monto
        if monto > self.LIMITE_MONTO:
            raise ValueError(f"Monto solicitado excede límite de ${self.LIMITE_MONTO:,.0f}")
        
        if plazo_meses > self.PLAZO_MAXIMO_MESES:
            raise ValueError(f"Plazo máximo permitido: {self.PLAZO_MAXIMO_MESES} meses")
        
        # Obtener cliente
        cliente = db.query(Cliente).filter(Cliente.id == cliente_id).first()
        if not cliente:
            raise ValueError("Cliente no encontrado")
        
        # Calcular cuota mensual (simplificado: monto/plazo, sin interés)
        tasa_anual = 0.15  # 15% anual
        cuota_mensual = self._calcular_cuota(monto, plazo_meses, tasa_anual)
        
        # Test Case: Rechazo automático (score < 500)
        if cliente.score_cifin < self.SCORE_RECHAZO_AUTOMATICO:
            return self._crear_prestamo_rechazado(
                db, cliente_id, monto, plazo_meses,
                motivo="Score crediticio insuficiente (< 500)"
            )
        
        # Validar capacidad de pago
        ratio_ingresos = cliente.ingresos_mensuales / cuota_mensual
        
        # Test Case: Aprobación automática (score > 700 y ratio >= 4x)
        if cliente.score_cifin >= self.SCORE_APROBACION_AUTOMATICA and ratio_ingresos >= 4:
            return self._crear_prestamo_aprobado(db, cliente_id, monto, plazo_meses, cuota_mensual)
        
        # Test Case: Análisis manual (score 600-700 y ratio >= 3x)
        if cliente.score_cifin >= 600 and ratio_ingresos >= self.RATIO_INGRESOS_MINIMO:
            return self._crear_prestamo_revision(db, cliente_id, monto, plazo_meses, cuota_mensual)
        
        # Cualquier otro caso: rechazado
        return self._crear_prestamo_rechazado(
            db, cliente_id, monto, plazo_meses,
            motivo=f"Ingresos insuficientes. Ratio: {ratio_ingresos:.1f}x (mínimo 3x)"
        )
    
    def _calcular_cuota(self, monto: float, plazo_meses: int, tasa_anual: float) -> float:
        tasa_mensual = tasa_anual / 12
        return monto * (tasa_mensual * (1 + tasa_mensual)**plazo_meses) / ((1 + tasa_mensual)**plazo_meses - 1)
    
    def _crear_prestamo_aprobado(self, db: Session, cliente_id: int, monto: float, plazo_meses: int, cuota: float):
        from app.models.prestamo import Prestamo, EstadoPrestamo
        prestamo = Prestamo(
            cliente_id=cliente_id, monto_solicitado=monto, plazo_meses=plazo_meses,
            cuota_mensual=cuota, estado=EstadoPrestamo.APROBADO,
            fecha_decision=datetime.utcnow()
        )
        db.add(prestamo)
        db.commit()
        db.refresh(prestamo)
        return prestamo
    
    def _crear_prestamo_revision(self, db: Session, cliente_id: int, monto: float, plazo_meses: int, cuota: float):
        from app.models.prestamo import Prestamo, EstadoPrestamo
        prestamo = Prestamo(
            cliente_id=cliente_id, monto_solicitado=monto, plazo_meses=plazo_meses,
            cuota_mensual=cuota, estado=EstadoPrestamo.EN_REVISION
        )
        db.add(prestamo)
        db.commit()
        db.refresh(prestamo)
        return prestamo
    
    def _crear_prestamo_rechazado(self, db: Session, cliente_id: int, monto: float, plazo_meses: int, motivo: str):
        from app.models.prestamo import Prestamo, EstadoPrestamo
        prestamo = Prestamo(
            cliente_id=cliente_id, monto_solicitado=monto, plazo_meses=plazo_meses,
            estado=EstadoPrestamo.RECHAZADO, motivo_rechazo=motivo,
            fecha_decision=datetime.utcnow()
        )
        db.add(prestamo)
        db.commit()
        db.refresh(prestamo)
        return prestamo
```

### **Fase 7: Endpoints FastAPI (20 min)**

**`app/routers/bureau.py`**
```python
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas.bureau import BureauRequest, BureauResponse
from app.services.bureau_service import BureauService
from app.database import get_db

router = APIRouter(prefix="/api/bureau", tags=["Bureau de Crédito"])

@router.post("/consultar", response_model=BureauResponse)
def consultar_bureau(request: BureauRequest, db: Session = Depends(get_db)):
    """
    Consulta el score y historial crediticio de un cliente.
    
    **Test Cases cubiertos:**
    - ✅ Path feliz: Cliente con historial → Score + detalles
    - ⚠️ Sin historial: Cliente nuevo → score=0
    - ❌ Cliente bloqueado → Error 403
    - ⚠️ Límite consultas: >1 en 24h → Error 429
    """
    try:
        service = BureauService()
        resultado = service.consultar_score(db, request.cliente_id)
        return resultado
    except ValueError as e:
        if "bloqueado" in str(e).lower():
            raise HTTPException(status_code=403, detail=str(e))
        if "límite" in str(e).lower():
            raise HTTPException(status_code=429, detail=str(e))
        raise HTTPException(status_code=400, detail=str(e))
```

**`app/routers/prestamos.py`**
```python
@router.post("/solicitar", response_model=PrestamoResponse)
def solicitar_prestamo(request: PrestamoRequest, db: Session = Depends(get_db)):
    """
    Crea solicitud de préstamo con aprobación automática/manual/rechazo.
    
    **Test Cases cubiertos:**
    - ✅ Aprobación automática: score>700, ingresos 4x cuota
    - ⚠️ Análisis manual: score 600-700, ingresos 3x cuota
    - ❌ Rechazo: score<500 o ingresos insuficientes
    - ❌ Límite monto: >$50M → Error validación
    """
    try:
        service = PrestamoService()
        prestamo = service.solicitar_prestamo(
            db, 
            request.cliente_id, 
            request.monto_solicitado, 
            request.plazo_meses
        )
        return prestamo
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.get("/{cliente_id}", response_model=BureauResponse)
def obtener_ultima_consulta(cliente_id: int, db: Session = Depends(get_db)):
    """Obtiene la última consulta guardada (mock para demo)"""
    service = BureauService()
    try:
        resultado = service.consultar_score(db, cliente_id)
        return resultado
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
```

**`app/schemas/prestamo.py`**
```python
from pydantic import BaseModel, Field
from typing import Optional

class PrestamoRequest(BaseModel):
    cliente_id: int = Field(..., description="ID del cliente")
    monto_solicitado: float = Field(..., gt=0, le=50_000_000)
    plazo_meses: int = Field(..., ge=12, le=60)

class PrestamoResponse(BaseModel):
    id: int
    cliente_id: int
    monto_solicitado: float
    plazo_meses: int
    cuota_mensual: Optional[float]
    estado: str
    motivo_rechazo: Optional[str]
    fecha_solicitud: str
    
    class Config:
        from_attributes = True
```

### **Fase 8: Tests Automatizados (15 min)**

**`tests/test_bureau.py`**
```python
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.database import Base, engine, SessionLocal
from app.models.cliente import Cliente

client = TestClient(app)

@pytest.fixture
def setup_db():
    """
    Crea DB en memoria para cada test.
    IMPORTANTE: Cada test tiene su propia instancia aislada.
    """
    from app.database import Base, engine, SessionLocal
    from app.models.cliente import Cliente, EstadoCliente
    
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    
    # Datos demo (mismo seed que startup)
    clientes = [
        Cliente(id=1, nombre="Juan Pérez", identificacion="1234567890",
                email="juan@test.com", score_cifin=750, 
                ingresos_mensuales=5_000_000, estado=EstadoCliente.ACTIVO),
        Cliente(id=2, nombre="María López", identificacion="0987654321",
                email="maria@test.com", score_cifin=None,
                ingresos_mensuales=3_000_000, estado=EstadoCliente.ACTIVO),
        Cliente(id=3, nombre="Pedro Gómez", identificacion="1122334455",
                email="pedro@test.com", score_cifin=450,
                ingresos_mensuales=2_000_000, estado=EstadoCliente.ACTIVO),
        Cliente(id=4, nombre="Ana Martínez", identificacion="5566778899",
                email="ana@test.com", score_cifin=650,
                ingresos_mensuales=4_000_000, estado=EstadoCliente.BLOQUEADO),
    ]
    
    db.add_all(clientes)
    db.commit()
    yield db
    db.close()
    Base.metadata.drop_all(bind=engine)

def test_consulta_bureau_path_feliz(setup_db):
    """Test Case: Cliente con score 750 → Respuesta exitosa"""
    response = client.post("/api/bureau/consultar", json={"cliente_id": 1})
    assert response.status_code == 200
    data = response.json()
    assert data["score"] == 750
    assert data["tiene_historial"] == True
    assert "apto" in data["mensaje"].lower()

def test_consulta_bureau_sin_historial(setup_db):
    """Test Case: Cliente sin historial → score=0, mensaje específico"""
    response = client.post("/api/bureau/consultar", json={"cliente_id": 2})
    assert response.status_code == 200
    data = response.json()
    assert data["score"] == 0
    assert data["tiene_historial"] == False
    assert "sin historial" in data["mensaje"].lower()

def test_consulta_bureau_cliente_bloqueado(setup_db):
    """Test Case: Cliente en lista riesgo → Error 403"""
    response = client.post("/api/bureau/consultar", json={"cliente_id": 4})
    assert response.status_code == 403
    assert "bloqueado" in response.json()["detail"].lower()

def test_consulta_bureau_cliente_no_existe(setup_db):
    """Test Case: Cliente inexistente → Error 400"""
    response = client.post("/api/bureau/consultar", json={"cliente_id": 999})
    assert response.status_code == 400
    assert "no encontrado" in response.json()["detail"].lower()
```

**`tests/test_prestamos.py`**
```python
def test_solicitar_prestamo_aprobacion_automatica(setup_db):
    """Test Case: Score>700, ingresos 4x cuota → APROBADO"""
    response = client.post("/api/prestamos/solicitar", json={
        "cliente_id": 1,  # Juan: score 750, ingresos $5M
        "monto_solicitado": 10_000_000,
        "plazo_meses": 24
    })
    assert response.status_code == 200
    data = response.json()
    assert data["estado"] == "aprobado"
    assert data["motivo_rechazo"] is None

def test_solicitar_prestamo_rechazo_automatico(setup_db):
    """Test Case: Score<500 → RECHAZADO"""
    response = client.post("/api/prestamos/solicitar", json={
        "cliente_id": 3,  # Pedro: score 450
        "monto_solicitado": 5_000_000,
        "plazo_meses": 12
    })
    assert response.status_code == 200
    data = response.json()
    assert data["estado"] == "rechazado"
    assert "score" in data["motivo_rechazo"].lower()

def test_solicitar_prestamo_limite_monto(setup_db):
    """Test Case: Monto > $50M → Error validación"""
    response = client.post("/api/prestamos/solicitar", json={
        "cliente_id": 1,
        "monto_solicitado": 60_000_000,  # Excede límite
        "plazo_meses": 60
    })
    assert response.status_code == 400
    assert "límite" in response.json()["detail"].lower()
```

---

## 🎬 Flujo de la Sesión Live

### **Parte 1: Implementación (50 min)**
1. ✅ Setup entorno + estructura proyecto (10 min)
2. ✅ Configurar DB en memoria + seed data (5 min)
3. ✅ Modelos SQLAlchemy (Cliente, Préstamo) (10 min)
4. ✅ Service Bureau con test cases (15 min)
5. ✅ Endpoints FastAPI + main.py (10 min)

### **Parte 2: Testing en Vivo (25 min)**
6. 🧪 Iniciar API y probar Swagger UI (5 min)
7. 🧪 Ejecutar tests automatizados (10 min)
8. 🧪 Demostrar test cases de Clase 2 en vivo (10 min)

### **Parte 3: Q&A y Extensiones (15 min)**
9. 💬 Responder preguntas
10. 💬 Mostrar cómo agregar transferencias internacionales
11. 💬 Integración con IA para generar más test cases

---

## 📊 Resultados Esperados

Al final de la sesión, tendrás:
- ✅ API REST funcional con 6+ endpoints
- ✅ Base de datos en memoria (SQLite) con datos demo
- ✅ 10+ test cases de Clase 2 implementados y probables
- ✅ Suite de tests automatizados con pytest
- ✅ Documentación automática con Swagger UI (http://localhost:8000/docs)
- ✅ Código listo para conectar con frontend Angular (Clase 8)

---

## 🚀 Comandos Rápidos

```bash
# Iniciar servidor desarrollo
uvicorn app.main:app --reload --port 8000

# Ejecutar tests
pytest tests/ -v

# Ver cobertura
pytest --cov=app tests/

# Swagger UI
http://localhost:8000/docs

# ReDoc
http://localhost:8000/redoc
```

---

## 📚 Recursos Adicionales

- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [Pydantic Validation](https://docs.pydantic.dev/)
- [SQLAlchemy ORM](https://docs.sqlalchemy.org/)
- [pytest Testing](https://docs.pytest.org/)

---

## 🎯 Próximos Pasos (Post-Sesión)

1. ✅ Completar endpoint transferencias internacionales
2. ✅ Persistir datos: cambiar `sqlite:///:memory:` → `sqlite:///./testcases.db`
3. ✅ Agregar autenticación JWT para endpoints
4. ✅ Conectar a PostgreSQL corporativo (si se aprueba)
5. ✅ Integrar con frontend Angular (Clase 8)
6. ✅ Deploy a servidor interno/cloud

---

## ⚠️ Nota Importante: Base de Datos en Memoria

**La API usa SQLite en memoria (`sqlite:///:memory:`)**, lo que significa:
- ✅ **Ventajas:**
  - No requiere instalación externa
  - Cumple restricciones de software corporativo
  - Ideal para demos y sesiones live
  - Misma sintaxis SQLAlchemy que DB producción

- ⚠️ **Limitaciones:**
  - Datos se pierden al reiniciar API
  - No persiste entre requests (cada test es aislado)
  - Seed data se recarga en cada startup

**Para persistir datos**, solo cambia esta línea en `database.py`:
```python
# Memoria (actual)
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

# Archivo local (persiste)
SQLALCHEMY_DATABASE_URL = "sqlite:///./testcases.db"

# PostgreSQL corporativo (producción)
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL")
```

---

**💡 Tip:** Usa este archivo como guía durante la sesión. Marca cada sección completada y anota dudas/mejoras en tiempo real.
