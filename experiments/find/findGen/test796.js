





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = "z"
argument2[5] = "^"
base_0[1][6] = [705,618,82]
return a*b/c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = ""
argument6[1.1881593224845412e+308] = [618,823]
argument6[7] = "zCc"
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = null
base_2[3][1] = true
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['^h'] = true
return a+b-c
};
var argument7 = {};
var base_0 = ["`","$7",59,"`D>("]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`","$7",59,"`D>("]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`","$7",59,"`D>("]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`","$7",59,"`D>("]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test796.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)