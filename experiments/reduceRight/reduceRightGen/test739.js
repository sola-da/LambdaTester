





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][3] = {"0":"x7","":403}
return a/b/c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = null
return a+b+c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[655] = null
argument5[3.8120440085202614e+307] = 2.62139678797108e+307
base_2[5] = 823
return a+b*c+d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = 1.2898153735291079e+308
base_3[4][1.7976931348623157e+308] = ""
argument7[5] = [655,627,705]
return a+b-c/d
};
var base_0 = [714,714,126,242,607,595,655,49,893,242]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,714,126,242,607,595,655,49,893,242]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,714,126,242,607,595,655,49,893,242]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,714,126,242,607,595,655,49,893,242]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test739.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)