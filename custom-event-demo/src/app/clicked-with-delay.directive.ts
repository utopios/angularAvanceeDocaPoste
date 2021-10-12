import { Directive, ElementRef, EventEmitter, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[clickedDelay]'
})
export class ClickedWithDelayDirective {
  @Output('clickedDelay') clicked = new EventEmitter<string>()
  constructor(private renderer: Renderer2, private el: ElementRef) {
    //Service renderer2 permet d'acceder au dom réel.
    //Service elementRef permet de récupérer l'élément sur le quel la directive est appliquée
    
      this.renderer.listen(this.el.nativeElement, 'click', (event) => {
        // setTimeout(() => {
          
        //   this.clicked.emit('Event ok')
        // }, 2000)
        //A verifier
        event.stopPropagation()
        this.clicked.emit(event)
      })
    
  }

}
