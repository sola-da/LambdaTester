





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = [";","K","C","RIei","Q0","v",";"]
argument3[122] = [783,403,59,49,969,595,82,82,82]
argument3[6] = true
return a-b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = null
base_1[1][4] = 1.458336066739785e+308
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = null
return a-b*c
};
var argument5 = ["M",213,":","H","9{"," "];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2.4183178393969103e+306] = ""
base_3[3] = {"1.5075380628287218e+308":-1}
argument7[3] = {"157":1.3875706981292652e+308,"":1.059943051732745e+308,"d":"","1.1881593224845412e+308":0,"3.8618734927545664e+307":4.886904685613751e+306,"N":1.4982425864907225e+308}
return a-b*c
};
var argument7 = true;
var argument8 = null;
var base_0 = ["#8Z!","j","XL@5","M","+_e&:","`","!I"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#8Z!","j","XL@5","M","+_e&:","`","!I"]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#8Z!","j","XL@5","M","+_e&:","`","!I"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#8Z!","j","XL@5","M","+_e&:","`","!I"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test376.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)