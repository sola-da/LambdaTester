





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = 157
base_0[3][1] = [100,"G0?R","c","#d","Ri","v;7V",595,403,"[lii"]
return a/b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][2][6] = true
base_1[3][1] = null
base_1[2] = 126
return a*b-c
};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][4] = {"49":"zP"}
return a/b/c
};
var argument6 = [893,893,157,595,59,0];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7][2] = ["z","J","Mg","bu","@U","(","F"]
return a-b/c
};
var argument8 = false;
var base_0 = [0,595,783,-1,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,595,783,-1,59]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,595,783,-1,59]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,595,783,-1,59]
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
require("fs").writeFileSync("./experiments/map/mapGen/test623.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)