





var callbackArguments = [];
var argument1 = null;
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = {"49":"","":1.5830451660589084e+308,"kp>":1.719076369665679e+308,"{<":25,"O ":1.3060153579136518e+308,"O":607}
base_0[0][3] = true
argument3[1] = "E$u<(Gb"
return a/b/c*d
};
var argument5 = r_1;
var argument6 = ["FcaQ)`!","(t","n%","4",">","YM"];
var argument7 = ["?9^>",">)o","dK","U","e","x","N"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.3938918493123786e+308] = [655,82,403,595,1.7976931348623157e+308,714,714,595]
argument6[9.331954948603684e+307] = 1.561655006135005e+308
argument6[1.1532786076532189e+308] = false
return a*b/c/d
};
var argument9 = r_2;
var argument10 = r_1;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[8] = ""
return a/b+c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = 4.498780742350599e+307
return a*b-c*d
};
var argument14 = [49,460];
var base_0 = ["L",",","p","S","A","ka$f","DZz"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L",",","p","S","A","ka$f","DZz"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L",",","p","S","A","ka$f","DZz"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L",",","p","S","A","ka$f","DZz"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)