---
title: Intelligent Energy Systems
description: Connecting battery energy storage research to software and control engineering.
slug: intelligent-energy-systems
category: energy-systems
tags:
  - battery energy storage
  - DC-DC converter
  - PI control
  - MATLAB
  - Simulink
status: research-prototype
author: Asiimwe Ronald
pubDate: 2026-10-30
featured: true
order: 6
---

# Intelligent Energy Systems

My master's research at NUIST (supervised by Dr. Xudong Gao) sits at the intersection of control engineering and software. This article connects that research to the software and systems perspective.

## Battery Energy Storage Systems (BESS)

A BESS stores electrical energy in batteries and releases it on demand. The power electronics — typically DC–DC converters and inverters — must regulate voltage and current under changing battery state and load demand. Controller tuning determines how well the system handles these variations.

## DC–DC Converters

DC–DC converters step voltage up or down between the battery and the load. Their dynamic behavior (overshoot, settling, steady-state error) is governed by the controller. Poor tuning leads to voltage ripple, slow response, and stress on components.

## PI Controllers

Proportional-Integral control is the baseline. The proportional term responds to present error; the integral term eliminates steady-state error. Tuning (Kp, Ki) is a trade-off between responsiveness and stability.

## MATLAB/Simulink Modeling

I model the system in MATLAB/Simulink: battery, converter, controller, and load. Simulation allows systematic variation of battery voltage and power demand without hardware risk. This is the current focus of the research.

## Controller Parameter Optimization

The research explores how to select controller parameters that maintain performance across operating conditions rather than only at a nominal point. Candidate approaches include grid search, optimization routines, and comparison against baseline PI tuning.

## System Response and Robustness Evaluation

Performance is assessed with candidate metrics: rise time, settling time, overshoot, steady-state error, voltage regulation, current response, control effort, and robustness across operating conditions. These are proposed evaluation criteria, not completed results.

## Control Workflow

<div class="mermaid">
flowchart TD
    A[Battery] --> B[DC-DC Converter]
    B --> C[Load / Power Demand]
    D[PI Controller] -->|Control Signal| B
    E[Voltage Sensor] -->|Feedback| D
    F[Current Sensor] -->|Feedback| D
    G[Reference Setpoint] --> D
    H[Optimization Study] -->|Candidate Parameters| D
    I[MATLAB/Simulink Model] -->|Simulation| J[Response Metrics]
    J --> H
</div>

## Software and Control Engineering Connection

The control research maps onto software engineering in several ways:

- **Modeling as code** — the Simulink model is a reproducible artifact; parameters and scenarios are versioned.
- **Experiment tracking** — simulation runs produce metrics that should be recorded and compared, analogous to ML experiment tracking.
- **Optimization as search** — controller tuning is a constrained optimization problem, similar to hyperparameter search.
- **Robustness evaluation** — performance across a range of conditions mirrors ML evaluation across data slices.

## Status

This is ongoing academic research. No simulation results, numerical improvements, publications, or completed experiments are claimed. The research is supervised by Dr. Xudong Gao at NUIST.
