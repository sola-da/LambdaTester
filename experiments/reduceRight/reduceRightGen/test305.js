





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['K'] = [25,"p",25,-1,"Hq&","&"]
argument3[1] = 4.2002581187873014e+307
return a+b*c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = "b"
base_1[0] = true
base_1[1] = {"213":"","607":3.6212773637908953e+307,",[":"UB","-":"1nH",";":"x8muoi","":"+5i+XO","1.3081791160187185e+308":"","BNw":213}
return a*b/c*d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"59":823,"242":"","893":705,"w":"","":""}
return a+b-c/d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['^N'] = ""
argument5[3] = [1.7976931348623157e+308,82,969]
return a-b-c+d
};
var argument5 = "";
var argument6 = null;
var base_0 = ["I","kx","L",403,"K^M?",705,714,893,627]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","kx","L",403,"K^M?",705,714,893,627]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","kx","L",403,"K^M?",705,714,893,627]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","kx","L",403,"K^M?",705,714,893,627]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)