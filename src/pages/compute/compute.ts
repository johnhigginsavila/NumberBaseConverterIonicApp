import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { baseConverter } from '../../lib/baseConverter';

/**
 * Generated class for the ComputePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compute',
  templateUrl: 'compute.html',
})
export class ComputePage {

  public operation = "+";

  public input1 = 10;
  public input2 = 10;

  public number1 = 0;
  public number2 = 0;

  public num1 = 0;
  public num2 = 0;
  public base1 = 0;
  public base2 = 0;

  public resultBase = 10;
  public numberBases: any[] = [
    { text: 'Binary', value: 2 },
    { text: 'Octal', value: 8 },
    { text: 'Base 10', value: 10 },
    { text: 'Hex', value: 16 }
  ];
  public result = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComputePage');
  }

  update1 (event) {
    this.num1 = event.input;
    this.base1 = event.base;
  }

  update2 (event) {
    this.num2 = event.input;
    this.base2 = event.base;
  }

  calculate () {
    const x = baseConverter(this.num1, this.base1, 10);
    const y = baseConverter(this.num2, this.base2, 10);
    let z;
    switch (this.operation) {
      case '+': z = this.add(x, y);
      break;
      case '-': z = this.subtract(x, y);
      break;
      default: z = 0;
    }
    this.result = baseConverter(z, 10, this.resultBase) || 0;
  }

  subtract (x, y) {
    let z: number;
    if (Number(x) > Number(y)) {
      z = Number(x) - Number(y);
    } else {
      z = Number(y) - Number(x);
    }
    return z;
  }
  add (x, y) {
    return Number(x) + Number(y);
  }
}
