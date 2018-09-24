





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = [-1,893,403]
argument3[-1] = {"157":969,"843":"KU","2.947014935337902e+307":49,"p2":705,"q":"QRc"}
return a*b-c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.4250811791542279e+308] = 8.477957899998895e+307
argument4[-1] = false
argument4['UU'] = {"49":"fn","+":"7"}
return a-b/c/d
};
var argument3 = null;
var argument4 = "";
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[8.575765443877852e+307] = false
argument7['8('] = null
return a-b*c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = true
return a-b*c+d
};
var argument7 = [823,242,-1,403,893];
var argument8 = ["Og","sl","gF","lk0","R",")"];
var base_0 = [460,"pJ[JY",-100,"y","hz?YL","2",823,"E"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,"pJ[JY",-100,"y","hz?YL","2",823,"E"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,"pJ[JY",-100,"y","hz?YL","2",823,"E"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,"pJ[JY",-100,"y","hz?YL","2",823,"E"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)