import{test} from '@playwright/test';
import {HomePage} from '../../pages/homePage';
import { SignupLoginPage } from '../../pages/SignupLoginPage';
import {RegisterPage} from '../../pages/registerPage';

const registerData=JSON.parse(JSON.stringify(require("../../utils/RegisterData.json")));

test.describe('Register User Tests',()=>{

    test.beforeEach(async({page})=>{
        const homePage= new HomePage(page);
        await homePage.goto();
    })

    test('Register User',async({page})=>{

        const homePage= new HomePage(page);
        const signup_loginPage= new SignupLoginPage(page);
        const registerPage= new RegisterPage(page);
        
        await homePage.openRegisterationPage();
        await signup_loginPage.validateatheSignupTitleISVisble();
        await signup_loginPage.signup(registerData.RegisterName,registerData.RegisterEmail);
        await registerPage.enterAccountInformation(registerData.Password , registerData.Day 
            , registerData.Month , registerData.Year 
            , registerData.Firstname , registerData.Lastname 
            , registerData.CompanyName );

        await registerPage.enterAddressInformation(registerData.AddressName , registerData.CountryName, 
            registerData.State, registerData.CityName, registerData.ZipCodeNumber, registerData.MobileNumber);
        
        await registerPage.verifyThatRegisterIsDoneSuccessfully(registerData.SuccesMessage);
        await registerPage.validateThatLoggedInAsUsernameIsVisible();
        await registerPage.verifyThatAccountDeletedIsVisible(registerData.DeletedMessage);
       
    })
    test('Register With Existing Email',async({page})=>{
       
        const homePage= new HomePage(page);
        const signup_loginPage= new SignupLoginPage(page);
    
        await homePage.openRegisterationPage();
        await signup_loginPage.validateatheSignupTitleISVisble();
        await signup_loginPage.signup(registerData.RegisterName,registerData.Registered_Email);
        await signup_loginPage.validateatheSignupTitleISVisble();
    });
});
