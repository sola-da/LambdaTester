





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = false
base_0[3][1] = 403
return a*b+c
};
var argument2 = [843,0,0];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[714] = {"1.336409406776696e+308":1.733161054803479e+308,"":893,"v[z":0,"1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_"}
return a/b+c
};
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = [25,823,"ULi","u_oEvRS",">",714]
argument6[4] = {"157":59,"":1.4632514111826277e+308,"r":1.101506737181496e+308,"3.238057537021918e+307":":i","5.953013880749704e+307":783,"m":1.3490136948940264e+308,"1.7869479751714498e+308":714}
argument7[157] = [59,100,-100,823,242,655]
return a*b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
return a+b*c
};
var argument7 = false;
var argument8 = null;
var base_0 = ["cV","69o","n","G","4x","7","VE","0"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["cV","69o","n","G","4x","7","VE","0"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["cV","69o","n","G","4x","7","VE","0"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)