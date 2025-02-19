import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';

let homePage: HomePage;
let cartPage: CartPage;

test.describe('Shopping Cart Operations', () => {
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        cartPage = new CartPage(page);

        await homePage.goto();
    });

    test('User can remove product from cart successfully', async () => {
        await homePage.addProductToCartFromHomePageAndOpenCart();
        await cartPage.userCanRemoveProductFromCart();
        await cartPage.verifyProductIsRemovedFromCart();
    });

    test.afterEach(async ({ page }) => {
        await page.close();
    });
});