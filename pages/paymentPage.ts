import { type Page,type Locator ,expect } from "@playwright/test";

export class PaymentPage
{
    readonly page: Page;
    readonly nameOnCardField:Locator;
    readonly cardNumberField:Locator;
    readonly expireMonthField:Locator;
    readonly expireYearField:Locator;
    readonly cvcField:Locator;
    readonly payAndConfirmBtn:Locator;
    readonly orderPlacedSuccessMsg:Locator;
    readonly continueBtn:Locator;
    readonly downloadInvoiceBtn:Locator;

    constructor(page:Page)
    {
         this.page=page;
         this.nameOnCardField=page.locator("//input[@name='name_on_card']");
         this.cardNumberField=page.locator("//input[@name='card_number']");
         this.expireMonthField=page.locator("//*[@name='expiry_month']");
         this.expireYearField=page.locator("//*[@name='expiry_year']");
         this.cvcField=page.locator("//input[@name='cvc']");
         this.payAndConfirmBtn=page.getByRole('button',{name:'Pay and Confirm Order'});
         this.orderPlacedSuccessMsg=page.locator("//p[normalize-space()='Congratulations! Your order has been confirmed!']");
         this.downloadInvoiceBtn=page.locator("//a[normalize-space()='Download Invoice']");
         this.continueBtn=page.locator("//a[normalize-space()='Continue']");

    }
    async enterPaymentDetails(name:any, cardNumber:any, cvc:any, expireMonth:any, expireYear:any)
    {
        await this.nameOnCardField.fill(name);
        await this.cardNumberField.fill(cardNumber);
        await this.cvcField.fill(cvc);
        await this.expireMonthField.fill(expireMonth);
        await this.expireYearField.fill(expireYear);
    }
    async validateThatOrderIsPlacedSuccessfully()
    {
        await this.payAndConfirmBtn.click();
        await expect(this.orderPlacedSuccessMsg).toBeVisible();
    }

}