





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = {"0":"z","126":"","705":1.7976931348623157e+308,"":1.014673521838874e+308,"ad":"uN[&","1.4793014877642901e+308":9.038992472014448e+307,",|":"","8.476516066418455e+307":122,"5.337981520182287e+307":""," _":""}
argument2[4.224481734419934e+307] = false
return a*b*c
};
var argument2 = true;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = null
return a/b+c
};
var argument4 = [157,59,714,403];
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3] = ["YX","L","L","{"]
argument8[2] = {"242":969,"595":3.63389520861897e+307,"893":122,";":":","1.1065454274656359e+308":"I","#":893,"":"I%"}
return a/b/c
};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7.004668712060429e+307] = ["-",403,"j"]
argument8['f'] = [607,213,")","B","!",714,607,126,"z<"]
argument9[4] = {"2.309442729121847e+306":1.690200784032774e+308,"":"I","ekE2":"","4.379749936531839e+307":122}
return a/b*c
};
var argument8 = false;
var base_0 = [705,655,-100]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,655,-100]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,655,-100]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,655,-100]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someGen/test953.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)