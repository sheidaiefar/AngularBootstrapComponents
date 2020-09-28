import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupTestComponent } from './popup-test.component';
import { RouterModule } from '@angular/router';
import { PopupModule } from 'projects/mcb-components-lib/src/lib/components/popup/popup.module';

@NgModule({
  declarations: [PopupTestComponent],
  exports: [PopupTestComponent],
  imports: [
    CommonModule,
    PopupModule,
    RouterModule.forChild([{
      path: '',
      component: PopupTestComponent
    }])
  ]
})
export class PopupTestModule { }
