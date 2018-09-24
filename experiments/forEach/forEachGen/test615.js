





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = [823,213,122,403,627,783]
argument2[3] = 7.031944685758991e+307
argument3[59] = {"0":"","100":"","242":"b","3.463120228018981e+307":"","1.403670392655789e+308":"s","'":213,"5.95935388283553e+307":"]A","p":"","":"?"}
return a+b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[969] = {"705":"","S":"YL","xY":1.4881891342471841e+308,"j":"Wu ","9.653679337952414e+306":""}
argument3[7.92397107964922e+307] = [460,655,157,705,893,607,122,-100,403]
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = ""
base_2[3][1.3434821406183095e+308] = false
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][6] = [783,25,-100]
base_3[0][4] = 6.76134710785834e+307
return a*b/c
};
var argument6 = false;
var argument7 = null;
var base_0 = [-1,403,893,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,403,893,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,403,893,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,403,893,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test615.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)