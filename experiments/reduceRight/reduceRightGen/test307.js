





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = [595,969,403,843,157]
argument2['y'] = null
return a/b-c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {"6.140262928479742e+307":1.7739236525405573e+308,"1.4347904083733444e+308":8.029141861757951e+307,"":969,"1.1325427122668634e+308":7.723189962411818e+307}
return a-b+c+d
};
var argument3 = {"82":893,"126":8.954754862006279e+307,"627":1.7976931348623157e+308,"893":1.5997212612608173e+308,"1.2376565160676846e+308":"s","1.2770448615192557e+308":1.8422095330706592e+307,"[":"[B","":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.738403780925446e+308] = [823,82,714,595]
argument5[7] = null
argument5['{S'] = "]"
return a/b+c/d
};
var argument5 = 893;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
base_3[2][2.819898637310108e+307] = {"59":"","'":"7M"}
argument7['{S'] = null
return a/b/c*d
};
var base_0 = [595,714,49,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,714,49,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,714,49,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,714,49,607]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test307.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)