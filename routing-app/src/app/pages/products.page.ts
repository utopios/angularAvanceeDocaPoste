import { Component } from "@angular/core";
import { ProductsService } from "./shared/products.service";

@Component({
    selector: 'products-page',
    templateUrl : `./templates/products.page.html`
})
export class ProductsPage {
    products:any

    constructor(private productsService:ProductsService) {
        this.products = this.productsService.getProducts()
    }
}