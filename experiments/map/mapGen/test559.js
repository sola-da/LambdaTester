





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[714] = 1.7976931348623157e+308
base_0[6][3] = ["Pk",157,-100,242]
argument2[3] = 7.374415062863121e+307
return a+b*c
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = ["$d","1G%&","q%Tu","2","c",",","J","5","e"]
argument5[5] = "n"
base_1[4] = ""
return a+b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][0] = {"6.465474079686444e+307":"","":1.1375358990107865e+307}
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = null
base_3[6][3] = 1.5400694017978704e+308
base_3[7] = 4.718187925941449e+307
return a-b*c
};
var argument8 = null;
var base_0 = [655,627,595,0,969,157,460,-1,5e-324,5e-324]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,627,595,0,969,157,460,-1,5e-324,5e-324]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,627,595,0,969,157,460,-1,5e-324,5e-324]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test559.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)