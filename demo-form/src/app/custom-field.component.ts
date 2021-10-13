import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector:'custom-field',
    template:`<div><label>{{labelProps}}</label><input type="text" [value]="customFieldValue" /></div>`,
    providers:[{
        provide: NG_VALUE_ACCESSOR,
        multi:true,
        useExisting: CustomFieldComponent
    }]
})
export class CustomFieldComponent implements ControlValueAccessor {

    writeValue(newValue:any): void {
        this.customFieldValue = newValue
    }
    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }
    @Input() labelProps?:string

    customFieldValue?:string
}