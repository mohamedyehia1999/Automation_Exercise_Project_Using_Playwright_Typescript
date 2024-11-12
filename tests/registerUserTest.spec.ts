import{test} from '@playwright/test';
import {HomePage} from '../pages/homePage';
import {RegisterPage} from '../pages/registerPage';

const registerData=JSON.parse(JSON.stringify(require("../utils/RegisterData.json")));

test('Register User',async({page})=>{

    const homePage= new HomePage(page);
    const registerPage= new RegisterPage(page);
    
    await homePage.goto();
    await homePage.OpenRegisterationPage();
    await registerPage.ValidateatheSignupTitleISVisble();
    await registerPage.EnterReisterInformation(registerData.RegisterName , registerData.RegisterEmail 
        ,registerData.Password , registerData.Day 
        , registerData.Month , registerData.Year 
        , registerData.Firstname , registerData.Lastname 
        , registerData.CompanyName ,registerData.AddressName
        , registerData.CountryName , registerData.State 
        , registerData.CityName , registerData.ZipCodeNumber , registerData.MobileNumber);
    
    await registerPage.VerifyThatRegisterIsDoneSuccessfully(registerData.SuccesMessage);
    await registerPage.ValidateThatLoggedInAsUsernameIsVisible();
    await registerPage.VerifyThatAccountDeletedIsVisible(registerData.DeletedMessage);
   
})
test('Register With Existing Email',async({page})=>{
   
    const homePage= new HomePage(page);
    const registerPage= new RegisterPage(page);

    await homePage.goto();
    await homePage.OpenRegisterationPage();
    await registerPage.ValidateatheSignupTitleISVisble();
    await registerPage.RegisterWithExistEmail(registerData.RegisterName,registerData.Registered_Email);
    await registerPage.VerifyErrorEmaixIsExistMsg();
})
;
