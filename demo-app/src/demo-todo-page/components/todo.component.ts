import { Component, Input } from "@angular/core";
import { ToDo } from "../shared/interfaces/todo.interface";

@Component({
    'selector' : 'todo-component',
    'template' : `<div>{{title}} {{description}}</div>`
})

export class ToDoComponent {

    @Input('todo') todo:ToDo = {title : '', description:''}

    constructor() {
        
    }
}