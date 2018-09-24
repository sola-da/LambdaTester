





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = "(C"
return a-b-c*d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[59] = ["Y","w",1.7976931348623157e+308,969,655,"Q>","3c!<KQ",100]
argument5[213] = null
return a*b+c-d
};
var argument5 = {"705":5.809037757140014e+306,"3.383019941512079e+307":1.2869225739664422e+308,"":655};
var argument6 = "<AsL";
var argument7 = "k";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"49":595,"82":4.537666885285886e+307,"":8.941944037367477e+307,"1.6023661199798497e+306":"1>8|`-","}":8.015843070493376e+307}
base_2[9] = "$U6e"
return a/b/c*d
};
var argument9 = 5.091490257416202e+307;
var argument10 = 1.128963425761596e+308;
var argument11 = r_3;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = 1.0371620165755281e+308
return a+b*c-d
};
var base_0 = [-1,213,-100,714,126,100,655,213,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,213,-100,714,126,100,655,213,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,213,-100,714,126,100,655,213,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,213,-100,714,126,100,655,213,100]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test793.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)