





var callbackArguments = [];
var argument1 = true;
var argument2 = {"":""};
var argument3 = ["^c","N0","!"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 5.156981018190647e+307
argument3[403] = 157
base_0[1] = 1.4099690056399233e+308
return a-b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[9.331954948603684e+307] = ""
argument5['Cb'] = ""
argument7['(R'] = 893
return a-b/c*d
};
var argument6 = r_1;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = null
return a*b*c/d
};
var argument9 = false;
var argument10 = null;
var argument11 = -100;
var argument12 = null;
var argument13 = 6.317706151527556e+307;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[460] = "0S^n>"
argument11[0] = {"":"","h":100,"y4":"2","1.004167177864704e+308":5.042103306791269e+307}
argument11[8] = ""
return a*b/c+d
};
var base_0 = [969,"Im-,","A",823,100,"!>",82]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,"Im-,","A",823,100,"!>",82]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,"Im-,","A",823,100,"!>",82]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,"Im-,","A",823,100,"!>",82]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test901.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)