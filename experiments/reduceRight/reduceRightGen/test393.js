





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = [595,823,969,843,627,157,607,122]
argument2[7] = {"2":627,"25":"I]b","":"Zl3","C":"7","&":1.2805750072673264e+308,"@":595}
return a+b-c-d
};
var argument2 = [893,"H",705];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = null
argument6[5] = "*"
argument5[6] = {"4":607,"783":618,"1.020558175831628e+308":"4{S","3=-mQ":"s","1.242395919812474e+308":"","U":"","6.984498813470246e+307":"0I","4.4371141311960307e+307":"^"}
return a-b-c+d
};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = null
argument8[126] = ""
base_2[3] = {"595":"C","q":1.0575438346255562e+308,"1.0109023616925667e+308":82,"4.6977040989995096e+306":"<_","1.7976931348623157e+308":"","8.478060484077894e+307":""}
return a*b+c-d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = true
argument8[3.8120440085202614e+307] = [-100,"h{","f",100,100,"^",25,655,843]
base_3[6] = true
return a/b+c-d
};
var base_0 = [403,"y7","*"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"y7","*"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"y7","*"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"y7","*"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test393.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)