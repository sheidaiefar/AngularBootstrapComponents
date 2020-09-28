import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxTestComponent } from './checkbox-test.component';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'projects/mcb-components-lib/src/lib/components/checkbox/checkbox.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckboxTestComponent],
  exports: [CheckboxTestComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: CheckboxTestComponent
    }
    ])
  ]
})
export class CheckboxTestModule { }
