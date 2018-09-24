





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = null
base_0[4] = {}
argument2[618] = {"157":"","705":9.021614970325087e+307,"1.2315318087567327e+308":7.638776788114093e+307,"8|^b":242,"1.109053246743246e+308":"lOl","":3.109534700875864e+307,"k<7bJ":82,"9.61940088002199e+307":"^?","9.930730003780778e+306":""}
return a*b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[157] = 4.492436004636972e+307
argument4[4] = null
base_1[0][1] = {"100":"`","607":9.59348403806284e+307,"893":157,"_":5.492331689132706e+307,"":""}
return a/b+c
};
var argument4 = "D|";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[607] = {"":"}","1.4336500179460702e+308":8.429856372888043e+307,"o":2.530581191174532e+307}
return a+b+c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = null
argument8[969] = true
return a-b*c
};
var base_0 = [122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapGen/test592.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)