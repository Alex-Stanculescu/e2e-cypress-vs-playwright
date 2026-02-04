# e2e-cypress-vs-playwright

A small portfolio project that implements the **same end-to-end scenarios** in **Cypress** and **Playwright**, with **GitHub Actions CI** and test artifacts (videos / reports) to compare tooling and demonstrate automation skills.

## What’s inside

### Scenarios
- **Login**: standard user succeeds, locked-out user sees error
- **Purchase flow**: add item to cart and complete checkout

More details:  
- `docs/scenarios.md`

### Tool comparison notes
- `docs/tooling-decision-notes.md`

## Project structure

- `cypress/` — Cypress test suite
- `playwright/` — Playwright test suite
- `test-data/` — shared data used by both suites
- `.github/workflows/` — CI pipeline

## Run locally

Install dependencies from repo root:
```
npm install
```

## Run Cypress
```
npm run test:cypress
```

## Run Playwright
```
npm run test:playwright
```

## Run both
```
npm run test:all
```
