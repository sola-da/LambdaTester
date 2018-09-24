





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1['s'] = {"242":"","":"","1.7976931348623157e+308":""}
argument3[0] = ["z{*b}C3","@NV",-100,"g",969,"D","8","3","bv","2"]
argument1[0] = ""
return a+b-c*d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = 1.0514948475187102e+308
argument5[59] = {"82":1.3481667414673855e+308,"`jAc":"7","1.4134741602451706e+308":"Y","PTi:(":"j","1.6203097650572259e+308":1.1480923177893937e+308}
return a/b*c*d
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
base_2[0][0] = {"1.443281177713674e+308":1.082336600738257e+308,"iH+":126}
return a+b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = ["A","ii","Qwv","8X","wA","n","o",">u"]
return a/b/c*d
};
var base_0 = [126,5e-324,607,595,627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,5e-324,607,595,627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,5e-324,607,595,627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,5e-324,607,595,627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test877.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)