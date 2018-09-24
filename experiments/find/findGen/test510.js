





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['='] = {"0":1.8503792365731718e+306,"8":">","":"","5.568050351909642e+307":126,"1.207571114456403e+308":"","]|I":"&","9.497000078503222e+307":"$7}fuC"}
argument2[3][6] = "OL"
argument2[1.0500354979187844e+308] = [100,-1,0,-100,157,0,242,82,126]
return a-b+c
};
var argument2 = false;
var argument3 = "ih";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1881593224845412e+308] = ""
base_1[0][2] = [126,157,595,213]
argument6[4.953791384496108e+307] = null
return a*b/c
};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = ""
base_2[8][0] = -1
return a*b*c
};
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1.0500354979187844e+308] = null
base_3[0][3] = {"0":"","K":82,"":"","6.819267364962537e+306":"Y"}
argument11['AO?'] = false
return a+b/c
};
var argument10 = false;
var base_0 = ["<o",49,"]e"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["<o",49,"]e"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["<o",49,"]e"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["<o",49,"]e"]
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
require("fs").writeFileSync("./experiments/find/findGen/test510.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)