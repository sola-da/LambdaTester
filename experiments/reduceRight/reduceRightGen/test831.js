





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.108492555774111e+307] = false
argument2['w'] = null
argument3 = {"7":655,"49":"6FID]Lo","242":969,"627":"e","":213,"1.3107411762195287e+308":"","Y0":"k","1.4331339990661012e+308":1.7415462120170185e+308,"1.1107299106965856e+308":"Jg^","n":82}
return a-b-c*d
};
var argument2 = true;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = false
return a-b+c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = [714]
argument6[8] = 1.578310791417463e+308
base_2[5] = [82,0,213,49,823,-1,-100,122]
return a+b*c*d
};
var argument5 = 157;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = true
argument8['K'] = [49,607,0,705,-100,823,100,-100,49,25]
return a+b*c/d
};
var argument8 = true;
var base_0 = [1.7976931348623157e+308,705,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,705,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,705,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,705,49]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test831.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)