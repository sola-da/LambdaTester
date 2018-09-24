





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = ["j","fw",714,-100,0]
base_0[0][4] = null
return a-b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"242":"","403":"","893":"","969":"","":"no6 ","M^":655,"1.0156648733444519e+308":"2","P":714}
argument4[6] = {"":"J","b6F":"","1.1269507788457876e+308":"","V":1.3805680913927273e+308}
base_1[7] = 1.2261380797748505e+308
return a+b*c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
return a/b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = {"618":"C","893":"","6.356595463112377e+307":"","":"","1.0395458608362796e+308":"","L":1.5715559625577149e+307}
return a/b/c
};
var argument7 = false;
var base_0 = [655,49,893,618,59,783,607,100,714,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,49,893,618,59,783,607,100,714,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,49,893,618,59,783,607,100,714,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,49,893,618,59,783,607,100,714,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test89.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)