





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = null
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = 1.7364971499606863e+308
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.7261030733891165e+308] = null
return a-b/c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = 1.1136290511487343e+308
base_3[9] = ""
base_3[0][6] = 618
return a/b+c
};
var argument7 = "";
var base_0 = ["v&","pY",122,714]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v&","pY",122,714]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v&","pY",122,714]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v&","pY",122,714]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test655.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)