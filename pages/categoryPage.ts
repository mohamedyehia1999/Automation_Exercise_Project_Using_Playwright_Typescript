import { type Page,type Locator ,expect } from "@playwright/test";
export class CategoryPage{
    readonly page:Page;
    readonly categoryPageTitle:Locator;
    readonly womenLink:Locator;
    readonly menLink:Locator;
    readonly dressLink:Locator;
    readonly tShirtsLink:Locator;
    readonly categoryLink:Locator;
    readonly categoryTitle:Locator;

    constructor(page:Page){
        this.page=page;
        this.categoryPageTitle=page.locator("//h2[normalize-space()='Category']");
        this.womenLink=page.getByRole('link',{name:'Women'});
        this.menLink=page.locator("//a[normalize-space()='Men']")
        this.dressLink=page.getByRole('link',{name:'Dress'}); 
        this.tShirtsLink=page.getByRole('link',{name:'Tshirts'})
        this.categoryLink=page.locator('.panel-title');
        this.categoryTitle=page.locator('.title.text-center');
    }
    async clickOnWomenCategoryAndOpenDress()
    {
        await this.womenLink.click();
        await this.dressLink.click();
    }
    async clickOnMenCategoryAndOpenTshirts()
    {
        await this.menLink.click();
        await this.tShirtsLink.click();
    }
    async verifyCategoryPageTitleIsVisible(){
        await expect(this.categoryPageTitle).toBeVisible();
    }
    async verifyCategoryTitleIsVisible(){
        await expect(this.categoryTitle).toBeVisible();
    }

}
