import { Injectable } from "@angular/core";
import { ToDo } from "../interfaces/todo.interface";

Injectable()
export class ToDoService {
    getTodos() : Array<ToDo> {
        return [
            {title:'todo 1', description : 'desc todo1'}
        ]
    }

    getTodo() : ToDo {
        return {title:'demo 1', description : 'desc demo1'}
    }
}