





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = true
base_0[5] = 1.2431963142256094e+308
base_0[4] = {"126":1.514153753913608e+308,"157":"","607":"","893":1.4536617123292348e+308,"4.2973679676433444e+307":"GI","":"","f":1.4491847584408095e+307,"9.02032713536931e+307":1.4834103317200468e+308,"6.636041156642326e+307":"G"}
return a-b+c*d
};
var argument2 = {"403":"","595":1.1266870669512564e+308,"783":"","9.323435168156194e+307":7.530607368672627e+306,"4.3055675149882927e+307":1.3463009577694051e+308,"":8.143137626455915e+307,"9p":"!","1.2260543441987487e+308":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = null
argument6[0] = ""
return a*b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 618
base_2[1] = ""
base_2[5] = 8.199938521117415e+307
return a/b/c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = true
return a-b/c*d
};
var argument7 = [100,"GV","76",1.7976931348623157e+308,823,"]",82,655];
var argument8 = null;
var base_0 = [1.7976931348623157e+308,714,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,714,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,714,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,714,607]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test2.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)