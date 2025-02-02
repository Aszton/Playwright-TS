import { test as setup } from "@playwright/test";
import * as path from "path";
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import "dotenv/config";

const authFile = path.join(__dirname, "../../.auth/user.json");

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainPage = new MainPage(page);
  await mainPage.openMainPage();
  await mainPage.clickLoginOrRegisterButton()
  await loginPage.fillLoginInputs(
    process.env.USERNAME as string,
    process.env.PASSWORD as string
  );
  await loginPage.clickLoginButton();
  await loginPage.verifyCorrectLogin();
  await page.context().storageState({ path: authFile });
});
