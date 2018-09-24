





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"100":893,"607":"","1.5427629552987087e+308":122}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {"595":"(1",")":100,"":1.2536845720303016e+308,"2.666868613506383e+307":714,"1.7976931348623157e+308":"Q"}
argument4[5] = null
argument3[3.7668525981726295e+307] = true
return a*b*c
};
var argument3 = [403,607,627,969,157,1.7976931348623157e+308,655,823,100];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.7668525981726295e+307] = [213,823,"-"]
argument6[1] = 893
return a-b/c
};
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[242] = 1.032663782990927e+308
base_3[6][4] = true
argument7[3.7668525981726295e+307] = ""
return a-b*c
};
var base_0 = [618,242,783,893,25,460,100,1.7976931348623157e+308,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,242,783,893,25,460,100,1.7976931348623157e+308,893]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,242,783,893,25,460,100,1.7976931348623157e+308,893]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,242,783,893,25,460,100,1.7976931348623157e+308,893]
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
require("fs").writeFileSync("./experiments/find/findGen/test262.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)