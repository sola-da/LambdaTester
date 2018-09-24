





var callbackArguments = [];
var argument1 = false;
var argument2 = ["iU"];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ["$",627,"&",213,"!m","u`",969]
return a*b/c/d
};
var argument5 = false;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[';N'] = "8"
return a*b-c-d
};
var argument9 = false;
var argument10 = null;
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[82] = null
argument9[1] = "K"
base_2[5] = false
return a-b*c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[1.1277822633002616e+308] = 607
argument13[1] = null
argument15[25] = {"59":"r^S","595":"","":1.924843522159924e+307,"Y6":893,"o=!_T":1.7976931348623157e+308,"1.7506013236238116e+307":""}
return a/b-c-d
};
var argument14 = ["T="];
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test458.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)