





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = {"[":460}
base_0[8] = ""
argument2[157] = false
return a*b*c
};
var argument2 = [49,893,783];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = null
argument5[0] = {"157":714,"655":"2 ","x":"","1.5665244567168993e+308":126,"}":"","GQ":7.190933995882972e+307,"1.2362645215487088e+308":"","1.1354607991941065e+308":705,"6.532603352522581e+307":""}
argument5[6] = 1.5887882624450469e+307
return a+b/c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = null
base_2[8] = null
return a-b-c
};
var argument6 = r_0;
var argument7 = [823,49,705,627,59,618,843];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.377960715099946e+307] = 843
argument10[7] = [783,"=",";6",82,"a",82]
return a-b*c
};
var argument9 = null;
var argument10 = false;
var base_0 = [655,157,242,460,5e-324]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,157,242,460,5e-324]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,157,242,460,5e-324]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,157,242,460,5e-324]
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test329.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)