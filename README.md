# AWS Cloud Cheatsheet 🚀

Un dashboard interactivo de Angular que sirve como cuaderno de aprendizaje visual de los principales servicios de AWS.

![AWS Cheatsheet](https://img.shields.io/badge/AWS-Services-orange?style=for-the-badge&logo=amazon-aws)
![Angular](https://img.shields.io/badge/Angular-20-red?style=for-the-badge&logo=angular)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwind-css)

## ✨ Características

- **Dashboard Interactivo**: Visualización categorizada de servicios AWS
- **Búsqueda en Tiempo Real**: Filtrado rápido por nombre de servicio
- **Filtros por Categoría**: Compute, Storage, Database, Networking, Security, DevOps
- **Ejemplos de Código**: CLI, Node.js, Python y Java SDK
- **Best Practices**: Mejores prácticas para cada servicio
- **Información de Precios**: Costos aproximados de cada servicio
- **Diseño Responsivo**: Optimizado para desktop y mobile

## 📂 Servicios Incluidos

### Compute
- **EC2** - Elastic Compute Cloud
- **Lambda** - Serverless Functions
- **ECS** - Elastic Container Service
- **EKS** - Elastic Kubernetes Service

### Storage
- **S3** - Simple Storage Service
- **EFS** - Elastic File System
- **Glacier** - Archive Storage

### Database
- **RDS** - Relational Database Service
- **DynamoDB** - NoSQL Database
- **Aurora** - MySQL/PostgreSQL Compatible Database

### Networking
- **VPC** - Virtual Private Cloud
- **CloudFront** - Content Delivery Network
- **Route 53** - DNS Service
- **API Gateway** - API Management

### Security
- **IAM** - Identity and Access Management
- **KMS** - Key Management Service
- **Cognito** - User Authentication

### DevOps
- **CloudFormation** - Infrastructure as Code
- **CodePipeline** - CI/CD Service
- **CloudWatch** - Monitoring and Logging

## 🚀 Inicio Rápido

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
