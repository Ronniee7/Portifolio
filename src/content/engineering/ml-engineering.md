---
title: Machine Learning Engineering
description: The lifecycle of an ML system from data ingestion to monitoring and retraining.
slug: ml-engineering
category: ml-engineering
tags:
  - machine learning
  - MLOps
  - scikit-learn
  - PyTorch
  - MLflow
status: in-progress
author: Asiimwe Ronald
pubDate: 2026-10-30
featured: true
order: 4
---

# Machine Learning Engineering

Machine learning engineering is the discipline of turning a model that works in a notebook into a system that works in production. The two are not the same problem.

## ML System Lifecycle

<div class="mermaid">
flowchart TD
    A[Data Ingestion] --> B[Data Validation]
    B --> C[Preprocessing]
    C --> D[Feature Engineering]
    D --> E[Training]
    E --> F[Evaluation]
    F --> G{Meets criteria?}
    G -->|No| C
    G -->|Yes| H[Model Versioning]
    H --> I[API Deployment]
    I --> J[Monitoring]
    J --> K{Drift detected?}
    K -->|Yes| A
    K -->|No| J
</div>

### 1. Data Ingestion

Collect data from sources (databases, files, APIs, streams) with explicit schemas. Record where the data came from and when. Never train on data whose provenance is unknown.

### 2. Data Validation

Check row counts, null rates, ranges, and categorical values against expectations. Fail loudly on schema drift. Tools: Great Expectations, Pandera, or hand-written checks for small projects.

### 3. Preprocessing

Impute missing values, encode categories, scale numerics. Fit preprocessors on training data only; apply the same transformation to validation and production data. Serialize the fitted preprocessor alongside the model.

### 4. Feature Engineering

Create features that encode domain knowledge. Keep feature definitions versioned and reproducible. Avoid leakage from the future into the past.

### 5. Training

Scripted, parameterized training runs. Fixed random seeds where determinism is possible. Track hyperparameters, data version, and code commit.

### 6. Evaluation

Hold out a test set that is never touched during development. Report metrics appropriate to the problem (accuracy, F1, AUC, MAE, RMSE). Evaluate on slices, not only aggregates, to catch subgroup failures.

### 7. Model Versioning

Store models and preprocessors as versioned artifacts with metadata: data version, code commit, metrics, environment. MLflow is a good fit; a structured file store with a manifest works for smaller projects.

### 8. API Deployment

Serve the model behind a typed API (FastAPI is my default). Validate input, return predictions with confidence where meaningful, and include model version in responses.

### 9. Monitoring

Track prediction volume, latency, input distributions, and output distributions. Alert on drift and errors. Monitoring is how you learn that the model has stopped working in production.

### 10. Retraining

Retraining is triggered by drift, new data, or scheduled cadence. It re-runs the pipeline, re-evaluates, and promotes a new version only if it passes gates.

## Tools

- **Python** — primary language.
- **scikit-learn** — classical ML, pipelines, evaluation.
- **PyTorch** — deep learning where needed.
- **FastAPI** — model serving.
- **MLflow** — experiment and model tracking.
- **Docker** — reproducible training and serving environments.
- **PostgreSQL** — structured data storage.

## Honest Scope

I have built classical ML pipelines and studied deep learning. End-to-end production MLOps with automated retraining, feature stores, and large-scale serving is a learning goal for my master's program, not a shipped system. I distinguish these clearly and do not claim operational experience I do not have.
