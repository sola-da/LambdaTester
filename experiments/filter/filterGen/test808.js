





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ""
return a*b+c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = null
base_1[9] = 82
return a/b-c
};
var argument4 = true;
var argument5 = "?";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7847438319683965e+308] = ">:"
argument7[-1] = ""
return a-b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = true
argument8[-100] = 3.625661331661164e+307
return a*b*c
};
var argument8 = null;
var argument9 = r_3;
var base_0 = [25,213,714,100,969,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,213,714,100,969,213]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)