





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = 4.847608295226915e+307
argument2[4] = null
argument3[59] = 823
return a+b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = 3.2003788692162737e+307
return a*b+c
};
var argument4 = {"7":618,"49":627,"403":157,"Mk":"","&z":"","X1":1.4548884724461564e+308};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['1SHF1'] = true
argument7[5] = {"5":-100,"122":"+","9.633494950055358e+307":0,"1.7976931348623157e+308":157,"":"b[i@[","1.7703249414720895e+308":1.582013166101265e+308,"#3n-b":"","9.5750575311214e+307":"","1.2440321534869563e+308":5e-324,"b#":"IaS"}
base_2[1][1] = 5.944047617387285e+307
return a*b/c
};
var argument6 = 82;
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['U+WQ'] = ""
base_3[5] = {}
argument10 = {"157":"","595":"X","":-100,"6.241632464704415e+307":"","2.894208415849041e+307":3.4354135409058053e+307,"T":"","I|LI":1.4976364306000756e+308,"{M":"cw","1.0109569165315489e+307":""}
return a-b-c
};
var argument9 = true;
var base_0 = ["[7Az",595,0,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[7Az",595,0,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[7Az",595,0,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[7Az",595,0,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test534.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)