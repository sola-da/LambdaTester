





var callbackArguments = [];
var argument1 = 1.7976931348623157e+308;
var argument2 = true;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = [100,618,25,49]
argument3[595] = null
argument3[7.889879335222838e+307] = [82,-100,618]
return a-b+c/d
};
var argument5 = true;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = true
argument5['Cb'] = null
return a*b/c+d
};
var argument9 = "O ";
var argument10 = "";
var argument11 = 1.456948979836214e+308;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = [100]
argument11[25] = {"157":",","460":595,"":403,"dg":":","1.7976931348623157e+308":"","{":1.286436329570756e+308,"1.0880272963927538e+308":"","Q":6.074903522033331e+307}
argument11[1] = ""
return a-b+c+d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14 = 59
argument14[627] = {}
return a/b*c+d
};
var base_0 = [969,242,213,595,705,627,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,242,213,595,705,627,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,242,213,595,705,627,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,242,213,595,705,627,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test674.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)