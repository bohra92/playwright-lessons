
import { test, request } from '@playwright/test';


test.describe('links', async () => {
    test('get href', async ({ page }) => {
        await page.goto('https://only-testing-blog.blogspot.com/2014/01/textbox.html')
        const links = await page.locator('//a').all();
        let matcher = 'facebook'
        let linkText;
        for (let link of links) {
            linkText = await link.getAttribute('href')

            if (linkText && linkText.includes(matcher)) {
                console.log(linkText);

            }

        }

    })

    test('broken links', async ({ page, request }) => {
        await page.goto('https://www.amazon.in')
        const links = await page.locator("//div[contains(@class,'navFooterVerticalRow')]//li/a").all();



        let urlLink;
        let response;

        for (let link of links) {
            urlLink = await link.getAttribute('href')
            console.log(urlLink);
            
            response = await request.get(`${urlLink}`)
            console.log(response.status());

            if (response.status() >= 200 && response.status() < 210) {
                console.log(`****** ${urlLink} is not broken`);
            }
            else { console.log(`${urlLink} is broken`); }

        }

    })
});