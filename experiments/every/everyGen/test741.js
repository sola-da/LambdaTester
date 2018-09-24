





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = ""
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = [126,59,5e-324,893,705]
argument4[0] = {"82":"p!)","122":7.282946438732406e+307,"783":705,"gT":460,",Z":6.328711167322708e+307,"":1.7796705461753564e+308,"pK":"BL","0is*?":823,"1.399763580551872e+308":4.7162959698809974e+306}
base_1[6] = ["a","E0kf","va5!"]
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[7] = ""
argument4[893] = null
return a+b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[7] = {"627":1.1800415303324484e+308,"6.353482129003912e+307":"","1.355683460249241e+308":"",",":126,"+F":"s","":"N"}
argument6[3.3156198695370476e+307] = false
return a/b+c
};
var argument6 = null;
var argument7 = {"122":1.7976931348623157e+308,"893":6.350847897633278e+307,"*":"","5.667366834357572e+307":"","<e":"'V`'","":3.498009720140069e+307,"1.5596552063638907e+308":627,"4.689259114076365e+307":""};
var base_0 = [893,126,59,1.7976931348623157e+308,969,823,607,-1,618,655]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,126,59,1.7976931348623157e+308,969,823,607,-1,618,655]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,126,59,1.7976931348623157e+308,969,823,607,-1,618,655]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,126,59,1.7976931348623157e+308,969,823,607,-1,618,655]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test741.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)