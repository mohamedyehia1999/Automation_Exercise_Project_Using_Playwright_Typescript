import { type Page,type Locator ,expect } from "@playwright/test";

export class LogoutPage {
    page: Page;
    LogoutBtn:Locator;
    Login_Title:Locator;

    constructor(page:Page){
        this.LogoutBtn=page.getByRole('link',{name:'Logout'});
        this.Login_Title=page.locator("//h2[normalize-space()='Login to your account']");
    
       
    }
    async UserCanLoggedOutSuccessfully()
    {
        await this.LogoutBtn.click();
            
    }
    async ValidateThatUserIsNaviggatedToLoginPage(){
        await expect(this.Login_Title).toBeVisible();    }
}