





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][7] = ""
argument2 = {"4":-1,"i2J>":4.554259316965665e+307,"":"","C":1.2142552952737815e+308}
return a-b*c
};
var argument2 = [823,0,403,893,595,-100,893,783];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = ""
argument4[122] = 9.203479632176039e+307
return a+b-c
};
var argument4 = false;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = ""
base_2[0] = {"59":4.513295104551401e+307,"893":8.207248014735379e+307,"":"68M7","1.3814779480608363e+308":4.176186536135523e+307,"j1":1.276088902711043e+308,"7!":"P","u":-100}
return a/b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
argument8['sJRZP'] = null
base_3[3] = 1.195443382869624e+308
return a-b-c
};
var argument8 = r_3;
var base_0 = [242,59,595,-100,213,-1,126,25,607]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,59,595,-100,213,-1,126,25,607]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,59,595,-100,213,-1,126,25,607]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,59,595,-100,213,-1,126,25,607]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test355.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)