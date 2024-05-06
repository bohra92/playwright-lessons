import { Page } from "playwright";

type getEleArgs = { text: string, strategy?: string }

export class ElementUtil {

    page: Page

    constructor(page: Page) {
        this.page = page
    }

    async getElement(getEleArgs) {
        switch (getEleArgs.strategy) {
            case 'placeholder':
                return this.page.getByPlaceholder(getEleArgs.text)
                break;

            case 'text':
                return this.page.getByText(getEleArgs.text)
                break;

            case 'testId':
                return this.page.getByTestId(getEleArgs.text)
                break;

            case 'role':
                return this.page.getByRole(getEleArgs.text)
                break;

            case 'label':
                return this.page.getByLabel(getEleArgs.text)
                break;

            case 'title':
                return this.page.getByTitle(getEleArgs.text)
                break;

            default:
                break;
        }

        return this.page.locator(getEleArgs.text)
    }

    async getElements(getEleArgs) {
        return this.page.locator(getEleArgs.text).all()
    }

    async fillFields(getEleArgs, value: string) {
       await (await this.getElement(getEleArgs)).fill(value)
    }

    async doClick(getEleArgs) {
        await (await this.getElement(getEleArgs)).click()
    }

    async getElementText(getEleArgs){
        if(await (await this.getElement(getEleArgs)).isVisible()){
       return await (await this.getElement(getEleArgs)).textContent()
        }
        else return 0
    }
}