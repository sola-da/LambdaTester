





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[4] = true
argument3['^h'] = {"5":"","595":1.3971225051948538e+308,"607":"","":1.7976931348623157e+308,"1.1940701510950113e+308":2.945252412095298e+307,"dj":2.721011085984539e+307,"'{":783,"tk,":"P","9.223073606228538e+307":"Q"}
return a+b+c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[460] = 4.541182539034173e+307
base_1['length'] = {"-100":"","@x(>":"gNQs$4[aj","!ey":""}
base_1[6] = ["[7","U9)","m","[","i","=","*","DH]b"]
return a/b*c
};
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['!j'] = 627
argument4[893] = true
return a-b+c
};
var argument5 = {"82":242,"893":618,"B":"DE","1.714545160889529e+308":"","2.6099641721720157e+307":"`LD"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = ""
argument6[3.377960715099946e+307] = "y"
base_3[0][6] = false
return a+b*c
};
var argument7 = null;
var base_0 = [":X","^q(","]","si","A","t"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [":X","^q(","]","si","A","t"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [":X","^q(","]","si","A","t"]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [":X","^q(","]","si","A","t"]
var r_3= undefined
try {
r_3 = base_3.find(argument6,argument7)
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
require("fs").writeFileSync("./experiments/find/findGen/test649.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)