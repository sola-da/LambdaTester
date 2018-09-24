





var callbackArguments = [];
var argument1 = r_0;
var argument2 = null;
var argument3 = 7.277969015805058e+306;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = true
return a+b/c/d
};
var argument5 = r_0;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = [0,607,0,59,0,25,607]
return a-b*c/d
};
var argument9 = [-100,"f","s","?g","`@"];
var argument10 = null;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[595] = 3.8155500307720594e+307
argument10[3] = 126
base_2[1] = ["Y","qk","1","b","#$","G","q","q","[7f"]
return a-b*c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[7] = {"":6.2601527872667e+307}
argument15 = null
base_3[9] = ""
return a/b*c/d
};
var argument14 = r_3;
var argument15 = "";
var base_0 = ["U",0,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U",0,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U",0,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["U",0,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test455.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)