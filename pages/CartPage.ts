import { type Page,type Locator ,expect } from "@playwright/test";

export class CartPage{
    
    page: Page;
    SubscriptionText:Locator;
     Subscription_Email:Locator;
     Subscription_Arrow:Locator;
     Subscription_SuccessMsg:Locator;

     constructor(page:Page){
        this.SubscriptionText=page.locator("//h2[normalize-space()='Subscription']");
        this.Subscription_Email=page.locator("#susbscribe_email");
        this.Subscription_Arrow=page.locator("#subscribe"); 
        this.Subscription_SuccessMsg=page.locator(".alert-success.alert");
     }
     async VerifySubscriptionInCartPage(Sub_email:any, successMessage:any){
        await this.SubscriptionText.scrollIntoViewIfNeeded();
        await expect(this.SubscriptionText).toBeVisible();
        await this.Subscription_Email.fill(Sub_email);
        await this.Subscription_Arrow.click();
        await expect(this.Subscription_SuccessMsg).toContainText(successMessage);
    }
}