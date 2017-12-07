import { $, $$, browser, by, By, element, ExpectedConditions } from "protractor";
import protractor = require("protractor");
import { WebDriver } from "selenium-webdriver";

// module loginScreen {
export class LoginPageObject {
    constructor() {
        const url = "http://localhost:3000/#!/login";
        browser.get(url);
        browser.waitForAngular();
    }

    getLoginButtonText() {
        return this.getLoginButton().getText();
    }

    private getLoginButton() {
        return element(by.id("signIn"));
    }

}

// }
