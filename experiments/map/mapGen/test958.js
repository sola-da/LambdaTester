





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = ""
base_0[1][7] = ""
base_0[0][0] = {"783":"","":627,"1.069570228250738e+308":2.8796100052173116e+307}
return a-b-c
};
var argument2 = [595,893,213,-1];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = null
argument4[1.268696794505825e+308] = true
argument5[6] = false
return a*b*c
};
var argument4 = false;
var argument5 = {"":"","#":714,"9.192282992780067e+307":157,"3.804387622672547e+307":"V"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = ["!Oz7"]
argument8['V'] = [-1,126,823,126,242,242,823,-100]
return a/b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = {"1.7306936440985312e+308":3.499062260075484e+306}
return a-b/c
};
var argument8 = r_1;
var base_0 = [-1,59,100,122,969,403,-1,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,59,100,122,969,403,-1,82]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,59,100,122,969,403,-1,82]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test958.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)