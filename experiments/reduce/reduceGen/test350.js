





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = false
base_0[0][4] = 1.7391365979727662e+307
base_0[9] = null
return a-b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = null
argument4['HMm'] = "h"
return a/b-c+d
};
var argument3 = r_1;
var argument4 = null;
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = null
argument4[627] = true
return a*b+c-d
};
var argument7 = 843;
var argument8 = r_1;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = false
return a*b/c*d
};
var base_0 = ["q",0,627,"u",5e-324,705,595]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q",0,627,"u",5e-324,705,595]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q",0,627,"u",5e-324,705,595]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q",0,627,"u",5e-324,705,595]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test350.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)