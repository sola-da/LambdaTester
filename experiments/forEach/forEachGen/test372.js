





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][823] = [607,82,595,25,157]
return a-b/c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = ""
base_1[0][0] = {"213":157,"m":"","":0,"1.161341170569884e+308":1.0785023105651645e+308}
return a*b*c
};
var argument5 = 1.7976931348623157e+308;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = false
argument9[3] = [">","8","qK","`5&","5-r,-","(","8O"]
argument9[1] = ""
return a+b-c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = true
base_3[7] = 714
return a-b+c
};
var base_0 = [655,213,893,705,82,843,595,607,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,213,893,705,82,843,595,607,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,213,893,705,82,843,595,607,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,213,893,705,82,843,595,607,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test372.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)