





var callbackArguments = [];
var argument1 = r_0;
var argument2 = 1.3679739931894994e+308;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 1.2740806389180248e+308
argument2[1] = {"122":"9","j(Vd":1.6636415802708262e+308,"1.575840838889709e+308":0,"4.594914922680931e+307":1.6166900270323718e+308,"b3":1.1664692668886877e+308,"":""}
return a*b/c-d
};
var argument5 = r_0;
var argument6 = "";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = null
argument5[2] = [823,969,126,1.7976931348623157e+308]
return a*b-c-d
};
var argument9 = null;
var argument10 = r_2;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][4] = {"242":403,"783":2.8340778827428477e+307,"1.5275230975648696e+308":3.173465264394801e+307,"1.5285288551634509e+308":460}
argument10 = null
argument10 = null
return a/b*c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = {"618":1.109903532029388e+308,"1.7748759073424768e+308":""," N":82,"":"","1.4212216872860754e+308":"","*k":"","Z":"","L":893}
argument14[3] = null
return a/b/c-d
};
var argument14 = "i";
var argument15 = [783,5e-324];
var base_0 = [",","hl","]Mo*=","?U",":n","SW","O","OSY)D","hJ"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",","hl","]Mo*=","?U",":n","SW","O","OSY)D","hJ"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",","hl","]Mo*=","?U",":n","SW","O","OSY)D","hJ"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",","hl","]Mo*=","?U",":n","SW","O","OSY)D","hJ"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test535.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)