import { ElementFinder, element, by } from "protractor";

export class Home {
    btnCustomerLogin: ElementFinder;
    btnManagerLogin: ElementFinder;

    constructor() {
        this.btnCustomerLogin = element(by.xpath("//button[text()='Customer Login']"))
        this.btnManagerLogin = element(by.xpath("//button[text()='Bank Manager Login']"))
    }
}