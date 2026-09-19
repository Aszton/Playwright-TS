import { test } from "../fixtures/base";

test("Buy Dove Men +Care Body Wash", async ({ mainPage, menPage, orderPage }) => {
  await test.step("Open Body & Shower tab under Men", async () => {
    await mainPage.openMainPage();
    await mainPage.clickMenTab();
    await menPage.clickBodyAndShowerTab();
  });

  await test.step("Add Dove Men +Care Body Wash to cart", async () => {
    await menPage.clickDoveBodyWashProduct();
    await orderPage.clickAddToCartButton();
  });

  await test.step("Checkout and confirm order", async () => {
    await orderPage.clickCheckoutButton();
    await orderPage.clickConfirmOrderButton();
    await orderPage.verifySuccessOrderMessage();
  });
});
