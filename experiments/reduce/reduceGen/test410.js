





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = true
argument3[595] = ["Rl","e","}","c","]","#","C","]h","Z"]
argument1 = true
return a+b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][0] = {"213":"","1.197288369986069e+308":"UNl","6.214446582496663e+307":""}
return a/b-c*d
};
var argument6 = null;
var argument7 = [823,82,49,705];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[595] = {"0":403,"618":1.4221721035511214e+308,"":"","4.759974238319134e+307":607,"3.7998029716183336e+307":1.2605499321186522e+308,"3.9941254454980996e+307":"","1.0066029503455368e+308":25,"1.8359753464849598e+307":"("}
argument8['s'] = false
argument8[893] = false
return a+b*c*d
};
var argument9 = {};
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[3] = ["M","!","q","tN","4","M2:n","`c"]
argument12[25] = [126,122,-1,403,100,-100,0,-100]
base_3[1][3] = 8.194495303941456e+307
return a*b+c+d
};
var base_0 = [893,242,607,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,242,607,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,242,607,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,242,607,213]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)