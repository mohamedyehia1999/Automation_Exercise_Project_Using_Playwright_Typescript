import { type Page,type Locator ,expect } from "@playwright/test";

export class LoginPage
{
    page: Page;
    EmailLogin:Locator;
    PasswordLogin:Locator;
    LoginBtn:Locator;
    Login_Title:Locator;
    LoggedInUser:Locator;
    DeleteBtn:Locator;
    DeleteMsg:Locator;
    ErrorLoginMsg:Locator;
    


    constructor (page:any)
    {
        this.EmailLogin=page.locator("//*[@data-qa='login-email']");
        this.PasswordLogin=page.locator("//*[@data-qa='login-password']");
        this.LoginBtn=page.getByRole('button',{name:'Login'});
        this.Login_Title=page.locator("//h2[normalize-space()='Login to your account']");
        this.LoggedInUser=page.locator("//header[@id='header']//li[1]//a[1]");
        this.DeleteBtn=page.getByRole('link',{name:'Delete Account'});
        this.DeleteMsg=page.locator("//*[@data-qa='account-deleted']");
        this.ErrorLoginMsg=page.locator("//p[normalize-space()='Your email or password is incorrect!']");
    }
    async ValidateatheLoginTitleISVisble(){
        await expect(this.Login_Title).toBeVisible();
    }

    async UserCanLoginWithCorrectEmailAndPassowrd(email:any,password:any)
    {
        await this.EmailLogin.fill(email);
        await this.PasswordLogin.fill(password);
        await this.LoginBtn.click();

    }
    async ValidateThatLoggedInAsUsernameIsVisible(){
        await  expect(this.LoggedInUser).toBeVisible();
    }
    async VerifyThatAccountDeletedIsVisible(deleteMessage: any){
        await this.DeleteBtn.click();
        await expect(this.DeleteMsg).toContainText(deleteMessage);
    }
    async UserCannotLoginWithIncorrectEmailAndPassowrd(email:any,password:any)
    {
        await this.EmailLogin.fill(email);
        await this.PasswordLogin.fill(password);
        await this.LoginBtn.click();

    }
    async ValidateErrorLoginMessageIsVisible(){
        await expect(this.ErrorLoginMsg).toBeVisible();
    }

}