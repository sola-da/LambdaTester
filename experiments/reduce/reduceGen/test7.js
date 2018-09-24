





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = "2,6_g]1"
return a-b*c*d
};
var argument5 = "ef";
var argument6 = "6";
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = "2"
return a-b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"1.1124322077573265e+308":1.3697700927298416e+308}
base_2 = 2.5975651431371023e+307
return a+b*c*d
};
var argument10 = false;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"Fd":5e-324,"":"","-100":""}
base_3[1] = ""
base_3 = {"157":1.2559538218849188e+308,"655":"","823":122,"?*":"8D*(N)","":1.236199985155341e+308,"1.7819937856474542e+308":82,"2.7798921031962303e+307":"","1.6867091063331294e+308":969,"1.0071186350169818e+308":25}
return a+b+c+d
};
var argument13 = false;
var base_0 = [403,783,-100,157,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,783,-100,157,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,783,-100,157,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,783,-100,157,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test7.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)