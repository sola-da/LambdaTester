





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6] = null
return a+b*c*d
};
var argument2 = null;
var argument3 = 157;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = null
base_1[2][2.819898637310108e+307] = 59
argument6['T'] = true
return a-b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = null
argument7[6] = null
argument6[3.8120440085202614e+307] = ";m"
return a-b*c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][3] = ["V","D","kB8"]
argument7['a'] = true
return a+b/c/d
};
var base_0 = [607,213,460,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,213,460,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,213,460,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,213,460,595]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test702.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)