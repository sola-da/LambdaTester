





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = false
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[122] = 9.183960819575299e+307
argument4[6] = [655,823,1.7976931348623157e+308,823,627,213,595,627,627]
base_1[1][2] = null
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"655":618,"":"x#","5.3843701998173945e+306":242}
argument4[0] = 1.2806964631186874e+308
return a-b-c
};
var argument4 = r_2;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[122] = null
return a/b*c
};
var base_0 = [122,714,714,607,82,-100,82,49,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,714,714,607,82,-100,82,49,714]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,714,714,607,82,-100,82,49,714]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,714,714,607,82,-100,82,49,714]
var r_3= undefined
try {
r_3 = base_3.every(argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test993.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)