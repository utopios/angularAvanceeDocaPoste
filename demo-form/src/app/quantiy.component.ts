import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector:'quantity',
    templateUrl:'quantity.component.html',
    providers:[
        {
            provide: NG_VALUE_ACCESSOR,
            multi:true,
            useExisting:QuantityComponent
        }
    ]
})
export class QuantityComponent implements ControlValueAccessor {
    writeValue(obj: any): void {
        this.quantity = obj
    }

    onChange = (q:any) => {}
    registerOnChange(fn: any): void {
        this.onChange = fn
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    @Input() quantity:number = 0
    //@Output() updateQuantity:EventEmitter<number> = new EventEmitter()
    update(type:string) {
        if(type =='desc') {
            this.quantity--
        }else if(type == 'asc') {
            this.quantity++
        }
        this.onChange(this.quantity)
        //this.updateQuantity.emit(this.quantity)
    }
}