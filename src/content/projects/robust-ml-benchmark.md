---
title: Robust Machine Learning Benchmark
description: Evaluate machine learning models under limited labelled data and distribution shifts with controlled experiments and statistical analysis.
slug: robust-ml-benchmark
status: planned
category: research
technologies:
  - Python
  - Scikit-learn
  - Pandas
  - NumPy
image: /images/projects/robust-ml-benchmark.svg
featured: false
---

# Overview

The Robust Machine Learning Benchmark is a planned research project to investigate how machine learning models perform under limited labelled data and distribution shifts. It will run controlled experiments comparing baseline models under data scarcity and shifted distributions.

# Problem

Models often fail in production when the deployment distribution differs from training data, or when labelled data is scarce. Understanding robustness and generalization under these conditions is critical for reliable machine learning.

# Objectives

- Evaluate baseline models across multiple datasets.
- Run controlled data scarcity experiments (limited labelled data).
- Simulate distribution shifts between training and deployment.
- Measure robustness and generalization under shift.
- Perform statistical comparisons and ensure reproducibility.

# Planned Features

- Multiple benchmark datasets.
- Baseline models (logistic regression, random forest, gradient boosting).
- Controlled data scarcity experiments (varying labelled sample sizes).
- Distribution shift simulation (covariate shift, label shift).
- Robustness evaluation metrics.
- Statistical comparisons across conditions.
- Reproducible experiment scripts and notebooks.

# Research Interests

This project connects to research interests in:
- Reliable machine learning
- Machine learning with limited labelled data
- Robustness and distribution shift
- Model evaluation and generalization

# Status

Planned. No experiments or results exist yet. Findings will be published only after controlled experiments are executed and validated.

# Future Work

- Execute experiments and publish reproducibility package.
- Compare robustness across model families.
- Write up findings as a technical report or research paper.
