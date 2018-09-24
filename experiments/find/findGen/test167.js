





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 59
return a+b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['AO?'] = ""
argument4[4.953791384496108e+307] = {"0":"C","49":607,"59":"8","618":0,"D":100,"8.296419606273616e+307":49,"-100":"","":2.1358029749138248e+307,"q":"r"}
return a*b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.399309004356655e+308] = true
argument6[4.953791384496108e+307] = null
argument6 = [-1,607,126,-100,655,49,0,-1,823]
return a/b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][2] = true
argument7['!j'] = null
return a/b+c
};
var argument6 = {"58":242,"59":1.4816219957355284e+308,"-100":1.557463316082914e+308};
var base_0 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_2= undefined
try {
r_2 = base_2.find(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["z9","Y",";$R1T",">h&","%Lg`+Q"]
var r_3= undefined
try {
r_3 = base_3.find(argument5,argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test167.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)