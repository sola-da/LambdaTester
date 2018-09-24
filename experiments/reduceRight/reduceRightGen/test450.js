





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ""
base_0[1] = null
base_0[5] = ""
return a-b*c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[-1] = {"":"w-G","1.7131410546504466e+308":2.0886019886364808e+307}
argument4[0] = 1.39349038275347e+308
argument3[7] = "8"
return a+b*c-d
};
var argument3 = "t7B";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = "Jz"
argument6[1] = {"655":"","4.524316557522581e+307":7.073031064437918e+307,"1.4064054910072868e+308":49,"1.5242502015476e+308":3.1479081264984667e+307,"4.679504980543192e+307":"","8.558993294796637e+307":"","5e-324":82}
return a-b*c-d
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = false
return a*b-c/d
};
var base_0 = ["{^","w","{","mS","|","e","Z","-","%"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["{^","w","{","mS","|","e","Z","-","%"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["{^","w","{","mS","|","e","Z","-","%"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["{^","w","{","mS","|","e","Z","-","%"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test450.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)