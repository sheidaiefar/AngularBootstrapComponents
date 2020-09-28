import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, ButtonGroupModule } from 'projects/mcb-components-lib/src/public-api';
import { RouterModule } from '@angular/router';
import { ButtonGroupTestComponent } from './button-group-test.component';

@NgModule({
  declarations: [
    ButtonGroupTestComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ButtonGroupModule,
    RouterModule.forChild([{
      path: '',
      component: ButtonGroupTestComponent
    }])
  ]
})
export class ButtonGroupTestModule { }
