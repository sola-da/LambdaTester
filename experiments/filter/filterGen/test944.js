





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = {"969":"","1.6086911966637174e+308":"","1.1507322926381304e+308":783,"1mam":"HR"}
argument3[7] = "hse,C:"
argument2[4.224481734419934e+307] = {"100":"","460":"8","p":",w","1.6811251835787694e+307":"(","1.559675359079609e+308":25,"1.6413460517090655e+308":1.0110980664784955e+308,"1.3463686479513442e+308":"-","9.642977733891336e+307":7.092005658226656e+306}
return a+b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = true
base_1[0] = "'Hz']"
return a-b+c
};
var argument3 = true;
var argument4 = null;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[242] = 3.5734044244443234e+307
argument7[618] = ["k#",969,"8",-1,"z","="]
return a/b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['filter'] = ["<^f","f"]
base_3[7][4] = {"783":627,"":1.1288833695316898e+307,"4.7005339124824e+307":" ","1.211266243825581e+308":"0]","1.5807521229396045e+308":";","-1":3.2886962925018154e+306}
argument7['jo'] = ""
return a-b*c
};
var argument7 = null;
var argument8 = r_2;
var base_0 = [843,705,843,0,714,122,595]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [843,705,843,0,714,122,595]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [843,705,843,0,714,122,595]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [843,705,843,0,714,122,595]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test944.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)