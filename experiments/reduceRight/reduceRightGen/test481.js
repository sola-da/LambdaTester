





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = 618
base_0[8] = [82,59,714,1.7976931348623157e+308,843,627]
argument2[3.8120440085202614e+307] = [49,82,157,893,403,-100]
return a*b+c*d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['F2nCX>6'] = {"607":2.4677609853034285e+307,"618":"ah","":9.573349314383778e+307,"1.2930047447878162e+308":"","6.56757731088337e+307":607,"1.0359914787697229e+308":"S","S":"[i","1.7976931348623157e+308":1.0763374233698378e+308,"1.148703865208866e+308":"b?X"}
base_1 = "y"
base_1[9] = 893
return a*b-c+d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = ""
argument6[1.4250811791542279e+308] = {"25":1.8359753464849598e+307,"705":3.9941254454980996e+307,"969":3.397799993384767e+307,"":1.0066029503455368e+308,"(":1.2581727009838105e+308}
base_2[2] = false
return a*b/c/d
};
var argument5 = {};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 7.679614742782032e+307
base_3[1][2] = true
return a+b+c+d
};
var argument7 = {"59":1.4801023708803116e+308,"607":"z","6.098955696676638e+307":"","5e-324":969,"a":595,"G:":2.3262972873991687e+307};
var base_0 = [595,893,705,0,242,122,714,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,705,0,242,122,714,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,705,0,242,122,714,714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,705,0,242,122,714,714]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test481.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)