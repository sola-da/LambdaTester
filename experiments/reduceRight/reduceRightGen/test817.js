





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['T'] = 1.22221470663922e+308
argument2[7] = {"242":"e","":618,"3.1323053569856813e+307":"","9$1=y:":1.2947024915568194e+308,"(RH":460,"2.3662647370926807e+307":"","C":"dhx","4.210349757433377e+307":618}
argument3[2] = {"122":714,"":"",",":1.0754487419500405e+308}
return a+b+c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['{S'] = {"5":"^G}","403":2.4921056511026713e+307,"618":"g","969":"a","dJ_":705,"Nb":"U","m":"","":"z","D:":6.943565069719891e+306,"8.57343467179916e+307":3.8980089808448797e+307}
return a/b+c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2.819898637310108e+307] = [5e-324,100,595,157,"e",705,"I"]
argument5[-1] = null
argument5['^N'] = ["H","|#","{","i","^m6*8q","J","b","e"]
return a+b*c+d
};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = {"242":"%}I#","714":"{U","893":1.3965171644902115e+308,"7.089937574599909e+307":"","":"<","2.3112160398096685e+307":1.7976931348623157e+308,"%?@[@0K:":3.5884657995621124e+307,"C":""}
return a-b-c+d
};
var base_0 = ["s?P","]","g","4J)S","_"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["s?P","]","g","4J)S","_"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["s?P","]","g","4J)S","_"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["s?P","]","g","4J)S","_"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test817.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)