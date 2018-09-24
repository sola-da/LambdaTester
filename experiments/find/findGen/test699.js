





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][4] = [705,714,705,25]
argument3[969] = ""
return a-b-c
};
var argument2 = 595;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = false
argument5[3] = {"893":1.7068091684123909e+308,"8.158844894513094e+307":460,"9.410557625386876e+307":"{8","G":";m","N|,":1.7381647991824007e+308,"1.7976931348623157e+308":714,"1.0409699276792175e+308":"V","":"3p"}
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[126] = 1.552144371438522e+308
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.0500354979187844e+308] = {"100":0,"":9.811869359215277e+307,"k":"Hx","AC#9":3.907247334770345e+307,"5.062225974852547e+307":"J"}
argument5[3.377960715099946e+307] = null
argument7['LK'] = true
return a+b+c
};
var argument6 = r_3;
var base_0 = ["%",823,"0+41>","RO",100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%",823,"0+41>","RO",100]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%",823,"0+41>","RO",100]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%",823,"0+41>","RO",100]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test699.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)