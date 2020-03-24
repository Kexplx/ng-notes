import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appJuli]',
})
export class JuliDirective {
  @HostBinding('textContent') textContent = 'Your Notes';
  count = 0;

  @HostListener('mousedown') onClick() {
    this.count++;

    if (this.count === 6) {
      this.textContent = 'Julis Notes 💗';
    }
  }
}
