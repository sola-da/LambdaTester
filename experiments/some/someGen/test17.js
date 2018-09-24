





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = [823,627]
return a*b-c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = null
return a-b*c
};
var argument3 = {"9.496421552453014e+307":"LU","4.783992874937659e+307":1.4726598482245428e+308,"-100":",<"};
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[2] = 1.6661264878100317e+307
base_2[1] = {"893":7.970713238389835e+307,"-1":0,"S;g":618,"":823,"9.064539944373592e+307":"","8.594402437432404e+307":157,"]":1.5355982435705995e+308,">'i":6.635500126601379e+307,"7.449915336269174e+307":""}
return a*b*c
};
var argument6 = 2.409229604689578e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = "mV"
base_3[8] = [100,82,122,403,627,783,213,82,59]
argument9 = 8.84247159316216e+307
return a-b+c
};
var argument8 = null;
var base_0 = [">","O",618,"="]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","O",618,"="]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","O",618,"="]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">","O",618,"="]
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
require("fs").writeFileSync("./experiments/some/someGen/test17.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)