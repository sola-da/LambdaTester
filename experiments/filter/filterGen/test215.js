





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = 1.5946355338392364e+308
argument3[3.7154103611117224e+307] = [893,49,-1,126,460,100,59]
return a*b-c
};
var argument2 = "gn";
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = [100,25]
argument5[5.262931091360336e+307] = 655
argument4[6] = false
return a+b/c
};
var argument4 = true;
var argument5 = "B|";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7847438319683965e+308] = ""
argument8[3.7154103611117224e+307] = ""
argument7[4] = "G"
return a+b-c
};
var argument7 = ["1",705];
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[714] = null
base_3[4][2] = [705,-1,783,893,460]
base_3[4][2] = {"0":1.2728969013871833e+308,"460":1.7061364217676174e+308,"705":4.818095222587679e+307,"783":49,"4.710917414662172e+307":242,"1.3435829872183634e+308":"p ","AA@":"","L&":""}
return a+b-c
};
var base_0 = ["Gy?","i","|)","H"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Gy?","i","|)","H"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test215.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)