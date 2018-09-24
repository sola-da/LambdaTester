





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][9.12287810829114e+307] = {"Ng":969}
return a/b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = null
return a+b-c/d
};
var argument3 = r_1;
var argument4 = false;
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
base_2 = {";":"","":""}
return a-b/c-d
};
var argument8 = r_1;
var argument9 = null;
var argument10 = {"157":0,"595":122,"618":"m*","":"","I":"","-b%8LQ":122};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = null
base_3[0] = ""
base_3[5] = ["vKa5","9k8ppc","n","4"]
return a-b-c/d
};
var base_0 = [460,213,122,100,213,403,705,607,5e-324]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,213,122,100,213,403,705,607,5e-324]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,213,122,100,213,403,705,607,5e-324]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,213,122,100,213,403,705,607,5e-324]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test97.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)