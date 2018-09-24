





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][4] = null
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460] = false
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = null
base_2[9] = {"460":"-","893":1.3562076857143314e+308,"^":"","":""}
return a+b/c
};
var argument4 = {"213":"","242":242,"893":"2","Ab":"j3K","4.2997877082117243e+307":"","e":-100,"":"","1.0546170321551339e+308":5.292066288145517e+307,"4.2092849909803526e+307":2.8689259101141686e+307};
var argument5 = 1.3595336953924691e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.377960715099946e+307] = ["n","@(_ije","*#","9be","C%8"]
argument6 = ""
argument8[4.953791384496108e+307] = [843,242,0,823,25,242]
return a/b/c
};
var base_0 = [242,1.7976931348623157e+308,893,969,242,157,0]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,1.7976931348623157e+308,893,969,242,157,0]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,1.7976931348623157e+308,893,969,242,157,0]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,1.7976931348623157e+308,893,969,242,157,0]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test206.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)