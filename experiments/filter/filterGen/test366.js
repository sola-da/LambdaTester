





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][1] = 213
base_0[5] = "p6"
argument2['c'] = [82,82,122,-100,1.7976931348623157e+308,59]
return a*b*c
};
var argument2 = r_0;
var argument3 = 893;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.7847438319683965e+308] = "_"
argument6[3.7154103611117224e+307] = null
base_1[3][0] = -1
return a*b*c
};
var argument5 = r_0;
var argument6 = 403;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = false
return a+b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1] = null
base_3[1][1] = false
argument10[0] = {"242":8.338258149342392e+307,"893":1.5298297662027324e+308,"7.912379850321435e+307":"P","p":"e","K":2.37901498086843e+307,"4.282019976975972e+307":"d","":82}
return a*b-c
};
var base_0 = [655,"A","v",705,627]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,"A","v",705,627]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,"A","v",705,627]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,"A","v",705,627]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test366.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)