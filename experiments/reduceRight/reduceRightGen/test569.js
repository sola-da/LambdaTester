





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = [242,"G","CJO",823]
argument3['UU'] = {"783":5.999658216034683e+307,"E":1.2647352978584056e+308,"":595,"-100":8.188767638979721e+307}
argument3 = {"RQv":"<|Z","":6.288795987398774e+307,"1.514578300169574e+306":1.1039618384423967e+308,"4.228317582149249e+307":3.8768196110444365e+307}
return a-b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['F2nCX>6'] = false
base_1[1][2] = {"59":1.6866608988549676e+308,"9.404504046672394e+307":"0","#":"ls`js","1.4579259686986947e+308":2.55109927538094e+307,"":3.706847656003612e+307,"3.4030440070185407e+307":6.361365497388426e+307,"4.874752897901679e+307":"","rziV":"","yZ":3.1120379026838735e+307}
return a-b/c*d
};
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['v'] = false
argument6[6] = 1.5551850693033582e+308
argument6[0] = {"714":49,"969":"","3.575508766575086e+307":"","4.897984334259787e+307":618,"":"","1.6255245504960968e+306":""}
return a-b*c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2.819898637310108e+307] = {"460":126,"823":25,"%":"Y","r":"","$":""}
argument5[0] = true
argument6['v'] = [714,122,213,"W"]
return a*b-c-d
};
var base_0 = [403,25,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,25,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,25,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,25,705]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test569.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)