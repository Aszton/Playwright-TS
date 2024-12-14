import { test } from "../fixtures/base";

test("Correct Login", async ({ loginPage, page }) => {
  await loginPage.openMainPage();
  await page.waitForTimeout(10000)
});
