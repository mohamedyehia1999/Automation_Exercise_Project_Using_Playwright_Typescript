import { type Page,type Locator ,expect } from "@playwright/test";

export class RegisterPage{

    page: Page;
    Signup_Title: Locator;
    Name: Locator;
    Email: Locator;
    SignUp: Locator;
    Title : Locator;
    Password : Locator;
    DayOfBirthday : Locator;
    MonthOfBirthday : Locator;
    YearOfBirthday : Locator;
    FirstName : Locator;
    LastName : Locator;
    Company : Locator;
    Address : Locator;
    Country : Locator;
    State : Locator ;
    City : Locator;
    Zipcode : Locator;
    MobileNumber : Locator;
    CreateBtn: Locator; 
    SuccessMsg: Locator;
    ContinueLink: Locator;
    LoggedInUser:Locator;
    DeleteBtn:Locator;
    DeleteMsg:Locator;
    Newsletter:Locator;
    Offers:Locator;
    emailexistMsg:Locator;

    constructor(page:any){
        this.page=page;
        this.Signup_Title=page.locator("//h2[normalize-space()='New User Signup!']");
        this.Name=page.getByPlaceholder("Name");
        this.Email=page.locator("//*[@data-qa='signup-email']");
        this.SignUp=page.getByRole('button',{name:'SignUp'});
        this.Title=page.locator("#id_gender1");
        this.Password=page.locator("#password");
        this.DayOfBirthday=page.locator("#days");
        this.MonthOfBirthday=page.locator("#months");
        this.YearOfBirthday=page.locator("#years");
        this.Newsletter=page.locator("#newsletter");
        this.Offers=page.locator("#optin");
        this.FirstName=page.locator("#first_name");
        this.LastName=page.locator("#last_name");
        this.Company=page.locator("#company");
        this.Address=page.locator("#address1");
        this.Country=page.locator("#country");
        this.State=page.locator("#state");
        this.City=page.locator("#city");
        this.Zipcode=page.locator("#zipcode");
        this.MobileNumber=page.locator("#mobile_number");
        this.CreateBtn=page.getByRole('button',{name:'Create Account'});
        this.SuccessMsg=page.locator("//*[@data-qa='account-created']");
        this.ContinueLink=page.getByRole('link',{name:'Continue'});
        this.LoggedInUser=page.locator("//header[@id='header']//li[1]//a[1]");
        this.DeleteBtn=page.getByRole('link',{name:'Delete Account'});
        this.DeleteMsg=page.locator("//*[@data-qa='account-deleted']");
        this.emailexistMsg=page.locator("//p[normalize-space()='Email Address already exist!']");
        
        

    }
    async EnterReisterInformation(registerName: any , registerEmail: any , password: any ,day : any , month : any , year : any , firstName:any , lastName: any , company: any , address: any , country: any , state : any , city : any , zipcode :any , mobileNumber: any)
    {
        await this.Name.fill(registerName);
        await this.Email.fill(registerEmail);
        await this.SignUp.click();
        await this.Title.click();
        await this.Password.fill(password);
        await this.DayOfBirthday.selectOption(day);
        await this.MonthOfBirthday.selectOption(month);
        await this.YearOfBirthday.selectOption(year);
        await this.Newsletter.click();
        await this.Offers.click();
        await this.FirstName.fill(firstName);
        await this.LastName.fill(lastName);
        await this.Company.fill(company);
        await this.Address.fill(address);
        await this.Country.selectOption(country);
        await this.State.fill(state);
        await this.City.fill(city)
        await this.Zipcode.fill(zipcode);
        await this.MobileNumber.fill(mobileNumber);
        await this.CreateBtn.click();
        
    }
    async ValidateatheSignupTitleISVisble(){
        await expect(this.Signup_Title).toBeVisible();
    }
    async VerifyThatRegisterIsDoneSuccessfully(SuccessMessage: any){
        await expect(this.SuccessMsg).toContainText(SuccessMessage);
    }
    async ValidateThatLoggedInAsUsernameIsVisible(){
        await  this.ContinueLink.click();
        await  expect(this.LoggedInUser).toBeVisible();
    }
    async VerifyThatAccountDeletedIsVisible(deleteMessage: any){
        await this.DeleteBtn.click();
        await expect(this.DeleteMsg).toContainText(deleteMessage);
    }
    async RegisterWithExistEmail(Name:any,emailExist:any)
    {
        await this.Name.fill(Name);
        await this.Email.fill(emailExist);
        await this.SignUp.click();
    }
    async VerifyErrorEmaixIsExistMsg()
    {
        await expect(this.emailexistMsg).toBeVisible();

    }
}
