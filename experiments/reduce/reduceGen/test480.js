





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][0] = [618,655,213,655,157,969]
argument3[90] = {}
argument1[2.1280896016417002e+307] = false
return a*b+c/d
};
var argument2 = false;
var argument3 = true;
var argument4 = null;
var argument5 = "}^azQ";
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = true
base_1[2][0] = {"1.7976931348623157e+308":7.2576827826334e+307,"u":126,"7.349857676275113e+307":""}
return a+b+c+d
};
var argument8 = r_1;
var argument9 = r_1;
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = null
argument10[595] = true
return a-b+c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14['HMm'] = [969,618,403,213,126,893,-1,823]
return a/b*c*d
};
var argument13 = {"122":607,"9#$5f7Z,":"]CO","":"","z":"`r4"};
var argument14 = null;
var base_0 = ["!7Mqp","D2","$t","<QLA","[mx)","JQ7E","z","@","m"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!7Mqp","D2","$t","<QLA","[mx)","JQ7E","z","@","m"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!7Mqp","D2","$t","<QLA","[mx)","JQ7E","z","@","m"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!7Mqp","D2","$t","<QLA","[mx)","JQ7E","z","@","m"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test480.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)