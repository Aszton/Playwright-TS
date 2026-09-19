import { Locator, Page, expect } from "@playwright/test";

export class SkincareEyesPage {
  eyesTab: Locator;
  eyeMasterProduct: Locator;

  constructor(protected page: Page) {
    this.eyesTab = this.page.locator('a[href*="path=43_47"]');
    this.eyeMasterProduct = this.page.getByRole("link", { name: "Eye master" });
  }

  async clickEyesTab(): Promise<void> {
    await expect(this.eyesTab).toBeVisible();
    await this.eyesTab.click();
  }

  async clickEyeMasterProduct(): Promise<void> {
    await expect(this.eyeMasterProduct).toBeVisible();
    await this.eyeMasterProduct.click();
  }
}
