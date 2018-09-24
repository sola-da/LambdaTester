





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = [1.7976931348623157e+308,213,1.7976931348623157e+308,-1,969,157,655]
argument2[460] = "0O0"
return a-b/c+d
};
var argument5 = null;
var argument6 = 8.692236335123544e+307;
var argument7 = "^";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = true
argument6[7] = 1.5926179020910572e+308
return a*b/c/d
};
var argument9 = false;
var argument10 = false;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = ["?",82,"UJN","J","y",595,"O"]
return a/b-c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[403] = {"783":"","":"ad","1.261878268249963e+308":1.2405526209817034e+308,"`rh8SI'_":"","4.068604414398083e+307":8.733862249907851e+307,"y":"s","M":126,"uN[&":"","!":1.4793014877642901e+308,"9.038992472014448e+307":0}
return a/b*c/d
};
var argument14 = null;
var base_0 = [618,607,823,-1,618,49,705,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,607,823,-1,618,49,705,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,607,823,-1,618,49,705,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,607,823,-1,618,49,705,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test813.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)