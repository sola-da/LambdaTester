





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"100":157,"893":"","1.7976931348623157e+308":783,"6.283853451923128e+306":"m","":"%","Ii;{":""}
return a*b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = ["p|w","_"," Fa"]
return a+b-c*d
};
var argument6 = ["9F","z","Z","i"];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['18{'] = true
argument7[0] = null
return a*b+c+d
};
var argument8 = r_0;
var argument9 = null;
var argument10 = false;
var argument11 = 5.641883299768136e+307;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.1280896016417002e+307] = "6"
argument9[0] = {"242":5.709030336775066e+307,"403":"k7qp","843":"uo:o","(":655,"":"$4","c^0":627,"Dim":1.7976931348623157e+308,"T6S2":126}
argument9[0] = 403
return a*b+c-d
};
var base_0 = ["-(","$oE$"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-(","$oE$"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-(","$oE$"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-(","$oE$"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test702.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)