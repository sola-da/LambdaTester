





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {";":1.5332033579293083e+308,"`Z":"l","":"","-100":4.443893398395401e+307,"7.204581588180083e+307":2.245255275509437e+307,"b":"U","1.7841457608876983e+308":"!WD","OU1":126}
argument3[3] = ""
return a-b*c+d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[2] = ""
return a/b+c/d
};
var argument4 = r_1;
var argument5 = {"893":7.235916197354828e+306,"":2.3064266215207164e+307};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][2.819898637310108e+307] = ""
argument7['{S'] = true
return a+b+c*d
};
var argument7 = 1.6238456012936506e+308;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['T'] = {"100":1.256759247908029e+308,"126":"","969":"","4.74703659468587e+307":3.4383241475042913e+306,"C":"","":"W","*":823,"5.864195022333273e+306":8.091430950899488e+307}
argument9['{S'] = {"595":1.3387581500182929e+308,"627":";","m#H0":"yu","Zx":893,",":"","":"Uj2"}
return a/b+c+d
};
var argument9 = r_1;
var argument10 = r_2;
var base_0 = ["D6G","8g>l","G","v","y][","U","q","q","g?"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D6G","8g>l","G","v","y][","U","q","q","g?"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D6G","8g>l","G","v","y][","U","q","q","g?"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D6G","8g>l","G","v","y][","U","q","q","g?"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test337.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)