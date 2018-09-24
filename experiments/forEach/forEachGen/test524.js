





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['?'] = true
argument2[0] = null
base_0[4][4] = null
return a+b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[49] = {">":-100,"1.7189954385338754e+308":1.2464541196697133e+308,"1.7976931348623157e+308":25,"7.90548400117847e+306":5.556225705579192e+307,"1.729360514108405e+308":""}
argument4[1.0446313380579697e+308] = ["?^Z",618,"P",627]
return a*b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = 6.220275959229827e+307
argument4[7.92397107964922e+307] = 843
argument5['am'] = null
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.3130321063336282e+308] = 1.758097652922243e+308
base_3[7] = [242,5e-324,714]
return a*b+c
};
var argument6 = r_3;
var argument7 = {"1.7976931348623157e+308":"","":1.6591652771066127e+308,"V":"kx*","9.488414941038192e+307":"","&j":4.46103574581194e+307,"d":1.564049677000763e+308,"m":969};
var base_0 = [403,403,126,1.7976931348623157e+308,618,126,49,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,403,126,1.7976931348623157e+308,618,126,49,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,403,126,1.7976931348623157e+308,618,126,49,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,403,126,1.7976931348623157e+308,618,126,49,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test524.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)