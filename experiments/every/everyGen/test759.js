





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = null
return a+b*c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['sJRZP'] = 4.503561323495315e+307
base_1[0][6] = ""
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = false
base_2[0][2] = ""
base_2[9] = "U'T"
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
return a-b-c
};
var argument6 = true;
var base_0 = [242,242,242,403,460,714,460,122,595]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,242,242,403,460,714,460,122,595]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,242,242,403,460,714,460,122,595]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,242,242,403,460,714,460,122,595]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test759.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)