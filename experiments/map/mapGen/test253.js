





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = 157
base_0 = {"213":618,"893":"","9.52678891024765e+307":"","R":705,"2.8934618432865473e+307":4.546263839282809e+307,"1.7976931348623157e+308":"!","F":"","x":"6|"}
return a/b/c
};
var argument2 = 8.52674926281674e+307;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1]['d'] = 893
argument5[6] = true
argument5 = -1
return a*b*c
};
var argument5 = {"607":"","618":714,"6.503910955692737e+307":1.7935118346983574e+308};
var argument6 = [0,618,157,823,59,-100,1.7976931348623157e+308,595,-100];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[618] = 823
argument9[157] = [595,122,82]
base_2 = 122
return a-b/c
};
var argument8 = true;
var argument9 = 595;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 1.189498137846862e+308
base_3[6] = null
return a+b/c
};
var base_0 = ["0","v","D","?Gv"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0","v","D","?Gv"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0","v","D","?Gv"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["0","v","D","?Gv"]
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)