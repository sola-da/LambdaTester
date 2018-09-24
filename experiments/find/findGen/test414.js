





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[242] = [-1,-1,25,618,157,213,126,843,0,49]
base_0[0] = {"49":705,"":"C","@0":"","O":3.3547422629518304e+307,"1.737465739675081e+308":2.437557447989686e+307,"K9":"$`if:*","5.919169425984781e+307":5.161552945539336e+307,"2.3306132123697307e+307":""}
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3][1] = {"0":893,"59":1.3737798833791212e+308,"627":595,"823":"b","io":"","*":"l","I7l`":"Q|","2.892563297668263e+307":"","(K,mz":2.7105034217172984e+307,"":"PG5"}
argument4[4.953791384496108e+307] = null
argument2[5] = "Ug=<Y"
return a/b*c
};
var argument3 = {"(V":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3.377960715099946e+307] = {"":"","Q":9.962450969920737e+307}
base_2[1][0] = false
argument6[969] = 714
return a+b/c
};
var argument5 = 8.941831555179654e+306;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = true
return a/b/c
};
var base_0 = ["?I@lt","<"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?I@lt","<"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?I@lt","<"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?I@lt","<"]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test414.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)