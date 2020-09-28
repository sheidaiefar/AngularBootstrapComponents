import { Directive } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: 'content',
  exportAs: 'content',
})
export class CardContentDirective {

  constructor() { }

}
