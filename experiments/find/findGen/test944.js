





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 242
argument3['^h'] = {}
argument3[5] = {"893":"","I%":1.379227695036224e+308,"":9.049312940323967e+307,"1.2184689402039622e+308":""}
return a+b*c
};
var argument2 = "t@";
var argument3 = {"0":7.220941261933386e+307,"1.3982329390490098e+308":1.370115961923074e+308,"":""};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = 655
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[893] = null
base_2[1][7] = true
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = [460,1.7976931348623157e+308,"by0s","U7F"]
base_3[1][6] = {"0":2.189447710339186e+307,"893":4.1344783942394097e+307,"VL":7.280407461847225e+307,"6.72248050990141e+307":"Pp","1.3062595146323715e+308":714,"":403,";":0,"1.6718606159608172e+308":100}
return a/b/c
};
var base_0 = ["N","-;",82,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","-;",82,213]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","-;",82,213]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","-;",82,213]
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
require("fs").writeFileSync("./experiments/find/findGen/test944.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)