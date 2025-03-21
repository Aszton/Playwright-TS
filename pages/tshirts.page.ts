import { Locator, Page, expect } from "@playwright/test";

export class TshirtsPage {
  fruitOfTheLoom: Locator;
  size: Locator;
  quantity: Locator;

  constructor(protected page: Page) {
    this.fruitOfTheLoom = this.page.getByRole("link", {
      name: "Fruit of the Loom T-Shirts 5",
    });
    this.size = this.page.locator("#option348");
    this.quantity = this.page.locator("#product_quantity");
  }

  async clickFruitOfTheLoom(): Promise<void> {
    await expect(this.fruitOfTheLoom).toBeVisible();
    await this.fruitOfTheLoom.click();
  }

  async chooseSizeXL(): Promise<void> {
    await this.size.selectOption("770");
    await expect(this.size).toHaveValue("770");
  }

  async changeQuantity(quantity: string): Promise<void> {
    await expect(this.quantity).toBeVisible();
    await this.quantity.fill(quantity);
  }
}
