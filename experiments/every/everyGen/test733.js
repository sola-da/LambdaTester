





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = null
argument2[122] = ["{u`",82,"z","J",242]
return a-b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 4.2582514845739854e+307
argument5[1.3599216339661573e+308] = [100,618,122]
argument5[2] = {"607":"v","783":"","":"mxb","H":1.4310030547341827e+308,"1.6197351119859567e+308":655,"k":126,"Y":"y","1.3925965250534969e+308":6.527882526183834e+307,"1.3464426214055294e+308":"I3","1.624673684002516e+308":1.7976931348623157e+308}
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][6] = ["LmP","CT,(","F<+4L-",0,"QI",823,82]
base_2[7] = null
base_2[7] = false
return a+b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = {"893":"","":100,"1.6756221184550962e+308":"Q","1.1745741277257398e+308":"","1.5234854174464783e+308":714,"1.0919693700164461e+308":1.485613478441282e+308,";G":8.218984797551765e+307}
argument7[2] = ""
return a+b/c
};
var argument7 = null;
var argument8 = ["?","TiyF9","kz","0","sq","$",",N)E]>","Vn"];
var base_0 = [";","4","*","=[","9"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [";","4","*","=[","9"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [";","4","*","=[","9"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [";","4","*","=[","9"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test733.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)