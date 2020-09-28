import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardFooterDirective } from './card-footer.directive';

@NgModule({
  declarations: [
    CardComponent,
    CardFooterDirective
  ],
  exports: [
    CardComponent,
    CardFooterDirective
  ],
  imports: [
    CommonModule,
  ]
})

export class CardModule { }
