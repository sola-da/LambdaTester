





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][4] = "Q7xw'rt"
argument3[1.4034744228995816e+308] = [823,403]
return a-b*c
};
var argument2 = {"655":"","823":"","969":1.7976931348623157e+308,"":"r%","1.7976931348623157e+308":607,"_K":1.7976931348623157e+308,"9.59099712881109e+307":"","N?":"CmE"};
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = [607,607,82,823,25]
base_1[2][1] = false
base_1[1][2] = {"460":"VA","607":126,"655":6.351592478808714e+306,"783":403,"A0s":843,"":4.792750400524181e+307,"-100":""}
return a-b/c
};
var argument5 = false;
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.268696794505825e+308] = [-100,823,607,655,403,49,242]
return a+b-c
};
var argument8 = "";
var argument9 = false;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[1.7847438319683965e+308] = ["|","+d","OG","+G1|","^pP"]
return a/b*c
};
var argument11 = r_3;
var base_0 = [607,655,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument10,argument11)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)