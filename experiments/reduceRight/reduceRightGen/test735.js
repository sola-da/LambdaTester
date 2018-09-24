





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][2] = [0,783,49,100,403,-1]
return a+b+c*d
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.738403780925446e+308] = "'2"
return a*b+c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = {"126":"JU","242":607,"w":1.1273951918637688e+308,"1.156948051058765e+308":1.505017246267501e+308,"1.20705893790691e+308":"#","":"s:"}
argument6[3.8120440085202614e+307] = true
argument7 = null
return a*b*c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['^N'] = {"595":1.3984472932754039e+308,"705":655,"Mg3B7j":1.4479047415466848e+308,"":"=S?3B","1.1096366359901752e+307":"p$o","k":"{","T^8":"","7.827818656902757e+307":"k%","F":843}
argument8[6] = {"25":"`","714":843,"":4.653953032424624e+307,"se":1.3437893374356598e+308,"9.576203933359992e+306":"","Z":1.4146518062337058e+308,"1.644068161243328e+308":"","ld}":1.3411280588579277e+308,"L":403,"DF":"H"}
return a/b+c-d
};
var argument7 = r_2;
var base_0 = ["`",843,213,"AQk-Dc",823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`",843,213,"AQk-Dc",823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`",843,213,"AQk-Dc",823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`",843,213,"AQk-Dc",823]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test735.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)