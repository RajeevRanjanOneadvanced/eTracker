import { Config, protractor } from "protractor";
// import protractor = require("protractor");
// tslint:disable-next-line:no-var-requires
const {SpecReporter} = require("jasmine-spec-reporter");
export let config: Config = {
    allScriptsTimeout: 11000,
     framework: "jasmine",

     capabilities: {
       browserName: "chrome",
       chromeOptions: {args: ["disable-infobars"]},
     },
     directConnect: false,
     specs: [ "./specs/loginScrenn.app.test.js" ],
     jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      // tslint:disable-next-line:no-empty
      print: function() {

      },
    },
      onPrepare: () => {
        const browser = protractor.browser;
        browser.ignoreSynchronization = false;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        // jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
     },

     seleniumAddress: "http://localhost:4444/wd/hub",

     noGlobals: true,
   };
