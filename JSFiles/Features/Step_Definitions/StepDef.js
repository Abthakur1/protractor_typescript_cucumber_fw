"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Given('I launch the url', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("http://way2automation.com/angularjs-protractor/banking/#/login").then(function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.driver.manage().window().maximize();
                yield protractor_1.browser.sleep(10000);
            });
        });
    });
});
cucumber_1.When('I click on Bank Manager Login', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//button[text()='Bank Manager Login']")).click();
    });
});
cucumber_1.When('I click on Add customer', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//button[contains(text(),'Add Customer')]")).click();
        yield protractor_1.browser.sleep(10000);
    });
});
cucumber_1.When('I give the customer details {string}, {string},{string}', { timeout: 60 * 1000 }, function (fname, lname, postcode) {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.model("fName")).sendKeys(fname);
        yield protractor_1.element(protractor_1.by.model("lName")).sendKeys(lname);
        yield protractor_1.element(protractor_1.by.model("postCd")).sendKeys(postcode);
        yield protractor_1.browser.sleep(10000);
    });
});
cucumber_1.When('I click on Add customer button', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element(protractor_1.by.xpath("//button[text()='Add Customer']")).click();
        yield protractor_1.browser.sleep(10000);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5pdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUE0QztBQUM1QywyQ0FBaUQ7QUFFakQsZ0JBQUssQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQzlDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsZ0VBQWdFLENBQUMsQ0FBQyxJQUFJLENBQUM7O2dCQUNyRixNQUFNLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQzlCLENBQUM7U0FBQSxDQUFDLENBQUE7SUFDTixDQUFDO0NBQUEsQ0FBQyxDQUFBO0FBRUYsZUFBSSxDQUFDLCtCQUErQixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDMUQsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdFLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxHQUFHLElBQUksRUFBRSxFQUFFOztRQUNwRCxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0UsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUM5QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLHlEQUF5RCxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxVQUFnQixLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVE7O1FBQzFILE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQzNELE1BQU0sb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzlCLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==