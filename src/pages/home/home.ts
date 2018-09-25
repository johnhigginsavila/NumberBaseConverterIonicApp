import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ComputePage } from '../compute/compute';

import { baseConverter } from '../../lib/baseConverter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  computePage = ComputePage;

  public input1 = 10;
  public input2 = 16;
  public number1 = 0;
  public number2 = 0;

  public lastChangeA = true;

  public numberToConvert;
  public numberBaseTo: any = 10;
  public numberBaseFrom: any = 10;

  public numberA: any = 0;
  public numberBaseA: any = 10;

  public numberB: any = 0;
  public numberBaseB: any = 16;

  constructor(public navCtrl: NavController) {

  }
  update1 (event) {
    if (this.numberA != event.input && event.lastChange) {
      this.lastChangeA = true;
    }
    this.numberA = event.input;
    this.numberBaseA = event.base;
  }
  update2 (event) {
    if (this.numberB != event.input && event.lastChange) {
      this.lastChangeA = false;
    }
    this.numberB = event.input;
    this.numberBaseB = event.base;
  }
  convert () {
    let result;
    if (this.lastChangeA) {
      result = baseConverter(this.numberA, this.numberBaseA, this.numberBaseB);
      this.number2 = result || 0;
    } else {
      result = baseConverter(this.numberB, this.numberBaseB, this.numberBaseA);
      this.number1 = result || 0;
    }
  }

  goToComputePage() {
    this.navCtrl.push(this.computePage);
  }
}
