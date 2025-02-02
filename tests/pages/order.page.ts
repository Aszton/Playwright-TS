import { Page, expect } from "@playwright/test";

export class OrderPage {
  constructor(protected page: Page) {}
  addToCart = this.page.getByRole("link", { name: " Add to Cart" });
  quantityInSummary = this.page.locator('[id*="cart_quantity"]');
  checkoutButton = this.page.locator("#cart_checkout1");
  confirmOrder = this.page.getByRole("button", { name: " Confirm Order" });
  successMessage = this.page.getByText("Your Order Has Been Processed!");

  async clickAddToCartButton(): Promise<void> {
    await expect(this.addToCart).toBeVisible();
    await this.addToCart.click();
  }

  async verifyQty(value: string): Promise<void> {
    await expect(this.quantityInSummary).toBeVisible();
    await expect(this.quantityInSummary).toHaveValue(value);
  }

  async clickCheckoutButton(): Promise<void> {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
  }

  async clickConfirmOrderButton(): Promise<void> {
    await expect(this.confirmOrder).toBeVisible();
    await this.confirmOrder.click();
  }

  async verifySuccessOrderMessage() {
    await expect(this.successMessage).toBeVisible();
  }
}
