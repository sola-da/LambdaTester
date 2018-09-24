





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"403":4.3098660372154326e+307,"655":"","783":"",")JhNfp":"{",")p":"","4.2376317470280334e+307":7.653117713078874e+307,"":"","Sj":"","1.1284912974598615e+308":5.710507432193329e+307}
argument3[7] = {"242":">e"}
return a*b-c/d
};
var argument2 = 2.6641704104758684e+307;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 100
argument4[2] = 1.438288197191324e+307
argument4['w'] = {"1.035161481064062e+308":"","t!{h":"8%oh"}
return a-b-c+d
};
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"460":"","1.9725829401580938e+307":""}
argument7[6] = true
return a/b-c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = null
argument8[6] = {"25":"","#":"q"}
argument7[1] = null
return a*b+c/d
};
var argument7 = r_1;
var base_0 = [242,-100,126,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,-100,126,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,-100,126,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,-100,126,705]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test521.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)