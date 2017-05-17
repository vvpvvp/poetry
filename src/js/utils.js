import pydic from './pydic';

export default {
  trans(cc) {
    if(cc == '')return '';
    let str = '';
    let str2;
    let s;
    for (var i = 0; i < cc.length; i++) {
      if (pydic.indexOf(cc.charAt(i)) != -1 && cc.charCodeAt(i) > 200) {
        s = 1;
        while (pydic.charAt(pydic.indexOf(cc.charAt(i)) + s) != ",") {
          str += pydic.charAt(pydic.indexOf(cc.charAt(i)) + s);
          s++;
        }
        str += " ";
      } else {
        str += cc.charAt(i);
      }
    }
    return str;
  }
}
