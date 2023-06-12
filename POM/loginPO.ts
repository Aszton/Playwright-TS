import { expect, Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly loginInput: Locator;
  readonly loginOrRegisterButton: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginOrRegisterButton = page.locator("#customer_menu_top");
    this.loginInput = page.locator("#loginFrm_loginname");
    this.passwordInput = page.locator('[type="password"]');
    this.loginButton = page.locator('[title="Login"]');
    this.loginErrorMessage = page.getByText(
      "× Error: Incorrect login or password provided."
    );
  }

  async openMainPage() {
    await this.page.goto("https://automationteststore.com/");
    await expect(this.page).toHaveTitle(
      /A place to practice your automation skills!/
    );
  }

  async clickLoginOrRegisterButton() {
    await expect(this.loginOrRegisterButton).toBeVisible();
    await this.loginOrRegisterButton.click();
    await expect(this.page).toHaveURL(/.*account/);
  }

  async fillLoginInputs(userName: string, password: string) {
    await expect(this.loginInput).toBeVisible();
    await this.loginInput.fill(userName);
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }

  async verifyCorrectLogin() {
    await expect(this.page).toHaveURL(/.*account/);
  }

  async isErrorLoginMessageDisplayed() {
    await expect(this.loginErrorMessage).toBeVisible();
  }
}
