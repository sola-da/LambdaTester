





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
return a*b+c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = 157
base_1[3] = "x"
argument4 = false
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.3599216339661573e+308] = [25,49,59,"|J",59,595,82,655,"]p"]
base_2[0][2] = ""
return a-b/c
};
var argument6 = "";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = {"v":",`Un","1.6956082207297743e+308":"lh","UU":-1,"2.955397749835582e+307":"$5W","e":"q*"}
base_3[0][6] = ""
base_3[2] = true
return a-b+c
};
var base_0 = [-100,213,59,82,1.7976931348623157e+308,823,82]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,213,59,82,1.7976931348623157e+308,823,82]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,213,59,82,1.7976931348623157e+308,823,82]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,213,59,82,1.7976931348623157e+308,823,82]
var r_3= undefined
try {
r_3 = base_3.every(argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test304.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)