import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ContactService {
    getContacts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(["toto", "tata"])
            },3000)
        })
    }
}