





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = [5e-324,655,460]
return a*b/c/d
};
var argument2 = [126,823,783,122,823,655,157];
var argument3 = {"213":8.113482701092997e+307,"1.5396725983839716e+306":1.0393592151769284e+308,"":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
return a/b/c-d
};
var argument5 = {"618":9.75215592328933e+307,"655":893,"823":1.5996664978435222e+308,"893":595,"1.6627654171649266e+307":49,"4.605565069878469e+307":893,"":"","-H":"","<<`G":""};
var argument6 = {"e;p":-100,"^r":"YSM:SZ<@","_Z":"Wg2A","":1.7976931348623157e+308};
var argument7 = r_2;
var argument8 = true;
var argument9 = "";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = false
argument7 = false
argument8[4] = {"242":""}
return a/b/c+d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = {"2":"P","627":"","655":242,"714":403,"":"","3&":"","1.7410071139630235e+308":3.212831418980904e+307,"no6 ":893}
argument11 = {"460":1.7976931348623157e+308,"":"V","1.3805680913927273e+308":"Y","s[_u":"I4"}
return a/b-c/d
};
var argument12 = false;
var base_0 = ["H"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test80.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)