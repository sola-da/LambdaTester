





var callbackArguments = [];
var argument1 = 893;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = 1.5320532705220273e+307
return a+b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"25":"G","59":"","122":"&7","705":"O<*{|","1.608377125191976e+308":618,"1.320530153270747e+308":"Nb","":4.651687201076221e+307,"X":"V","1.5471128757002982e+308":2.254425808519562e+307,"9.94707290710536e+307":9.674640083203658e+307}
base_1[0][4] = true
return a*b/c*d
};
var argument6 = {"100":6.434012597472223e+307,"655":"S","":1.0568436045445176e+307,"x":122,":":""};
var argument7 = null;
var argument8 = [843,0,0];
var argument9 = "V";
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = false
base_2[9] = [705,126,705,893,0,122]
argument8[0] = {"126":"","705":1.3178935060159253e+308,"8.244665181887941e+307":"","":"","3.7690922109360956e+307":"V<","1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_"}
return a/b+c+d
};
var argument11 = "9";
var argument12 = [714,82,595,1.7976931348623157e+308,49,969];
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[6.35085648319999e+307] = null
argument12 = {"714":1.6824698055111112e+308,"xU":1.2709241858763284e+308,"":"","r":1.101506737181496e+308,"3.238057537021918e+307":":i"}
base_3[6] = ["Rn<","U","e0#]FX4","5bRbr",157,122,"$","Z"]
return a+b*c+d
};
var base_0 = [595,893,49,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,49,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,49,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,49,100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test222.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)