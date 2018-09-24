





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][6] = false
argument2[4.960033715165713e+307] = [126,122,122,893,714,460]
return a-b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = null
argument4[6] = ""
return a+b-c
};
var argument3 = ["od",";","[^f",")","?M"];
var argument4 = ",[y";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][6] = false
argument6 = null
argument7[4] = {"25":"%c","59":157,"618":"","":242,"8.760786032019218e+307":"0upkF&7C","6.643325357118675e+306":1.5814160488809816e+308,"1.7336579641084133e+308":"","9.515810934508588e+307":1.2987999632258598e+308,"}80z":2.0794108875517698e+307}
return a-b-c
};
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = [460,"d"]
base_3 = 1.6718422806610673e+308
return a/b-c
};
var argument8 = null;
var base_0 = [82,"@",100,-1,705,"prH",25]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"@",100,-1,705,"prH",25]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"@",100,-1,705,"prH",25]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"@",100,-1,705,"prH",25]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test455.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)