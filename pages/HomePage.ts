import { Locator, Page } from "@playwright/test";

export class Homepage{

    //locators
    private readonly page:Page;
    private readonly myaccountlink:Locator;
    private readonly registerlink:Locator;
    private readonly loginlink:Locator;
    private readonly searchboxtxt:Locator;
    private readonly searchbutton:Locator;


   //Constructor
   constructor(page:Page)
   {
        this.page=page;
        this.myaccountlink=page.locator('span:has-text("My Account")');
        this.registerlink=page.getByRole('link',{name:'Register'});
        this.loginlink=page.getByRole('link',{name:'Login'});
        this.searchboxtxt=page.getByRole('textbox', { name: 'Search' })
        this.searchbutton=page.locator('i.fa.fa-search');
   }

   //Actions
   //check if homepage exist
   async ishomepageExist()
   {
    let title=await this.page.title();
    if(title)
    {
        console.log("Homepage page displayed")
        return true
    }
    else
    {
        console.log("Homepage page not displayed")
        
    }
   }
    // Click "My Account" link
    async clickMyAccount(){
        try {
            await this.myaccountlink.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'My Account': ${error}`);
            throw error;
        }
    }

    // Click "Register" link
    async clickRegister(){
        try {
            await this.registerlink.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Register': ${error}`);
            throw error;
        }
    }

    // Click "Login" link
    async clickLogin(){
        try {
            await this.loginlink.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Login': ${error}`);
            throw error;
        }
    }

    // Enter product name in the search box
    async enterProductName(pName: string){
        try {
            await this.searchboxtxt.fill(pName);
        } catch (error) {
            console.log(`Exception occurred while entering product name: ${error}`);
            throw error;
        }
    }

    // Click the search button
    async clickSearch(){
        try {
            await this.searchbutton.click();
        } catch (error) {
            console.log(`Exception occurred while clicking 'Search': ${error}`);
            throw error;
        }
    }





}