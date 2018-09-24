





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['AA@'] = "{"
argument3[7] = "UQ"
argument3[0] = {"460":"","":"","1.7976931348623157e+308":82,"2.5036110006382965e+307":"","2.548295452708152e+307":1.3143179543026284e+308}
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['b'] = 4.1974552438703085e+307
argument4 = [100,126,49,893]
argument4[100] = null
return a-b*c
};
var argument3 = true;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][2] = 655
return a*b*c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = null
argument8['!j'] = true
base_3[0][2] = null
return a*b*c
};
var argument7 = r_1;
var argument8 = null;
var base_0 = ["-","QK","1z","XHC","Uib0T&l","*@","{M","s{","I","N"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-","QK","1z","XHC","Uib0T&l","*@","{M","s{","I","N"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-","QK","1z","XHC","Uib0T&l","*@","{M","s{","I","N"]
var r_2= undefined
try {
r_2 = base_2.find(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-","QK","1z","XHC","Uib0T&l","*@","{M","s{","I","N"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)