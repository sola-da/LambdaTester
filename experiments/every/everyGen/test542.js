





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [157,59,714,1.7976931348623157e+308,403,5e-324,242]
argument2[2] = [655]
return a/b+c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = {"6":"fHr","3.2810450155702183e+307":"j","":"","w":"","1.7780077670765282e+308":"","1.3207011969828677e+308":""}
return a-b+c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
base_2[3] = [705,213,157,969,618,655,893]
return a/b/c
};
var argument7 = [49,783,157,823,242];
var argument8 = {"9.39477845870291e+307":126,"":"","q":"","1.2198923598027195e+308":""};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = null
base_3 = {}
base_3[2] = {"-100":"Hv|"}
return a+b-c
};
var argument10 = "";
var argument11 = null;
var base_0 = [157,"P1_","*]",49,"OM"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"P1_","*]",49,"OM"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"P1_","*]",49,"OM"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"P1_","*]",49,"OM"]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test542.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)