





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = [1.7976931348623157e+308,460,242,783]
base_0[1] = [969,242,-100,618,242,49,627]
argument2[3.3156198695370476e+307] = "28'"
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = null
return a/b+c
};
var argument3 = "b";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = {"122":126,",2":"B","r":"","1.236363983247279e+306":8.113132998942482e+307,"3.5457709524689066e+307":"&"}
return a-b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[403] = [618,100,"]",100,893,"fK[Fr",49,705]
base_3[0] = 1.6633662671843686e+308
argument6[1.6706143966770798e+306] = {"25":403,"49":607,"59":618,"1.3446851858726681e+308":1.7807987357252272e+308,"1.5466550633854674e+308":"","":8.308763673858985e+306}
return a-b/c
};
var argument6 = null;
var argument7 = null;
var base_0 = ["k","A","B","yKCTeVz"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["k","A","B","yKCTeVz"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["k","A","B","yKCTeVz"]
var r_2= undefined
try {
r_2 = base_2.every(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["k","A","B","yKCTeVz"]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test580.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)