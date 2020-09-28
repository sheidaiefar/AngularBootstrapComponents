import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupFooterDirective } from './popup-footer.directive';


@NgModule({
    declarations: [
        PopupComponent,
        PopupFooterDirective,
    ],
    exports: [PopupComponent,
        PopupFooterDirective
    ],
    imports: [CommonModule]
})

export class PopupModule { }
