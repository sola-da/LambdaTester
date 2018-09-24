





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = true
argument2[9.624051682326797e+306] = {"0":9.894191713901745e+307,"2":"","7":"L","v":25,"":"","1.399194934632814e+308":"%","1.9645483598971603e+307":"",",(":"j","1.7415510564941721e+308":"","1.5650690610989112e+308":""}
return a+b*c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.1207829086460726e+308] = false
base_1[0][2] = [595,607]
return a*b-c+d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = true
return a/b-c-d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['^N'] = [843,595,403,82,627]
argument6[1.5288038039415373e+308] = {"655":"","":"","1.66951117195316e+308":"","1.1846266947484197e+308":893,"1.6665932209592254e+308":5e-324,"6.648481992543165e+307":"RV","f":4.626882492558709e+307,"8.186893870799527e+307":"e","_*t":"A"}
return a/b/c/d
};
var argument6 = null;
var argument7 = r_0;
var base_0 = [82,"!_",-100,0]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"!_",-100,0]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"!_",-100,0]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"!_",-100,0]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test756.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)