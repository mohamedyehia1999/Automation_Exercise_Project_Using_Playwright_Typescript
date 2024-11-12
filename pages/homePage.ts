import { type Locator,type Page,expect } from '@playwright/test';
export class HomePage{
     page:Page;
     HomePageTitle:Locator;
     signup_login : Locator;
     ConatctUsLink:Locator;
     TestCaseLink:Locator;
     ProductLink:Locator;
     SubscriptionText:Locator;
     Subscription_Email:Locator;
     Subscription_Arrow:Locator;
     Subscription_SuccessMsg:Locator;
     CartLink:Locator;
    

    constructor(page:any){
        this.page=page;
        this.signup_login=page.locator("//a[normalize-space()='Signup / Login']");
        this.ConatctUsLink=page.getByRole('link',{name:' Contact us'});
        this.TestCaseLink=page.locator("//a[contains(text(),'Test Cases')]");
        this.HomePageTitle=page.locator("//*[@class='item active']//span[1]");
        this.ProductLink=page.locator("//a[@href='/products']");
        this.SubscriptionText=page.locator("//h2[normalize-space()='Subscription']");
        this.Subscription_Email=page.locator("#susbscribe_email");
        this.Subscription_Arrow=page.locator("#subscribe"); 
        this.Subscription_SuccessMsg=page.locator(".alert-success.alert");
        this.CartLink=page.getByRole('link',{name:'Cart'});
    }
    async goto(){
        await this.page.goto("https://automationexercise.com/");
        return this;
    }
    async ValidateThatHomePageisVisible(){
        await expect(this.HomePageTitle).toBeVisible();

    }
    async OpenRegisterationPage(){
        await this.signup_login.click();
    }
    async OpenLoginPage(){
        await this.signup_login.click();
    }
    async OPenContactUsPage(){
        await this.ConatctUsLink.click();
    }
    async OpenTestCasesPage(){
        await this.TestCaseLink.click();
    }
    async OpenProductPage(){
        await this.ProductLink.click();
    }
    async VerifySubscriptionInHomePage(Sub_email:any, successMessage:any){
        await this.SubscriptionText.scrollIntoViewIfNeeded();
        await expect(this.SubscriptionText).toBeVisible();
        await this.Subscription_Email.fill(Sub_email);
        await this.Subscription_Arrow.click();
        await expect(this.Subscription_SuccessMsg).toContainText(successMessage);
    }
    async OpenCartPage(){
        await this.CartLink.click();
    }



}