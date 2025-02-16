import { type Page,type Locator ,expect } from "@playwright/test";

export class ProductPage{
    readonly page:Page;
    readonly allProductTitle:Locator;
    readonly firstProduct:Locator;
    readonly searchField:Locator;
    readonly submit_Search:Locator;
    readonly search_result:Locator;
    readonly searched_Product_Title:Locator;
    readonly first_Product:Locator;
    readonly addToCartBtn:Locator;
    readonly addToCartBtnFirstProduct:Locator;
    readonly addToCartMsg:Locator;
    readonly continueShopinBtn:Locator;
    readonly second_Product:Locator;
    readonly addToCartBtnSecondProduct:Locator;
    readonly viewCartBtn:Locator;
    readonly viewProductBtn:Locator;
   


    constructor(page:Page)
    {
        this.allProductTitle=page.getByText('All Products');
        this.firstProduct=page.locator('.features_items .productinfo').nth(0);
        this.searchField=page.locator("#search_product");
        this.submit_Search=page.locator("//button[@id='submit_search']");
        this.search_result=page.locator("//div[@class='productinfo text-center']//p"); 
        this.searched_Product_Title=page.locator(".title.text-center");
        this.addToCartBtnFirstProduct=page.locator(".btn.btn-default.add-to-cart").nth(1);
        this.addToCartMsg=page.locator("//p[normalize-space()='Your product has been added to cart.']");
        this.continueShopinBtn=page.getByRole('button',{name:"Continue Shopping"});
        this.second_Product=page.locator('.features_items .productinfo').nth(1);
        this.addToCartBtnSecondProduct=page.locator(".btn.btn-default.add-to-cart").nth(2);
        this.viewCartBtn=page.locator("//u[normalize-space()='View Cart']");
        this.viewProductBtn=page.getByRole('link', { name: 'View Product' });
        
    }

    
    async userIsLandedToProductDetailPage(){
        await this.viewProductBtn.nth(0).click();
    }
    
    async userCanSearchOnProduct(productName:any)
    {
        await this.searchField.fill(productName);
        await this.submit_Search.click();
    }
    async addProductsToCart(){
        await this.firstProduct.hover();
        await this.addToCartBtnFirstProduct.click();
        await expect(this.addToCartMsg).toBeVisible();
        await this.continueShopinBtn.click();
        await this.second_Product.hover();
        await this.addToCartBtnSecondProduct.click();
        await this.viewCartBtn.click();
        }
    async validateThatAllProductPageIsVisible()
    {
        await expect(this.allProductTitle).toBeVisible();
    }
    async verifiedThatSearchedProductIsVisible(){
        await expect(this.searched_Product_Title).toBeVisible();
    }
    async validateOnProductsRelatedToSearch(searchresult:any){
        await expect(this.search_result).toContainText(searchresult);
    }
   
      

    }

