---
title: DevOps and Software Quality
description: Git workflows, environment management, linting, testing, and CI/CD practices from my ongoing DevOps learning project.
slug: devops-quality
category: devops
tags:
  - devops
  - CI/CD
  - pytest
  - Docker
  - quality
status: in-progress
author: Asiimwe Ronald
pubDate: 2026-10-30
featured: true
order: 3
---

# DevOps and Software Quality

This article is based on my ongoing DevOps learning project. It documents what I have implemented and clearly separates it from what I am still learning.

## Implemented

- **Git and GitHub workflows** — feature branches, pull requests, and conventional commit messages.
- **Virtual environments** — isolated Python environments per project using `venv`.
- **Environment configuration** — `.env` files loaded via `python-dotenv`, with `.env.example` committed and real secrets gitignored.
- **Ruff linting** — fast, configurable Python linting integrated into the local workflow.
- **Code formatting** — consistent formatting with Ruff's formatter (or Black where already adopted).
- **Pytest** — unit and integration tests with fixtures and parametrization.
- **PowerShell quality-check scripts** — a single script that runs lint, format check, and tests before pushing.
- **Pre-commit discipline** — running checks locally before opening a pull request.

## Quality-Check Workflow

<div class="mermaid">
flowchart LR
    A[Developer writes code] --> B[PowerShell quality script]
    B --> C[Ruff lint]
    B --> D[Ruff format check]
    B --> E[Pytest]
    C --> F{All pass?}
    D --> F
    E --> F
    F -->|No| G[Fix and rerun]
    G --> B
    F -->|Yes| H[Commit and push]
    H --> I[GitHub Actions CI]
    I --> J[Build and test]
    J --> K{CI green?}
    K -->|No| G
    K -->|Yes| L[Merge]
</div>

## CI/CD Principles

- Every push triggers an automated pipeline: install, lint, type-check, test, build.
- The pipeline must be reproducible locally; "works on my machine" is not acceptable.
- Artifacts are built once and promoted, not rebuilt per environment.
- Secrets are injected by the platform, never committed.

## Docker and Deployment Workflows

- Applications are packaged into containers with pinned base images and dependency versions.
- Multi-stage builds keep production images small.
- Containers expose health checks and run as non-root where possible.
- Deployment is scripted; manual steps are documented as a fallback, not the primary path.

## Still Learning

The following are study goals rather than shipped experience. I label them honestly:

- Kubernetes orchestration and Helm charts.
- Infrastructure as code (Terraform).
- Advanced observability (distributed tracing, metrics pipelines).
- Blue/green and canary deployment strategies.
- Production incident response and on-call practices.

I have read about these and experimented in tutorials, but I have not yet operated them in production. They are part of my learning roadmap during the master's program.
