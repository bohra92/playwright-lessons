import { test, expect ,request} from '@playwright/test';

test('practice form 1', async ({ page }) => {
    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    // page.getByText() to locate by text content.
    // page.getByLabel() to locate a form control by associated label's text.
    // page.getByPlaceholder() to locate an input by placeholder.
    // page.getByAltText() to locate an element, usually image, by its text alternative.
    // page.getByTitle() to locate an element by its title attribute.
    // page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

    await page.goto('https://www.tutorialspoint.com/selenium/practice/login.php')

    const username = page.getByPlaceholder('UserName', { exact: true })
    const password = page.getByPlaceholder('Password', { exact: true })
    const submit = page.locator("input[value='Login']")

    //text fields
    await username.fill('Tanuj')
    await submit.focus({timeout:2000})
    await page.waitForTimeout(2000)


    await password.fill('Bohra')
    await password.focus({timeout:2000})
    await page.waitForTimeout(2000)

    
    await submit.click()
    await submit.focus({timeout:2000})
    await page.waitForTimeout(2000)

    
    await page.waitForTimeout(2000)
});


test.describe('Elements', async () => {

    // page.getByRole() to locate by explicit and implicit accessibility attributes.
    // page.getByText() to locate by text content.
    // page.getByLabel() to locate a form control by associated label's text.
    // page.getByPlaceholder() to locate an input by placeholder.
    // page.getByAltText() to locate an element, usually image, by its text alternative.
    // page.getByTitle() to locate an element by its title attribute.
    // page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


    test('Text fields', async ({ page }) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/text-box.php')

        //text fields
        await page.getByPlaceholder('Full Name').fill('Tanuj Bohra')
        await page.getByPlaceholder('name@example.com', { exact: true }).fill('abcTest@gmail.com')
        await page.getByPlaceholder('Currend Address', { exact: true }).fill('Pune maharastra')
        await page.fill('input[id="password"]', 'testPassword');
        await page.click('//input[@type="submit"]')
        await page.waitForTimeout(2000);
        page.close();

    })

    test('check boxes type 1', async ({ page }) => {
        await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox/')

        //check boxes
        await page.getByRole('checkbox', { name: 'Lettuce' }).check()
        await page.waitForTimeout(2000);
        page.close();

    })

    test('check boxes type 2', async ({ page }) => {
        await page.goto('https://formstone.it/components/checkbox/demo/')

        //check boxes
        await page.locator("//input[@id='checkbox-1']").click({force:true})
        await page.locator("//input[@id='checkbox-2']").click({force:true})
        await page.locator("//input[@id='checkbox-4']").click({force:true})

        await page.waitForTimeout(2000);
        page.close();

    })

    test('radio button type 1 ',async({page}) => {
        await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/')
        await page.getByRole('radio',{name:'Thin crust'}).check()
        await page.waitForTimeout(2000)
        await page.close()
    })
   
    test('radio button type 2 ',async({page}) => {
        await page.goto('https://www.tutorialspoint.com/selenium/practice/radio-button.php')
        //await page.getByLabel('Yes').click()
        await page.locator("input[value='igottwo']").click();
        await page.waitForTimeout(2000)
        await page.close()
    })

    test('Buttons ',async({page})=>{
        await page.goto('https://www.tutorialspoint.com/selenium/practice/buttons.php')
        await page.getByText('Click Me',{exact:true}).click()
        await page.getByText('Right Click Me',{exact:true}).click({button:"right"})
        await page.getByText('Double Click Me',{exact:true}).dblclick()
        
        await page.waitForTimeout(2000)
        await page.close()
    })

    test('links ',async({page,request})=>{
        await page.goto('https://www.tutorialspoint.com/selenium/practice/links.php')
        let response;
        const links = await page.locator("//h5/strong[contains(text(),'api call')]/../following-sibling::p/a").all()
        for(let link of links){
            console.log(await link.textContent());
            await link.click()
            console.log(await page.locator("//div[@style='display: block;']").textContent());
            response =  await request.get('https://google.com')
            console.log(response.ok());
            
        }
        await page.waitForTimeout(2000)
        await page.close()
    })

    
});