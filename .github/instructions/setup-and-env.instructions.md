---
applyTo: "tests/**/*.setup.ts,playwright.config.ts,.github/workflows/*.yml"
description: "Auth setup, environment variables and Playwright config conventions"
---

# Setup, Env and Config

- Secrets come only from `process.env` (`USER_NAME`, `PASSWORD`) loaded via `import "dotenv/config"`. Never hardcode credentials, and never commit `.env` or `.auth/`.
- Env var names must be identical locally (`.env`), in `.env.example` and in the CI workflow (`USER_NAME`, `PASSWORD`).
- Setup files match `*.setup.ts`, import `test as setup` from `../fixtures/base`, and save state with `page.context().storageState({ path })` into `.auth/`.
- Projects that need login use `storageState` plus `dependencies: ["setup"]`.
- Keep `fullyParallel: false` / `workers: 1` unless tests are proven independent (shared cart/account state).
- Do not add arbitrary global timeouts to hide flakiness; fix the locator or the wait condition.
- New env-specific values go to `config/environments/`, not into specs.
