





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.575765443877852e+307] = [49,893,100,49]
argument2['K'] = 655
argument2[1.738403780925446e+308] = {"25":";","595":607,"":"","N":"","4.789308260705193e+307":"","z<":"Gg *R[","1.352063011244292e+308":""}
return a*b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['w'] = [893,655,714,843,783,714,122,618,618]
return a-b/c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = [242,823]
base_2[7] = [705,"<",823,213]
return a+b+c-d
};
var argument4 = 1.0531502910003966e+308;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = [783,843,823,213,0,-1,59,403,0,595]
argument6[0] = ["v",1.7976931348623157e+308,655,25,0]
return a/b*c/d
};
var argument6 = r_3;
var argument7 = {"100":843,"607":"|","823":213,"nfjI4$":"[<","9.57830819579538e+307":7.876919679592868e+307,"":6.756237202041814e+307,"2.1043523520025948e+307":460,"w":"7n&K"};
var base_0 = [655,-100,"(3",157]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,-100,"(3",157]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,-100,"(3",157]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,-100,"(3",157]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test288.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)