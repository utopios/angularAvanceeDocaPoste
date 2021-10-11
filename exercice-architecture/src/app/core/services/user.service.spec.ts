import { TestBed } from "@angular/core/testing"
import { UserService } from "."

describe("UserService", ()=> {
    let userService:UserService
    beforeEach(()=> {
        // userService = new UserService()
        TestBed.configureTestingModule({})

        userService = TestBed.inject(UserService)
    })

    it("user service correctly created", () => {
        expect(userService).toBeTruthy()
    })
    //Une fonction de test
    it("description action test, context de l'action, retour attendu",()=>{
        //AAA
        //Arange
        // const userService:UserService = new UserService()
        //Act
        const response = userService.getUserName()
        //Assertion
        expect(response).toContain("ihab")
    } )

    it("test getAge of user service expect to correct", () => {
        ///AAA
        // const userService:UserService = new UserService()
        const response = userService.getAge()
        expect(response).toBeGreaterThan(18)
    })

    it("test get data", () => {
        expect(userService.getData()).toThrow()
    })

    it("test getIsLogged connected", ()=> {
        const response = userService.getIsLogged(true)
        expect(response).toBe("connected")
    })

    it("test getIsLogged not connected", ()=> {
        const response = userService.getIsLogged(false)
        expect(response).toBe("not connected")
    })
})