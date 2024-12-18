import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {RegisterPage} from '../pages/registerPage';

const registerData=JSON.parse(JSON.stringify(require("../utils/RegisterData.json")));

test('Register User',async({page})=>{

    const homePage= new HomePage(page);
    const registerPage= new RegisterPage(page);
    
    await homePage.goto();
    await homePage.openRegisterationPage();
    await registerPage.validateatheSignupTitleISVisble();
    await registerPage.enterReisterInformation(registerData.RegisterName , registerData.RegisterEmail 
        ,registerData.Password , registerData.Day 
        , registerData.Month , registerData.Year 
        , registerData.Firstname , registerData.Lastname 
        , registerData.CompanyName ,registerData.AddressName
        , registerData.CountryName , registerData.State 
        , registerData.CityName , registerData.ZipCodeNumber , registerData.MobileNumber);
    
    await registerPage.verifyThatRegisterIsDoneSuccessfully(registerData.SuccesMessage);
    await registerPage.validateThatLoggedInAsUsernameIsVisible();
    await registerPage.verifyThatAccountDeletedIsVisible(registerData.DeletedMessage);
   
})
test('Register With Existing Email',async({page})=>{
   
    const homePage= new HomePage(page);
    const registerPage= new RegisterPage(page);

    await homePage.goto();
    await homePage.openRegisterationPage();
    await registerPage.validateatheSignupTitleISVisble();
    await registerPage.registerWithExistEmail(registerData.RegisterName,registerData.Registered_Email);
    await registerPage.verifyErrorEmaixIsExistMsg();
})
;
