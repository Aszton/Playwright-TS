import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import { TshirtsPage } from "../pages/tshirts.page";
import { OrderPage } from "../pages/order.page";
import { SkincareEyesPage } from "../pages/skincareEyes.page";
import { MenPage } from "../pages/men.page";

type Fixtures = {
  loginPage: LoginPage;
  mainPage: MainPage;
  tshirtsPage: TshirtsPage;
  orderPage: OrderPage;
  skincareEyesPage: SkincareEyesPage;
  menPage: MenPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  tshirtsPage: async ({ page }, use) => {
    await use(new TshirtsPage(page));
  },
  orderPage: async ({ page }, use) => {
    await use(new OrderPage(page));
  },
  skincareEyesPage: async ({ page }, use) => {
    await use(new SkincareEyesPage(page));
  },
  menPage: async ({ page }, use) => {
    await use(new MenPage(page));
  },
});
