import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { SignupLoginPage } from '../pages/SignupLoginPage';

const loginData = JSON.parse(JSON.stringify(require("../utils/LoginData.json")));

test.describe('Login Tests', () => {
    let homePage: HomePage;
    let signup_login: SignupLoginPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        signup_login = new SignupLoginPage(page);

        await homePage.goto();
        await homePage.openLoginPage();
        await signup_login.validateatheLoginTitleISVisble();
    });

    test('Login With Correct Email and Password', async ({ page }) => {
        await signup_login.login(loginData.Email_Login, loginData.Password_Login);
        await signup_login.validateThatLoggedInAsUsernameIsVisible();
        await signup_login.verifyThatAccountDeletedIsVisible(loginData.DeletedMessage);
    });

    test('Login With Incorrect Email and Password', async ({ page }) => {
        await signup_login.login(loginData.IncorrectEmail, loginData.IncorrectPassword);
        await signup_login.validateErrorLoginMessageIsVisible();
    });
});
