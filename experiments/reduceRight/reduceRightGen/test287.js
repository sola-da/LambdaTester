





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = [242,460,213,1.7976931348623157e+308,403,705,-100,627]
base_0[6] = true
argument3[2] = "b#"
return a*b*c/d
};
var argument2 = 6.434965612333745e+307;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = null
base_1[2][2.819898637310108e+307] = {"25":4.236981740794979e+307,"607":1.0036171412773591e+308,"783":"M","":595,"3.0754817000675394e+307":"","o6":5.132399240330538e+307,"zy":969,"1.7488517109822947e+308":"",",":1.1523445903925921e+308}
return a*b+c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = true
base_2[6][2] = ""
argument5['{S'] = 627
return a-b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = {"823":"","":9.170357462725278e+306}
return a*b+c*d
};
var argument6 = "";
var argument7 = false;
var base_0 = [655,460,242,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,460,242,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,460,242,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,460,242,607]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test287.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)