





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][2] = "22"
base_0[0][6] = true
argument2 = {"705":1.5879476794947794e+308,"X0":"","1.0284023811855449e+308":"","1.3287860519212665e+308":25}
return a-b/c
};
var argument2 = ["H",460,705,"yZ","(sCc",655,"pR",0];
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[403] = [403,-1,783]
base_1[1][4] = ":"
base_1[2] = "o"
return a/b/c
};
var argument4 = r_1;
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = 1.5636371041726963e+308
return a+b-c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = [-1,213,823,82,49,-100]
base_3[0][6] = 403
argument8[893] = true
return a/b*c
};
var argument8 = "Q";
var argument9 = {"25":49,"":""};
var base_0 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_2= undefined
try {
r_2 = base_2.every(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","^;J7",82,126,"86","[A","e","e"]
var r_3= undefined
try {
r_3 = base_3.every(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/every/everyGen/test571.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)