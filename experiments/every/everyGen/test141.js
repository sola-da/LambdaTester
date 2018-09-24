





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"3.889705337111702e+307":9.28560738541556e+307,">md>":"2","77(":3.2812906779993377e+307,"4%":1.6256431334648464e+308,"":"- ","9.977468980441944e+307":"","3.446900767455022e+307":7.244374868796811e+307,"vy":"&"}
base_0[8] = [59,-100,157,0,126,893,25]
return a*b-c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = [783,893,893,0,969,714,843,82,460]
base_1[0][2] = 595
base_1[8] = 403
return a+b+c
};
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = false
base_2[0][2] = ["x","<","80)Q|"]
base_2[5] = null
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3.3156198695370476e+307] = true
argument8 = {"5":"","893":"","":2.407688456919495e+307,"5.874605656671217e+307":"6","1.7976931348623157e+308":"E","1.2870422650913905e+308":"","1.3649788945551594e+308":1.1756931231874504e+308,"{S":"","3.3895593153124537e+307":7.350834268796721e+307,"7.811234408455741e+307":""}
argument7[403] = {"242":82,"714":"","Je":"6","":"E","3.566257430880448e+306":893,"1.6744996585384994e+308":213,"1.3681216781418606e+308":""}
return a*b*c
};
var argument7 = true;
var base_0 = [969,0,714]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,0,714]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,0,714]
var r_2= undefined
try {
r_2 = base_2.every(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,0,714]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7)
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
require("fs").writeFileSync("./experiments/every/everyGen/test141.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)