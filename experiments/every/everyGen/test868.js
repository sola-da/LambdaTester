





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = {"595":"","843":"","969":"","J<":1.7976931348623157e+308,"1.5670182081867659e+308":6.540727631092917e+307,"Z":5.096386750268163e+307}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][6] = {"126":25,"705":655,"893":"","":"C_","!X^":"_5",";C":"","+":"","1.0795288035259868e+308":82,"1.7222318046216104e+307":""}
base_1[1][2] = {"":""}
return a+b*c
};
var argument3 = r_1;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = [49,-1,0,823,126]
base_2['length'] = {"":823,"1.6300313595245753e+308":5e-324,"l%":100}
argument5[783] = true
return a/b+c
};
var argument5 = ["-eHC","at&","R","m",":9u","V","n0"];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.6706143966770798e+306] = ""
argument7[0] = null
argument7['g]'] = null
return a/b/c
};
var argument7 = [403,893,595,655,5e-324];
var base_0 = ["g"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["g"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["g"]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["g"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test868.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)