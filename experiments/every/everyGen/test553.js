





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
argument2[0] = false
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = 714
argument3[8] = [1.7976931348623157e+308,595,460,82]
return a+b+c
};
var argument3 = {"82":893,"157":":","705":1.662868868967833e+308,"":1.2262504017357746e+307,"1.7918289547839537e+308":"F*<","j":100,"5e-324":5e-324,"1.3252339126043003e+308":1.6124674737459607e+307,":{p1":":Do"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = [242,893,714,1.7976931348623157e+308,122,893,655,157]
argument5[8] = null
argument5[1] = true
return a*b+c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b-c
};
var argument7 = "";
var base_0 = [126,126,122,705,714,618]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,126,122,705,714,618]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,126,122,705,714,618]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,126,122,705,714,618]
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
require("fs").writeFileSync("./experiments/every/everyGen/test553.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)