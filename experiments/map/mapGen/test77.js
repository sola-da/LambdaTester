





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = [893]
argument2 = false
base_0[3] = [0,82,157,618,59,618,5e-324,5e-324,460]
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"#":"","":3.26570929462995e+307," ":"","5.002864847978252e+306":"NZ","-1":157,"t":783,"[;r":"Iuo}"}
return a/b-c
};
var argument3 = 3.0041795193914693e+307;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[82] = 1.5368684069773122e+308
base_2['length'] = [59,49,"5","I8G","<&","FPB",705,705]
base_2[7] = [655,1.7976931348623157e+308,893,157,714,403,122]
return a*b*c
};
var argument5 = ["p","OWLx",100,59,843,"(",";",-1,"l5",49];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = 126
return a+b+c
};
var argument7 = null;
var base_0 = [5e-324,0,242,213,783]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,0,242,213,783]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,0,242,213,783]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,0,242,213,783]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test77.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)