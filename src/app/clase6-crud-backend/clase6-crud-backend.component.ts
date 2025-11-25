import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Example {
  title: string;
  userStory: string;
  description: string;
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
  userStory: string;
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
  selector: 'app-clase6-crud-backend',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clase6-crud-backend.component.html',
  styleUrls: [
    '../shared-presentation.css',
    './clase6-crud-backend.component.css'
  ]
})
export class Clase6CrudBackendComponent {
  currentSlide = 0;
  expandedExample: number | null = null;
  expandedStep: number | null = null;
  expandedChallenge: number | null = null;
  expandedTool: number | null = null;

  slides = [
    { type: 'title', title: 'Clase 6' },
    { type: 'theory', title: '¿Por qué generar CRUD con IA?' },
    { type: 'tools', title: 'Stack Tecnológico Ligero' },
    { type: 'examples', title: 'De HU a CRUD Completo' },
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
      description: 'Genera CRUD completo en minutos en lugar de horas/días.',
      items: [
        'Controller + Service + Repository + DTOs en un prompt',
        'Validaciones de negocio incluidas automáticamente',
        'Tests unitarios generados junto con el código',
        'Documentación Swagger/OpenAPI lista para usar'
      ]
    },
    {
      icon: '🎯',
      title: 'Calidad y Consistencia',
      color: 'blue',
      description: 'Código estandarizado siguiendo mejores prácticas de arquitectura.',
      items: [
        'Patrón en capas: Controller → Service → Repository',
        'DTOs para separar entidades de respuestas API',
        'Manejo de excepciones centralizado',
        'Validaciones con Bean Validation (JSR-303)'
      ]
    },
    {
      icon: '🪶',
      title: 'Stack Ligero y Portable',
      color: 'orange',
      description: 'Spring Boot + H2 en memoria = cero instalaciones, solo código.',
      items: [
        'H2 Database: BD en memoria, no requiere servidor',
        'Gradle: gestión de dependencias simple',
        'Swagger UI: documentación interactiva incluida',
        'Ejecutable JAR standalone: java -jar app.jar'
      ]
    }
  ];

  tools: Tool[] = [
    {
      name: 'Spring Boot',
      icon: '🍃',
      description: 'Framework Java para crear aplicaciones standalone con configuración mínima',
      pros: [
        'Auto-configuración inteligente',
        'Servidor embebido (Tomcat)',
        'Spring Initializr para scaffold rápido',
        'Ecosistema maduro y robusto',
        'Perfecto para microservicios'
      ],
      cons: [
        'Requiere JDK 17+ instalado',
        'Curva de aprendizaje inicial',
        'JARs pueden ser pesados (15-30 MB)'
      ],
      useCase: 'Ideal para: APIs REST enterprise, microservicios, aplicaciones backend escalables'
    },
    {
      name: 'H2 Database',
      icon: '💾',
      description: 'Base de datos SQL en memoria perfecta para desarrollo y pruebas',
      pros: [
        'Cero configuración: solo agregar dependencia',
        'Consola web integrada (/h2-console)',
        'Compatible con SQL estándar',
        'Modo en memoria o archivo',
        'Súper rápida para tests'
      ],
      cons: [
        'Datos se pierden al reiniciar (modo memoria)',
        'No recomendada para producción',
        'Features limitadas vs PostgreSQL/MySQL'
      ],
      useCase: 'Ideal para: Desarrollo local, pruebas, prototipos rápidos, demos sin infraestructura'
    },
    {
      name: 'Gradle',
      icon: '🐘',
      description: 'Herramienta de build moderna basada en Groovy/Kotlin DSL',
      pros: [
        'Builds incrementales (más rápido que Maven)',
        'Sintaxis más concisa que Maven XML',
        'Wrapper incluido (gradlew)',
        'Cache de dependencias eficiente',
        'Plugins poderosos'
      ],
      cons: [
        'Curva de aprendizaje vs Maven',
        'Builds pueden ser lentos en primera ejecución'
      ],
      useCase: 'Ideal para: Proyectos modernos Java/Kotlin, Android, proyectos multi-módulo'
    },
    {
      name: 'Swagger UI',
      icon: '📘',
      description: 'Documentación interactiva de APIs REST generada automáticamente',
      pros: [
        'UI visual para probar endpoints',
        'Documentación auto-generada desde anotaciones',
        'Try it out: ejecuta requests desde el navegador',
        'Sincronización con código (single source of truth)',
        'Exportable a OpenAPI 3.0 JSON/YAML'
      ],
      cons: [
        'Requiere anotaciones en código',
        'Puede incrementar tamaño del JAR'
      ],
      useCase: 'Ideal para: Documentar APIs, facilitar integración con frontends, testing manual'
    }
  ];

  examples: Example[] = [
    {
      title: 'Caso 1: CRUD Clientes Bancarios (Spring Boot + H2)',
      userStory: 'Como oficial de crédito, quiero gestionar clientes en el sistema (crear, consultar, actualizar, eliminar) para mantener la información actualizada.',
      description: 'API REST completa para gestión de clientes con validaciones de negocio bancarias',
      badPrompt: {
        text: 'Genera un CRUD de clientes en Spring Boot',
        problems: [
          'No especifica estructura del cliente (campos)',
          'Sin validaciones de negocio (email, teléfono, documento)',
          'No menciona base de datos (H2, PostgreSQL, MySQL)',
          'Falta arquitectura (capas, DTOs, excepciones)',
          'Sin tests unitarios',
          'No indica documentación (Swagger)'
        ]
      },
      goodPrompt: {
        text: `[ROL] Actúa como desarrollador backend senior especializado en Spring Boot.

[CONTEXTO]
- Proyecto: Sistema Bancario - Módulo de Clientes
- Stack: Spring Boot 3.2, Java 17, H2 Database (in-memory), Gradle
- Arquitectura: Clean Architecture en 3 capas (Controller, Service, Repository)
- Documentación: Swagger UI con SpringDoc OpenAPI

[TAREA]
Genera CRUD completo para entidad Cliente con las siguientes especificaciones.

MODELO DE DATOS (Cliente):
- id: Long (auto-generado)
- documentoIdentidad: String (único, formato: 10-15 dígitos)
- tipoDocumento: Enum (CC, CE, NIT, PASAPORTE)
- nombres: String (requerido, 2-100 caracteres)
- apellidos: String (requerido, 2-100 caracteres)
- email: String (requerido, formato email válido, único)
- telefono: String (requerido, formato: +57 3XX XXX XXXX)
- fechaNacimiento: LocalDate (mayor de 18 años)
- estado: Enum (ACTIVO, INACTIVO, BLOQUEADO)
- fechaCreacion: LocalDateTime (auto-generado)
- fechaActualizacion: LocalDateTime (auto-actualizado)

ENDPOINTS A GENERAR:

1. POST /api/clientes
   - Crear nuevo cliente
   - Validar documento único, email único
   - Validar mayor de edad
   - Retornar 201 Created con cliente creado

2. GET /api/clientes
   - Listar todos los clientes
   - Paginación: page, size, sort
   - Filtros opcionales: estado, tipoDocumento
   - Retornar 200 OK con lista paginada

3. GET /api/clientes/{id}
   - Obtener cliente por ID
   - Retornar 200 OK si existe
   - Retornar 404 Not Found si no existe

4. PUT /api/clientes/{id}
   - Actualizar cliente completo
   - Validar que ID existe
   - No permitir cambiar documento ni email
   - Retornar 200 OK con cliente actualizado

5. DELETE /api/clientes/{id}
   - Eliminación lógica (cambiar estado a INACTIVO)
   - Retornar 204 No Content

VALIDACIONES DE NEGOCIO:
- Documento único por tipo (no puede haber 2 CC con mismo número)
- Email único en el sistema
- Mayor de edad (fechaNacimiento >= 18 años)
- Teléfono formato colombiano: +57 seguido de 10 dígitos
- Estados permitidos: ACTIVO, INACTIVO, BLOQUEADO

ARQUITECTURA REQUERIDA:

📁 Estructura de paquetes:
com.banco.clientes
├── controller/
│   └── ClienteController.java (REST endpoints)
├── service/
│   ├── ClienteService.java (interface)
│   └── ClienteServiceImpl.java (lógica de negocio)
├── repository/
│   └── ClienteRepository.java (JpaRepository)
├── model/
│   ├── Cliente.java (entidad JPA)
│   ├── TipoDocumento.java (enum)
│   └── EstadoCliente.java (enum)
├── dto/
│   ├── ClienteRequestDTO.java (input)
│   └── ClienteResponseDTO.java (output)
├── exception/
│   ├── ClienteNotFoundException.java
│   ├── DocumentoDuplicadoException.java
│   └── GlobalExceptionHandler.java
└── config/
    └── SwaggerConfig.java

ESPECIFICACIONES TÉCNICAS:

1. ClienteController:
   - @RestController + @RequestMapping("/api/clientes")
   - @Validated para validaciones
   - Respuestas HTTP correctas (200, 201, 204, 404, 400)
   - Documentación Swagger con @Operation, @ApiResponse

2. ClienteService:
   - Validaciones de negocio (documento único, mayor edad)
   - Conversión Entity ↔ DTO
   - Transacciones con @Transactional

3. ClienteRepository:
   - extends JpaRepository<Cliente, Long>
   - Query methods: findByDocumentoIdentidad, findByEmail
   - @Query para consultas complejas si necesario

4. DTOs:
   - ClienteRequestDTO: sin ID (para crear/actualizar)
   - ClienteResponseDTO: incluye ID, fechas, sin campos sensibles
   - Validaciones con @NotNull, @Email, @Pattern, @Past, @Size

5. Excepciones:
   - GlobalExceptionHandler con @ControllerAdvice
   - Manejo de MethodArgumentNotValidException (400)
   - Manejo de ClienteNotFoundException (404)
   - Mensajes de error estructurados con timestamp

6. Configuración H2:
   - application.yml con H2 en memoria
   - spring.h2.console.enabled=true
   - Script data.sql para datos iniciales (3-5 clientes)

7. Swagger:
   - SpringDoc OpenAPI 3
   - UI disponible en /swagger-ui.html
   - Descripciones claras en endpoints

TESTS UNITARIOS:
- ClienteServiceImplTest:
  * testCrearCliente_Success
  * testCrearCliente_DocumentoDuplicado_ThrowsException
  * testCrearCliente_MenorDeEdad_ThrowsException
  * testObtenerCliente_Existe_RetornaCliente
  * testObtenerCliente_NoExiste_ThrowsException
  * testActualizarCliente_Success
  * testEliminarCliente_CambiaEstadoInactivo

- Usar Mockito para mockear repository
- Cobertura mínima: 80%

ARCHIVOS DE CONFIGURACIÓN:

build.gradle:
- Spring Boot 3.2.0
- H2 Database
- SpringDoc OpenAPI
- Lombok (opcional para reducir boilerplate)
- Spring Boot Test + Mockito

application.yml:
- Configuración H2
- Puerto: 8080
- Logs nivel DEBUG para desarrollo

ENTREGABLE:
- Código completo funcional
- README.md con instrucciones de ejecución
- Colección Postman/cURL para probar endpoints
- Comandos: ./gradlew bootRun`,
        benefits: [
          '✅ Especifica stack completo (Spring Boot 3.2 + H2 + Gradle)',
          '✅ Define modelo de datos con todos los campos y tipos',
          '✅ Lista los 5 endpoints CRUD con comportamiento esperado',
          '✅ Validaciones de negocio detalladas (único, edad, formato)',
          '✅ Arquitectura en capas con estructura de paquetes',
          '✅ DTOs para separar entidad de API responses',
          '✅ Manejo de excepciones centralizado',
          '✅ Tests unitarios con casos específicos',
          '✅ Configuración H2 y Swagger incluida',
          '✅ README con instrucciones de ejecución'
        ]
      },
      generatedCode: `// ===== 1. build.gradle =====
plugins {
    id 'java'
    id 'org.springframework.boot' version '3.2.0'
    id 'io.spring.dependency-management' version '1.1.4'
}

group = 'com.banco'
version = '1.0.0'
sourceCompatibility = '17'

repositories {
    mavenCentral()
}

dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web'
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
    implementation 'org.springframework.boot:spring-boot-starter-validation'
    implementation 'org.springdoc:springdoc-openapi-starter-webmvc-ui:2.3.0'
    compileOnly 'org.projectlombok:lombok'
    annotationProcessor 'org.projectlombok:lombok'
    runtimeOnly 'com.h2database:h2'
    testImplementation 'org.springframework.boot:spring-boot-starter-test'
}

tasks.named('test') {
    useJUnitPlatform()
}

// ===== 2. application.yml =====
spring:
  application:
    name: clientes-api
  datasource:
    url: jdbc:h2:mem:clientesdb
    driver-class-name: org.h2.Driver
    username: sa
    password:
  h2:
    console:
      enabled: true
      path: /h2-console
  jpa:
    hibernate:
      ddl-auto: create-drop
    show-sql: true
    properties:
      hibernate:
        format_sql: true
server:
  port: 8080

springdoc:
  swagger-ui:
    path: /swagger-ui.html

// ===== 3. Cliente.java (Entity) =====
package com.banco.clientes.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "clientes")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 15)
    private String documentoIdentidad;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoDocumento tipoDocumento;

    @Column(nullable = false, length = 100)
    private String nombres;

    @Column(nullable = false, length = 100)
    private String apellidos;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, length = 20)
    private String telefono;

    @Column(nullable = false)
    private LocalDate fechaNacimiento;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private EstadoCliente estado = EstadoCliente.ACTIVO;

    @Column(nullable = false, updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(nullable = false)
    private LocalDateTime fechaActualizacion;

    @PrePersist
    protected void onCreate() {
        fechaCreacion = LocalDateTime.now();
        fechaActualizacion = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        fechaActualizacion = LocalDateTime.now();
    }
}

// ===== 4. TipoDocumento.java (Enum) =====
package com.banco.clientes.model;

public enum TipoDocumento {
    CC, CE, NIT, PASAPORTE
}

// ===== 5. EstadoCliente.java (Enum) =====
package com.banco.clientes.model;

public enum EstadoCliente {
    ACTIVO, INACTIVO, BLOQUEADO
}

// ===== 6. ClienteRequestDTO.java =====
package com.banco.clientes.dto;

import com.banco.clientes.model.EstadoCliente;
import com.banco.clientes.model.TipoDocumento;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClienteRequestDTO {

    @NotBlank(message = "Documento de identidad es requerido")
    @Pattern(regexp = "^[0-9]{10,15}$", message = "Documento debe tener entre 10 y 15 dígitos")
    private String documentoIdentidad;

    @NotNull(message = "Tipo de documento es requerido")
    private TipoDocumento tipoDocumento;

    @NotBlank(message = "Nombres son requeridos")
    @Size(min = 2, max = 100, message = "Nombres deben tener entre 2 y 100 caracteres")
    private String nombres;

    @NotBlank(message = "Apellidos son requeridos")
    @Size(min = 2, max = 100, message = "Apellidos deben tener entre 2 y 100 caracteres")
    private String apellidos;

    @NotBlank(message = "Email es requerido")
    @Email(message = "Email debe ser válido")
    private String email;

    @NotBlank(message = "Teléfono es requerido")
    @Pattern(regexp = "^\\+57[0-9]{10}$", message = "Teléfono debe tener formato +57XXXXXXXXXX")
    private String telefono;

    @NotNull(message = "Fecha de nacimiento es requerida")
    @Past(message = "Fecha de nacimiento debe estar en el pasado")
    private LocalDate fechaNacimiento;

    private EstadoCliente estado;
}

// ===== 7. ClienteResponseDTO.java =====
package com.banco.clientes.dto;

import com.banco.clientes.model.EstadoCliente;
import com.banco.clientes.model.TipoDocumento;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ClienteResponseDTO {
    private Long id;
    private String documentoIdentidad;
    private TipoDocumento tipoDocumento;
    private String nombres;
    private String apellidos;
    private String email;
    private String telefono;
    private LocalDate fechaNacimiento;
    private EstadoCliente estado;
    private LocalDateTime fechaCreacion;
    private LocalDateTime fechaActualizacion;
}

// ===== 8. ClienteRepository.java =====
package com.banco.clientes.repository;

import com.banco.clientes.model.Cliente;
import com.banco.clientes.model.TipoDocumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long> {
    Optional<Cliente> findByDocumentoIdentidad(String documentoIdentidad);
    Optional<Cliente> findByEmail(String email);
    boolean existsByDocumentoIdentidadAndTipoDocumento(String documentoIdentidad, TipoDocumento tipoDocumento);
    boolean existsByEmail(String email);
}

// ===== 9. ClienteService.java (Interface) =====
package com.banco.clientes.service;

import com.banco.clientes.dto.ClienteRequestDTO;
import com.banco.clientes.dto.ClienteResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ClienteService {
    ClienteResponseDTO crearCliente(ClienteRequestDTO requestDTO);
    Page<ClienteResponseDTO> listarClientes(Pageable pageable);
    ClienteResponseDTO obtenerClientePorId(Long id);
    ClienteResponseDTO actualizarCliente(Long id, ClienteRequestDTO requestDTO);
    void eliminarCliente(Long id);
}

// ===== 10. ClienteServiceImpl.java =====
package com.banco.clientes.service;

import com.banco.clientes.dto.ClienteRequestDTO;
import com.banco.clientes.dto.ClienteResponseDTO;
import com.banco.clientes.exception.ClienteNotFoundException;
import com.banco.clientes.exception.DocumentoDuplicadoException;
import com.banco.clientes.exception.EmailDuplicadoException;
import com.banco.clientes.exception.MenorDeEdadException;
import com.banco.clientes.model.Cliente;
import com.banco.clientes.model.EstadoCliente;
import com.banco.clientes.repository.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDate;
import java.time.Period;

@Service
@RequiredArgsConstructor
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository clienteRepository;

    @Override
    @Transactional
    public ClienteResponseDTO crearCliente(ClienteRequestDTO requestDTO) {
        // Validar documento único
        if (clienteRepository.existsByDocumentoIdentidadAndTipoDocumento(
                requestDTO.getDocumentoIdentidad(),
                requestDTO.getTipoDocumento())) {
            throw new DocumentoDuplicadoException(
                "Ya existe un cliente con documento " + requestDTO.getDocumentoIdentidad());
        }

        // Validar email único
        if (clienteRepository.existsByEmail(requestDTO.getEmail())) {
            throw new EmailDuplicadoException(
                "Ya existe un cliente con email " + requestDTO.getEmail());
        }

        // Validar mayor de edad
        int edad = Period.between(requestDTO.getFechaNacimiento(), LocalDate.now()).getYears();
        if (edad < 18) {
            throw new MenorDeEdadException(
                "El cliente debe ser mayor de 18 años. Edad actual: " + edad);
        }

        Cliente cliente = Cliente.builder()
                .documentoIdentidad(requestDTO.getDocumentoIdentidad())
                .tipoDocumento(requestDTO.getTipoDocumento())
                .nombres(requestDTO.getNombres())
                .apellidos(requestDTO.getApellidos())
                .email(requestDTO.getEmail())
                .telefono(requestDTO.getTelefono())
                .fechaNacimiento(requestDTO.getFechaNacimiento())
                .estado(requestDTO.getEstado() != null ? requestDTO.getEstado() : EstadoCliente.ACTIVO)
                .build();

        Cliente savedCliente = clienteRepository.save(cliente);
        return toResponseDTO(savedCliente);
    }

    @Override
    @Transactional(readOnly = true)
    public Page<ClienteResponseDTO> listarClientes(Pageable pageable) {
        return clienteRepository.findAll(pageable).map(this::toResponseDTO);
    }

    @Override
    @Transactional(readOnly = true)
    public ClienteResponseDTO obtenerClientePorId(Long id) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new ClienteNotFoundException("Cliente con ID " + id + " no encontrado"));
        return toResponseDTO(cliente);
    }

    @Override
    @Transactional
    public ClienteResponseDTO actualizarCliente(Long id, ClienteRequestDTO requestDTO) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new ClienteNotFoundException("Cliente con ID " + id + " no encontrado"));

        // Actualizar campos permitidos (no documento ni email)
        cliente.setNombres(requestDTO.getNombres());
        cliente.setApellidos(requestDTO.getApellidos());
        cliente.setTelefono(requestDTO.getTelefono());
        cliente.setFechaNacimiento(requestDTO.getFechaNacimiento());
        if (requestDTO.getEstado() != null) {
            cliente.setEstado(requestDTO.getEstado());
        }

        Cliente updatedCliente = clienteRepository.save(cliente);
        return toResponseDTO(updatedCliente);
    }

    @Override
    @Transactional
    public void eliminarCliente(Long id) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new ClienteNotFoundException("Cliente con ID " + id + " no encontrado"));

        // Eliminación lógica
        cliente.setEstado(EstadoCliente.INACTIVO);
        clienteRepository.save(cliente);
    }

    private ClienteResponseDTO toResponseDTO(Cliente cliente) {
        return ClienteResponseDTO.builder()
                .id(cliente.getId())
                .documentoIdentidad(cliente.getDocumentoIdentidad())
                .tipoDocumento(cliente.getTipoDocumento())
                .nombres(cliente.getNombres())
                .apellidos(cliente.getApellidos())
                .email(cliente.getEmail())
                .telefono(cliente.getTelefono())
                .fechaNacimiento(cliente.getFechaNacimiento())
                .estado(cliente.getEstado())
                .fechaCreacion(cliente.getFechaCreacion())
                .fechaActualizacion(cliente.getFechaActualizacion())
                .build();
    }
}

// ===== Instrucciones de Ejecución =====
/*
1. Clonar/descargar código
2. Abrir terminal en la carpeta del proyecto
3. Ejecutar: ./gradlew bootRun (Linux/Mac) o gradlew.bat bootRun (Windows)
4. Abrir navegador:
   - API: http://localhost:8080/api/clientes
   - Swagger: http://localhost:8080/swagger-ui.html
   - H2 Console: http://localhost:8080/h2-console
     * JDBC URL: jdbc:h2:mem:clientesdb
     * User: sa
     * Password: (vacío)

5. Probar endpoints:
   POST http://localhost:8080/api/clientes
   {
     "documentoIdentidad": "1234567890",
     "tipoDocumento": "CC",
     "nombres": "Juan",
     "apellidos": "Pérez",
     "email": "juan@banco.com",
     "telefono": "+573001234567",
     "fechaNacimiento": "1990-01-15"
   }
*/`
    }
  ];

  processSteps: Step[] = [
    {
      number: 1,
      title: 'Analizar Historia de Usuario',
      description: 'Extraer entidad principal, campos, relaciones y reglas de negocio.',
      example: 'HU: "Gestionar clientes" → Entidad Cliente, campos (documento, nombres, email), validaciones (único, mayor edad)',
      tips: [
        'Identifica sustantivos = Entidades (Cliente, Producto, Orden)',
        'Verbos = Acciones/Endpoints (crear, consultar, actualizar, eliminar)',
        'Adjetivos = Validaciones (único, requerido, mayor de edad)',
        'Pregunta: ¿Qué datos necesito almacenar? ¿Qué reglas de negocio aplican?'
      ]
    },
    {
      number: 2,
      title: 'Definir Modelo de Datos',
      description: 'Especificar todos los campos, tipos, validaciones y relaciones.',
      example: 'Cliente: id (Long), documentoIdentidad (String, único), email (String, @Email), fechaNacimiento (LocalDate, @Past)',
      tips: [
        'Usa tipos Java correctos: Long para IDs, LocalDate para fechas, String para textos',
        'Define constraints: @NotNull, @Size, @Email, @Pattern para validaciones',
        'Indica campos únicos: documento, email (agregar @Column(unique=true))',
        'Enums para valores fijos: TipoDocumento, EstadoCliente'
      ]
    },
    {
      number: 3,
      title: 'Especificar Endpoints CRUD',
      description: 'Lista los 5 endpoints con método HTTP, ruta, request/response y códigos de estado.',
      example: 'POST /api/clientes (crear, 201), GET /api/clientes (listar, 200), GET /api/clientes/{id} (obtener, 200/404), PUT /api/clientes/{id} (actualizar, 200), DELETE /api/clientes/{id} (eliminar, 204)',
      tips: [
        'POST: crear recurso, retornar 201 Created con Location header',
        'GET collection: listar con paginación (page, size, sort)',
        'GET single: obtener por ID, retornar 404 si no existe',
        'PUT: actualizar completo, retornar 200 OK con recurso actualizado',
        'DELETE: eliminar (físico o lógico), retornar 204 No Content'
      ]
    },
    {
      number: 4,
      title: 'Definir Stack y Arquitectura',
      description: 'Especifica tecnologías (Spring Boot, H2, Gradle) y estructura de capas.',
      example: 'Spring Boot 3.2 + H2 + Gradle. Capas: Controller (REST) → Service (lógica) → Repository (BD)',
      tips: [
        'Spring Boot 3.x requiere Java 17+',
        'H2 en memoria: configurar en application.yml',
        'Arquitectura en capas: separar responsabilidades',
        'DTOs: separar Entity (BD) de Request/Response (API)',
        'Swagger: SpringDoc OpenAPI para documentación'
      ]
    },
    {
      number: 5,
      title: 'Especificar Validaciones de Negocio',
      description: 'Lista todas las validaciones: únicos, formatos, rangos, dependencias.',
      example: 'Documento único por tipo, email único, mayor de 18 años, teléfono formato +57XXXXXXXXXX',
      tips: [
        'Validaciones en DTO: @NotNull, @Email, @Size, @Pattern',
        'Validaciones en Service: lógica compleja (único, edad, saldo)',
        'Mensajes claros: "Email ya registrado" en lugar de "Duplicate entry"',
        'Excepciones custom: DocumentoDuplicadoException, MenorDeEdadException'
      ]
    },
    {
      number: 6,
      title: 'Construir Prompt Estructurado',
      description: 'Usa template [ROL][CONTEXTO][TAREA] con modelo, endpoints, arquitectura y tests.',
      example: 'Ver ejemplo completo en slide anterior',
      tips: [
        'ROL: desarrollador backend senior Spring Boot',
        'CONTEXTO: stack completo (Spring Boot 3.2, H2, Gradle)',
        'TAREA: modelo datos + 5 endpoints + validaciones + arquitectura',
        'FORMATO: estructura de paquetes + archivos de config + tests',
        'Especifica versiones: Spring Boot 3.2.0, Java 17, SpringDoc 2.3.0'
      ]
    },
    {
      number: 7,
      title: 'Generar, Ejecutar y Validar',
      description: 'Obtén código, compila, ejecuta, prueba endpoints, valida lógica de negocio.',
      example: './gradlew bootRun → probar POST /api/clientes con Postman → validar H2 Console',
      tips: [
        'Compilar: ./gradlew build (debe compilar sin errores)',
        'Ejecutar: ./gradlew bootRun',
        'Swagger UI: http://localhost:8080/swagger-ui.html',
        'H2 Console: http://localhost:8080/h2-console',
        'Probar casos: crear, duplicado, menor edad, actualizar, eliminar',
        'Validar BD: verificar datos en H2 Console',
        'Tests: ./gradlew test (cobertura mínima 80%)'
      ]
    }
  ];

  template = `[ROL] Actúa como desarrollador backend senior especializado en Spring Boot.

[CONTEXTO]
- Proyecto: [Nombre del Sistema - Módulo]
- Stack: Spring Boot 3.2, Java 17, H2 Database (in-memory), Gradle
- Arquitectura: Clean Architecture en 3 capas (Controller, Service, Repository)
- Documentación: Swagger UI con SpringDoc OpenAPI
- Patrón: DTOs para separar Entity de API responses

[TAREA]
Genera CRUD completo para entidad [NOMBRE_ENTIDAD] con las siguientes especificaciones.

MODELO DE DATOS ([NOMBRE_ENTIDAD]):
- id: Long (auto-generado)
- [campo1]: [Tipo] ([restricciones: único, requerido, formato])
- [campo2]: [Tipo] ([validaciones])
- ...
- estado: Enum ([valores posibles])
- fechaCreacion: LocalDateTime (auto-generado)
- fechaActualizacion: LocalDateTime (auto-actualizado)

ENDPOINTS A GENERAR:

1. POST /api/[recurso]
   - Crear nuevo [entidad]
   - Validaciones: [listar validaciones]
   - Retornar 201 Created con [entidad] creado

2. GET /api/[recurso]
   - Listar todos los [entidades]
   - Paginación: page, size, sort
   - Filtros opcionales: [listar filtros]
   - Retornar 200 OK con lista paginada

3. GET /api/[recurso]/{id}
   - Obtener [entidad] por ID
   - Retornar 200 OK si existe
   - Retornar 404 Not Found si no existe

4. PUT /api/[recurso]/{id}
   - Actualizar [entidad] completo
   - Validar que ID existe
   - [Restricciones de actualización]
   - Retornar 200 OK con [entidad] actualizado

5. DELETE /api/[recurso]/{id}
   - Eliminación [física/lógica]
   - Retornar 204 No Content

VALIDACIONES DE NEGOCIO:
- [Validación 1]: [descripción y regla]
- [Validación 2]: [descripción y regla]
- [Validación N]: [descripción y regla]

ARQUITECTURA REQUERIDA:

📁 Estructura de paquetes:
com.[empresa].[modulo]
├── controller/
│   └── [Entidad]Controller.java (REST endpoints)
├── service/
│   ├── [Entidad]Service.java (interface)
│   └── [Entidad]ServiceImpl.java (lógica de negocio)
├── repository/
│   └── [Entidad]Repository.java (JpaRepository)
├── model/
│   ├── [Entidad].java (entidad JPA)
│   └── [Enums necesarios].java
├── dto/
│   ├── [Entidad]RequestDTO.java (input)
│   └── [Entidad]ResponseDTO.java (output)
├── exception/
│   ├── [Entidad]NotFoundException.java
│   ├── [Otras excepciones custom].java
│   └── GlobalExceptionHandler.java
└── config/
    └── SwaggerConfig.java

ESPECIFICACIONES TÉCNICAS:

1. [Entidad]Controller:
   - @RestController + @RequestMapping("/api/[recurso]")
   - @Validated para validaciones
   - Respuestas HTTP correctas (200, 201, 204, 404, 400)
   - Documentación Swagger con @Operation, @ApiResponse

2. [Entidad]Service:
   - Validaciones de negocio [listar validaciones]
   - Conversión Entity ↔ DTO
   - Transacciones con @Transactional

3. [Entidad]Repository:
   - extends JpaRepository<[Entidad], Long>
   - Query methods: [listar métodos necesarios]
   - @Query para consultas complejas si necesario

4. DTOs:
   - [Entidad]RequestDTO: sin ID (para crear/actualizar)
   - [Entidad]ResponseDTO: incluye ID, fechas, campos necesarios
   - Validaciones con @NotNull, @Email, @Pattern, @Past, @Size

5. Excepciones:
   - GlobalExceptionHandler con @ControllerAdvice
   - Manejo de MethodArgumentNotValidException (400)
   - Manejo de [Entidad]NotFoundException (404)
   - Mensajes de error estructurados con timestamp

6. Configuración H2:
   - application.yml con H2 en memoria
   - spring.h2.console.enabled=true
   - Script data.sql para datos iniciales ([cantidad] registros)

7. Swagger:
   - SpringDoc OpenAPI 3
   - UI disponible en /swagger-ui.html
   - Descripciones claras en endpoints

TESTS UNITARIOS:
- [Entidad]ServiceImplTest:
  * testCrear[Entidad]_Success
  * testCrear[Entidad]_[Validación]_ThrowsException
  * testObtener[Entidad]_Existe_Retorna[Entidad]
  * testObtener[Entidad]_NoExiste_ThrowsException
  * testActualizar[Entidad]_Success
  * testEliminar[Entidad]_Success

- Usar Mockito para mockear repository
- Cobertura mínima: 80%

ARCHIVOS DE CONFIGURACIÓN:

build.gradle:
- Spring Boot 3.2.0
- H2 Database
- SpringDoc OpenAPI
- Lombok (opcional)
- Spring Boot Test + Mockito

application.yml:
- Configuración H2
- Puerto: [puerto]
- Logs nivel DEBUG para desarrollo

ENTREGABLE:
- Código completo funcional
- README.md con instrucciones de ejecución
- Comandos: ./gradlew bootRun
- URL Swagger: http://localhost:[puerto]/swagger-ui.html
- URL H2 Console: http://localhost:[puerto]/h2-console`;

  challenges: Challenge[] = [
    {
      id: 1,
      difficulty: 'Fácil',
      title: 'CRUD Productos E-commerce',
      userStory: 'Como administrador de tienda, quiero gestionar productos (crear, listar, actualizar, eliminar) para mantener el catálogo actualizado.',
      requirements: [
        'Entidad Producto: nombre, descripción, precio, stock, categoría (enum), activo',
        'Validaciones: precio > 0, stock >= 0, nombre único',
        'Endpoints: POST, GET (con paginación), GET /{id}, PUT /{id}, DELETE /{id}',
        'Swagger UI documentado',
        'H2 Console habilitado',
        'Tests unitarios: crear, actualizar, validar precio negativo'
      ],
      hints: [
        'Categoría enum: ELECTRONICA, ROPA, ALIMENTOS, HOGAR',
        'DTO Request sin ID, DTO Response con ID + fechas',
        'Eliminación lógica: cambiar campo activo a false',
        'Query method: findByActivoTrue() para productos activos',
        'Validación en Service: precio > 0 antes de guardar'
      ],
      color: 'green'
    },
    {
      id: 2,
      difficulty: 'Intermedio',
      title: 'CRUD Préstamos Bancarios',
      userStory: 'Como oficial de crédito, quiero gestionar solicitudes de préstamo (crear, consultar, aprobar/rechazar) para procesar solicitudes de clientes.',
      requirements: [
        'Entidad Prestamo: clienteId, monto, plazoMeses, tasaInteres, estado (PENDIENTE, APROBADO, RECHAZADO)',
        'Validaciones: monto entre 1M y 50M, plazo entre 12 y 60 meses, tasa > 0',
        'Endpoints: POST crear, GET listar (filtrar por estado), GET /{id}, PUT /{id}/aprobar, PUT /{id}/rechazar',
        'Lógica: calcular cuota mensual = (monto * tasaInteres) / plazoMeses',
        'Campo observaciones requerido al rechazar',
        'Tests: crear préstamo, aprobar, rechazar sin observaciones (debe fallar)'
      ],
      hints: [
        'Usar BigDecimal para monto y tasa (precisión financiera)',
        '@Transactional en métodos aprobar/rechazar',
        'Validar que estado PENDIENTE antes de aprobar/rechazar',
        'DTO AprobarPrestamoDTO: prestamoId + justificación',
        'DTO RechazarPrestamoDTO: prestamoId + observaciones (required)',
        'Query method: findByEstado(EstadoPrestamo estado)'
      ],
      color: 'blue'
    },
    {
      id: 3,
      difficulty: 'Avanzado',
      title: 'CRUD Cuentas Bancarias con Transacciones',
      userStory: 'Como cliente, quiero gestionar mis cuentas bancarias (crear, consultar saldo, transferir) para administrar mis finanzas.',
      requirements: [
        'Entidades: Cuenta (numero, tipo, saldo, clienteId) y Transaccion (cuentaId, tipo, monto, fecha)',
        'Endpoints Cuenta: POST crear, GET listar por clienteId, GET /{id}/saldo',
        'Endpoints Transacción: POST /transferir (cuentaOrigen, cuentaDestino, monto)',
        'Validaciones: saldo inicial >= 0, no permitir sobregiros, monto transferencia > 0',
        'Lógica transaccional: debitar origen, acreditar destino (todo o nada)',
        'Auditoría: registrar todas las transacciones con timestamp',
        'Tests: transferencia exitosa, saldo insuficiente, transferir a cuenta inexistente'
      ],
      hints: [
        'Usar @Transactional en método transferir (rollback si falla)',
        'Validar que ambas cuentas existen antes de transferir',
        'Validar saldo suficiente en cuenta origen',
        'TipoTransaccion enum: DEPOSITO, RETIRO, TRANSFERENCIA_ENTRADA, TRANSFERENCIA_SALIDA',
        'Relación @OneToMany entre Cuenta y Transaccion',
        'Query method: findByNumero(String numero) para buscar cuenta',
        'DTO TransferenciaDTO: cuentaOrigenId, cuentaDestinoId, monto',
        'Test con Mockito: mockear validaciones y repository.save()'
      ],
      color: 'orange'
    }
  ];

  professionalTips = [
    {
      icon: '🏗️',
      title: 'Arquitectura en Capas Siempre',
      description: 'Separa responsabilidades: Controller (API) → Service (lógica) → Repository (BD).',
      example: 'Controller valida request, Service aplica reglas de negocio, Repository accede BD'
    },
    {
      icon: '📦',
      title: 'DTOs para Separar Concerns',
      description: 'Nunca expongas entidades JPA directamente. Usa RequestDTO (input) y ResponseDTO (output).',
      example: 'Entity tiene @ManyToOne lazy, DTO solo IDs. Evita lazy loading exceptions en API'
    },
    {
      icon: '✅',
      title: 'Validaciones en 2 Niveles',
      description: 'DTO: validaciones de formato (@NotNull, @Email). Service: validaciones de negocio (único, saldo).',
      example: '@Email en DTO valida formato. Service verifica email único en BD'
    },
    {
      icon: '🚨',
      title: 'Excepciones Custom y GlobalHandler',
      description: 'Crea excepciones específicas y centraliza manejo con @ControllerAdvice.',
      example: 'ClienteNotFoundException → 404. DocumentoDuplicadoException → 400. Mensajes claros'
    },
    {
      icon: '📘',
      title: 'Documenta con Swagger Automático',
      description: 'SpringDoc OpenAPI genera docs desde anotaciones. Usa @Operation, @ApiResponse.',
      example: '@Operation(summary = "Crear cliente") sobre método POST. UI en /swagger-ui.html'
    },
    {
      icon: '🧪',
      title: 'Tests Unitarios con Mockito',
      description: 'Mockea Repository, testea Service. Cobertura mínima 80% en lógica de negocio.',
      example: '@Mock ClienteRepository. @InjectMocks ClienteServiceImpl. Testear validaciones'
    },
    {
      icon: '💾',
      title: 'H2 para Desarrollo, PostgreSQL para Prod',
      description: 'H2 en memoria para dev/tests. PostgreSQL/MySQL en producción. Mismo JPA code.',
      example: 'application-dev.yml: H2. application-prod.yml: PostgreSQL. spring.profiles.active=dev'
    },
    {
      icon: '🔐',
      title: 'Auditoría con @PrePersist/@PreUpdate',
      description: 'Fechas de creación/actualización automáticas con listeners JPA.',
      example: '@PrePersist onCreate() { fechaCreacion = now(); }. No manual, sin errores'
    }
  ];

  deliverables = [
    {
      title: '🍃 Proyecto Spring Boot Completo',
      description: 'Código fuente compilable y ejecutable con Gradle',
      checkpoints: [
        'build.gradle con dependencias (Spring Boot, H2, SpringDoc)',
        'application.yml con configuración H2 y Swagger',
        'Estructura en capas: controller, service, repository, model, dto, exception',
        'Compila sin errores: ./gradlew build',
        'Ejecuta sin errores: ./gradlew bootRun'
      ]
    },
    {
      title: '📋 Prompt Documentado',
      description: 'Prompt estructurado usado para generar el CRUD',
      checkpoints: [
        'Template completo con ROL, CONTEXTO, TAREA',
        'Modelo de datos detallado con todos los campos',
        'Especificación de los 5 endpoints CRUD',
        'Validaciones de negocio listadas explícitamente',
        'Arquitectura y estructura de paquetes definida',
        'Reutilizable para otros CRUDs similares'
      ]
    },
    {
      title: '📊 Documentación y Tests',
      description: 'Swagger UI funcional y tests unitarios ejecutables',
      checkpoints: [
        'Swagger UI accesible en /swagger-ui.html',
        'H2 Console accesible en /h2-console',
        'Tests unitarios del Service con Mockito',
        'Cobertura mínima 80% en Service',
        'README.md con instrucciones de ejecución',
        'Ejemplos de requests cURL o Postman'
      ]
    }
  ];

  nextSteps = [
    'Extender con relaciones: @OneToMany, @ManyToOne (Cliente → Cuentas)',
    'Agregar seguridad: Spring Security + JWT para autenticación',
    'Migrar BD: cambiar H2 por PostgreSQL en producción',
    'CI/CD: GitHub Actions para build + tests + deploy automático',
    'Próxima clase: Taller de Refactoring Código Legacy a Spring Boot'
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
