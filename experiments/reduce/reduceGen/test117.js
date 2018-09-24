





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = {"5":"K","213":-100,"823":627,"1.0213969631202309e+308":607,"4.898670874382906e+307":1.17216637004474e+308,"":"","`":"","1.5576545106665314e+308":"","'":627,"6.055931893934415e+307":""}
return a/b+c*d
};
var argument5 = null;
var argument6 = null;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ""
argument6[25] = [25,705,122,403,783]
return a/b-c*d
};
var argument9 = null;
var argument10 = {"1.7976931348623157e+308":59,"[":783};
var argument11 = ["|","z"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10 = {"893":"%","":"6","{w>a":"S","1.854849144318416e+307":"","E":1.4939453524645313e+308}
return a*b+c*d
};
var argument13 = ["U","b","L"];
var argument14 = null;
var argument15 = false;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[2] = 403
base_3[3] = ">qa"
base_3[1][0] = true
return a-b/c*d
};
var base_0 = [618,25,655,655,242,100,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,25,655,655,242,100,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,25,655,655,242,100,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,25,655,655,242,100,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test117.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)