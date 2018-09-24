





var callbackArguments = [];
var argument1 = false;
var argument2 = 8.527534312552302e+307;
var argument3 = {"59":"h<","9.068847023305148e+307":2.3475892365588226e+307,"JVF8}":"l!"};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = true
base_0[2] = 1.343433752007037e+308
base_0[6] = 1.6516473561319043e+308
return a+b+c+d
};
var argument5 = r_0;
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = false
base_1[1] = [403,783,213,843,0,607,213,242,59]
return a/b-c+d
};
var argument9 = null;
var argument10 = -100;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = true
base_2[5] = {"0":"","126":6.483470358473408e+307,"QV":122,"7.523684756244842e+307":1.1794102925665973e+308,"V4n":9.014130314135065e+307,"1.4392329128711586e+308":595,"":5e-324}
return a*b-c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = false
base_3 = 59
return a+b-c/d
};
var argument14 = r_1;
var base_0 = ["d","Hm","JaI_Ft(","?y","f0*"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d","Hm","JaI_Ft(","?y","f0*"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d","Hm","JaI_Ft(","?y","f0*"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d","Hm","JaI_Ft(","?y","f0*"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test8.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)