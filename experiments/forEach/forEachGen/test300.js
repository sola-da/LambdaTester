





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = true
base_0[3][0] = {"25":"","59":"r","705":-100,"lm$e":"","T|":893,"1.10993655449977e+308":1.7976931348623157e+308,"":"","1.6183444314988099e+308":-1,"wu":"B'5","-100":"^>"}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = 1.5223816417680786e+308
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 8.70947903778803e+307
base_2[3][0] = [655]
argument4[5] = null
return a*b-c
};
var argument4 = r_0;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = 49
argument7 = [595,59,59,969,126]
argument7[2] = {"AV#":"","":-100,"1.7976931348623157e+308":"#U","1.0221361535808346e+308":-1,"yf^-=":714}
return a-b-c
};
var argument7 = ["x","PFh+p#v",":0","u","F","?q)^+h0X","rO","D","I;"];
var base_0 = [714,1.7976931348623157e+308,242,823,595,893,655,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,1.7976931348623157e+308,242,823,595,893,655,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,1.7976931348623157e+308,242,823,595,893,655,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,1.7976931348623157e+308,242,823,595,893,655,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test300.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)