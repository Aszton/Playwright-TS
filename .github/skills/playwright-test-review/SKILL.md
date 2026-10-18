---
name: playwright-test-review
description: "Use when asked to review Playwright specs, page objects or fixtures in this repo against project conventions (POM, fixtures, locators, stability)."
---

# Review checklist

Check each changed file and report only real violations with file and line.

**Specs (`tests/*.spec.ts`)**
- [ ] `test` imported from `../fixtures/base`
- [ ] page objects only from fixtures, no `new XPage(page)`
- [ ] no direct `expect` in the body; uses `verify*`
- [ ] logical groups wrapped in `test.step`
- [ ] no unused destructured fixtures (e.g. `page`), no `test.only`, no logging in
- [ ] short readable title

**Page objects (`pages/*.page.ts`)**
- [ ] `XxxPage`, `constructor(protected page: Page)`, locators typed and initialized in the constructor
- [ ] methods async, `Promise<void>`, verb-prefixed; `expect(...).toBeVisible()` before each action
- [ ] `verify*` methods contain only assertions
- [ ] locator priority respected, no XPath/sleeps

**Fixtures**
- [ ] new page registered in `Fixtures` type and `base.extend`

**Config/CI**
- [ ] no secrets committed; env names `USER_NAME` / `PASSWORD`

Finish by running `npm run typecheck`.
