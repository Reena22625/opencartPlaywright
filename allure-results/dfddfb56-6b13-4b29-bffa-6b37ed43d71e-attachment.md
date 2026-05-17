# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndtoEndTest.spec.ts >> End to End test flow @end-to-end
- Location: tests\EndtoEndTest.spec.ts:32:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: undefined
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
  - generic [ref=e67]:
    - generic [ref=e68]:
      - generic [ref=e70]:
        - img "MacBookAir" [ref=e72]
        - link "iPhone 6" [ref=e74] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e75]
        - img "MacBookAir" [ref=e77]
        - link "iPhone 6" [ref=e79] [cursor=pointer]:
          - /url: index.php?route=product/product&path=57&product_id=49
          - img "iPhone 6" [ref=e80]
      - generic:
        - generic [ref=e84] [cursor=pointer]: 
        - generic [ref=e85] [cursor=pointer]: 
    - heading "Featured" [level=3] [ref=e86]
    - generic [ref=e87]:
      - generic [ref=e89]:
        - link "MacBook" [ref=e91] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - img "MacBook" [ref=e92]
        - generic [ref=e93]:
          - heading "MacBook" [level=4] [ref=e94]:
            - link "MacBook" [ref=e95] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43
          - paragraph [ref=e96]: Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..
          - paragraph [ref=e97]:
            - text: $602.00
            - generic [ref=e98]: Ex Tax:$500.00
        - generic [ref=e99]:
          - button " Add to Cart" [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: 
            - text: Add to Cart
          - button "" [ref=e102] [cursor=pointer]:
            - generic [ref=e103]: 
          - button "" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]: 
      - generic [ref=e107]:
        - link "iPhone" [ref=e109] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - img "iPhone" [ref=e110]
        - generic [ref=e111]:
          - heading "iPhone" [level=4] [ref=e112]:
            - link "iPhone" [ref=e113] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40
          - paragraph [ref=e114]: iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..
          - paragraph [ref=e115]:
            - text: $123.20
            - generic [ref=e116]: Ex Tax:$101.00
        - generic [ref=e117]:
          - button " Add to Cart" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: 
            - text: Add to Cart
          - button "" [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: 
          - button "" [ref=e122] [cursor=pointer]:
            - generic [ref=e123]: 
      - generic [ref=e125]:
        - link "Apple Cinema 30\"" [ref=e127] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - img "Apple Cinema 30\"" [ref=e128]
        - generic [ref=e129]:
          - heading "Apple Cinema 30\"" [level=4] [ref=e130]:
            - link "Apple Cinema 30\"" [ref=e131] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=42
          - paragraph [ref=e132]: The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
          - paragraph [ref=e133]:
            - text: $110.00 $122.00
            - generic [ref=e134]: Ex Tax:$90.00
        - generic [ref=e135]:
          - button " Add to Cart" [ref=e136] [cursor=pointer]:
            - generic [ref=e137]: 
            - text: Add to Cart
          - button "" [ref=e138] [cursor=pointer]:
            - generic [ref=e139]: 
          - button "" [ref=e140] [cursor=pointer]:
            - generic [ref=e141]: 
      - generic [ref=e143]:
        - link "Canon EOS 5D" [ref=e145] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - img "Canon EOS 5D" [ref=e146]
        - generic [ref=e147]:
          - heading "Canon EOS 5D" [level=4] [ref=e148]:
            - link "Canon EOS 5D" [ref=e149] [cursor=pointer]:
              - /url: https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30
          - paragraph [ref=e150]: Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..
          - paragraph [ref=e151]:
            - text: $98.00 $122.00
            - generic [ref=e152]: Ex Tax:$80.00
        - generic [ref=e153]:
          - button " Add to Cart" [ref=e154] [cursor=pointer]:
            - generic [ref=e155]: 
            - text: Add to Cart
          - button "" [ref=e156] [cursor=pointer]:
            - generic [ref=e157]: 
          - button "" [ref=e158] [cursor=pointer]:
            - generic [ref=e159]: 
    - generic [ref=e160]:
      - generic [ref=e162]:
        - img "Harley Davidson" [ref=e164]
        - img "Dell" [ref=e166]
        - img "Disney" [ref=e168]
        - img "Starbucks" [ref=e170]
        - img "Nintendo" [ref=e172]
        - img "NFL" [ref=e174]
        - img "RedBull" [ref=e176]
        - img "Sony" [ref=e178]
        - img "Coca Cola" [ref=e180]
        - img "Burger King" [ref=e182]
        - img "Canon" [ref=e184]
        - img "Harley Davidson" [ref=e186]
        - img "Dell" [ref=e188]
        - img "Disney" [ref=e190]
        - img "Starbucks" [ref=e192]
        - img "Nintendo" [ref=e194]
        - img "NFL" [ref=e196]
        - img "RedBull" [ref=e198]
        - img "Sony" [ref=e200]
        - img "Coca Cola" [ref=e202]
        - img "Burger King" [ref=e204]
      - generic:
        - generic [ref=e217] [cursor=pointer]: 
        - generic [ref=e218] [cursor=pointer]: 
  - contentinfo [ref=e219]:
    - generic [ref=e220]:
      - generic [ref=e221]:
        - generic [ref=e222]:
          - heading "Information" [level=5] [ref=e223]
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link "About Us" [ref=e226] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=e227]:
              - link "Delivery Information" [ref=e228] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=e229]:
              - link "Privacy Policy" [ref=e230] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=e231]:
              - link "Terms & Conditions" [ref=e232] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=e233]:
          - heading "Customer Service" [level=5] [ref=e234]
          - list [ref=e235]:
            - listitem [ref=e236]:
              - link "Contact Us" [ref=e237] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=e238]:
              - link "Returns" [ref=e239] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=e240]:
              - link "Site Map" [ref=e241] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=e242]:
          - heading "Extras" [level=5] [ref=e243]
          - list [ref=e244]:
            - listitem [ref=e245]:
              - link "Brands" [ref=e246] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=e247]:
              - link "Gift Certificates" [ref=e248] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=e249]:
              - link "Affiliate" [ref=e250] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=e251]:
              - link "Specials" [ref=e252] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=e253]:
          - heading "My Account" [level=5] [ref=e254]
          - list [ref=e255]:
            - listitem [ref=e256]:
              - link "My Account" [ref=e257] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=e258]:
              - link "Order History" [ref=e259] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=e260]:
              - link "Wish List" [ref=e261] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=e262]:
              - link "Newsletter" [ref=e263] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=e264]
      - paragraph [ref=e265]:
        - text: Powered By
        - link "OpenCart" [ref=e266] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```

# Test source

```ts
  1   | /**
  2   |  * Test Case: End-to-End Test on Demo E-commerce Application
  3   |  *
  4   |  * Purpose:
  5   |  * This test simulates a complete user flow on an e-commerce site.
  6   |  * 
  7   |  * Steps:
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
  87  |     let homePage = await logoutPage.clickContinue();
  88  |     
  89  |     let homepage = new Homepage(page);
> 90  |     expect(await homepage.ishomepageExist()).toBe(true);
      |                                              ^ Error: expect(received).toBe(expected) // Object.is equality
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
  108 |     expect(isLoggedIn).toBeTruthy();
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