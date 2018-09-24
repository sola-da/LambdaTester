





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"82":1.1535220114644507e+308,"157":618,"[":6.939259640360057e+307,"":"%(R","S":"TU&D?","tc":"S"}
base_0[1][0] = ["e","Ee","%yV?l","I","GaF","sQ","b",":l","Q "]
base_0[2][5e-324] = 2.602471039185723e+307
return a*b/c
};
var argument2 = {"59":"","82":59,"595":49,"714":"","'":595,"":25,"R[":"U","8.815307551617632e+307":403};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[618] = null
argument5[0] = [705,705,783]
argument5[403] = null
return a*b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = null
argument4[1] = [893,82,403,122,213,213,893,714]
return a*b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = "BC2Yd"
argument7[1.6798476101238045e+308] = null
return a*b*c
};
var argument7 = r_0;
var argument8 = true;
var base_0 = ["y","f|","zzXx","Pc","Ym","%","@","f","l","Y5W2V"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["y","f|","zzXx","Pc","Ym","%","@","f","l","Y5W2V"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["y","f|","zzXx","Pc","Ym","%","@","f","l","Y5W2V"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["y","f|","zzXx","Pc","Ym","%","@","f","l","Y5W2V"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test986.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)