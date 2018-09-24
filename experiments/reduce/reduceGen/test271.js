





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = true
argument1[126] = 714
return a*b-c-d
};
var argument2 = null;
var argument3 = r_0;
var argument4 = false;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = "Dv`X"
base_1['length'] = {"8":1.2911258252933466e+308,"25":"p?","":783,"e":"jR2"}
argument4['*c'] = true
return a+b*c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = 3.884087928069537e+307
argument7[2] = 3.818736042363979e+307
return a/b+c+d
};
var argument7 = null;
var argument8 = "";
var argument9 = false;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = ""
argument9[4] = 1.7976931348623157e+308
return a*b+c/d
};
var base_0 = ["h",213,"&+ir","w",-100,"EU","q",893,"9"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h",213,"&+ir","w",-100,"EU","q",893,"9"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h",213,"&+ir","w",-100,"EU","q",893,"9"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h",213,"&+ir","w",-100,"EU","q",893,"9"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test271.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)