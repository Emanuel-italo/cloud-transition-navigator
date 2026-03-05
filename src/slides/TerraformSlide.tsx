import React from "react";
import ScaledSlide from "@/components/ScaledSlide";

const terraformCode = `# VPC + Subnets + ASG + RDS — Exemplo Sintético (AWS)
# Comentado em Português para apresentação

# Provider AWS - Região São Paulo
provider "aws" {
  region = "sa-east-1"
}

# VPC Principal
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "vpc-cartoes-prod", Environment = "production" }
}

# Subnets Públicas (ALB) - Multi-AZ
resource "aws_subnet" "public" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.\${count.index}.0/24"
  availability_zone = "sa-east-1\${count.index == 0 ? "a" : "b"}"
  map_public_ip_on_launch = true
  tags = { Name = "subnet-public-\${count.index}" }
}

# Subnets Privadas (App + DB) - Multi-AZ
resource "aws_subnet" "private" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.\${count.index + 10}.0/24"
  availability_zone = "sa-east-1\${count.index == 0 ? "a" : "b"}"
  tags = { Name = "subnet-private-\${count.index}" }
}

# Auto Scaling Group para aplicação
resource "aws_autoscaling_group" "app" {
  name                = "asg-cartoes-app"
  min_size            = 2       # Mínimo para HA
  max_size            = 50      # Burst para picos
  desired_capacity    = 4
  vpc_zone_identifier = aws_subnet.private[*].id
  health_check_type   = "ELB"
  health_check_grace_period = 300
  # ... launch template omitido por brevidade
}

# RDS PostgreSQL Multi-AZ
resource "aws_db_instance" "main" {
  identifier              = "rds-cartoes-prod"
  engine                  = "postgres"
  engine_version          = "15.4"
  instance_class          = "db.r6g.2xlarge"  # 8 vCPU, 64GB RAM
  allocated_storage       = 500                # GB
  max_allocated_storage   = 2000               # Auto-expand
  multi_az                = true               # HA automático
  storage_encrypted       = true               # AES-256
  kms_key_id              = aws_kms_key.db.arn
  db_subnet_group_name    = aws_db_subnet_group.main.name
  backup_retention_period = 35                 # 35 dias de backup
  tags = { Name = "rds-cartoes-prod", PCI = "true" }
}`;

const TerraformSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">IaC</p>
        <h2 className="slide-title text-4xl">Exemplo Terraform — Infraestrutura Base</h2>
        <p className="slide-subtitle mt-1">VPC + Subnets Multi-AZ + Auto Scaling + RDS PostgreSQL</p>
      </div>
      <div className="flex-1 metric-card overflow-hidden">
        <pre className="text-xs leading-relaxed text-secondary-foreground overflow-auto h-full font-mono">
          <code>{terraformCode}</code>
        </pre>
      </div>
    </div>
  </ScaledSlide>
);

export default TerraformSlide;
