





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = [0,893,595,595,969,213,969,627]
argument3 = {"122":"","403":705,"5.931794386468708e+307":595,"":"","[":1.7272414034960238e+308,"-> O":1.0358930292267763e+308}
return a/b-c
};
var argument2 = false;
var argument3 = 1.288171545406292e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[618] = null
base_1[7] = {}
return a-b+c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = null
return a-b+c
};
var argument7 = r_0;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = {"893":"","v&$J":783}
argument9 = {"4":"PQ1Iu'","213":8.579533089520775e+306,"9.080069650783196e+307":1.6936035968839297e+308,"1.369514178967104e+308":1.6577584198241907e+308,"t":2.8833601803253676e+307,"1.5953186448151014e+308":"","Zay":9.02298269930755e+307," ":213,"s":"gQIsN"}
argument9[1]['d'] = null
return a/b*c
};
var base_0 = [627,627,49,49,607,25,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [627,627,49,49,607,25,893]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test513.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)