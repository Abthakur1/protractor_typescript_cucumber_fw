import { Given, When, Then } from "cucumber"
import { browser, element, by } from "protractor"
import chai from "chai";
var expect = chai.expect;
Given('I launch the url', { timeout: 60 * 1000 }, async function () {
    await browser.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(async function () {
        await browser.driver.manage().window().maximize();
        await browser.sleep(10000)
    })
})

When('I click on Bank Manager Login', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Bank Manager Login']")).click();
});

When('I click on Add customer', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[contains(text(),'Add Customer')]")).click();
    await browser.sleep(10000)
});

When('I give the customer details {string}, {string},{string}', { timeout: 60 * 1000 }, async function (fname, lname, postcode) {
    await element(by.model("fName")).sendKeys(fname);
    await element(by.model("lName")).sendKeys(lname);
    await element(by.model("postCd")).sendKeys(postcode);
    await browser.sleep(10000)
});

When('I click on Add customer button', { timeout: 60 * 1000 }, async function () {
    await element(by.xpath("//button[text()='Add Customer']")).click();
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