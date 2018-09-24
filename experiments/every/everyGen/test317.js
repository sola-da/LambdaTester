





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.960033715165713e+307] = false
base_0[6] = ""
argument2[2] = {"1.5881005742658817e+308":714,"":"","8.373509636511529e+307":126,"@4X":""}
return a/b-c
};
var argument2 = [">",893,"=",82,5e-324,595,607];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ""
base_1[0][0] = {"49":"","82":843,"157":157,"1.672786168326013e+308":"","6N`Ird":"","":"r","-100":714,"8.330332393470125e+307":4.871543131720263e+307}
base_1['length'] = {"":"lq3<K","Im":893}
return a/b*c
};
var argument5 = {};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = [783,607,618,655,618]
argument9 = null
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][4] = "G;"
argument9[0] = null
return a-b/c
};
var base_0 = [49,59,460,-100,783,0,655]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,460,-100,783,0,655]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,460,-100,783,0,655]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,460,-100,783,0,655]
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
require("fs").writeFileSync("./experiments/every/everyGen/test317.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)