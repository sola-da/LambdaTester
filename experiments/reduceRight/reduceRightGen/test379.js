





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = true
return a*b-c-d
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = "BS`"
argument5[4] = {"49":2.7610849792236713e+307,"714":1.7128521321536694e+308,"5.515706002786858e+307":""}
argument4[1] = null
return a-b-c-d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[126] = 82
return a/b/c+d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = true
argument8[5] = {"25":627,"122":0,"823":"R0)","4.2912896390958423e+307":7.180647272605557e+307,"1.4969455535252986e+308":"uT6L,>","1.2952775836828298e+308":"","":""}
base_3[2] = {"843":"","969":"","5.629297925129202e+307":714,"zg":"6i!|","1.3595757737181653e+308":"3","$":"y","":"","1.1547181404281835e+308":157,"=y":1.2285538985328612e+308}
return a/b+c/d
};
var base_0 = [714,"f",">",714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"f",">",714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"f",">",714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"f",">",714]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test379.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)