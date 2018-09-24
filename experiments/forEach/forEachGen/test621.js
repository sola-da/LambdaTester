





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = {"969":-1,"":893,"1.4371470609846722e+308":"","1.058559812764694e+308":82,"d":100,"x0":242,"]":""}
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][823] = null
base_1[1][2] = {"7":"H","893":"j","":126,"<":403,"MqK":"D","2.3197015928780473e+307":"=","^":""}
return a+b+c
};
var argument3 = false;
var argument4 = "";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[49] = null
base_2[2][8.05235215815219e+307] = null
argument6[4] = {"82":"","242":"","1.7612578808527325e+308":49}
return a-b+c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][4] = [242,213,403,460,823,595,100,969,213]
argument8[7] = null
return a+b*c
};
var base_0 = ["2","K","=","n","N","!","r","u*K3uf",";*w"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","K","=","n","N","!","r","u*K3uf",";*w"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","K","=","n","N","!","r","u*K3uf",";*w"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","K","=","n","N","!","r","u*K3uf",";*w"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test621.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)