import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from "../shared/products.service";

@Component({
    selector: 'products-page',
    templateUrl : `../templates/products.page.html`
})
export class ProductsPage {
    products?:Array<any>

    constructor(private productsService:ProductsService, private route:ActivatedRoute) {
        this.route.data.subscribe(data => {
            this.products = data.products
        })
    }

    deleteProduct(id:any) {
        this.products = this.products?.filter((p: { id: any; })=> p.id !=id)
    } 
}