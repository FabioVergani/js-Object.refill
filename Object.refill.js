Object.refill=function(o,p,e){o[p]=p in o ?o[p]:e||null};

test={};
Object.refill(test,'a',1);
Object.refill(test,'b',2);
Object.refill(test,'c');
Object.refill(test,'c',3);
Object.refill(test,'a',4);
console.dir(test);
/*
a: 1
b: 2
c: null
*/
