





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = "mj"
argument2[1.7847438319683965e+308] = 242
argument2[5] = {"213":4.3869324097781565e+306,"":1.7976931348623157e+308}
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = null
return a/b/c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1]['!cck7Mm'] = 783
argument5[6] = [100,783,655]
base_2[3][0] = {"100":460,"4P":"3","Z":5.316497641447669e+307,"=":3.038842169452053e+307,"":"","vx":"","4.229481820374542e+307":4.642918864640885e+307,"@`D":"|zz"}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = {"705":"","2.40688577769932e+307":823,"Eh":7.657106213318868e+307,"1.7976931348623157e+308":"Q"}
return a*b*c
};
var argument5 = 1.4705479351274674e+308;
var argument6 = 1.7976931348623157e+308;
var base_0 = [49,213,-100,783,59,242,-1,100,627,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,213,-100,783,59,242,-1,100,627,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,213,-100,783,59,242,-1,100,627,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,213,-100,783,59,242,-1,100,627,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test789.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)