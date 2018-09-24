





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = ""
return a+b/c+d
};
var argument2 = [126,627,705,"v","K](]","i","-"];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = true
return a/b*c+d
};
var argument4 = true;
var argument5 = null;
var argument6 = null;
var argument7 = null;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][0] = {"122":213,"157":4.469205002148696e+306,"-100":969,"":823,"Z":"","5.827469939524817e+306":"-N"}
argument6[3] = 5e-324
return a+b/c*d
};
var argument10 = null;
var argument11 = "";
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = [627,714,100,595,595,595,655]
base_3 = ["-","b",",","=","2iOa","n","y"]
argument12[1.359136872727139e+308] = 969
return a*b*c+d
};
var base_0 = ["$8","mco","vIM)<S","KWF","M<","b0<m7",">","P"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$8","mco","vIM)<S","KWF","M<","b0<m7",">","P"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$8","mco","vIM)<S","KWF","M<","b0<m7",">","P"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$8","mco","vIM)<S","KWF","M<","b0<m7",">","P"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test698.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)