





var callbackArguments = [];
var argument1 = true;
var argument2 = r_0;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = null
argument1[4] = null
argument3[1] = {"25":"I$$$O","100":"z","403":5.91502828511245e+307,"893":"","9.582689643818305e+307":9.976925004180251e+307,"1.5909250434714532e+308":"AO","":"","u:f":"","1.5262926744104748e+308":1.586348933062314e+308,"2.587602547960195e+307":""}
return a*b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = null
base_1[1][3] = true
base_1[1][3] = [460,969]
return a*b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [607,5e-324,126]
argument7[4] = {"59":242,"969":"sqn","1.3112379873591054e+308":",","z*`H>Pbz":2.272134136695333e+307}
return a/b*c/d
};
var argument7 = r_1;
var argument8 = null;
var argument9 = r_3;
var argument10 = [783,0];
var argument11 = 2.2344086907242048e+307;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = {"595":4.884521385493301e+307,"618":-1,"D":9.56675450341124e+307,"(":"","":"","N":"","1.7976931348623157e+308":"8","tF":1.4093620634561095e+308,"1.4019976326981327e+308":"7","-100":"h"}
return a+b*c/d
};
var base_0 = ["("]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["("]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["("]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["("]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test219.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)