





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 242
argument2[2] = {}
base_0[6] = {"1.7976931348623157e+308":")","!L":"g"}
return a*b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"6.968532289606721e+307":"","3.011661077574879e+307":"","#oc|":82,"4.581776782189188e+307":9.208308026433727e+307,"i":122,"":"","g":1.1542084777256537e+308,"QW8":1.0864823262598504e+308,"f":595}
return a*b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = "u;"
base_2['length'] = [595,122,25,655,-1,595]
return a+b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = true
return a+b/c/d
};
var argument8 = true;
var base_0 = [823,595,627,122,1.7976931348623157e+308,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,595,627,122,1.7976931348623157e+308,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,595,627,122,1.7976931348623157e+308,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,595,627,122,1.7976931348623157e+308,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test37.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)