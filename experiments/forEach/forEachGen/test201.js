





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[8.748669805137695e+307] = null
argument1[7.92397107964922e+307] = false
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = null
base_1 = {"460":1.248696891836384e+308,"":"","1.7018527294435368e+308":1.6810309921699507e+308,"1.3137948998595314e+308":1.7765705077828418e+308}
argument4[1.4034744228995816e+308] = null
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = null
return a-b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = {"403":"","655":122,"783":7.342422763890615e+307,"1.758836627906837e+308":122,"":122,"EYR":"K"}
argument5 = null
return a+b/c
};
var argument6 = true;
var argument7 = null;
var base_0 = ["4","n","H","^2o","6","4"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["4","n","H","^2o","6","4"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["4","n","H","^2o","6","4"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["4","n","H","^2o","6","4"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test201.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)