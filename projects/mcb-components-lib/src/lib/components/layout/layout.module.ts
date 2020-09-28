import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowComponent } from './row.component';
import { ColumnComponent } from './column.component';



@NgModule({
  declarations: [
    RowComponent,
    ColumnComponent
  ],
  exports: [
    RowComponent,
    ColumnComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
