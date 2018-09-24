





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4.953791384496108e+307] = ""
return a*b-c
};
var argument2 = ["F"];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4.953791384496108e+307] = "lF!s"
argument4[0] = ":"
argument4[8] = "8"
return a+b-c
};
var argument4 = {"100":460,"ocDl":1.3881685601891148e+308,"4P":"3","Z":5.316497641447669e+307,"=":3.038842169452053e+307,"":1.6739701291696447e+308,"vx":"","4.229481820374542e+307":4.642918864640885e+307};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['!j'] = null
argument8[893] = {"705":2.2131253530875675e+307}
return a*b+c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[-1] = ["YKK","p2&","{b","]","IV","2c","u","=v","B"]
argument7 = false
argument8['b'] = null
return a+b+c
};
var argument8 = "`=";
var argument9 = "|dU";
var base_0 = [242,-1,100,627,595,893,59,-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-1,100,627,595,893,59,-1]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-1,100,627,595,893,59,-1]
var r_2= undefined
try {
r_2 = base_2.find(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-1,100,627,595,893,59,-1]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test793.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)