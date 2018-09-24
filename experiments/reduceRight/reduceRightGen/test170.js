





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"":"","#ap}":5.044021660763956e+307}
return a+b+c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = null
argument2 = false
return a*b/c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = {"618":"","893":8.890689500689119e+307,"1.7635741883131193e+308":403,"_N":4.86273452254867e+307,"-100":"","1.1290319456342857e+308":2.808850358062499e+307,"":""}
argument4['{S'] = ["J",714]
base_2[2] = [595,242,213,122,618,893,126,5e-324]
return a/b+c+d
};
var argument4 = {"126":213,"823":6.237570375107238e+307,"":"","7.208254605478483e+307":"","6.415523593708415e+307":1.4132067461714063e+308,"1.1883861440700653e+308":5.951858978684736e+307,"1.3904615460544467e+308":"8","tH":1.6294192005532328e+307};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = ""
return a-b+c*d
};
var argument6 = null;
var base_0 = [":","Z","Bn)","^2"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":","Z","Bn)","^2"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":","Z","Bn)","^2"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":","Z","Bn)","^2"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test170.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)