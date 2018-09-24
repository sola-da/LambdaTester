





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = ["H","Z","D7S","3Q","E"]
base_0[3][1.3434821406183095e+308] = 1.700471271387077e+308
argument2[1] = [0,"G",0,"Z`:","c"]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 2.667893647622747e+307
argument3[4] = 4.2529650727144477e+306
return a*b+c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.1679954109349114e+308] = "2"
argument5[-100] = 460
return a/b-c
};
var argument4 = [1.7976931348623157e+308,25,126,82,5e-324,126,122];
var argument5 = "`h6f";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][0] = {"1":"9","157":969,"595":"","627":"e","1.3551356825272355e+308":"","1.1865901479716535e+308":1.258109991298427e+308,"7.990503264191458e+307":213,"2.960730553232072e+307":"","7.651563764122467e+307":"9"}
base_3[6] = "f"
return a-b*c
};
var argument7 = 1.1635675596818193e+308;
var base_0 = [618,"V","{",-1]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"V","{",-1]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"V","{",-1]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"V","{",-1]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test112.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)