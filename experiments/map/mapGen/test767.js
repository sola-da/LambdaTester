





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[893] = ["<","[","c!","5]:Z","<yU","-","H","x","_slDn"]
argument2[3.208837311680636e+307] = null
return a*b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['C'] = true
argument4['f'] = {}
base_1[4] = null
return a/b/c
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"627":1.1352487806532909e+308,"":"","T":1.4860939836142392e+307}
argument7[3.208837311680636e+307] = 3.692021281938729e+307
return a*b+c
};
var argument7 = [714,5e-324,714,403,460,823,213,242,823];
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[49] = {"8":7.702946193494186e+307,"213":"","403":8.06982513185868e+307,"705":""," (":4.459898723250818e+306,"4.603953709040044e+307":"7F{","":783,"1.0688928330662098e+308":5.4512073232433296e+306}
return a*b*c
};
var argument10 = null;
var base_0 = [969,126,59,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test767.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)