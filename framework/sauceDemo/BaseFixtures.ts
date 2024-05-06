import {test as baseTest, expect} from '@playwright/test'
import { Dashboard } from './pages/dasboard'
import { Login } from './pages/login'


type MyPages = {
loginPage :Login,
dashboardPage : Dashboard
}

export const test = baseTest.extend<MyPages>({
    loginPage : async({page},use)=>{
        await use(new Login(page))
    },
    dashboardPage : async({page},use)=>{
        await use(new Dashboard(page))
    },
})

export {expect,Locator,Page} from '@playwright/test' 