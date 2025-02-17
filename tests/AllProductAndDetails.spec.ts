import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { ProductDetailsPage } from '../pages/productDetailsPage';
import { CartPage } from '../pages/cartPage';

test.describe('All Products and Details Tests', () => {
    let homePage: HomePage;
    let productPage: ProductPage;
    let productDetailsPage: ProductDetailsPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productPage = new ProductPage(page);
        productDetailsPage = new ProductDetailsPage(page);
        cartPage = new CartPage(page);
        await homePage.goto();
    });

    test('Verify All Products and product detail page', async ({ page }) => {
        await homePage.openProductPage();
        await productPage.validateThatAllProductPageIsVisible();
        await productPage.userIsLandedToProductDetailPage();
        await productDetailsPage.verifyProductDetailsPageVisibility();
        await productDetailsPage.verifyThatDetailsareVisible();
    });

    test('Add Products In Cart', async ({ page }) => {
        await homePage.openProductPage();
        await productPage.addProductsToCart();
        await cartPage.verifyBothProductsAreAddedToCart();
        await cartPage.verifyTheirPrices_Quantity_TotalPrice();
    });
/*
    test('Verify Product Quantity In Cart', async ({ page }) => {
        await cartPage.verifyProductQuantityInCart();
    });
    */
});
