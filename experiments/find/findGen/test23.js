





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = "^"
base_0[3] = null
return a/b-c
};
var argument2 = 49;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = ["c@","7","J","w","G|","Y"]
base_1[2] = [618,0,100,460,0,783]
return a+b+c
};
var argument5 = null;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['!j'] = null
argument9['!j'] = null
argument8[5] = null
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = null
base_3[4] = false
base_3[5] = {"0":-100,"607":"","2.2536728476945566e+307":"w","":"","-1":1.5359879880456342e+308,"9.52948378751779e+307":"","1.642370712172105e+308":5e-324,"1.630533634636979e+308":"N7"}
return a-b-c
};
var argument9 = false;
var base_0 = ["*","N","=","2^1L","^=","sxr","r","V","l","M"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["*","N","=","2^1L","^=","sxr","r","V","l","M"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["*","N","=","2^1L","^=","sxr","r","V","l","M"]
var r_2= undefined
try {
r_2 = base_2.find(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["*","N","=","2^1L","^=","sxr","r","V","l","M"]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test23.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)