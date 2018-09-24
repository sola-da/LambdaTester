





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = {"":1.1284054497230859e+308,"1.653558426442335e+307":-100,"-100":122}
return a/b+c
};
var argument2 = false;
var argument3 = [157,59,714,403];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][4] = null
argument6[705] = ["YX","L","L","{"]
argument5[1.7121211182125595e+308] = {"242":969,"595":3.63389520861897e+307,"893":122,";":":","1.1065454274656359e+308":"I","#":893,"":"I%"}
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = ["-",403,"j"]
argument6['C'] = [607,213,")","B","!",714,607,126,"z<"]
argument7[242] = {"2.309442729121847e+306":1.690200784032774e+308,"":"I","ekE2":"","4.379749936531839e+307":122}
return a/b*c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1.7847438319683965e+308] = [705,49,460,242,595,618,0,969,655]
base_3[0][3] = false
return a*b-c
};
var argument8 = null;
var argument9 = 1.2688999712747213e+308;
var base_0 = [213,1.7976931348623157e+308,705,714]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,1.7976931348623157e+308,705,714]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test932.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)