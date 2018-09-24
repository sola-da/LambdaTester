





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = ""
argument2[-1] = {"242":"Ho","823":1.468509623408546e+308,"EPE":"","@":9.542892979165442e+307,"A":"","{mb8t+":25,"1.199966251547035e+308":705,"":100,"&tL":""}
return a/b*c-d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0050602206045617e+308] = ""
argument4[8.108492555774111e+307] = {"":"","1.7558559870873438e+308":627,"1.5911168012068258e+308":"","6.019280973505707e+306":242}
return a-b*c/d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['L'] = 1.4562624797197647e+308
argument7[655] = ["rU","+f","e",705]
base_2[2][2] = null
return a*b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0050602206045617e+308] = {}
return a-b/c+d
};
var argument7 = r_3;
var argument8 = r_3;
var base_0 = [714,893,-100,213,25,213]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,893,-100,213,25,213]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,893,-100,213,25,213]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,893,-100,213,25,213]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test985.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)