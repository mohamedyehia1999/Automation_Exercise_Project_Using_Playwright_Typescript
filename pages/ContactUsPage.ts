import { type Page,type Locator ,expect } from "@playwright/test";
import path from "path";

export class ContactUSPage{
    page: Page;
    Name:Locator;
    Email:Locator;
    Subject:Locator;
    MessageField:Locator;
    File:Locator;
    Submit:Locator;
    GetInTouch:Locator;
    SuccessMsg:Locator;
    Home:Locator;
    HomePageTitle:Locator;
    

    constructor(page:Page){
        this.page=page;
        this.Name=page.getByPlaceholder('Name');
        this.Email=page.locator("//*[@name='email']");
        this.Subject=page.getByPlaceholder('Subject');
        this.MessageField=page.getByPlaceholder('Your Message Here');
        this.File=page.locator("//*[@name='upload_file']");
        this.Submit=page.locator("//*[@name='submit']");
        this.GetInTouch=page.locator("//h2[normalize-space()='Get In Touch']");
        this.SuccessMsg=page.locator("//*[@class='status alert alert-success']");
        this.Home=page.locator("//span[normalize-space()='Home']");
        this.HomePageTitle=page.locator("//*[@class='item active']//span[1]");
    }
    async UserCanContactUsSuccessfully(name:any, email:any,subject:any,message:any)
    {
        await this.Name.fill(name);
        await this.Email.fill(email);
        await this.Subject.fill(subject);
        await this.MessageField.fill(message);
        await this.File.setInputFiles(path.join(__dirname,'..', 'upload', 'Test.pdf'));
              this.page.on('dialog', dialog => dialog.accept());
        await this.Submit.click();

    }

    async VerifyGETINTOUCHisvisible(){
         await expect(this.GetInTouch).toBeVisible();
    }
    async ValidateThatSuccessMessageIsVisible(){
        await expect(this.SuccessMsg).toBeVisible();
    }
    async ValidateThatHomePageIsOpenedSuccessAfterPressingOnHome(){
        await this.Home.click();
        await expect(this.HomePageTitle).toBeVisible();
    }

    
}