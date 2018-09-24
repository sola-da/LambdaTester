





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[714] = ["Yj","rv","4","$","0","S","9jk","-","C","`"]
base_0[3][4] = ["^","-","D","m","D","j","r8","e,pT=","P"]
return a*b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.208837311680636e+307] = {"783":126,"893":1.0924698210301318e+308,"3.214789391983184e+306":49,"y$5":"]DR","k":49,"9.574604533939764e+307":618,"I":"","H":25,"b=M":1.3274295668364632e+308}
argument4[1.6177106033227046e+308] = ["MI"]
return a-b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = 2.9596838327131855e+307
argument5[893] = [59,607,705,-100,122]
base_2[7] = {"126":"2","969":"","+P":"","6.176917832974348e+307":"ppwC","2:g":9.579905089800205e+307,"1.2504070037862482e+308":"*"}
return a/b*c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 9.321973499120645e+307
argument8[893] = 1.7670288625199807e+308
argument7[5] = null
return a-b+c
};
var argument7 = [-100,"&","Z"];
var base_0 = [460,82,655]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,82,655]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,82,655]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,82,655]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test532.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)