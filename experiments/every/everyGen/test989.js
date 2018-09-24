





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[2.4183178393969103e+306] = 823
argument2[82] = {"59":"","655":"","823":"","969":1.7976931348623157e+308,"1.7976931348623157e+308":607,"":1.2575573146368066e+308,"_K":1.7976931348623157e+308,"9.59099712881109e+307":"","N?":"CmE","4.764313014857169e+307":823}
base_0[1][5] = false
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['g]'] = ["X","hm",403,"t"]
argument3[1] = null
base_1[0][2] = "#VA"
return a+b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4.960033715165713e+307] = 1.5680141871919518e+308
argument4[1.3599216339661573e+308] = ""
return a*b-c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[4] = {"0":"","25":"F","595":"{+G1|","893":-100,"3k":823,"5.716074914486456e+307":893,"":"","1.1420679034003236e+308":""}
argument6['io'] = [242,969,-1,618,705]
base_3['length'] = [607,655,82,-1,893]
return a-b-c
};
var argument6 = r_0;
var argument7 = {};
var base_0 = [627,25,627]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [627,25,627]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,25,627]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [627,25,627]
var r_3= undefined
try {
r_3 = base_3.every(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test989.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)