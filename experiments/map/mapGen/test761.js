





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[3] = {"":"j=#"}
base_0[0][2] = "e"
argument3[7] = [1.7976931348623157e+308,242,714,705,595,893]
return a*b+c
};
var argument2 = {"25":2.7778745738796e+307,"126":"o","l-qs=^Ii<":"LWI%'","1.268696794505825e+308":0,"":"=","-100":"","8.809209773029947e+307":969,"iq":8.46868948253437e+307};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3.5329845145600404e+307] = {"0":"","1":"","595":"x","607":"","+":"","5.289421784907057e+307":"","":5.692340722961603e+307}
base_1[3][1] = 25
return a*b+c
};
var argument4 = {"D":9.258432564371843e+307};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][4] = {"714":4.1177063586211927e+307,"823":3.7660533705166536e+307,"":"W","5.232113048211444e+307":""}
argument6[3] = null
return a-b+c
};
var argument6 = false;
var argument7 = 6.633109716462702e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[5] = ""
return a+b+c
};
var argument9 = [59,783,126];
var base_0 = ["%","X","C5FmDK","p","%U","2("]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%","X","C5FmDK","p","%U","2("]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test761.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)