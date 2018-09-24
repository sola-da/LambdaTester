





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[460] = true
base_0['length'] = {"25":1.1707740163161644e+308,"460":100,"618":"Ytf","1.4316069378296524e+308":"X","":"","M*":1.5324439755283366e+308,"5.999259864016606e+307":"aa"}
base_0[3] = 1.3732656558937376e+307
return a+b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8][0] = {"82":1.1724422085591733e+308,"460":"m[","823":8.97419569308532e+307,"":""}
base_1[0] = {"823":242,"":"","1.355212271128769e+308":"u"}
return a/b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = {"^":"","1.6434711896703794e+305":"","":"NGQ1Z",")@":1.7976931348623157e+308,"1.5263232945938313e+308":1.3682446032474993e+308,"TB":"","4.8712126948841896e+306":"U","$":"G"}
return a-b-c
};
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = [595,627,595,893,122,-1,627,100]
base_3[2] = 7.061058952094933e+307
base_3[8] = {"1.129404358182035e+308":"","":0,"R ":"J","1.434628008106377e+308":"R","{":-1,"3.747854909535527e+306":"Ije"}
return a+b/c
};
var base_0 = [242,-100,82,843,122]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-100,82,843,122]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-100,82,843,122]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-100,82,843,122]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test59.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)