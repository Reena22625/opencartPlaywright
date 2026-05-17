/**
 * Test Case: Account Registration
 * 
 * Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to application URL 
 * 2) Go to 'My Account' and click 'Register'
 * 3) Fill in registration details with random data
 * 4) Agree to Privacy Policy and submit the form
 * 5) Validate the confirmation message
 */

import { test, expect } from '@playwright/test'
import { Homepage } from '../pages/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import { randomDataUtil } from '../utils/randomDataGenerator'
import { TestConfig } from '../test.config'

let homepage: Homepage;
let registerpage: RegistrationPage;

test.beforeEach(async ({ page }) => {
    // Step : 1  Navigate to application URL
    const config = new TestConfig();
    await page.goto(config.appUrl);
    homepage = new Homepage(page);
    registerpage = new RegistrationPage(page);
})
test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
    await page.close();
})


test("user registration page @regressionAcc", async ({ }) => {
    //Step2 : Go to 'My Account' and click 'Register'

    homepage.clickMyAccount();
    homepage.clickRegister();

    //Step 3 :Fill in registration details with random data

    const password = randomDataUtil.getPassword();
    await registerpage.enterAllTheDetails(randomDataUtil.getFirstName(), randomDataUtil.getlastName(), randomDataUtil.getEmail(), randomDataUtil.getPhone(), password, password)

    //4) Agree to Privacy Policy and submit the form
    await registerpage.setPrivacyPolicy();
    await registerpage.clickContinue();

    //5) Validate the confirmation message
    const confirmmsg = await registerpage.getConfirmationMsg();
    expect(confirmmsg).toContain('Your Account Has Been Created!');


})
