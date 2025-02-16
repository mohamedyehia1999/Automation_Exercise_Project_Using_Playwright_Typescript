import { type Page,type Locator ,expect } from "@playwright/test";
export class ProductDetailsPage
{
    readonly page: Page;
    readonly productDetails:Locator;
    readonly product_name:Locator;
    readonly price:Locator;
    readonly category:Locator;
    readonly availability:Locator;
    readonly condition:Locator;
    readonly brand:Locator;
    readonly reviewName:Locator;
    readonly reviewEmail:Locator;
    readonly reviewContent:Locator;
    readonly submitReview:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.productDetails=page.locator('.product-details');
        this.product_name=page.locator("//h2[normalize-space()='Blue Top']");
        this.category=page.locator("//p[normalize-space()='Category: Women > Tops']");
        this.price=page.locator("//span[normalize-space()='Rs. 500']");
        this.availability=page.locator("//b[normalize-space()='Availability:']");
        this.condition=page.locator("//b[normalize-space()='Condition:']");
        this.brand=page.locator("//b[normalize-space()='Brand:']");
        this.reviewName=page.locator("#name");
        this.reviewEmail=page.locator("#email");
        this.reviewContent=page.locator("#review");   
        this.submitReview=page.locator('#button-review');        
    }
    async verifyProductDetailsPageVisibility()
    {
        await expect(this.productDetails).toBeVisible();

    }
    async verifyThatDetailsareVisible()
    {
   
        await expect(this.product_name).toBeVisible();
        await expect(this.category).toBeVisible();
        await expect(this.price).toBeVisible();
        await expect(this.availability).toBeVisible();
        await expect(this.condition).toBeVisible();
        await expect(this.brand).toBeVisible();
    }


}