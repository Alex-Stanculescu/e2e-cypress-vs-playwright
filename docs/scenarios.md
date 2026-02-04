# Test Scenarios

Target app: https://www.saucedemo.com

## Scope
This repository implements the same high-value E2E scenarios in **Cypress** and **Playwright** to compare:
- Developer experience and test ergonomics
- Stability/flakiness handling
- Debugging artifacts (videos, traces, reports)
- CI execution patterns

## Scenarios implemented

### Login
- ✅ Standard user can log in (happy path)
- ✅ Locked out user sees an error (negative path)

### Purchase flow
- ✅ Add item to cart and complete checkout (end-to-end happy path)

## What is intentionally out of scope (for v1)
- Visual regression testing
- Full cross-browser matrix (kept to defaults for simplicity)
- API mocking/contract checks
- Performance testing
- Accessibility checks (can be added later as a dedicated suite)

## Risks / Notes
- The target site is a public demo and may be occasionally slow or inconsistent.
- Tests prefer waiting on stable UI signals rather than relying on the browser 'load' event.
