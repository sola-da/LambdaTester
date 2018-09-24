





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 8.469531716576597e+306
base_0[3] = ""
argument3[5] = [242,213,893,595,714,823]
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
argument2[2] = null
base_1[1] = {"a":1.2908498570980348e+308,"z+7":1.414936744240706e+308}
return a-b*c
};
var argument3 = r_1;
var argument4 = [126,893,157];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = null
argument6[6] = false
argument6[3.3156198695370476e+307] = false
return a*b-c
};
var argument6 = false;
var argument7 = 1.685793285746829e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.3156198695370476e+307] = {"25":"OW8","":"Pi","1.5854041204989905e+308":"{","w":"","T":-100,"Tz":"","W":122}
return a-b-c
};
var base_0 = [213,"e","B","d",969,"+","Ra[",705,"V"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"e","B","d",969,"+","Ra[",705,"V"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"e","B","d",969,"+","Ra[",705,"V"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"e","B","d",969,"+","Ra[",705,"V"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test473.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)