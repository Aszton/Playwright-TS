import { test } from "@playwright/test";
import { LoginPage } from "../POM/loginPO";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openMainPage();
  await loginPage.clickLoginOrRegisterButton();
});

test("Correct Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.fillLoginInputs("test_user_wsb", "test_pass_wsb");
  await loginPage.clickLoginButton();
  await loginPage.verifyCorrectLogin();
});

test("Incorrect Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.fillLoginInputs("fail", "fail");
  await loginPage.clickLoginButton();
  await loginPage.isErrorLoginMessageDisplayed();
});
