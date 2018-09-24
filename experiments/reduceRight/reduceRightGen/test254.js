





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][1.7976931348623157e+308] = {"7.836363887465991e+307":1.6003546649078022e+308,"":"t"}
argument2['{S'] = {"100":4.274799030930366e+307,"403":";","618":2.8934618432865473e+307,"627":1.3216576995900928e+308,"705":213,"1.4836319278761465e+308":"k","-100":6.331187141634995e+307,"8.483957830220849e+307":595,"4.546263839282809e+307":1.7976931348623157e+308,"!":"F"}
argument2[1] = [893,595,49,5e-324,893,627]
return a+b-c/d
};
var argument2 = 25;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ["#","%L|"]
argument5[1] = {}
return a*b-c-d
};
var argument5 = 1.0292020284679836e+308;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = false
base_2[6][2] = true
base_2[2][2] = false
return a*b-c*d
};
var argument7 = 595;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['K'] = 823
argument9[7] = [595,122,82]
base_3[6] = 122
return a*b-c/d
};
var base_0 = [783,627,-1,157,1.7976931348623157e+308,"1","v6",607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,627,-1,157,1.7976931348623157e+308,"1","v6",607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,627,-1,157,1.7976931348623157e+308,"1","v6",607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,627,-1,157,1.7976931348623157e+308,"1","v6",607]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)