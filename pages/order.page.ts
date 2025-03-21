import { Locator, Page, expect } from "@playwright/test";

export class OrderPage {
  addToCart: Locator;
  quantityInSummary: Locator;
  checkoutButton: Locator;
  confirmOrder: Locator;
  successMessage: Locator;

  constructor(protected page: Page) {
    this.addToCart = this.page.getByRole("link", { name: " Add to Cart" });
    this.quantityInSummary = this.page.locator('[id*="cart_quantity"]');
    this.checkoutButton = this.page.locator("#cart_checkout1");
    this.confirmOrder = this.page.getByRole("button", {
      name: " Confirm Order",
    });
    this.successMessage = this.page.getByText("Your Order Has Been Processed!");
  }

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
