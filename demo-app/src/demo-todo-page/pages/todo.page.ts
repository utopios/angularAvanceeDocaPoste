import { Component } from "@angular/core";
import { ToDo } from "../shared/interfaces/todo.interface";
import { ToDoService } from "../shared/services/todo.service";

@Component({
    'selector':'todo-page',
    'template' : `<todo-component [todo]="todo"></todo-component>`
})
export class ToDoPage {
    todo : ToDo
    constructor(private todoService: ToDoService) {
        this.todo = this.todoService.getTodo()
    }
}