





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = 126
return a*b+c
};
var argument2 = {"100":"","607":1.1887222313208602e+308,"783":"","'@n!":618,"v)R(":1.7976931348623157e+308,"":1.2376546442884092e+308,"4.982553613433854e+307":"g","w":1.3777332712661968e+308};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = "'%"
argument5[2] = 6.405971894782969e+307
base_1[2][7] = 25
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.9097830510613482e+307] = 6.927783219776527e+307
base_2[4][1.5144566325729397e+308] = [823,655,783,823,25,823]
argument5[122] = 100
return a+b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[893] = null
argument7[7] = null
return a+b-c
};
var argument7 = "YK";
var base_0 = [893,655,"cYa","W","=%glH];"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,655,"cYa","W","=%glH];"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,655,"cYa","W","=%glH];"]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,655,"cYa","W","=%glH];"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test963.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)