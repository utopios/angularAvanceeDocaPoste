import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'contact-page',
    template : `<div>
    Contact page
    <div *ngFor='let contact of contacts'>{{contact}}</div>
    </div>`
})
export class ContactPage {
    contacts:any
    constructor(private route:ActivatedRoute) {
        this.route.data.subscribe((data) => {
            this.contacts = data.contacts
        })
    }
}