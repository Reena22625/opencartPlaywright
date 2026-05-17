# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEndTest.spec.ts >> End to End test flow @end-to-end
- Location: tests\EndtoEndTest.spec.ts:32:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - button "$ Currency " [ref=e7] [cursor=pointer]:
        - strong [ref=e8]: $
        - text: Currency
        - generic [ref=e9]: 
      - list [ref=e11]:
        - listitem [ref=e12]:
          - link "" [ref=e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - generic [ref=e14]: 
          - text: "123456789"
        - listitem [ref=e15]:
          - link " My Account" [ref=e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=e17]: 
            - text: My Account
        - listitem [ref=e19]:
          - link " Wish List (0)" [ref=e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=e21]: 
            - text: Wish List (0)
        - listitem [ref=e22]:
          - link " Shopping Cart" [ref=e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=e24]: 
            - text: Shopping Cart
        - listitem [ref=e25]:
          - link " Checkout" [ref=e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=e27]: 
            - text: Checkout
  - banner [ref=e28]:
    - generic [ref=e30]:
      - heading "Qafox.com" [level=1] [ref=e33]:
        - link "Qafox.com" [ref=e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=e36]:
        - textbox "Search" [ref=e37]
        - button "" [ref=e39] [cursor=pointer]:
          - generic [ref=e40]: 
      - button " 0 item(s) - $0.00" [ref=e43] [cursor=pointer]:
        - generic [ref=e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=e46]:
    - generic: 
    - list [ref=e48]:
      - listitem [ref=e49]:
        - link "Desktops" [ref=e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=e51]:
        - link "Laptops & Notebooks" [ref=e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=e53]:
        - link "Components" [ref=e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=e55]:
        - link "Tablets" [ref=e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=e57]:
        - link "Software" [ref=e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=e59]:
        - link "Phones & PDAs" [ref=e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=e61]:
        - link "Cameras" [ref=e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=e63]:
        - link "MP3 Players" [ref=e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=e65]:
    - list [ref=e66]:
      - listitem [ref=e67]:
        - link "" [ref=e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
          - generic [ref=e69]: 
      - listitem [ref=e70]:
        - link "Account" [ref=e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
    - generic [ref=e72]:
      - generic [ref=e73]:
        - heading "My Account" [level=2] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - link "Edit your account information" [ref=e77] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
          - listitem [ref=e78]:
            - link "Change your password" [ref=e79] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/password
          - listitem [ref=e80]:
            - link "Modify your address book entries" [ref=e81] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - listitem [ref=e82]:
            - link "Modify your wish list" [ref=e83] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
        - heading "My Orders" [level=2] [ref=e84]
        - list [ref=e85]:
          - listitem [ref=e86]:
            - link "View your order history" [ref=e87] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - listitem [ref=e88]:
            - link "Downloads" [ref=e89] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - listitem [ref=e90]:
            - link "Your Reward Points" [ref=e91] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - listitem [ref=e92]:
            - link "View your return requests" [ref=e93] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - listitem [ref=e94]:
            - link "Your Transactions" [ref=e95] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - listitem [ref=e96]:
            - link "Recurring payments" [ref=e97] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
        - heading "My Affiliate Account" [level=2] [ref=e98]
        - list [ref=e99]:
          - listitem [ref=e100]:
            - link "Register for an affiliate account" [ref=e101] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/affiliate/add
        - heading "Newsletter" [level=2] [ref=e102]
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "Subscribe / unsubscribe to newsletter" [ref=e105] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - complementary [ref=e106]:
        - generic [ref=e107]:
          - link "My Account" [ref=e108] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Edit Account" [ref=e109] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
          - link "Password" [ref=e110] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/password
          - link "Address Book" [ref=e111] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=e112] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=e113] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=e114] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=e115] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=e116] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=e117] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=e118] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=e119] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
          - link "Logout" [ref=e120] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/logout
  - contentinfo [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - heading "Information" [level=5] [ref=e125]
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "About Us" [ref=e128] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e129]:
              - link "Delivery Information" [ref=e130] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e131]:
              - link "Privacy Policy" [ref=e132] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e133]:
              - link "Terms & Conditions" [ref=e134] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e135]:
          - heading "Customer Service" [level=5] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Us" [ref=e139] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e140]:
              - link "Returns" [ref=e141] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e142]:
              - link "Site Map" [ref=e143] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e144]:
          - heading "Extras" [level=5] [ref=e145]
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Brands" [ref=e148] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e149]:
              - link "Gift Certificates" [ref=e150] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e151]:
              - link "Affiliate" [ref=e152] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e153]:
              - link "Specials" [ref=e154] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e155]:
          - heading "My Account" [level=5] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "My Account" [ref=e159] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e160]:
              - link "Order History" [ref=e161] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e162]:
              - link "Wish List" [ref=e163] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e164]:
              - link "Newsletter" [ref=e165] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e166]
      - paragraph [ref=e167]:
        - text: Powered By
        - link "OpenCart" [ref=e168] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  8   |  * 1) Register a new account
  9   |  * 2) Logout after registration
  10  |  * 3) Login with the same account
  11  |  * 4) Search for a product and add it to the shopping cart
  12  |  * 5) Verify cart contents
  13  |  * 6) Attempt checkout (disabled since feature isn't available on demo site)
  14  |  */
  15  | 
  16  | 
  17  | import { test, expect, Page } from '@playwright/test';
  18  | import { RegistrationPage } from '../pages/RegistrationPage';
  19  | import { Homepage } from '../pages/HomePage';
  20  | import { randomDataUtil } from '../utils/randomDataGenerator';
  21  | import { TestConfig } from '../test.config';
  22  | import { LogoutPage } from '../pages/LogoutPage';
  23  | import { LoginPage } from '../pages/LoginPage';
  24  | import { MyAccountPage } from '../pages/MyAccountPage';
  25  | import { SearchResultsPage } from '../pages/SearchResultsPage';
  26  | import { ProductPage } from '../pages/ProductPage';
  27  | import { ShoppingCartPage } from '../pages/ShoppingCartPage';
  28  | import { CheckoutPage } from '../pages/CheckoutPage';
  29  | 
  30  | 
  31  | //main test where we will call all the methods
  32  | test("End to End test flow @end-to-end", async ({ page }) => {
  33  |     const config = new TestConfig();
  34  |     await page.goto(config.appUrl);
  35  | 
  36  |     // Step 1: Register a new account and capture the generated email
  37  |     let registeredemail: string = await performRegistration(page);
  38  |     console.log("✅ Registration is completed!");
  39  | 
  40  |     // Step 2: Logout after successful registration
  41  |     await performLogout(page);
  42  |     console.log("✅ Logout is completed!");
  43  | 
  44  |     // Step 3: Login with the registered email
  45  |     await performLogin(page, registeredemail);
  46  |     console.log("✅ Login is completed!");
  47  | 
  48  |     // Step 4: Search for a product and add it to the cart
  49  |     await addProductToCart(page);
  50  |     console.log("✅ Product added to cart!");
  51  | 
  52  |     // Step 5: Verify the contents of the shopping cart
  53  |     await verifyShoppingCart(page);
  54  |     console.log("✅ Shopping cart verification completed!");
  55  | 
  56  |     // Step 6: Perform checkout (skipped for demo site)
  57  |     // await performCheckout(page);
  58  | 
  59  | 
  60  | 
  61  | })
  62  | 
  63  | //Register a new account
  64  | async function performRegistration(page: Page) {
  65  |     let homepage = new Homepage(page);
  66  |     let registerpage = new RegistrationPage(page);
  67  |     homepage.clickMyAccount();
  68  |     homepage.clickRegister();
  69  | 
  70  |     let email: string = randomDataUtil.getEmail()
  71  |     await registerpage.enterAllTheDetails(randomDataUtil.getFirstName(), randomDataUtil.getlastName(), email, randomDataUtil.getPhone(), "Test1234", "Test1234")
  72  | 
  73  |     await registerpage.setPrivacyPolicy();
  74  |     await registerpage.clickContinue();
  75  | 
  76  |     const confirmmsg = await registerpage.getConfirmationMsg();
  77  |     expect(confirmmsg).toContain('Your Account Has Been Created!');
  78  |     return email
  79  | }
  80  | 
  81  | //Logout after registration
  82  | async function performLogout(page: Page) {
  83  |     let myAccountPage = new MyAccountPage(page);
  84  |     let logoutPage = await myAccountPage.clickLogout();
  85  | 
  86  |     expect(await logoutPage.isContinueButtonVisible()).toBeTruthy();
  87  |     let homePage1 = await logoutPage.clickContinue();
  88  |     
  89  |     // let homepage = new Homepage(page);
  90  |     // expect(await homepage.ishomepageExist()).toBe(true);
  91  | }
  92  | 
  93  | 
  94  | // Function to log in using the registered email
  95  | async function performLogin(page: Page, email: string) {
  96  |     const config = new TestConfig();
  97  |     await page.goto(config.appUrl);
  98  |     let homepage = new Homepage(page);
  99  |     let registerpage = new RegistrationPage(page);
  100 |     homepage.clickMyAccount();
  101 |     homepage.clickLogin();
  102 | 
  103 |     let loginPage = new LoginPage(page);
  104 |     loginPage.login(email, "Test1234")
  105 | 
  106 |     let myAccountPage = new MyAccountPage(page);
  107 |     const isLoggedIn = await myAccountPage.isMyAccountPageExists();
> 108 |     expect(isLoggedIn).toBeTruthy();
      |                        ^ Error: expect(received).toBeTruthy()
  109 | }
  110 | 
  111 | //Search for a product and add it to the shopping cart
  112 | async function addProductToCart(page: Page) {
  113 |     let myAccountPage = new MyAccountPage(page);
  114 | 
  115 |     const homePage = new Homepage(page);
  116 |     const config = new TestConfig();
  117 |     let prodname: string = config.productName;
  118 |     let prodquantity = config.productQuantity;
  119 | 
  120 |     homePage.enterProductName(prodname);
  121 |     homePage.clickSearch();
  122 | 
  123 |     let searchResultsPage = new SearchResultsPage(page);
  124 |     expect(await searchResultsPage.isSearchResultsPageExists()).toBeTruthy();
  125 | 
  126 | 
  127 |     // Validate that the desired product exists in the results
  128 |     expect(await searchResultsPage.isProductExist(prodname)).toBeTruthy();
  129 | 
  130 |     // Select product and set quantity
  131 |     const productPage = await searchResultsPage.selectProduct(prodname);
  132 |     await productPage?.setQuantity(prodquantity);
  133 |     await productPage?.addToCart();  // Add product to shopping cart
  134 | 
  135 |     await page.waitForTimeout(3000); // Wait to simulate user delay
  136 | 
  137 |     // Confirm product was added
  138 |     expect(await productPage?.isConfirmationMessageVisible()).toBe(true);
  139 | }
  140 | 
  141 | //Verify cart contents
  142 | async function verifyShoppingCart(page: Page) {
  143 |     const productPage = new ProductPage(page);
  144 | 
  145 |     // Navigate to shopping cart from product page
  146 |     await productPage.clickItemsToNavigateToCart();
  147 |     const shoppingCartPage: ShoppingCartPage = await productPage.clickViewCart();
  148 | 
  149 |     console.log("🛒 Navigated to shopping cart!");
  150 | 
  151 |     const config = new TestConfig();
  152 | 
  153 |     // Validate that total price is correct (based on config)
  154 |     expect(await shoppingCartPage.getTotalPrice()).toBe(config.totalPrice);
  155 |      }
  156 | 
  157 | 
  158 | 
  159 |      // Function to perform checkout (disabled for demo site)
  160 |         async function performCheckout(page: Page) {
  161 |     // Checkout feature is not implemented since it's a demo site.
  162 |     // Place your checkout flow logic here if backend is available.
  163 | }
  164 | 
```