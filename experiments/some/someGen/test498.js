





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['j'] = 705
argument2[1.6798476101238045e+308] = {"618":"","893":"r|y","":1.0617306517082238e+308}
return a*b*c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1]['{X'] = [595,705,"|}S-","@lm2",705,655,"^j",-100]
argument4[2] = null
return a+b*c
};
var argument5 = true;
var argument6 = "`Z}W";
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][7] = {"0":1.6610867528230685e+308,"705":82,"":157,"1.7976931348623157e+308":607,"A?S9":"","1.7036137227615242e+308":"L","1.2212822301980507e+308":"DCP","T":"","2.274015888756575e+307":1.7516082563324754e+308}
argument7[1] = null
argument8[705] = false
return a-b+c
};
var argument8 = true;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = {"126":3.895712562698212e+307,"213":5.754540996826419e+307,"":">0Hm*","Gg":-1,"1M":157,"`e":""}
argument10[2] = {"R":893,"J":126,"R<":8.507622117283819e+307,"z":"",")":3.738479226795186e+307,"-1":"6"}
base_3[2] = true
return a+b/c
};
var argument10 = r_2;
var base_0 = [122,-1,"U","Tc"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,-1,"U","Tc"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,-1,"U","Tc"]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,-1,"U","Tc"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test498.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)