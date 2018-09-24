/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function() {
callbackArguments.push(arguments)
 return 5; }
;
var argument2 = p1;
var argument3 = true;
var argument4 = function() {
callbackArguments.push(arguments)
 return 
"\u001aAD²":true,"fÂéO\t":-3,"÷!É}\\>KïJ_":true,"\u0014îæ\rÎzkí":-0.031529916351296094,"\u0014\f\u000eü\u0012Z":false,"êDR*fçðÔ":true,"Ø=Ê":17.569691122112175}; }
;
var argument5 = true;
var argument6 = p2;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/promises/promiseQC/test238.json",JSON.stringify({"baseObjects":serialize([base_0,base_1]),"returnObjects":serialize([r_0,r_1]),"callbackArgs":callbackArguments}))
},300)