





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[460] = [460,213,122]
base_0[1][0] = "UP"
base_0[7] = 1.1215828637918373e+308
return a+b*c
};
var argument2 = {"595":1.2830894855614321e+308,"j":"","":"","?x":1.2940164662496843e+308};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0500354979187844e+308] = ["Pb","m",618,595,":;ti!"]
argument5 = {"403":"bM","627":"DmW'","v":"v","":157,"bv":"","1.5373213191927656e+308":"h","(<":3.46378570437083e+306}
return a+b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = {"595":157,"":655,"5%":714}
argument6[627] = null
return a+b/c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = false
base_3[9] = {"o":""}
return a*b*c
};
var base_0 = [969,157,655,595,618,242,1.7976931348623157e+308,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,157,655,595,618,242,1.7976931348623157e+308,157]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,157,655,595,618,242,1.7976931348623157e+308,157]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,157,655,595,618,242,1.7976931348623157e+308,157]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)