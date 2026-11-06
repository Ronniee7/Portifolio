---
title: Battery Energy Storage Optimization Simulator
description: Research-oriented software platform supporting NUIST battery energy storage system control parameter optimization research.
slug: battery-energy-storage-simulator
status: research-prototype
category: research
technologies:
  - MATLAB
  - Simulink
  - Python
  - Scientific Python
image: /images/projects/battery-simulator.svg
featured: false
---

# Overview

The Battery Energy Storage Optimization Simulator is a planned research-oriented software platform supporting the NUIST battery energy storage system control parameter optimization research, supervised by Dr. Xudong Gao.

# Problem

DC–DC converters in battery energy storage systems must operate effectively under variations in battery voltage and power demand. Selecting suitable controller parameters so that system performance remains satisfactory under changing operating conditions is an open research question.

# Objectives

- Develop a simple MATLAB/Simulink model of the battery energy storage system and DC–DC converter.
- Implement baseline PI control.
- Establish performance metrics (rise time, settling time, overshoot, steady-state error, voltage regulation, control effort).
- Investigate controller parameter optimization.
- Evaluate transient response and robustness under operating variations.
- Compare optimized settings against baseline PI control.

# Planned Features

- PI controller baseline implementation.
- Parameter adjustment and tuning interface.
- Simulation result ingestion and storage.
- Performance comparison between baseline and optimized controllers.
- Visualization of transient response.
- Robustness testing across operating conditions.

# Planned Stack

- MATLAB / Simulink (control-system modelling and simulation)
- Python and Scientific Python (data analysis and visualization)
- FastAPI (optional platform layer)

# Connection to NUIST Research

This project directly supports the ongoing Master's research direction: Battery Energy Storage System Control Parameter Optimization at Nanjing University of Information Science and Technology (NUIST), under the supervision of Dr. Xudong Gao. The research is ongoing and must not be presented as completed.

# Status

Research prototype. The project must reflect actual progress in the supervised research. No simulation results, numerical improvements, or completed experiments are claimed.

# Important

Do not invent simulation results, numerical improvements, publications, or completed experiments. The research should initially appear as "Current Research — In Progress."

# Future Work

- Develop MATLAB/Simulink model as research progresses.
- Implement baseline PI control.
- Establish and measure performance indicators.
- Compare optimized vs. baseline controller settings.
