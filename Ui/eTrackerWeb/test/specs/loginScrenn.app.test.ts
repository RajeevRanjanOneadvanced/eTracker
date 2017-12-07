// import { $, $$, browser, by, By, element, ExpectedConditions } from "protractor";
import loginScreen = require("./loginScreenPage");

describe("The login page", () => {
    let loginPageObj: loginScreen.LoginPageObject;

    beforeAll(() => {
        loginPageObj = new loginScreen.LoginPageObject();
    });
    describe("When the login page is loaded", () => {
        it("then login button text should be", () => {
            expect<any>(loginPageObj.getLoginButtonText()).toEqual("Sign In");
        });

        it("then 2 should be", () => {
            expect<any>(loginPageObj.getLoginButtonText()).toEqual("Sign In");
        });

        it("then 3 should be", () => {
            expect<any>(loginPageObj.getLoginButtonText()).toEqual("Sign In");
        });

        it("then 4 should be", () => {
            expect<any>(loginPageObj.getLoginButtonText()).toEqual("Sign In");
        });

        it("then 5 should be", () => {
            expect<any>(loginPageObj.getLoginButtonText()).toEqual("Sign In");
        });
    });
});
