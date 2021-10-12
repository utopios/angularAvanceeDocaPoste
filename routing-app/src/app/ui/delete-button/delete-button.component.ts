import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'delete-button',
    template: `<button (click)='clickButton()'>Supprimer</button>`
})
export class DeleteButtonComponent {
    @Output() actionButton: EventEmitter<any> = new EventEmitter()
    clickButton() {
        this.actionButton.emit(true)
    }
}