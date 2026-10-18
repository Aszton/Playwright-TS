# AGENTS.md

Playwright + TypeScript UI tests for an e-commerce demo site. The full conventions live in [.github/copilot-instructions.md](.github/copilot-instructions.md) and [.github/instructions/](.github/instructions/) - read them before changing code.

## Essentials
- Page Object Model in `pages/*.page.ts`, registered as fixtures in `fixtures/base.ts`.
- Specs in `tests/*.spec.ts` import `test` from `../fixtures/base`, use fixtures only, group actions in `test.step`, and call `verify*` page methods instead of `expect`.
- Locators: `getByRole` first; no XPath, no sleeps.
- Auth comes from `.auth/testUser.json` (made by `tests/auth.setup.ts`); credentials from `.env` (`USER_NAME`, `PASSWORD`, see `.env.example`).

## Commands
- `npm test` - all tests
- `npm run test:headed` / `npm run test:ui` - debugging
- `npm run report` - open HTML report
- `npm run typecheck` - `tsc --noEmit`

## Skills and agents
Skills in `.github/skills/`, agents in `.github/agents/` (writer, planner, healer, reviewer), prompts in `.github/prompts/`.
