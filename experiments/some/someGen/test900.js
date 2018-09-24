





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ["Y","+","@"]
argument1[0] = {"1.1462605181268502e+308":9.226839905974652e+306,"MST!)nO":"","1.2427771695419377e+308":"z2","2.6722945040681144e+307":"","1.374641777672553e+307":-100,"1.6535565684321919e+308":969}
argument3[0] = {"595":59,"1.3591495256415733e+308":">",",k+D":"$","":8.676431705699725e+307}
return a/b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[5] = false
base_1[1][3] = ""
return a+b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[403] = 3.242214992751487e+307
return a/b+c
};
var argument4 = [157,460,82,49,705,618,893,783,783];
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = 1.0000141602798196e+308
argument7[705] = ""
argument8[3] = ["2A",49,"@@",618]
return a-b+c
};
var argument7 = ["i&<",59,460,783,607,595];
var argument8 = {"":6.158659450739867e+307,"&C":"1a","9.115597826658024e+307":""};
var base_0 = [213,607,59,"1w",618,">",655]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,607,59,"1w",618,">",655]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,607,59,"1w",618,">",655]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,607,59,"1w",618,">",655]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test900.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)