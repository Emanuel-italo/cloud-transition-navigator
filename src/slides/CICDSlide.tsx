import React from "react";
import ScaledSlide from "@/components/ScaledSlide";

const pipelineYaml = `# GitHub Actions - Pipeline CI/CD
# Deploy automatizado com aprovação para produção

name: Deploy Pipeline
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with: { node-version: '20' }
      
      - name: Install & Build
        run: |
          npm ci
          npm run build
          npm run test -- --coverage
      
      - name: Security Scan (SAST)
        uses: github/codeql-action/analyze@v3
      
      - name: Container Build & Push
        run: |
          docker build -t app:\${{ github.sha }} .
          aws ecr get-login-password | docker login --username AWS --password-stdin \$ECR_REPO
          docker push \$ECR_REPO:app:\${{ github.sha }}

  deploy-staging:
    needs: build-and-test
    if: github.ref == 'refs/heads/develop'
    runs-on: ubuntu-latest
    environment: staging
    steps:
      - name: Deploy to ECS Staging
        run: |
          aws ecs update-service --cluster staging \\
            --service app --force-new-deployment
      
      - name: Integration Tests
        run: npm run test:integration -- --env=staging
      
      - name: Performance Test
        run: k6 run tests/load-test.js --env=staging

  deploy-production:
    needs: build-and-test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment:
      name: production
      # ⚠️ Requer aprovação manual no GitHub
    steps:
      - name: Canary Deploy (10%)
        run: |
          aws ecs update-service --cluster prod \\
            --service app-canary --force-new-deployment
      
      - name: Monitor Canary (5 min)
        run: |
          sleep 300
          # Verificar métricas de erro < 0.1%
          python scripts/check_canary_health.py
      
      - name: Full Rollout (100%)
        run: |
          aws ecs update-service --cluster prod \\
            --service app --force-new-deployment`;

const CICDSlide: React.FC = () => (
  <ScaledSlide>
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">DevOps</p>
        <h2 className="slide-title text-4xl">Pipeline CI/CD — GitHub Actions</h2>
        <p className="slide-subtitle mt-1">Build → Test → Security Scan → Deploy (Canary) → Rollout</p>
      </div>
      <div className="flex-1 metric-card overflow-hidden">
        <pre className="text-xs leading-relaxed text-secondary-foreground overflow-auto h-full font-mono">
          <code>{pipelineYaml}</code>
        </pre>
      </div>
    </div>
  </ScaledSlide>
);

export default CICDSlide;
