





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
argument3[1] = {"C":1.5272465135633214e+308}
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7.92397107964922e+307] = {"59":"|","618":"Dwr2DO1","714":783,"969":969,"":"","1.69373236480489e+308":213,"7.989459498743425e+307":9.844569476990657e+307,"y":126,"jA":3.800243154863322e+307}
argument3[2] = false
return a/b/c
};
var argument3 = null;
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = {"":49,"LR":714,"1.3536698467692432e+308":""}
return a-b/c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = ["I",-100,969,"LvA","*",122,"5",1.7976931348623157e+308,595,"d4 "]
argument7[6] = null
return a+b+c
};
var argument7 = r_2;
var argument8 = [783,1.7976931348623157e+308,893];
var base_0 = [595,893,843,122,157,242,25,49,126,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,843,122,157,242,25,49,126,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,843,122,157,242,25,49,126,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,843,122,157,242,25,49,126,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test184.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)