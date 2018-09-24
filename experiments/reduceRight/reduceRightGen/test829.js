





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['T'] = "iPS"
argument2['L'] = ""
base_0 = [705,157]
return a/b+c/d
};
var argument2 = "Fu";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[6] = false
base_1[2][2] = [655,783,49,25,607,595]
return a*b*c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = true
argument5[-1] = {"213":1.3515214767431871e+308,"403":9.224918458858322e+307,"m,uL":"0","1.0901436471052823e+308":"","":969}
base_2[2][2.819898637310108e+307] = {"157":"","460":6.596868061908005e+307,"607":5.355561351596987e+307,"969":4.5413985262419993e+306,"5.654045807579015e+307":"","":"'7v","2.640342075545992e+307":""}
return a+b*c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['a'] = {"157":"","403":49,"s":"","Z4_o":"","7.151422811549586e+307":122}
argument8[-1] = {"Qs":1.2093990014248264e+308,"py":1.2669671680359773e+308,"":"[]c"}
return a*b*c+d
};
var argument7 = r_3;
var argument8 = false;
var base_0 = ["P","as","G(n(k"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P","as","G(n(k"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P","as","G(n(k"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P","as","G(n(k"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test829.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)