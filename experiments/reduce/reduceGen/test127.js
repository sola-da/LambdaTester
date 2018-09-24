





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = [618,0,705,"0","E"]
argument3[0] = {"783":969,"Jn":1.6136163168131227e+308,"":"T","1.2315753469081407e+308":"U","#":8.457843870507349e+307}
base_0[0] = false
return a-b*c/d
};
var argument2 = null;
var argument3 = r_0;
var argument4 = false;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[627] = null
base_1[8] = "S"
base_1[9] = true
return a-b*c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = ""
base_2['length'] = {}
return a*b*c+d
};
var argument8 = null;
var argument9 = true;
var argument10 = r_0;
var argument11 = r_3;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = [0,714,403,714,714,595,1.7976931348623157e+308]
return a+b/c*d
};
var base_0 = ["J","Lt",59,"C",969,"#",705]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["J","Lt",59,"C",969,"#",705]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["J","Lt",59,"C",969,"#",705]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["J","Lt",59,"C",969,"#",705]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test127.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)