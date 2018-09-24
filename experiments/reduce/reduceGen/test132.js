





var callbackArguments = [];
var argument1 = null;
var argument2 = 2.693621906578886e+307;
var argument3 = {"59":"(","1L":""};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = 8.026133173448814e+307
argument1[4] = 403
argument3[627] = {"242":"8","969":49,"1.0782994975049405e+308":"","":""}
return a/b-c*d
};
var argument5 = "C>8,FZfO";
var argument6 = false;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = true
base_1[0][9.12287810829114e+307] = 7.797947365598641e+307
argument7 = true
return a/b/c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = false
return a+b+c*d
};
var argument10 = false;
var argument11 = 893;
var argument12 = false;
var argument13 = {"1.451870834992598e+308":3.470375193816258e+307};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[1] = null
base_3[6] = {"":403,"1.2865599954824027e+308":"","x":"",",":""}
base_3[0] = [",MuK"," ","E","U",25,"H","ZJ",82,"M"]
return a/b-c+d
};
var base_0 = ["+",714,">]f",655,100,"Y","*<r",823,607]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+",714,">]f",655,100,"Y","*<r",823,607]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+",714,">]f",655,100,"Y","*<r",823,607]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+",714,">]f",655,100,"Y","*<r",823,607]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test132.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)