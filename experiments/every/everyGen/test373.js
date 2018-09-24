





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
argument3[2] = null
return a-b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][7] = 607
argument3['sJRZP'] = {"59":5e-324,"655":2.1907688447907347e+307,"-1":"_","":242,"2.486112297143145e+307":1.3501478214930876e+308,"6.577302108571356e+307":""}
return a+b*c
};
var argument3 = true;
var argument4 = true;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = [122,"Hgaj^{^$","&"]
base_2[8] = false
base_2[1][4] = null
return a/b-c
};
var argument6 = {"49":"","823":1.0780557628008789e+308,"893":1.686342398136121e+308,"":"","3.7596585316020823e+307":"","hV":"","1.2655361311707028e+308":4.738224593074064e+307};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = null
base_3[5] = 460
return a-b/c
};
var argument8 = true;
var argument9 = null;
var base_0 = [403,969,122,"W9v!",714,627,"S","GJP","oh"]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,969,122,"W9v!",714,627,"S","GJP","oh"]
var r_1= undefined
try {
r_1 = base_1.every(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,969,122,"W9v!",714,627,"S","GJP","oh"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,969,122,"W9v!",714,627,"S","GJP","oh"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test373.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)