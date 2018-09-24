





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][2] = true
argument2['A'] = {"5.182526613252515e+307":9.54938378227275e+307,"X":823,"1.5216846357239185e+308":1.7976931348623157e+308,"Gv":1.302535874115615e+308,"f5O":2.6893041514279987e+306,"F":714,"1.7976931348623157e+308":5.479253058108058e+307}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['T'] = false
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = false
argument5[1.4034744228995816e+308] = 1.0985262679902393e+308
argument5[1.4034744228995816e+308] = ""
return a-b+c
};
var argument4 = [49];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['filter'] = {"9":"","460":"lM","@6G":"","Gr":"m"}
argument6[2] = [893,969,460,618,1.7976931348623157e+308]
base_3[0][0] = true
return a*b*c
};
var argument6 = 1.689720114058075e+308;
var argument7 = null;
var base_0 = [618,893,5e-324,-100]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,893,5e-324,-100]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,893,5e-324,-100]
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,893,5e-324,-100]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test483.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)