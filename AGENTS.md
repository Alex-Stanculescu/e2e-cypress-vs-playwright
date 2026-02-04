# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This repository compares Cypress and Playwright for end-to-end testing. The codebase is currently in early stages.

## Project Structure

**Expected structure** (to be created):
- Separate directories for Cypress and Playwright test implementations
- Shared test scenarios or application under test
- Configuration files for each testing framework

## Development Commands

**Note**: Commands will depend on the final project setup. Common patterns for E2E testing projects:

### Cypress (typical commands)
```pwsh
npm run cy:open          # Open Cypress Test Runner (interactive)
npm run cy:run           # Run Cypress tests headlessly
npm run cy:run:chrome    # Run in specific browser
npx cypress run --spec "cypress/e2e/specific-test.cy.js"  # Run single test
```

### Playwright (typical commands)
```pwsh
npm run pw:test          # Run all Playwright tests
npm run pw:test:ui       # Run with UI mode (interactive)
npm run pw:headed        # Run tests in headed mode
npx playwright test specific-test.spec.ts  # Run single test
npx playwright show-report  # View test report
```

## Testing Framework Differences

When working with this codebase, be aware of key differences:

**Cypress**:
- Runs inside the browser
- Auto-waits for elements and assertions
- Uses `.then()` chains for async operations
- Configuration in `cypress.config.js` or `cypress.config.ts`

**Playwright**:
- Runs outside the browser (via automation protocols)
- Built-in auto-waiting
- Uses async/await
- Configuration in `playwright.config.ts`
- Supports multiple browsers in parallel

## Architecture Considerations

When implementing tests or features:
- Keep test scenarios identical between frameworks where possible for fair comparison
- Document any framework-specific limitations or workarounds
- Consider maintaining parallel test suites that test the same functionality
