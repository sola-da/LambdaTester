





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = 1.68191503013118e+307
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = 607
argument3['f9zgt4n!ZJR]W'] = null
argument3[157] = 403
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = "$="
base_2['length'] = [843,59,82,969]
base_2 = [-1,595,893,783]
return a-b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5][0] = ""
return a*b+c
};
var argument5 = false;
var argument6 = true;
var base_0 = [",","g","6]R"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",","g","6]R"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",","g","6]R"]
var r_2= undefined
try {
r_2 = base_2.some(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",","g","6]R"]
var r_3= undefined
try {
r_3 = base_3.some(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/some/someGen/test378.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)