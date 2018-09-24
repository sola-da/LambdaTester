





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['io'] = true
return a/b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = ""
argument4[6] = null
argument4[6.447566193969e+307] = 595
return a+b-c
};
var argument4 = [213,403,618,"c","(t",-100,122,705,82];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.3156198695370476e+307] = false
base_2[1][6] = true
argument6[3] = ["Hbmb",242,126]
return a+b/c
};
var argument6 = 705;
var argument7 = 1.5349908915690656e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[122] = null
base_3[4][1.5144566325729397e+308] = 1.0323229526010106e+308
return a*b-c
};
var argument9 = {"0":"})","122":1.1279234059670967e+307,"157":"","&":")c ","1.2314794363761327e+308":"","2.014233324008288e+307":1.4154068487039647e+308};
var argument10 = 7.519676381888748e+307;
var base_0 = [705,627,1.7976931348623157e+308,-1,242]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,627,1.7976931348623157e+308,-1,242]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,627,1.7976931348623157e+308,-1,242]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,627,1.7976931348623157e+308,-1,242]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test976.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)