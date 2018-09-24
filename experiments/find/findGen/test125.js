





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8][0] = {"49":8.597811710478817e+307,"618":"","843":"","893":25,"":1.6044158552117795e+308,"ot":"","-100":""}
argument2[8.748669805137695e+307] = null
return a+b-c
};
var argument2 = 893;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[8.748669805137695e+307] = ""
base_1[6] = {"82":607,"893":"","-":"","8.514157604646127e+307":0,"1.5091633110297124e+308":1.4932443257027246e+308,">":"|","H":5.985567583202208e+307,"I":"+","<x":126}
argument5['!j'] = "li"
return a+b+c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][2] = true
argument6[100] = "_O"
return a*b-c
};
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = "*,"
argument8[0] = [122,460,0,618,618,0,49,49]
base_3[0][6] = {"0":"+","126":"","460":1.7976931348623157e+308,"_=":2.271829084779217e+307,"3.0867203164458063e+307":"$","1.0854289546301148e+308":"","5e-324":618,"x":"","":1.7976931348623157e+308}
return a-b*c
};
var base_0 = [59,403,25,"{","}",595]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,403,25,"{","}",595]
var r_1= undefined
try {
r_1 = base_1.find(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,403,25,"{","}",595]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,403,25,"{","}",595]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test125.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)