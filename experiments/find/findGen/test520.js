





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['!j'] = 1.3586038008218068e+308
return a*b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1.1881593224845412e+308] = ""
argument4[783] = ["?g","`@"]
return a-b+c
};
var argument3 = null;
var argument4 = r_1;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1] = 126
return a+b*c
};
var argument6 = r_2;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][6] = true
return a-b/c
};
var base_0 = [")*a","1","Rh+g","]","`","d","B"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [")*a","1","Rh+g","]","`","d","B"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [")*a","1","Rh+g","]","`","d","B"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [")*a","1","Rh+g","]","`","d","B"]
var r_3= undefined
try {
r_3 = base_3.find(argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test520.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)