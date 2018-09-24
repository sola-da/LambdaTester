





var callbackArguments = [];
var argument1 = ["F","&av","UFu","`jFx","D","c"];
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [213,82,100]
argument3[627] = 1.4987129547605358e+308
argument3[90] = ""
return a*b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.889879335222838e+307] = {"157":3.69206794445752e+307}
argument7[655] = null
argument5[2] = ""
return a-b*c*d
};
var argument6 = ["RL]*geh(YU_","ZoFl"];
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = {"^":1.214813084966983e+308,"":"5","1.4654334915322322e+308":"H"}
argument10['18{'] = false
argument8 = null
return a*b-c+d
};
var argument9 = null;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[5] = [25,783,59,25,25,49]
argument13 = 4.685686649825964e+306
argument12[627] = 1.2987613919590183e+308
return a+b*c*d
};
var base_0 = [655,783,705,122]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,783,705,122]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,783,705,122]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,783,705,122]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test585.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)