/**
 * Test Case: End-to-End Test on Demo E-commerce Application
 *
 * Purpose:
 * This test simulates a complete user flow on an e-commerce site.
 * 
 * Steps:
 * 1) Register a new account
 * 2) Logout after registration
 * 3) Login with the same account
 * 4) Search for a product and add it to the shopping cart
 * 5) Verify cart contents
 * 6) Attempt checkout (disabled since feature isn't available on demo site)
 */


import { test, expect, Page } from '@playwright/test';
import { RegistrationPage } from '../pages/RegistrationPage';
import { Homepage } from '../pages/HomePage';
import { randomDataUtil } from '../utils/randomDataGenerator';
import { TestConfig } from '../test.config';
import { LogoutPage } from '../pages/LogoutPage';
import { LoginPage } from '../pages/LoginPage';
import { MyAccountPage } from '../pages/MyAccountPage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


//main test where we will call all the methods
test("End to End test flow ", async ({ page }) => {
    const config = new TestConfig();
    await page.goto(config.appUrl);

    // Step 1: Register a new account and capture the generated email
    let registeredemail: string = await performRegistration(page);
    console.log("✅ Registration is completed!");

    // Step 2: Logout after successful registration
    await performLogout(page);
    console.log("✅ Logout is completed!");

    // Step 3: Login with the registered email
    await performLogin(page, registeredemail);
    console.log("✅ Login is completed!");

    // Step 4: Search for a product and add it to the cart
    await addProductToCart(page);
    console.log("✅ Product added to cart!");

    // Step 5: Verify the contents of the shopping cart
    await verifyShoppingCart(page);
    console.log("✅ Shopping cart verification completed!");

    // Step 6: Perform checkout (skipped for demo site)
    // await performCheckout(page);



})

//Register a new account
async function performRegistration(page: Page) {
    let homepage = new Homepage(page);
    let registerpage = new RegistrationPage(page);
    homepage.clickMyAccount();
    homepage.clickRegister();

    const  email: string = randomDataUtil.getEmail()
    await registerpage.enterAllTheDetails(randomDataUtil.getFirstName(), randomDataUtil.getlastName(), email, randomDataUtil.getPhone(), "Test1234", "Test1234")

    await registerpage.setPrivacyPolicy();
    await registerpage.clickContinue();

    const confirmmsg = await registerpage.getConfirmationMsg();
    expect(confirmmsg).toContain('Your Account Has Been Created!');
    return email
}

//Logout after registration
async function performLogout(page: Page) {
    const myAccountPage = new MyAccountPage(page);
    const logoutPage: LogoutPage = await myAccountPage.clickLogout();

    expect(await logoutPage.isContinueButtonVisible()).toBeTruthy();
    const homePage = await logoutPage.clickContinue();
    
    const  homepage = new Homepage(page);
    // expect(await homepage.ishomepageExist()).toBe(true);
}


// Function to log in using the registered email
async function performLogin(page: Page, email: string) {
    const config = new TestConfig();
    await page.goto(config.appUrl);
    const homepage = new Homepage(page);
    const registerpage = new RegistrationPage(page);
    homepage.clickMyAccount();
    homepage.clickLogin();

    const loginPage = new LoginPage(page);
    loginPage.login(email, "Test1234")

    const myAccountPage = new MyAccountPage(page);
    // expect (await myAccountPage.isMyAccountPageExists()).toBeTruthy();
  
}

//Search for a product and add it to the shopping cart
async function addProductToCart(page: Page) {
    let myAccountPage = new MyAccountPage(page);

    const homePage = new Homepage(page);
    const config = new TestConfig();
    let prodname: string = config.productName;
    let prodquantity = config.productQuantity;

    homePage.enterProductName(prodname);
    homePage.clickSearch();

    let searchResultsPage = new SearchResultsPage(page);
    expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();


    // Validate that the desired product exists in the results
    expect(await searchResultsPage.isProductExist(prodname)).toBeTruthy();

    // Select product and set quantity
    const productPage = await searchResultsPage.selectProduct(prodname);
    await productPage?.setQuantity(prodquantity);
    await productPage?.addToCart();  // Add product to shopping cart

    await page.waitForTimeout(3000); // Wait to simulate user delay

    // Confirm product was added
    expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
}

//Verify cart contents
async function verifyShoppingCart(page: Page) {
    const productPage = new ProductPage(page);

    // Navigate to shopping cart from product page
    await productPage.clickItemsToNavigateToCart();
    const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();

    console.log("🛒 Navigated to shopping cart!");

    const config = new TestConfig();

    // Validate that total price is correct (based on config)
    expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
     }



     // Function to perform checkout (disabled for demo site)
        async function performCheckout(page: Page) {
    // Checkout feature is not implemented since it's a demo site.
    // Place your checkout flow logic here if backend is available.
}
