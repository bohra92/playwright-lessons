import { test, expect,Page,Locator } from '../BaseFixtures';
import { Login } from '../pages/login';

let cartItemsBefore : number
let cartItemsAfter : number
let productList:Locator
let products = ["Sauce Labs Backpack","Sauce Labs Bike Light","Sauce Labs Bolt T-Shirt","Sauce Labs Fleece Jacket", "Sauce Labs Onesie", "Test.allTheThings() T-Shirt (Red)"]
let productsToAdd = ["Sauce Labs Backpack","Sauce Labs Bike Light"]
let page:Page
const numbers = [1,2,3]

for(let num of numbers){
  test(`sauceDemo valid checkout ${num}`,{tag:'@iterate'}, async ({dashboardPage,page}) => {

    let loginPage = new Login(page)
    await loginPage.load('https://www.saucedemo.com/')
    await loginPage.validLogin('standard_user','secret_sauce')
    await expect(page.url()).toContain('inventory')
  
    cartItemsBefore = await dashboardPage.getCartItemCount()
    await expect(cartItemsBefore).toBe(0)
  
    productList = await dashboardPage.getAllProductItem()
    await expect(productList).toHaveText(products)
  
    
    await dashboardPage.addProductsToCart(productsToAdd)
    cartItemsAfter = await dashboardPage.getCartItemCount()
    await expect(cartItemsAfter).toBe(productsToAdd.length)
  
  });
}

test('Google test',{tag:'@google'},async({page})=>{
  await page.goto('https://www.google.com/')
  await expect(page).toHaveTitle('Google');
})


test.afterAll('closing instances',async ({browser})=>{
    await browser.close()
})