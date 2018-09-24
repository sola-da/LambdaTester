





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"783":"","W":893,"7.147350447499834e+307":"","O":"W","fQN":607,"":"","1.3038083229437703e+308":3.2970665434425974e+307,"9g2":""}
argument2['^N'] = null
base_0[6][2] = null
return a-b-c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = false
argument3[1.738403780925446e+308] = ""
base_1[6][2] = 1.1677264846868255e+308
return a+b*c-d
};
var argument3 = r_1;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-1] = [705,783,25,"*z",714,":Uw:lSM&","F8","Y",49]
argument7[126] = "e"
argument6[6] = [0,-100,100,627]
return a+b*c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = {"0":242,"627":"","m":"","Q":1.520263247641672e+308}
argument8 = 595
return a*b-c/d
};
var base_0 = [100,213,157,705,607,25,82,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,213,157,705,607,25,82,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,213,157,705,607,25,82,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,213,157,705,607,25,82,25,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test242.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)