





var callbackArguments = [];
var argument1 = "";
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[2.1280896016417002e+307] = false
base_0[8] = "&{G"
argument3[25] = {"893":403,"8.894594508795166e+307":"y"}
return a+b+c/d
};
var argument5 = true;
var argument6 = "";
var argument7 = 714;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[460] = "tA"
base_1[2][0] = null
argument7['l&'] = {"595":"","627":49,"d":""}
return a*b/c+d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[-1] = null
return a+b*c*d
};
var argument10 = null;
var argument11 = true;
var argument12 = true;
var argument13 = r_0;
var argument14 = [783,595,627,-100,823,213,823,157];
var argument15 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14[59] = [823,-1,714,242,59,25]
argument13[8] = {"0":1.650123875506975e+308,"607":"g6j","655":"kp","969":100,"FUNq":"|","1.4401901281141616e+308":1.9324612661421845e+307,"hH":1.5845676368526028e+308,"6.627167004123272e+307":"H","4.852682025239631e+307":9.003577099868856e+307}
argument12[893] = 126
return a*b-c-d
};
var base_0 = [1.7976931348623157e+308,618,403]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,618,403]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,618,403]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,618,403]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13,argument14,argument15)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test919.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)