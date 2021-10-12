import {browser, element, by} from 'protractor'
export class FirstPage {
    navigateTo() {
        return browser.get('/')
    }

    getPageTitle():any {
        const title = element(by.css('h1')).getText()
        return title
    }

    getTextFromSelector(selector:string):any {
        const title = element(by.css(selector)).getText()
        return title
    }

    getHeaderInformation():any {
        return element(by.css('.header-title')).getText()
    }

    logOut() {
        return element(by.css('.logout')).click()
    }
}