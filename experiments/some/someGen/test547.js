





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = [1.7976931348623157e+308,595]
return a+b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2.249941463060761e+307] = [1.7976931348623157e+308]
base_1[1]['{X'] = [783,655]
return a/b/c
};
var argument4 = null;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.5109538778533692e+308] = null
return a+b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = false
argument9[9.551053197482062e+307] = null
argument7 = null
return a/b+c
};
var base_0 = [100,1.7976931348623157e+308,969,595,714,100,82,627]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,1.7976931348623157e+308,969,595,714,100,82,627]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,1.7976931348623157e+308,969,595,714,100,82,627]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,1.7976931348623157e+308,969,595,714,100,82,627]
var r_3= undefined
try {
r_3 = base_3.some(argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test547.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)