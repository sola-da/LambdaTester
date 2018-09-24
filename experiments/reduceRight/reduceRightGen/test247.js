





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.738403780925446e+308] = 122
base_0[4] = {"213":"","893":-1,"5.513790239932847e+307":2.994369492361557e+306,"":"A","1.7976931348623157e+308":"","2.1687434807895552e+307":1.5135020132745365e+308}
return a/b+c-d
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"595":242,"783":8.88835657082162e+307,"":8.304990823822094e+307,"X(":4.098696532416763e+307,"FN":655,"1.6540918036605852e+308":""}
argument6[3] = ""
return a*b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = ""
argument6['K'] = 157
argument5[0] = ["[W-","|","F","_","q"]
return a/b+c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = ""
argument6[0] = [242,705,-100,59,100,1.7976931348623157e+308,403,823,595]
return a+b+c-d
};
var argument7 = null;
var base_0 = [59,460,"<T<F","D",714,-100,"11"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,460,"<T<F","D",714,-100,"11"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,460,"<T<F","D",714,-100,"11"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,460,"<T<F","D",714,-100,"11"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test247.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)