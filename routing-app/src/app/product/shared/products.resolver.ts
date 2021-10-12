import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { ProductsService } from "./products.service";

@Injectable()
export class ProductsResolver implements Resolve<any> {
    constructor(private productsService:ProductsService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.productsService.getProducts())
            },3000)
        })
    }

}