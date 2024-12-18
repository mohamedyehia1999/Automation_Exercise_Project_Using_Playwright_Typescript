import { type Page,type Locator ,expect } from "@playwright/test";

export class RegisterPage{

    readonly page: Page;
    readonly signup_Title: Locator;
    readonly name: Locator;
    readonly email: Locator;
    readonly signUp: Locator;
    readonly title : Locator;
    readonly password : Locator;
    readonly dayOfBirthday : Locator;
    readonly monthOfBirthday : Locator;
    readonly yearOfBirthday : Locator;
    readonly firstName : Locator;
    readonly lastName : Locator;
    readonly company : Locator;
    readonly address : Locator;
    readonly country : Locator;
    readonly state : Locator ;
    readonly city : Locator;
    readonly zipcode : Locator;
    readonly mobileNumber : Locator;
    readonly createBtn: Locator; 
    readonly successMsg: Locator;
    readonly continueLink: Locator;
    readonly loggedInUser:Locator;
    readonly deleteBtn:Locator;
    readonly deleteMsg:Locator;
    readonly newsletter:Locator;
    readonly offers:Locator;
    readonly emailexistMsg:Locator;

    constructor(page:any){
        this.page=page;
        this.signup_Title=page.locator("//h2[normalize-space()='New User Signup!']");
        this.name=page.getByPlaceholder("Name");
        this.email=page.locator("//*[@data-qa='signup-email']");
        this.signUp=page.getByRole('button',{name:'SignUp'});
        this.title=page.locator("#id_gender1");
        this.password=page.locator("#password");
        this.dayOfBirthday=page.locator("#days");
        this.monthOfBirthday=page.locator("#months");
        this.yearOfBirthday=page.locator("#years");
        this.newsletter=page.locator("#newsletter");
        this.offers=page.locator("#optin");
        this.firstName=page.locator("#first_name");
        this.lastName=page.locator("#last_name");
        this.company=page.locator("#company");
        this.address=page.locator("#address1");
        this.country=page.locator("#country");
        this.state=page.locator("#state");
        this.city=page.locator("#city");
        this.zipcode=page.locator("#zipcode");
        this.mobileNumber=page.locator("#mobile_number");
        this.createBtn=page.getByRole('button',{name:'Create Account'});
        this.successMsg=page.locator("//*[@data-qa='account-created']");
        this.continueLink=page.getByRole('link',{name:'Continue'});
        this.loggedInUser=page.locator("//header[@id='header']//li[1]//a[1]");
        this.deleteBtn=page.getByRole('link',{name:'Delete Account'});
        this.deleteMsg=page.locator("//*[@data-qa='account-deleted']");
        this.emailexistMsg=page.locator("//p[normalize-space()='Email Address already exist!']");
        
        

    }
    async enterReisterInformation(registerName: any , registerEmail: any , password: any ,day : any , month : any , year : any , firstName:any , lastName: any , company: any , address: any , country: any , state : any , city : any , zipcode :any , mobileNumber: any)
    {
        await this.name.fill(registerName);
        await this.email.fill(registerEmail);
        await this.signUp.click();
        await this.title.click();
        await this.password.fill(password);
        await this.dayOfBirthday.selectOption(day);
        await this.monthOfBirthday.selectOption(month);
        await this.yearOfBirthday.selectOption(year);
        await this.newsletter.click();
        await this.offers.click();
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.company.fill(company);
        await this.address.fill(address);
        await this.country.selectOption(country);
        await this.state.fill(state);
        await this.city.fill(city)
        await this.zipcode.fill(zipcode);
        await this.mobileNumber.fill(mobileNumber);
        await this.createBtn.click();
        
    }
    async validateatheSignupTitleISVisble(){
        await expect(this.signup_Title).toBeVisible();
    }
    async verifyThatRegisterIsDoneSuccessfully(SuccessMessage: any){
        await expect(this.successMsg).toContainText(SuccessMessage);
    }
    async validateThatLoggedInAsUsernameIsVisible(){
        await  this.continueLink.click();
        await  expect(this.loggedInUser).toBeVisible();
    }
    async verifyThatAccountDeletedIsVisible(deleteMessage: any){
        await this.deleteBtn.click();
        await expect(this.deleteMsg).toContainText(deleteMessage);
    }
    async registerWithExistEmail(Name:any,emailExist:any)
    {
        await this.name.fill(Name);
        await this.email.fill(emailExist);
        await this.signUp.click();
    }
    async verifyErrorEmaixIsExistMsg()
    {
        await expect(this.emailexistMsg).toBeVisible();

    }
}
