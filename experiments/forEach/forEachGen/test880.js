





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = null
argument2[5] = 213
argument2[6] = false
return a-b*c
};
var argument2 = {"49":1.0854728576369651e+308,"595":"","655":""};
var argument3 = [0,1.7976931348623157e+308,-100];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = "_#"
argument6['n,5s@s'] = [655,59,783,59,-100,213,403,595,893]
return a*b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = "3"
argument7[59] = false
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = ""
argument7['$*I'] = true
return a/b*c
};
var argument7 = {"893":1.738881341767072e+308,"c":1.3639344467692188e+308,"":122,"^BB":1.642593263336158e+308,"1.251094030308969e+308":"","-1":"","vxp]":969};
var base_0 = [655,705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,705]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test880.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)