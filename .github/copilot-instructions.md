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
- Never use `waitForTimeout`, XPath, `test.only`, or hardcoded credentials; use web-first assertions.
- Every new page object must be registered in `fixtures/base.ts`.
- Before finishing, run `npm run typecheck` and the affected spec.

## Commands
- `npm test` all tests; `npx playwright test tests/x.spec.ts --headed` one spec
- `npm run test:ui`, `npm run report`, `npm run typecheck`
- `.env.example` lists required variables (`USER_NAME`, `PASSWORD`)

## AI customization index
- Instructions: `.github/instructions/` (page-objects, tests, fixtures, setup-and-env, locators-and-waits)
- Skills: `playwright-test-authoring`, `playwright-explore-and-locate`, `playwright-debug-flaky-test`, `playwright-test-review`, `playwright-cli`
- Agents: Playwright Test Writer / Planner / Healer / Reviewer (`.github/agents/`)
- Prompts: `/new-test`, `/new-page-object`, `/fix-failing-test`, `/review-tests`
- Playwright MCP server configured in `.vscode/mcp.json`; cross-tool summary in `AGENTS.md`.

For detailed authoring rules, see:
- [.github/instructions/page-objects.instructions.md](.github/instructions/page-objects.instructions.md) for page object conventions.
- [.github/instructions/tests.instructions.md](.github/instructions/tests.instructions.md) for spec conventions.
- Skill `playwright-test-authoring` when adding a new test or page object end-to-end.
