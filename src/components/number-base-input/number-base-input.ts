import { Component, DoCheck, EventEmitter, Input, Output, OnChanges } from '@angular/core';
/**
 * Generated class for the NumberBaseInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'number-base-input',
  templateUrl: 'number-base-input.html'
})
export class NumberBaseInputComponent implements DoCheck, OnChanges {

  @Input() defaultNumberBase;
  @Input() numberInput;
  @Output() update = new EventEmitter<any>();

  public numberBases: any[] = [
    { text: 'Binary', value: 2 },
    { text: 'Octal', value: 8 },
    { text: 'Base 10', value: 10 },
    { text: 'Hex', value: 16 }
  ];
  public ALLOWED_CHARACTERS = {
    2: '01',
    8: '01234567',
    10: '0123456789',
    16: '012345678ABCDEF'
  }
  public old = this.numberInput;

  constructor() {}

  ngDoCheck() {
    if (this.numberInput === undefined) {
      this.numberInput = '';
    }
  }

  ngOnChanges(changes) {
    this.numberInput = changes.numberInput.currentValue;
  }

  checkIfNumber(event) {
    event.preventDefault();
    if (this.ALLOWED_CHARACTERS[this.defaultNumberBase].indexOf(event.key.toUpperCase()) > -1) {
      this.numberInput = this.numberInput + event.key.toUpperCase();
      this.old = this.numberInput;
    } else {
      this.numberInput = this.old;
      this.old = this.numberInput;
    }
    this.update.emit({
      input: this.numberInput,
      base: this.defaultNumberBase,
      lastChange: true
    });
  }
  changeBase () {
    this.numberInput = 0;
    this.old = 0;
    this.update.emit({
      input: this.numberInput,
      base: this.defaultNumberBase,
      lastChange: false
    });
  }
  updateData () {
    this.update.emit({
      input: this.numberInput,
      base: this.defaultNumberBase,
      lastChange: true
    });
  }
}
