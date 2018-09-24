





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][3] = true
argument2[25] = {"82":"y-","1.7976931348623157e+308":1.169872798014982e+308,"y":""}
return a+b/c*d
};
var argument2 = true;
var argument3 = null;
var argument4 = null;
var argument5 = null;
var argument6 = [893,627,0,122];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = true
return a/b+c+d
};
var argument8 = null;
var argument9 = true;
var argument10 = true;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = {"-100":"=","":1.3264818192691697e+308,"6Mi":783}
base_2[0][4] = true
argument9[1] = true
return a+b*c-d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[6.35085648319999e+307] = {"627":"w","705":"","893":"","969":"a","9.112724992709036e+307":1.3100056304930266e+308,"":893,"1.4191696757103295e+308":1.3113734304094844e+308,"8.689907490699425e+307":4.94090890107551e+307,"1.7567139937649756e+308":"y^>"}
base_3[1][0] = ""
argument12[2] = {"0":893,"6":"","705":82,"2.191200580922341e+307":"","":1.4700166794816493e+308}
return a/b+c+d
};
var argument13 = r_1;
var argument14 = {"U*[Xds":157,"B":-100,"(":403,"9.076216511320155e+307":783};
var base_0 = ["n","S","k","b5",">","B","!*"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n","S","k","b5",">","B","!*"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n","S","k","b5",">","B","!*"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n","S","k","b5",">","B","!*"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test371.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)