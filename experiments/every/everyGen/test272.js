





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = null
argument3[2] = "Cj"
return a*b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][2] = ["2",82,783,607,"S","n8"]
return a/b*c
};
var argument4 = [100,213,157,969,59,242,823,705];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = [403,783,82,122]
argument6 = {"82":"","122":595,"":82,"]":2.446690874764422e+307,">7":"","1.0014399312525109e+308":"sT","=tO*":"W","{":6.7751085816232e+307}
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3599216339661573e+308] = 893
base_3[0] = "mI%'"
return a*b*c
};
var argument7 = {"25":"","242":59,"":2.926528901231718e+307,"E(90":1.4540822136417927e+308,"1.7976931348623157e+308":1.0329715781029271e+308,"1.123508550122385e+308":"","D":""};
var base_0 = ["X","l`","7D",126,"A",100,655,"a{U!","2"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","l`","7D",126,"A",100,655,"a{U!","2"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","l`","7D",126,"A",100,655,"a{U!","2"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","l`","7D",126,"A",100,655,"a{U!","2"]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)