import { type Locator,type Page,expect } from '@playwright/test';
export class HomePage{
    readonly page:Page;
    readonly homePageTitle:Locator;
    readonly signup_login : Locator;
    readonly conatctUsLink:Locator;
    readonly testCaseLink:Locator;
    readonly productLink:Locator;
    readonly subscriptionText:Locator;
    readonly subscription_Email:Locator;
    readonly subscription_Arrow:Locator;
    readonly subscription_SuccessMsg:Locator;
    readonly cartLink:Locator;
    

    constructor(page:any){
        this.page=page;
        this.signup_login=page.locator("//a[normalize-space()='Signup / Login']");
        this.conatctUsLink=page.getByRole('link',{name:' Contact us'});
        this.testCaseLink=page.locator("//a[contains(text(),'Test Cases')]");
        this.homePageTitle=page.locator("//*[@class='item active']//span[1]");
        this.productLink=page.locator("//a[@href='/products']");
        this.subscriptionText=page.locator("//h2[normalize-space()='Subscription']");
        this.subscription_Email=page.locator("#susbscribe_email");
        this.subscription_Arrow=page.locator("#subscribe"); 
        this.subscription_SuccessMsg=page.locator(".alert-success.alert");
        this.cartLink=page.getByRole('link',{name:'Cart'});
    }
    async goto(){
        await this.page.goto("https://automationexercise.com/");
        return this;
    }
    async validateThatHomePageisVisible(){
        await expect(this.homePageTitle).toBeVisible();

    }
    async openRegisterationPage(){
        await this.signup_login.click();
    }
    async openLoginPage(){
        await this.signup_login.click();
    }
    async openContactUsPage(){
        await this.conatctUsLink.click();
    }
    async openTestCasesPage(){
        await this.testCaseLink.click();
    }
    async openProductPage(){
        await this.productLink.click();
    }
    async verifySubscriptionInHomePage(Sub_email:any, successMessage:any){
        await this.subscriptionText.scrollIntoViewIfNeeded();
        await expect(this.subscriptionText).toBeVisible();
        await this.subscription_Email.fill(Sub_email);
        await this.subscription_Arrow.click();
        await expect(this.subscription_SuccessMsg).toContainText(successMessage);
    }
    async openCartPage(){
        await this.cartLink.click();
    }



}