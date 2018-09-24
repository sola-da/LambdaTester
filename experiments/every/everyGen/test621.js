





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = ""
return a/b-c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = {"0":"","":4.1132180414211284e+307,"{1C":1.6832449103897063e+308,"'^H":403,"1.308332095212682e+308":"","iy":7.454086227897926e+307,"N":1.4819190471030584e+306,"E":""}
return a-b*c
};
var argument5 = false;
var argument6 = [714,969,242,213,783,213,100,823,595];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = {"242":"","":1.570225952468903e+308,"3.0470045321527683e+307":"","1.6255616998929911e+308":242}
argument8[893] = 82
argument9[4] = {"242":"5e:","":7.106773843544012e+307,"g":"I","1.3326112023609935e+308":"","3.938622188151082e+307":"n","1.3651110008653648e+307":"","y":893,"9.411644244492082e+307":"KR","D":"u|"}
return a*b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[8] = true
argument9[1.6706143966770798e+306] = {"j":122}
base_3['length'] = 1.508680257784399e+308
return a+b+c
};
var argument9 = true;
var argument10 = ["$","A","5","2@","z","<7S@","zp||H"];
var base_0 = [",d"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [",d"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [",d"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [",d"]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test621.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)