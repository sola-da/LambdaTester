





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.463432409233234e+307] = ""
base_0[5] = "iY "
base_0[3] = true
return a-b*c*d
};
var argument2 = {"126":"","k":"G"};
var argument3 = 1.774968847866584e+308;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = true
base_1[1] = 1.53547719073874e+308
return a+b/c*d
};
var argument5 = ["Bf,","f3","|","G","h","7"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"9.830135255577543e+307":618,"5e-324":5e-324,"_A]0":"o","1.0134827231626654e+308":7.388448562382157e+307,"":4.1481743717799743e+307}
base_2[5] = ""
return a+b-c+d
};
var argument7 = 1.4586759714653496e+308;
var argument8 = r_0;
var argument9 = "j1";
var argument10 = "";
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = ""
base_3[3] = "("
base_3[1][3] = [49,122,0,"T",618]
return a*b/c/d
};
var base_0 = ["OIBAt","w","LTEN7","r","s1wN"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["OIBAt","w","LTEN7","r","s1wN"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["OIBAt","w","LTEN7","r","s1wN"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["OIBAt","w","LTEN7","r","s1wN"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test62.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)