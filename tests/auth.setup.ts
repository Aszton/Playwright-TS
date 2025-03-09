import { test as setup } from "../fixtures/base";
import * as path from "path";
import "dotenv/config";

const authFile = path.join(__dirname, "../.auth/user.json");
setup("authenticate", async ({ page, mainPage, loginPage }) => {
  await mainPage.openMainPage();
  await mainPage.clickLoginOrRegisterButton();
  await loginPage.fillLoginInputs(
    process.env.USERNAME as string,
    process.env.PASSWORD as string
  );
  await loginPage.clickLoginButton();
  await loginPage.verifyCorrectLogin();
  await page.context().storageState({ path: authFile });
});
