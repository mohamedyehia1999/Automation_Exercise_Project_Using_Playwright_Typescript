import { type Page,type Locator ,expect } from "@playwright/test";

export class CartPage{
    
   readonly page: Page;
   readonly proceedToCheckoutBtn:Locator;
   readonly cartItems:Locator;
   readonly productPrice:Locator;
   readonly productQuantity:Locator;
   readonly totalPrice:Locator;
   readonly quantityInput:Locator;
   readonly productQty1:Locator;
   readonly removeProductBtn:Locator;
   readonly subscriptionText:Locator;
   readonly subscription_Email:Locator;
   readonly subscription_Arrow:Locator;
   readonly subscription_SuccessMsg:Locator;
   readonly viewCartBtn:Locator;
   readonly addToCartBtn:Locator;
   readonly register_loginLink:Locator;
   readonly continueOnCartBtn:Locator;

     constructor(page:Page)
     {
        this.page=page;
        this.proceedToCheckoutBtn=page.locator('.btn.btn-default.check_out');
        this.cartItems=page.locator('.cart_description');
        this.productPrice=page.locator('.cart_info .cart_price'); 
        this.productQuantity=page.locator(".cart_quantity_button.disabled");
        this.productQty1=page.locator("tr[id='product-1'] button[class='disabled']"); 
        this.totalPrice=page.locator('.cart_total_price');
        this.removeProductBtn=page.locator('.cart_quantity_delete');
        this.quantityInput=page.locator('#quantity');
        this.subscriptionText=page.locator("//h2[normalize-space()='Subscription']");
        this.subscription_Email=page.locator("#susbscribe_email");
        this.subscription_Arrow=page.locator("#subscribe"); 
        this.subscription_SuccessMsg=page.locator(".alert-success.alert");
        this.viewCartBtn=page.getByRole('button',{name:'View Cart'});
        this.addToCartBtn=page.getByRole('button',{name:'Add to Cart'});
        this.register_loginLink=page.locator("//u[normalize-space()='Register / Login']");
        this.continueOnCartBtn=page.getByRole('button',{name:'Continue On Cart'});


     }
     async openCheckoutPage(){
        await this.proceedToCheckoutBtn.click();
     }
     async openRegisterLoginPage(){ 
         await this.register_loginLink.click();
     }
     async verifyBothProductsAreAddedToCart()
     {
     const cartItems = await this.cartItems.count();
     expect(cartItems).toBe(2);
 
     }
     async verifyTheirPrices_Quantity_TotalPrice()
     {
         const firstProductPrice = (await this.productPrice.nth(0).textContent())?.trim();
         const secondProductPrice = (await this.productPrice.nth(1).textContent())?.trim();
         const firstProductQuantity = (await this.productQty1.nth(0).textContent())?.trim();
         const secondProductQuantity = (await this.productQty1.nth(1).textContent())?.trim();
         const totalPriceForProduct1 = (await this.totalPrice.nth(0).textContent())?.trim();
         const totalPriceForProduct2 = (await this.totalPrice.nth(1).textContent())?.trim();
     
 
         expect(firstProductPrice).toContain('Rs. 500');
         expect(secondProductPrice).toContain('Rs. 400');
         expect(firstProductQuantity).toContain('1');
         expect(secondProductQuantity).toContain('1');
         expect(totalPriceForProduct1).toContain('Rs. 500');
         expect(totalPriceForProduct2).toContain('Rs. 400');
 
     }
     async verifySubscriptionInCartPage(Sub_email:any, successMessage:any){
        await this.subscriptionText.scrollIntoViewIfNeeded();
        await expect(this.subscriptionText).toBeVisible();
        await this.subscription_Email.fill(Sub_email);
        await this.subscription_Arrow.click();
        await expect(this.subscription_SuccessMsg).toContainText(successMessage);
    }
    /*
   
    async verifyProductQuantityInCart() {
        await this.viewProductBtn.first().click();
        await this.quantityInput.fill('4');
        await this.addToCartBtn.click();
        await this.viewCartBtn.click();
        //const cartQuantity = (await this.productQuantity.textContent())?.trim();
        expect(await this.productQuantity.textContent()).toContain('4');
}
        */
}