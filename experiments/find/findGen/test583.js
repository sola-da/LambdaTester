





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ""
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = false
argument4['^h'] = true
argument4['^h'] = {}
return a-b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = 9.321136161081544e+306
argument5[969] = 1.2194269200819222e+308
return a-b+c
};
var argument4 = "Y";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = [1.7976931348623157e+308,627,126,59,893,705,705]
argument7[3.7668525981726295e+307] = null
return a+b+c
};
var argument7 = r_3;
var argument8 = null;
var base_0 = [0,"|%"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"|%"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"|%"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"|%"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test583.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)