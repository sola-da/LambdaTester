





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = ""
argument1[3.377960715099946e+307] = 403
argument3[4] = null
return a/b+c
};
var argument2 = null;
var argument3 = ["[w9","V","#@"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][1] = {"49":"","714":7.804817036478973e+306,"r":"+-u","|2":-100,"P>6#4":49,"1.694187234843317e+308":"Z","5.950100819193453e+307":100,"6.874841529282694e+307":""}
argument6[969] = [242]
return a*b+c
};
var argument5 = r_1;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = "q'UG&"
argument7[5] = null
return a-b-c
};
var argument7 = r_1;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][0] = null
base_3[0] = ""
argument10[460] = null
return a-b*c
};
var argument9 = null;
var base_0 = [242,460,969,0,-1,-1,0,460,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,460,969,0,-1,-1,0,460,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,460,969,0,-1,-1,0,460,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,460,969,0,-1,-1,0,460,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test279.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)