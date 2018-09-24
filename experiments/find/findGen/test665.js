





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = false
argument3[783] = 7.017517328969892e+306
return a*b-c
};
var argument2 = null;
var argument3 = "*";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = null
argument5[5] = true
argument6[4] = [1.7976931348623157e+308,403,25,49,618,25,-1,213]
return a-b-c
};
var argument5 = r_0;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][4] = 49
argument6 = {"607":1.0249373245685668e+308,"":"",")y":618,"1.3569266439525626e+308":""}
argument7[3.7668525981726295e+307] = 242
return a-b*c
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"25":"","":1.446599587843303e+308,"1.653879630867753e+308":"y","q":607}
argument10[3][6] = 2.2363712180826308e+306
base_3[1] = true
return a+b*c
};
var argument10 = r_2;
var argument11 = 100;
var base_0 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,714,1.7976931348623157e+308,242,1.7976931348623157e+308,5e-324,126,82]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)