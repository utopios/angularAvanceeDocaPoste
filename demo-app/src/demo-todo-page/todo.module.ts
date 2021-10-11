import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToDoComponent } from "./components/todo.component";
import { ToDoPage } from "./pages/todo.page";
import { ToDoService } from "./shared/services/todo.service";

@NgModule({
    declarations:[
        ToDoComponent,
        ToDoPage
    ],
    providers:[
        ToDoService
    ],
    imports:[
        RouterModule.forChild([{path:'/', component:ToDoComponent}])
    ]
})
export class ToDoModule {

}