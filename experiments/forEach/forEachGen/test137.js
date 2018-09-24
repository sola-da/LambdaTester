





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"627":-100,"":1.292721003134303e+308,"1.6247879077870919e+308":"3vmU"}
base_0[2] = true
base_0[0][1] = "Aq"
return a*b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = ["R","n;","O","JJ","2"]
base_1[7] = 9.851346930571794e+307
return a*b/c
};
var argument4 = null;
var argument5 = 607;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = ""
return a*b*c
};
var argument7 = true;
var argument8 = [1.7976931348623157e+308,460,"]","3Yj2O-M`qF"];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3.0481490052276395e+306] = {"a[":1.7254974477795615e+308,"D":627,"":1.2511337915758324e+308,"1.4446550868757907e+308":1.670870509128935e+308,"x":3.597843849061993e+307,"7.240019299149309e+307":"5","6.051960320228408e+307":1.595054039104276e+307,"r":823,"E":""}
return a-b/c
};
var base_0 = [460,655,"`",0,100,"j!"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,655,"`",0,100,"j!"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,655,"`",0,100,"j!"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,655,"`",0,100,"j!"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)