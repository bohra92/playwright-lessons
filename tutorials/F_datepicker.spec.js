import { test, request } from '@playwright/test';


test.describe('datepickers', async () => {
    test('only date picker ', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/date-picker.php')
        const month = 'June'
        const year = '1992'
        const date = 10

        const datePicker = page.locator('#datetimepicker1')
        const monthSelect = page.locator("//select[@aria-label='Month']").first()
        const yearSelect = page.locator("//input[@aria-label='Year']").first()
        const dateSelect = page.locator(`//span[@class='flatpickr-day' and text()='${date}']`).first()
        const randomClick = page.locator("//h1[text()='Date Picker']")
        await datePicker.click()
        await page.waitForTimeout(2000)
        
        await monthSelect.selectOption({label:month})
        await page.waitForTimeout(2000)
        
        await yearSelect.fill(year)
        await page.waitForTimeout(2000)

        await dateSelect.click()
        await randomClick.click()
        await page.waitForTimeout(2000)
        
        console.log(await datePicker.inputValue());
        await page.close()
    })

})