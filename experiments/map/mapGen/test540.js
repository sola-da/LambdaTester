





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.6177106033227046e+308] = null
base_0[7][2] = [-1,627,714,49,714]
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {"403":"d","705":"Ga<","k":6.837584749450906e+306,"5.465249648727583e+307":7.82970919205065e+307,"J(1":7.838815082105562e+307,"":1.7368174697975617e+308,"+":5.026476990898031e+307,"2.5163546701048096e+307":"W2iT","1.634136750364939e+308":"","6V":969}
argument2 = "2+5"
return a+b/c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['A'] = true
argument5[618] = {"126":"","893":"","":1.7961292043804947e+308,"1.6822010311690152e+308":"j","l":"","2.0317383947514113e+307":"("}
argument5[9.869573703797622e+307] = {"m":""}
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = ""
argument7 = true
return a*b*c
};
var base_0 = [157,403,157,25,655,843]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,403,157,25,655,843]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,403,157,25,655,843]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapGen/test540.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)