import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { CartPage } from '../pages/cartPage';

const subscriptionData = JSON.parse(JSON.stringify(require("../utils/SubscriptionData.json")));

test.describe('Subscription Tests', () => {
    let homePage: HomePage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        cartPage = new CartPage(page);
        await homePage.goto();
    });

    test('Subscription Test In Home Page', async ({ page }) => {
        await homePage.verifySubscriptionInHomePage(subscriptionData.SubscriptionEmail, subscriptionData.SuccessMessage);
    });

    test('Subscription Test In Cart Page', async ({ page }) => {
        await cartPage.verifySubscriptionInCartPage(subscriptionData.SubscriptionEmail, subscriptionData.SuccessMessage);
    });
});