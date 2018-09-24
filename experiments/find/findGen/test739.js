





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
argument3[5] = "JU"
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
base_1 = true
argument2[5] = null
return a*b/c
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[25] = false
base_2[0][2] = 823
base_2[6][4] = {"595":1.3984472932754039e+308,"705":655,"Mg3B7j":1.4479047415466848e+308,"":"=S?3B","1.1096366359901752e+307":"p$o","k":"{","T^8":"","7.827818656902757e+307":"k%","F":843}
return a/b+c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = "0"
argument9[783] = 607
argument9[5] = [213,49,969,893,-1,0]
return a/b-c
};
var argument8 = "Z";
var base_0 = [705,157,893,0,242,627,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,157,893,0,242,627,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,157,893,0,242,627,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,157,893,0,242,627,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test739.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)