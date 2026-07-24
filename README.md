# AdminFlow Dashboard

AdminFlow is a Next.js admin dashboard UI built for managing an e-commerce marketplace and its operations. The project is organized around the core administrative workflows represented in the `ressource/` folder and includes user-facing screens for market setup, catalog management, customer operations, support, payments, suppliers, integrations, promotions, notifications, and settings.

## Overview

This dashboard is designed to help administrators:

- create and configure markets
- manage categories and subcategories
- handle client information and orders
- manage product listings and catalog actions
- search across the platform
- respond to support tickets
- monitor payments and card activity
- manage suppliers and supply requests
- configure integrations
- launch promotions
- review notifications
- adjust system settings

## Project structure

The repository contains a modern Next.js application with reusable UI components and dashboard-focused pages.

- `pages/` – routing and page entry points
- `components/` – reusable dashboard UI components
- `styles/` – global styling
- `ressource/` – screenshot assets used to document the admin flow

## Tech stack

- Next.js
- React
- TypeScript
- Styled Components

## Getting started

### Install dependencies

```bash
npm install
```

### Run locally

```bash	npm run dev
```

The app will start in development mode and can be opened in the browser on the local Next.js port.

## Key modules shown in the resources

### 1. Market creation

The `ressource/1 Market creation/` assets demonstrate the multi-step market creation flow.

### 2. Categories and subcategories

The `ressource/2 Category & subcategory/` assets show category management, nested subcategories, filters, and visibility controls.

### 3. Client management

The `ressource/3 Client/` assets represent the client dashboard, client detail views, order creation, delivery address management, and issue handling.

### 4. Products

The `ressource/4 Products/` assets highlight product listing, creating a new product, and inline product actions.

### 5. Search

The `ressource/5 Search/` assets illustrate search-driven client discovery workflows.

### 6. Support ticket

The `ressource/6 support ticket/` assets demonstrate support ticket list and board views, ticket detail panels, filters, and invitation flows.

### 7. Payments

The `ressource/7 payments/` assets show payment transactions, card lists, card details, card limit adjustments, and card creation.

### 8. Supplier

The `ressource/8 Supplier/` assets present supplier details, inline actions, and add-new-supply flows.

### 9. Integrations

The `ressource/9 Integration/` folder contains integration-related dashboard screens.

### 10. Promotions

The `ressource/10 Promotions/` folder captures promotional workflows.

### 11. Notifications

The `ressource/11 Notifications/` folder documents notification management.

### 12. Settings

The `ressource/12 Settings/` folder contains settings-related UI sections.

## Screenshot gallery

The dashboard design assets in the `ressource/` folder represent the main user journeys of the application.

![E-commerce Admin Dashboard](ressource/E-commerce%20IT%20Admin%20Dashboard.png)

---

## Notes

This repository is a frontend dashboard UI and is intended to showcase the admin experience for an e-commerce platform. It can be used as a base for further component expansion, backend API integration, or production-ready refinement.
