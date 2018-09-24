





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"59":6.707026601817902e+307,"618":1.3494224945063471e+308,"1.1262365169564138e+308":126,"9.835783648892322e+307":8.176741614857829e+307,"":""}
base_0[5] = null
base_0[6] = 4.499912112781142e+307
return a-b-c/d
};
var argument2 = null;
var argument3 = null;
var argument4 = [59,242,"3","|","8",1.7976931348623157e+308,5e-324,"2","f"];
var argument5 = null;
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = false
base_1[0] = {"213":4.06065835296461e+307,"607":9.009932754220908e+307,":":705,"6.763113890586682e+307":1.5013751603394546e+308,"v":"G+Ft-d","1.208405733928313e+308":1.7284389229217968e+308,"":""}
return a+b-c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = 893
return a-b+c/d
};
var argument9 = null;
var argument10 = r_1;
var argument11 = [627,618,783,213];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[7] = 100
argument10 = {"403":"!Z","823":59,"":"","KH":403,"2.2273038874629112e+307":"l","4.497381106868817e+307":705,"2.827439876128423e+307":"`<!Ac","5.170945742287504e+307":9.348590533414002e+307}
base_3 = {"823":460,"^":"$","3.1507507435200584e+307":25,"2.4555219924047215e+307":"","G":1.3190835498410282e+308,"C":460,"-1":9.580866955541791e+307}
return a+b-c+d
};
var base_0 = [59,-100,157,460,618,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,-100,157,460,618,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,-100,157,460,618,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,-100,157,460,618,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test98.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)