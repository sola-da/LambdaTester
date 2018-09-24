





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['A'] = true
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[714] = [1.7976931348623157e+308,0,-1,893]
argument4[3] = ""
base_1[1][1] = {"":4.815311382848398e+307,"6.617592065833792e+307":"","-":1.2121137804714424e+308,"9.222683400122794e+307":"","1.1153949992398023e+308":5.446137652261456e+307,"1.1604959279427071e+308":607,"li2":8.529917561063037e+307,"W":"","#5":969}
return a/b+c
};
var argument3 = "";
var argument4 = 1.4881248801749155e+307;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.0546776681946723e+308] = false
base_2[0][0] = [-100,655]
return a-b-c
};
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3.5329845145600404e+307] = 1.0442068518097355e+308
argument9[1.7847438319683965e+308] = {"607":""}
return a+b+c
};
var base_0 = ["@mI;","#","[","L:;","HkM","rC9J"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@mI;","#","[","L:;","HkM","rC9J"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@mI;","#","[","L:;","HkM","rC9J"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@mI;","#","[","L:;","HkM","rC9J"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test664.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)