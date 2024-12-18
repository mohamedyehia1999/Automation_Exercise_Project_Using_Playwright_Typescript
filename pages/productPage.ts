import { type Page,type Locator ,expect } from "@playwright/test";

export class ProductPage{
    readonly page:Page;
    readonly allProductTitle:Locator;
    readonly firstProduct:Locator;
    readonly product_name:Locator;
    readonly price:Locator;
    readonly category:Locator;
    readonly availability:Locator;
    readonly condition:Locator;
    readonly brand:Locator;
    readonly searchField:Locator;
    readonly submit_Search:Locator;
    readonly search_result:Locator;
    readonly searched_Product_Title:Locator;
    readonly first_Product:Locator;
    readonly addToCartBtnFirstProduct:Locator;
    readonly addToCartMsg:Locator;
    readonly continueShopinBtn:Locator;
    readonly second_Product:Locator;
    readonly addToCartBtnSecondProduct:Locator;
    readonly viewCartBtn:Locator;


    constructor(page:Page)
    {
        this.allProductTitle=page.locator("//h2[@class='title text-center']");
        this.firstProduct=page.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
        this.product_name=page.locator("//h2[normalize-space()='Blue Top']");
        this.category=page.locator("//p[normalize-space()='Category: Women > Tops']");
        this.price=page.locator("//span[normalize-space()='Rs. 500']");
        this.availability=page.locator("//div[@class='product-details']//p[1]");
        this.condition=page.locator("//div[@class='product-details']//p[2]");
        this.brand=page.locator("//span[@class='google-anno-t']");
        this.searchField=page.locator("#search_product");
        this.submit_Search=page.locator("//button[@id='submit_search']");
        this.search_result=page.locator("//div[@class='productinfo text-center']//p"); 
        this.searched_Product_Title=page.locator(".title.text-center");
        this.first_Product=page.locator("//*[@alt='ecommerce website products']").nth(0);
        this.addToCartBtnFirstProduct=page.locator(".btn.btn-default.add-to-cart").nth(1);
        this.addToCartMsg=page.locator("//p[normalize-space()='Your product has been added to cart.']");
        this.continueShopinBtn=page.getByRole('button',{name:"Continue Shopping"});
        this.second_Product=page.locator("//*[@alt='ecommerce website products']").nth(1);
        this.addToCartBtnSecondProduct=page.locator(".btn.btn-default.add-to-cart").nth(2);
        this.viewCartBtn=page.locator("//u[normalize-space()='View Cart']");
    }

    async validateThatAllProductPageIsVisible()
    {
        await expect(this.allProductTitle).toBeVisible();
    }
    async userIsLandedToProductDetailPage(){
        await this.firstProduct.click();
    }
    async verifyThatDetailIsVisible(){
        await expect(this.product_name 
            && this.condition 
            && this.price 
            && this.availability 
            && this.condition 
            && this.brand).toBeVisible();
    }
    async userCanSearchOnProduct(productName:any)
    {
        await this.searchField.fill(productName);
        await this.submit_Search.click();
    }
    async verifiedThatSearchedProductIsVisible(){
        await expect(this.searched_Product_Title).toBeVisible();
    }
    async validateOnProductsRelatedToSearch(searchresult:any){
        await expect(this.search_result).toContainText(searchresult);
    }
    async addTheFirstProductToCart(){
    await this.first_Product.hover();
    await this.addToCartBtnFirstProduct.click();
    await expect(this.addToCartMsg).toBeVisible();
    await this.continueShopinBtn.click();
    await this.second_Product.hover();
    await this.addToCartBtnSecondProduct.click();
    await this.viewCartBtn.click();
    }

    }

