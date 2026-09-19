import { test } from "../fixtures/base";

test("Add Eye master to cart", async ({ mainPage, skincareEyesPage, orderPage }) => {
  await test.step("Open skincare eyes tab", async () => {
    await mainPage.openMainPage();
    await mainPage.hoverOnMakeup();
    await mainPage.hoverOnSkincare();
    await skincareEyesPage.clickEyesTab();
  });

  await test.step("Add Eye master product to cart", async () => {
    await skincareEyesPage.clickEyeMasterProduct();
    await orderPage.clickAddToCartButton();
  });

  await test.step("Verify quantity in cart", async () => {
    await orderPage.verifyQty("2");
  });
});
