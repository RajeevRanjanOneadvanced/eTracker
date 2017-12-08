// import { $, $$, browser, by, By, element, ExpectedConditions } from "protractor";
import loginScreen = require("./loginScreen.po");

describe("The login page", () => {
    let loginPageObj: loginScreen.LoginPageObject;

    beforeAll(() => {
        loginPageObj = new loginScreen.LoginPageObject();
    });

    describe("When the login page is loaded", () => {
        it("then login button text should be", () => {
           expect(loginPageObj.getLoginButtonText()).toEqual("Sign In");
        });
    });
});
