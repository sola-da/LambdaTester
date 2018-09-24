





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8] = {"82":"vu","460":7.139402546658857e+307,"618":":","L":"F","q)^+h0X":"","cD":"FQ","3.495926948561739e+307":783,"7.175335745684149e+307":"","":""}
argument1 = 969
base_0 = null
return a*b/c
};
var argument2 = 893;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = "K"
argument5[8.748669805137695e+307] = 1.0457384422227488e+308
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[627] = null
argument6[4] = {"0":893,"49":"y","714":"","U":"","1.3442277811145543e+308":618}
argument6[-1] = null
return a*b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['AA@'] = false
argument8[783] = null
return a-b+c
};
var argument7 = true;
var argument8 = null;
var base_0 = [157,126,100,242,403,823,705,460]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,126,100,242,403,823,705,460]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,126,100,242,403,823,705,460]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,126,100,242,403,823,705,460]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test291.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)