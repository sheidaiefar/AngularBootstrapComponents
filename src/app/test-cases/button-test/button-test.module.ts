import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTestComponent } from './button-test.component';
import { ButtonModule } from 'projects/mcb-components-lib/src/public-api';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ButtonTestComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule.forChild([{
      path: '',
      component: ButtonTestComponent
    }])
  ]
})
export class ButtonTestModule { }
