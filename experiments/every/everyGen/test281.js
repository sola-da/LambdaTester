





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[3] = null
base_0[1] = [213,-100,460,714,893,1.7976931348623157e+308,122,25,126,843]
return a*b+c
};
var argument2 = "";
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = 627
base_1[1][6] = ""
return a+b*c
};
var argument5 = {"157":0,"627":242,"4.224481734419934e+307":"","-100":1.2769112843143498e+308,"":655,"9.052137017295402e+307":"-{q","1.519597092818457e+308":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2][7] = -1
argument7[2] = true
return a/b/c
};
var argument7 = null;
var argument8 = {"2.3372712593470626e+307":49};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = {"100":823,"213":"ehX","460":1.6486421028132502e+308,"607":"","1.5784028129598612e+308":"dD","":1.1074254225837321e+307,"d":"G","#r":1.041806788712079e+308,"yTFIP!h":0}
argument10[403] = true
return a/b/c
};
var argument10 = null;
var argument11 = "";
var base_0 = [213,783,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,783,122]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,783,122]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,783,122]
var r_3= undefined
try {
r_3 = base_3.every(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/every/everyGen/test281.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)