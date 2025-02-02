import { Page, expect } from "@playwright/test";

export class LoginPage {
  constructor(protected page: Page) {}

  loginInput = this.page.locator("#loginFrm_loginname");
  passwordInput = this.page.locator("#loginFrm_password");
  loginButton = this.page.locator('[title="Login"]');
  successLogin = this.page.locator("h1").getByText("My Account");
  logoutLink = this.page
    .locator("#main_menu_top a")
    .filter({ hasText: "Logout" });

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
