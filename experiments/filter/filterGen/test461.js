





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 8.469531716576597e+306
argument2[0] = ""
argument3[7] = [242,213,893,595,714,823]
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
argument4[1.7847438319683965e+308] = null
base_1[1] = {"a":1.2908498570980348e+308,"z+7":1.414936744240706e+308}
return a-b*c
};
var argument3 = r_1;
var argument4 = [126,893,157];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = null
argument6[157] = false
base_2[1][1] = false
return a*b-c
};
var argument6 = false;
var argument7 = 1.685793285746829e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = {"25":"OW8","":"Pi","1.5854041204989905e+308":"{","w":"","T":-100,"Tz":"","W":122}
return a-b-c
};
var base_0 = [213,"e","B","d",969,"+","Ra[",705,"V"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"e","B","d",969,"+","Ra[",705,"V"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"e","B","d",969,"+","Ra[",705,"V"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test461.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)