





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.639664788900972e+307] = ["Y","2","j","*F","Sk","I","3","F!s"]
argument2[460] = ":"
argument2['7q('] = "8"
return a+b+c
};
var argument2 = {"100":460,"ocDl":1.3881685601891148e+308,"4P":"3","Z":5.316497641447669e+307,"=":3.038842169452053e+307,"":1.6739701291696447e+308,"vx":"","4.229481820374542e+307":4.642918864640885e+307};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2][783] = null
argument5['7q('] = {"705":2.2131253530875675e+307}
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = ["YKK","p2&","{b","]","IV","2c","u","=v","B"]
argument6[157] = false
argument7[1.3107131183454087e+308] = null
return a+b+c
};
var argument6 = "`=";
var argument7 = "|dU";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = false
argument9['am'] = false
return a+b*c
};
var argument9 = false;
var argument10 = false;
var base_0 = ["z",595,-100,655,783,627,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z",595,-100,655,783,627,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z",595,-100,655,783,627,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z",595,-100,655,783,627,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test810.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)