import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
import { Home } from "../../PageObjects/HomePage";
import { Addcustomer } from "../../PageObjects/AddCustomer";
var expect = chai.expect;

let objHome = new Home();
let objAddCustomer = new Addcustomer();
Given('I launch the url {string}', { timeout: 60 * 1000 }, async function (url) {
    await browser.get(url).then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(10000)
    })
})

When('I click on Bank Manager Login', { timeout: 60 * 1000 }, async function () {
    await objHome.btnManagerLogin.click();
});

When('I click on Add customer', { timeout: 60 * 1000 }, async function () {
    await objAddCustomer.addcustomerLink.click();
    await browser.sleep(10000)
});

When('I give the customer details {string}, {string},{string}', { timeout: 60 * 1000 }, async function (fname, lname, postcode) {
    await objAddCustomer.firstName.sendKeys(fname);
    await objAddCustomer.lastName.sendKeys(lname);
    await objAddCustomer.postCode.sendKeys(postcode);
    await browser.sleep(10000)
});

When('I click on Add customer button', { timeout: 60 * 1000 }, async function () {
    await objAddCustomer.AddcustomerButton.click();
    await browser.sleep(10000)
});

Then('I should get the popup', { timeout: 60 * 1000 }, async function () {
    try {

        await browser.switchTo().alert().getText().then(function (popupmessage) {
            console.log(popupmessage)
            browser.switchTo().alert().accept();
            expect(popupmessage).to.include('Customer added successfully with customer id')

        })
    } catch (error) {
        console.log("Exception in Alert: " + error);
        expect(true).to.equal(false);
    }
});