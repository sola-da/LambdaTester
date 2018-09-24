





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ["N","f|","zzXx","Pc","Ym","%","@","f","l","Y5W2V"]
base_0[1] = null
argument2[3] = true
return a/b*c+d
};
var argument2 = {"82":1.1535220114644507e+308,"595":"(R","":0,"6.649215315624498e+307":242,"1.561780162715186e+308":242,"S":"TU&D?","tc":"S","1.4823373928521157e+308":3.7533535686937563e+307};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['St'] = 595
return a+b-c/d
};
var argument4 = [157,5e-324];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.8120440085202614e+307] = true
argument6[1.4250811791542279e+308] = false
return a+b/c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ["y","=","c","SY U","Oi","7","fW:","[","%","s?"]
argument7[5] = null
return a*b+c*d
};
var argument7 = 1.138912388959285e+308;
var argument8 = null;
var base_0 = ["C",714,460,59,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["C",714,460,59,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["C",714,460,59,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["C",714,460,59,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test967.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)