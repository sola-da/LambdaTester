





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['^h'] = ["z&#","i","sp#a","JQ",",","X","`z","1"]
return a/b-c
};
var argument2 = [618,-1,618,893,618];
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = [705,783,0]
base_1['length'] = null
base_1[7] = "0"
return a*b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3][6] = [705,655]
argument6[25] = ";o"
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = {"460":"06`","1.7542226263003638e+308":3.217963454975915e+307}
base_3[2] = {"25":5.891135961115323e+307,"607":157,"D`Jkh":"","":7.554917445061047e+307,"-100":1.1392868252256759e+308,"3.683429631611976e+307":"","1.7976931348623157e+308":1.6246402117946748e+307}
return a-b+c
};
var base_0 = [-1,607,627,157,213,-1,242,969,627]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,607,627,157,213,-1,242,969,627]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,607,627,157,213,-1,242,969,627]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,607,627,157,213,-1,242,969,627]
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
require("fs").writeFileSync("./experiments/find/findGen/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)