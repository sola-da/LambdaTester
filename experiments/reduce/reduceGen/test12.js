





var callbackArguments = [];
var argument1 = null;
var argument2 = false;
var argument3 = [100,49];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ""
base_0[2] = ""
base_0 = {"9.64729308697182e+307":"","WV":126,"'`$":705,"2.891280932586968e+307":8.157049401183507e+307,"":1.7976931348623157e+308,"=":1.611621919728253e+308,"U#":59}
return a/b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = ["$:FI","Fa*"]
return a*b-c/d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = {"783":8.182255291492215e+307,"8.240918266043903e+307":843,"":"1C","=":"{J","1.303351040562764e+308":"(","5.395037912888616e+307":"","1.2749545671890352e+308":1.363228487229346e+308,"vh?":403}
base_2[1] = false
base_2[2] = null
return a+b/c/d
};
var argument8 = "";
var argument9 = null;
var argument10 = "m";
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = false
argument9 = [893,893,100,242,893,618,969,126,157]
return a*b+c*d
};
var base_0 = [607,"$$d",82,"5",":Y","7","u"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,"$$d",82,"5",":Y","7","u"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,"$$d",82,"5",":Y","7","u"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,"$$d",82,"5",":Y","7","u"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test12.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)