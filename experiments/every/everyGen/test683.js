





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = ""
argument2[6] = 9.675868329891635e+307
base_0[0][6] = false
return a+b/c
};
var argument2 = ["v1G","m","8"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['io'] = ["Q","x","A?t!","U","N","c","1u",":","6^"]
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = "3"
return a+b+c
};
var argument5 = null;
var argument6 = ["yi","Y",25];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = 403
argument8[3.3156198695370476e+307] = null
base_3[1][2] = {"3.732522960333144e+307":242,"1.1936652321573449e+308":1.033970716972152e+308,"":25,"A":1.5470537297270164e+307}
return a-b+c
};
var argument8 = [595,213,627,"9FV",714,"l","4?","S","@"];
var argument9 = true;
var base_0 = ["v","O","`","9",">J,U"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v","O","`","9",">J,U"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v","O","`","9",">J,U"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v","O","`","9",">J,U"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test683.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)