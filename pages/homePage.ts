import { type Locator,type Page,expect } from '@playwright/test';
export class HomePage{
    proceedToCheckout() {
        throw new Error('Method not implemented.');
    }
    openCart() {
        throw new Error('Method not implemented.');
    }
    addProductToCart() {
        throw new Error('Method not implemented.');
    }
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
    readonly addToCartBtn:Locator;
    readonly firstProduct:Locator;
    readonly addToCartBtnFirstProduct:Locator;
    readonly viewCartBtn:Locator;

    
    

    constructor(page:any)

    {
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
        this.addToCartBtn=page.locator("//button[normalize-space()='Add to cart']");
        this.firstProduct=page.locator('.features_items .productinfo').nth(0);
        this.addToCartBtnFirstProduct=page.locator(".btn.btn-default.add-to-cart").nth(1);
        this.viewCartBtn=page.locator("//u[normalize-space()='View Cart']");


    }


    async goto(){
        await this.page.goto("https://automationexercise.com/");
        return this;
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

    async openCartPage(){
        await this.cartLink.click();
    }
    async addProductToCartFromHomePageAndOpenCart(){
        await this.firstProduct.hover();
        await this.addToCartBtnFirstProduct.click();
        await this.viewCartBtn.click();
    }

    async validateThatHomePageisVisible(){
        await expect(this.homePageTitle).toBeVisible();

    }
    async verifySubscriptionInHomePage(Sub_email:any, successMessage:any){
        await this.subscriptionText.scrollIntoViewIfNeeded();
        await expect(this.subscriptionText).toBeVisible();
        await this.subscription_Email.fill(Sub_email);
        await this.subscription_Arrow.click();
        await expect(this.subscription_SuccessMsg).toContainText(successMessage);
    
    }
}