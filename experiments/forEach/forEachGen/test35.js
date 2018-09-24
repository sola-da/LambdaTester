





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = {"595":1.7827021435410226e+308,"714":1.0830644608502116e+308,"1.0279135680084984e+308":"M","4Zp":627,"":49}
return a/b+c
};
var argument2 = r_0;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = [82,783,595,242,969,823,823]
base_1['length'] = {"595":"X","893":"","1.1715215582133586e+308":655,"1.7976931348623157e+308":"s",",I,":1.783381726765443e+308,"b":"H7An-!"}
argument5[-1] = ""
return a/b*c
};
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = {"655":1.2111166052207341e+308,"969":1.6665113891667046e+306,"":618,"PC":1.4255631730817602e+308,"4.044854689692882e+307":"$","7.68608177632535e+307":5.187198468211031e+307}
return a-b-c
};
var argument7 = true;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = 49
argument9[-1] = null
base_3[7] = {"49":-100,"122":"Sx1","460":1.4685791385013983e+308,"595":",_O","969":49,"":"","1.5244047303013379e+308":213,"5.496703464680538e+307":1.3134909982787222e+308,"Ojdh":403}
return a+b/c
};
var argument9 = r_0;
var argument10 = "";
var base_0 = ["(x","[","^","t5K","V"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(x","[","^","t5K","V"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(x","[","^","t5K","V"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(x","[","^","t5K","V"]
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test35.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)