---
title: Intelligent Predictive Maintenance Platform
description: Deployable predictive maintenance application for Remaining Useful Life (RUL) estimation with inference API and monitoring dashboard.
slug: intelligent-predictive-maintenance
status: in-development
category: ai-ml
technologies:
  - Python
  - FastAPI
  - Scikit-learn or PyTorch
  - PostgreSQL
  - React
  - Docker
  - MLflow
image: /images/projects/predictive-maintenance.svg
featured: false
---

# Overview

The Intelligent Predictive Maintenance Platform turns the NASA C-MAPSS turbofan degradation analysis into a deployable predictive maintenance application. It will provide RUL prediction, an inference API, and a monitoring dashboard for maintenance alerts.

# Problem

Maintenance teams need actionable RUL predictions delivered through an application, not just a notebook. A deployable platform enables inference at scale, model tracking, and alerting.

# Objectives

- Ingest engine sensor data.
- Serve RUL predictions through a FastAPI inference API.
- Provide a React monitoring dashboard.
- Track models with MLflow.
- Generate maintenance alerts based on predicted RUL thresholds.

# Planned Features

- Data ingestion from sensor sources.
- Model inference (RUL estimation).
- Monitoring dashboard with degradation visualization.
- Maintenance alerts when RUL falls below thresholds.
- Model evaluation and experiment tracking.

# Planned Stack

- Python, FastAPI, Scikit-learn or PyTorch
- PostgreSQL (predictions and metadata)
- React (dashboard)
- Docker (deployment)
- MLflow (experiment tracking)

# Relationship to NASA C-MAPSS

This project builds on the NASA C-MAPSS Predictive Maintenance analysis. Once that analysis is complete and validated, its models will be integrated into this platform.

# Status

In development. The platform depends on the completion of the underlying NASA C-MAPSS analysis. No production deployment or validated results exist yet.

# Future Work

- Complete NASA C-MAPSS model training and validation.
- Build inference API and React dashboard.
- Deploy with Docker and configure monitoring.
