





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = null
return a*b*c/d
};
var argument2 = 893;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"783":6.308864418227777e+306,"7.62241784439409e+306":8.964412382354262e+307,"":1.7352872966023471e+308,"7.758874326316483e+307":""}
argument5[2] = "X=`"
argument6[6] = ""
return a+b/c-d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = {"1$":6.209875132005905e+307,"3.883690897742399e+306":1.6213149743565212e+308,"f-d":"","":969,"9.007564522368696e+307":157,"1.4019418848198667e+308":893,"6.442801038313787e+307":1.7172931184452631e+308}
argument8[3] = 714
return a+b-c-d
};
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2] = "6"
argument8[0] = true
argument9['^N'] = {"705":"s"}
return a-b+c/d
};
var argument9 = "";
var base_0 = [59,714,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,714,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,714,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,714,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test250.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)