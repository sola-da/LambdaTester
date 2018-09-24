





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = null
argument3[-1] = null
return a-b/c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[9.624051682326797e+306] = {"0":969,"893":1.7976931348623157e+308,"1.2187320643314685e+308":"=","1.5144566325729397e+308":49}
return a+b/c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['^N'] = 893
argument5 = null
base_2[7] = {"82":893,"?":"%t@L","Rqcvw":"k","":5.892247906613178e+306,"R)h[":9.960394160280884e+307,"1.5459853588272627e+308":1.5562550035357305e+308,"1.1283165412509334e+308":"X0|","9.458682646591296e+307":4.785060182808313e+307}
return a/b/c*d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2] = ["HvZrh","B!tYFgW","bu","l","F","`","-e)"]
argument7['a'] = 1.7976931348623157e+308
argument8[1.4250811791542279e+308] = null
return a*b+c+d
};
var base_0 = [714,403,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,403,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,403,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,403,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test813.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)