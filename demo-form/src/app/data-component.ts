import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from "@angular/core";

@Component({
    selector:'data',
    templateUrl:'data.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataComponent implements OnInit, DoCheck {
    ngOnInit(): void {
      
    }
    items:Array<any> = new Array<any>()

    trackById(index:any, item:any) {
        return item.id
    }

    constructor() {
        for(let i=1; i <= 20000; i++) {
            this.items.push({id: i, content: "element : "+ i})
        }
    }
    ngDoCheck(): void {
        throw new Error("Method not implemented.");
    }
}