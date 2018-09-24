





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0['length'] = false
base_0[2] = true
base_0[5] = ""
return a/b-c
};
var argument2 = {"403":"","":"^,ETuV"};
var argument3 = 82;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2] = [714,607,-1,893,25,403]
base_1[4] = ""
return a+b*c
};
var argument5 = null;
var argument6 = [242,607,-100,"8",843,"#T@3","[rqm","G;"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"6":49,"J":"","Nr":1.1096797377637152e+308,"!]":1.7832016257449701e+308,"Lk":"`"}
return a*b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = [607,157,618,5e-324,59,157,82,595]
return a-b*c
};
var argument9 = null;
var argument10 = "";
var base_0 = ["H","@qe",">Vn","S:",":","aK[","VKy","Wz","1(W","{"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H","@qe",">Vn","S:",":","aK[","VKy","Wz","1(W","{"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H","@qe",">Vn","S:",":","aK[","VKy","Wz","1(W","{"]
var r_2= undefined
try {
r_2 = base_2.every(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H","@qe",">Vn","S:",":","aK[","VKy","Wz","1(W","{"]
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
require("fs").writeFileSync("./experiments/every/everyGen/test13.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)