





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = {"25":"x","1.4588516992867463e+307":"","2.062054032884273e+307":"","G:":" 3"}
argument2[5] = true
argument2[25] = {"82":1.550458204365222e+308,"595":"A)",";T*'i":1.0295328491812525e+308,"1.4816342905132084e+308":783,"":"","1.399944165302393e+308":"sj,e9"}
return a+b+c
};
var argument2 = null;
var argument3 = {"714":"","3.1470436583062724e+306":1.6166066771360716e+308,"":"ps","C":"ji","1.2643245856574963e+308":3.4849033548167434e+307,"B[":"Uh","7.45002454990192e+306":"o9e"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4.953791384496108e+307] = null
return a/b-c
};
var argument5 = false;
var argument6 = "*";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = null
argument9['AA@'] = "G"
base_2[1][2] = 6.311040187118177e+307
return a*b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3][1.7261030733891165e+308] = [0,5e-324]
base_3 = {"w":969}
base_3[1][7] = [157,0,49,843,49,0,607]
return a-b/c
};
var base_0 = [823,213,49]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,213,49]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,213,49]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,213,49]
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
require("fs").writeFileSync("./experiments/find/findGen/test983.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)