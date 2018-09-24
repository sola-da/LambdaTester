





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 8.514523679421549e+307
base_0 = "?"
return a-b/c+d
};
var argument2 = null;
var argument3 = [82,403,607];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = "h"
argument5[2] = {"":9.790421570305367e+307,"b":2.613161616275932e+307,"-100":595,"1.0935647459626456e+308":1.5611816162194806e+308}
return a/b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = {"655":"!","714":1.5397575731158556e+308,"843":"","893":1.7976931348623157e+308,"1.1821101285161915e+308":1.733584306154976e+308,"":595,"t":7.074809975712086e+307,"^]^":1.1610261190529179e+308,"Q{":8.993646788714374e+307,"1.103862281022321e+308":1.5734174244186152e+308}
base_2[4][3] = 126
base_2[7] = {"59":4.627416978452731e+307,"823":893,"":"9","1.5273455346198765e+308":"-","cc":"8Fx","3.0677108359300973e+307":"","-1":"W","3.6534633608640605e+307":-1}
return a-b/c+d
};
var argument6 = r_2;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['w'] = 5.468095612076841e+307
base_3[1] = [49,823,49,-1]
return a*b/c+d
};
var argument9 = true;
var base_0 = [213,100,714,823]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,100,714,823]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,100,714,823]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,100,714,823]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test60.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)