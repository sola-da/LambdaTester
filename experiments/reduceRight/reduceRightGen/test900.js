





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = null
argument2[1.5288038039415373e+308] = ["ZeA","Y","Q","Z","f","Z*(S(zw"]
return a-b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2] = 403
argument4[3] = ["c","`LQ","(","O "]
return a+b+c-d
};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = ""
return a-b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[100] = "3{9"
argument7[1] = [-1,460,242,0,714,0]
return a+b-c-d
};
var argument6 = null;
var argument7 = null;
var base_0 = ["@","G=0","N","U","+<?c","s","2","<|B"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@","G=0","N","U","+<?c","s","2","<|B"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@","G=0","N","U","+<?c","s","2","<|B"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@","G=0","N","U","+<?c","s","2","<|B"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)