





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['?'] = [122,607,893,655,969,969,460,157,460]
return a+b-c
};
var argument2 = "+=AT";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460] = 1.5625746005223139e+308
base_1[2] = null
argument4['wIs'] = null
return a*b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['VsR'] = {"49":"","126":"#","969":"eMR","1.2830942009521401e+308":"j","8.255921449589431e+307":8.539349027852348e+307,"1.1432199714968278e+308":"6","6.343421990396415e+307":242,"1.559975146370898e+308":1.7976931348623157e+308,"2.82773867654485e+307":157,"u":"HCec"}
return a*b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ["9k",460]
argument8[59] = {"893":"","BTi`":157,"":"","*]F<A":"J","1.7916068789800633e+308":1.3475238721996065e+308,"3.123817678674708e+307":403}
return a/b-c
};
var argument7 = [1.7976931348623157e+308,59,-100];
var argument8 = null;
var base_0 = [242,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test924.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)