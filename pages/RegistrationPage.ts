import { Page,Locator } from "@playwright/test";

export class RegistrationPage{
    private readonly page:Page;

    //Locator
    private readonly firstname: Locator;
    private readonly lastname:  Locator;
    private readonly email:     Locator;
    private readonly telephone: Locator;
    private readonly password: Locator;
    private readonly confirmpassword: Locator;
    private readonly policychk: Locator;
    private readonly continuebutton: Locator;
    private readonly confirmationmsg: Locator;

    //constructor
    constructor(page:Page)
    {
        this.page=page;
        this.firstname=page.getByTestId("input-firstname");
        this.lastname=page.getByTestId("input-lastname");
        this.email=page.getByTestId("input-email");
        this.telephone=page.getByTestId("input-telephone");
        this.password=page.getByTestId("input-password");
        this.confirmpassword=page.getByRole('textbox', { name: 'Password Confirm' });
        this.policychk=page.getByRole('checkbox');
        this.continuebutton=page.locator("input[value='Continue']");
        this.confirmationmsg=page.locator('h1:has-text("Your Account Has Been Created!")');

    }

    //Enter the details
    async enterAllTheDetails(fname:string,lname:string,email:string,phone:string,password:string,conpass:string): Promise<void>
    {
        await this.firstname.fill(fname)
        await this.lastname.fill(lname)
        await this.email.fill(email)
        await this.telephone.fill(phone)
        await this.password.fill(password)
        await this.confirmpassword.fill(conpass)
    }

    /**
     * Sets the first name in the registration form
     * @param fname - First name to enter
     */
    async setFirstName(fname: string): Promise<void> {
        await this.firstname.fill(fname);
    }

    /**
     * Sets the last name in the registration form
     * @param lname - Last name to enter
     */
    async setLastName(lname: string): Promise<void> {
        await this.lastname.fill(lname);
    }

    /**
     * Sets the email in the registration form
     * @param email - Email to enter
     */
    async setEmail(email: string): Promise<void> {
        await this.email.fill(email);
    }

    /**
     * Sets the telephone number in the registration form
     * @param tel - Telephone number to enter
     */
    async setTelephone(tel: string): Promise<void> {
        await this.telephone.fill(tel);
    }

    /**
     * Sets the password in the registration form
     * @param pwd - Password to enter
     */
    async setPassword(pwd: string): Promise<void> {
        await this.password.fill(pwd);
    }

    /**
     * Sets the confirm password in the registration form
     * @param pwd - Password to confirm
     */
    async setConfirmPassword(pwd: string): Promise<void> {
        await this.confirmpassword.fill(pwd);
    }

   
    //Checks the privacy policy checkbox
    async setPrivacyPolicy()
    {
        await this.policychk.check();
    }

    //click on continue button
    async clickContinue()
    {
        await this.continuebutton.click();
    }

   //get the confirmation message
   async getConfirmationMsg()
   {
        return await this.confirmationmsg.textContent() ?? '';
   }
   





















}