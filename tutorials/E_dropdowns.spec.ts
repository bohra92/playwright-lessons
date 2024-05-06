import { test, request } from '@playwright/test';

test.describe('dropdown', async () => {
    test('select any option from dropdown ', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/select-menu.php')
        const selectMenu = page.locator("//select[@class='form-select']")
        await selectMenu.selectOption({value:'1'})
        await page.waitForTimeout(2000)
        
        await selectMenu.selectOption({label:'Proof.'})
        await page.waitForTimeout(2000)
        
        await selectMenu.selectOption({index:2})
        await page.waitForTimeout(2000)

        await page.close()
    })

    test('select multi option from dropdown ', async ({ page }) => {
        await page.goto('https://demoqa.com/select-menu')
        const selectMenu = page.locator("//select[@id='cars']")
        await selectMenu.selectOption(['Audi','Saab'])
        console.log(await selectMenu.inputValue());
        
        await page.waitForTimeout(2000)
        await page.close()
    })

    test('select multi option from non-select dropdown ', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/select-menu.php')
        const selectMenu = page.locator("//input[@id='demo-multiple-select-input']")
        const booksoption = page.locator("//div[@role='option' and contains(text(),'Books')]")
        const ECEoption = page.locator("//div[@role='option' and contains(text(),'Electronics & Computers')]")
        
        await selectMenu.click({force:true})
        await booksoption.click({force:true})
        await ECEoption.click({force:true})
        
        await page.waitForTimeout(2000)
        await page.waitForTimeout(2000)
        await page.waitForTimeout(2000)

        console.log(await selectMenu.inputValue());
        
        await page.close()
    })

    test('Autocomplete dropdown ', async ({ page }) => {
        await page.goto('https://www.globalsqa.com/demoSite/practice/autocomplete/combobox.html')
        const autocompleteInput = page.locator("//input[contains(@class,'ui-autocomplete-input')]")
        await autocompleteInput.fill('a')
        const options = await page.locator("//ul[@id='ui-id-1']/li/div").all()
        let optionText;
        for(let option of options){
            optionText = await option.textContent()
            console.log(optionText);
            if(optionText=='Java'){
                await option.click()
            }
        }
        await page.locator("//div[@class='ui-widget']").focus()
        await page.waitForTimeout(2000)
        await page.close()
    })
});