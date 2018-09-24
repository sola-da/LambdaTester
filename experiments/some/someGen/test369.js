





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = 1.5031040544945862e+307
base_0[3][6] = {"":1.7976931348623157e+308}
base_0[4][8] = false
return a*b+c
};
var argument2 = {"Y":"","1.1858040231296688e+308":"VYWb","1.3732476243411082e+308":"&","r":655};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[705] = ""
argument5[2.249941463060761e+307] = {"JP":1.3182229800068151e+308}
base_1[2] = {"1.7970476788607645e+308":")LW","":""}
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = ""
argument6['j'] = {"59":5e-324,"655":2.1907688447907347e+307,"-1":"_","":242,"2.486112297143145e+307":1.3501478214930876e+308,"6.577302108571356e+307":""}
argument6[4.224481734419934e+307] = true
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[618] = ""
base_3[2] = {"":5.246043698735998e+306,"gaj^{^$":1.275527107128614e+308,"-1":714}
return a-b/c
};
var argument7 = true;
var argument8 = {"49":"","823":1.0780557628008789e+308,"893":1.686342398136121e+308,"":"","3.7596585316020823e+307":"","hV":"","1.2655361311707028e+308":4.738224593074064e+307};
var base_0 = [595,969,49,460,893,618,1.7976931348623157e+308,607,25,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,969,49,460,893,618,1.7976931348623157e+308,607,25,893]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,969,49,460,893,618,1.7976931348623157e+308,607,25,893]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,969,49,460,893,618,1.7976931348623157e+308,607,25,893]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test369.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)