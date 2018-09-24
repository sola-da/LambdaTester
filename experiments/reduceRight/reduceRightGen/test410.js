





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = null
base_0[6] = [705,969,122,607,783,1.7976931348623157e+308,893,59,126,122]
argument2[3.8120440085202614e+307] = [823,0,893,0,213]
return a*b+c-d
};
var argument2 = {"714":1.6765868423149165e+308,"1.382034702622121e+308":3.0943104169474083e+307,"1.0864805633994184e+308":1.1363402760518731e+308};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = 3.6025092463369327e+307
argument4['v'] = {"823":607,"M]=C":"@I","":"","1.748654806512541e+308":1.2638472901528557e+308,"^":1.2419647218058332e+308,">Y":4.646389803532883e+307,"6.3472136096316e+307":627,"ui":"","mk":"_","1.175996353978334e+308":""}
return a+b*c-d
};
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = {"0":"7X","157":"","893":1.3567677926049734e+308,"umMS#":823,"":"","5e-324":969}
argument7[2] = 1.2574528198601407e+308
argument7[3] = 1.2851043158939211e+308
return a/b*c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['L'] = {"157":122,"893":1.223517670390466e+308,"z9":"","":-1,"1.1277159219282488e+308":843,"M":"","9.081589423956008e+307":1.2218470977691997e+308}
return a/b*c+d
};
var argument7 = "";
var base_0 = [460,"@X",-100,122,705,714,59,893]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"@X",-100,122,705,714,59,893]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"@X",-100,122,705,714,59,893]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"@X",-100,122,705,714,59,893]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)