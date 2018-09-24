





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = [25,705,100,25,595,122,0,157]
return a-b/c/d
};
var argument2 = null;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['8('] = "j"
base_1[8] = {"49":242,"843":3.50775313451604e+305,"":"K","1.1508981221717804e+307":4.907138319665248e+307,"q9m":595,"(":"K","3.023116731560942e+307":"R@","6.291951990783069e+306":6.84436757783497e+306,"1.1823728225259848e+308":157}
argument4[4] = "G"
return a+b/c*d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = -100
base_2[3] = "x"
base_2[4][3] = true
return a-b-c*d
};
var argument5 = "jy";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = {"Ng":969}
return a/b*c/d
};
var base_0 = ["Ys*yjP","h","gXL","Jx","5","75A","o[","U2"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Ys*yjP","h","gXL","Jx","5","75A","o[","U2"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Ys*yjP","h","gXL","Jx","5","75A","o[","U2"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Ys*yjP","h","gXL","Jx","5","75A","o[","U2"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test115.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)