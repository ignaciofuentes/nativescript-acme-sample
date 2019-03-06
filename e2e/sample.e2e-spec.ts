import { AppiumDriver, createDriver, SearchOptions, logInfo, Direction } from 'nativescript-dev-appium';
import { assert } from 'chai';

describe('sample scenario', () => {
    let driver: AppiumDriver;

    beforeAll(async () => {
        driver = await createDriver();
    });

    afterAll(async () => {
        await driver.quit();
        console.log('Quit driver!');
    });

    afterEach(async function () {
        await driver.logTestArtifacts('report');
    });

    const login = async (userName: string, password: string, loginType: 'kinvey' | 'companyLoginButton') => {
        const isLoginScreenLoaded = await driver.waitForElement('loginScreen');
        if (isLoginScreenLoaded) {
            const userNameField = await driver.waitForElement('userName');
            await userNameField.type(userName);

            await driver.hideDeviceKeyboard();

            const userPasswordField = await driver.waitForElement('userPassword');
            await userPasswordField.type(password);
            
            if(await driver.isKeyboardShown()){
                await driver.hideDeviceKeyboard();
            }

            let loginButton;
            if (loginType === 'kinvey') {
                loginButton = await driver.waitForElement('kinveyLoginButton');
            } else {
                loginButton = await driver.waitForElement('companyLoginButton');
            }
        } else {
            logInfo(`User is already logged!`);
        }
    }

    const isMainWindowLoaded = async () => {
        const mainWindow = await driver.waitForElement('loginScreen');
        return mainWindow != null;
    }

    it('Test login screen loading', async () => {
        await login('admin', 'admin', 'kinvey');
        expect(isMainWindowLoaded).toBeTruthy('Main login window did not load!');

        let loginButton = await driver.waitForElement('kinveyLoginButton');
        expect(loginButton).toBeTruthy(`Log in button did not display!`);
    });

    /*
    it('load profile', async () => {
        const profile = await driver.waitForElement('PROFILE');
        await profile.tap();

        const userName = 'user@progress.com';
        const userNameLabel = await driver.waitForElement(userName);
        expect(userNameLabel).toBeTruthy(`User name ${userName}`);

        const logoutButton = await driver.findElementByText('Log out', SearchOptions.contains);
        expect(logoutButton).toBeTruthy(`Log out button is not displayed!`);
    });

    it('load last item of tickets tab', async () => {
        const ticketsTab = await driver.waitForElement('TICKETS');
        await ticketsTab.tap();

        const itemsContainer = await driver.findElementByClassName(driver.locators.listView);

        const lastItem = await itemsContainer.scrollTo(Direction.down,
            () => driver.findElementByTextIfExists('The valve makes', SearchOptions.contains));

        await lastItem.tap();

        const description = await driver.findElementByText('Overtime', SearchOptions.contains);

        expect(description).toBeDefined();
    });
    */
});