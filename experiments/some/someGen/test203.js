





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = ["}","lJ","_v","d","`","q8"]
return a+b/c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [893,655,403,1.7976931348623157e+308,213,655]
base_1[3] = {"0":"","4":"0G4","655":5.869569182864875e+307,"":"=dx"}
base_1[5][0] = 1.071565841167593e+308
return a-b*c
};
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = 893
base_2[1][2] = 1.5080075606235834e+308
return a-b+c
};
var argument8 = null;
var argument9 = r_0;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[705] = null
base_3[1]['{X'] = ["D","^"]
base_3[2][5] = ""
return a+b+c
};
var base_0 = ["=","O","gRl","_",",",">A@"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=","O","gRl","_",",",">A@"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=","O","gRl","_",",",">A@"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=","O","gRl","_",",",">A@"]
var r_3= undefined
try {
r_3 = base_3.some(argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test203.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)