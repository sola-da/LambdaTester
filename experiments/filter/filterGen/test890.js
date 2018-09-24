





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.82874486699946e+307] = "5"
argument3['n,5s@s'] = "S"
base_0[3][1.3434821406183095e+308] = {"5":"","213":1.3991507894521056e+308,"":"","9#":1.7976931348623157e+308,"M":"gno","1.196238466271667e+308":"","7.139518808789557e+307":6.176753613729395e+307,"1.1167787557308546e+308":"7","g-64D":"nFt"}
return a-b+c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3.7154103611117224e+307] = {"618":"5","":126,"`":1.781468603783732e+307,"!sy":100,"1.5351563376497e+308":1.5800468570951112e+308}
argument6[4] = 9.194281198769747e+307
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['K'] = null
argument7[2] = [783,618,627,126,595]
return a/b*c
};
var argument6 = null;
var argument7 = [714,213,714,122,157,823,1.7976931348623157e+308];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = {"49":-1,"d#":"eW"}
return a+b+c
};
var base_0 = ["D","p|z","`","x","1","f&S","#FE_Q4Y","D","G"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D","p|z","`","x","1","f&S","#FE_Q4Y","D","G"]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test890.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)