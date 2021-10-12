import { Injectable } from "@angular/core";

@Injectable() 
export class ProductsService {
    products = [
        {id:1, title: 'product 1'},
        {id:2, title: 'product 2'},
        {id:3, title: 'product 3'},
        {id:4, title: 'product 4'},
    ]

    getProducts() {
        return this.products
    }

    getProduct(id:number) {
        return this.products.find(e => e.id == id)
    }
}