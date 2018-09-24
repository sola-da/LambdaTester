





var callbackArguments = [];
var argument1 = 0;
var argument2 = 1.6202219505451485e+308;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[25] = 7.174040159543986e+307
return a*b*c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = null
base_1[3] = {"0":627,"59":714,"":0,"i":714,"xz":705,"]":"","8.21181307644572e+307":122,"M":"3Tpj5","2.3708334006254355e+307":""}
return a*b*c-d
};
var argument6 = null;
var argument7 = null;
var argument8 = 122;
var argument9 = {"X":893,"1.0269923949081668e+308":1.5155192563895582e+308,"":25,"2.476123568440325e+307":893,"-1":595,"5e":"G","1.48076383670272e+308":"eWxu","GF":"e60"};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = null
return a/b/c+d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = ["wbz","t",823,"I","0$",82,242,-1,-100,893]
argument13[2] = true
base_3[0][4] = {"100":1.7296169358978193e+308,"157":"","705":"","893":4.632480646451753e+307,"43c":100,"8.270896616260866e+307":"]w","1.3416259121428735e+307":1.1906204914095954e+308,"":213}
return a-b/c+d
};
var argument12 = r_3;
var base_0 = ["Iem","Cr("]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Iem","Cr("]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Iem","Cr("]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Iem","Cr("]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test238.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)