





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[157] = 9.691393147338482e+306
return a*b*c
};
var argument2 = {"6.766320494634798e+307":1.6713542686164075e+308,"U+WQ":""};
var argument3 = {"59":"","705":6.44657323500784e+307,"8.280058241184079e+307":"W",",xv":4.483851287088105e+307,"":893};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = [242,655,843,618,607,0,242,969,595]
argument6[3] = true
return a*b-c
};
var argument5 = false;
var argument6 = ["vq","s","5","o","c","T","t"];
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = {"122":1.131579817145681e+308,"1.0521059935403118e+308":618,"1.7976931348623157e+308":"IR","q":"8","":1.562766868319593e+308,"-100":969}
base_2[6] = ""
return a+b/c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3.0481490052276395e+306] = 1.5139786759268902e+308
argument10[5] = {"460":"J","893":"","1.054014476935831e+308":403,"T":655,"1.3791202568297962e+308":4.8248434292932314e+306,"":"Yx2zw>IWn","E":"","6y":3.3021577424999277e+307}
return a*b+c
};
var argument9 = null;
var argument10 = r_1;
var base_0 = [100,"J(b",783,"$mP",705,627,"4"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"J(b",783,"$mP",705,627,"4"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"J(b",783,"$mP",705,627,"4"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"J(b",783,"$mP",705,627,"4"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test317.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)