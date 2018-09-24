





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = "I"
base_0[6] = [242,705,1.7976931348623157e+308]
return a*b+c
};
var argument2 = 1.4723336623442878e+308;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['3Tpj5'] = null
argument5[607] = null
return a-b/c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][3.5329845145600404e+307] = [0,460,-1,"Zh","S","y^("]
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.7173047913506838e+308] = [627,25,893,595,705]
argument8[1.0546776681946723e+308] = {"783":4.1569468048436797e+307,"1kZ":969,"1.3586360497419151e+308":59,"9.750563610343018e+307":607,"":"vv"}
base_3[3][2][6] = true
return a-b-c
};
var argument7 = {"157":"","607":"Q","2.9452731129682657e+307":"W3","y":"","i!,6y":"","4.496738909644872e+307":""};
var argument8 = null;
var base_0 = ["|","::",595,607,157,25,"@","b",-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","::",595,607,157,25,"@","b",-100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","::",595,607,157,25,"@","b",-100]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test934.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)