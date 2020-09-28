import { Component, Input, OnInit, OnChanges, SimpleChanges, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'mcb-column',
  template: '<ng-content></ng-content>',
})

export class ColumnComponent implements OnChanges {

  @Input() xs: string;
  @Input() sm: string;
  @Input() md: string;
  @Input() lg: string;
  @Input() xl: string;

  constructor(private render: Renderer2, private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    const e = this.el.nativeElement;
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(device => {
      if (changes[device]) {
        const pre = changes[device].previousValue;
        const cur = changes[device].currentValue;
        if (pre) {
          this.render.removeClass(e, `col${device === 'xs' ? '' : '-' + device}-${pre}`);
        }
        if (cur) {
          this.render.addClass(e, `col-${device}-${cur}`);
        }
      }
    });
  }
}
