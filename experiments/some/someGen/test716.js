





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5][0] = "|"
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = 1.0067346865767463e+308
base_1[6] = 823
base_1[8] = true
return a-b+c
};
var argument3 = false;
var argument4 = "I";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['V'] = ":vd"
return a/b-c
};
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = {"655":6.912818474171462e+307,"=":9.292346902622645e+307,"1.7763952355961887e+308":"","":"e"}
argument8[618] = {"655":1.6407594021899624e+308,"":4.085914547259411e+306,"6.429811537890245e+307":-100,"1.2846022584847967e+308":157,"xY":1.125654186105667e+308,"6@":2.7034750107470893e+307}
return a-b+c
};
var argument8 = null;
var argument9 = [126,714,5e-324,607,655];
var base_0 = ["g","p","C","5","=","6","Q","S7kk]7"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g","p","C","5","=","6","Q","S7kk]7"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g","p","C","5","=","6","Q","S7kk]7"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g","p","C","5","=","6","Q","S7kk]7"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)