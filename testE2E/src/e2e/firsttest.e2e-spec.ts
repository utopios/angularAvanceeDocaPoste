import { FirstPage } from "./firstpage.po"

describe('test end to end with protractor', () => {
    let firstPage:FirstPage
    beforeEach(() => {
        firstPage = new FirstPage()
    })

    it('test navigate to first page', () => {
        //coder notre test end to end
        firstPage.navigateTo()
        expect(firstPage.getPageTitle()).toEqual('bonjour tout le monde')
    })

    it('test log out', () => {
        firstPage.navigateTo()
        firstPage.logOut()
        firstPage.navigateTo()
        expect(firstPage.getHeaderInformation()).toEqual('se connecter')
    })
})