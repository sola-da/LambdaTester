





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
base_0[1][2] = {"82":"Mz","1.277419659927398e+308":"uL","1.2585934787680301e+308":122,"":"oL9","d":59,"6.9453331124140734e+305":893,"p":"%Z"}
argument2[403] = ""
return a+b*c
};
var argument2 = {"G2":"'","":783,"3.462967293930506e+307":"","W)":595,"exu":"","1.2199143612541599e+308":"","1.685816526105524e+308":6.235255050086651e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][7] = ":U#"
return a+b/c
};
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = 7.653252076141235e+307
return a-b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = "I@lt"
argument7[122] = null
argument7[3] = true
return a+b/c
};
var argument7 = 893;
var argument8 = r_3;
var base_0 = [122,242,49,59,460,25,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,242,49,59,460,25,969]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,242,49,59,460,25,969]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,242,49,59,460,25,969]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test429.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)