





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = ["k","8Vm","o"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
base_0[4] = 1.622487527331551e+308
base_0[7] = ""
return a-b-c+d
};
var argument5 = false;
var argument6 = false;
var argument7 = {"100":"@","1.2559734900288215e+308":82,"":"fDi","9r":""};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = {"=":"","1.1438602017554847e+308":1.4313997681694647e+308,"I":"","1.6303030876752011e+308":"","Q":"YaK[","":"B"}
argument5 = {"59":843,"100":"=","843":2.791761390733555e+307,"":"","3.6237389157406506e+307":403,"^,ETuV":0}
return a-b-c/d
};
var argument9 = [595];
var argument10 = [714,607,-1,893,25,403];
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = 122
base_2[8] = "X8"
argument9 = {"607":"","'":"Gi","7.788703034167418e+307":607,"":1.7976931348623157e+308,"8.659773426801515e+307":";","3.324629183728474e+307":"dR70","9.059922221607524e+307":5e-324}
return a+b*c/d
};
var argument13 = {"607":2.8179825274719154e+306,";":595,"7.507481920752406e+307":"X","":"","2.397542913680057e+307":"YA"};
var argument14 = true;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = null
return a*b-c/d
};
var base_0 = [705,893,126,783,823]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,126,783,823]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,126,783,823]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,893,126,783,823]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test11.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)