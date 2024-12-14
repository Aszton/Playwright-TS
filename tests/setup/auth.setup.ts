import { test as setup } from "@playwright/test";
import * as path from "path";
import { LoginPage } from "../pages/login.page";
import "dotenv/config";

const authFile = path.join(__dirname, "../../.auth/user.json");

setup("authenticate", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openMainPage();
  await loginPage.clickLoginOrRegisterButton();
  await loginPage.fillLoginInputs(process.env.USERNAME, process.env.PASSWORD);
  await loginPage.clickLoginButton();
  await loginPage.verifyCorrectLogin();
  await page.context().storageState({path: authFile})
});
