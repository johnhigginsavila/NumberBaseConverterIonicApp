
export function baseConverter (nbasefrom: any, basefrom: any, baseto: any) {
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
