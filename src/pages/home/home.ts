import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
      result = this.baseConverter(this.numberA, this.numberBaseA, this.numberBaseB);
      this.number2 = result || 0;
    } else {
      result = this.baseConverter(this.numberB, this.numberBaseB, this.numberBaseA);
      this.number1 = result || 0;
    }
  }

  baseConverter (nbasefrom: any, basefrom: any, baseto: any) {
    const SYMBOLS: any = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (basefrom<=0 || basefrom>SYMBOLS.length || baseto<=0 || baseto>SYMBOLS.length) {
      console.log('Base unallowed');
      return null;
    }
    let i, nbaseten: any = 0;
    if (basefrom!=10) {
      const sizenbasefrom = nbasefrom.length;
      for (i=0; i<sizenbasefrom; i++) {
        let mul, mul_ok=-1;
        for (mul=0; mul<SYMBOLS.length; mul++) {
          if (nbasefrom[i]==SYMBOLS[mul]) {
            mul_ok = 1;
            break;
          }
        }
        if (mul>=basefrom) {
          console.log('Symbol unallowed in basefrom');
          return null;
        }
        if (mul_ok==-1) {
          console.log('Symbol not found');
          return null;
        }
        const exp = (sizenbasefrom-i-1);	
        if (exp==0) nbaseten += mul;
        else nbaseten += mul*Math.pow(basefrom, exp);
      }
    } else nbaseten = parseInt(nbasefrom);
    if (baseto!=10) { 
      const nbaseto = [];
      while (nbaseten>0) {
        let mod = nbaseten%baseto;
        if (mod<0 || mod>=SYMBOLS.length) {
          console.log('Out of bounds error');
          return null;
        }
        nbaseto.push(SYMBOLS[mod]);
        nbaseten = parseInt(String(nbaseten/baseto));
      }
      return nbaseto.reverse().toString().replace(/,/g, '');
    } else {
      return nbaseten.toString();
    }
  }
}
