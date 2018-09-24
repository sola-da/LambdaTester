





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
base_0[3][2] = "-t<{sP"
return a*b/c
};
var argument2 = 607;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1.4677087964888306e+308] = ""
argument4 = "D"
return a+b-c
};
var argument4 = true;
var argument5 = {"3":"V`h*4D","7.998594720903437e+307":3.718091250218697e+306,"':l":"i","js":"9","7GF%":1.605412757276924e+308,"T":82,"":5.764489555008803e+307,"1.795042430955286e+308":"","X":607};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ["K",627,607,"*",25]
base_2[3][1] = {"126":1.0329826830282267e+306,"607":122,"":"","-1":"","4i!":6.275192148174133e+307,"+":2.1560351156642423e+307}
return a*b*c
};
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1]['d'] = false
argument9[2] = 3.398302943970551e+307
return a*b+c
};
var argument9 = null;
var base_0 = [403,82,5e-324,655,213,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,82,5e-324,655,213,242]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,82,5e-324,655,213,242]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,82,5e-324,655,213,242]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test211.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)