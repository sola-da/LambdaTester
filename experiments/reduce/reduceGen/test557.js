





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = false
base_0[0][3] = ""
argument3[5] = [-100,126,213,1.7976931348623157e+308,607,714,618]
return a/b*c/d
};
var argument2 = "";
var argument3 = 126;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"":1.6954342304338137e+308,"6.55095237786555e+307":1.4024391195106618e+308,"1.0202649677869138e+308":"I","K:":3.804975371883923e+307}
base_1[2][0] = null
return a*b-c/d
};
var argument5 = false;
var argument6 = "5";
var argument7 = false;
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = ["N"]
argument6['Cb'] = ""
argument6[2.1869172855352885e+307] = ["4","z","*","#","r%sII","(>","O"]
return a/b-c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = true
return a-b+c-d
};
var argument11 = 1.733459142204824e+308;
var base_0 = [-100,893,122,-1,655,213,893,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,893,122,-1,655,213,893,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,893,122,-1,655,213,893,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,893,122,-1,655,213,893,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test557.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)