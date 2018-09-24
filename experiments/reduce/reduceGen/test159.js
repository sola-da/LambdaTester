





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = [-1,49,893,5e-324,618,49];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = null
argument2[3] = null
base_0[6] = {"618":969,"":"","8.283462264033871e+307":627,"1.2399090881743311e+308":""}
return a*b/c/d
};
var argument5 = [607,893,969];
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [714,655]
base_1[0][9.12287810829114e+307] = ""
return a*b/c-d
};
var argument9 = false;
var argument10 = null;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = 1.997385683219366e+307
return a*b/c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
argument14[3] = 25
base_3[1][0] = 595
return a*b/c/d
};
var argument14 = null;
var argument15 = false;
var base_0 = [595,82,82,25,49,460,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,82,82,25,49,460,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,82,82,25,49,460,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,82,82,25,49,460,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test159.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)