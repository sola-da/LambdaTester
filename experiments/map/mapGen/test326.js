





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = null
base_0['length'] = 3.9128697643475505e+307
base_0[0][1.4677087964888306e+308] = {"59":4.465932656351804e+307,"213":705,"242":7.306106466205711e+307,"893":1.580420442264455e+308,"T":8.759866712999123e+307,"":595,"@C=BN|D":"y"}
return a-b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = 1.7976931348623157e+308
argument4[403] = 969
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[157] = {"627":9.178318514311696e+307,"L$=t":"#","i":"","1.3305599321998964e+308":1.6118041767553924e+308,"Yh7I1#":"","%":"8","2.686369876418535e+307":"P","":783,"8.605023684725387e+307":1.444430541060944e+308}
return a+b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['T'] = 7.503289737566578e+307
argument6[6] = ""
base_3[0][0] = {}
return a*b+c
};
var base_0 = ["%","r","2","<","0Z","5"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","r","2","<","0Z","5"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%","r","2","<","0Z","5"]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%","r","2","<","0Z","5"]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapGen/test326.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)