





var callbackArguments = [];
var argument1 = 3.562206607197173e+307;
var argument2 = null;
var argument3 = {"655":607,"893":1.2378948432113094e+308,"`":"2","9.83132110342713e+307":9.312898360901856e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = false
argument3[5] = -1
return a*b+c/d
};
var argument5 = false;
var argument6 = r_0;
var argument7 = r_0;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][9.12287810829114e+307] = null
argument5['Cb'] = 1.107513534907616e+307
argument7[0] = {"7.015549422052834e+307":"","":0}
return a*b-c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ["&",":","w","U:","]]"," ","W,S:CN","qI]"]
argument9[2] = true
return a+b*c-d
};
var argument10 = "eT";
var argument11 = true;
var argument12 = true;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = ""
base_3[0][9.12287810829114e+307] = "f*"
argument11[2] = ""
return a-b*c/d
};
var base_0 = [705,0,783,705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,0,783,705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,0,783,705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,0,783,705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test387.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)