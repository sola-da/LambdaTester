





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = "2"
return a/b+c-d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8.575765443877852e+307] = ""
base_1[4] = 2.370917240642088e+307
return a-b*c+d
};
var argument4 = ["Dyz","o7","I"];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = true
argument7['8('] = ["^c","<4@","vP","d","=","7","e","Z:h","I","v3"]
argument6[3] = 403
return a*b/c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = false
base_3[2][2.819898637310108e+307] = "x_"
base_3[1][2] = {"823":122,"":1.0296043311488005e+308,"s":122,"5.037941848472225e+307":"`W","U":"<`"}
return a-b*c*d
};
var argument7 = {"1.3968385313773494e+308":"f","":59};
var argument8 = null;
var base_0 = [403,893,969,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,969,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,969,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893,969,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test936.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)