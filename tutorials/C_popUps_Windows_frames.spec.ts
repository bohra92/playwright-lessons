import { test } from '@playwright/test';


test.describe('Alerts', async () => {
    test('Alerts', async ({ page }) => {
        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        page.on('dialog', dialog => dialog.accept());
        await page.click("//input[@id='alertexamples']");
    })

    test('Confirm', async ({ page }) => {
        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        page.on('dialog', dialog => dialog.dismiss());//or dialog.accept()
        await page.click("//input[@id='confirmexample']");
    })


    test('prompt', async ({ page }) => {
        await page.goto('https://testpages.herokuapp.com/styled/alerts/alert-test.html')
        page.on('dialog', dialog => dialog.accept("Tanuj"));//or dialog.accept()
        await page.click("//input[@id='promptexample']");
    })

    test('modal window', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/modal-dialogs.php')
        page.on('dialog', dialog => dialog.accept());//or dialog.accept()
        await page.getByRole('button', { name: 'Small Modal' }).click();
        await page.getByRole('button', { name: 'Close' }).first().click();

    })
});

test.describe('Frames', async () => {
    test('type 1', async ({ page }) => {
        const frame1 = "//frame[contains(@src,'frame_1')]"
        const frame2 = "//frame[contains(@src,'frame_2')]"
        const frame3 = "//frame[contains(@src,'frame_3')]"
        const frame3_subFrame = "//iframe[contains(@src,'google')]"
        const frame4 = "//frame[contains(@src,'frame_4')]"
        const frame5 = "//frame[contains(@src,'frame_5')]"

        await page.goto('https://ui.vision/demo/webtest/frames/')
        const textField1 = page.frameLocator(frame1).locator("//input[@name='mytext1']")
        const textField2 = page.frameLocator(frame2).locator("//input[@name='mytext2']")
        const textField3 = page.frameLocator(frame3).locator("//input[@name='mytext3']")
        const textField4 = page.frameLocator(frame4).locator("//input[@name='mytext4']")
        const textField5 = page.frameLocator(frame5).locator("//input[@name='mytext5']")

        const subFrame = page.frameLocator(frame3).frameLocator(frame3_subFrame)
        const radioIframe = subFrame.getByRole('radio', { name: 'I am a human' })
        const WT_checkBoxIframe = subFrame.getByRole('checkbox', { name: 'Web Testing' })
        const FA_checkBoxIframe = subFrame.getByRole('checkbox', { name: 'Form Autofilling' })
        const GWA_checkBoxIframe = subFrame.getByRole('checkbox', { name: 'General Web Automation' })

        await textField1.fill("test 1")
        await textField2.fill("test 2")
        await textField3.fill("test 3")
        await radioIframe.click()
        await WT_checkBoxIframe.click()
        await FA_checkBoxIframe.click()
        await GWA_checkBoxIframe.click()
        await textField4.fill("test 4")
        await textField5.fill("test 5")

        await page.waitForTimeout(2000)
    })
});

test.describe('Windows', async () => {
    test('tab', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/browser-windows.php')
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('button', { name: 'New Tab' }).click()
        ]);

        console.log(newTab.url());
        await page.waitForTimeout(2000)
    })

    test('window', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/browser-windows.php')
        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('button', { name: 'New Window', exact: true }).click()
        ]);

        console.log(newTab.url());
        await page.waitForTimeout(2000)
    })

    test('multiple window', async ({ page }) => {
        await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')
        const [multiWindows] = await Promise.all([
            page.waitForEvent('popup'),
            page.locator("//button[@id='newWindowsBtn']").click()
        ]);
        await multiWindows.waitForLoadState()
        const windows = multiWindows.context().pages()
        console.log(windows.length);
        for (let window of windows) {
            console.log(window.url());
        }
        await page.waitForTimeout(2000)
    })

    test('multiple tab', async ({ page }) => {
        await page.goto('https://www.hyrtutorials.com/p/window-handles-practice.html')
        const [multiTabs] = await Promise.all([
            page.waitForEvent('popup'),
            page.locator("//button[@id='newTabsBtn']").click()
        ]);
        await multiTabs.waitForLoadState()
        const tabs = multiTabs.context().pages()
        console.log(tabs.length);
        for (let tab of tabs) {
            console.log(tab.url());
        }
        await page.waitForTimeout(2000)
    })
});
