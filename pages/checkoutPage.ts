import { type Page,type Locator ,expect } from "@playwright/test";

export class CheckOutPage
{
   
    readonly  page: Page;
    readonly addressDetailsTxt:Locator; 
    readonly ReviewOrderTxt:Locator;
    readonly commentField:Locator;
    readonly placeOrderBtn:Locator;


    constructor(page:Page){
        this.page=page;
        this.addressDetailsTxt=page.locator("//h2[normalize-space()='Address Details']");
        this.ReviewOrderTxt=page.locator("//h2[normalize-space()='Review Your Order']");
        this.commentField=page.locator(".form-control");
        this.placeOrderBtn=page.locator('.btn.btn-default.check_out');
    }
    async userCanAddComment(comment:any)
    {
        await this.commentField.fill(comment);
    }
    async userCanPlaceOrder()
    {
        await this.placeOrderBtn.click();
    }
    async validateAddressDetailsIsVisible(){
        await expect(this.addressDetailsTxt).toBeVisible();
    }
    async validateReviewOrderIsVisible(){
        await expect(this.ReviewOrderTxt).toBeVisible();
    }
}