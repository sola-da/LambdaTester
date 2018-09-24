





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3][3] = ["Y","2","j","*F","Sk","I","3","F!s"]
base_0[1][3] = ":"
argument3[7.004668712060429e+307] = "8"
return a+b+c
};
var argument2 = {"100":460,"ocDl":1.3881685601891148e+308,"4P":"3","Z":5.316497641447669e+307,"=":3.038842169452053e+307,"":1.6739701291696447e+308,"vx":"","4.229481820374542e+307":4.642918864640885e+307};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[705] = null
argument6[7.004668712060429e+307] = {"705":2.2131253530875675e+307}
return a*b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['V'] = ["YKK","p2&","{b","]","IV","2c","u","=v","B"]
argument6['_W'] = false
argument7['n,5s@s'] = null
return a+b+c
};
var argument6 = "`=";
var argument7 = "|dU";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = false
base_3[5][1] = false
return a+b*c
};
var argument9 = false;
var argument10 = false;
var base_0 = ["z",595,-100,655,783,627,49]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z",595,-100,655,783,627,49]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z",595,-100,655,783,627,49]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z",595,-100,655,783,627,49]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test808.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)