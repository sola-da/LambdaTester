





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.7847438319683965e+308] = null
argument3[2] = false
base_0[4][2] = [627,213,627,59,100,893,595,59,-1]
return a*b/c
};
var argument2 = 49;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = {"59":49,"5.630136372762921e+307":705,"":9.913324905943402e+307,"1o":"","I":82,"1.091097094690129e+308":"","8.66230414800313e+307":1.7976931348623157e+308,"-100":"?4","7.82302725988417e+307":""}
argument6['T'] = [1.7976931348623157e+308,843,100,714,460,607,969,213]
argument5[-1] = [714,618,893,25,1.7976931348623157e+308,82,122,242,714]
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['T'] = null
base_2[0][5e-324] = null
return a/b+c
};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[714] = "Ok(<0Y"
argument9[1.7847438319683965e+308] = [595,"a","NQE",714,157,242,403,"X","o"]
base_3[5] = 1.4725285005548317e+308
return a*b+c
};
var argument8 = r_0;
var base_0 = [783,705,100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,705,100]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,705,100]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,705,100]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)