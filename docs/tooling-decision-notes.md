# Tooling Decision Notes: Cypress vs Playwright (v1)

This doc captures practical observations from implementing the same scenarios in both tools.

## Cypress
### Strengths
- Very approachable DX for web-first E2E
- Auto-waiting model is beginner-friendly
- Great ecosystem and common industry adoption

### Tradeoffs
- Browser/event timing can occasionally be tricky with certain sites (e.g., relying on the page load event)
- Parallelization and multi-tab workflows can be less straightforward depending on needs

## Playwright
### Strengths
- Excellent debugging (trace viewer + HTML report)
- Strong cross-browser support and modern automation capabilities
- Powerful test runner patterns (fixtures, projects, parallelization)

### Tradeoffs
- Slightly more “explicit” code style (you write more awaits, which can be good or bad)
- Some teams may find the learning curve a bit steeper initially

## Recommendation framing (how I’d choose as a QA Lead)
Choose based on:
- Team skillset and appetite for async/await style
- Need for multi-browser, parallel execution, and trace-driven debugging
- Application architecture and stability risks
- CI budget/time (parallelization + retries strategy)

## Next improvements to compare (future iterations)
- API-assisted setup (seed state via API or storage state)
- Network interception/mocking strategy
- Cross-browser matrix
- Reporting standardization and trend tracking

## Auth reuse (Playwright storageState)
To speed up the suite and reduce repeated login steps, the project uses a dedicated Playwright setup test (auth.setup.ts) that logs in once and saves the browser context storageState (cookies + storage) to playwright/.auth/standard.json.

The E2E project loads this storageState for each new browser context, so tests can start from authenticated pages (e.g., /inventory.html) without re-running the login flow.

When I would NOT use this:
- When explicitly testing authentication flows (login, logout, MFA)
- When tokens expire extremely quickly or the app invalidates sessions aggressively
- When tests require multiple roles/users (in that case, use multiple stored states per role)
