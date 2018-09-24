





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = null
base_0[4] = ""
argument1[4] = 1.7976931348623157e+308
return a-b*c+d
};
var argument2 = null;
var argument3 = "";
var argument4 = r_0;
var argument5 = [783,122,"We","s@I,el","z]7"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = null
return a/b+c-d
};
var argument7 = r_0;
var argument8 = "";
var argument9 = "bfVd";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = 82
base_2[1] = {"0":"","25":1.544682301912472e+308,"595":"","1.3121401901824474e+308":"","1.4169776113348696e+308":460,"+g%":"","0+z":""}
base_2[5] = 8.273250036193886e+307
return a+b+c/d
};
var argument11 = false;
var argument12 = r_2;
var argument13 = null;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
base_3['length'] = true
return a+b+c+d
};
var base_0 = [242,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test27.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)