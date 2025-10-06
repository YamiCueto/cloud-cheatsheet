import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AwsService {
  name: string;
  category: string;
  description: string;
  icon: string;
  docUrl: string;
  useCases: string[];
  cliExamples: string[];
  sdkExamples: {
    node?: string;
    python?: string;
    java?: string;
  };
  bestPractices: string[];
  pricing: string;
}

@Component({
  selector: 'app-aws-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './aws-dashboard.component.html',
  styleUrls: ['./aws-dashboard.component.css']
})
export class AwsDashboardComponent implements OnInit {
  searchTerm: string = '';
  selectedCategory: string = 'all';
  expandedService: string | null = null;
  activeTab: { [key: string]: string } = {};
  selectedService: AwsService | null = null;
  isModalOpen: boolean = false;

  categories = [
    'all',
    'Compute',
    'Storage',
    'Database',
    'Networking',
    'Security',
    'DevOps'
  ];

  awsServices: AwsService[] = [
    // COMPUTE
    {
      name: 'EC2',
      category: 'Compute',
      description: 'Virtual servers in the cloud. Scalable computing capacity.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/ec2/',
      useCases: [
        'Web applications hosting',
        'Development and test environments',
        'High-performance computing',
        'Machine learning training'
      ],
      cliExamples: [
        '# List all EC2 instances\naws ec2 describe-instances',
        '# Launch a new instance\naws ec2 run-instances --image-id ami-xxxxx --instance-type t2.micro',
        '# Stop an instance\naws ec2 stop-instances --instance-ids i-xxxxx',
        '# Terminate an instance\naws ec2 terminate-instances --instance-ids i-xxxxx'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

// List instances
ec2.describeInstances({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

ec2 = boto3.client('ec2')

# List instances
response = ec2.describe_instances()
print(response)`,
        java: `EC2Client ec2 = EC2Client.create();

DescribeInstancesResponse response =
  ec2.describeInstances();

response.reservations().forEach(
  reservation -> {
    reservation.instances().forEach(
      instance -> System.out.println(instance)
    );
  }
);`
      },
      bestPractices: [
        'Use Auto Scaling Groups for high availability',
        'Enable detailed monitoring for production instances',
        'Use IAM roles instead of access keys',
        'Implement proper security groups and NACLs',
        'Tag resources for better organization'
      ],
      pricing: '$0.0116/hour for t2.micro (Linux, us-east-1)'
    },
    {
      name: 'Lambda',
      category: 'Compute',
      description: 'Run code without provisioning servers. Pay only for compute time.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/lambda/',
      useCases: [
        'Event-driven applications',
        'Microservices backends',
        'Data processing pipelines',
        'Scheduled tasks and cron jobs'
      ],
      cliExamples: [
        '# List functions\naws lambda list-functions',
        '# Invoke a function\naws lambda invoke --function-name my-function output.json',
        '# Update function code\naws lambda update-function-code --function-name my-function --zip-file fileb://function.zip',
        '# Create function\naws lambda create-function --function-name my-function --runtime nodejs18.x --role arn:aws:iam::xxx:role/lambda-role --handler index.handler --zip-file fileb://function.zip'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

// Invoke function
const params = {
  FunctionName: 'myFunction',
  Payload: JSON.stringify({ key: 'value' })
};

lambda.invoke(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3
import json

lambda_client = boto3.client('lambda')

response = lambda_client.invoke(
    FunctionName='myFunction',
    Payload=json.dumps({'key': 'value'})
)

print(response['Payload'].read())`,
        java: `LambdaClient lambda = LambdaClient.create();

InvokeRequest request = InvokeRequest.builder()
  .functionName("myFunction")
  .payload(SdkBytes.fromUtf8String(
    "{\\"key\\":\\"value\\"}"
  ))
  .build();

InvokeResponse response = lambda.invoke(request);`
      },
      bestPractices: [
        'Keep functions small and focused',
        'Use environment variables for configuration',
        'Implement proper error handling and retries',
        'Monitor with CloudWatch Logs and metrics',
        'Use layers for shared dependencies'
      ],
      pricing: '$0.20 per 1M requests + $0.0000166667 per GB-second'
    },
    {
      name: 'ECS',
      category: 'Compute',
      description: 'Fully managed container orchestration service.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/ecs/',
      useCases: [
        'Containerized applications',
        'Microservices architecture',
        'Batch processing',
        'CI/CD pipelines'
      ],
      cliExamples: [
        '# List clusters\naws ecs list-clusters',
        '# Create a cluster\naws ecs create-cluster --cluster-name my-cluster',
        '# List services\naws ecs list-services --cluster my-cluster',
        '# Update service\naws ecs update-service --cluster my-cluster --service my-service --desired-count 3'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const ecs = new AWS.ECS();

ecs.listClusters({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

ecs = boto3.client('ecs')
response = ecs.list_clusters()
print(response)`,
        java: `EcsClient ecs = EcsClient.create();
ListClustersResponse response =
  ecs.listClusters();
System.out.println(response);`
      },
      bestPractices: [
        'Use Fargate for serverless containers',
        'Implement health checks',
        'Use task definitions versioning',
        'Enable container insights',
        'Use service discovery for microservices'
      ],
      pricing: 'Fargate: $0.04048 per vCPU per hour + $0.004445 per GB per hour'
    },
    {
      name: 'EKS',
      category: 'Compute',
      description: 'Managed Kubernetes service for running containerized applications.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/eks/',
      useCases: [
        'Kubernetes workloads',
        'Cloud-native applications',
        'Multi-cloud deployments',
        'Advanced orchestration needs'
      ],
      cliExamples: [
        '# Create cluster\naws eks create-cluster --name my-cluster --role-arn arn:aws:iam::xxx:role/eks-role --resources-vpc-config subnetIds=subnet-xxx,securityGroupIds=sg-xxx',
        '# List clusters\naws eks list-clusters',
        '# Update kubeconfig\naws eks update-kubeconfig --name my-cluster',
        '# Describe cluster\naws eks describe-cluster --name my-cluster'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const eks = new AWS.EKS();

eks.listClusters({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

eks = boto3.client('eks')
response = eks.list_clusters()
print(response)`,
        java: `EksClient eks = EksClient.create();
ListClustersResponse response =
  eks.listClusters();
System.out.println(response);`
      },
      bestPractices: [
        'Use managed node groups',
        'Enable cluster logging',
        'Implement RBAC properly',
        'Use AWS Load Balancer Controller',
        'Regular cluster updates'
      ],
      pricing: '$0.10 per hour per cluster + EC2/Fargate costs'
    },

    // STORAGE
    {
      name: 'S3',
      category: 'Storage',
      description: 'Object storage service with 99.999999999% durability.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/s3/',
      useCases: [
        'Static website hosting',
        'Data backup and archiving',
        'Data lakes and analytics',
        'Content distribution'
      ],
      cliExamples: [
        '# List buckets\naws s3 ls',
        '# Create bucket\naws s3 mb s3://my-bucket',
        '# Upload file\naws s3 cp myfile.txt s3://my-bucket/',
        '# Sync directory\naws s3 sync ./local-folder s3://my-bucket/folder'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
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
});`,
        python: `import boto3

s3 = boto3.client('s3')

# Upload file
s3.put_object(
    Bucket='my-bucket',
    Key='myfile.txt',
    Body=b'Hello World'
)`,
        java: `S3Client s3 = S3Client.create();

PutObjectRequest request =
  PutObjectRequest.builder()
    .bucket("my-bucket")
    .key("myfile.txt")
    .build();

s3.putObject(request,
  RequestBody.fromString("Hello World"));`
      },
      bestPractices: [
        'Enable versioning for important data',
        'Use lifecycle policies for cost optimization',
        'Enable encryption at rest',
        'Implement proper bucket policies',
        'Use CloudFront for content delivery'
      ],
      pricing: '$0.023 per GB/month (Standard, first 50 TB)'
    },
    {
      name: 'EFS',
      category: 'Storage',
      description: 'Scalable, elastic file storage for use with AWS Cloud services and on-premises.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/efs/',
      useCases: [
        'Shared file storage for EC2',
        'Container storage',
        'Content management systems',
        'Development environments'
      ],
      cliExamples: [
        '# Create file system\naws efs create-file-system --performance-mode generalPurpose',
        '# List file systems\naws efs describe-file-systems',
        '# Create mount target\naws efs create-mount-target --file-system-id fs-xxx --subnet-id subnet-xxx',
        '# Delete file system\naws efs delete-file-system --file-system-id fs-xxx'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const efs = new AWS.EFS();

efs.describeFileSystems({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

efs = boto3.client('efs')
response = efs.describe_file_systems()
print(response)`,
        java: `EfsClient efs = EfsClient.create();
DescribeFileSystemsResponse response =
  efs.describeFileSystems();
System.out.println(response);`
      },
      bestPractices: [
        'Use EFS Infrequent Access for cost savings',
        'Enable encryption in transit',
        'Use VPC security groups properly',
        'Monitor performance metrics',
        'Use lifecycle management'
      ],
      pricing: '$0.30 per GB/month (Standard) + $0.01 per GB/month (IA)'
    },
    {
      name: 'Glacier',
      category: 'Storage',
      description: 'Low-cost archive storage with retrieval times from minutes to hours.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/glacier/',
      useCases: [
        'Long-term backup',
        'Compliance archiving',
        'Digital preservation',
        'Disaster recovery'
      ],
      cliExamples: [
        '# Create vault\naws glacier create-vault --account-id - --vault-name my-vault',
        '# List vaults\naws glacier list-vaults --account-id -',
        '# Upload archive\naws glacier upload-archive --account-id - --vault-name my-vault --body myfile.zip',
        '# Initiate job (retrieval)\naws glacier initiate-job --account-id - --vault-name my-vault --job-parameters \'{"Type":"archive-retrieval","ArchiveId":"xxx"}\''
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const glacier = new AWS.Glacier();

const params = {
  accountId: '-',
  vaultName: 'my-vault'
};

glacier.listVaults(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

glacier = boto3.client('glacier')
response = glacier.list_vaults(
    accountId='-'
)
print(response)`,
        java: `GlacierClient glacier = GlacierClient.create();
ListVaultsResponse response =
  glacier.listVaults(
    ListVaultsRequest.builder()
      .accountId("-")
      .build()
  );`
      },
      bestPractices: [
        'Use S3 Glacier storage classes for easier management',
        'Plan retrieval times carefully',
        'Use vault lock for compliance',
        'Tag archives for organization',
        'Consider Deep Archive for rarely accessed data'
      ],
      pricing: '$0.004 per GB/month (Flexible Retrieval)'
    },

    // DATABASE
    {
      name: 'RDS',
      category: 'Database',
      description: 'Managed relational database service supporting multiple engines.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/rds/',
      useCases: [
        'Web and mobile applications',
        'E-commerce platforms',
        'Enterprise applications',
        'Online gaming'
      ],
      cliExamples: [
        '# Create DB instance\naws rds create-db-instance --db-instance-identifier mydb --db-instance-class db.t3.micro --engine mysql --master-username admin --master-user-password mypassword --allocated-storage 20',
        '# List DB instances\naws rds describe-db-instances',
        '# Create snapshot\naws rds create-db-snapshot --db-instance-identifier mydb --db-snapshot-identifier mydb-snapshot',
        '# Modify instance\naws rds modify-db-instance --db-instance-identifier mydb --allocated-storage 30'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const rds = new AWS.RDS();

rds.describeDBInstances({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

rds = boto3.client('rds')
response = rds.describe_db_instances()
print(response)`,
        java: `RdsClient rds = RdsClient.create();
DescribeDbInstancesResponse response =
  rds.describeDBInstances();
System.out.println(response);`
      },
      bestPractices: [
        'Enable automated backups',
        'Use Multi-AZ for production',
        'Enable encryption at rest',
        'Use parameter groups for configuration',
        'Monitor with Enhanced Monitoring'
      ],
      pricing: 'db.t3.micro: $0.017/hour (MySQL)'
    },
    {
      name: 'DynamoDB',
      category: 'Database',
      description: 'Fast, flexible NoSQL database service for any scale.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/dynamodb/',
      useCases: [
        'Mobile and web applications',
        'Gaming leaderboards',
        'IoT data storage',
        'Session management'
      ],
      cliExamples: [
        '# Create table\naws dynamodb create-table --table-name MyTable --attribute-definitions AttributeName=Id,AttributeType=S --key-schema AttributeName=Id,KeyType=HASH --billing-mode PAY_PER_REQUEST',
        '# Put item\naws dynamodb put-item --table-name MyTable --item \'{"Id":{"S":"123"},"Name":{"S":"John"}}\'',
        '# Get item\naws dynamodb get-item --table-name MyTable --key \'{"Id":{"S":"123"}}\'',
        '# Scan table\naws dynamodb scan --table-name MyTable'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

// Put item
const params = {
  TableName: 'MyTable',
  Item: { Id: '123', Name: 'John' }
};

dynamodb.put(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('MyTable')

# Put item
table.put_item(
    Item={'Id': '123', 'Name': 'John'}
)`,
        java: `DynamoDbClient dynamodb = DynamoDbClient.create();

PutItemRequest request =
  PutItemRequest.builder()
    .tableName("MyTable")
    .item(Map.of(
      "Id", AttributeValue.builder().s("123").build(),
      "Name", AttributeValue.builder().s("John").build()
    ))
    .build();

dynamodb.putItem(request);`
      },
      bestPractices: [
        'Use on-demand billing for unpredictable workloads',
        'Implement proper partition key design',
        'Use Global Secondary Indexes wisely',
        'Enable Point-in-Time Recovery',
        'Use DynamoDB Streams for change tracking'
      ],
      pricing: '$1.25 per million write requests + $0.25 per million read requests (on-demand)'
    },
    {
      name: 'Aurora',
      category: 'Database',
      description: 'MySQL and PostgreSQL-compatible relational database built for the cloud.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/aurora/',
      useCases: [
        'Enterprise applications',
        'SaaS applications',
        'High-performance applications',
        'Applications requiring high availability'
      ],
      cliExamples: [
        '# Create Aurora cluster\naws rds create-db-cluster --db-cluster-identifier my-aurora-cluster --engine aurora-mysql --master-username admin --master-user-password mypassword',
        '# Create DB instance in cluster\naws rds create-db-instance --db-instance-identifier aurora-instance-1 --db-instance-class db.t3.small --engine aurora-mysql --db-cluster-identifier my-aurora-cluster',
        '# List clusters\naws rds describe-db-clusters',
        '# Create cluster snapshot\naws rds create-db-cluster-snapshot --db-cluster-identifier my-aurora-cluster --db-cluster-snapshot-identifier my-snapshot'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const rds = new AWS.RDS();

rds.describeDBClusters({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

rds = boto3.client('rds')
response = rds.describe_db_clusters()
print(response)`,
        java: `RdsClient rds = RdsClient.create();
DescribeDbClustersResponse response =
  rds.describeDBClusters();
System.out.println(response);`
      },
      bestPractices: [
        'Use Aurora Serverless for variable workloads',
        'Enable backtrack for quick point-in-time recovery',
        'Use reader endpoints for read scaling',
        'Enable Performance Insights',
        'Consider Aurora Global Database for disaster recovery'
      ],
      pricing: 'db.t3.small: $0.041/hour + $0.10 per GB-month storage + I/O costs'
    },

    // NETWORKING
    {
      name: 'VPC',
      category: 'Networking',
      description: 'Isolated virtual network for your AWS resources.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/vpc/',
      useCases: [
        'Network isolation',
        'Multi-tier applications',
        'Hybrid cloud architectures',
        'Secure application hosting'
      ],
      cliExamples: [
        '# Create VPC\naws ec2 create-vpc --cidr-block 10.0.0.0/16',
        '# Create subnet\naws ec2 create-subnet --vpc-id vpc-xxx --cidr-block 10.0.1.0/24',
        '# Create internet gateway\naws ec2 create-internet-gateway',
        '# Attach internet gateway\naws ec2 attach-internet-gateway --vpc-id vpc-xxx --internet-gateway-id igw-xxx'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const ec2 = new AWS.EC2();

ec2.describeVpcs({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

ec2 = boto3.client('ec2')
response = ec2.describe_vpcs()
print(response)`,
        java: `Ec2Client ec2 = Ec2Client.create();
DescribeVpcsResponse response =
  ec2.describeVpcs();
System.out.println(response);`
      },
      bestPractices: [
        'Use multiple availability zones',
        'Implement proper subnet design',
        'Use VPC Flow Logs for monitoring',
        'Implement security groups and NACLs',
        'Use VPC endpoints for AWS services'
      ],
      pricing: 'No charge for VPC itself, costs for associated resources'
    },
    {
      name: 'CloudFront',
      category: 'Networking',
      description: 'Content Delivery Network (CDN) service for fast content delivery.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/cloudfront/',
      useCases: [
        'Website acceleration',
        'Video streaming',
        'API acceleration',
        'Software distribution'
      ],
      cliExamples: [
        '# Create distribution\naws cloudfront create-distribution --distribution-config file://dist-config.json',
        '# List distributions\naws cloudfront list-distributions',
        '# Create invalidation\naws cloudfront create-invalidation --distribution-id E123456 --paths "/*"',
        '# Get distribution config\naws cloudfront get-distribution-config --id E123456'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const cloudfront = new AWS.CloudFront();

cloudfront.listDistributions({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

cloudfront = boto3.client('cloudfront')
response = cloudfront.list_distributions()
print(response)`,
        java: `CloudFrontClient cloudfront =
  CloudFrontClient.create();
ListDistributionsResponse response =
  cloudfront.listDistributions();`
      },
      bestPractices: [
        'Use Origin Access Identity with S3',
        'Enable compression',
        'Use custom SSL certificates',
        'Implement proper cache behaviors',
        'Monitor with CloudWatch metrics'
      ],
      pricing: '$0.085 per GB (first 10 TB/month, US/Europe)'
    },
    {
      name: 'Route 53',
      category: 'Networking',
      description: 'Scalable Domain Name System (DNS) web service.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/route53/',
      useCases: [
        'Domain registration',
        'DNS routing',
        'Health checking',
        'Traffic management'
      ],
      cliExamples: [
        '# Create hosted zone\naws route53 create-hosted-zone --name example.com --caller-reference 2024-01-01',
        '# List hosted zones\naws route53 list-hosted-zones',
        '# Change record sets\naws route53 change-resource-record-sets --hosted-zone-id Z123456 --change-batch file://changes.json',
        '# List resource record sets\naws route53 list-resource-record-sets --hosted-zone-id Z123456'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const route53 = new AWS.Route53();

route53.listHostedZones({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

route53 = boto3.client('route53')
response = route53.list_hosted_zones()
print(response)`,
        java: `Route53Client route53 = Route53Client.create();
ListHostedZonesResponse response =
  route53.listHostedZones();
System.out.println(response);`
      },
      bestPractices: [
        'Use health checks with failover',
        'Implement geo-routing for global applications',
        'Use alias records for AWS resources',
        'Enable DNSSEC for security',
        'Monitor query metrics'
      ],
      pricing: '$0.50 per hosted zone/month + $0.40 per million queries'
    },
    {
      name: 'API Gateway',
      category: 'Networking',
      description: 'Fully managed service for creating, publishing, and managing APIs.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/apigateway/',
      useCases: [
        'RESTful APIs',
        'WebSocket APIs',
        'Serverless backends',
        'Microservices gateways'
      ],
      cliExamples: [
        '# Create REST API\naws apigateway create-rest-api --name my-api',
        '# Get APIs\naws apigateway get-rest-apis',
        '# Create deployment\naws apigateway create-deployment --rest-api-id abc123 --stage-name prod',
        '# Create usage plan\naws apigateway create-usage-plan --name my-plan'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const apigateway = new AWS.APIGateway();

apigateway.getRestApis({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

apigateway = boto3.client('apigateway')
response = apigateway.get_rest_apis()
print(response)`,
        java: `ApiGatewayClient apigateway =
  ApiGatewayClient.create();
GetRestApisResponse response =
  apigateway.getRestApis();`
      },
      bestPractices: [
        'Use API keys and usage plans',
        'Implement request validation',
        'Enable CloudWatch logging',
        'Use Lambda authorizers for custom auth',
        'Implement throttling and rate limiting'
      ],
      pricing: '$3.50 per million API calls (REST) + data transfer'
    },

    // SECURITY
    {
      name: 'IAM',
      category: 'Security',
      description: 'Identity and Access Management for secure access control.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/iam/',
      useCases: [
        'User access management',
        'Role-based access control',
        'Service permissions',
        'Cross-account access'
      ],
      cliExamples: [
        '# Create user\naws iam create-user --user-name john',
        '# Create role\naws iam create-role --role-name my-role --assume-role-policy-document file://trust-policy.json',
        '# Attach policy\naws iam attach-user-policy --user-name john --policy-arn arn:aws:iam::aws:policy/ReadOnlyAccess',
        '# List users\naws iam list-users'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const iam = new AWS.IAM();

iam.listUsers({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

iam = boto3.client('iam')
response = iam.list_users()
print(response)`,
        java: `IamClient iam = IamClient.create();
ListUsersResponse response =
  iam.listUsers();
System.out.println(response);`
      },
      bestPractices: [
        'Use MFA for privileged users',
        'Follow principle of least privilege',
        'Use roles instead of long-term credentials',
        'Regularly rotate credentials',
        'Enable CloudTrail for auditing'
      ],
      pricing: 'Free service'
    },
    {
      name: 'KMS',
      category: 'Security',
      description: 'Key Management Service for creating and controlling encryption keys.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/kms/',
      useCases: [
        'Data encryption',
        'Digital signing',
        'Compliance requirements',
        'Envelope encryption'
      ],
      cliExamples: [
        '# Create key\naws kms create-key --description "My encryption key"',
        '# List keys\naws kms list-keys',
        '# Encrypt data\naws kms encrypt --key-id alias/my-key --plaintext "Hello World"',
        '# Decrypt data\naws kms decrypt --ciphertext-blob fileb://encrypted.dat'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const kms = new AWS.KMS();

const params = {
  KeyId: 'alias/my-key',
  Plaintext: 'Hello World'
};

kms.encrypt(params, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

kms = boto3.client('kms')
response = kms.encrypt(
    KeyId='alias/my-key',
    Plaintext=b'Hello World'
)
print(response)`,
        java: `KmsClient kms = KmsClient.create();

EncryptRequest request =
  EncryptRequest.builder()
    .keyId("alias/my-key")
    .plaintext(SdkBytes.fromUtf8String("Hello"))
    .build();

EncryptResponse response = kms.encrypt(request);`
      },
      bestPractices: [
        'Use customer managed keys for control',
        'Enable key rotation',
        'Use grants for temporary permissions',
        'Implement key policies properly',
        'Monitor key usage with CloudTrail'
      ],
      pricing: '$1 per key per month + $0.03 per 10,000 requests'
    },
    {
      name: 'Cognito',
      category: 'Security',
      description: 'User identity and data synchronization service.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/cognito/',
      useCases: [
        'User authentication',
        'Mobile app user management',
        'Social identity providers',
        'Multi-factor authentication'
      ],
      cliExamples: [
        '# Create user pool\naws cognito-idp create-user-pool --pool-name my-user-pool',
        '# Create user\naws cognito-idp admin-create-user --user-pool-id us-east-1_xxx --username john',
        '# List user pools\naws cognito-idp list-user-pools --max-results 10',
        '# Create identity pool\naws cognito-identity create-identity-pool --identity-pool-name my-identity-pool --allow-unauthenticated-identities'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const cognito = new AWS.CognitoIdentityServiceProvider();

cognito.listUserPools({ MaxResults: 10 }, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

cognito = boto3.client('cognito-idp')
response = cognito.list_user_pools(
    MaxResults=10
)
print(response)`,
        java: `CognitoIdentityProviderClient cognito =
  CognitoIdentityProviderClient.create();

ListUserPoolsResponse response =
  cognito.listUserPools(
    ListUserPoolsRequest.builder()
      .maxResults(10)
      .build()
  );`
      },
      bestPractices: [
        'Enable MFA for sensitive applications',
        'Use hosted UI for quick implementation',
        'Implement password policies',
        'Use Lambda triggers for custom workflows',
        'Enable advanced security features'
      ],
      pricing: 'Free tier: 50,000 MAUs, then $0.0055 per MAU'
    },

    // DEVOPS
    {
      name: 'CloudFormation',
      category: 'DevOps',
      description: 'Infrastructure as Code service for modeling and provisioning resources.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/cloudformation/',
      useCases: [
        'Infrastructure automation',
        'Repeatable deployments',
        'Environment provisioning',
        'Disaster recovery'
      ],
      cliExamples: [
        '# Create stack\naws cloudformation create-stack --stack-name my-stack --template-body file://template.yaml',
        '# Update stack\naws cloudformation update-stack --stack-name my-stack --template-body file://template.yaml',
        '# Delete stack\naws cloudformation delete-stack --stack-name my-stack',
        '# Describe stack\naws cloudformation describe-stacks --stack-name my-stack'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const cloudformation = new AWS.CloudFormation();

cloudformation.describeStacks({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

cf = boto3.client('cloudformation')
response = cf.describe_stacks()
print(response)`,
        java: `CloudFormationClient cf =
  CloudFormationClient.create();
DescribeStacksResponse response =
  cf.describeStacks();`
      },
      bestPractices: [
        'Use nested stacks for modularity',
        'Implement change sets before updates',
        'Use parameters for flexibility',
        'Enable termination protection',
        'Version control your templates'
      ],
      pricing: 'Free for CloudFormation, pay for resources created'
    },
    {
      name: 'CodePipeline',
      category: 'DevOps',
      description: 'Continuous delivery service for fast and reliable updates.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/codepipeline/',
      useCases: [
        'CI/CD automation',
        'Release orchestration',
        'Deployment pipelines',
        'Multi-stage deployments'
      ],
      cliExamples: [
        '# Create pipeline\naws codepipeline create-pipeline --cli-input-json file://pipeline.json',
        '# Get pipeline\naws codepipeline get-pipeline --name my-pipeline',
        '# Start pipeline execution\naws codepipeline start-pipeline-execution --name my-pipeline',
        '# List pipelines\naws codepipeline list-pipelines'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const codepipeline = new AWS.CodePipeline();

codepipeline.listPipelines({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

codepipeline = boto3.client('codepipeline')
response = codepipeline.list_pipelines()
print(response)`,
        java: `CodePipelineClient codepipeline =
  CodePipelineClient.create();
ListPipelinesResponse response =
  codepipeline.listPipelines();`
      },
      bestPractices: [
        'Use manual approval for production',
        'Implement proper artifact management',
        'Use CodeBuild for build stages',
        'Enable notifications for failures',
        'Implement rollback strategies'
      ],
      pricing: '$1 per active pipeline per month'
    },
    {
      name: 'CloudWatch',
      category: 'DevOps',
      description: 'Monitoring and observability service for AWS resources and applications.',
      icon: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
      docUrl: 'https://docs.aws.amazon.com/cloudwatch/',
      useCases: [
        'Performance monitoring',
        'Log aggregation',
        'Alerting and notifications',
        'Application insights'
      ],
      cliExamples: [
        '# Put metric data\naws cloudwatch put-metric-data --namespace MyApp --metric-name PageViews --value 1',
        '# Get metric statistics\naws cloudwatch get-metric-statistics --namespace AWS/EC2 --metric-name CPUUtilization --start-time 2024-01-01T00:00:00Z --end-time 2024-01-01T23:59:59Z --period 3600 --statistics Average',
        '# Create alarm\naws cloudwatch put-metric-alarm --alarm-name cpu-alarm --alarm-description "CPU high" --metric-name CPUUtilization --namespace AWS/EC2 --statistic Average --period 300 --threshold 80 --comparison-operator GreaterThanThreshold',
        '# List alarms\naws cloudwatch describe-alarms'
      ],
      sdkExamples: {
        node: `const AWS = require('aws-sdk');
const cloudwatch = new AWS.CloudWatch();

cloudwatch.describeAlarms({}, (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});`,
        python: `import boto3

cloudwatch = boto3.client('cloudwatch')
response = cloudwatch.describe_alarms()
print(response)`,
        java: `CloudWatchClient cloudwatch =
  CloudWatchClient.create();
DescribeAlarmsResponse response =
  cloudwatch.describeAlarms();`
      },
      bestPractices: [
        'Create dashboards for key metrics',
        'Use CloudWatch Insights for log analysis',
        'Implement composite alarms',
        'Use custom metrics for application data',
        'Enable detailed monitoring when needed'
      ],
      pricing: 'First 10 custom metrics free, then $0.30 per metric per month'
    }
  ];

  filteredServices: AwsService[] = [];

  ngOnInit() {
    this.filteredServices = this.awsServices;
  }

  filterServices() {
    this.filteredServices = this.awsServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           service.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || service.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }

  toggleService(serviceName: string) {
    if (this.expandedService === serviceName) {
      this.expandedService = null;
    } else {
      this.expandedService = serviceName;
      if (!this.activeTab[serviceName]) {
        this.activeTab[serviceName] = 'cli';
      }
    }
  }

  setActiveTab(serviceName: string, tab: string) {
    this.activeTab[serviceName] = tab;
  }

  isExpanded(serviceName: string): boolean {
    return this.expandedService === serviceName;
  }

  getActiveTab(serviceName: string): string {
    return this.activeTab[serviceName] || 'cli';
  }

  openModal(service: AwsService) {
    this.selectedService = service;
    this.isModalOpen = true;
    if (!this.activeTab[service.name]) {
      this.activeTab[service.name] = 'cli';
    }
  }

  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedService = null;
    }, 300);
  }

}
