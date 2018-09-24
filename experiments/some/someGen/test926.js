





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][4] = {"7.243022470185516e+307":"y","1.1961765766543865e+308":2.8471040033388375e+307}
argument2['f'] = false
base_0[1][8] = [893,1.7976931348623157e+308,122,0,213]
return a-b/c
};
var argument2 = {};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = {"1.6282032076652639e+308":843,"":"F","R":7.021483135090035e+307,"1.4248864608560415e+308":"K#n","7.598879914331638e+307":5.6152530936386985e+306,"5.689772081650998e+307":893,"uu":"Cl","{Vfuh2":0,"c":0}
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['V'] = 1.0086899146976696e+308
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = true
return a-b*c
};
var base_0 = ["R","1","s]Vhx","H",",#"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["R","1","s]Vhx","H",",#"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["R","1","s]Vhx","H",",#"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["R","1","s]Vhx","H",",#"]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test926.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)