import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {ProductPage} from '../pages/productPage';

const searchData=JSON.parse(JSON.stringify(require("../utils/SearchData.json")));

test('User Can Search about Product Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const productPage=new ProductPage(page);

    await homePage.goto();
    await homePage.openProductPage();
    await productPage.validateThatAllProductPageIsVisible();
    await productPage.userCanSearchOnProduct(searchData.Search_Product);
    await productPage.verifiedThatSearchedProductIsVisible();
    await productPage.validateOnProductsRelatedToSearch(searchData.SearchResult);
})