import { ElementFinder, element, by } from "protractor";

export class Addcustomer {
    addcustomerLink: ElementFinder;
    firstName: ElementFinder;
    lastName: ElementFinder;
    postCode: ElementFinder;
    AddcustomerButton: ElementFinder

    constructor() {
        this.addcustomerLink = element(by.xpath("//button[contains(text(),'Add Customer')]"))
        this.firstName = element(by.model("fName"));
        this.lastName = element(by.model("lName"));
        this.postCode = element(by.model("postCd"));
        this.AddcustomerButton = element(by.xpath("//button[text()='Add Customer']"));

    }
}