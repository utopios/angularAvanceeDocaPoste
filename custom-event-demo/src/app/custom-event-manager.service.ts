import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomEventManagerService {
  supports(eventName:string) {
    return eventName.includes("click")
  }

  addEventListener(element: HTMLElement, eventName:string, callBack: Function) {
    const newActionCallBack = (event: Event) => {
      console.log("event starting...")
      event.stopPropagation()
      callBack(event)
    }

    element.addEventListener(eventName, newActionCallBack)
  }
  constructor() { }
}
