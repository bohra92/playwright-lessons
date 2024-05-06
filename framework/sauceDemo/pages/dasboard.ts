import { Locator, Page } from "playwright";
import { ElementUtil } from "../utils/ElementUtil";
import { Expect } from "playwright/test";
let eleUtil : ElementUtil
let product : string
type locator = {text : string , strategy? : string , option?:string}
let productList
let expect : Expect

export class Dashboard{
    private products: locator
    private addToCart: locator
    private filter: locator
    private shoppingCartLink: locator 
    private shoppingCartItems: locator
    public page:Page

    constructor(page:Page){
        this.page=page
        this.products = {text:'.inventory_item_name '}
        this.addToCart = {text:`//div[text()='placeholder']/ancestor::div[@class='inventory_item_description']//button[text()='Add to cart']`}
        this.filter = {text:"//select[@class='product_sort_container']"}
        this.shoppingCartLink = {text:"//a[@class='shopping_cart_link']"}
        this.shoppingCartItems = {text:"//span[@class='shopping_cart_badge']"}
        eleUtil = new ElementUtil(this.page)
        
    }

    async load(url:string){
        await this.page.goto(url)
    }

    async getCartItemCount(){
       return Number(await eleUtil.getElementText(this.shoppingCartItems))
    }

    async getAllProductItem(){
        productList=eleUtil.getElement(this.products)
        return productList
    }

    async addProductsToCart(productList:string[]){

        for(let product of productList){
             
            console.log(product);
            console.log(this.addToCart.text.replace(`placeholder`,product));
            console.log(this.addToCart.text);
            await eleUtil.doClick({text:this.addToCart.text.replace(`placeholder`,product)})
        }
    }
}