
import {Directive,  forwardRef, ElementRef, HostListener, Renderer2} from '@angular/core'
import {  ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[contentEditable]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContenteditableDirective),
      multi: true
    }
  ]
})
export class ContenteditableDirective implements ControlValueAccessor {

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  onChange() {
    if (this._onChange) {
      this._onChange(this._elRef.nativeElement.innerText);
    }
  }

  @HostListener('keyup', ['$event'])
  keyup(event: any) {
    this.onChange();
  }


  private _onChange = (_) => { }; 
  private _onTouched = () => { }; 


  writeValue(val: any) {
    if (!val) val = '';

    this._renderer.setAttribute(this._elRef.nativeElement, 'innerText', val);
  }

  registerOnChange(fn: (_: any) => void): void { this._onChange = fn; }
  registerOnTouched(fn: () => void): void { this._onTouched = fn; }
}