---
applyTo: "pages/**/*.page.ts"
description: "Page Object Model conventions for this repo's Playwright page classes"
---

# Page Object Conventions

- File name `xxx.page.ts`, class name `XxxPage` (PascalCase).
- Constructor signature: `constructor(protected page: Page) { ... }`.
- Declare locators as typed class properties (`someButton: Locator`) and initialize them all in the constructor — do not create locators inline inside methods.
- Locator strategy priority: `getByRole()` first, then `getByText()` / `.filter({ hasText })`, then CSS/attribute selectors only as a fallback when no accessible role/text exists.
- Every method is `async` and returns `Promise<void>`.
- Method names are verb-prefixed by what they do: `click*`, `fill*`, `choose*`, `change*`, `hover*`, `open*` for actions; `verify*` for assertion-only methods.
- Before interacting with an element, assert it first: `await expect(this.locator).toBeVisible();` then perform the action.
- `verify*` methods contain only `expect` calls — no page interactions.
- Import `expect`, `Locator`, `Page` from `@playwright/test`.

When adding a new page object, also register it in [fixtures/base.ts](../../fixtures/base.ts) (add to the `Fixtures` type and add a fixture that does `await use(new XxxPage(page));`).
