





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = 59
argument3 = null
return a*b*c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = false
base_1[0] = null
argument4[6] = 1.995381890509411e+307
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {"655":5.513790239932847e+307,"1.6818761753542846e+307":"","L4":5.717271684236853e+307,"2.994369492361557e+306":893,"-1":"","A":1.7976931348623157e+308,"":2.1687434807895552e+307}
argument5[2] = {"0":-1,"242":655,"":595,"2.702634589961885e+307":1.7713991511018176e+308,"u<":"","1.2290899610830929e+308":"g","-1":"Gr","3.068281371054896e+307":"["}
base_2[2] = {"100":823,"460":-1,"U":"^","":"v|","i":4.95615371717421e+307,"7.076248953686722e+307":6.332052003792544e+307,"[":""}
return a+b/c
};
var argument5 = [242,705,-100,59,100,1.7976931348623157e+308,403,823,595];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[122] = true
return a*b-c
};
var base_0 = ["V","gZ",1.7976931348623157e+308,655,59,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","gZ",1.7976931348623157e+308,655,59,969]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","gZ",1.7976931348623157e+308,655,59,969]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","gZ",1.7976931348623157e+308,655,59,969]
var r_3= undefined
try {
r_3 = base_3.every(argument6)
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
require("fs").writeFileSync("./experiments/every/everyGen/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)