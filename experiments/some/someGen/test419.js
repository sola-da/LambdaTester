





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['f'] = "6"
base_0[2][5] = null
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['f!BO'] = null
argument4[2] = 4.15039003831499e+307
return a+b*c
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = [157,100,969]
argument7 = {"157":2.8293827738603166e+307,"655":"","":"3lJ","Z+I":9.096647568490514e+307,"d":"","C*E":""}
return a*b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = [242,714,0,705,49,59,1.7976931348623157e+308]
argument7[4] = 595
base_3[1] = 1.5463033657306687e+308
return a/b*c
};
var argument7 = {"1":-100,"100":705,"1.4941420913680117e+308":3.018438590212804e+307,"m@LS":618,"-100":"","":59,"RM{":4.322137494485838e+307,"1.6193494939289956e+308":595,"<,":1.1533627603519955e+308,"1.323978735126642e+308":1.5095523775324306e+308};
var base_0 = [893,"*5",-100,969]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"*5",-100,969]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"*5",-100,969]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"*5",-100,969]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test419.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)