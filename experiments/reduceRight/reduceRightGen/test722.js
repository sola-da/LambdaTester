





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4][3] = 1.732048572306444e+308
argument3[5] = {"0":1.8801553236862166e+307,"gA-":"s'"}
argument3[5] = [";}Yru",">{"]
return a/b-c+d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = null
argument4[1.921533274132203e+307] = 6.39996571204841e+307
return a*b/c+d
};
var argument4 = "E";
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8.575765443877852e+307] = null
argument7[1.738403780925446e+308] = ["z","X@>XL","*s-g","L","wE","P"]
return a/b*c+d
};
var argument7 = null;
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[-1] = ""
argument11 = ""
base_3[0][3] = null
return a*b-c-d
};
var argument10 = {"122":"","627":"","k":"","Smy;":"",")":-100,"Pa-<":"a+","5.1822094893782033e+306":"V)","7Xt!xi":"K7","u":"","6.538902810916834e+307":4.4675264780604195e+307};
var base_0 = [157,823,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,823,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,823,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,823,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test722.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)