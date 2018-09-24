





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['8('] = {"0":25,"595":893,"618":1.7209663855777379e+308,"655":59,"714":"","":783,":%w":"","p":""}
argument3[3] = 460
return a/b-c-d
};
var argument2 = 157;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = [627,627,607,627,595,122,-100]
return a-b/c+d
};
var argument4 = 213;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"618":"","3.4082116683154837e+307":"","t":1.21047679913154e+308,"1.3459434685544234e+308":"","1.6788049628441531e+308":3.600774611621207e+307,"0 ":"","8.990881002069011e+307":4.551635105147872e+307}
base_2[6] = [157,893,-100,460,25,-100,460]
argument7[-1] = null
return a+b+c*d
};
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = false
argument9[0] = {}
argument9[-1] = false
return a-b-c+d
};
var argument8 = null;
var argument9 = true;
var base_0 = [59,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,714]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test312.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)