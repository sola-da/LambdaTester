





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2] = 969
base_0[1][4] = {"nAx":""}
return a-b*c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][4] = 3.388210857465576e+307
return a*b+c
};
var argument5 = r_1;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = false
base_2[5] = 1.7480558306958976e+308
return a/b+c
};
var argument8 = r_2;
var argument9 = 82;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = null
argument12[8] = ""
return a-b/c
};
var argument11 = r_1;
var argument12 = r_1;
var base_0 = [":P%Map%I","9= w:","mme","s"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":P%Map%I","9= w:","mme","s"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":P%Map%I","9= w:","mme","s"]
var r_2= undefined
try {
r_2 = base_2.every(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":P%Map%I","9= w:","mme","s"]
var r_3= undefined
try {
r_3 = base_3.every(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/every/everyGen/test596.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)