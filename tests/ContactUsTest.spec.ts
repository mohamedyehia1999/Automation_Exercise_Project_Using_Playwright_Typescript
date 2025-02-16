import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ContactUSPage } from '../pages/ContactUsPage';

const contactData = JSON.parse(JSON.stringify(require("../utils/ContactUsData.json")));

test.describe('Contact Us Tests', () => {
    let homePage: HomePage;
    let contactUsPage: ContactUSPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        contactUsPage = new ContactUSPage(page);
        await homePage.goto();
        await homePage.openContactUsPage();
        await contactUsPage.verifyGetInTouchisvisible();
    });

    test('User can Contact Us Successfully', async ({ page }) => {
        await contactUsPage.userCanContactUsSuccessfully(contactData.Name, contactData.Email, contactData.Subject, contactData.Message);
        await contactUsPage.validateThatSuccessMessageIsVisible();
        await contactUsPage.validateThatHomePageIsOpenedSuccessAfterPressingOnHome();
    });
});
