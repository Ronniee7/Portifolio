---
title: NASA C-MAPSS Predictive Maintenance
description: Remaining Useful Life (RUL) estimation using the NASA C-MAPSS turbofan engine degradation dataset.
slug: nasa-cmapss-predictive-maintenance
status: in-development
category: ai-ml
technologies:
  - Python
  - Pandas
  - NumPy
  - Scikit-learn
  - Matplotlib
image: /images/projects/nasa-cmapss.svg
featured: true
date: 2026-07-01
---

# Overview

The NASA C-MAPSS Predictive Maintenance project applies machine learning to the NASA C-MAPSS turbofan engine degradation dataset for Remaining Useful Life (RUL) estimation. The goal is to predict when an engine will fail so maintenance can be scheduled proactively.

# Problem

Unplanned engine failures are costly and unsafe. Predictive maintenance estimates remaining useful life from sensor data, enabling maintenance teams to intervene before failure occurs.

# Objectives

- Preprocess and explore the NASA C-MAPSS degradation dataset.
- Engineer features that capture engine degradation patterns.
- Train and evaluate regression models for RUL estimation.
- Visualize degradation trajectories and model performance.

# Status

This project is currently in development. The final notebook, evaluation, and documentation are not yet complete. No performance metrics are published until validation is finished.

# Implementation

Implementation uses Python with Pandas and NumPy for data preprocessing and exploratory data analysis, Scikit-learn for model training and evaluation, and Matplotlib for visualizing degradation patterns.

# Focus Areas

- Data preprocessing and cleaning of sensor readings.
- Exploratory data analysis of degradation patterns.
- Feature engineering for RUL targets.
- Model training and comparison.
- Model evaluation using regression metrics.

# Lessons Learned

- Sensor data from turbofan engines requires careful alignment by engine unit and cycle.
- Feature engineering (rolling statistics, cycle normalization) significantly affects model performance.
- Evaluation must use time-aware validation to avoid leakage in degradation data.

# Future Work

- Complete the final notebook with full evaluation.
- Publish verified metrics (MAE, RMSE, R²) for RUL estimation.
- Compare multiple models (linear regression, random forest, gradient boosting).
- Turn the analysis into a deployable predictive maintenance application (see Intelligent Predictive Maintenance Platform).
