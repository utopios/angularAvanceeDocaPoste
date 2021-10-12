import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../shared/products.service";

@Component({
    selector: 'products-page',
    templateUrl : `../templates/products.page.html`
})
export class ProductsPage {
    products:any

    constructor(private productsService:ProductsService, private route:ActivatedRoute) {
        this.route.data.subscribe(data => {
            this.products = data.products
        })
    }
}