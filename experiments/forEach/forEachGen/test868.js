





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['D'] = {"126":1.3423536890448083e+308,"242":627,"":2.0957204207069778e+306,"1.738729396819041e+308":"8","1.1594546511684308e+308":1.3648325312972869e+308}
argument2[0] = [-100,403,126,242,969]
base_0[3][0] = true
return a/b*c
};
var argument2 = r_0;
var argument3 = {"":"GHJ","4.2054530717808106e+307":714};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[969] = 1.2458497663277744e+308
argument5[6] = [969,122,783,705,618,49,607,893]
base_1[7] = false
return a+b*c
};
var argument5 = r_0;
var argument6 = r_0;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['wIs'] = 893
argument8[1.2421645642809447e+308] = true
return a+b+c
};
var argument8 = false;
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = null
argument11[126] = 1.7789328932009287e+308
argument11['a'] = [122,783,969,595,607,627]
return a+b*c
};
var argument11 = ["x","[#"];
var argument12 = false;
var base_0 = ["c0","^"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["c0","^"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["c0","^"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["c0","^"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test868.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)