





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = ""
base_0['length'] = {"":"rrz","A{":""}
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = true
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = [")n",">",1.7976931348623157e+308,714]
base_2[0][4] = true
argument4[0] = {"25":49,"893":-100,"&":242,"N":"","1.0211945490120646e+308":"","":"","7.170862608483917e+306":2.646597451121031e+307,"2.9169930100618026e+307":4.928874321213157e+307,"5.826085024302022e+307":""}
return a-b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2][783] = null
base_3[8] = false
base_3[3] = [893,893,-1]
return a/b*c
};
var argument5 = true;
var base_0 = [403,213,1.7976931348623157e+308,213,893,5e-324,403,100,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,213,1.7976931348623157e+308,213,893,5e-324,403,100,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,213,1.7976931348623157e+308,213,893,5e-324,403,100,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,213,1.7976931348623157e+308,213,893,5e-324,403,100,655]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test175.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)