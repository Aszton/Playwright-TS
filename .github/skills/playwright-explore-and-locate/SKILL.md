---
name: playwright-explore-and-locate
description: "Use before writing a new page object or test for a page that is not yet covered: explore the live site with Playwright MCP or playwright-cli, capture accessibility snapshots, and choose resilient locators."
---

# Explore the site and pick locators

1. Read existing `pages/*.page.ts` to see what is already covered and which site is under test (`openMainPage` in [main.page.ts](../../../pages/main.page.ts) holds the URL).
2. Open the page with the Playwright MCP tools (`browser_navigate`, `browser_snapshot`) or `playwright-cli` (see skill `playwright-cli`). Prefer snapshots over screenshots.
3. Walk through the target scenario by hand. For each element you will touch, note its role + accessible name from the snapshot.
4. Choose locators in this order: `getByRole` -> `getByLabel` -> `getByText` -> test id -> stable CSS id. Check uniqueness (strict mode: exactly one match).
5. Note what proves success (message, URL, quantity) - this becomes a `verify*` method.
6. If the flow needs login, use `.auth/testUser.json` state; do not log in by hand in the test.
7. Hand the findings (locators, steps, verifications) to skill `playwright-test-authoring` to implement.

Output of this skill: a short list of steps, locators and verifications. It changes no files.
