import { Directive, Output, EventEmitter, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Output() leftOrWheelClick = new EventEmitter();
  constructor() { }

  @HostListener('mouseup', ['$event']) middleclickEvent(event: any) {
    if (event.which === 2 || event.which === 1) {
      this.leftOrWheelClick.emit(event);
    }
  }
}
