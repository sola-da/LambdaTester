





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = "^"
return a/b+c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = true
return a/b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = ""
argument6[1] = 783
return a/b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = [705,"aT",-1,"Yq),"]
argument7[6] = {"-1":"Mh"}
argument7[100] = 1.6622491297651641e+308
return a*b/c
};
var argument6 = true;
var base_0 = ["sgZ","B","j",">93FoP","L","v","DpS","Q"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["sgZ","B","j",">93FoP","L","v","DpS","Q"]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["sgZ","B","j",">93FoP","L","v","DpS","Q"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["sgZ","B","j",">93FoP","L","v","DpS","Q"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test410.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)