import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTestComponent } from './layout-test.component';
import { RowComponent, ColumnComponent, LayoutModule } from 'projects/mcb-components-lib/src/public-api';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LayoutTestComponent],
  imports: [
    LayoutModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LayoutTestComponent
    }])
  ],


})
export class LayoutTestModule { }
