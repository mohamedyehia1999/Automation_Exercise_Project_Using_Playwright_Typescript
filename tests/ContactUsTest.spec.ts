import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {ContactUSPage} from '../pages/ContactUsPage';

const contactData=JSON.parse(JSON.stringify(require("../utils/ContactUsData.json")));

test('User can Contact US Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const contactUSPage = new ContactUSPage(page);

    await homePage.goto();
    await homePage.openContactUsPage();
    await contactUSPage.verifyGetInTouchisvisible();
    await contactUSPage.userCanContactUsSuccessfully(contactData.Name,contactData.Email,contactData.Subject,contactData.Message);
    await contactUSPage.validateThatSuccessMessageIsVisible();
    await contactUSPage.validateThatHomePageIsOpenedSuccessAfterPressingOnHome();

})
