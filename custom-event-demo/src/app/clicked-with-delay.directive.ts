import { Directive, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[clickedDelay]'
})
export class ClickedWithDelayDirective {
  @Output('clickedDelay') clicked = new EventEmitter<string>()
  constructor() { 
    setTimeout(() => {
      this.clicked.emit('Event ok')
    }, 2000)
  }

}
