import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductsService } from "./shared/products.service";

@Component({
    selector: 'comments-page',
    templateUrl : `./templates/comments.page.html`
})
export class CommentsPage {
    productId:any
    constructor(private router:Router, private route:ActivatedRoute) {
        // this.router.routerState.parent(this.route).subscribe((params) => {
        //     this.productId =  params.id
        // })

        this.route.parent?.params.subscribe(params => {
            this.productId = params.id
        })
    }
}