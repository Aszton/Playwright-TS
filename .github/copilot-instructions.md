# Playwright-TS Project Conventions

Playwright + TypeScript (strict, ES2022) UI test suite for an e-commerce demo site.

## Structure
- `pages/*.page.ts` — Page Object Model classes (one per page).
- `fixtures/base.ts` — extends `@playwright/test`'s `test` with typed fixtures that instantiate each page object.
- `tests/*.spec.ts` — specs, always import `test` from `../fixtures/base` (not `@playwright/test`).
- `tests/auth.setup.ts` — runs as the `setup` project and writes `.auth/testUser.json` via `storageState`; the `chromium` project depends on it.
- `config/environments/` — reserved for environment config, currently unused.
- Credentials come from `.env` (`USER_NAME`, `PASSWORD`) via `dotenv/config`.

## Core rules
- Never instantiate a page object with `new XPage(page)` inside a test — always consume it from the fixture (`async ({ mainPage, loginPage }) => {...}`).
- Assertions live in page object methods, not in test bodies — tests call `verify*` methods instead of calling `expect` directly.
- Run tests with `npm test`.

For detailed authoring rules, see:
- [.github/instructions/page-objects.instructions.md](.github/instructions/page-objects.instructions.md) for page object conventions.
- [.github/instructions/tests.instructions.md](.github/instructions/tests.instructions.md) for spec conventions.
- Skill `playwright-test-authoring` when adding a new test or page object end-to-end.
