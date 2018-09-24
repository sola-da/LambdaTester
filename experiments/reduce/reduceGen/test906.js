





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[655] = null
argument3[595] = {"":1.500201505586594e+308}
argument1[4] = true
return a/b-c*d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = null
return a+b-c*d
};
var argument4 = {"49":",7nH","O":"","1&":"","]A":""};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.4205726959827606e+308] = null
argument8['18{'] = true
base_2[0] = {"705":2.7567787494192504e+307,"1.7692496275211345e+308":"%","8.121977464981112e+306":1.3237402899686282e+308,"P":7.832315362635579e+307}
return a-b+c+d
};
var argument7 = "";
var argument8 = null;
var argument9 = null;
var argument10 = r_0;
var argument11 = 7.692735112480232e+307;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[9] = 59
argument11[6] = ""
return a+b/c*d
};
var base_0 = ["IgIixw","M","3","s","#","p7"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["IgIixw","M","3","s","#","p7"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["IgIixw","M","3","s","#","p7"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["IgIixw","M","3","s","#","p7"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test906.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)