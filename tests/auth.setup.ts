import { test as setup } from "../fixtures/base";
import * as path from "path";
import "dotenv/config";

async function authenticateUser(user: string, password: string, storagePath: string, { mainPage, loginPage, page }) {
  await mainPage.openMainPage();
  await mainPage.clickLoginOrRegisterButton();
  await loginPage.fillLoginInputs(user, password);
  await loginPage.clickLoginButton();
  await loginPage.verifyCorrectLogin();
  await page.context().storageState({ path: storagePath });
}

setup("setup user authenticate", async ({ mainPage, loginPage, page }) => {
  await authenticateUser(
    process.env.USER as string,
    process.env.PASSWORD as string,
    path.join(__dirname, "../.auth/testUser.json"),
    { mainPage, loginPage, page }
  );
});
