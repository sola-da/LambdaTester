





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['_W'] = true
argument3 = {"100":893,"714":"5","4.3827238711509515e+307":1.2652230436260715e+308,"":893}
argument2['f'] = 25
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"5.531751439231227e+307":49,"":""}
base_1[1][0] = "_"
argument3 = 1.7738804536978704e+307
return a/b-c
};
var argument3 = {"460":2.1210291335718777e+307,"969":7.81157678616578e+307,"tosU":"","0+DI":"","":3.3301347748057037e+307,"R":"HOX","1.7976931348623157e+308":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[122] = [627,49,126,59,714]
base_2[1] = {"705":1.5649461157878665e+308,"U":"","":":","Z":3.374378380047547e+307,"1.010826875121943e+308":"l"}
argument5[157] = false
return a-b*c
};
var argument5 = 1.6750429071724315e+308;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"a":1.2908498570980348e+308,"z+7":1.414936744240706e+308}
argument8[2] = {"403":49,"618":"","8.381360142835393e+307":"","1.1924850842960547e+308":"","L":1.0436754198034421e+308,"9.78619046815181e+307":0,"@{":49}
return a-b/c
};
var argument7 = r_1;
var argument8 = r_1;
var base_0 = [893,655,122,607,-100,783,-100,1.7976931348623157e+308,100]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,655,122,607,-100,783,-100,1.7976931348623157e+308,100]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,655,122,607,-100,783,-100,1.7976931348623157e+308,100]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,655,122,607,-100,783,-100,1.7976931348623157e+308,100]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test467.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)