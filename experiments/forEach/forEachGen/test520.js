





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[969] = true
base_0[6] = {"82":"","1.3443340488379074e+308":"","":1.0496384980679152e+307,"A":"q@6","9.81235130411997e+307":"","5.09326015729089e+307":595,"1.7976931348623157e+308":""}
return a*b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"59":"I","122":"k","Kv":1.2499408066606575e+308,"1.6963694707031344e+308":""}
base_1[3][1.3434821406183095e+308] = {"25":"8","213":8.983496058860699e+307,"":"D","&":" ;5q I","s=P_qL":5.882261337767407e+307,"1.7121211182125595e+308":0}
argument5[1.4034744228995816e+308] = {"213":"","655":25,"893":82,"1.655055312033454e+306":""}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = false
argument5[1] = null
base_2[0][1] = {"":655}
return a+b/c
};
var argument5 = 1.7976931348623157e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.4034744228995816e+308] = 0
return a*b-c
};
var argument7 = null;
var base_0 = [595,460,705,-1,460,843,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,460,705,-1,460,843,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,460,705,-1,460,843,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,460,705,-1,460,843,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test520.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)