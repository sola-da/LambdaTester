





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.2421645642809447e+308] = 1.300559968686784e+307
base_0[1][2] = [126,595,-100,0,843,607,969]
return a/b/c
};
var argument2 = [618,893,242,59,126,460,655,59,100,25];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['-'] = null
return a*b-c
};
var argument4 = false;
var argument5 = 627;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.9097830510613482e+307] = "X"
return a*b*c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = 655
return a+b-c
};
var base_0 = [25,100,1.7976931348623157e+308,783,100,783,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,100,1.7976931348623157e+308,783,100,783,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,100,1.7976931348623157e+308,783,100,783,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,100,1.7976931348623157e+308,783,100,783,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test895.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)