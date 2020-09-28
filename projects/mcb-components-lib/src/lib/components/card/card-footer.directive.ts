import { Directive } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'footer',
  exportAs: 'footer'
})

export class CardFooterDirective {
  constructor() { }
}
