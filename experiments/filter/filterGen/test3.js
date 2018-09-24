





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = [-1]
base_0[2] = "@z"
base_0['length'] = "e"
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ""
base_1[1] = {"1.7743104079673753e+308":1.7976931348623157e+308,";":"","":82,"1.7112633077306521e+308":"2"}
return a+b-c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = "P"
argument5 = {"126":1.514153753913608e+308,"157":"","607":"","893":1.4536617123292348e+308,"4.2973679676433444e+307":"GI","":"","f":1.4491847584408095e+307,"9.02032713536931e+307":1.4834103317200468e+308,"6.636041156642326e+307":"G"}
return a*b-c
};
var argument5 = {"403":"","595":1.1266870669512564e+308,"783":"","9.323435168156194e+307":7.530607368672627e+306,"4.3055675149882927e+307":1.3463009577694051e+308,"":8.143137626455915e+307,"9p":"!","1.2260543441987487e+308":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 82
argument7 = {"49":"|","1.366334416165349e+306":2.009102217549682e+307}
return a/b*c
};
var argument7 = r_0;
var argument8 = true;
var base_0 = [460,126,627,100,655,627,893,714]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,126,627,100,655,627,893,714]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,126,627,100,655,627,893,714]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,126,627,100,655,627,893,714]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test3.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)