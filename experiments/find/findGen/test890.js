





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = [1.7976931348623157e+308,595,627,843,595,618]
base_0[1][2] = "`X-Vz{j5Y"
base_0[6] = 3.8111221675732446e+306
return a/b+c
};
var argument2 = false;
var argument3 = {"1.1462605181268502e+308":9.226839905974652e+306,"MST!)nO":"","1.2427771695419377e+308":"z2","2.6722945040681144e+307":"","1.374641777672553e+307":-100,"1.6535565684321919e+308":969};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['^h'] = {"49":";","122":6.86034547087837e+307,">":",k+D","$":"","8.676431705699725e+307":157,"":627,"f|Q":157,"f":1.495878953560599e+308}
argument6[126] = {"618":"","":1.7976931348623157e+308,"yf":"A}Q"}
argument6[6] = false
return a/b-c
};
var argument5 = "";
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[0] = {"":-1,"1.3345835458520504e+308":"0 ^8D"}
argument8['f-d'] = {"843":3.196868415056071e+307,"969":655,"9.099069905106114e+307":"","1.3864397009795719e+308":1.5130150144722329e+308,"H":"@","":5.737665577948909e+307,"1.0805493611757923e+308":"","9.388213507930638e+307":3.9725665041051536e+307,"B,":"W+G"}
argument8[3][6] = null
return a-b-c
};
var argument8 = {"460":"","714":"","823":1.6566920453593476e+307,"":823,"X":100,"D<|":""};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['!j'] = {"460":"","MW":5.521004164761488e+307,"":-1,"1.54891609136982e+308":5.773360085616264e+307}
argument11[100] = 2.3799545116142235e+307
return a*b+c
};
var argument10 = r_2;
var base_0 = [122,1.7976931348623157e+308,714,-1,1.7976931348623157e+308,157]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,1.7976931348623157e+308,714,-1,1.7976931348623157e+308,157]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,1.7976931348623157e+308,714,-1,1.7976931348623157e+308,157]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,1.7976931348623157e+308,714,-1,1.7976931348623157e+308,157]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test890.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)