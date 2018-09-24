





var callbackArguments = [];
var argument1 = false;
var argument2 = "3";
var argument3 = {"59":"","893":"g!","":">f","3.268512482387841e+307":1.1158545042091157e+308,"'6":",j!","G":1.4134104519965591e+308};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = true
argument3[3] = 1.5536373910342827e+308
argument1[4] = ""
return a-b/c/d
};
var argument5 = "";
var argument6 = true;
var argument7 = 893;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = "_,"
base_1[0][9.12287810829114e+307] = null
base_1[0][4] = [627,126,5e-324]
return a/b/c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = 1.348198342213072e+308
base_2[0] = "!X"
base_2[4] = {"122":"U]3","8.075896948241522e+307":59,"Ur":-100,"-1":1.485312993693933e+308,"":2.2182469067616196e+307,"lW":5.566023930295461e+307,"(":5.120337261135554e+307}
return a/b-c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1.3938918493123786e+308] = ["6","e","NR","9<","Dv(W"]
return a/b-c-d
};
var argument11 = r_2;
var base_0 = [0,59,607,969,100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,59,607,969,100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,59,607,969,100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,59,607,969,100]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test543.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)