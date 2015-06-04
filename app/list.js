var main = require('./main');
console.log(main.size);
var list=new Array(main.size);

 for(slot=0;slot<list.length;slot++)
  {
    list[slot] = 999;
  }

  exports.list=list;
