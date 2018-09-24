





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[82] = {"7":"H","":"D","2.3197015928780473e+307":"="}
base_0[5] = null
return a*b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][2.819898637310108e+307] = 5e-324
base_1[1] = "y"
argument3[25] = true
return a/b+c/d
};
var argument3 = r_0;
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = {"460":100,"607":"","":655,"1.4335758464329492e+308":7.670295733763802e+307,"1.0420805884002841e+308":"","C":"","a":"N"}
base_2[8] = {"":"","6.444043645211268e+307":607,"y`y":"","ba":"","t":"u!"}
argument7[1] = [893,126,-1,5e-324,122,655,403,783,714]
return a-b+c*d
};
var argument6 = "(i)9(";
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.921533274132203e+307] = {"460":5.72648526789157e+307,"1.1237149668194041e+308":"","1.5426068639678088e+308":"kH","7.337138243458966e+307":7.044983901658633e+307,"":823,"6.955033840356263e+307":157}
return a/b*c/d
};
var argument8 = false;
var base_0 = ["S",126,-1,49,"?"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S",126,-1,49,"?"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S",126,-1,49,"?"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S",126,-1,49,"?"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test616.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)