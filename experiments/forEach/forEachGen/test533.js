





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = ""
argument2[5] = {"100":100,"823":"a'","`":823,"":"","7#*X(yw":"","l":"","2.90269158116192e+307":1.453429114424213e+308}
return a+b+c
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = 1.6529243223340268e+308
base_1[4][6] = 3.8500279505791986e+307
return a-b*c
};
var argument5 = true;
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.0481490052276395e+306] = [403,25]
argument7[7.92397107964922e+307] = {"843":122,"1.6926929028749656e+308":"","1.4377112366295202e+308":2.4572288716008613e+307}
argument8[3.0481490052276395e+306] = false
return a-b-c
};
var argument8 = ["i","dR2",783];
var argument9 = null;
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [59,157,242,82]
base_3[1] = 618
return a*b-c
};
var argument11 = null;
var base_0 = ["9K*","4","q","=Bu","&$H{","R"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9K*","4","q","=Bu","&$H{","R"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9K*","4","q","=Bu","&$H{","R"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9K*","4","q","=Bu","&$H{","R"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)