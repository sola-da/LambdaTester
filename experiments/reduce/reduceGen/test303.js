





var callbackArguments = [];
var argument1 = 627;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = false
argument1[2.1869172855352885e+307] = null
argument3[1] = null
return a+b-c+d
};
var argument5 = ["#","xx|","Y","h"];
var argument6 = false;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = true
argument7[90] = "U"
argument5 = null
return a/b/c-d
};
var argument9 = "x";
var argument10 = ["^G","{","ElGg[","X","7w","x","Y",":","S30@"];
var argument11 = ["w",")","L","M"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = true
base_2[4] = null
argument9[1] = {"242":"s","":59,"%":"","1.7976931348623157e+308":9.109383524200278e+306,"6.354685403150325e+307":"","1.151622354234667e+308":213,"4.8921357849939863e+306":1.2233893846391983e+308,"kCra":7.582167578200318e+307}
return a+b-c+d
};
var argument13 = r_2;
var argument14 = false;
var argument15 = r_2;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[3] = false
base_3[0][3] = "LS"
return a+b-c-d
};
var base_0 = [595,25,82,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,25,82,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,25,82,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,25,82,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test303.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)