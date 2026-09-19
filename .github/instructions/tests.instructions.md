---
applyTo: "tests/**/*.spec.ts"
description: "Spec authoring conventions for this repo's Playwright tests"
---

# Test Spec Conventions

- Import `test` from `../fixtures/base`, never from `@playwright/test` directly.
- Get page objects by destructuring the fixture parameter: `async ({ mainPage, tshirtsPage, orderPage }) => { ... }` — never `new XxxPage(page)` inside a test.
- Group each logical action into a `test.step("short description", async () => { ... })` block.
- Do not call `expect` directly in the test body — call a page object's `verify*` method instead.
- Test titles are short, readable phrases describing the scenario (e.g. `"Buy tshirt"`).
- If a test needs authentication, rely on the existing `.auth/testUser.json` storageState (set up by [tests/auth.setup.ts](../../tests/auth.setup.ts)) rather than logging in inside the test, unless the test is specifically about the login flow.
- New setup files follow the `auth.setup.ts` pattern: import `test as setup` from `../fixtures/base`, match `*.setup.ts` in `playwright.config.ts`, and read secrets from `process.env` (populated via `dotenv/config`).
