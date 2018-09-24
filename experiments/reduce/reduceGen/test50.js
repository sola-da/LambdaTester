





var callbackArguments = [];
var argument1 = ["ia","wT(","#`f","P","G","+h","uv,"];
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = 1.2837839835964674e+308
argument2[1] = 1.4389243038839082e+307
argument1[4] = true
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0] = false
return a/b*c+d
};
var argument6 = {"460":"","705":705,"8Wn":"","":"","1.1491142149901067e+308":1.1006154861604122e+308,"1.0156296925908303e+308":"","1.2257061116224675e+308":"","1.6674850783113616e+308":4.3116226601975763e+307};
var argument7 = true;
var argument8 = [705,"@j","Zr[","y",59,"#__f)"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][9.12287810829114e+307] = {"242":"","d{":"","":6.904945650315862e+307,"LBX":"Y"}
return a-b-c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = {"595":""}
base_3[2] = [783,25,5e-324,82,5e-324,595,126,1.7976931348623157e+308,59]
return a/b+c+d
};
var argument11 = null;
var base_0 = ["8q}","Dp","+","V]E","E","k","3Z"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8q}","Dp","+","V]E","E","k","3Z"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8q}","Dp","+","V]E","E","k","3Z"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8q}","Dp","+","V]E","E","k","3Z"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test50.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)