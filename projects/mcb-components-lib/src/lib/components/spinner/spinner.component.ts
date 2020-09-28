import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { bootstrapColor } from '../common/types';

@Component({
  selector: 'mcb-spinner',
  template: ``,
  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.text-primary]': 'this.color === "primary"',
    '[class.text-secondary]': 'this.color === "secondary"',
    '[class.text-success]': 'this.color === "success"',
    '[class.text-danger]': 'this.color === "danger"',
    '[class.text-warning]': 'this.color === "warning"',
    '[class.text-info]': 'this.color === "info"',
    '[class.text-light]': 'this.color === "light"',
    '[class.text-dark]': 'this.color === "dark"'
  }
})

export class SpinnerComponent {
  @Input() color: bootstrapColor;
  constructor(el: ElementRef, render: Renderer2) {
    render.addClass(el.nativeElement, 'spinner-border');
    render.setAttribute(el.nativeElement, 'role', 'status');
  }
}
