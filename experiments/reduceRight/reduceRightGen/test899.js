





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
argument3[6] = null
argument2[1.921533274132203e+307] = ""
return a/b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8] = ["y","k","(Br=","gI"]
argument2[0] = ""
base_1['length'] = ["7d","-_{","mp","P","aE_","X","4"]
return a*b/c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.5288038039415373e+308] = 1.1519161582969944e+307
argument4['y'] = {}
return a-b+c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8.575765443877852e+307] = {"82":"6","126":4.4259365141711164e+307,"242":"","":"","5.470722189505318e+306":"AG[","1.4464216483041636e+308":"A","8.508487072327913e+307":"Fyr",";":""}
argument6[7] = true
argument6[7] = false
return a*b+c-d
};
var argument5 = true;
var base_0 = [893,460,618,-100,59,655,59,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,460,618,-100,59,655,59,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,460,618,-100,59,655,59,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,460,618,-100,59,655,59,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4,argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test899.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)