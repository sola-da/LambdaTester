





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[49] = 1.2111655866601738e+308
return a/b/c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4034744228995816e+308] = 126
argument4[3] = [403,100,5e-324,595,1.7976931348623157e+308,783,627,595]
argument4[1.0446313380579697e+308] = 8.534958188453232e+307
return a*b+c
};
var argument4 = true;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = ""
argument7['5pji-Y'] = ["(N)D","Dv","4","8","O","v|","l_"]
return a/b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][1] = null
argument7['1SHF1'] = [126,"hn","n",122,"N","*p","Oq",714]
base_3[6] = {"607":59,"618":100,"705":25,"":"","4.604796363275553e+307":"HQ^","B":122}
return a*b-c
};
var argument8 = [25,122,59,82];
var base_0 = [714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test899.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)