import{b as M,e as T,f as L,g as W}from"./chunk-I6DDBWYP.js";import{r as j,s as R}from"./chunk-EKFM64GL.js";import{$ as h,Ab as s,Bb as v,Ib as C,Ka as k,Kb as m,Kc as P,Lb as d,Lc as D,Oa as i,Pc as U,Ub as S,Wb as o,Xb as l,Yb as p,Z as g,_ as b,aa as w,bc as A,cc as E,db as _,dc as I,hb as x,yb as u,zb as t}from"./chunk-GRUBSZXT.js";var z={en:{title:"AWS Services Cheatsheet",subtitle:"Interactive learning dashboard for AWS cloud services",searchPlaceholder:"Search AWS services...",allCategories:"All Categories",showing:"Showing",services:"service(s)",viewExamples:"View Examples",docs:"Docs",useCases:"Use Cases",pricing:"Pricing",bestPractices:"Best Practices",codeExamples:"Code Examples",awsCli:"AWS CLI",nodeSdk:"Node.js SDK",pythonSdk:"Python SDK",javaSdk:"Java SDK",viewDocumentation:"View Documentation",close:"Close",noServicesFound:"No services found",tryAdjusting:"Try adjusting your search or filter criteria",footerText:"AWS Services Cheatsheet - Interactive Learning Dashboard",builtWith:"Built with Angular and Tailwind CSS",createdBy:"Created by",awsDocumentation:"AWS Documentation",githubRepository:"GitHub Repository"},es:{title:"Gu\xEDa de Servicios AWS",subtitle:"Dashboard interactivo para aprender servicios de AWS",searchPlaceholder:"Buscar servicios de AWS...",allCategories:"Todas las Categor\xEDas",showing:"Mostrando",services:"servicio(s)",viewExamples:"Ver Ejemplos",docs:"Documentaci\xF3n",useCases:"Casos de Uso",pricing:"Precios",bestPractices:"Mejores Pr\xE1cticas",codeExamples:"Ejemplos de C\xF3digo",awsCli:"AWS CLI",nodeSdk:"SDK Node.js",pythonSdk:"SDK Python",javaSdk:"SDK Java",viewDocumentation:"Ver Documentaci\xF3n",close:"Cerrar",noServicesFound:"No se encontraron servicios",tryAdjusting:"Intenta ajustar tu b\xFAsqueda o filtros",footerText:"Gu\xEDa de Servicios AWS - Dashboard Interactivo de Aprendizaje",builtWith:"Construido con Angular y Tailwind CSS",createdBy:"Creado por",awsDocumentation:"Documentaci\xF3n AWS",githubRepository:"Repositorio GitHub"}},q={en:{all:"All Categories",Compute:"Compute",Storage:"Storage",Database:"Database",Networking:"Networking",Security:"Security",DevOps:"DevOps"},es:{all:"Todas las Categor\xEDas",Compute:"C\xF3mputo",Storage:"Almacenamiento",Database:"Base de Datos",Networking:"Redes",Security:"Seguridad",DevOps:"DevOps"}};var y={EC2:{es:{description:"Servidores virtuales en la nube. Capacidad de c\xF3mputo escalable.",useCases:["Alojamiento de aplicaciones web","Entornos de desarrollo y prueba","Computaci\xF3n de alto rendimiento","Entrenamiento de machine learning"],bestPractices:["Usar Auto Scaling Groups para alta disponibilidad","Habilitar monitoreo detallado para instancias de producci\xF3n","Usar roles IAM en lugar de claves de acceso","Implementar security groups y NACLs apropiados","Etiquetar recursos para mejor organizaci\xF3n"],pricing:"$0.0116/hora por t2.micro (Linux, us-east-1)"}},Lambda:{es:{description:"Ejecuta c\xF3digo sin aprovisionar servidores. Paga solo por tiempo de c\xF3mputo.",useCases:["Aplicaciones dirigidas por eventos","Backends de microservicios","Pipelines de procesamiento de datos","Procesamiento de archivos en tiempo real"],bestPractices:["Mantener funciones peque\xF1as y enfocadas","Usar variables de entorno para configuraci\xF3n","Implementar manejo adecuado de errores y reintentos","Monitorear con CloudWatch Logs y m\xE9tricas","Usar capas para dependencias compartidas"],pricing:"$0.20 por 1M de solicitudes + $0.00001667 por GB-segundo"}},ECS:{es:{description:"Servicio de orquestaci\xF3n de contenedores completamente administrado.",useCases:["Aplicaciones en contenedores","Arquitectura de microservicios","Procesamiento por lotes"],bestPractices:["Usar Fargate para operaciones serverless","Implementar health checks para alta disponibilidad","Usar secretos de AWS para informaci\xF3n sensible","Implementar auto scaling basado en m\xE9tricas"],pricing:"Fargate: $0.04048 por vCPU por hora + $0.004445 por GB por hora"}},EKS:{es:{description:"Servicio Kubernetes administrado para ejecutar aplicaciones en contenedores.",useCases:["Aplicaciones nativas de la nube","Microservicios complejos","Cargas de trabajo h\xEDbridas"],bestPractices:["Usar RBAC para control de acceso","Implementar pol\xEDticas de red","Monitorear con Container Insights","Usar Helm para gesti\xF3n de paquetes"],pricing:"$0.10 por hora por cl\xFAster + costos de nodos EC2"}},S3:{es:{description:"Servicio de almacenamiento de objetos con durabilidad del 99.999999999%.",useCases:["Copia de seguridad y recuperaci\xF3n","Archivo y cumplimiento","Almacenamiento de aplicaciones","Alojamiento de sitios web est\xE1ticos"],bestPractices:["Habilitar versionado para datos cr\xEDticos","Usar pol\xEDticas de ciclo de vida para optimizaci\xF3n de costos","Implementar cifrado en reposo y en tr\xE1nsito","Usar S3 Access Points para acceso a gran escala","Habilitar registros de acceso para auditor\xEDa"],pricing:"$0.023 por GB para los primeros 50 TB/mes (us-east-1)"}},EFS:{es:{description:"Almacenamiento de archivos el\xE1stico y escalable para servicios AWS Cloud y on-premises.",useCases:["Almacenamiento compartido para contenedores","Directorios home para usuarios","An\xE1lisis de big data"],bestPractices:["Usar clases de almacenamiento IA para ahorro de costos","Implementar pol\xEDticas de ciclo de vida","Usar puntos de montaje en m\xFAltiples AZs","Configurar l\xEDmites de rendimiento apropiados"],pricing:"$0.30 por GB-mes (Est\xE1ndar) / $0.016 por GB-mes (IA)"}},Glacier:{es:{description:"Almacenamiento de archivo de bajo costo con tiempos de recuperaci\xF3n de minutos a horas.",useCases:["Archivo de datos a largo plazo","Cumplimiento regulatorio","Preservaci\xF3n de medios digitales"],bestPractices:["Usar pol\xEDticas de ciclo de vida de S3","Elegir la opci\xF3n de recuperaci\xF3n apropiada","Etiquetar archivos para organizaci\xF3n","Usar Vault Lock para cumplimiento"],pricing:"$0.004 por GB/mes (recuperaci\xF3n est\xE1ndar 3-5 horas)"}},RDS:{es:{description:"Servicio de base de datos relacional administrado que soporta m\xFAltiples motores.",useCases:["Aplicaciones web y m\xF3viles","Comercio electr\xF3nico","Aplicaciones empresariales"],bestPractices:["Habilitar Multi-AZ para alta disponibilidad","Usar r\xE9plicas de lectura para escalar","Implementar copias de seguridad autom\xE1ticas","Monitorear m\xE9tricas de rendimiento","Usar Parameter Groups para optimizaci\xF3n"],pricing:"Desde $0.017/hora (db.t3.micro MySQL)"}},DynamoDB:{es:{description:"Servicio de base de datos NoSQL r\xE1pido y flexible para cualquier escala.",useCases:["Aplicaciones m\xF3viles","Juegos","IoT","Aplicaciones web en tiempo real"],bestPractices:["Dise\xF1ar claves de partici\xF3n eficientemente","Usar \xEDndices secundarios globales apropiadamente","Implementar DynamoDB Streams para procesamiento de eventos","Usar modo bajo demanda para cargas impredecibles","Implementar pol\xEDticas de TTL para limpieza autom\xE1tica"],pricing:"Modo bajo demanda: $1.25 por mill\xF3n de solicitudes de escritura"}},Aurora:{es:{description:"Base de datos relacional compatible con MySQL y PostgreSQL construida para la nube.",useCases:["Aplicaciones empresariales","Software como servicio (SaaS)","Videojuegos en l\xEDnea"],bestPractices:["Usar Aurora Serverless para cargas variables","Implementar r\xE9plicas de Aurora para lectura","Usar clonaci\xF3n de Aurora para dev/test","Configurar backtrack para recuperaci\xF3n r\xE1pida"],pricing:"Desde $0.041/hora (db.t3.small, MySQL-compatible)"}},VPC:{es:{description:"Red virtual aislada para tus recursos AWS.",useCases:["Aislamiento de red","Conexiones h\xEDbridas","Entornos multi-tier"],bestPractices:["Usar m\xFAltiples subredes en diferentes AZs","Implementar NACLs y Security Groups en capas","Usar VPC Flow Logs para an\xE1lisis de tr\xE1fico","Planificar rangos CIDR cuidadosamente"],pricing:"Sin costo (solo se cobran recursos asociados)"}},CloudFront:{es:{description:"Red de entrega de contenido (CDN) para entrega r\xE1pida de contenido.",useCases:["Distribuci\xF3n de contenido web","Streaming de video","Entrega de APIs","Descarga de software"],bestPractices:["Usar certificados SSL/TLS para HTTPS","Implementar pol\xEDticas de cache apropiadas","Usar funciones Lambda@Edge para personalizaci\xF3n","Configurar geo-restricciones cuando sea necesario"],pricing:"$0.085 por GB para los primeros 10 TB/mes (us-east)"}},"Route 53":{es:{description:"Servicio web de Sistema de Nombres de Dominio (DNS) escalable.",useCases:["Registro de dominios","Enrutamiento de DNS","Health checks y failover"],bestPractices:["Usar pol\xEDticas de enrutamiento para alta disponibilidad","Implementar health checks para endpoints","Usar alias records para recursos AWS","Configurar TTL apropiado para registros"],pricing:"$0.50 por zona alojada/mes + $0.40 por mill\xF3n de consultas"}},"API Gateway":{es:{description:"Servicio completamente administrado para crear, publicar y gestionar APIs.",useCases:["APIs RESTful","APIs WebSocket","Backends de aplicaciones m\xF3viles","Integraci\xF3n de microservicios"],bestPractices:["Implementar throttling y quotas","Usar claves API para autenticaci\xF3n","Habilitar caching para reducir latencia","Monitorear con CloudWatch y X-Ray"],pricing:"$3.50 por mill\xF3n de llamadas API + transferencia de datos"}},IAM:{es:{description:"Gesti\xF3n de Identidad y Acceso para control de acceso seguro.",useCases:["Gesti\xF3n de usuarios y grupos","Control de acceso a recursos","Federaci\xF3n de identidad","Acceso multi-cuenta"],bestPractices:["Usar principio de menor privilegio","Habilitar MFA para usuarios","Rotar credenciales regularmente","Usar roles IAM para aplicaciones","Auditar pol\xEDticas con Access Analyzer"],pricing:"Gratis (sin costo)"}},KMS:{es:{description:"Servicio de Gesti\xF3n de Claves para crear y controlar claves de cifrado.",useCases:["Cifrado de datos","Firma digital","Cumplimiento regulatorio","Gesti\xF3n centralizada de claves"],bestPractices:["Usar claves gestionadas por el cliente para control","Implementar rotaci\xF3n autom\xE1tica de claves","Usar pol\xEDticas de claves para control de acceso","Auditar uso de claves con CloudTrail"],pricing:"$1/mes por clave gestionada + $0.03 por 10,000 solicitudes"}},Cognito:{es:{description:"Servicio de identidad de usuario y sincronizaci\xF3n de datos.",useCases:["Autenticaci\xF3n de usuarios","Inicio de sesi\xF3n social","Sincronizaci\xF3n de datos de usuario","Acceso a recursos AWS"],bestPractices:["Usar grupos para asignaci\xF3n de roles","Implementar MFA para seguridad adicional","Personalizar flujos de autenticaci\xF3n con Lambda","Usar atributos personalizados para datos de usuario"],pricing:"Gratis hasta 50,000 MAUs, luego desde $0.0055 por MAU"}},CloudFormation:{es:{description:"Servicio de Infraestructura como C\xF3digo para modelar y aprovisionar recursos.",useCases:["Aprovisionamiento de infraestructura","Gesti\xF3n de configuraci\xF3n","Despliegues repetibles","Entornos multi-regi\xF3n"],bestPractices:["Usar StackSets para despliegues multi-cuenta","Modularizar plantillas con stacks anidados","Usar par\xE1metros y mapeos para flexibilidad","Implementar pol\xEDticas de cambio para seguridad"],pricing:"Sin costo adicional (solo recursos aprovisionados)"}},CodePipeline:{es:{description:"Servicio de entrega continua para actualizaciones r\xE1pidas y confiables.",useCases:["CI/CD automatizado","Despliegues multi-etapa","Automatizaci\xF3n de lanzamientos","Integraci\xF3n con herramientas de terceros"],bestPractices:["Implementar aprobaciones manuales para producci\xF3n","Usar variables de entorno para configuraci\xF3n","Integrar pruebas automatizadas","Monitorear ejecuciones de pipeline"],pricing:"$1 por pipeline activo/mes"}},CloudWatch:{es:{description:"Servicio de monitoreo y observabilidad para recursos y aplicaciones AWS.",useCases:["Monitoreo de aplicaciones","An\xE1lisis de logs","Alertas operacionales","Dashboards personalizados"],bestPractices:["Crear dashboards para m\xE9tricas clave","Configurar alarmas para eventos cr\xEDticos","Usar Logs Insights para an\xE1lisis","Implementar m\xE9tricas personalizadas","Usar Contributor Insights para an\xE1lisis de tr\xE1fico"],pricing:"Desde $0.30 por m\xE9trica personalizada/mes"}}};function F(n,a){if(n&1){let e=C();t(0,"button",39),m("click",function(){let c=g(e).$implicit,f=d();return f.selectedCategory=c,b(f.filterServices())}),t(1,"mat-icon",40),o(2),s(),t(3,"span"),o(4),s()()}if(n&2){let e=a.$implicit,r=d();S("bg-accent-orange",r.selectedCategory===e)("text-white",r.selectedCategory===e)("bg-dark-sidebar",r.selectedCategory!==e)("text-gray-400",r.selectedCategory!==e),i(2),l(r.getCategoryIcon(e)),i(2),l(r.getCategoryTranslation(e))}}function G(n,a){if(n&1){let e=C();t(0,"div",41)(1,"div",42)(2,"div",43)(3,"div",44)(4,"div",45)(5,"mat-icon",46),o(6),s()()()(),t(7,"h3",47),o(8),s(),t(9,"span",48),o(10),s(),t(11,"p",49),o(12),s()(),t(13,"div",50)(14,"button",51),m("click",function(){let c=g(e).$implicit,f=d();return b(f.openModal(c))}),t(15,"span"),o(16),s(),t(17,"mat-icon",40),o(18,"arrow_forward"),s()()()()}if(n&2){let e=a.$implicit,r=d();i(6),l(r.getServiceIcon(e)),i(2),l(e.name),i(2),p(" ",r.getCategoryTranslation(e.category)," "),i(2),l(r.getServiceDescription(e)),i(4),l(r.t.viewExamples)}}function V(n,a){if(n&1&&(t(0,"li",82),h(),t(1,"svg",83),v(2,"path",84),s(),o(3),s()),n&2){let e=a.$implicit;i(3),p(" ",e," ")}}function $(n,a){if(n&1&&(t(0,"code"),o(1),s()),n&2){let e=a.$implicit;i(),p("",e,`

`)}}function N(n,a){if(n&1&&(t(0,"div")(1,"pre",85),x(2,$,2,1,"code",86),s()()),n&2){let e=d(2);i(2),u("ngForOf",e.selectedService.cliExamples)}}function O(n,a){if(n&1&&(t(0,"div")(1,"pre",87)(2,"code"),o(3),s()()()),n&2){let e=d(2);i(3),l(e.selectedService.sdkExamples.node)}}function H(n,a){if(n&1&&(t(0,"div")(1,"pre",88)(2,"code"),o(3),s()()()),n&2){let e=d(2);i(3),l(e.selectedService.sdkExamples.python)}}function K(n,a){if(n&1&&(t(0,"div")(1,"pre",89)(2,"code"),o(3),s()()()),n&2){let e=d(2);i(3),l(e.selectedService.sdkExamples.java)}}function Q(n,a){if(n&1){let e=C();t(0,"div",52),m("click",function(){g(e);let c=d();return b(c.closeModal())}),t(1,"div",53),v(2,"div",54),t(3,"span",55),o(4,"\u200B"),s(),t(5,"div",56),m("click",function(c){return g(e),b(c.stopPropagation())}),t(6,"div",57)(7,"div",58)(8,"div",44)(9,"div",59)(10,"mat-icon",46),o(11),s()(),t(12,"div")(13,"h3",60),o(14),s(),t(15,"span",61),o(16),s()()(),t(17,"button",62),m("click",function(){g(e);let c=d();return b(c.closeModal())}),h(),t(18,"svg",63),v(19,"path",64),s()()(),w(),t(20,"p",65),o(21),s()(),t(22,"div",66)(23,"div",67)(24,"h4",68),h(),t(25,"svg",69),v(26,"path",70),s(),o(27),s(),w(),t(28,"ul",71),x(29,V,4,1,"li",72),s()(),t(30,"div",67)(31,"h4",73),o(32),s(),t(33,"div",74)(34,"button",75),m("click",function(){g(e);let c=d();return b(c.setActiveTab(c.selectedService.name,"cli"))}),o(35),s(),t(36,"button",76),m("click",function(){g(e);let c=d();return b(c.setActiveTab(c.selectedService.name,"node"))}),o(37),s(),t(38,"button",76),m("click",function(){g(e);let c=d();return b(c.setActiveTab(c.selectedService.name,"python"))}),o(39),s(),t(40,"button",76),m("click",function(){g(e);let c=d();return b(c.setActiveTab(c.selectedService.name,"java"))}),o(41),s()(),t(42,"div",77),x(43,N,3,1,"div",78)(44,O,4,1,"div",78)(45,H,4,1,"div",78)(46,K,4,1,"div",78),s()()(),t(47,"div",79)(48,"a",80),o(49),s(),t(50,"button",81),m("click",function(){g(e);let c=d();return b(c.closeModal())}),o(51),s()()()()()}if(n&2){let e=d();i(11),l(e.getServiceIcon(e.selectedService)),i(3),l(e.selectedService.name),i(2),p(" ",e.getCategoryTranslation(e.selectedService.category)," "),i(5),l(e.getServiceDescription(e.selectedService)),i(6),p(" ",e.t.bestPractices," "),i(2),u("ngForOf",e.getServiceBestPractices(e.selectedService)),i(3),l(e.t.codeExamples),i(2),S("border-accent-orange",e.getActiveTab(e.selectedService.name)==="cli")("text-accent-orange",e.getActiveTab(e.selectedService.name)==="cli")("text-gray-400",e.getActiveTab(e.selectedService.name)!=="cli"),i(),p(" ",e.t.awsCli," "),i(),S("border-aws-orange",e.getActiveTab(e.selectedService.name)==="node")("text-aws-orange",e.getActiveTab(e.selectedService.name)==="node"),i(),p(" ",e.t.nodeSdk," "),i(),S("border-aws-orange",e.getActiveTab(e.selectedService.name)==="python")("text-aws-orange",e.getActiveTab(e.selectedService.name)==="python"),i(),p(" ",e.t.pythonSdk," "),i(),S("border-aws-orange",e.getActiveTab(e.selectedService.name)==="java")("text-aws-orange",e.getActiveTab(e.selectedService.name)==="java"),i(),p(" ",e.t.javaSdk," "),i(2),u("ngIf",e.getActiveTab(e.selectedService.name)==="cli"),i(),u("ngIf",e.getActiveTab(e.selectedService.name)==="node"&&e.selectedService.sdkExamples.node),i(),u("ngIf",e.getActiveTab(e.selectedService.name)==="python"&&e.selectedService.sdkExamples.python),i(),u("ngIf",e.getActiveTab(e.selectedService.name)==="java"&&e.selectedService.sdkExamples.java),i(2),u("href",e.selectedService.docUrl,k),i(),p(" ",e.t.viewDocumentation," "),i(2),p(" ",e.t.close," ")}}var B=class n{searchTerm="";selectedCategory="all";expandedService=null;activeTab={};selectedService=null;isModalOpen=!1;currentLang="en";get t(){return z[this.currentLang]}get ct(){return q[this.currentLang]}toggleLanguage(){this.currentLang=this.currentLang==="en"?"es":"en"}getCategoryTranslation(a){return this.ct[a]||a}getServiceDescription(a){return this.currentLang==="es"&&y[a.name]?.es?y[a.name].es.description:a.description}getServiceUseCases(a){return this.currentLang==="es"&&y[a.name]?.es?y[a.name].es.useCases:a.useCases}getServiceBestPractices(a){return this.currentLang==="es"&&y[a.name]?.es?y[a.name].es.bestPractices:a.bestPractices}getServicePricing(a){return this.currentLang==="es"&&y[a.name]?.es?y[a.name].es.pricing:a.pricing}categories=["all","Compute","Storage","Database","Networking","Security","DevOps"];awsServices=[{name:"EC2",category:"Compute",description:"Virtual servers in the cloud. Scalable computing capacity.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/ec2/",useCases:["Web applications hosting","Development and test environments","High-performance computing","Machine learning training"],cliExamples:[`# List all EC2 instances
aws ec2 describe-instances`,`# Launch a new instance
aws ec2 run-instances --image-id ami-xxxxx --instance-type t2.micro`,`# Stop an instance
aws ec2 stop-instances --instance-ids i-xxxxx`,`# Terminate an instance
aws ec2 terminate-instances --instance-ids i-xxxxx`],sdkExamples:{node:`const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

// List instances
ec2.describeInstances({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

ec2 = boto3.client('ec2')

# List instances
response = ec2.describe_instances()
print(response)`,java:`EC2Client ec2 = EC2Client.create();

DescribeInstancesResponse response =
  ec2.describeInstances();

response.reservations().forEach(
  reservation -> {
    reservation.instances().forEach(
      instance -> System.out.println(instance)
    );
  }
);`},bestPractices:["Use Auto Scaling Groups for high availability","Enable detailed monitoring for production instances","Use IAM roles instead of access keys","Implement proper security groups and NACLs","Tag resources for better organization"],pricing:"$0.0116/hour for t2.micro (Linux, us-east-1)"},{name:"Lambda",category:"Compute",description:"Run code without provisioning servers. Pay only for compute time.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/lambda/",useCases:["Event-driven applications","Microservices backends","Data processing pipelines","Scheduled tasks and cron jobs"],cliExamples:[`# List functions
aws lambda list-functions`,`# Invoke a function
aws lambda invoke --function-name my-function output.json`,`# Update function code
aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip`,`# Create function
aws lambda create-function --function-name my-function --runtime nodejs18.x --role arn:aws:iam::xxx:role/lambda-role --handler index.handler --zip-file fileb://function.zip`],sdkExamples:{node:`const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

// Invoke function
const params = {
  FunctionName: 'myFunction',
  Payload: JSON.stringify({ key: 'value' })
};

lambda.invoke(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3
import json

lambda_client = boto3.client('lambda')

response = lambda_client.invoke(
    FunctionName='myFunction',
    Payload=json.dumps({'key': 'value'})
)

print(response['Payload'].read())`,java:`LambdaClient lambda = LambdaClient.create();

InvokeRequest request = InvokeRequest.builder()
  .functionName("myFunction")
  .payload(SdkBytes.fromUtf8String(
    "{\\"key\\":\\"value\\"}"
  ))
  .build();

InvokeResponse response = lambda.invoke(request);`},bestPractices:["Keep functions small and focused","Use environment variables for configuration","Implement proper error handling and retries","Monitor with CloudWatch Logs and metrics","Use layers for shared dependencies"],pricing:"$0.20 per 1M requests + $0.0000166667 per GB-second"},{name:"ECS",category:"Compute",description:"Fully managed container orchestration service.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/ecs/",useCases:["Containerized applications","Microservices architecture","Batch processing","CI/CD pipelines"],cliExamples:[`# List clusters
aws ecs list-clusters`,`# Create a cluster
aws ecs create-cluster --cluster-name my-cluster`,`# List services
aws ecs list-services --cluster my-cluster`,`# Update service
aws ecs update-service --cluster my-cluster --service my-service --desired-count 3`],sdkExamples:{node:`const AWS = require('aws-sdk');
const ecs = new AWS.ECS();

ecs.listClusters({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

ecs = boto3.client('ecs')
response = ecs.list_clusters()
print(response)`,java:`EcsClient ecs = EcsClient.create();
ListClustersResponse response =
  ecs.listClusters();
System.out.println(response);`},bestPractices:["Use Fargate for serverless containers","Implement health checks","Use task definitions versioning","Enable container insights","Use service discovery for microservices"],pricing:"Fargate: $0.04048 per vCPU per hour + $0.004445 per GB per hour"},{name:"EKS",category:"Compute",description:"Managed Kubernetes service for running containerized applications.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/eks/",useCases:["Kubernetes workloads","Cloud-native applications","Multi-cloud deployments","Advanced orchestration needs"],cliExamples:[`# Create cluster
aws eks create-cluster --name my-cluster --role-arn arn:aws:iam::xxx:role/eks-role --resources-vpc-config subnetIds=subnet-xxx,securityGroupIds=sg-xxx`,`# List clusters
aws eks list-clusters`,`# Update kubeconfig
aws eks update-kubeconfig --name my-cluster`,`# Describe cluster
aws eks describe-cluster --name my-cluster`],sdkExamples:{node:`const AWS = require('aws-sdk');
const eks = new AWS.EKS();

eks.listClusters({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

eks = boto3.client('eks')
response = eks.list_clusters()
print(response)`,java:`EksClient eks = EksClient.create();
ListClustersResponse response =
  eks.listClusters();
System.out.println(response);`},bestPractices:["Use managed node groups","Enable cluster logging","Implement RBAC properly","Use AWS Load Balancer Controller","Regular cluster updates"],pricing:"$0.10 per hour per cluster + EC2/Fargate costs"},{name:"S3",category:"Storage",description:"Object storage service with 99.999999999% durability.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/s3/",useCases:["Static website hosting","Data backup and archiving","Data lakes and analytics","Content distribution"],cliExamples:[`# List buckets
aws s3 ls`,`# Create bucket
aws s3 mb s3://my-bucket`,`# Upload file
aws s3 cp myfile.txt s3://my-bucket/`,`# Sync directory
aws s3 sync ./local-folder s3://my-bucket/folder`],sdkExamples:{node:`const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// Upload file
const params = {
  Bucket: 'my-bucket',
  Key: 'myfile.txt',
  Body: 'Hello World'
};

s3.putObject(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

s3 = boto3.client('s3')

# Upload file
s3.put_object(
    Bucket='my-bucket',
    Key='myfile.txt',
    Body=b'Hello World'
)`,java:`S3Client s3 = S3Client.create();

PutObjectRequest request =
  PutObjectRequest.builder()
    .bucket("my-bucket")
    .key("myfile.txt")
    .build();

s3.putObject(request,
  RequestBody.fromString("Hello World"));`},bestPractices:["Enable versioning for important data","Use lifecycle policies for cost optimization","Enable encryption at rest","Implement proper bucket policies","Use CloudFront for content delivery"],pricing:"$0.023 per GB/month (Standard, first 50 TB)"},{name:"EFS",category:"Storage",description:"Scalable, elastic file storage for use with AWS Cloud services and on-premises.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/efs/",useCases:["Shared file storage for EC2","Container storage","Content management systems","Development environments"],cliExamples:[`# Create file system
aws efs create-file-system --performance-mode generalPurpose`,`# List file systems
aws efs describe-file-systems`,`# Create mount target
aws efs create-mount-target --file-system-id fs-xxx --subnet-id subnet-xxx`,`# Delete file system
aws efs delete-file-system --file-system-id fs-xxx`],sdkExamples:{node:`const AWS = require('aws-sdk');
const efs = new AWS.EFS();

efs.describeFileSystems({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

efs = boto3.client('efs')
response = efs.describe_file_systems()
print(response)`,java:`EfsClient efs = EfsClient.create();
DescribeFileSystemsResponse response =
  efs.describeFileSystems();
System.out.println(response);`},bestPractices:["Use EFS Infrequent Access for cost savings","Enable encryption in transit","Use VPC security groups properly","Monitor performance metrics","Use lifecycle management"],pricing:"$0.30 per GB/month (Standard) + $0.01 per GB/month (IA)"},{name:"Glacier",category:"Storage",description:"Low-cost archive storage with retrieval times from minutes to hours.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/glacier/",useCases:["Long-term backup","Compliance archiving","Digital preservation","Disaster recovery"],cliExamples:[`# Create vault
aws glacier create-vault --account-id - --vault-name my-vault`,`# List vaults
aws glacier list-vaults --account-id -`,`# Upload archive
aws glacier upload-archive --account-id - --vault-name my-vault --body myfile.zip`,`# Initiate job (retrieval)
aws glacier initiate-job --account-id - --vault-name my-vault --job-parameters '{"Type":"archive-retrieval","ArchiveId":"xxx"}'`],sdkExamples:{node:`const AWS = require('aws-sdk');
const glacier = new AWS.Glacier();

const params = {
  accountId: '-',
  vaultName: 'my-vault'
};

glacier.listVaults(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

glacier = boto3.client('glacier')
response = glacier.list_vaults(
    accountId='-'
)
print(response)`,java:`GlacierClient glacier = GlacierClient.create();
ListVaultsResponse response =
  glacier.listVaults(
    ListVaultsRequest.builder()
      .accountId("-")
      .build()
  );`},bestPractices:["Use S3 Glacier storage classes for easier management","Plan retrieval times carefully","Use vault lock for compliance","Tag archives for organization","Consider Deep Archive for rarely accessed data"],pricing:"$0.004 per GB/month (Flexible Retrieval)"},{name:"RDS",category:"Database",description:"Managed relational database service supporting multiple engines.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/rds/",useCases:["Web and mobile applications","E-commerce platforms","Enterprise applications","Online gaming"],cliExamples:[`# Create DB instance
aws rds create-db-instance --db-instance-identifier mydb --db-instance-class db.t3.micro --engine mysql --master-username admin --master-user-password mypassword --allocated-storage 20`,`# List DB instances
aws rds describe-db-instances`,`# Create snapshot
aws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier mydb-snapshot`,`# Modify instance
aws rds modify-db-instance --db-instance-identifier mydb --allocated-storage 30`],sdkExamples:{node:`const AWS = require('aws-sdk');
const rds = new AWS.RDS();

rds.describeDBInstances({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

rds = boto3.client('rds')
response = rds.describe_db_instances()
print(response)`,java:`RdsClient rds = RdsClient.create();
DescribeDbInstancesResponse response =
  rds.describeDBInstances();
System.out.println(response);`},bestPractices:["Enable automated backups","Use Multi-AZ for production","Enable encryption at rest","Use parameter groups for configuration","Monitor with Enhanced Monitoring"],pricing:"db.t3.micro: $0.017/hour (MySQL)"},{name:"DynamoDB",category:"Database",description:"Fast, flexible NoSQL database service for any scale.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/dynamodb/",useCases:["Mobile and web applications","Gaming leaderboards","IoT data storage","Session management"],cliExamples:[`# Create table
aws dynamodb create-table --table-name MyTable --attribute-definitions AttributeName=Id,AttributeType=S --key-schema AttributeName=Id,KeyType=HASH --billing-mode PAY_PER_REQUEST`,`# Put item
aws dynamodb put-item --table-name MyTable --item '{"Id":{"S":"123"},"Name":{"S":"John"}}'`,`# Get item
aws dynamodb get-item --table-name MyTable --key '{"Id":{"S":"123"}}'`,`# Scan table
aws dynamodb scan --table-name MyTable`],sdkExamples:{node:`const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Put item
const params = {
  TableName: 'MyTable',
  Item: { Id: '123', Name: 'John' }
};

dynamodb.put(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MyTable')

# Put item
table.put_item(
    Item={'Id': '123', 'Name': 'John'}
)`,java:`DynamoDbClient dynamodb = DynamoDbClient.create();

PutItemRequest request =
  PutItemRequest.builder()
    .tableName("MyTable")
    .item(Map.of(
      "Id", AttributeValue.builder().s("123").build(),
      "Name", AttributeValue.builder().s("John").build()
    ))
    .build();

dynamodb.putItem(request);`},bestPractices:["Use on-demand billing for unpredictable workloads","Implement proper partition key design","Use Global Secondary Indexes wisely","Enable Point-in-Time Recovery","Use DynamoDB Streams for change tracking"],pricing:"$1.25 per million write requests + $0.25 per million read requests (on-demand)"},{name:"Aurora",category:"Database",description:"MySQL and PostgreSQL-compatible relational database built for the cloud.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/aurora/",useCases:["Enterprise applications","SaaS applications","High-performance applications","Applications requiring high availability"],cliExamples:[`# Create Aurora cluster
aws rds create-db-cluster --db-cluster-identifier my-aurora-cluster --engine aurora-mysql --master-username admin --master-user-password mypassword`,`# Create DB instance in cluster
aws rds create-db-instance --db-instance-identifier aurora-instance-1 --db-instance-class db.t3.small --engine aurora-mysql --db-cluster-identifier my-aurora-cluster`,`# List clusters
aws rds describe-db-clusters`,`# Create cluster snapshot
aws rds create-db-cluster-snapshot --db-cluster-identifier my-aurora-cluster --db-cluster-snapshot-identifier my-snapshot`],sdkExamples:{node:`const AWS = require('aws-sdk');
const rds = new AWS.RDS();

rds.describeDBClusters({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

rds = boto3.client('rds')
response = rds.describe_db_clusters()
print(response)`,java:`RdsClient rds = RdsClient.create();
DescribeDbClustersResponse response =
  rds.describeDBClusters();
System.out.println(response);`},bestPractices:["Use Aurora Serverless for variable workloads","Enable backtrack for quick point-in-time recovery","Use reader endpoints for read scaling","Enable Performance Insights","Consider Aurora Global Database for disaster recovery"],pricing:"db.t3.small: $0.041/hour + $0.10 per GB-month storage + I/O costs"},{name:"VPC",category:"Networking",description:"Isolated virtual network for your AWS resources.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/vpc/",useCases:["Network isolation","Multi-tier applications","Hybrid cloud architectures","Secure application hosting"],cliExamples:[`# Create VPC
aws ec2 create-vpc --cidr-block 10.0.0.0/16`,`# Create subnet
aws ec2 create-subnet --vpc-id vpc-xxx --cidr-block 10.0.1.0/24`,`# Create internet gateway
aws ec2 create-internet-gateway`,`# Attach internet gateway
aws ec2 attach-internet-gateway --vpc-id vpc-xxx --internet-gateway-id igw-xxx`],sdkExamples:{node:`const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

ec2.describeVpcs({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

ec2 = boto3.client('ec2')
response = ec2.describe_vpcs()
print(response)`,java:`Ec2Client ec2 = Ec2Client.create();
DescribeVpcsResponse response =
  ec2.describeVpcs();
System.out.println(response);`},bestPractices:["Use multiple availability zones","Implement proper subnet design","Use VPC Flow Logs for monitoring","Implement security groups and NACLs","Use VPC endpoints for AWS services"],pricing:"No charge for VPC itself, costs for associated resources"},{name:"CloudFront",category:"Networking",description:"Content Delivery Network (CDN) service for fast content delivery.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/cloudfront/",useCases:["Website acceleration","Video streaming","API acceleration","Software distribution"],cliExamples:[`# Create distribution
aws cloudfront create-distribution --distribution-config file://dist-config.json`,`# List distributions
aws cloudfront list-distributions`,`# Create invalidation
aws cloudfront create-invalidation --distribution-id E123456 --paths "/*"`,`# Get distribution config
aws cloudfront get-distribution-config --id E123456`],sdkExamples:{node:`const AWS = require('aws-sdk');
const cloudfront = new AWS.CloudFront();

cloudfront.listDistributions({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

cloudfront = boto3.client('cloudfront')
response = cloudfront.list_distributions()
print(response)`,java:`CloudFrontClient cloudfront =
  CloudFrontClient.create();
ListDistributionsResponse response =
  cloudfront.listDistributions();`},bestPractices:["Use Origin Access Identity with S3","Enable compression","Use custom SSL certificates","Implement proper cache behaviors","Monitor with CloudWatch metrics"],pricing:"$0.085 per GB (first 10 TB/month, US/Europe)"},{name:"Route 53",category:"Networking",description:"Scalable Domain Name System (DNS) web service.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/route53/",useCases:["Domain registration","DNS routing","Health checking","Traffic management"],cliExamples:[`# Create hosted zone
aws route53 create-hosted-zone --name example.com --caller-reference 2024-01-01`,`# List hosted zones
aws route53 list-hosted-zones`,`# Change record sets
aws route53 change-resource-record-sets --hosted-zone-id Z123456 --change-batch file://changes.json`,`# List resource record sets
aws route53 list-resource-record-sets --hosted-zone-id Z123456`],sdkExamples:{node:`const AWS = require('aws-sdk');
const route53 = new AWS.Route53();

route53.listHostedZones({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

route53 = boto3.client('route53')
response = route53.list_hosted_zones()
print(response)`,java:`Route53Client route53 = Route53Client.create();
ListHostedZonesResponse response =
  route53.listHostedZones();
System.out.println(response);`},bestPractices:["Use health checks with failover","Implement geo-routing for global applications","Use alias records for AWS resources","Enable DNSSEC for security","Monitor query metrics"],pricing:"$0.50 per hosted zone/month + $0.40 per million queries"},{name:"API Gateway",category:"Networking",description:"Fully managed service for creating, publishing, and managing APIs.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/apigateway/",useCases:["RESTful APIs","WebSocket APIs","Serverless backends","Microservices gateways"],cliExamples:[`# Create REST API
aws apigateway create-rest-api --name my-api`,`# Get APIs
aws apigateway get-rest-apis`,`# Create deployment
aws apigateway create-deployment --rest-api-id abc123 --stage-name prod`,`# Create usage plan
aws apigateway create-usage-plan --name my-plan`],sdkExamples:{node:`const AWS = require('aws-sdk');
const apigateway = new AWS.APIGateway();

apigateway.getRestApis({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

apigateway = boto3.client('apigateway')
response = apigateway.get_rest_apis()
print(response)`,java:`ApiGatewayClient apigateway =
  ApiGatewayClient.create();
GetRestApisResponse response =
  apigateway.getRestApis();`},bestPractices:["Use API keys and usage plans","Implement request validation","Enable CloudWatch logging","Use Lambda authorizers for custom auth","Implement throttling and rate limiting"],pricing:"$3.50 per million API calls (REST) + data transfer"},{name:"IAM",category:"Security",description:"Identity and Access Management for secure access control.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/iam/",useCases:["User access management","Role-based access control","Service permissions","Cross-account access"],cliExamples:[`# Create user
aws iam create-user --user-name john`,`# Create role
aws iam create-role --role-name my-role --assume-role-policy-document file://trust-policy.json`,`# Attach policy
aws iam attach-user-policy --user-name john --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess`,`# List users
aws iam list-users`],sdkExamples:{node:`const AWS = require('aws-sdk');
const iam = new AWS.IAM();

iam.listUsers({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

iam = boto3.client('iam')
response = iam.list_users()
print(response)`,java:`IamClient iam = IamClient.create();
ListUsersResponse response =
  iam.listUsers();
System.out.println(response);`},bestPractices:["Use MFA for privileged users","Follow principle of least privilege","Use roles instead of long-term credentials","Regularly rotate credentials","Enable CloudTrail for auditing"],pricing:"Free service"},{name:"KMS",category:"Security",description:"Key Management Service for creating and controlling encryption keys.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/kms/",useCases:["Data encryption","Digital signing","Compliance requirements","Envelope encryption"],cliExamples:[`# Create key
aws kms create-key --description "My encryption key"`,`# List keys
aws kms list-keys`,`# Encrypt data
aws kms encrypt --key-id alias/my-key --plaintext "Hello World"`,`# Decrypt data
aws kms decrypt --ciphertext-blob fileb://encrypted.dat`],sdkExamples:{node:`const AWS = require('aws-sdk');
const kms = new AWS.KMS();

const params = {
  KeyId: 'alias/my-key',
  Plaintext: 'Hello World'
};

kms.encrypt(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

kms = boto3.client('kms')
response = kms.encrypt(
    KeyId='alias/my-key',
    Plaintext=b'Hello World'
)
print(response)`,java:`KmsClient kms = KmsClient.create();

EncryptRequest request =
  EncryptRequest.builder()
    .keyId("alias/my-key")
    .plaintext(SdkBytes.fromUtf8String("Hello"))
    .build();

EncryptResponse response = kms.encrypt(request);`},bestPractices:["Use customer managed keys for control","Enable key rotation","Use grants for temporary permissions","Implement key policies properly","Monitor key usage with CloudTrail"],pricing:"$1 per key per month + $0.03 per 10,000 requests"},{name:"Cognito",category:"Security",description:"User identity and data synchronization service.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/cognito/",useCases:["User authentication","Mobile app user management","Social identity providers","Multi-factor authentication"],cliExamples:[`# Create user pool
aws cognito-idp create-user-pool --pool-name my-user-pool`,`# Create user
aws cognito-idp admin-create-user --user-pool-id us-east-1_xxx --username john`,`# List user pools
aws cognito-idp list-user-pools --max-results 10`,`# Create identity pool
aws cognito-identity create-identity-pool --identity-pool-name my-identity-pool --allow-unauthenticated-identities`],sdkExamples:{node:`const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

cognito.listUserPools({ MaxResults: 10 }, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

cognito = boto3.client('cognito-idp')
response = cognito.list_user_pools(
    MaxResults=10
)
print(response)`,java:`CognitoIdentityProviderClient cognito =
  CognitoIdentityProviderClient.create();

ListUserPoolsResponse response =
  cognito.listUserPools(
    ListUserPoolsRequest.builder()
      .maxResults(10)
      .build()
  );`},bestPractices:["Enable MFA for sensitive applications","Use hosted UI for quick implementation","Implement password policies","Use Lambda triggers for custom workflows","Enable advanced security features"],pricing:"Free tier: 50,000 MAUs, then $0.0055 per MAU"},{name:"CloudFormation",category:"DevOps",description:"Infrastructure as Code service for modeling and provisioning resources.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/cloudformation/",useCases:["Infrastructure automation","Repeatable deployments","Environment provisioning","Disaster recovery"],cliExamples:[`# Create stack
aws cloudformation create-stack --stack-name my-stack --template-body file://template.yaml`,`# Update stack
aws cloudformation update-stack --stack-name my-stack --template-body file://template.yaml`,`# Delete stack
aws cloudformation delete-stack --stack-name my-stack`,`# Describe stack
aws cloudformation describe-stacks --stack-name my-stack`],sdkExamples:{node:`const AWS = require('aws-sdk');
const cloudformation = new AWS.CloudFormation();

cloudformation.describeStacks({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

cf = boto3.client('cloudformation')
response = cf.describe_stacks()
print(response)`,java:`CloudFormationClient cf =
  CloudFormationClient.create();
DescribeStacksResponse response =
  cf.describeStacks();`},bestPractices:["Use nested stacks for modularity","Implement change sets before updates","Use parameters for flexibility","Enable termination protection","Version control your templates"],pricing:"Free for CloudFormation, pay for resources created"},{name:"CodePipeline",category:"DevOps",description:"Continuous delivery service for fast and reliable updates.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/codepipeline/",useCases:["CI/CD automation","Release orchestration","Deployment pipelines","Multi-stage deployments"],cliExamples:[`# Create pipeline
aws codepipeline create-pipeline --cli-input-json file://pipeline.json`,`# Get pipeline
aws codepipeline get-pipeline --name my-pipeline`,`# Start pipeline execution
aws codepipeline start-pipeline-execution --name my-pipeline`,`# List pipelines
aws codepipeline list-pipelines`],sdkExamples:{node:`const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline();

codepipeline.listPipelines({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

codepipeline = boto3.client('codepipeline')
response = codepipeline.list_pipelines()
print(response)`,java:`CodePipelineClient codepipeline =
  CodePipelineClient.create();
ListPipelinesResponse response =
  codepipeline.listPipelines();`},bestPractices:["Use manual approval for production","Implement proper artifact management","Use CodeBuild for build stages","Enable notifications for failures","Implement rollback strategies"],pricing:"$1 per active pipeline per month"},{name:"CloudWatch",category:"DevOps",description:"Monitoring and observability service for AWS resources and applications.",icon:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",docUrl:"https://docs.aws.amazon.com/cloudwatch/",useCases:["Performance monitoring","Log aggregation","Alerting and notifications","Application insights"],cliExamples:[`# Put metric data
aws cloudwatch put-metric-data --namespace MyApp --metric-name PageViews --value 1`,`# Get metric statistics
aws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --start-time 2024-01-01T00:00:00Z --end-time 2024-01-01T23:59:59Z --period 3600 --statistics Average`,`# Create alarm
aws cloudwatch put-metric-alarm --alarm-name cpu-alarm --alarm-description "CPU high" --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --period 300 --threshold 80 --comparison-operator GreaterThanThreshold`,`# List alarms
aws cloudwatch describe-alarms`],sdkExamples:{node:`const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();

cloudwatch.describeAlarms({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,python:`import boto3

cloudwatch = boto3.client('cloudwatch')
response = cloudwatch.describe_alarms()
print(response)`,java:`CloudWatchClient cloudwatch =
  CloudWatchClient.create();
DescribeAlarmsResponse response =
  cloudwatch.describeAlarms();`},bestPractices:["Create dashboards for key metrics","Use CloudWatch Insights for log analysis","Implement composite alarms","Use custom metrics for application data","Enable detailed monitoring when needed"],pricing:"First 10 custom metrics free, then $0.30 per metric per month"}];filteredServices=[];ngOnInit(){this.filteredServices=this.awsServices}filterServices(){this.filteredServices=this.awsServices.filter(a=>{let e=a.name.toLowerCase().includes(this.searchTerm.toLowerCase())||a.description.toLowerCase().includes(this.searchTerm.toLowerCase()),r=this.selectedCategory==="all"||a.category===this.selectedCategory;return e&&r})}toggleService(a){this.expandedService===a?this.expandedService=null:(this.expandedService=a,this.activeTab[a]||(this.activeTab[a]="cli"))}setActiveTab(a,e){this.activeTab[a]=e}isExpanded(a){return this.expandedService===a}getActiveTab(a){return this.activeTab[a]||"cli"}openModal(a){this.selectedService=a,this.isModalOpen=!0,this.activeTab[a.name]||(this.activeTab[a.name]="cli")}closeModal(){this.isModalOpen=!1,setTimeout(()=>{this.selectedService=null},300)}getCategoryIcon(a){return{all:"apps",Compute:"computer",Storage:"storage",Database:"database",Networking:"lan",Security:"security",DevOps:"code","Machine Learning":"psychology",Serverless:"functions"}[a]||"category"}getServiceIcon(a){return{EC2:"computer",Lambda:"functions",S3:"storage",RDS:"database",DynamoDB:"table_chart",VPC:"lan",CloudFront:"cloud","Route 53":"dns",IAM:"security",CloudWatch:"monitoring",ECS:"view_in_ar",EKS:"view_in_ar",SageMaker:"psychology",SNS:"notifications",SQS:"queue","API Gateway":"api",CloudFormation:"account_tree","Elastic Beanstalk":"cloud_upload"}[a.name]||"cloud"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=_({type:n,selectors:[["app-aws-dashboard"]],decls:50,vars:12,consts:[[1,"min-h-screen","bg-dark-bg"],[1,"bg-dark-card","border-b","border-dark-border"],[1,"container","mx-auto","px-6","py-5"],[1,"flex","items-center","justify-between","mb-4"],[1,"flex","items-center","space-x-4"],[1,"w-10","h-10","bg-accent-orange","rounded-lg","flex","items-center","justify-center"],["fill","currentColor","viewBox","0 0 24 24",1,"w-6","h-6","text-white"],["d","M13 10V3L4 14h7v7l9-11h-7z"],[1,"text-2xl","font-bold","text-white"],[1,"text-gray-400","text-sm"],[1,"flex","items-center","gap-3"],[1,"flex","items-center","gap-2","bg-dark-sidebar","px-3","py-2","rounded-lg"],[1,"w-8","h-8","rounded-full","bg-accent-orange","flex","items-center","justify-center","text-white","text-sm","font-bold"],[1,"text-white","text-sm","font-medium"],["title","Toggle language",1,"flex","items-center","space-x-2","px-4","py-2","bg-accent-orange","text-white","rounded-lg","hover:bg-opacity-90","transition-all","duration-200",3,"click"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-4","h-4"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"],[1,"font-semibold","text-sm"],[1,"mt-4"],[1,"flex","items-center","justify-between","mb-2"],["fill","currentColor","viewBox","0 0 20 20",1,"w-5","h-5","text-yellow-500"],["d","M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"],[1,"w-full","bg-dark-sidebar","rounded-full","h-2.5"],[1,"bg-accent-orange","h-2.5","rounded-full",2,"width","45%"],[1,"container","mx-auto","px-6","py-6"],[1,"bg-dark-card","rounded-xl","border","border-dark-border","p-6","mb-6"],[1,"flex","flex-col","md:flex-row","gap-4"],[1,"flex-1"],[1,"relative"],["title","Search services","type","text",1,"w-full","px-4","py-3","pl-12","bg-dark-sidebar","text-white","border","border-dark-border","rounded-lg","focus:outline-none","focus:ring-2","focus:ring-accent-orange","focus:border-accent-orange","placeholder-gray-500",3,"ngModelChange","input","ngModel","placeholder","title"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"absolute","left-4","top-3.5","w-5","h-5","text-gray-500"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"],[1,"flex","flex-wrap","gap-2","mt-4"],["class","px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-accent-orange hover:text-white flex items-center gap-2",3,"bg-accent-orange","text-white","bg-dark-sidebar","text-gray-400","click",4,"ngFor","ngForOf"],[1,"mt-4","text-gray-400","text-sm"],[1,"font-semibold","text-accent-orange"],[1,"grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-6"],["class","bg-dark-card border border-dark-border rounded-xl hover:border-accent-orange transition-all duration-300 overflow-hidden group hover:shadow-xl hover:shadow-accent-orange/10",4,"ngFor","ngForOf"],["class","fixed inset-0 z-50 overflow-y-auto",3,"click",4,"ngIf"],[1,"px-4","py-2","rounded-lg","text-sm","font-medium","transition-all","duration-200","hover:bg-accent-orange","hover:text-white","flex","items-center","gap-2",3,"click"],[1,"!text-lg"],[1,"bg-dark-card","border","border-dark-border","rounded-xl","hover:border-accent-orange","transition-all","duration-300","overflow-hidden","group","hover:shadow-xl","hover:shadow-accent-orange/10"],[1,"p-6"],[1,"flex","items-start","justify-between","mb-4"],[1,"flex","items-center","space-x-3"],[1,"w-14","h-14","bg-dark-sidebar","group-hover:bg-accent-orange","rounded-xl","flex","items-center","justify-center","text-accent-orange","group-hover:text-white","font-bold","text-2xl","transition-all","duration-300","shadow-lg"],[1,"!text-3xl"],[1,"text-xl","font-bold","text-white","mb-2","group-hover:text-accent-orange","transition-colors"],[1,"inline-block","px-3","py-1","text-xs","font-semibold","rounded-full","bg-accent-orange/10","text-accent-orange","mb-3"],[1,"text-gray-400","text-sm","leading-relaxed"],[1,"px-6","pb-6"],[1,"w-full","px-4","py-3","bg-accent-orange","text-white","rounded-lg","hover:bg-opacity-90","transition-all","duration-200","text-sm","font-semibold","flex","items-center","justify-center","gap-2","group-hover:shadow-lg",3,"click"],[1,"fixed","inset-0","z-50","overflow-y-auto",3,"click"],[1,"flex","items-center","justify-center","min-h-screen","px-4","pt-4","pb-20","text-center","sm:block","sm:p-0"],["aria-hidden","true",1,"fixed","inset-0","transition-opacity","bg-black","bg-opacity-80"],["aria-hidden","true",1,"hidden","sm:inline-block","sm:align-middle","sm:h-screen"],[1,"inline-block","align-bottom","bg-dark-card","border","border-dark-border","rounded-xl","text-left","overflow-hidden","shadow-2xl","transform","transition-all","sm:my-8","sm:align-middle","sm:max-w-4xl","sm:w-full",3,"click"],[1,"bg-dark-sidebar","border-b","border-dark-border","px-6","py-4"],[1,"flex","items-center","justify-between"],[1,"w-14","h-14","bg-accent-orange","rounded-xl","flex","items-center","justify-center","text-white","shadow-lg"],[1,"text-xl","font-bold","text-white"],[1,"inline-block","px-3","py-1","text-xs","font-semibold","rounded-full","bg-accent-orange/20","text-accent-orange","mt-1"],["title","Close modal",1,"text-gray-400","hover:text-accent-orange","transition-colors",3,"click"],["fill","none","stroke","currentColor","viewBox","0 0 24 24",1,"w-6","h-6"],["stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M6 18L18 6M6 6l12 12"],[1,"text-gray-400","text-sm","mt-3"],[1,"bg-dark-card","px-6","py-6","max-h-[70vh]","overflow-y-auto"],[1,"mb-6"],[1,"font-semibold","text-white","mb-3","flex","items-center","text-lg"],["fill","currentColor","viewBox","0 0 20 20",1,"w-5","h-5","mr-2","text-accent-orange"],["fill-rule","evenodd","d","M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule","evenodd"],[1,"space-y-2"],["class","flex items-start text-sm text-gray-300",4,"ngFor","ngForOf"],[1,"font-semibold","text-white","mb-3","text-lg"],[1,"flex","border-b","border-dark-border","mb-4"],[1,"px-4","py-2","font-medium","text-sm","border-b-2","transition-colors","hover:text-accent-orange",3,"click"],[1,"px-4","py-2","font-medium","text-sm","border-b-2","border-transparent","transition-colors",3,"click"],[1,"bg-gray-900","rounded-lg","p-4","overflow-x-auto"],[4,"ngIf"],[1,"bg-gray-50","px-6","py-4","flex","justify-end","gap-3"],["target","_blank",1,"px-6","py-2","bg-aws-orange","text-white","rounded-lg","hover:bg-opacity-90","transition-all","duration-200","font-semibold",3,"href"],[1,"px-6","py-2","border-2","border-gray-300","text-gray-700","rounded-lg","hover:bg-gray-100","transition-all","duration-200","font-semibold",3,"click"],[1,"flex","items-start","text-sm","text-gray-300"],["fill","currentColor","viewBox","0 0 20 20",1,"w-4","h-4","mr-2","text-green-500","mt-0.5","flex-shrink-0"],["fill-rule","evenodd","d","M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z","clip-rule","evenodd"],[1,"text-green-400","text-sm"],[4,"ngFor","ngForOf"],[1,"text-blue-300","text-sm"],[1,"text-yellow-300","text-sm"],[1,"text-orange-300","text-sm"]],template:function(e,r){e&1&&(t(0,"div",0)(1,"header",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),h(),t(6,"svg",6),v(7,"path",7),s()(),w(),t(8,"div")(9,"h1",8),o(10),s(),t(11,"p",9),o(12),s()()(),t(13,"div",10)(14,"div",11)(15,"div",12),o(16," YC "),s(),t(17,"span",13),o(18,"Alex Chen"),s()(),t(19,"button",14),m("click",function(){return r.toggleLanguage()}),h(),t(20,"svg",15),v(21,"path",16),s(),w(),t(22,"span",17),o(23),s()()()(),t(24,"div",18)(25,"div",19)(26,"span",13),o(27,"Overall Progress: 45%"),s(),h(),t(28,"svg",20),v(29,"path",21),s()(),w(),t(30,"div",22),v(31,"div",23),s()()()(),t(32,"div",24)(33,"div",25)(34,"div",26)(35,"div",27)(36,"div",28)(37,"input",29),I("ngModelChange",function(f){return E(r.searchTerm,f)||(r.searchTerm=f),f}),m("input",function(){return r.filterServices()}),s(),h(),t(38,"svg",30),v(39,"path",31),s()()()(),w(),t(40,"div",32),x(41,F,5,10,"button",33),s(),t(42,"div",34),o(43),t(44,"span",35),o(45),s(),o(46),s()(),t(47,"div",36),x(48,G,19,5,"div",37),s()(),x(49,Q,52,36,"div",38),s()),e&2&&(i(10),l(r.t.title),i(2),l(r.t.subtitle),i(11),l(r.currentLang==="en"?"ES":"EN"),i(14),A("ngModel",r.searchTerm),u("placeholder",r.t.searchPlaceholder)("title",r.t.searchPlaceholder),i(4),u("ngForOf",r.categories),i(2),p(" ",r.t.showing," "),i(2),l(r.filteredServices.length),i(),p(" ",r.t.services," "),i(2),u("ngForOf",r.filteredServices),i(),u("ngIf",r.isModalOpen&&r.selectedService))},dependencies:[U,P,D,W,M,T,L,R,j],styles:[".animate-fadeIn[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease-in-out}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}pre[_ngcontent-%COMP%]::-webkit-scrollbar{height:8px}pre[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#1a1a1a}pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#4a4a4a;border-radius:4px}pre[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#666}*[_ngcontent-%COMP%]{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}button[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{transition-duration:.2s}"]})};export{B as a};
