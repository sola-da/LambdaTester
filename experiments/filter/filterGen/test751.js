





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2 = "$"
argument2 = null
return a-b+c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.0546776681946723e+308] = [126]
argument5[0] = null
base_1[8] = 714
return a/b+c
};
var argument4 = r_1;
var argument5 = true;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[157] = ["<"]
base_2[1][3.5329845145600404e+307] = ["mW","4c",":vE^xnD>Q","g0"]
argument7['wIs'] = false
return a-b+c
};
var argument7 = r_0;
var argument8 = r_0;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3.5329845145600404e+307] = null
argument9 = true
argument9[0] = {"0":"U>X^5:","1.0197772588289128e+308":"N","7.935769570415999e+306":"","1.4667249062400426e+306":3.114898211033091e+307,"i":8.30164968067781e+306,"+":"*","nc":"(l3","4.579582777489523e+307":"@"}
return a*b-c
};
var argument10 = "Iy";
var argument11 = 4.850977688492384e+307;
var base_0 = ["]C"," ?zlN","O","hBn-"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
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
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test751.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)