





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = null
argument2[25] = null
argument3[2] = ["$","{","j",-100,783,403]
return a*b-c-d
};
var argument2 = true;
var argument3 = "?";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = true
argument6[-1] = 607
return a+b+c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['{S'] = null
argument6[1.738403780925446e+308] = {"82":"'","":"JD","?":"","L4":"+x#","r":"","#":-100,"y":242,"TsW":"","1.5537800207730554e+308":1.4467173581490687e+308}
return a+b+c-d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = null
base_3[3] = {"82":6.347285173192741e+306,"126":"w","618":"","893":"","969":1.739753060127196e+308,"":4.500160311563022e+307,"1.6501253252992801e+307":"B","1.7455633695092769e+308":""}
base_3[3] = null
return a*b*c+d
};
var base_0 = [403,893,100,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,100,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,100,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893,100,126]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test360.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)