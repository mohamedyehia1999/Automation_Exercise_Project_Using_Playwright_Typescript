import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import { CartPage } from '../pages/CartPage';

const subscriptionData=JSON.parse(JSON.stringify(require("../utils/SubscriptionData.json")));

test('Subscription Test In Home Page',async({page})=>{
    const homePage=new HomePage(page);
    await homePage.goto();
    await homePage.verifySubscriptionInHomePage(subscriptionData.SubscriptionEmail ,subscriptionData.SuccessMessage);
})
test('Subscription Test In Cart Page',async({page})=>{
    const homePage=new HomePage(page);
    const cartPage= new CartPage(page);
    await homePage.goto();
    await cartPage.verifySubscriptionInCartPage(subscriptionData.SubscriptionEmail ,subscriptionData.SuccessMessage);
})