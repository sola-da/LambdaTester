





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = 5.996266063793314e+307
base_0[0][4] = 3.4221326789658904e+307
base_0[0][9.12287810829114e+307] = null
return a/b/c/d
};
var argument2 = {"-1":"HLj","2.9586013058569117e+307":"","":"","xS&":"!%"};
var argument3 = null;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = true
return a/b+c/d
};
var argument6 = false;
var argument7 = true;
var argument8 = {"":157,"7.179164747405071e+307":1.7976931348623157e+308};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = false
return a*b/c/d
};
var argument10 = true;
var argument11 = 627;
var argument12 = [627,213,1.7976931348623157e+308];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = true
base_3[5] = ["t",">"]
argument11[0] = [618,823,655,969,843,213]
return a/b+c+d
};
var base_0 = [213,843,705,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,843,705,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,843,705,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,843,705,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test141.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)