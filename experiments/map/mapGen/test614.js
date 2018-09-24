





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = {"":5e-324,"1.7027830767583656e+308":49,"1.0566046827762143e+308":",,`","5.433984993306405e+307":"z","1.7748759073424768e+308":""," N":82,"1.4212216872860754e+308":"","*k":""}
return a-b*c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = {"59":"i","L":893,"2.4985680302685294e+307":1.1290231263042736e+306,"":"qsl:,","1.250319064639212e+308":"rS;","?":""}
argument6[6] = ""
return a*b-c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = 9.818350164135513e+306
argument6[3] = false
return a-b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[714] = {"242":"","403":"I","595":"","":893,"1.9589105171427086e+307":7.946512972873407e+307,"C":8.733346341180668e+307,"7.972628877957063e+307":"","XM3":"K","6.26862469481884e+306":595,"'Y":1.4452461527691145e+308}
argument9[0] = "XE+)"
return a/b+c
};
var argument8 = false;
var argument9 = r_1;
var base_0 = ["_"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test614.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)