import { Page, expect } from "@playwright/test";

export class MainPage {
  constructor(protected page: Page) {}

  loginOrRegisterButton = this.page.locator("#customer_menu_top");
  apparelAndAccessories = this.page.getByRole("link", {
    name: "Apparel & accessories",
  });
  tshirtsTab = this.page.getByRole("link", { name: "T-shirts" });

  async openMainPage(): Promise<void> {
    await this.page.goto("https://automationteststore.com/");
    await expect(this.page).toHaveTitle(
      /A place to practice your automation skills!/
    );
  }

  async clickLoginOrRegisterButton(): Promise<void> {
    await expect(this.loginOrRegisterButton).toBeVisible();
    await this.loginOrRegisterButton.click();
    await expect(this.page).toHaveURL(/.*account/);
  }

  async hoverOnApparelAndAccessories(): Promise<void> {
    await expect(this.apparelAndAccessories).toBeVisible();
    await this.apparelAndAccessories.hover({ force: true });
  }

  async clickTshirtsTab(): Promise<void> {
    await expect(this.tshirtsTab).toBeVisible();
    await this.tshirtsTab.click();
  }
}
