





var callbackArguments = [];
var argument1 = null;
var argument2 = {"607":1.3834941135400396e+308,"627":1.1851186141656086e+308,"h":59,"1.2551239020462008e+308":705,"!":122};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"4.394780195212877e+307":627,"":""}
base_0[6] = ""
argument1[1] = ""
return a*b/c-d
};
var argument5 = true;
var argument6 = {"705":"","H":5.652695993681963e+307,"":"","1.268471607555844e+308":"ETeb","8.852273448322432e+306":""};
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = null
return a/b+c/d
};
var argument9 = r_0;
var argument10 = null;
var argument11 = 49;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = ["qm9","(","ocy","*N","8","e","="]
return a/b/c-d
};
var argument13 = r_0;
var argument14 = "";
var argument15 = r_0;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[4] = ""
return a-b+c*d
};
var base_0 = [49,213,403,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,213,403,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,213,403,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,213,403,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test202.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)