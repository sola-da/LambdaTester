





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = null
argument2[3.3156198695370476e+307] = ""
return a-b/c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"655":1.3999922570219864e+308,"6.40058667975858e+306":213,"-100":"p","":"`Z}W","q}I|":7.621331636621742e+307}
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"":2.6232624834343773e+307}
argument5[2] = false
return a+b/c
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = false
base_3[2][7] = false
argument9[6] = {"'":157,"1.7036137227615242e+308":"L","1.2212822301980507e+308":"DCP","T":"","2.274015888756575e+307":1.7516082563324754e+308,"o":460,"8.185460104886827e+307":893,"":627,"5.734220481526529e+307":1.0028522303675823e+308}
return a/b-c
};
var argument9 = null;
var base_0 = [242,59]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,59]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,59]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,59]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test499.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)