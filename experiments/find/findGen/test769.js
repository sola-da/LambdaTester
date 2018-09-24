





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[5] = ["<","[","c!","5]:Z","<yU","-","H","x","_slDn"]
argument3['V'] = null
return a*b/c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.0500354979187844e+308] = true
argument4[242] = {}
base_1[5] = null
return a/b/c
};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"627":1.1352487806532909e+308,"":"","T":1.4860939836142392e+307}
argument8['V'] = 3.692021281938729e+307
return a*b+c
};
var argument7 = [714,5e-324,714,403,460,823,213,242,823];
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6] = {"8":7.702946193494186e+307,"213":"","403":8.06982513185868e+307,"705":""," (":4.459898723250818e+306,"4.603953709040044e+307":"7F{","":783,"1.0688928330662098e+308":5.4512073232433296e+306}
return a*b*c
};
var argument10 = null;
var base_0 = [969,126,59,-100]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,126,59,-100]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,126,59,-100]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,126,59,-100]
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
require("fs").writeFileSync("./experiments/find/findGen/test769.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)