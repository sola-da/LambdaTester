





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = "_"
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][1] = 7.702227684025988e+307
base_1 = null
argument3[3.0481490052276395e+306] = {}
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = {}
argument4[1] = true
base_2['length'] = 1.9708722862618804e+307
return a/b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = 4.4190210908332607e+307
return a-b/c
};
var argument5 = true;
var argument6 = null;
var base_0 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|H","j",843,"L","7","11",1.7976931348623157e+308,"T",82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test90.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)