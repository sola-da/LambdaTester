





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = ""
base_0[1] = {"59":4.513295104551401e+307,"893":8.207248014735379e+307,"":"68M7","1.3814779480608363e+308":4.176186536135523e+307,"j1":1.276088902711043e+308,"7!":"P","u":-100}
return a*b/c+d
};
var argument2 = 242;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = {"25":"","100":"","595":25,"1.8907871882979918e+307":25,"":"66","7.599179652518467e+307":403,"1.2840008892422456e+308":1.426061396655673e+308,"Pi":1.5389120886538473e+307,"1.3516559457931316e+308":213,"1.082664608536885e+308":100}
base_1[3] = 714
return a+b+c/d
};
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = {"893":1.7053142137069174e+308,"1.105819147433422e+308":1.5420456327115867e+308,"`":"","3.833605058530322e+306":"","":"&","(":"G","3.1708111789531714e+306":7.238389487403282e+307}
argument6[9] = [893,82,5e-324,403,705,213]
argument8[2] = {"49":25,"Y":-1,"aG":460,"b|":"","U5n":"","g":126,"Di":"P"}
return a*b-c+d
};
var argument7 = r_2;
var argument8 = [714,843,126,893,969,157,157];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = [823,595,59,823,655,82,714]
return a+b*c+d
};
var base_0 = ["Z?ML",25,"b?",1.7976931348623157e+308,"d",460,969]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Z?ML",25,"b?",1.7976931348623157e+308,"d",460,969]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test304.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)