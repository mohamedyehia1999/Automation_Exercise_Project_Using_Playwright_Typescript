import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {LoginPage} from '../pages/loginPage';
import { LogoutPage } from '../pages/LogoutUserPage';

const loginData=JSON.parse(JSON.stringify(require("../utils/LoginData.json")));
 test('User Can Logout Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const loginPage= new LoginPage(page);
    const logoutPage=new LogoutPage(page);

    await homePage.goto();
    await homePage.OpenLoginPage();
    await loginPage.ValidateatheLoginTitleISVisble();
    await loginPage.UserCanLoginWithCorrectEmailAndPassowrd(loginData.Login_Account , loginData.Password_Login);
    await loginPage.ValidateThatLoggedInAsUsernameIsVisible();
    await logoutPage.UserCanLoggedOutSuccessfully();
   await logoutPage.ValidateThatUserIsNaviggatedToLoginPage();
 })