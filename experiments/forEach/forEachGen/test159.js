





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[126] = false
return a+b/c
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[5] = [460,607,893,1.7976931348623157e+308]
argument5[3] = ["O",")#","B","F","k|"]
argument6[1.4034744228995816e+308] = true
return a*b-c
};
var argument5 = {"":2.7694873309025825e+307};
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = true
base_2[7] = 49
return a-b/c
};
var argument8 = ["?[R","g#ab","k","F!F",100,100,595,126];
var argument9 = [49,100,893,-1,607];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[126] = 1.484273934815166e+308
argument11[2] = {"460":"","K#b":"","5e-324":25,"5{Nc:":"","1.6345774758152422e+308":49,"1.1495203923355758e+308":7.250890554617323e+307}
return a+b+c
};
var base_0 = ["^","D ","N","u","79","CDhv,","Zg"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["^","D ","N","u","79","CDhv,","Zg"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["^","D ","N","u","79","CDhv,","Zg"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["^","D ","N","u","79","CDhv,","Zg"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test159.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)