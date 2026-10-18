---
applyTo: "pages/**/*.ts,tests/**/*.ts"
description: "Locator, waiting and stability rules for reliable Playwright tests"
---

# Locators, Waits and Stability

- Use web-first assertions (`await expect(locator).toBeVisible()`, `toHaveText`, `toHaveValue`, `toHaveURL`) - they auto-retry.
- Never use `page.waitForTimeout`, fixed sleeps, or `waitForLoadState("networkidle")` as a fix. Wait for a concrete element/URL/state.
- No XPath. Prefer `getByRole` > `getByLabel` > `getByText` > `getByTestId` > CSS by stable id/attribute.
- Avoid positional locators (`.nth()`, `.first()`) unless the list order is part of the requirement; narrow with `.filter({ hasText })` or a parent locator instead.
- Do not use auto-generated class names or long CSS chains.
- Use regex or `exact: false` only when the text is genuinely dynamic.
- No `test.only`, `test.skip` without a reason comment, or `console.log` debugging left in code.
- Tests must be independent of execution order and clean up or tolerate state created by other tests (cart contents, orders).
- Use Playwright MCP / `playwright-cli` snapshots to verify a locator against the real page before committing it.
