import { test } from "../fixtures/base";

test("Buy tshirt", async ({ mainPage, tshirtsPage, orderPage, page }) => {
  await test.step("Open tshirts tab", async () => {
    await mainPage.openMainPage();
    await mainPage.hoverOnApparelAndAccessories();
    await mainPage.clickTshirtsTab();
  });
  await test.step("Choose fruit of the loom XL, and 5 quantity", async () => {
    await tshirtsPage.clickFruitOfTheLoom();
    await tshirtsPage.chooseSizeXL();
    await tshirtsPage.changeQuantity("");
    await tshirtsPage.changeQuantity("5");
  });
  await test.step("Confirm order", async () => {
    await orderPage.clickAddToCartButton();
    await orderPage.verifyQty("5");
    await orderPage.clickCheckoutButton();
    await orderPage.clickConfirmOrderButton();
    await orderPage.verifySuccessOrderMessage();
  });
});
