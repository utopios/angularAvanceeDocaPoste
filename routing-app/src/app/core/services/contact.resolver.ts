import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ContactService } from "./contact.service";

@Injectable({
    providedIn:'root'
})
export class ContactResolver implements Resolve<any> {
    constructor(private contactService: ContactService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.contactService.getContacts()
    }

}