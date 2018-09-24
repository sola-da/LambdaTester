





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = [157,"1","=*","j"]
base_0[6][2] = {"0":"","213":823,"3.183925230428249e+307":9.726062122389612e+306,"<<":1.1093807462065046e+308,"m":783,"":"","1.3340165076727649e+308":"","8.0107167254181e+307":"","8.081371713348127e+307":9.032256692354806e+307}
return a*b+c+d
};
var argument2 = {"25":1.6722127532894108e+307,"157":"P","655":1.1423123559644919e+308,"893":893,"-1":"","1.3019676993571718e+308":100,"G":"oJX>","":100,"YzE":0,"1.1615145340102533e+308":1.3686935097489005e+307};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['UU'] = [714,714,1.7976931348623157e+308,893,1.7976931348623157e+308,893]
argument4['a'] = null
return a/b/c+d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1207829086460726e+308] = ""
return a/b-c*d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = true
return a*b+c-d
};
var argument8 = r_2;
var base_0 = [213,705,242,893,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,705,242,893,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,705,242,893,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,705,242,893,607]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test837.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)