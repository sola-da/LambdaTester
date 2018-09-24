





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = true
base_0[8] = 1.2668368623131103e+308
return a*b*c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"157":403,"242":"D","783":893,"":6.032330992226972e+307,"v":1.7976931348623157e+308,"`":"","Etdfp":59,"1.605833651848411e+308":"Q*Z!;"}
return a+b+c
};
var argument5 = [893,618,5e-324,-100,5e-324,157];
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = {"25":-1,"":"0","p":"",";":""}
base_2[1] = {"242":"","460":"A","714":"","3V":"m","1.5483290947138297e+308":4.88289279591275e+307,"":783}
return a/b+c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = null
argument10[5] = null
return a*b/c
};
var base_0 = ["V","H","J`","$",">m<+W","sHa","k"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","H","J`","$",">m<+W","sHa","k"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","H","J`","$",">m<+W","sHa","k"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","H","J`","$",">m<+W","sHa","k"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test646.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)