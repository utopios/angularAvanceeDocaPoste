import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:'quantity',
    templateUrl:'quantity.component.html'
})
export class QuantityComponent {
    @Input() quantity:number = 0
    @Output() updateQuantity:EventEmitter<number> = new EventEmitter()
    update(type:string) {
        if(type =='desc') {
            this.quantity--
        }else if(type == 'asc') {
            this.quantity++
        }
        this.updateQuantity.emit(this.quantity)
    }
}