import { type Page,type Locator ,expect } from "@playwright/test";

export class ProductPage{
    page:Page;
    AllProductTitle:Locator;
    FirstProduct:Locator;
    Product_name:Locator;
    Price:Locator;
    Category:Locator;
    Availability:Locator;
    Condition:Locator;
    Brand:Locator;
    SearchField:Locator;
    Submit_Search:Locator;
    Search_result:Locator;
    Searched_Product_Title:Locator;
    First_Product:Locator;
    AddToCartBtnFirstProduct:Locator;
    AddToCartMsg:Locator;
    ContinueShopinBtn:Locator;
    Second_Product:Locator;
    AddToCartBtnSecondProduct:Locator;
    ViewCartBtn:Locator;


    constructor(page:Page)
    {
        this.AllProductTitle=page.locator("//h2[@class='title text-center']");
        this.FirstProduct=page.locator("//div[@class='col-sm-9 padding-right']//div[2]//div[1]//div[2]//ul[1]//li[1]//a[1]");
        this.Product_name=page.locator("//h2[normalize-space()='Blue Top']");
        this.Category=page.locator("//p[normalize-space()='Category: Women > Tops']");
        this.Price=page.locator("//span[normalize-space()='Rs. 500']");
        this.Availability=page.locator("//div[@class='product-details']//p[1]");
        this.Condition=page.locator("//div[@class='product-details']//p[2]");
        this.Brand=page.locator("//span[@class='google-anno-t']");
        this.SearchField=page.locator("#search_product");
        this.Submit_Search=page.locator("//button[@id='submit_search']");
        this.Search_result=page.locator("//div[@class='productinfo text-center']//p"); 
        this.Searched_Product_Title=page.locator(".title.text-center");
        this.First_Product=page.locator("//*[@alt='ecommerce website products']").nth(0);
        this.AddToCartBtnFirstProduct=page.locator(".btn.btn-default.add-to-cart").nth(1);
        this.AddToCartMsg=page.locator("//p[normalize-space()='Your product has been added to cart.']");
        this.ContinueShopinBtn=page.getByRole('button',{name:"Continue Shopping"});
        this.Second_Product=page.locator("//*[@alt='ecommerce website products']").nth(1);
        this.AddToCartBtnSecondProduct=page.locator(".btn.btn-default.add-to-cart").nth(2);
        this.ViewCartBtn=page.locator("//u[normalize-space()='View Cart']");
    }

    async ValidateThatAllProductPageIsVisible()
    {
        await expect(this.AllProductTitle).toBeVisible();
    }
    async UserIsLandedToProductDetailPage(){
        await this.FirstProduct.click();
    }
    async VerifyThatDetailIsVisible(){
        await expect(this.Product_name 
            && this.Condition 
            && this.Price 
            && this.Availability 
            && this.Condition 
            && this.Brand).toBeVisible();
    }
    async UserCanSearchOnProduct(productName:any)
    {
        await this.SearchField.fill(productName);
        await this.Submit_Search.click();
    }
    async VerifiedThatSearchedProductIsVisible(){
        await expect(this.Searched_Product_Title).toBeVisible();
    }
    async validateOnProductsRelatedToSearch(searchresult:any){
        await expect(this.Search_result).toContainText(searchresult);
    }
    async AddTheFirstProductToCart(){
    await this.First_Product.hover();
    await this.AddToCartBtnFirstProduct.click();
    await expect(this.AddToCartMsg).toBeVisible();
    await this.ContinueShopinBtn.click();
    await this.Second_Product.hover();
    await this.AddToCartBtnSecondProduct.click();
    await this.ViewCartBtn.click();
    }

    }

