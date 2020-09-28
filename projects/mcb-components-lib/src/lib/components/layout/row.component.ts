import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'mcb-row',
  template: '<ng-content></ng-content>',
})

export class RowComponent {
  constructor(el: ElementRef, render: Renderer2) {
    render.addClass(el.nativeElement, 'row');
  }
}
