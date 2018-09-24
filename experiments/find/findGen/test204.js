





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = true
argument3[1] = [655,"%q",705,705,"-",25,"Q"]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = [82,714,618,705,242]
base_1[9] = null
base_1[1][7] = "-t<{sP"
return a+b*c
};
var argument3 = 607;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8.748669805137695e+307] = ""
base_2[1] = "D"
return a+b-c
};
var argument5 = true;
var argument6 = {"3":"V`h*4D","7.998594720903437e+307":3.718091250218697e+306,"':l":"i","js":"9","7GF%":1.605412757276924e+308,"T":82,"":5.764489555008803e+307,"1.795042430955286e+308":"","X":607};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = ["K",627,607,"*",25]
argument9[3] = {"126":1.0329826830282267e+306,"607":122,"":"","-1":"","4i!":6.275192148174133e+307,"+":2.1560351156642423e+307}
return a*b*c
};
var argument8 = r_2;
var base_0 = [25,59,0,242,460,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,59,0,242,460,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,59,0,242,460,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,59,0,242,460,-100]
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
require("fs").writeFileSync("./experiments/find/findGen/test204.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)