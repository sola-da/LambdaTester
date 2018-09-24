





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.7121211182125595e+308] = 126
argument3[1] = [783,714,1.7976931348623157e+308,618,893,213,1.7976931348623157e+308,126,157]
argument3[5.262931091360336e+307] = [-100,893,783,783]
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = 893
argument3[3] = {}
base_1 = 595
return a+b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3.377960715099946e+307] = {"4.1361977380540504e+307":"","9.399787486610522e+306":"r5;z"}
base_2[4][7] = 5.306965627289696e+307
argument4['c'] = {}
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[714] = false
argument5[1.1679954109349114e+308] = null
base_3[1][0] = null
return a*b+c
};
var argument5 = true;
var base_0 = ["y","w",5e-324,969,607]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","w",5e-324,969,607]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y","w",5e-324,969,607]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","w",5e-324,969,607]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test603.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)