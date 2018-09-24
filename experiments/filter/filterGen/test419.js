





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = "`n"
argument3[6] = {"0":8.920497336332084e+307,"$":"","":"","1.2199143612541599e+308":"","1.685816526105524e+308":6.235255050086651e+307,"1.7135218977868016e+308":9.203320940871265e+307,":U#":"","2.906840298110317e+307":"9g=PJ[","2.3189906211508394e+307":7.502840951648477e+307}
argument2[5] = 242
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = 1.0434351955576196e+307
return a/b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = 618
argument5[3.7154103611117224e+307] = [49,705,"o#",100]
return a*b/c
};
var argument4 = true;
var argument5 = r_2;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2] = {"m":618}
argument6 = {"59":"","655":1.0818764446668689e+308,"705":"K9","$`if:*":5.919169425984781e+307,"5.161552945539336e+307":"","C":2.3306132123697307e+307,"":""}
base_3[8][3] = null
return a+b+c
};
var base_0 = ["H","q",";KK","}%","L9","0","f","ZKI",":B","e"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","q",";KK","}%","L9","0","f","ZKI",":B","e"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","q",";KK","}%","L9","0","f","ZKI",":B","e"]
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test419.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)