





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = [1.7976931348623157e+308,122,49,403,82,893,126,-100,783,213]
argument2[403] = false
return a-b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = [0,705,607,0,122,655,122,59,126]
return a-b/c
};
var argument4 = 1.3865567633579486e+308;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][2] = "]8"
argument7['A'] = false
argument8[607] = "P"
return a+b-c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = false
argument9[6] = null
argument10[7] = true
return a*b*c
};
var argument9 = r_3;
var base_0 = [-1,403,5e-324,5e-324,627,618,618,213,595]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,403,5e-324,5e-324,627,618,618,213,595]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,403,5e-324,5e-324,627,618,618,213,595]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,403,5e-324,5e-324,627,618,618,213,595]
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
require("fs").writeFileSync("./experiments/map/mapGen/test472.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)