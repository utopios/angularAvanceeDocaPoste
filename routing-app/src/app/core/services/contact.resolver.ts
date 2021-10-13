import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ContactService } from "./contact.service";
import { LoadingService } from "./loading.service";

@Injectable({
    providedIn:'root'
})
export class ContactResolver implements Resolve<any> {
    constructor(private contactService: ContactService, private loadingService:LoadingService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.loadingService.isLoading.next(true)
        return this.contactService.getContacts()
    }

}