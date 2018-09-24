





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = [969]
argument3[5] = null
argument2[0] = 126
return a/b/c-d
};
var argument2 = null;
var argument3 = false;
var argument4 = null;
var argument5 = {"Y:":""};
var argument6 = ["iBZ"];
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8] = {"157":1.022502932462861e+307,"843":"f","4.4232508242544195e+307":5.178862997241154e+307,"@d":6.491759083113556e+307,"":82,"1.172568723004133e+308":6.396005932655485e+307,"5e-324":213,"1.358831470734552e+308":8.317003629686117e+307}
return a+b*c+d
};
var argument8 = 618;
var argument9 = "F";
var argument10 = false;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ["{","159","^",0,242,-100,"G",823,242]
argument9[1.1277822633002616e+308] = 1.7976931348623157e+308
argument9[4] = 4.950249795384026e+307
return a+b/c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12['s'] = 627
argument12[1] = ["x","j|","9Hn"]
base_3[0] = null
return a/b/c+d
};
var argument13 = false;
var argument14 = false;
var base_0 = [893,25,714,893,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25,714,893,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25,714,893,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25,714,893,213]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test789.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)