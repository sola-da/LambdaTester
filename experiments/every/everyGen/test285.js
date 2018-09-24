





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = [403,705,242,893,122,893,0,82,25]
return a+b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"157":1.3695530807998861e+308,"403":893,"969":"","F1":893,"":"","-1":"","d":"","1.3712099899339205e+308":213,"2.7860966465886693e+307":2.2210560871687147e+307,"9.065222218124603e+307":""}
return a-b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = true
base_2[3] = -1
return a*b-c
};
var argument5 = null;
var argument6 = {"893":"","":1.4431410796544603e+308,"Y*'=&":618,"T":9.264874167344043e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = null
argument8[1.3599216339661573e+308] = 49
base_3[3] = 7.333399917689731e+306
return a*b-c
};
var base_0 = [403,655,213,122,1.7976931348623157e+308,705,969,607,-1,157]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,655,213,122,1.7976931348623157e+308,705,969,607,-1,157]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,655,213,122,1.7976931348623157e+308,705,969,607,-1,157]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,655,213,122,1.7976931348623157e+308,705,969,607,-1,157]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test285.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)