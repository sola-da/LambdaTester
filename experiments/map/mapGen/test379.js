





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][1.4677087964888306e+308] = {"M":3.7399973073883827e+307,"N":"^!`rIn9KP","]":823,"8.746692004339982e+307":0}
argument2[5] = ""
argument2[893] = [893,"J",59]
return a/b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[607] = {"627":843,"":823,"9.836621059775386e+307":4.604210177238464e+306,"7.071341382144966e+307":"","1.6025414364764297e+308":"u"}
argument3[1]['d'] = 213
return a*b+c
};
var argument3 = false;
var argument4 = [49,893,969,213,893,714];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][4] = true
argument6[1] = ""
base_2[8] = null
return a-b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = null
base_3[0][1.4677087964888306e+308] = {"25":0,"714":"`'j","8.113148585539039e+307":">","V":"bo","":"4","7.969772263373896e+307":1.0367667467396255e+308,"9G":59,"Yp":""}
argument8[7] = false
return a-b+c
};
var argument7 = 607;
var argument8 = 6.78448400572584e+307;
var base_0 = [607,607]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,607]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,607]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,607]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapGen/test379.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)