import { test, request } from '@playwright/test';

test.describe.only('Mouse action', async () => {
    test('Move to an element', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/scroll-top.php')
        await page.locator("(//h3[text()='Where does it come from?']/following-sibling::p)[1]").click()
        await page.waitForTimeout(2000)
        console.log(await page.locator("(//h3[text()='Where does it come from?']/following-sibling::p)[1]").textContent())
        await page.close()
    })

    test('long press button element', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/scroll-top.php')
        await page.locator("(//h3[text()='Where does it come from?']/following-sibling::p)[1]").click({delay:3000})
        await page.close()
    })

    test.only('Drag and drop', async ({ page }) => {
        await page.goto('https://jqueryui.com/droppable/')
        const frame1 = '//iframe'
        await page.frameLocator(frame1).click("//div[@id='draggable']")
z
        await page.close()
    })

    test.only('Hover', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/scroll-top.php')
        await page.locator("(//h3[text()='Where does it come from?']/following-sibling::p)[1]").hover()
        await page.close()
    })

})