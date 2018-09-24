





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = {"213":"","655":"","":100,"m":"","1.1605652677256542e+308":""}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 627
base_1[8] = {"122":5.850996001464621e+307,"607":"r5","7.228006147286008e+306":"0","":"","1.750243265735646e+308":8.806446742627604e+307,"1.3108041102388941e+308":59,"Czg":100}
return a-b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][7] = true
argument4['sJRZP'] = "n"
argument4[3] = 714
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 6.875091764470959e+307
base_3[9] = 7.973703885895275e+306
argument6[2.4183178393969103e+306] = {"49":1.3199518492658684e+308,"":6.416284580353275e+307,"V":403,"1.5822670313326497e+308":"","5.27190265530521e+307":1.1300201946896594e+308,"Xc":"qL","q":1.6896214026396087e+308,"1.1263332910886178e+308":1.2975605381860708e+308}
return a-b-c
};
var argument5 = r_3;
var base_0 = [100,893]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,893]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,893]
var r_2= undefined
try {
r_2 = base_2.every(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,893]
var r_3= undefined
try {
r_3 = base_3.every(argument4,argument5)
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
require("fs").writeFileSync("./experiments/every/everyGen/test363.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)