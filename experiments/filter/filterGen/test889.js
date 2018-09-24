





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['c'] = {"893":"b","CF_":"Y?oieiF","1.7941048487843073e+308":823,"1.2714352803945234e+308":"","4.490293383351288e+307":"","P)O":"","":714}
argument2[6] = "){H"
return a+b+c
};
var argument2 = {"403":100,"Je&0(":"","":"","1.3253463407324289e+308":1.758910087060746e+307,"1.2441252354593066e+308":"q2i","6.730289538758601e+307":460,"1.1986850489355517e+308":1.084709397901614e+308};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[714] = [618,5e-324,823,82,157,705,59,783,242]
argument5[-1] = 3.425723116195374e+307
argument5['jo'] = ["J%","23",")"]
return a*b+c
};
var argument5 = 126;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = 82
return a*b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['7q('] = null
argument8[3] = ["c",627,460]
argument7[3.377960715099946e+307] = null
return a-b/c
};
var base_0 = ["Y-","!","xk`",";`"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Y-","!","xk`",";`"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Y-","!","xk`",";`"]
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test889.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)