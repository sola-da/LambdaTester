





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"49":25,"59":""," kEd":"3","}!":"","":"","7.065445933557627e+307":"n33-Z","S":1.5158369616371345e+308,"1.7976931348623157e+308":100}
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"0":"","49":823,"969":7.898987986952965e+307,"":"","c":"","Uc0d":3.7461300985629674e+307}
base_1[2] = {"25":7.086368104734425e+307,"655":9.175922697241083e+307,":C":"Tt","i":"","":"","8.97768001600169e+307":2.746181093833225e+306,"3.152833696685252e+307":"","YN":"Ck"}
base_1[0] = false
return a+b+c
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b*c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = ""
base_3[2][7] = {"242":"","705":"","":7.014152418378015e+307,"1.4649258127432996e+308":"","1.0993844901208948e+308":"","u":"n","L":"G","[ ^u":"Kb`9i"}
argument10[122] = null
return a+b+c
};
var base_0 = [-100,460,122,25,607,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,460,122,25,607,242]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,460,122,25,607,242]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,460,122,25,607,242]
var r_3= undefined
try {
r_3 = base_3.every(argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test51.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)