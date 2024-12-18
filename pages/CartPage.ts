import { type Page,type Locator ,expect } from "@playwright/test";

export class CartPage{
    
   readonly page: Page;
   readonly subscriptionText:Locator;
   readonly subscription_Email:Locator;
   readonly subscription_Arrow:Locator;
   readonly subscription_SuccessMsg:Locator;

     constructor(page:Page){
        this.subscriptionText=page.locator("//h2[normalize-space()='Subscription']");
        this.subscription_Email=page.locator("#susbscribe_email");
        this.subscription_Arrow=page.locator("#subscribe"); 
        this.subscription_SuccessMsg=page.locator(".alert-success.alert");
     }
     async verifySubscriptionInCartPage(Sub_email:any, successMessage:any){
        await this.subscriptionText.scrollIntoViewIfNeeded();
        await expect(this.subscriptionText).toBeVisible();
        await this.subscription_Email.fill(Sub_email);
        await this.subscription_Arrow.click();
        await expect(this.subscription_SuccessMsg).toContainText(successMessage);
    }
}