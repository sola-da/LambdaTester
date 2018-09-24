





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = "OL"
return a/b-c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4034744228995816e+308] = 1.1137842278370846e+307
argument4['U+WQ'] = {"25":1.272190706536128e+308,"126":"Vh","893":"5r","1.1383444093601417e+308":"s","3.579007301704811e+307":"|6uy","":969,"1.7895952194157582e+308":4.950006497063123e+307,")Px":1.2701405499360306e+308,"I":"","b":714}
return a*b/c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = null
return a*b/c
};
var argument5 = false;
var argument6 = {"100":"1","213":82,"705":5.394542401674189e+307,"0CcY":"wJ",":qJ":"y","":-100,"1.7747890034039705e+308":"=Y-","`":5e-324};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.92397107964922e+307] = 783
argument7 = true
argument9[2] = ""
return a*b*c
};
var argument8 = r_1;
var base_0 = [893,403,705,969,59,242,893,969]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,403,705,969,59,242,893,969]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,403,705,969,59,242,893,969]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,403,705,969,59,242,893,969]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test703.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)