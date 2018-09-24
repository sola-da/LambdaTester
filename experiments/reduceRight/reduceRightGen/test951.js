





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = false
argument2['^N'] = false
argument3 = ["$","**,",655,627,"&",-100,"XY4",59,618,"DgX!`:VM"]
return a-b*c-d
};
var argument2 = ["9","(mZo@","s","Q","&"];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['y'] = 1.5716516014621414e+308
base_1[0][3] = false
return a+b/c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = null
return a-b-c/d
};
var argument5 = r_2;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = ["L",0,"74",705,823,893]
base_3[7] = false
return a*b+c*d
};
var base_0 = ["Hjwkk","N9E","V","kK","YK`iT","s","j","cZw0","W1"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Hjwkk","N9E","V","kK","YK`iT","s","j","cZw0","W1"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Hjwkk","N9E","V","kK","YK`iT","s","j","cZw0","W1"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Hjwkk","N9E","V","kK","YK`iT","s","j","cZw0","W1"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test951.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)