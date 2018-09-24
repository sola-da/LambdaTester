





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = ["4","&hRiPAw","Z?ML"]
argument3['UU'] = ""
return a-b-c-d
};
var argument2 = "";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = null
argument4[4] = {"":1.3814779480608363e+308,"2.703533182470865e+307":"3","4.176186536135523e+307":"j1"}
return a/b+c*d
};
var argument4 = {"25":"","59":4.513295104551401e+307,"595":126,"893":8.207248014735379e+307,"7!":"P","":"68M7","u":-100};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['{S'] = 4.669355617603357e+307
argument6 = [403,100,655,607,213,126,5e-324,213,1.7976931348623157e+308]
return a+b/c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"66":1.3516559457931316e+308,"213":1.082664608536885e+308,"607":"j","1.1361511618995534e+308":3.658057299399015e+307,"":"","1.5389120886538473e+307":25,"1.7272762049677704e+308":""}
return a*b/c+d
};
var base_0 = [655,157,607,82,969,-1,705,460,460]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,157,607,82,969,-1,705,460,460]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,157,607,82,969,-1,705,460,460]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,157,607,82,969,-1,705,460,460]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test352.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)