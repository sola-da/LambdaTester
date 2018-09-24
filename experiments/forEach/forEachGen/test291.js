





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = ""
base_0[8] = ["K3","z;b","6","P","^"]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = {}
argument3[1.3130321063336282e+308] = {"0":"4","8":"s","242":6.140910689895567e+307,"783":"Q","Iq$E":"","9i,G`xV":"`","R":"m","w":"hs[","":6.760515685248437e+307,"1.0689775630670688e+308":"!"}
argument4 = [242,714,1.7976931348623157e+308]
return a+b/c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = null
argument7[1.4034744228995816e+308] = null
base_2[9] = 100
return a+b*c
};
var argument6 = null;
var argument7 = {"":"","$1":"","3)":969};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = ["2","Sq","yp","*","-","_"]
return a*b+c
};
var argument9 = true;
var argument10 = null;
var base_0 = [627,893,618,82,403,157,59,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,893,618,82,403,157,59,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,893,618,82,403,157,59,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,893,618,82,403,157,59,893]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test291.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)