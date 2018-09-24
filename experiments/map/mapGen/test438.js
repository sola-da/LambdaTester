





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = "0z"
argument2[1]['d'] = {"3.977732662221131e+307":""}
argument2 = true
return a-b-c
};
var argument2 = [126,59,-1,705];
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = null
base_1[3][1] = {"1.0792249359100035e+308":1.7736104842984645e+308,"":"","7.235618878836245e+307":705}
base_1[5] = null
return a/b/c
};
var argument5 = 242;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0] = null
argument8 = true
argument8[49] = {"2":"","49":122,"":"","_&":7.373190563626027e+307,"3.523689803860027e+307":"L"}
return a*b*c
};
var argument8 = "Y";
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 242
base_3[4] = ["9G$[",403,"PIV"]
return a*b+c
};
var argument10 = null;
var base_0 = ["^","7;7","Qb",")0upkF&7C","c","]e","I","p","i"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","7;7","Qb",")0upkF&7C","c","]e","I","p","i"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","7;7","Qb",")0upkF&7C","c","]e","I","p","i"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^","7;7","Qb",")0upkF&7C","c","]e","I","p","i"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test438.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)