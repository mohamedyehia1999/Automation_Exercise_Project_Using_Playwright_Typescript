import { type Page,type Locator ,expect } from "@playwright/test";

export class LoginPage
{
    readonly page: Page;
    readonly emailLogin:Locator;
    readonly passwordLogin:Locator;
    readonly loginBtn:Locator;
    readonly login_Title:Locator;
    readonly loggedInUser:Locator;
    readonly deleteBtn:Locator;
    readonly deleteMsg:Locator;
    readonly errorLoginMsg:Locator;
    


    constructor (page:any)
    {
        this.emailLogin=page.locator("//*[@data-qa='login-email']");
        this.passwordLogin=page.locator("//*[@data-qa='login-password']");
        this.loginBtn=page.getByRole('button',{name:'Login'});
        this.login_Title=page.locator("//h2[normalize-space()='Login to your account']");
        this.loggedInUser=page.locator("//header[@id='header']//li[1]//a[1]");
        this.deleteBtn=page.getByRole('link',{name:'Delete Account'});
        this.deleteMsg=page.locator("//*[@data-qa='account-deleted']");
        this.errorLoginMsg=page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    }
    async validateatheLoginTitleISVisble(){
        await expect(this.login_Title).toBeVisible();
    }

    async userCanLoginWithCorrectEmailAndPassowrd(email:any,password:any)
    {
        await this.emailLogin.fill(email);
        await this.passwordLogin.fill(password);
        await this.loginBtn.click();

    }
    async validateThatLoggedInAsUsernameIsVisible(){
        await  expect(this.loggedInUser).toBeVisible();
    }
    async verifyThatAccountDeletedIsVisible(deleteMessage: any){
        await this.deleteBtn.click();
        await expect(this.deleteMsg).toContainText(deleteMessage);
    }
    async userCannotLoginWithIncorrectEmailAndPassowrd(email:any,password:any)
    {
        await this.emailLogin.fill(email);
        await this.passwordLogin.fill(password);
        await this.loginBtn.click();

    }
    async validateErrorLoginMessageIsVisible(){
        await expect(this.errorLoginMsg).toBeVisible();
    }

}