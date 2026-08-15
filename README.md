# AML GUARD: Advanced Financial Compliance and Anti-Money Laundering Prototype

## Overview
**AML GUARD** is a comprehensive, state-of-the-art prototype designed to demonstrate advanced capabilities in financial compliance and Anti-Money Laundering (AML) operations. The system provides a unified interface for analysts, senior analysts, and compliance managers to monitor, investigate, and report suspicious financial activities with high efficiency.

This application integrates key operational modules into a single pane of glass, facilitating transaction monitoring, network graph analysis of interconnected accounts, and AI-assisted Suspicious Activity Report (SAR) generation.

## Key Features & Modules

### 1. Dashboard Overview
Provides high-level Key Performance Indicators (KPIs) to monitor the immediate risk posture of the financial system. 
- **Metrics Tracked:** Total Transactions, High-Risk Transactions, Suspicious Clusters, and SARs Pending Review.
- **Visual Analytics:** Includes dynamic risk trend visualizations and aggregated severity alerts.

### 2. Transactions & Network Analysis (Modules A, B, & C)
A consolidated interface enabling deep-dive investigations into flagged financial activities.
- **Transaction Ledger:** Detailed tabular data identifying involved entities, risk scoring, and transaction status.
- **Community Graph Visualizer:** A topological representation of interconnected accounts designed to unearth sophisticated laundering typologies, such as structuring and complex layering.

### 3. AI-Assisted SAR Generation
Simulates the integration of Large Language Models (LLMs) to drastically reduce the operational overhead of compliance reporting.
- Synthesizes contextual findings across complex transaction clusters.
- Automatically compiles structured narrative drafts for regulatory submission.
- Implements strict Role-Based Access Control (RBAC) to ensure compliance standards (e.g., analysts may draft, but only authorized managers may submit).

### 4. Comprehensive Audit Logs
Maintains an immutable, chronological ledger of all system interactions and user actions to ensure strict regulatory compliance, transparency, and accountability.

## Technology Stack
- **Core Framework:** React 19, TypeScript, and Vite
- **Styling Methodology:** Tailwind CSS v4 (configured for a dark-mode, high-density fintech aesthetic)
- **Architecture:** Component-driven, static state-managed prototype without reliance on external routing libraries.

## Getting Started

Follow the instructions below to compile and run the AML GUARD prototype in your local development environment.

### Prerequisites
Ensure that [Node.js](https://nodejs.org/) and `npm` are installed on your system.

### Installation & Execution

Execute the following commands in your terminal:

```bash
cd prototype-dashboard
npm install
npm run dev
```

Once the development server initializes, navigate to the localhost URL provided in your terminal output (typically `http://localhost:5173`) to interact with the application.
