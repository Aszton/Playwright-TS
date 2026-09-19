import { Page, expect, Locator } from "@playwright/test";

export class MainPage {
  loginOrRegisterButton: Locator
  apparelAndAccessories: Locator
  tshirtsTab: Locator
  makeup: Locator
  skincare: Locator
  menTab: Locator
  
  constructor(protected page: Page) {

  this.loginOrRegisterButton = this.page.locator("#customer_menu_top");
  this.apparelAndAccessories = this.page.getByRole("link", {
    name: "Apparel & accessories",
  });
  this.tshirtsTab = this.page.getByRole("link", { name: "T-shirts" });
  this.makeup = this.page.getByRole("link", { name: "Makeup" });
  this.skincare = this.page.getByRole("link", { name: "Skincare" });
  this.menTab = this.page.getByRole("link", { name: "Men", exact: true });
  }

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

  async hoverOnMakeup(): Promise<void> {
    await expect(this.makeup).toBeVisible();
    await this.makeup.hover({ force: true });
  }

  async hoverOnSkincare(): Promise<void> {
    await expect(this.skincare).toBeVisible();
    await this.skincare.hover({ force: true });
  }

  async clickMenTab(): Promise<void> {
    await expect(this.menTab).toBeVisible();
    await this.menTab.click();
  }
}
