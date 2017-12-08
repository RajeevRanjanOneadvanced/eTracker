import { $, $$, browser, by, By, element, ElementArrayFinder, ElementFinder,
     ExpectedConditions, promise } from "protractor";
import protractor = require("protractor");
import { WebDriver } from "selenium-webdriver";

// module loginScreen {
export class LoginPageObject {
    constructor() {
        const url = "http://localhost:3000/#!/login";
        browser.get(url);
        browser.waitForAngular();
    }

    getLoginButtonText(): promise.Promise<string> {
        return this.getLoginButton().getText();
    }

    private getLoginButton(): ElementFinder {
        return element(by.id("signIn"));
    }

}

// }
