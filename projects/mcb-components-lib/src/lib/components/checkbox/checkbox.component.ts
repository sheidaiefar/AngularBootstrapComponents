import { Component, ElementRef, Renderer2, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
  selector: 'mcb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],

  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})

export class CheckboxComponent implements ControlValueAccessor {
  @Input() label: string;
  _id: string;
  _checked: boolean;
  disabled: boolean;

  private _changeCallback: any = () => { };
  private _touchedCallback: any = () => { };
  private _validatorChangeCallback: any = () => { };


  constructor(el: ElementRef, render: Renderer2) {
    render.addClass(el.nativeElement, 'custom-control');
    render.addClass(el.nativeElement, 'custom-checkbox');
  }

  writeValue(obj: any): void {
    this._checked = obj;
  }

  registerOnChange(fn: any): void {
    this._changeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._touchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  _onChange(e: Event) {
    this._checked = (e.target as any).checked;
    this._changeCallback(this._checked);
    this._validatorChangeCallback();
  }
}
