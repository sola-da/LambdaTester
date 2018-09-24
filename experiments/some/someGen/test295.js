





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = ""
return a+b+c
};
var argument2 = {"7JIn#4z":"+","1.4246013685648544e+308":2.302974854571029e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = "nTmw"
return a+b-c
};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.249941463060761e+307] = {"0":"4","607":"o","705":"","1.7676089593102925e+308":"","":"","x":1.3741690125091997e+308,"Iq$E":"","9i,G`xV":"`","R":"m"}
return a*b/c
};
var argument5 = 783;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['5L'] = null
argument8['T'] = {"5":969,"hs[":"","6.760515685248437e+307":1.0689775630670688e+308,"!":783,"Q":"","":""}
argument7[6] = [157,-1,157,969,-100,893,969,242,122]
return a+b+c
};
var argument7 = true;
var base_0 = [969,242,25,242,242,-1]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,242,25,242,242,-1]
var r_1= undefined
try {
r_1 = base_1.some(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,242,25,242,242,-1]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,242,25,242,242,-1]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someGen/test295.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)