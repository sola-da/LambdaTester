





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1] = ["Bw@","4X@","C"]
base_0[2][8.05235215815219e+307] = 5e-324
base_0[1][2] = ["n{HM","h",843,213]
return a+b-c
};
var argument2 = false;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = 5.749974416511683e+307
argument5[6] = ""
return a-b*c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"7.001363451759268e+307":1.0426195162309127e+308,"":126}
return a/b+c
};
var argument7 = r_2;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"":969,"{$":"S)^I:N","#_`":7.585882019731741e+307,"QS":25,"<":"","1.1115019433514352e+308":783}
base_3[3] = {"0":157,"49":"e","59":"","K":1.5367674906929983e+308,";Lf":4.3347798209996934e+307,"1.573252139801808e+306":"9","":"?g?#&","a":714,"1.2954861718276338e+308":"CR!Bku"}
argument9[3.0481490052276395e+306] = true
return a-b/c
};
var base_0 = ["|","Tq","4","D k!","xC","?"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","Tq","4","D k!","xC","?"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","Tq","4","D k!","xC","?"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","Tq","4","D k!","xC","?"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test589.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)