





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1679954109349114e+308] = "%f"
base_0[4] = null
return a-b+c
};
var argument2 = true;
var argument3 = "i";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = [122,655,-1,59,843,49]
return a+b-c
};
var argument5 = null;
var argument6 = [783,49,59];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[714] = {"u":126,"":",{x!","2G":1.3038263301892557e+308,"l":1.5879717380597334e+308,"1.1361589939477603e+308":"["}
return a*b*c
};
var argument8 = null;
var argument9 = r_2;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[-1] = {"893":0,"":"B{","9.680020961605545e+307":"","g":"ym4a","1.650637553201275e+308":595,"{J":705,"1.0194783461492355e+308":2.2581230352960783e+307,"?":"b","5.449284077523721e+307":""}
base_3[3][1.3434821406183095e+308] = {"126":"","":242,"1.4368195238488314e+308":""}
base_3[3][0] = null
return a+b-c
};
var argument11 = r_2;
var base_0 = [126,25,-1,655,122,213,403,823,25]
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
var base_2 = [126,25,-1,655,122,213,403,823,25]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test104.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)