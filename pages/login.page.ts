import { Page, expect, Locator } from "@playwright/test";

export class LoginPage {
  loginInput: Locator
  passwordInput: Locator
  loginButton: Locator;
  successLogin: Locator
  logoutLink: Locator

  constructor(protected page: Page) {

  this.loginInput = this.page.locator("#loginFrm_loginname");
  this.passwordInput = this.page.locator("#loginFrm_password");
  this.loginButton = this.page.locator('[title="Login"]');
  this.successLogin = this.page.locator("h1").getByText("My Account");
  this.logoutLink = this.page
    .locator("#main_menu_top a")
    .filter({ hasText: "Logout" });
  }
  
  async fillLoginInputs(userName: string, password: string): Promise<void> {
    await expect(this.loginInput).toBeVisible();
    await this.loginInput.fill(userName);
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }

  async verifyCorrectLogin(): Promise<void> {
    await expect(this.successLogin).toBeVisible();
    await expect(this.logoutLink).toBeAttached();
  }
}
