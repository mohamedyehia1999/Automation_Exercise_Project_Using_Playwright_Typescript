import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {SignupLoginPage} from '../pages/SignupLoginPage';
import { LogoutPage } from '../pages/LogoutUserPage';

const loginData=JSON.parse(JSON.stringify(require("../utils/LoginData.json")));
 test('User Can Logout Successfully',async({page})=>{
    const homePage= new HomePage(page);
    const signup_loginPage= new SignupLoginPage(page);
    const logoutPage=new LogoutPage(page);

    await homePage.goto();
    await homePage.openLoginPage();
    await signup_loginPage.validateatheLoginTitleISVisble();
    await signup_loginPage.login(loginData.Login_Account , loginData.Password_Login);
    await signup_loginPage.validateThatLoggedInAsUsernameIsVisible();
    await logoutPage.userCanLoggedOutSuccessfully();
   await logoutPage.validateThatUserIsNaviggatedToLoginPage();
 })