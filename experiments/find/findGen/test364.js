





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[5] = 0
base_0 = null
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8.748669805137695e+307] = {"":"f6,h","1.743617434455284e+308":"YF"}
base_1[0][2] = true
base_1[1] = 126
return a*b*c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[-1] = {"100":":mH","126":6.340465611767413e+307,"655":893,"705":1.4398735094741914e+308,"R|GJ":705,"*!Q":"","1.1286026536380947e+307":"[","#I{g":"cboL"}
return a-b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4.953791384496108e+307] = null
argument7 = false
base_3[0][1] = {"":"","G":1.0356160915172718e+308,"1.1057125282085922e+307":25,"|":"g{+|","4.2008371116378156e+307":1.2923497041701724e+308,"4.683527225590161e+307":1.5537421725364437e+308}
return a-b-c
};
var argument8 = r_3;
var base_0 = ["E",403,82,";",0,705]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E",403,82,";",0,705]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E",403,82,";",0,705]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E",403,82,";",0,705]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test364.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)