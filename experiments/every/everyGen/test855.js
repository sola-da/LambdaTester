





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['sJRZP'] = {"100":893,"618":1.3019676993571718e+308,"1.7627661621255174e+308":25,"1.6722127532894108e+307":-1,"":157}
base_0[1][2] = null
return a/b/c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][1.5144566325729397e+308] = true
return a+b*c
};
var argument5 = "e";
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][7] = ""
base_2[1][2] = 595
return a+b+c
};
var argument8 = r_0;
var argument9 = r_1;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1.3599216339661573e+308] = true
argument12[4] = true
return a/b*c
};
var argument11 = r_0;
var argument12 = {"122":2.640725102866449e+307,"460":1.2153029408957428e+308,"893":"","j":714,"5e-324":"5","":7.528294534245123e+307,"_?G":126,"UK":1.7976931348623157e+308,"#NO":"Q]","si":""};
var base_0 = ["v","=*","j","b","K","omf","l","(","*W"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","=*","j","b","K","omf","l","(","*W"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","=*","j","b","K","omf","l","(","*W"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","=*","j","b","K","omf","l","(","*W"]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test855.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)