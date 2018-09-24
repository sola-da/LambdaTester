





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"0":1.6610867528230685e+308,"157":"","!":"","xyX":1.527538244720325e+308,"-100":"p","":3.398721440022345e+307,"q}I|":7.621331636621742e+307,"2.6951586314819833e+307":8.241119807771393e+307,"A?S9":""}
base_0 = false
return a-b*c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.0481490052276395e+306] = {"^":7.919750610326138e+307,"D'":1.7976931348623157e+308,"3.772152846270234e+307":9.360531802417167e+307,"":7.110329698036935e+307}
argument6[1] = {"460":8.185460104886827e+307,"627":5.734220481526529e+307,"893":"","1.0028522303675823e+308":"|","":"Gg"}
argument5[3.0481490052276395e+306] = 893
return a+b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][1.3434821406183095e+308] = null
return a+b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = false
base_3[0] = null
return a-b*c
};
var base_0 = ["JI","|y","#"," ","[e","O{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["JI","|y","#"," ","[e","O{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["JI","|y","#"," ","[e","O{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["JI","|y","#"," ","[e","O{"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test501.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)