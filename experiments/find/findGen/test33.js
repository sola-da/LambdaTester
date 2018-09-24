





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = {"0":"bo?U","705":"","":"]",";":25,"D":"","1.7100421441450405e+308":"","1.8621727116866405e+307":""}
base_0[7] = "k"
return a/b-c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = 2.4831905266755273e+307
return a-b/c
};
var argument5 = {"3":8.136101614996123e+307,"3.746484007851002e+307":"%@fs","g":"K","9.255269295107103e+307":"a","8.748669805137695e+307":"","":823};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = true
argument7[5] = 7.42385357645298e+307
argument8[0] = [122,893,-100]
return a-b/c
};
var argument7 = "";
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][7] = false
base_3[6] = ["Q"]
base_3[3] = ["6","qm"]
return a*b*c
};
var base_0 = ["N"," J","Fd","-","z","V","h","T","`"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N"," J","Fd","-","z","V","h","T","`"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N"," J","Fd","-","z","V","h","T","`"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N"," J","Fd","-","z","V","h","T","`"]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test33.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)