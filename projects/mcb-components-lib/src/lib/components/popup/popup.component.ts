import { Component, Input, ContentChild, Output, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { PopupFooterDirective } from './popup-footer.directive';

@Component({
  selector: 'mcb-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['popup.component.css']
})

export class PopupComponent {
  @Input() title: string;
  @ContentChild(PopupFooterDirective) _popupFooter: PopupFooterDirective;

  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() showCloseButton = true;
  @Input() displayInCenter = true;
  @Input() show = true;
  @Output() closeClick = new EventEmitter<any>();
  @Output() backdropClick = new EventEmitter<any>();

  constructor(el: ElementRef, render: Renderer2) {
    render.addClass(el.nativeElement, 'modal');
  }
  stopPropag(e: MouseEvent) {
    e.stopPropagation();
    this.show = true;
  }

  backdrop() {
    this.backdropClick.emit();
    this.show = false;
  }

}
