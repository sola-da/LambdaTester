





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = ""
argument3['!j'] = 7.071733664954669e+307
argument2['v'] = ""
return a*b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"213":1.1493688580156702e+308,"u":"DA","":1.2589332695972364e+308,"1.329787977766657e+308":-100,"1.6537482117246847e+308":"","s":969,"1.513623815136999e+308":""}
argument4[4] = [213,25,100,705,25,893]
return a-b*c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = 1.6035944220328165e+308
argument4 = true
argument5[4] = null
return a+b+c+d
};
var argument4 = 7.374243695583032e+307;
var argument5 = 1.134750443775863e+308;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['y'] = {"595":82,"655":82,"1.2287080486766263e+308":"z","3.873058896680124e+307":460,"kz:$":627,"":1.7976931348623157e+308}
base_3[7] = "};yY"
base_3[7] = {"460":1.460625521149995e+308,"627":49,"$1":100,"":6.277379982368375e+307,"1.396436124444942e+308":1.0029598103588784e+308,">pvL":49,"3.9285960188693716e+307":843,"=:+kFe":")y9Y","1.7976931348623157e+308":100}
return a*b/c*d
};
var base_0 = [82,82,213,49,213,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,82,213,49,213,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,82,213,49,213,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,82,213,49,213,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test382.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)