//#
(Object.refill=function(o,p,e){o[p]=p in o ?o[p]:e||null}).by=function(o,e){
eachKey(e,function(p){Object.refill(o,p,e[p])});
};;

//#
(function(e,r,s,f){
r(e,s,f.bind({p:'pop'}));
r(e,s+'TopDown',f.bind({p:'shift'}))
})(Array,Object.refill,'Consume',function(o,f){var e,p=this.p,m=[];while(e=o[p]()){f(e);m.push(e)};return m});

//#
function eachKey(o,f){return Array.Consume(Object.keys(o),f)};



//#
var O={};


Object.refill.by(O,{a:1,b:2})
console.dir(O)




