





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3.377960715099946e+307] = {"":5e-324,"1.7027830767583656e+308":49,"1.0566046827762143e+308":",,`","5.433984993306405e+307":"z","1.7748759073424768e+308":""," N":82,"1.4212216872860754e+308":"","*k":""}
return a-b*c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = {"59":"i","L":893,"2.4985680302685294e+307":1.1290231263042736e+306,"":"qsl:,","1.250319064639212e+308":"rS;","?":""}
argument6['AA@'] = ""
return a*b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.7261030733891165e+308] = 9.818350164135513e+306
argument8[1.1881593224845412e+308] = {"627":1.4861994874520068e+308,"":"w","1.7279508537640503e+307":"7{hI&","1.1544365822478582e+308":"","1.7976931348623157e+308":"V"}
argument8[100] = null
return a-b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = ["a","O","H","M3","0v","mO","Ik>H","Og5XE+)"]
argument8[6] = true
base_3[1][6] = 1.7976931348623157e+308
return a/b+c
};
var base_0 = ["_"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_"]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_"]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test617.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)