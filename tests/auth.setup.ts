import { test as setup } from "../fixtures/base";
import type { Page } from "@playwright/test";
import type { MainPage } from "../pages/main.page";
import type { LoginPage } from "../pages/login.page";
import * as path from "path";
import "dotenv/config";

async function authenticateUser(
  user: string,
  password: string,
  storagePath: string,
  {
    mainPage,
    loginPage,
    page,
  }: { mainPage: MainPage; loginPage: LoginPage; page: Page },
) {
  await mainPage.openMainPage();
  await mainPage.clickLoginOrRegisterButton();
  await loginPage.fillLoginInputs(user, password);
  await loginPage.clickLoginButton();
  await loginPage.verifyCorrectLogin();
  await page.context().storageState({ path: storagePath });
}

setup("setup user authenticate", async ({ mainPage, loginPage, page }) => {
  await authenticateUser(
    process.env.USER_NAME as string,
    process.env.PASSWORD as string,
    path.join(__dirname, "../.auth/testUser.json"),
    { mainPage, loginPage, page },
  );
});
