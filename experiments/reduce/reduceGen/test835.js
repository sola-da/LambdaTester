





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1532786076532189e+308] = true
return a+b-c-d
};
var argument2 = 59;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = {"6.410875309581056e+307":""}
return a*b+c-d
};
var argument5 = 49;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = {"2.5731270352142194e+306":"b","Z":823,"1.609376396192387e+308":"","YW":126}
base_2[3][1] = 705
argument8[9.331954948603684e+307] = {"595":"","1.3788309692694524e+308":5e-324,"":1.0852710181541324e+308,"A":"&WYS4","9.927956148233684e+307":1.7596871007859898e+308,"1.5706450184473583e+308":"","1.6095157234184756e+308":1.0571006351595602e+308}
return a*b/c+d
};
var argument8 = null;
var argument9 = 627;
var argument10 = null;
var argument11 = 893;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[4] = true
base_3['length'] = null
argument11[0] = false
return a/b/c*d
};
var base_0 = ["ex","N","3t"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["ex","N","3t"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["ex","N","3t"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["ex","N","3t"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test835.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)