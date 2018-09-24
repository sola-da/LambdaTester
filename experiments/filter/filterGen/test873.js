





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.82874486699946e+307] = ""
base_0[3][1.3434821406183095e+308] = {"627":3.491534976507222e+307,"1.4718359223909e+308":1.7253973582840042e+308}
return a-b+c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = null
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = [5e-324,655,100,-1,714,157,126,595,783]
argument6[1.7121211182125595e+308] = null
return a+b+c
};
var argument6 = ["0omu"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"126":")","242":460,"595":100,"823":"X","1.5282361217952068e+308":1.1636794299923402e+308,"2.472639192100371e+307":"V","-100":1.4044014014675035e+307,"":""}
argument8['A'] = {"ZE,*":"1!","K":"h>","5e-324":460,"1.337777114927625e+308":"","":"","B":59}
base_3[0][4] = null
return a-b+c
};
var argument8 = true;
var argument9 = r_2;
var base_0 = [1.7976931348623157e+308,"m"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"m"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"m"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test873.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)