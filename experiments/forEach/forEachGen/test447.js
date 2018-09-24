





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = {"595":"","783":9.246442055415896e+307,"823":"","K+":403,"R":"","vk2":"","8.05235215815219e+307":655,"":6.952588833555404e+307,"2.1947799104316654e+305":1.7976931348623157e+308}
return a+b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = {"CB":5.394221473753199e+306,"":"O"}
argument5 = 403
argument4[1.3130321063336282e+308] = 6.706702982275953e+307
return a*b-c
};
var argument4 = null;
var argument5 = [607,655,460,122,460,59,1.7976931348623157e+308,126];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = {}
return a+b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][8.05235215815219e+307] = ""
base_3[1][1] = "0"
base_3[3][1.3434821406183095e+308] = null
return a*b/c
};
var base_0 = [1.7976931348623157e+308,714,714,49,25,59,655,893,655,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,714,714,49,25,59,655,893,655,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,714,714,49,25,59,655,893,655,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,714,714,49,25,59,655,893,655,843]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test447.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)