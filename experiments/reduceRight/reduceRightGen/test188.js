





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = 9.476996729349944e+307
base_0[6] = 1.6527534900073757e+308
return a-b*c+d
};
var argument2 = r_0;
var argument3 = {"49":"!]O","122":"ZPyCgLbm","":595,"1.7129553294043726e+308":"`G*","=cc":"","(":"","1.4282263297281777e+308":1.7976931348623157e+308,"%X":1.2891627269486764e+308,"ErF":49,"2.886130611883774e+307":-100};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = {"714":"L","2.991534434484797e+307":82,"1.6174937516176756e+308":1.2274843271044772e+307,"":"","y6":")"}
argument5[5] = true
argument5['v'] = [705,823,705]
return a/b+c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = {"":""}
return a/b/c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['{S'] = null
argument7['v'] = ["n","d","!w$","O","g","3b3b","hdnC=B","<"]
return a-b-c+d
};
var argument7 = true;
var argument8 = null;
var base_0 = ["Qr^<U=s",">","rM","E","n(U","2","U+","IX","o"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Qr^<U=s",">","rM","E","n(U","2","U+","IX","o"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Qr^<U=s",">","rM","E","n(U","2","U+","IX","o"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Qr^<U=s",">","rM","E","n(U","2","U+","IX","o"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test188.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)