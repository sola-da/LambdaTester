





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = false
argument2 = false
argument2[3] = 49
return a/b-c-d
};
var argument2 = null;
var argument3 = false;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = "s"
return a-b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = 1.6030435270562993e+308
return a+b+c/d
};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"655":"!","714":1.5397575731158556e+308,"893":1.7976931348623157e+308,"":"!+DJ`yw","1.2077625809611842e+308":7.234406890338158e+307,"a":"jvu","1.1821101285161915e+308":1.733584306154976e+308,"t":7.074809975712086e+307,"^]^":1.1610261190529179e+308}
base_3[8] = {"9":1.5273455346198765e+308,"242":3.309046838512481e+307,"l":"(Q{","8.993646788714374e+307":843,"":"","1.5734174244186152e+308":242,"y":"","-":"cc","8Fx":59,"4.627416978452731e+307":3.0677108359300973e+307}
base_3[7] = {"893":"","+":3.6534633608640605e+307,"-1":-1,"W":823,"I":1.7907883643678914e+308}
return a*b-c-d
};
var argument9 = false;
var argument10 = r_0;
var base_0 = [5e-324,82,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,82,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,82,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,82,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test51.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)