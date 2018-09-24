





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['ns'] = "5'{"
argument2['D'] = [-100,843,893,893,783,5e-324,823,1.7976931348623157e+308]
return a*b+c
};
var argument2 = "";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['ns'] = "w"
argument4[2] = ["$T","{U","u",">7x","D","8t","fJc"]
argument4['U+WQ'] = [1.7976931348623157e+308,843]
return a+b+c
};
var argument4 = 4.2757966321214363e+307;
var argument5 = {"126":"","823":"a!5","843":"","":403,"L#":126};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = "b1"
return a/b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = [627,1.7976931348623157e+308]
argument7[7.92397107964922e+307] = 627
argument8[969] = {"7.109859638926596e+307":"6<","1.6041171296949653e+308":1.1228700221114104e+308,"1.393485901174053e+308":893,"":"","s:":8.675887412861479e+307,"{y":1.578368129938007e+308,"Z":3.9651670919937627e+307}
return a*b-c
};
var argument8 = false;
var base_0 = ["uYL",607,"0","A}t"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["uYL",607,"0","A}t"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["uYL",607,"0","A}t"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["uYL",607,"0","A}t"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test755.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)