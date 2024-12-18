import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {LoginPage} from '../pages/loginPage';

const loginData=JSON.parse(JSON.stringify(require("../utils/LoginData.json")));

test("Login With Correct Email and Password",async({page})=>
    {
        const homePage= new HomePage(page);
        const loginPage= new LoginPage(page);

        await homePage.goto();
        await homePage.openLoginPage();
        await loginPage.validateatheLoginTitleISVisble();
        await loginPage.userCanLoginWithCorrectEmailAndPassowrd(loginData.Email_Login,loginData.Password_Login);
        await loginPage.validateThatLoggedInAsUsernameIsVisible();
        await loginPage.verifyThatAccountDeletedIsVisible(loginData.DeletedMessage);
})
test("Login With Incorrect Email and Password",async({page})=>
    {
        const homePage= new HomePage(page);
        const loginPage= new LoginPage(page);

        await homePage.goto();
        await homePage.openLoginPage();
        await loginPage.validateatheLoginTitleISVisble();
        await loginPage.userCannotLoginWithIncorrectEmailAndPassowrd(loginData.IncorrectEmail,loginData.IncorrectPassword);
        await loginPage.validateErrorLoginMessageIsVisible();
        
})
