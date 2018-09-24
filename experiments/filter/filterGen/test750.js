





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = null
argument3[4] = [823,618,607,843,-100,82,969]
argument2['h'] = null
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = [126,893]
argument3[4.224481734419934e+307] = 8.13800339697649e+307
base_1[3][0] = "X^2i$"
return a-b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = ""
base_2[1] = null
argument4['wIs'] = [714,100,893]
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = ""
argument5[-100] = false
argument5[3] = {"59":"","h":"`","":9.68002389899615e+307,"1.5752429501113253e+307":"v","<":"","1.4883576294512946e+308":5e-324}
return a-b/c
};
var argument5 = {"100":"9N","126":460,"618":"A","":595,"1.3161800488686953e+308":157,"|":0};
var argument6 = "";
var base_0 = [627,0,595,0,0,213,122,714,460]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,0,595,0,0,213,122,714,460]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,0,595,0,0,213,122,714,460]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,0,595,0,0,213,122,714,460]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test750.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)