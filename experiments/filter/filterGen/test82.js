





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = [595,969,607,100,655,213,1.7976931348623157e+308,122,893]
return a+b-c
};
var argument2 = 1.3138406294703955e+307;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = "y"
return a+b-c
};
var argument5 = true;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"627":7.158817372316366e+307,"o":"","":"nWz"}
base_2[0] = {"126":213,"z":"O","T":6.592514242192309e+307}
return a-b*c
};
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][7] = [627,0,126,607,5e-324,783,-1]
argument10[1] = 242
return a-b*c
};
var argument10 = r_1;
var base_0 = ["9","RA"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","RA"]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test82.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)