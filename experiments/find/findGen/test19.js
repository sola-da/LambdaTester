





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = ["n","0","I?y|","AOg","p^F+t","6","U","x7x"]
argument1[893] = {"122":"1","627":"","":"","-1":-1,"i":"","1.6843102169771425e+308":""}
base_0[6] = 3.936038238035848e+307
return a/b/c
};
var argument2 = null;
var argument3 = [122,823,627,25];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = 7.07900366649642e+307
base_1[1][7] = null
return a/b+c
};
var argument5 = "";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ["7","gK","6","@","0^",",j","<2","ev","jl"]
return a*b*c
};
var argument7 = {"1.0171121855397763e+308":"","":"2","5.581767297801475e+307":"x"};
var argument8 = r_2;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[893] = true
base_3[1][7] = false
base_3[6] = {"8.629557101825008e+307":"6","":""}
return a/b*c
};
var argument10 = "B";
var base_0 = ["L","r","+","on","j3","mt=","Z","|"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L","r","+","on","j3","mt=","Z","|"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L","r","+","on","j3","mt=","Z","|"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L","r","+","on","j3","mt=","Z","|"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test19.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)