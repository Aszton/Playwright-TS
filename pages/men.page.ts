import { Locator, Page, expect } from "@playwright/test";

export class MenPage {
  bodyAndShowerTab: Locator;
  doveBodyWashProduct: Locator;

  constructor(protected page: Page) {
    this.bodyAndShowerTab = this.page
      .locator("#categorymenu")
      .getByRole("link", { name: "Body & Shower" });
    this.doveBodyWashProduct = this.page.getByRole("link", {
      name: "Dove Men +Care Body Wash",
    });
  }

  async clickBodyAndShowerTab(): Promise<void> {
    await expect(this.bodyAndShowerTab).toBeVisible();
    await this.bodyAndShowerTab.click();
  }

  async clickDoveBodyWashProduct(): Promise<void> {
    await expect(this.doveBodyWashProduct).toBeVisible();
    await this.doveBodyWashProduct.click();
  }
}
