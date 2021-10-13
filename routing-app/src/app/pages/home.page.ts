import { Component } from "@angular/core";
import { title } from "process";

@Component({
    selector: 'home-page',
    template : `<div>Home page {{title}}</div>`
})
export class HomePage {
    title = "<script>alert()</script>"
}