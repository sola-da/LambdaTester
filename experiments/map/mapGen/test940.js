





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3.208837311680636e+307] = {"969":"NkP","{":5.077181597248501e+307,";q;sjr":8.271121368867827e+307,"1.0236935820440819e+307":7.978071081837482e+306,"":"n","Y":25,"3.829366085008794e+307":705}
argument3[8] = ["{","Qe","X$R"]
return a+b-c
};
var argument2 = {"25":"A5Wf","618":"(","1.6637096743042118e+308":"","":"p","1.7597968103442236e+308":1.335748157165834e+308,"O32snR":8.353604266731451e+307};
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[157] = true
base_1[2][5] = [82,"5o","e^LD*","k2","?",82,"UJN","J","y"]
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][5] = 1.7976931348623157e+308
argument7[5] = null
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1] = [82,607,242]
argument7[618] = 126
argument7[618] = {"618":1.261878268249963e+308,"1.2405526209817034e+308":"`rh8SI'_","":4.068604414398083e+307,"8.733862249907851e+307":"y","s":""}
return a/b/c
};
var argument7 = ["_Aq","Bx6","d","M","N[&","`%S",")("];
var argument8 = null;
var base_0 = [403,242,403,157]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,242,403,157]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,242,403,157]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,242,403,157]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test940.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)