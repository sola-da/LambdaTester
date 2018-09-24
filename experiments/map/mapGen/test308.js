





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = 100
argument2[0] = "m[$+{Y-"
argument2[1] = ""
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[49] = ["F","Qa","%p6MM",82]
base_1[0][1.4677087964888306e+308] = null
base_1[3] = {"":"","69!y":1.663833015683432e+308,"[":"","1.0960672535087112e+308":213}
return a/b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][3] = null
argument4[4] = true
return a+b-c
};
var argument4 = r_2;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = {"969":"","":460,"4.136096813160334e+307":"","1.0663327992037551e+308":"u","-100":4.551003452793983e+306,"1.3691035447286266e+308":607}
base_3[3][3] = {"3":"$u","25":"-","705":"J","1.359136872727139e+308":893,":S":"%;","18{":655,"":"","-100":5.091880966048685e+307}
return a+b-c
};
var argument6 = 1.5286608293205034e+308;
var base_0 = [49,59,122,460,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,122,460,157]
var r_1= undefined
try {
r_1 = base_1.map(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,122,460,157]
var r_2= undefined
try {
r_2 = base_2.map(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,122,460,157]
var r_3= undefined
try {
r_3 = base_3.map(argument5,argument6)
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
require("fs").writeFileSync("./experiments/map/mapGen/test308.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)