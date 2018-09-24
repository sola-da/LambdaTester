





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = 5.267471159673728e+307
base_0['length'] = null
argument3[1] = [714,82,100,607,82,893,126,843,59]
return a/b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = {"WYC":"=","qy<8I":"9","=":"he","iey1=":"","":705,"1.5055689715042052e+308":595,"X":"@(>","S":""}
return a-b/c*d
};
var argument3 = true;
var argument4 = "";
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['Cb'] = {"59":823,"595":"","607":893,"618":"","655":"","":"u","ok(":7.584051725610258e+307,"A":"gP","?":"p","e":893}
argument6[5] = ["7pN","S",1.7976931348623157e+308]
return a/b-c*d
};
var argument8 = r_3;
var argument9 = null;
var argument10 = [627,157];
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = 1.7976931348623157e+308
argument10[6.35085648319999e+307] = 9.165920159520978e+307
base_3[5] = ""
return a+b+c/d
};
var base_0 = [783,213,627,403,122,783,213,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,213,627,403,122,783,213,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,213,627,403,122,783,213,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,213,627,403,122,783,213,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test233.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)