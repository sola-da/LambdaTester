





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][7] = "feJcP"
argument2[893] = null
return a/b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['T'] = {"627":"","":6.030568041471287e+307}
return a/b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[893] = [627,607,460,157,843]
return a/b/c
};
var argument5 = 25;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = ["7","G","{"]
return a-b/c
};
var argument7 = 122;
var base_0 = [823,823,-100,460,655,595,25,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,823,-100,460,655,595,25,82]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,823,-100,460,655,595,25,82]
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
require("fs").writeFileSync("./experiments/map/mapGen/test347.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)