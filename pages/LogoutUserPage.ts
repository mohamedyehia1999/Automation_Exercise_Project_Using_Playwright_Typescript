import { type Page,type Locator ,expect } from "@playwright/test";

export class LogoutPage {
    readonly page: Page;
    readonly logoutBtn:Locator;
    readonly login_Title:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.logoutBtn=page.getByRole('link',{name:'Logout'});
        this.login_Title=page.locator("//h2[normalize-space()='Login to your account']");
    
       
    }
    async userCanLoggedOutSuccessfully()
    {
        await this.logoutBtn.click();
            
    }
    async validateThatUserIsNaviggatedToLoginPage(){
        await expect(this.login_Title).toBeVisible();  
      }
}