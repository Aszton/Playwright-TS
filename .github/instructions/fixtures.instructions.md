---
applyTo: "fixtures/**/*.ts"
description: "Conventions for registering page objects in the shared Playwright fixtures"
---

# Fixture Conventions

- `fixtures/base.ts` is the single place where page objects are instantiated.
- For every page class `XxxPage` add: an import, an entry `xxxPage: XxxPage;` in the `Fixtures` type, and a fixture `xxxPage: async ({ page }, use) => { await use(new XxxPage(page)); }`.
- Fixture name is the class name in camelCase (`SkincareEyesPage` -> `skincareEyesPage`).
- Keep the `Fixtures` type and the `base.extend` object in the same order.
- Fixtures only construct page objects; no navigation, login or assertions inside fixtures.
- Always extend `test` from `@playwright/test` here and nowhere else; specs import `test` from this file.
