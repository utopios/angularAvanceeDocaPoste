import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LoadingService } from "../core/services/loading.service";

@Component({
    selector: 'contact-page',
    template : `<div>
    Contact page
    <div *ngFor='let contact of contacts'>{{contact}}</div>
    </div>`
})
export class ContactPage {
    contacts:any
    constructor(private route:ActivatedRoute, private loadingService:LoadingService) {
        this.route.data.subscribe((data) => {
            this.contacts = data.contacts
            loadingService.isLoading.next(false)
        })
    }
}