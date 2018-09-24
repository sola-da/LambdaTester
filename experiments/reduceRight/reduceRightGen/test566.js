





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [969,618,403,213,126,893,-1,823]
return a/b*c*d
};
var argument2 = {"122":607,"9#$5f7Z,":"]CO","":"","z":"`r4"};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = 3.952087976880908e+307
base_1[0][0] = 25
argument6[2] = null
return a*b*c-d
};
var argument5 = [122,":G","x","9M",49,"[oPPTJ",823];
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = {"242":",zS","655":82,"1.2175273707365169e+308":49,"":1.7469389638233738e+308,"1.0750765928299672e+308":59,"1.0934752738584236e+308":403,"8.621265013455e+307":8.782625892393215e+307,"4.880445164064345e+307":"","1.601378298187788e+308":""}
base_2[0][0] = [0,242,213,655]
return a*b*c*d
};
var argument8 = {"213":213,"242":25,"705":4.486644295847683e+307,"714":1.0463121167466199e+308,"":1.398947151296664e+308,"1.6706143966770798e+306":"c"};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2.819898637310108e+307] = null
argument11[5] = {"655":"","WT":"q","":"&X","7.928422522139007e+307":460,"i":"","H)u-Q+":1.5617021763148979e+307}
return a+b-c*d
};
var argument10 = false;
var argument11 = false;
var base_0 = [655,618,403,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,618,403,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,618,403,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,618,403,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test566.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)