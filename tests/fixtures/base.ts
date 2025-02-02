import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import { TshirtsPage } from "../pages/tshirts.page";
import { OrderPage } from "../pages/order.page";

type Fixtures = {
  loginPage: LoginPage;
  mainPage: MainPage;
  tshirtsPage: TshirtsPage;
  orderPage: OrderPage;
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
});

export {expect} from "@playwright/test"