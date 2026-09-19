---
name: playwright-test-authoring
description: "Use when asked to write a Playwright test, add a page object, create a spec, or otherwise extend test coverage in this repo. Covers scaffolding a new pages/*.page.ts, registering it in fixtures/base.ts, and writing a tests/*.spec.ts that follows this project's conventions."
---

# Playwright Test Authoring (Playwright-TS)

Workflow for adding a new test end-to-end in this repo, following the conventions in
[.github/copilot-instructions.md](../../copilot-instructions.md),
[.github/instructions/page-objects.instructions.md](../../instructions/page-objects.instructions.md), and
[.github/instructions/tests.instructions.md](../../instructions/tests.instructions.md).

## Steps

1. **Check for an existing page object.** Look in `pages/` for a `*.page.ts` that already covers the target page/component. Reuse it if present; only scaffold a new one if the page/flow isn't covered yet.

2. **Scaffold a new page object** (only if needed) at `pages/xxx.page.ts` using this template:

   ```typescript
   import { Page, expect, Locator } from "@playwright/test";

   export class XxxPage {
     someButton: Locator;

     constructor(protected page: Page) {
       this.someButton = this.page.getByRole("button", { name: "Some Button" });
     }

     async clickSomeButton(): Promise<void> {
       await expect(this.someButton).toBeVisible();
       await this.someButton.click();
     }

     async verifySomething(): Promise<void> {
       await expect(this.someButton).toBeVisible();
     }
   }
   ```

   Prefer `getByRole`/`getByText` locators; fall back to CSS/attribute selectors only when no accessible alternative exists.

3. **Register the new page object in [fixtures/base.ts](../../../fixtures/base.ts)**: add it to the `Fixtures` type and add a fixture entry `xxxPage: async ({ page }, use) => { await use(new XxxPage(page)); }`.

4. **Write the spec** at `tests/xxx.spec.ts`:

   ```typescript
   import { test } from "../fixtures/base";

   test("Short readable scenario name", async ({ xxxPage, otherPage }) => {
     await test.step("First logical action", async () => {
       await xxxPage.clickSomeButton();
     });

     await test.step("Verify outcome", async () => {
       await xxxPage.verifySomething();
     });
   });
   ```

5. **If the flow needs authentication**, rely on the `.auth/testUser.json` storageState produced by [tests/auth.setup.ts](../../../tests/auth.setup.ts) — don't log in manually inside the new test.

6. **Run `npm test`** to confirm the new spec passes.
