





var callbackArguments = [];
var argument1 = null;
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = {"607":6.668811690329014e+307,"893":"T","":4.522243008923084e+307,"4(":"","1.0904421697781911e+308":"7","I$G":""}
return a/b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1277822633002616e+308] = {"1.7976931348623157e+308":"`]","":"","r":""}
argument7[1.359136872727139e+308] = {"T":157,"]":"5)PrV","1.0546776681946723e+308":"","":"kAW"}
return a-b+c+d
};
var argument6 = true;
var argument7 = 1.2151964946604083e+307;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = 1.8126615994568328e+307
return a+b*c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[403] = {"7.368906143565931e+307":"",")U":"","3.172720248002781e+307":"","":8.510602784715386e+307,"D":6.811681313332409e+307}
argument12['18{'] = [595,49]
return a+b+c+d
};
var argument11 = r_1;
var argument12 = r_0;
var base_0 = ["h",";","HBf","4J","$","x<","ZopDsEI","!V","ly"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h",";","HBf","4J","$","x<","ZopDsEI","!V","ly"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h",";","HBf","4J","$","x<","ZopDsEI","!V","ly"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h",";","HBf","4J","$","x<","ZopDsEI","!V","ly"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test434.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)