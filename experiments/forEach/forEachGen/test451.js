





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3][0] = {"":1.2740151879366586e+308,"5.33547035003876e+307":3.0184436753561787e+307,"5e-324":1.3374165334787537e+308,"%>u":-1,"ur":"T","2.0903311703701102e+307":655}
base_0[0][823] = [627,5e-324,0,1.7976931348623157e+308,"UK[*","hf2u","@)"]
return a*b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b-c
};
var argument4 = "+b";
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['am'] = true
argument8[1.4034744228995816e+308] = -1
return a+b*c
};
var argument7 = null;
var argument8 = r_1;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"1.3707205179359015e+307":"","1.5634300416448076e+308":595,"":"!e","1.206926013791214e+308":823}
return a-b*c
};
var argument10 = r_1;
var base_0 = ["{","H","y",")","bc","-","Z","q","4#"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{","H","y",")","bc","-","Z","q","4#"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{","H","y",")","bc","-","Z","q","4#"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{","H","y",")","bc","-","Z","q","4#"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test451.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)