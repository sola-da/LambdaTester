





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a*b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['y'] = {"714":"K","969":7.103995973047636e+307,"f":9.408867035870104e+307,"-100":627,"3.342564581346502e+306":"","":1.5602010831581043e+308,"FT=`Dn":1.1074563683935594e+308,"s8rI":"","h":82,"2.2828083832204316e+307":""}
return a/b*c-d
};
var argument3 = null;
var argument4 = {"59":"r^S","595":"","":1.924843522159924e+307,"Y6":893,"o=!_T":1.7976931348623157e+308,"1.7506013236238116e+307":""};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = 1.4858141192450375e+308
base_2[7] = null
return a*b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = null
base_3[1] = ""
return a*b*c+d
};
var argument7 = false;
var base_0 = [969]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test541.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)