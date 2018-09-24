





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = "SC"
argument3 = null
argument3['!j'] = {"1.4862294535032353e+307":1.3367413290040761e+308,"5.308797206742064e+307":"","OnFd":6.190533007346119e+307,"":1.125822344887889e+307,"6.007727695550026e+307":1.1541176978952858e+308}
return a*b*c-d
};
var argument2 = {"893":5.126874849159552e+307,"1.4185457887051017e+308":714};
var argument3 = "hD";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][3] = null
argument6[0] = "Nbo?U"
base_1[4] = null
return a/b+c/d
};
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = {"157":"]"}
argument7 = null
return a/b+c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = null
argument9['!j'] = null
base_3[0] = null
return a+b/c*d
};
var argument8 = false;
var base_0 = ["h"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test38.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)