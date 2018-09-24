





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
return a+b-c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = 1.7709163320484379e+308
argument6[1.4034744228995816e+308] = {"714":1.5397575731158556e+308,"843":"","893":1.7976931348623157e+308,"":595,"Q{":8.993646788714374e+307,"1.103862281022321e+308":1.5734174244186152e+308}
return a-b*c
};
var argument5 = 126;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {"893":"","7.149867229675702e+307":"nJ","":3.6534633608640605e+307,"Fx":59,"4.627416978452731e+307":3.0677108359300973e+307,"-1":-1,"W":823,"I":1.7907883643678914e+308,"1.5421542141275677e+308":""}
return a/b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[-1] = ["6","-:"]
base_3[4] = "+@"
base_3[0] = ["q","XL","<",",>","<","w"]
return a-b*c
};
var base_0 = ["9","P","A(","5","I"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","P","A(","5","I"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","P","A(","5","I"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","P","A(","5","I"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)