





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7.004668712060429e+307] = [-1,157,49,893,49,893,403,714]
base_0[1] = 6.067105479479472e+307
base_0 = "-"
return a+b-c
};
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][8] = {"213":1.6881526056083587e+308,"893":618,"i":1.0612159623430506e+308,"":893,"p":"Y","a(":8.54710658544865e+307,"2.6320358142973813e+307":1.7976931348623157e+308}
return a*b+c
};
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4.224481734419934e+307] = null
base_2[5][0] = 1.6733817286777285e+307
return a+b+c
};
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[9.551053197482062e+307] = {"607":"","5wN":"Qj&%K3sN","":"^"}
argument10[2] = {}
return a+b-c
};
var argument10 = r_0;
var argument11 = {"j":"","_":"z&Q"};
var base_0 = [893,25,403,823,1.7976931348623157e+308,-100,595,893,59,705]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,403,823,1.7976931348623157e+308,-100,595,893,59,705]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,403,823,1.7976931348623157e+308,-100,595,893,59,705]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,403,823,1.7976931348623157e+308,-100,595,893,59,705]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/some/someGen/test990.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)