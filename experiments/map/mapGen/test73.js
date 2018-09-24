





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ["e=","0(","o&"]
return a/b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][7] = null
return a-b*c
};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"213":627,"N+":"","":823,"3)":9.397381740384988e+307,"I":"r"}
argument6[3] = null
argument6[2] = [460,242]
return a+b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"1":"R?","100":"f,","893":"","H!`":6.554110101001987e+307,"1.3029972395316486e+308":"","4.757529607948014e+307":1.410569720575278e+308,"v:iY ":"","":1.261529410301864e+308,"1.4244318594815474e+308":"@3","-100":100}
argument7[5] = null
base_3[3][2] = null
return a*b*c
};
var argument7 = r_3;
var base_0 = ["cvu#","Mk%","y(","?","q{"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["cvu#","Mk%","y(","?","q{"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["cvu#","Mk%","y(","?","q{"]
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
require("fs").writeFileSync("./experiments/map/mapGen/test73.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)