





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = 1.1596552363119872e+308
argument2[8.575765443877852e+307] = {"8":122,"618":1.7976931348623157e+308,"969":"b","IR":"q","1.131579817145681e+308":"","1.562766868319593e+308":-100}
base_0[7] = false
return a/b+c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6][2] = [655,969,-1,403,0,100,714,969,714]
base_1[2] = false
return a+b*c/d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = {"1.4425373051354813e+308":1.7976931348623157e+308,"1.610966140466973e+308":627,"1.391818677706281e+308":"E","":"","x":893,"Yx2zw>IWn":"6y","3.3021577424999277e+307":893,"1.6594802392653563e+308":"8"}
return a-b-c-d
};
var argument4 = true;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][2.819898637310108e+307] = ""
argument7['v'] = null
argument7[0] = {"82":5e-324,"":"","1.7976931348623157e+308":-1,"1.1841138505739727e+308":969,"1.360630230240399e+308":"A-"}
return a*b*c*d
};
var argument7 = [595];
var base_0 = ["o[","5","fvq","s","5","o","c","T","t"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["o[","5","fvq","s","5","o","c","T","t"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o[","5","fvq","s","5","o","c","T","t"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["o[","5","fvq","s","5","o","c","T","t"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test320.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)