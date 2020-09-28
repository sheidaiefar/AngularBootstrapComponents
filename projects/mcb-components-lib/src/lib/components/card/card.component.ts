import { Component, Input, ContentChild, ElementRef, Renderer2 } from '@angular/core';
import { CardFooterDirective } from './card-footer.directive';

@Component({
  selector: 'mcb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent {
  @Input() title: string;
  @ContentChild(CardFooterDirective) _footer: CardFooterDirective;

  constructor(el: ElementRef, render: Renderer2) {
    render.addClass(el.nativeElement, 'card');
  }
}
