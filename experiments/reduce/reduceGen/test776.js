





var callbackArguments = [];
var argument1 = false;
var argument2 = "";
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = ["lj: ","M"]
return a-b-c+d
};
var argument5 = true;
var argument6 = null;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.359136872727139e+308] = -100
argument7[403] = 783
argument7[90] = false
return a*b/c-d
};
var argument9 = r_2;
var argument10 = r_2;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"82":"I1*","213":1.0253462934218322e+308,"618":"","'y":"","1.052333866189413e+308":"u5","":25,"1.0669624277670572e+308":"b!&","4.988653490951059e+307":157}
argument9[2] = [-100,403,823,893,1.7976931348623157e+308]
argument11[25] = 403
return a-b+c*d
};
var argument13 = null;
var argument14 = r_2;
var argument15 = true;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[0] = {"242":7.715843342642202e+307}
return a/b/c*d
};
var base_0 = ["K","x9+","U-v1"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["K","x9+","U-v1"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["K","x9+","U-v1"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["K","x9+","U-v1"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test776.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)