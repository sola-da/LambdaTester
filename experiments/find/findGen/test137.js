





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[100] = 607
base_0[9] = [783,893,893,0,969,714,843,82,460]
return a+b-c
};
var argument2 = 595;
var argument3 = 403;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = [705,893,893]
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = -1
return a-b/c
};
var argument6 = true;
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][1] = false
argument10[460] = true
base_3[9] = {"5":"","893":"","":2.407688456919495e+307,"5.874605656671217e+307":"6","1.7976931348623157e+308":"E","1.2870422650913905e+308":"","1.3649788945551594e+308":1.1756931231874504e+308,"{S":"","3.3895593153124537e+307":7.350834268796721e+307,"7.811234408455741e+307":""}
return a*b/c
};
var argument9 = {"242":82,"714":"","Je":"6","":"E","3.566257430880448e+306":893,"1.6744996585384994e+308":213,"1.3681216781418606e+308":""};
var argument10 = r_0;
var base_0 = ["m`","VGDg","o","Jvy","Ls","c]A"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m`","VGDg","o","Jvy","Ls","c]A"]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m`","VGDg","o","Jvy","Ls","c]A"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m`","VGDg","o","Jvy","Ls","c]A"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test137.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)