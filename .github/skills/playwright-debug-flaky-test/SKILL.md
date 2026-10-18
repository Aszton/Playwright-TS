---
name: playwright-debug-flaky-test
description: "Use when a Playwright test fails or is flaky: reproduce it, read trace/report, find the root cause, and fix the page object or spec without adding sleeps."
---

# Debug a failing or flaky test

1. Reproduce: `npx playwright test tests/<file>.spec.ts --headed`. For flakiness add `--repeat-each=5`. Setup runs first automatically via the `setup` project.
2. Collect evidence: `npx playwright test <file> --trace on`, then `npx playwright show-trace test-results/<dir>/trace.zip`; or `npx playwright show-report`. Failure screenshots and videos are in `test-results/`.
3. Classify the cause:
   - Locator not found / ambiguous -> re-inspect the page (skill `playwright-explore-and-locate`) and tighten the locator.
   - Timing -> replace with a web-first assertion on the real condition; never `waitForTimeout`.
   - Auth/state -> check `.auth/testUser.json`, `.env` values (`USER_NAME`, `PASSWORD`), leftover cart/order state.
   - Site changed or down -> report it, do not mask it.
4. Fix in the page object (not by adding logic in the spec). Keep conventions: assertions in `verify*`, locators in the constructor.
5. Re-run the single spec, then `--repeat-each=3`, then `npm test`.
6. Summarize root cause and fix in one or two sentences.
