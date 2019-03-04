"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativescript_dev_appium_1 = require("nativescript-dev-appium");
const chai_1 = require("chai");
describe("sample scenario", () => {
    const defaultWaitTime = 5000;
    let driver;
    before(() => __awaiter(this, void 0, void 0, function* () {
        driver = yield nativescript_dev_appium_1.createDriver();
    }));
    after(() => __awaiter(this, void 0, void 0, function* () {
        yield driver.quit();
        console.log("Quit driver!");
    }));
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.currentTest.state === "failed") {
                yield driver.logTestArtifacts(this.currentTest.title);
            }
        });
    });
    it("should find an element by text", () => __awaiter(this, void 0, void 0, function* () {
        const btnTap = yield driver.findElementByAutomationText("TAP");
        yield btnTap.click();
        const message = " taps left";
        const lblMessage = yield driver.findElementByText(message, nativescript_dev_appium_1.SearchOptions.contains);
        chai_1.assert.equal(yield lblMessage.text(), "41" + message);
        // Image verification
        // const screen = await driver.compareScreen("hello-world-41");
        // assert.isTrue(screen);
    }));
    it("should find an element by type", () => __awaiter(this, void 0, void 0, function* () {
        const btnTap = yield driver.findElementByClassName(driver.locators.button);
        yield btnTap.click();
        const message = " taps left";
        const lblMessage = yield driver.findElementByText(message, nativescript_dev_appium_1.SearchOptions.contains);
        chai_1.assert.equal(yield lblMessage.text(), "40" + message);
    }));
});
