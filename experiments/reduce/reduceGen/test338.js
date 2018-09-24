





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = 157
argument3[59] = "3"
base_0 = true
return a+b*c+d
};
var argument2 = {"460":1.1916984301006426e+308,"618":"","":"PJW[>&"};
var argument3 = 969;
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = false
argument4[25] = {"8":"q","627":")K&k:!","":"Y","*":-100,"nt%3":783,"{":2.0016501106098747e+307}
return a-b-c+d
};
var argument7 = null;
var argument8 = {"969":"","1.186420873658473e+308":"","9.449950900487292e+307":"V","8.575361245828968e+307":"","":893,"-1":969};
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = true
argument7[4] = null
argument8[1] = "'"
return a/b-c-d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b/c/d
};
var argument12 = "";
var base_0 = ["{","$[w","`",",","C","ErF","2oG","b","It","$pl"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{","$[w","`",",","C","ErF","2oG","b","It","$pl"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{","$[w","`",",","C","ErF","2oG","b","It","$pl"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{","$[w","`",",","C","ErF","2oG","b","It","$pl"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test338.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)