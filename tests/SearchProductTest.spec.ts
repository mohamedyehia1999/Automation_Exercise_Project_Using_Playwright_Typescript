import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {ProductPage} from '../pages/ProductPage';

const searchData=JSON.parse(JSON.stringify(require("../utils/SearchData.json")));

test('User Can Search about Product Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const productPage=new ProductPage(page);

    await homePage.goto();
    await homePage.OpenProductPage();
    await productPage.ValidateThatAllProductPageIsVisible();
    await productPage.UserCanSearchOnProduct(searchData.Search_Product);
    await productPage.VerifiedThatSearchedProductIsVisible();
    await productPage.validateOnProductsRelatedToSearch(searchData.SearchResult);
})