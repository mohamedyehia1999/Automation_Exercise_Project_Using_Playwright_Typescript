import { type Page,type Locator ,expect } from "@playwright/test";

export class SignupLoginPage
{
    readonly signup_Title: Locator;
    readonly nameSignup: Locator;
    readonly emailSignup: Locator;
    readonly signUpBtn: Locator;
    readonly page: Page;
    readonly emailLogin:Locator;
    readonly passwordLogin:Locator;
    readonly loginBtn:Locator;
    readonly login_Title:Locator;
    readonly loggedInUser:Locator;
    readonly deleteBtn:Locator;
    readonly deleteMsg:Locator;
    readonly errorLoginMsg:Locator;
    readonly errorSignupMsg:Locator
    


    constructor (page:any)

    { 
        this.page=page;
        this.signup_Title=page.locator("//h2[normalize-space()='New User Signup!']");
        this.nameSignup=page.getByPlaceholder("Name");
        this.emailSignup=page.locator("//*[@data-qa='signup-email']");
        this.signUpBtn=page.getByRole('button',{name:'SignUp'});
        this.emailLogin=page.locator("//*[@data-qa='login-email']");
        this.passwordLogin=page.locator("//*[@data-qa='login-password']");
        this.loginBtn=page.getByRole('button',{name:'Login'});
        this.login_Title=page.locator("//h2[normalize-space()='Login to your account']");
        this.loggedInUser=page.locator("//header[@id='header']//li[1]//a[1]");
        this.deleteBtn=page.getByRole('link',{name:'Delete Account'});
        this.deleteMsg=page.locator("//*[@data-qa='account-deleted']");
        this.errorLoginMsg=page.locator("//p[normalize-space()='Your email or password is incorrect!']");
        this.errorSignupMsg=page.locator("//p[normalize-space()='This email address is already registered!']");
    }
    async signup(name:any,email:any)
    {
        await this.nameSignup.fill(name);
        await this.emailSignup.fill(email);
        await this.signUpBtn.click();
        
    }
    async login(email:any,password:any)
    {
        await this.emailLogin.fill(email);
        await this.passwordLogin.fill(password);
        await this.loginBtn.click();
        
    }

    async validateatheSignupTitleISVisble(){
        await expect(this.signup_Title).toBeVisible();
    }
    async validatetheErrorSignupMessageIsVisible(){
        await expect(this.errorSignupMsg).toBeVisible();
    }
    async validateatheLoginTitleISVisble(){
        await expect(this.login_Title).toBeVisible();
    }

    async validateThatLoggedInAsUsernameIsVisible(){
        await  expect(this.loggedInUser).toBeVisible();
    }
    async verifyThatAccountDeletedIsVisible(deleteMessage: any){
        await this.deleteBtn.click();
        await expect(this.deleteMsg).toContainText(deleteMessage);
    }
   
    async validateErrorLoginMessageIsVisible(){
        await expect(this.errorLoginMsg).toBeVisible();
    }
    

}