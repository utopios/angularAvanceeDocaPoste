import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ContactService {
    constructor(private httpClient:HttpClient) {

    }
    getContacts() {
        return this.httpClient.get('http://localhost:3000/')
        // return new Promise((resolve, reject) => {
        //     setTimeout(() => {
        //         resolve(["toto", "tata"])
        //     },3000)
        // })

    }
}