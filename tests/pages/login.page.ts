import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(protected page: Page) {}

  loginOrRegisterButton = this.page.locator("#customer_menu_top");
  loginInput = this.page.locator("#loginFrm_loginname");
  passwordInput = this.page.locator("#loginFrm_password");
  loginButton = this.page.locator('[title="Login"]');
  successLogin = this.page.locator("h1").getByText("My Account");
  logoutLink = this.page
    .locator("#main_menu_top a")
    .filter({ hasText: "Logout" });

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

  async fillLoginInputs(userName: any, password: any) {
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
    await expect(this.successLogin).toBeVisible();
    await expect(this.logoutLink).toBeAttached();
  }
}
