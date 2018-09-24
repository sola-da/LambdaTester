





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[0] = ""
argument3[3] = 1.7976931348623157e+308
return a+b-c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.5887552427096746e+308] = "L"
return a-b*c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1][4] = 1.3677095464515533e+308
base_2[6][2] = ["<O","wi","w7TJ","JT|w","7P","N"]
argument4[705] = {"893":126}
return a+b*c/d
};
var argument4 = "";
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = true
argument7[3.286160553564105e+307] = ["}%y","Z",":","K","o","#"]
return a+b*c/d
};
var base_0 = [-100,-100,122,969,403,595,969]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,-100,122,969,403,595,969]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,-100,122,969,403,595,969]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,-100,122,969,403,595,969]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test724.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)