import { Locator, Page } from "playwright";
import { ElementUtil } from "../utils/ElementUtil";
type locator = {text : string , strategy? : string , option?:string}

    
export class Login {
    private username: locator
    private password: locator
    private submitBtn: locator
    public page: Page
    
    constructor(page: Page) {
        this.page=page
        this.username = {text:'Username',strategy:'placeholder'}
        this.password = {text:'Password',strategy:'placeholder'}
        this.submitBtn = {text:'//input[@type="submit"]'}
    }

    async load(url:string){
        await this.page.goto(url)
    }

    async validLogin(uname:string,pwd:string){
        const eleUtil = new ElementUtil(this.page)
        await eleUtil.fillFields(this.username,uname)
        await eleUtil.fillFields(this.password,pwd)
        await eleUtil.doClick(this.submitBtn)
    }
}