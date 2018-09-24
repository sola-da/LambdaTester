





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = true
return a-b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[100] = 1.7368889498830586e+308
base_1[4][3] = 3.8210749948568035e+307
base_1[8] = ""
return a+b+c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = [460,969,100,969,49]
argument4['K'] = false
argument4['^N'] = 1.7548842493202907e+308
return a*b*c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"242":705,"":705,"5e-324":"","69y":"","1.9447904459848507e+307":";","1.6636124061669412e+308":"K","Lz)A":"","{":"","1.7149728674698151e+308":0}
argument6[-1] = 5.872444351203104e+307
return a-b*c/d
};
var base_0 = [242,"N#",403,"DC<"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"N#",403,"DC<"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"N#",403,"DC<"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"N#",403,"DC<"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test442.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)