





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[783] = null
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = [82,"rc",82,"+","h",0,893,783,"cQk["]
argument3[1.0500354979187844e+308] = ""
return a*b+c
};
var argument3 = [59,607,823,618,823,49,627,-1,969,893];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = false
argument6[100] = false
return a-b*c
};
var argument5 = ["j_","I",213];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = [823,843,213,607,460,627,607,595,242]
argument8[6] = "k'4"
return a-b+c
};
var base_0 = [157,"op5","_",5e-324,655,"*",893,"fQR-Z",618,"V"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,"op5","_",5e-324,655,"*",893,"fQR-Z",618,"V"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,"op5","_",5e-324,655,"*",893,"fQR-Z",618,"V"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,"op5","_",5e-324,655,"*",893,"fQR-Z",618,"V"]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test480.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)