





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2][2.819898637310108e+307] = [100,49]
return a-b+c-d
};
var argument2 = "vG";
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = false
base_1[0][0] = 403
return a+b*c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['T'] = {"25":1.7476624403317373e+308,"49":49,"":"","X":"Oi+","1.1165163202410832e+308":1.635500541066711e+306,"1.2910446072564264e+308":"v;","1.340529164913688e+308":""}
argument6[1.4250811791542279e+308] = [100,59,1.7976931348623157e+308,403,213,122,655]
base_2[2][2.819898637310108e+307] = {"893":"$","":2.8071189861841354e+307,"1.4237212601690433e+308":"","E2":"","J":"","1.4713191778029917e+308":"","c ":"]t","1.0692493945149647e+308":"","-100":7.974818613481745e+307,"DQ":59}
return a*b/c-d
};
var argument5 = [213,0,"^dp","X&:",242,403,"|"];
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = ["pl","Wo,V",","]
return a/b/c/d
};
var argument8 = r_1;
var argument9 = r_1;
var base_0 = ["j","M","a","vd","B"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["j","M","a","vd","B"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["j","M","a","vd","B"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["j","M","a","vd","B"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test713.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)