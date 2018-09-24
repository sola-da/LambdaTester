





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"1.1233336169851681e+308":"","":122,"1.3869666958806344e+308":"f[","O":"%x","1.3728652255485612e+308":""}
base_0[0][0] = -1
argument2[3] = {"49":4.275756346154033e+307,"":1.7976931348623157e+308,"9.366947936551063e+307":595,"y":""}
return a/b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = 1.2316649483899252e+308
argument2[0] = ""
return a/b-c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
argument4[3] = ["9","i",595,"n","%","}o,","V",126,1.7976931348623157e+308]
argument4[8.108492555774111e+307] = [0,82,-1,"i`","J",595,"z"]
return a-b-c+d
};
var argument4 = ["K","d",":(","A","=i","hR"];
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][3] = false
argument7[1] = false
return a-b/c*d
};
var base_0 = [59,783,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,783,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,783,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,783,126]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test759.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)