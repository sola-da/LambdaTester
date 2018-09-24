





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['T'] = {"S":"@","6.496596157180362e+307":783}
return a/b/c*d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = [969,82,655,49,25,783,59,49,403]
argument4[4] = ""
return a*b*c/d
};
var argument4 = false;
var argument5 = 5.734785076226207e+307;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[6] = {"655":"q","823":"D","843":1.1779433667189308e+306,"4.612711996148714e+307":893,"udTu'a":1.4280253729970597e+308,"1O":9.25607009638637e+307,"1.2907172020117275e+308":8.201920602253908e+307,"%":655}
return a-b/c/d
};
var argument7 = false;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8.575765443877852e+307] = null
argument11[3] = 1.7976931348623157e+308
return a*b*c*d
};
var argument10 = {"213":"%","242":4.081899119598274e+307,"618":"","783":4.065917622451771e+307,"823":"G*","":"3wc",">c":"","1.4344342323097405e+308":2.2667580232437213e+307,"5.595825087391645e+307":">"};
var argument11 = false;
var base_0 = [82,893,100,157,618,627,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,893,100,157,618,627,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,893,100,157,618,627,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,893,100,157,618,627,705]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test929.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)