





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = true
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = null
return a*b/c
};
var argument4 = null;
var argument5 = 1.3446608011919164e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][618] = null
return a+b*c
};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['T'] = true
base_3['map'] = null
argument9['d'] = ""
return a*b/c
};
var argument9 = "yq'";
var base_0 = ["8","#",0,627,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8","#",0,627,157]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8","#",0,627,157]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test889.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)