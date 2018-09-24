





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = [893,618]
argument2[627] = null
return a*b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[460] = [126,-100,1.7976931348623157e+308,25,100,595,82,843]
return a/b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][7] = null
base_2[4] = 1.6661264878100317e+307
base_2[1] = {"893":7.970713238389835e+307,"-1":0,"S;g":618,"":823,"9.064539944373592e+307":"","8.594402437432404e+307":157,"]":1.5355982435705995e+308,">'i":6.635500126601379e+307,"7.449915336269174e+307":""}
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[460] = "p"
base_3[3] = 1.4807936040824143e+307
base_3[1][2] = {"59":705,"403":655,"1.0530518274706632e+308":"9x","":"`!"}
return a/b-c
};
var base_0 = [893,1.7976931348623157e+308,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,1.7976931348623157e+308,893]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,1.7976931348623157e+308,893]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,1.7976931348623157e+308,893]
var r_3= undefined
try {
r_3 = base_3.find(argument5)
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
require("fs").writeFileSync("./experiments/find/findGen/test14.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)