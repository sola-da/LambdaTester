





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = {"823":1.3673355398607289e+308,"1.4356856892422103e+308":1.7976931348623157e+308,"1.481498935561455e+308":"F","":"","8.855044098989515e+307":1.666118265153616e+308,"5.974748738797892e+307":25,"2.2257451043973034e+307":""}
return a+b-c-d
};
var argument2 = r_0;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = null
argument4[0] = [25,"*",705]
return a+b/c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = null
return a/b+c/d
};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[5] = {"893":"","1.3141472674010739e+308":126,"3.29963063321215e+307":"Vz","J":"W","8.216483178935703e+307":"Ay@","":4.569733109243607e+306}
return a*b+c*d
};
var argument9 = {"655":1.5125572232289595e+308,"9.090103295122995e+307":"","7.962939126451387e+307":1.3376560428504433e+308,"1.7909913073671624e+308":1.5823749896730273e+308,"8.328829717023045e+307":"*_n"};
var argument10 = {"0":82,"59":1.3122648183075263e+308,"705":1.7976931348623157e+308,"969":49,"":1.221700182574524e+308,"1.5564338992922785e+308":"&+Q1NJ ","n":969};
var base_0 = [122,"V"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"V"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"V"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"V"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test823.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)