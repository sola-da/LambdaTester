





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2]['f'] = true
argument3 = ["-;","M","P4","5p`","t","O","`","RUa"]
base_0[3][2][5] = "O^OE"
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = true
base_1 = ""
argument3[1.1881593224845412e+308] = {"100":1.6259982229346454e+308,"9.69711123808071e+307":1.4510572645636968e+308,"1.506284327428246e+307":1.1644883427141251e+308,"":1.7976931348623157e+308}
return a-b*c
};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1.4677087964888306e+308] = false
base_2[6][3] = true
base_2['length'] = {"82":705,"893":460,"7.396990925677992e+306":"n0H","":1.1552135350199979e+308}
return a+b/c
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
base_3[9] = ["T","6","Y`"]
return a*b+c
};
var argument8 = null;
var base_0 = ["_$:Ssf",714,"d!",618,"7r8","_",100,"%xw",49,"|"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["_$:Ssf",714,"d!",618,"7r8","_",100,"%xw",49,"|"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["_$:Ssf",714,"d!",618,"7r8","_",100,"%xw",49,"|"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["_$:Ssf",714,"d!",618,"7r8","_",100,"%xw",49,"|"]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test518.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)