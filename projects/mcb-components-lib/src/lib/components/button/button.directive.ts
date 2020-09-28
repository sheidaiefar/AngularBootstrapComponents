import { Input, ElementRef, Renderer2, Directive } from '@angular/core';

@Directive({
  selector: '[mcbButton]',
  exportAs: 'mcbButton',

  // tslint:disable-next-line: no-host-metadata-property
  host: {
    '[class.btn-primary]' : 'this.color === "primary"',
    '[class.btn-secondary]' : 'this.color === "secondary"',
    '[class.btn-success]' : 'this.color === "success"',
    '[class.btn-danger]' : 'this.color === "danger"',
    '[class.btn-warning]' : 'this.color === "warning"',
    '[class.btn-info]' : 'this.color === "info"',
    '[class.btn-light]' : 'this.color === "light"',
    '[class.btn-dark]' : 'this.color === "dark"',

    '[class.btn-sm]' : 'this.size === "small"',
    '[class.btn-lg]' : 'this.size === "large"',
  }
})
export class ButtonDirective {
  @Input() size: 'small' | 'default' | 'large' = 'default';
  @Input() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  constructor(el: ElementRef, render: Renderer2) {
    render.addClass(el.nativeElement, 'btn');
  }
}
