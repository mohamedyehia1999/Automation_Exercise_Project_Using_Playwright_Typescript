import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {ProductPage} from '../pages/ProductPage';

test('Verify All Products and product detail page',async({page})=>{
    const homePage= new HomePage(page);
    const productPage=new ProductPage(page);

    await homePage.goto();
    await homePage.OpenProductPage();
    await productPage.ValidateThatAllProductPageIsVisible();
    await productPage.UserIsLandedToProductDetailPage();
    await productPage.VerifyThatDetailIsVisible();
});
test("Add The First Product To Cart",async({page})=>{
    const homePage= new HomePage(page);
    const productPage=new ProductPage(page);

    await homePage.goto();
    await homePage.OpenProductPage();
    await productPage.AddTheFirstProductToCart();
});