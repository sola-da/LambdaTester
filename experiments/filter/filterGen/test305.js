





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = null
base_0[2] = null
return a-b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['!cck7Mm'] = {"82":"vu","460":7.139402546658857e+307,"":1.325497736789858e+307,"L":"F","q)^+h0X":"","cD":"FQ","3.495926948561739e+307":783}
return a/b/c
};
var argument3 = {"460":5e-324,"":-100,"c":1.4549736598903586e+307,"FQ":"K"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = false
base_2[4][7] = [705,714,100,82,714]
argument6[5] = ""
return a+b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][2] = false
base_3[4] = true
return a/b-c
};
var argument7 = {"25":1.6383231046336024e+308,"3.617147928317779e+307":8.301525959199035e+307,"5e-324":893,"PS":",","1.374832439334367e+307":"","6.403185514892485e+307":8.546485767235842e+306};
var argument8 = 8.337760576185373e+307;
var base_0 = [714,157,122,-1,-100,607,213]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,157,122,-1,-100,607,213]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test305.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)