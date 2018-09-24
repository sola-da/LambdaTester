





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"618":"JWR^","s^wSIk":0,"1.306079428120393e+308":59,"":59,"2Y":""}
argument3['UU'] = "V"
return a*b+c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['w'] = ["v","1","i","]",">dSf","&RA-","W","3","B`1"]
return a+b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = false
base_2 = {"242":1.4776554213901693e+308,"1.452334683821796e+308":""}
argument6['v'] = ""
return a-b/c-d
};
var argument6 = ["i*","8","F"];
var argument7 = 1.449184324443383e+308;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 1.6777106363554638e+307
argument9['^N'] = [783,122,122,618,157]
argument8[1] = 705
return a/b+c+d
};
var argument9 = false;
var argument10 = null;
var base_0 = ["M",460,"O","I",",7","T","$xk","D#"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["M",460,"O","I",",7","T","$xk","D#"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["M",460,"O","I",",7","T","$xk","D#"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["M",460,"O","I",",7","T","$xk","D#"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test335.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)