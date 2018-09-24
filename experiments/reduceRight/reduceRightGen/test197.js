





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[6] = false
argument2[2] = 783
return a/b-c*d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = {"655":"","7.284749047804906e+307":-100,"":"","1.055827169763908e+308":1.7490476485416068e+308}
argument6[4] = 1.1697661047198294e+308
argument6[1] = {"618":6.265309145796475e+307,"1.2411167154005379e+307":"","1.142136880189398e+308":1.8658061753952827e+307,"":403,"oM`":5.727395412153241e+307,"9.031306469414775e+307":"","1.8070569095600382e+307":"","J":"nK"}
return a*b+c-d
};
var argument5 = null;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = 9.644084301966305e+307
return a-b/c*d
};
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = [893,122]
base_3[3] = 100
base_3[6][2] = {"1.1109768498031239e+308":403}
return a/b-c+d
};
var argument10 = true;
var base_0 = [783,49]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,49]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,49]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,49]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)