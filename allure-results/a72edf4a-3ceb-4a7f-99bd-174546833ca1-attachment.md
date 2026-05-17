# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AccountRegistration.spec.ts >> user registration page
- Location: tests\AccountRegistration.spec.ts:20:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Account Registration
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to application URL 
  8  |  * 2) Go to 'My Account' and click 'Register'
  9  |  * 3) Fill in registration details with random data
  10 |  * 4) Agree to Privacy Policy and submit the form
  11 |  * 5) Validate the confirmation message
  12 |  */
  13 | 
  14 | import {test,expect} from '@playwright/test'
  15 | import { Homepage } from '../pages/HomePage'
  16 | import { RegistrationPage } from '../pages/RegistrationPage'
  17 | import { randomDataUtil } from '../utils/randomDataGenerator'
  18 | import { TestConfig } from '../test.config'
  19 | 
  20 | test("user registration page", async({page})=>{
  21 | 
  22 | // Step : 1  Navigate to application URL
  23 | const config=new TestConfig();
> 24 | await page.goto(config.appUrl);
     |            ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  25 | 
  26 | //Step2 : Go to 'My Account' and click 'Register'
  27 | const homepage=new Homepage(page);
  28 | homepage.clickMyAccount();
  29 | homepage.clickRegister();
  30 | 
  31 | //Step 3 :Fill in registration details with random data
  32 | const registerpage=new RegistrationPage(page);
  33 | const password=randomDataUtil.getPassword();
  34 | await registerpage.enterAllTheDetails(randomDataUtil.getFirstName(),randomDataUtil.getlastName(),randomDataUtil.getEmail(),randomDataUtil.getPhone(),password,password)
  35 | 
  36 | //4) Agree to Privacy Policy and submit the form
  37 | await registerpage.setPrivacyPolicy();
  38 | await registerpage.clickContinue();
  39 | 
  40 | //5) Validate the confirmation message
  41 | const confirmmsg=await registerpage.getConfirmationMsg();
  42 | expect(confirmmsg).toContain('Your Account Has been created!');
  43 | 
  44 | await page.waitForTimeout(3000);
  45 | })
```