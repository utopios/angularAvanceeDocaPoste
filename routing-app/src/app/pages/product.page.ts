import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "./shared/products.service";

@Component({
    selector: 'product-page',
    templateUrl : `./templates/product.page.html`
})
export class ProductPage {
    product:any

    constructor(private productsService:ProductsService, private route:ActivatedRoute) {
        //pour récupérer les paramètre on utilise l'boservable params de la route
        this.route.params.subscribe((params) => {
            this.product = this.productsService.getProduct(params.id)
        })
        //2 façon à l'aide de la propriété  snapshot
        // const id = this.route.snapshot.params.id
        // this.product = this.productsService.getProduct(id)
    }
}