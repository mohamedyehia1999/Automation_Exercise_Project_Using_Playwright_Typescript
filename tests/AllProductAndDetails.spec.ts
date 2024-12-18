import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {ProductPage} from '../pages/ProductPage';

test('Verify All Products and product detail page',async({page})=>{
    const homePage= new HomePage(page);
    const productPage=new ProductPage(page);

    await homePage.goto();
    await homePage.openProductPage();
    await productPage.validateThatAllProductPageIsVisible();
    await productPage.userIsLandedToProductDetailPage();
    await productPage.verifyThatDetailIsVisible();
});
test("Add The First Product To Cart",async({page})=>{
    const homePage= new HomePage(page);
    const productPage=new ProductPage(page);

    await homePage.goto();
    await homePage.openProductPage();
    await productPage.addTheFirstProductToCart();
});