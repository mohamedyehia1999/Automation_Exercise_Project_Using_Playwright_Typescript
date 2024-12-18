import { type Page,type Locator ,expect } from "@playwright/test";
import path from "path";

export class ContactUSPage{
    readonly page: Page;
    readonly name:Locator;
    readonly email:Locator;
    readonly subject:Locator;
    readonly messageField:Locator;
    readonly file:Locator;
    readonly submit:Locator;
    readonly getInTouch:Locator;
    readonly successMsg:Locator;
    readonly home:Locator;
    readonly homePageTitle:Locator;
    

    constructor(page:Page){
        this.page=page;
        this.name=page.getByPlaceholder('Name');
        this.email=page.locator("//*[@name='email']");
        this.subject=page.getByPlaceholder('Subject');
        this.messageField=page.getByPlaceholder('Your Message Here');
        this.file=page.locator("//*[@name='upload_file']");
        this.submit=page.locator("//*[@name='submit']");
        this.getInTouch=page.locator("//h2[normalize-space()='Get In Touch']");
        this.successMsg=page.locator("//*[@class='status alert alert-success']");
        this.home=page.locator("//span[normalize-space()='Home']");
        this.homePageTitle=page.locator("//*[@class='item active']//span[1]");
    }
    async userCanContactUsSuccessfully(name:any, email:any,subject:any,message:any)
    {
        await this.name.fill(name);
        await this.email.fill(email);
        await this.subject.fill(subject);
        await this.messageField.fill(message);
        await this.file.setInputFiles(path.join(__dirname,'..', 'upload', 'Test.pdf'));
              this.page.on('dialog', dialog => dialog.accept());
        await this.submit.click();
              this.page.on('dialog', dialog => dialog.accept());

    }

    async verifyGetInTouchisvisible(){
         await expect(this.getInTouch).toBeVisible();
    }
    async validateThatSuccessMessageIsVisible(){
        await expect(this.successMsg).toBeVisible();
    }
    async validateThatHomePageIsOpenedSuccessAfterPressingOnHome(){
        await this.home.click();
        await expect(this.homePageTitle).toBeVisible();
    }

    
}