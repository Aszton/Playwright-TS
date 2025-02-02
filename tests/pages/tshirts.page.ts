import { Page, expect } from "@playwright/test";

export class TshirtsPage {
  constructor(protected page: Page) {}
  fruitOfTheLoom = this.page.getByRole("link", {
    name: "Fruit of the Loom T-Shirts 5",
  });
  size = this.page.locator("#option348");
  quantity = this.page.locator("#product_quantity");

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
