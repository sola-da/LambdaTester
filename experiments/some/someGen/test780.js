





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = true
argument2[1.5109538778533692e+308] = "W"
argument2[4.224481734419934e+307] = ["M","qb*N","$C[","<"]
return a+b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4 = {"1.1233336169851681e+308":"","":122,"1.3869666958806344e+308":"f[","O":"%x","1.3728652255485612e+308":""}
argument3[3] = -1
argument4[3][3] = {"49":4.275756346154033e+307,"":1.7976931348623157e+308,"9.366947936551063e+307":595,"y":""}
return a*b*c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][4] = {"1.7771256003602998e+308":""}
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5e-324] = 595
return a-b-c
};
var argument6 = {"4":6.053231096040808e+307,"6":3.228501890899884e+307,"122":1.305095612527713e+307,"213":"R","783":1.3078592485129926e+308,"7.82874486699946e+307":"","b":843,"":1.3141052446997098e+308,";(":"","vd":"AyA"};
var argument7 = "";
var base_0 = [823,"@",242,"*sR"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,"@",242,"*sR"]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,"@",242,"*sR"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,"@",242,"*sR"]
var r_3= undefined
try {
r_3 = base_3.some(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test780.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)