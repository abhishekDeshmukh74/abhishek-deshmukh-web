# Abhishek Deshmukh — Web (Angular)

Personal website / portfolio built with **Angular** (Angular CLI **v15.2.6**) and deployed on **Vercel**.

Live: https://abhishek-deshmukh-web-nu.vercel.app

---

## Tech Stack

- Angular (TypeScript)
- HTML / SCSS

---

## Getting Started (Local Setup)

### Install dependencies
npm install

### Run the development server
npm start
or
ng serve

Open http://localhost:4200/ in your browser.

---

## Scripts

ng serve   - Run locally
ng build   - Production build (outputs to dist/)
ng test    - Unit tests
ng e2e     - End-to-end tests (if configured)

---

## Build

ng build

The build artifacts will be stored in the dist/ directory.

---

## Deployment

This project is deployed on Vercel.

Typical setup:
- Build Command: ng build
- Output Directory: dist/<app-name>

Note: This repository includes a server.ts file. If used for SSR or a custom Node server, deployment settings may differ.

---

## Project Structure (High Level)

.
├── src/                 # Angular application source
├── angular.json         # Angular workspace configuration
├── ngsw-config.json     # PWA / service worker configuration
├── server.ts            # Node server entry (optional / SSR)
└── package.json
